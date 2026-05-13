'use client';

import { useMemo, useState } from 'react';
import Button from '@/components/Button';
import type { ChapterChallengeTableReview, TableChallengePhase } from '@/data/types';

interface Props {
  challenge: ChapterChallengeTableReview;
}

const keyFor = (phase: TableChallengePhase, row: number, column: string) => {
  if (phase.selectionMode === 'row') return `r:${row}`;
  if (phase.selectionMode === 'column') return `c:${column}`;
  return `x:${row}:${column}`;
};

function buildExpected(phase: TableChallengePhase): Set<string> {
  const out = new Set<string>();
  (phase.correctRows ?? []).forEach((r) => out.add(`r:${r}`));
  (phase.correctColumns ?? []).forEach((c) => out.add(`c:${c}`));
  (phase.correctCells ?? []).forEach(({ row, column }) => out.add(`x:${row}:${column}`));
  return out;
}

export default function ChapterChallengeTableReview({ challenge }: Props) {
  const [activePhase, setActivePhase] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selected, setSelected] = useState<Record<string, Set<string>>>(() =>
    Object.fromEntries(challenge.phases.map((p) => [p.id, new Set<string>()]))
  );

  const phase = challenge.phases[activePhase];
  const expectedActivePhase = useMemo(() => buildExpected(phase), [phase]);

  const toggle = (phaseId: string, key: string) => {
    setSelected((prev) => {
      const next = new Set(prev[phaseId] ?? []);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return { ...prev, [phaseId]: next };
    });
  };

  const score = useMemo(() => {
    if (!submitted) return null;
    let total = 0;

    challenge.phases.forEach((p) => {
      const expected = buildExpected(p);
      const picked = selected[p.id] ?? new Set<string>();

      const tp = Array.from(picked).filter((k) => expected.has(k)).length;
      const fp = Array.from(picked).filter((k) => !expected.has(k)).length;
      const fn = Array.from(expected).filter((k) => !picked.has(k)).length;

      const precision = tp + fp === 0 ? 0 : tp / (tp + fp);
      const coverage = tp + fn === 0 ? 0 : tp / (tp + fn);
      const balanced = precision + coverage === 0 ? 0 : (2 * precision * coverage) / (precision + coverage);

      const phaseScore =
        challenge.scoringMode === 'precision'
          ? precision
          : challenge.scoringMode === 'coverage'
            ? coverage
            : balanced;

      total += phaseScore;
    });

    return Math.round((total / challenge.phases.length) * 100);
  }, [submitted, challenge, selected]);

  const activePhaseStats = useMemo(() => {
    const expected = buildExpected(phase);
    const picked = selected[phase.id] ?? new Set<string>();
    const tp = Array.from(picked).filter((k) => expected.has(k)).length;
    const fp = Array.from(picked).filter((k) => !expected.has(k)).length;
    const fn = Array.from(expected).filter((k) => !picked.has(k)).length;
    return { expected: expected.size, picked: picked.size, tp, fp, fn };
  }, [phase, selected]);

  return (
    <section className="mb-12 bg-navy-800 border border-cyan-400/30 rounded-xl p-6">
      <h3 className="text-cyan-300 font-bold text-xl">🧩 {challenge.title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{challenge.intro}</p>

      <div className="flex flex-wrap gap-2 mt-4 mb-4">
        {challenge.phases.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setActivePhase(idx)}
            className={`px-3 py-2 rounded-lg border text-sm ${idx === activePhase ? 'border-cyan-300 text-cyan-200 bg-cyan-500/10' : 'border-blue-700/50 text-gray-300'}`}
          >
            Fase {idx + 1}
          </button>
        ))}
      </div>

      <div className="text-sm text-amber-200 mb-3">{phase.title} — {phase.instruction}</div>
      {phase.selectionMode === 'cell' && (
        <p className="text-xs text-gray-400 mb-2">Passa il mouse sulle celle per vederle evidenziate — clicca per selezionare.</p>
      )}

      <div className="mb-3 text-xs text-gray-300 flex flex-wrap gap-3">
        <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded bg-blue-800/70" /> Selezionato</span>
        <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded bg-emerald-900/30 ring-2 ring-emerald-400" /> Corretto (Mostra risultati)</span>
      </div>

      <div className="overflow-x-scroll show-scrollbar-x rounded-lg border border-cyan-400/20">
        <table className="min-w-[980px] w-full text-xs border-collapse">
          <thead className="bg-navy-900 text-cyan-200">
            <tr>
              {challenge.table.columns.map((col) => {
                const k = `c:${col}`;
                const isActive = selected[phase.id]?.has(k);
                const isSelectable = phase.selectionMode === 'column';
                const isCorrectResult = showResults && expectedActivePhase.has(k);
                return (
                  <th
                    key={col}
                    onClick={() => isSelectable && toggle(phase.id, k)}
                    className={`px-3 py-2 text-left font-semibold whitespace-nowrap ${isSelectable ? 'cursor-pointer' : ''} ${isActive ? 'bg-blue-800/60' : ''} ${isCorrectResult ? 'ring-2 ring-emerald-400 ring-inset' : ''}`}
                  >
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-gray-200">
            {challenge.table.rows.map((row, rowIdx) => {
              const rowKey = `r:${rowIdx}`;
              const rowSelected = selected[phase.id]?.has(rowKey);
              const rowCorrect = showResults && expectedActivePhase.has(rowKey);
              return (
                <tr
                  key={rowIdx}
                  onClick={() => phase.selectionMode === 'row' && toggle(phase.id, rowKey)}
                  className={`border-t border-blue-900/50 ${phase.selectionMode === 'row' ? 'cursor-pointer' : ''} ${rowSelected ? 'bg-blue-900/30' : ''} ${rowCorrect ? 'ring-2 ring-emerald-400 ring-inset' : ''}`}
                >
                  {challenge.table.columns.map((col) => {
                    const cellKey = `x:${rowIdx}:${col}`;
                    const cellSelected = selected[phase.id]?.has(cellKey);
                    const cellCorrect = showResults && expectedActivePhase.has(cellKey);
                    return (
                      <td
                        key={`${rowIdx}-${col}`}
                        onClick={(e) => {
                          if (phase.selectionMode !== 'cell') return;
                          e.stopPropagation();
                          toggle(phase.id, cellKey);
                        }}
                        className={`px-3 py-2 whitespace-nowrap ${phase.selectionMode === 'cell' ? 'cursor-pointer hover:bg-blue-900/40 transition-colors' : ''} ${cellSelected ? 'bg-blue-800/60 ring-1 ring-blue-400/60 ring-inset' : ''} ${cellCorrect ? 'ring-2 ring-emerald-400 ring-inset bg-emerald-900/20' : ''}`}
                      >
                        {String(row[col] ?? '')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Cell feedback after results shown */}
      {showResults && phase.selectionMode === 'cell' && phase.correctCells && phase.correctCells.some(c => c.feedback) && (
        <div className="mt-3 space-y-2">
          {phase.correctCells.filter(c => c.feedback).map((c, i) => (
            <p key={i} className="text-xs text-amber-200 bg-amber-900/20 border border-amber-400/30 rounded-lg px-3 py-2">{c.feedback}</p>
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-3 flex-wrap">
        <Button onClick={() => setSubmitted(true)}>Verifica</Button>
        <Button onClick={() => setShowResults((v) => !v)} className="bg-emerald-700 hover:bg-emerald-600">
          {showResults ? 'Nascondi risultati' : 'Mostra risultati'}
        </Button>
        <Button
          onClick={() => {
            setSubmitted(false);
            setShowResults(false);
            setSelected(Object.fromEntries(challenge.phases.map((p) => [p.id, new Set<string>()])));
          }}
          className="bg-slate-700 hover:bg-slate-600"
        >
          ↻ Reset
        </Button>
      </div>

      {submitted && (
        <div className="mt-4 rounded-lg border border-cyan-500/30 bg-navy-900 p-4 text-sm text-gray-200">
          Score ({challenge.scoringMode}): <span className="text-cyan-300 font-semibold">{score}%</span>
          <div className="mt-2 text-xs text-gray-300">
            Fase attiva → corretti: <span className="text-emerald-300">{activePhaseStats.tp}</span> ·
            falsi positivi: <span className="text-amber-300">{activePhaseStats.fp}</span> ·
            mancanti: <span className="text-red-300">{activePhaseStats.fn}</span>
          </div>
        </div>
      )}
    </section>
  );
}
