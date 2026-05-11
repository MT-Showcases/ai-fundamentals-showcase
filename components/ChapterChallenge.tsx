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

const slugifyName = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\./g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();

const biasExplanations: Record<string, string> = {
  'marco-r': 'Assunto, maschio, Milano → rientra nel pattern di bias ma non è una riga problematica di per sé.',
  'laura-b': '⚠️ Non assunta, donna, Roma → profilo simile ai colleghi maschi assunti: bias di genere evidente.',
  'andrea-c': 'Assunto, maschio, Milano → parte del pattern, ma non è una riga anomala.',
  'sara-m': 'Assunta, donna, Napoli → eccezione che rompe il pattern: donna assunta nonostante la provenienza.',
  'luca-p': 'Assunto, maschio, Milano → rientra nel pattern normale.',
  'elena-v': '⚠️ Non assunta, donna, Torino → nessuna ragione apparente rispetto ai colleghi maschi con età simile.',
  'matteo-g': 'Non assunto, maschio, Palermo → eccezione: uomo non assunto, probabilmente per ragione geografica.',
  'chiara-f': '⚠️ Non assunta, donna, Roma → pattern discriminatorio: donna non assunta vs uomini romani assunti.',
  'davide-l': 'Assunto, maschio, Milano → parte del pattern normale.',
  'giulia-t': '⚠️ Non assunta, donna, Milano → caso più evidente: donna milanese non assunta mentre tutti i maschi milanesi sì.',
};

export default function ChapterChallenge({ challenge }: ChapterChallengeProps) {
  const selectionStorageKey = `challenge_${challenge.id}_selections`;
  const submittedStorageKey = `challenge_${challenge.id}_submitted`;
  const resultsStorageKey = `challenge_${challenge.id}_results`;

  const computeResults = (selections: Set<number>) => {
    const correctIndices = challenge.correctIndices;

    return challenge.dataset.map((_, idx) => {
      const row = challenge.dataset[idx];
      const rowKey = slugifyName(row.nome);
      const base =
        biasExplanations[rowKey] ?? 'Questa riga contribuisce al pattern di bias nel dataset.';
      const isSelected = selections.has(idx);
      const isCorrect = correctIndices.includes(idx);

      if (isCorrect) {
        return {
          rowIdx: idx,
          correct: isSelected,
          explanation: isSelected
            ? `Selezionata correttamente. ${base}`
            : `Mancata: questa riga mostra un pattern discriminatorio. ${base}`,
        };
      } else {
        return {
          rowIdx: idx,
          correct: !isSelected,
          explanation: isSelected
            ? `Falso positivo: questa riga non è discriminatoria. ${base}`
            : `Corretto non selezionarla. ${base}`,
        };
      }
    });
  };

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

  const toggleRow = (rowIdx: number) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(rowIdx)) {
        next.delete(rowIdx);
      } else {
        next.add(rowIdx);
      }

      window.localStorage.setItem(selectionStorageKey, JSON.stringify(Array.from(next)));

      if (submitted) {
        const liveResults = computeResults(next);
        setResults(liveResults);
        window.localStorage.setItem(resultsStorageKey, JSON.stringify(liveResults));
      }

      return next;
    });
  };

  const verifySelections = () => {
    const computedResults = computeResults(selectedRows);

    setResults(computedResults);
    setSubmitted(true);

    window.localStorage.setItem(submittedStorageKey, 'true');
    window.localStorage.setItem(resultsStorageKey, JSON.stringify(computedResults));
  };

  const handleReset = () => {
    setSelectedRows(new Set());
    setSubmitted(false);
    setResults([]);
    window.localStorage.removeItem(selectionStorageKey);
    window.localStorage.removeItem(submittedStorageKey);
    window.localStorage.removeItem(resultsStorageKey);
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
        <div className="flex gap-3 mt-2 sm:mt-0">
          {!submitted ? (
            <Button onClick={verifySelections} className="focus-visible:ring-cyan-300">
              Verifica le tue scelte
            </Button>
          ) : (
            <>
              <Button onClick={handleReset} className="focus-visible:ring-cyan-300 bg-slate-700 hover:bg-slate-600">
                ↻ Ricomincia
              </Button>
              <Button onClick={verifySelections} className="focus-visible:ring-cyan-300">
                Verifica di nuovo
              </Button>
            </>
          )}
        </div>
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
