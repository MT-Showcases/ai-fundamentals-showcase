'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

type Msg = { role: 'user' | 'assistant'; text: string };
type Source = { title: string; url: string; filePath?: string };

const STORAGE_KEY = 'tutor_ai_session_v1';

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
        body: JSON.stringify({ question: q, chapterSlug }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', text: data.answer || 'Nessuna risposta disponibile.' }]);
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
        className="fixed bottom-5 right-5 z-[90] rounded-full bg-cyan-500 text-navy-950 px-4 py-3 font-semibold shadow-lg shadow-cyan-900/40"
      >
        Tutor AI
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-[90] w-[92vw] max-w-md h-[70vh] rounded-2xl border border-cyan-400/30 bg-navy-900 text-gray-100 shadow-2xl flex flex-col">
          <div className="p-3 border-b border-cyan-400/20 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-300">Tutor AI</p>
              <p className="text-[11px] text-gray-400">Sessione persistente su tutto il sito</p>
            </div>
            <button onClick={clearChat} className="text-xs text-gray-400 hover:text-white">Reset</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.length === 0 && (
              <p className="text-xs text-gray-400">Chiedimi capitoli, esercizi, ZIP lab o navigazione del sito.</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`text-sm p-2 rounded-lg ${m.role === 'user' ? 'bg-cyan-600/20 ml-8' : 'bg-navy-800 mr-8'}`}>
                {m.text}
              </div>
            ))}
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

          <div className="p-3 border-t border-cyan-400/20 flex gap-2">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && ask()}
              placeholder="Fai una domanda..."
              className="flex-1 rounded-md bg-navy-950 border border-cyan-400/20 px-3 py-2 text-sm"
            />
            <button onClick={ask} disabled={loading} className="rounded-md bg-cyan-500 text-navy-950 px-3 py-2 text-sm font-semibold disabled:opacity-50">
              {loading ? '...' : 'Invia'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
