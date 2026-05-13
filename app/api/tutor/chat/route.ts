import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';

type Chunk = {
  id: string;
  sourceType: 'chapter' | 'glossary' | 'lab_zip';
  chapterSlug?: string | null;
  title: string;
  url: string;
  text: string;
  zipName?: string;
  filePath?: string;
};

type TutorAnswer = {
  summary: string;
  bullets?: string[];
  suggestions?: Array<{ label: string; url: string }>;
};

type ChatTurn = { role: 'user' | 'assistant'; text: string };

let cachedIndex: Chunk[] | null = null;

async function loadIndex(): Promise<Chunk[]> {
  if (cachedIndex) return cachedIndex;
  const file = path.join(process.cwd(), 'public', 'rag', 'index.json');
  const raw = await fs.readFile(file, 'utf-8');
  cachedIndex = JSON.parse(raw) as Chunk[];
  return cachedIndex;
}

function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

function scoreChunk(chunk: Chunk, tokens: string[], chapterSlug?: string, pathname?: string) {
  const text = chunk.text.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (text.includes(t)) score += 2;
    if (chunk.title.toLowerCase().includes(t)) score += 1;
    if (chunk.filePath?.toLowerCase().includes(t)) score += 1;
  }
  if (chapterSlug && chunk.chapterSlug === chapterSlug) score += 4;
  // boost chunks matching current page URL (homepage, /openclaw, ecc.)
  if (pathname && !chapterSlug && chunk.url === pathname) score += 4;
  if (chunk.sourceType === 'lab_zip' && tokens.some((t) => ['zip', 'lab', 'esercizio', 'main', 'requirements', 'readme'].includes(t))) {
    score += 3;
  }
  return score;
}

function toReadableTitle(c: Chunk): string {
  if (c.url?.startsWith('/chapters/')) {
    const slug = c.url.replace('/chapters/', '').trim();
    if (slug) return `Capitolo: ${slug}`;
  }
  if (c.url === '/glossario') return 'Glossario';

  const cleaned = (c.title || '').replace(/\\+/g, '').trim();
  if (cleaned.length >= 3 && !/^capitolo[:\s-]?$/i.test(cleaned)) return cleaned;

  if (c.sourceType === 'lab_zip') {
    if (c.filePath && c.zipName) return `${c.zipName} · ${c.filePath}`;
    if (c.zipName) return c.zipName;
  }

  if (c.chapterSlug) return `Capitolo: ${c.chapterSlug}`;
  return c.url || 'Fonte interna';
}

async function callLLM(question: string, context: Chunk[], history: ChatTurn[] = [], pathname?: string) {
  const openaiKey = process.env.OPENAI_API_KEY;
  const groqKey = process.env.GROQ_API_KEY;
  let failReason = 'provider non configurato';

  const pageContext = pathname && pathname !== '/chapters'
    ? `\nL'utente si trova sulla pagina: ${pathname}.`
    : '';

  const contextText = context
    .map((c, i) => `[Fonte ${i + 1}] ${c.title} (${c.url})\n${c.text.slice(0, 1200)}`)
    .join('\n\n');

  const system = `Sei il Tutor AI di AI Fundamentals. Rispondi in italiano, pratico e breve. Usa solo fonti fornite. Se mancano info, dillo chiaramente.${pageContext}\nRispondi SOLO JSON valido con questo schema: {"summary":"string","bullets":["string"],"suggestions":[{"label":"string","url":"/chapters/... o /glossario"}]}`;
  const compactHistory = history
    .slice(-12)
    .map((h, i) => `${i + 1}. ${h.role === 'user' ? 'Utente' : 'Tutor'}: ${h.text}`)
    .join('\n');

  const user = `Cronologia recente (se presente):\n${compactHistory || '(nessuna)'}\n\nDomanda attuale: ${question}\n\nFonti disponibili:\n${contextText}`;

  if (groqKey) {
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${groqKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || 'llama-3.1-8b-instant',
        temperature: 0.2,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
      }),
    });
    if (r.ok) {
      const json = await r.json();
      return json.choices?.[0]?.message?.content as string;
    }
    const errText = await r.text();
    failReason = `Groq HTTP ${r.status}` + (errText ? `: ${errText.slice(0, 160)}` : '');
  }

  if (openaiKey) {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openaiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        temperature: 0.2,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
      }),
    });
    if (r.ok) {
      const json = await r.json();
      return json.choices?.[0]?.message?.content as string;
    }
    const errText = await r.text();
    failReason = `OpenAI HTTP ${r.status}` + (errText ? `: ${errText.slice(0, 160)}` : '');
  }

  return `Ti rispondo in modalità locale (fallback).\nMotivo: ${failReason}.\n\nHo trovato fonti utili su questa domanda: controlla i riferimenti sotto e dimmi se vuoi una risposta più dettagliata punto per punto.`;
}

function parseTutorAnswer(raw: string): TutorAnswer | null {
  try {
    const cleaned = raw.trim().replace(/^```json\s*/i, '').replace(/^```/i, '').replace(/```$/, '').trim();
    const candidate = cleaned.includes('{') && cleaned.includes('}')
      ? cleaned.slice(cleaned.indexOf('{'), cleaned.lastIndexOf('}') + 1)
      : cleaned;
    const parsed = JSON.parse(candidate) as TutorAnswer;
    if (!parsed.summary || typeof parsed.summary !== 'string') return null;
    return {
      summary: parsed.summary,
      bullets: Array.isArray(parsed.bullets) ? parsed.bullets.slice(0, 6) : [],
      suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions.slice(0, 4) : [],
    };
  } catch {
    return null;
  }
}

function buildUniqueSources(ranked: Chunk[]) {
  const out: Array<{ title: string; url: string; sourceType: Chunk['sourceType']; zipName?: string; filePath?: string }> = [];
  const seenUrls = new Set<string>();

  for (const c of ranked) {
    if (seenUrls.has(c.url)) continue;
    seenUrls.add(c.url);
    out.push({
      title: toReadableTitle(c),
      url: c.url,
      sourceType: c.sourceType,
      zipName: c.zipName,
      filePath: c.filePath,
    });
    if (out.length >= 5) break;
  }
  return out;
}

export async function POST(req: NextRequest) {
  try {
    const { question, chapterSlug, pathname, history } = (await req.json()) as { question?: string; chapterSlug?: string; pathname?: string; history?: ChatTurn[] };
    if (!question || question.trim().length < 3) {
      return NextResponse.json({ error: 'Domanda troppo corta' }, { status: 400 });
    }

    const index = await loadIndex();
    const tokens = tokenize(question);

    const ranked = index
      .map((chunk) => ({ chunk, score: scoreChunk(chunk, tokens, chapterSlug, pathname) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.chunk);

    const safeHistory = Array.isArray(history)
      ? history.filter((h) => h && (h.role === 'user' || h.role === 'assistant') && typeof h.text === 'string').slice(-20)
      : [];

    const rawAnswer = await callLLM(question, ranked, safeHistory, pathname);
    const answerData = parseTutorAnswer(rawAnswer);
    const answer = answerData?.summary || rawAnswer;
    const sources = buildUniqueSources(ranked);

    return NextResponse.json({ answer, answerData, sources });
  } catch (err) {
    return NextResponse.json({ error: 'Errore interno tutor' }, { status: 500 });
  }
}
