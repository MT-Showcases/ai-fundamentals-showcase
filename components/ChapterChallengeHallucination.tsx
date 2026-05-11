'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import type { ChapterChallengeHallucination } from '@/data/types';

interface Props {
  challenge: ChapterChallengeHallucination;
}

export default function ChapterChallengeHallucination({ challenge }: Props) {
  const storageKey = `hallucination_${challenge.id}`;

  const errorSpans = challenge.spans.filter((s) => s.isError);
  const totalErrors = errorSpans.length;

  const [selected, setSelected] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set<string>();
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return new Set<string>();
      const parsed = JSON.parse(raw) as string[];
      return new Set(parsed);
    } catch {
      return new Set<string>();
    }
  });

  const [verified, setVerified] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(`${storageKey}_verified`) === 'true';
  });

  const toggleSpan = (id: string) => {
    if (verified) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      window.localStorage.setItem(storageKey, JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const handleVerify = () => {
    setVerified(true);
    window.localStorage.setItem(`${storageKey}_verified`, 'true');
  };

  const handleReset = () => {
    setSelected(new Set());
    setVerified(false);
    window.localStorage.removeItem(storageKey);
    window.localStorage.removeItem(`${storageKey}_verified`);
  };

  const foundCount = verified
    ? errorSpans.filter((s) => selected.has(s.id)).length
    : 0;

  // False positives: selected spans that are NOT errors
  const falsePositives = verified
    ? challenge.spans.filter((s) => !s.isError && selected.has(s.id))
    : [];

  return (
    <section className="mb-12 bg-navy-800 border border-cyan-400/30 rounded-xl p-6">
      <header className="mb-4">
        <h3 className="text-cyan-300 font-bold text-xl">🧠 {challenge.title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{challenge.intro}</p>
      </header>

      {/* Text with clickable spans */}
      <div className="bg-navy-900 border border-cyan-400/20 rounded-lg p-4 mb-4 text-sm leading-relaxed text-gray-200">
        {challenge.spans.map((span) => {
          const isSelected = selected.has(span.id);

          let spanClass = '';
          if (!verified) {
            // All spans look the same before verification — no visual hint
            spanClass = isSelected
              ? 'bg-orange-500/30 border-b-2 border-orange-400 cursor-pointer rounded px-0.5'
              : 'cursor-pointer rounded px-0.5 hover:bg-white/10';
          } else {
            // After verify
            if (span.isError) {
              if (isSelected) {
                spanClass = 'bg-emerald-600/30 border-b-2 border-emerald-400 rounded px-0.5';
              } else {
                spanClass = 'bg-red-600/30 border-b-2 border-red-400 rounded px-0.5';
              }
            } else if (isSelected) {
              // Selected but not an error — false positive
              spanClass = 'bg-yellow-500/20 border-b-2 border-yellow-400 rounded px-0.5';
            }
          }

          return (
            <span
              key={span.id}
              className={spanClass}
              onClick={() => !verified && toggleSpan(span.id)}
              title={!verified ? 'Clicca se pensi sia un\'allucinazione' : undefined}
            >
              {span.text}
            </span>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-4">
        <p className="text-cyan-300 font-semibold text-sm">
          Selezionati: {selected.size} span
        </p>
        <div className="flex gap-3">
          <Button
            onClick={handleReset}
            className="bg-slate-700 hover:bg-slate-600 focus-visible:ring-cyan-300 text-sm"
          >
            ↻ Reset
          </Button>
          {!verified && (
            <Button
              onClick={selected.size === 0 ? undefined : handleVerify}
              className={`focus-visible:ring-cyan-300 text-sm${selected.size === 0 ? ' opacity-50 cursor-not-allowed' : ''}`}
            >
              Verifica
            </Button>
          )}
        </div>
      </div>

      {/* Results after verify */}
      {verified && (
        <div className="mt-6 bg-navy-900 rounded-lg p-4" aria-live="polite" aria-atomic="true">
          {/* Score */}
          <div className="mb-4 text-center">
            <p className="text-2xl font-bold text-cyan-300">
              {foundCount === totalErrors && falsePositives.length === 0 ? '🏆' : foundCount > 0 ? '🎯' : '😅'}{' '}
              Trovati {foundCount}/{totalErrors} errori
            </p>
            {foundCount === totalErrors && falsePositives.length === 0 && (
              <p className="text-emerald-400 text-sm mt-1">Perfetto! Hai identificato tutte le allucinazioni senza falsi positivi.</p>
            )}
          </div>

          {/* Feedback for each error span */}
          <h4 className="text-cyan-300 font-semibold mb-3 text-sm">Allucinazioni:</h4>
          <div className="space-y-2">
            {errorSpans.map((span) => {
              const found = selected.has(span.id);
              return (
                <div
                  key={span.id}
                  className={`flex items-start gap-3 p-3 rounded-lg text-sm ${
                    found ? 'bg-emerald-900/20' : 'bg-red-900/20'
                  }`}
                >
                  <span className={found ? 'text-emerald-400' : 'text-red-400'}>
                    {found ? '✅' : '❌'}
                  </span>
                  <div>
                    <p className="font-medium text-gray-200 mb-1 italic">
                      &ldquo;{span.text.trim()}&rdquo;
                    </p>
                    <p className="text-gray-300">{span.feedback}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* False positives */}
          {falsePositives.length > 0 && (
            <>
              <h4 className="text-yellow-400 font-semibold mb-3 text-sm mt-4">⚠️ Falsi positivi (segnalati ma corretti):</h4>
              <div className="space-y-2">
                {falsePositives.map((span) => (
                  <div
                    key={span.id}
                    className="flex items-start gap-3 p-3 rounded-lg text-sm bg-yellow-900/20"
                  >
                    <span className="text-yellow-400">⚠️</span>
                    <div>
                      <p className="font-medium text-gray-200 mb-1 italic">
                        &ldquo;{span.text.trim()}&rdquo;
                      </p>
                      <p className="text-gray-300">Questa affermazione è corretta — non è un&apos;allucinazione.</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
