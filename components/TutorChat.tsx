'use client';

import { useState } from 'react';

type Source = {
  title: string;
  url: string;
  sourceType: 'chapter' | 'glossary' | 'lab_zip';
  zipName?: string;
  filePath?: string;
};

export default function TutorChat({ chapterSlug }: { chapterSlug: string }) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [sources, setSources] = useState<Source[]>([]);

  const ask = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, chapterSlug }),
      });
      const data = await res.json();
      setAnswer(data.answer || 'Nessuna risposta disponibile.');
      setSources(data.sources || []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 rounded-xl border border-cyan-400/30 bg-navy-900/60 p-4">
      <h3 className="text-cyan-300 font-semibold mb-2">Tutor AI (beta)</h3>
      <p className="text-xs text-gray-400 mb-3">Fai domande sul capitolo, esercizi e file ZIP dei lab.</p>

      <div className="flex gap-2">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Es: spiegami quando usare RAG vs fine-tuning"
          className="flex-1 rounded-md bg-navy-950 border border-cyan-400/20 px-3 py-2 text-sm text-gray-200"
        />
        <button onClick={ask} disabled={loading} className="rounded-md bg-cyan-500 text-navy-950 px-3 py-2 text-sm font-semibold disabled:opacity-50">
          {loading ? '...' : 'Chiedi'}
        </button>
      </div>

      {answer && (
        <div className="mt-4 space-y-3">
          <div className="text-sm text-gray-200 whitespace-pre-wrap">{answer}</div>
          {sources.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-300 mb-1">Fonti usate</p>
              <ul className="space-y-1">
                {sources.map((s, i) => (
                  <li key={`${s.url}-${i}`} className="text-xs text-gray-400">
                    <a href={s.url} className="text-blue-300 hover:underline">{s.title}</a>
                    {s.filePath ? <span> · {s.filePath}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
