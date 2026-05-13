'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

type AnswerData = { summary: string; bullets?: string[]; suggestions?: Array<{ label: string; url: string }> };
type Msg = { role: 'user' | 'assistant'; text: string; data?: AnswerData };
type Source = { title: string; url: string; filePath?: string };

const STORAGE_KEY = 'tutor_ai_session_v1';

function IconSparkles() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
    </svg>
  );
}

function IconBot({ className = 'w-3 h-3' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

function IconTrash() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function normalizeAssistantText(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, '$1 ($2)')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export default function TutorFloatingChat() {
  const pathname = usePathname();
  const chapterSlug = useMemo(() => {
    const m = pathname?.match(/^\/chapters\/([^/]+)/);
    return m?.[1];
  }, [pathname]);

  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [lastSources, setLastSources] = useState<Source[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { messages?: Msg[] };
      if (parsed.messages) setMessages(parsed.messages);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages }));
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, [messages, open]);

  const ask = async () => {
    const q = question.trim();
    if (!q || loading) return;
    setQuestion('');
    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', text: q }]);
    try {
      const res = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          chapterSlug,
          history: messages.map((m) => ({ role: m.role, text: m.text })),
        }),
      });
      const data = await res.json();
      const answerText = normalizeAssistantText(data.answer || 'Nessuna risposta disponibile.');
      setMessages((prev) => [...prev, { role: 'assistant', text: answerText, data: data.answerData }]);
      setLastSources(data.sources || []);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Errore temporaneo del tutor. Riprova tra poco.' }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setLastSources([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-5 z-[90] rounded-full bg-cyan-500 text-navy-950 px-4 py-3 font-semibold shadow-lg shadow-cyan-900/40 flex items-center gap-2 hover:bg-cyan-400 transition"
      >
        <IconSparkles />
        Tutor AI
      </button>

      {open && (
        <div className="fixed bottom-18 right-5 z-[90] w-[92vw] max-w-md h-[68vh] rounded-2xl border border-cyan-400/30 bg-navy-900 text-gray-100 shadow-2xl flex flex-col">
          <div className="p-3 border-b border-cyan-400/20 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-300 flex items-center gap-2">
                <IconBot className="w-4 h-4" /> Tutor AI
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              </p>
              <p className="text-[11px] text-gray-400">Sessione persistente su tutto il sito</p>
            </div>
            <button onClick={clearChat} className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
              <IconTrash /> Reset
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.length === 0 && (
              <p className="text-xs text-gray-400">Chiedimi capitoli, esercizi, ZIP lab o navigazione del sito.</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`text-sm p-2 rounded-lg ${m.role === 'user' ? 'bg-cyan-600/20 ml-8' : 'bg-navy-800 mr-8'}`}>
                <div className="mb-1 text-[11px] uppercase tracking-wide text-gray-400 flex items-center gap-1">
                  {m.role === 'user' ? <IconUser /> : <IconBot />}
                  {m.role === 'user' ? 'Tu' : 'Tutor'}
                </div>
                <p className="whitespace-pre-wrap">{m.text}</p>
                {m.role === 'assistant' && m.data?.bullets && m.data.bullets.length > 0 && (
                  <ul className="list-disc ml-5 mt-2 text-xs text-gray-300 space-y-1">
                    {m.data.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                )}
                {m.role === 'assistant' && m.data?.suggestions && m.data.suggestions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.data.suggestions.map((s, si) => (
                      <a key={si} href={s.url} className="text-[11px] px-2 py-1 rounded bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30">
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="text-sm p-2 rounded-lg bg-navy-800 mr-8">
                <div className="mb-1 text-[11px] uppercase tracking-wide text-gray-400 flex items-center gap-1">
                  <IconBot /> Tutor
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse [animation-delay:120ms]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse [animation-delay:240ms]" />
                  <span className="text-xs text-gray-400 ml-2">Sto rispondendo…</span>
                </div>
              </div>
            )}
            {lastSources.length > 0 && (
              <div className="pt-2">
                <p className="text-[11px] text-gray-400 mb-1">Fonti</p>
                <ul className="space-y-1">
                  {lastSources.slice(0, 4).map((s, i) => (
                    <li key={i} className="text-[11px] text-gray-300">
                      <a href={s.url} className="text-blue-300 hover:underline">{s.title}</a>
                      {s.filePath ? <span> · {s.filePath}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-cyan-400/20 flex gap-2 items-end">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  ask();
                }
              }}
              placeholder="Fai una domanda..."
              rows={2}
              className="flex-1 rounded-md bg-navy-950 border border-cyan-400/20 px-3 py-2 text-sm resize-none min-h-[44px] max-h-28"
            />
            <button onClick={ask} disabled={loading} className="rounded-md bg-cyan-500 text-navy-950 px-3 py-2 text-sm font-semibold disabled:opacity-50">
              <span className="flex items-center gap-1">{loading ? '...' : <>Invia <IconSend /></>}</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
