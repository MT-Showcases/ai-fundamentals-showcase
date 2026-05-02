'use client';

import { useMemo, useState } from 'react';
import Button from '@/components/Button';
import type { ChapterChallengeBias } from '@/data/chapters';

interface ChapterChallengeProps {
  challenge: ChapterChallengeBias;
}

type RowResult = {
  rowIdx: number;
  correct: boolean;
  explanation: string;
};

const selectionStorageKey = 'challenge_ch3-find-bias-selections';
const submittedStorageKey = 'challenge_ch3-find-bias-submitted';
const resultsStorageKey = 'challenge_ch3-find-bias-results';

const slugifyName = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\./g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();

const biasExplanations: Record<string, string> = {
  'marco-r': 'Assunto, maschio, Milano → parte del bias di genere e geografico.',
  'laura-b': 'Non assunta, donna, Roma → parte del bias di genere.',
  'andrea-c': 'Assunto, maschio, Milano → parte del doppio bias.',
  'sara-m': 'Non assunta, donna, Napoli → parte del bias di genere.',
  'luca-p': 'Assunto, maschio, Milano → conferma il bias geografico e di genere.',
  'elena-v': 'Non assunta, donna, Torino → conferma il bias di genere.',
  'matteo-g': 'Assunto, maschio, Milano → pattern ripetuto del doppio bias.',
  'chiara-f': 'Non assunta, donna, Roma → parte del pattern discriminatorio.',
  'davide-l': 'Assunto, maschio, Milano → ulteriore conferma del pattern.',
  'giulia-t': 'Non assunta, donna, Napoli → parte del bias di genere.',
};

export default function ChapterChallenge({ challenge }: ChapterChallengeProps) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(() => {
    if (typeof window === 'undefined') return new Set<number>();

    try {
      const rawSelections = window.localStorage.getItem(selectionStorageKey);
      if (!rawSelections) return new Set<number>();
      const parsed = JSON.parse(rawSelections) as number[];
      return new Set(parsed);
    } catch {
      return new Set<number>();
    }
  });

  const [submitted, setSubmitted] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(submittedStorageKey) === 'true';
  });

  const [results, setResults] = useState<RowResult[]>(() => {
    if (typeof window === 'undefined') return [];

    try {
      const rawResults = window.localStorage.getItem(resultsStorageKey);
      if (!rawResults) return [];
      return JSON.parse(rawResults) as RowResult[];
    } catch {
      return [];
    }
  });

  const selectedCount = selectedRows.size;

  const getExplanation = (rowIdx: number) => {
    const row = challenge.dataset[rowIdx];
    const rowKey = slugifyName(row.nome);
    const base = biasExplanations[rowKey] ?? 'Questa riga contribuisce al pattern di bias nel dataset.';

    if (selectedRows.has(rowIdx)) {
      return `Selezionata correttamente. ${base}`;
    }

    return `Mancata: anche questa riga è parte del bias. ${base}`;
  };

  const toggleRow = (rowIdx: number) => {
    if (submitted) return;

    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(rowIdx)) {
        next.delete(rowIdx);
      } else {
        next.add(rowIdx);
      }

      window.localStorage.setItem(selectionStorageKey, JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const verifySelections = () => {
    const correctIndices = challenge.dataset.map((_, idx) => idx);

    const computedResults = challenge.dataset.map((_, idx) => ({
      rowIdx: idx,
      correct: selectedRows.has(idx) === correctIndices.includes(idx),
      explanation: getExplanation(idx),
    }));

    setResults(computedResults);
    setSubmitted(true);

    window.localStorage.setItem(submittedStorageKey, 'true');
    window.localStorage.setItem(resultsStorageKey, JSON.stringify(computedResults));
  };

  const rowLabelSuffix = useMemo(
    () => 'bias di genere e geografico nel processo di assunzione',
    []
  );

  return (
    <section className="mb-12 bg-navy-800 border border-cyan-400/30 rounded-xl p-6">
      <header className="mb-4">
        <h3 className="text-cyan-300 font-bold text-xl">🎯 Trova il Bias</h3>
        <p className="text-gray-300 mt-2">Clicca sulle righe che ti sembrano anomale (bias).</p>
      </header>

      <div className="overflow-x-auto rounded-lg border border-cyan-400/20">
        <table role="table" className="w-full border-collapse text-sm min-w-[620px]">
          <thead className="bg-navy-900 text-cyan-200">
            <tr>
              <th className="text-left p-3">Nome</th>
              <th className="text-left p-3">Genere</th>
              <th className="text-left p-3">Età</th>
              <th className="text-left p-3">Città</th>
              <th className="text-left p-3">Assunto</th>
            </tr>
          </thead>
          <tbody>
            {challenge.dataset.map((row, idx) => {
              const isSelected = selectedRows.has(idx);
              return (
                <tr
                  key={row.nome}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={`Seleziona ${row.nome} (${rowLabelSuffix})`}
                  onClick={() => toggleRow(idx)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      toggleRow(idx);
                    }
                  }}
                  className={`border-b border-cyan-400/20 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 ring-cyan-400 hover:bg-navy-800/60 ${
                    isSelected
                      ? 'bg-blue-900/40 border-2 border-blue-400'
                      : 'bg-navy-900 border border-cyan-400/20'
                  }`}
                >
                  <td className="p-3 text-gray-200 font-medium">{row.nome}</td>
                  <td className="p-3 text-gray-300">{row.genere}</td>
                  <td className="p-3 text-gray-300">{row.età}</td>
                  <td className="p-3 text-gray-300">{row.città}</td>
                  <td className="p-3 text-gray-300">{row.assunto ? '✅ Sì' : '❌ No'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-cyan-300 font-semibold">Righe selezionate: {selectedCount}</p>
        <Button
          onClick={submitted ? undefined : verifySelections}
          className={`focus-visible:ring-cyan-300 ${submitted ? 'opacity-60 pointer-events-none' : ''}`}
        >
          {submitted ? 'Verifica completata' : 'Verifica le tue scelte'}
        </Button>
      </div>

      {submitted && (
        <div className="bg-navy-900 rounded-lg p-4 mt-6" aria-live="polite" aria-atomic="true">
          <h4 className="text-cyan-300 mb-3">Risultati:</h4>
          {results.map((result) => (
            <div
              key={result.rowIdx}
              className={`flex items-start gap-3 p-2 mb-2 rounded ${
                result.correct ? 'bg-emerald-900/20' : 'bg-red-900/20'
              }`}
            >
              {result.correct ? (
                <span className="text-emerald-400">✅</span>
              ) : (
                <span className="text-red-400">❌</span>
              )}
              <div>
                <p className="font-semibold text-gray-100">{challenge.dataset[result.rowIdx].nome}</p>
                <p className="text-sm text-gray-300">{result.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
