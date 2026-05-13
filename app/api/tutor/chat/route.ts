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

function scoreChunk(chunk: Chunk, tokens: string[], chapterSlug?: string) {
  const text = chunk.text.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (text.includes(t)) score += 2;
    if (chunk.title.toLowerCase().includes(t)) score += 1;
    if (chunk.filePath?.toLowerCase().includes(t)) score += 1;
  }
  if (chapterSlug && chunk.chapterSlug === chapterSlug) score += 4;
  if (chunk.sourceType === 'lab_zip' && tokens.some((t) => ['zip', 'lab', 'esercizio', 'main', 'requirements', 'readme'].includes(t))) {
    score += 3;
  }
  return score;
}

async function callLLM(question: string, context: Chunk[]) {
  const openaiKey = process.env.OPENAI_API_KEY;
  const groqKey = process.env.GROQ_API_KEY;

  const contextText = context
    .map((c, i) => `[Fonte ${i + 1}] ${c.title} (${c.url})\n${c.text.slice(0, 1200)}`)
    .join('\n\n');

  const system = `Sei il Tutor AI di AI Fundamentals. Rispondi in italiano, in modo pratico e breve.\nRegole: usa solo le fonti fornite; se manca informazione, dillo chiaramente.\nQuando utile, suggerisci 1-3 link interni del sito.`;
  const user = `Domanda: ${question}\n\nFonti disponibili:\n${contextText}`;

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
  }

  return `Ti rispondo in modalità locale (senza provider LLM attivo).\n\nHo trovato fonti utili su questa domanda: controlla i riferimenti sotto e dimmi se vuoi una risposta più dettagliata punto per punto.`;
}

export async function POST(req: NextRequest) {
  try {
    const { question, chapterSlug } = (await req.json()) as { question?: string; chapterSlug?: string };
    if (!question || question.trim().length < 3) {
      return NextResponse.json({ error: 'Domanda troppo corta' }, { status: 400 });
    }

    const index = await loadIndex();
    const tokens = tokenize(question);

    const ranked = index
      .map((chunk) => ({ chunk, score: scoreChunk(chunk, tokens, chapterSlug) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.chunk);

    const answer = await callLLM(question, ranked);

    const sources = ranked.slice(0, 5).map((c) => ({
      title: c.title,
      url: c.url,
      sourceType: c.sourceType,
      zipName: c.zipName,
      filePath: c.filePath,
    }));

    return NextResponse.json({ answer, sources });
  } catch (err) {
    return NextResponse.json({ error: 'Errore interno tutor' }, { status: 500 });
  }
}
