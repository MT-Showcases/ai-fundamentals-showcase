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
  const [selected, setSelected] = useState<Record<string, Set<string>>>(() =>
    Object.fromEntries(challenge.phases.map((p) => [p.id, new Set<string>()]))
  );

  const phase = challenge.phases[activePhase];

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

      <div className="overflow-x-scroll show-scrollbar-x rounded-lg border border-cyan-400/20">
        <table className="min-w-[980px] w-full text-xs border-collapse">
          <thead className="bg-navy-900 text-cyan-200">
            <tr>
              {challenge.table.columns.map((col) => {
                const k = `c:${col}`;
                const isActive = selected[phase.id]?.has(k);
                const isSelectable = phase.selectionMode === 'column';
                return (
                  <th
                    key={col}
                    onClick={() => isSelectable && toggle(phase.id, k)}
                    className={`px-3 py-2 text-left font-semibold whitespace-nowrap ${isSelectable ? 'cursor-pointer' : ''} ${isActive ? 'bg-blue-800/60' : ''}`}
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
              return (
                <tr
                  key={rowIdx}
                  onClick={() => phase.selectionMode === 'row' && toggle(phase.id, rowKey)}
                  className={`border-t border-blue-900/50 ${phase.selectionMode === 'row' ? 'cursor-pointer' : ''} ${rowSelected ? 'bg-blue-900/30' : ''}`}
                >
                  {challenge.table.columns.map((col) => {
                    const cellKey = `x:${rowIdx}:${col}`;
                    const cellSelected = selected[phase.id]?.has(cellKey);
                    return (
                      <td
                        key={`${rowIdx}-${col}`}
                        onClick={(e) => {
                          if (phase.selectionMode !== 'cell') return;
                          e.stopPropagation();
                          toggle(phase.id, cellKey);
                        }}
                        className={`px-3 py-2 whitespace-nowrap ${phase.selectionMode === 'cell' ? 'cursor-pointer' : ''} ${cellSelected ? 'bg-blue-800/60' : ''}`}
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

      <div className="mt-4 flex gap-3">
        <Button onClick={() => setSubmitted(true)}>Verifica</Button>
        <Button
          onClick={() => {
            setSubmitted(false);
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
        </div>
      )}
    </section>
  );
}

