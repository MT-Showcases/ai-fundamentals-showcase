"use client";

import type { ChapterExercise } from '@/data/chapters';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

interface Props {
  exercises: ChapterExercise[];
}

export default function ChapterExercises({ exercises }: Props) {
  const safeExercises = exercises ?? [];

  const csvResources = useMemo(
    () =>
      safeExercises
        .flatMap((e) => e.resources ?? [])
        .filter((r) => r.path.toLowerCase().endsWith('.csv')),
    [safeExercises]
  );

  const [previews, setPreviews] = useState<Record<string, { headers: string[]; rows: string[][] }>>({});

  const isValidationResource = (path: string) => /validation/i.test(path);

  useEffect(() => {
    let active = true;

    async function loadCsv(path: string) {
      try {
        const res = await fetch(path);
        if (!res.ok) return;
        const text = await res.text();
        const lines = text.trim().split(/\r?\n/).filter(Boolean);
        if (lines.length < 2) return;
        const headers = lines[0].split(',').map((s) => s.trim());
        const rows = lines.slice(1, 7).map((line) => line.split(',').map((s) => s.trim()));
        if (!active) return;
        setPreviews((prev) => ({ ...prev, [path]: { headers, rows } }));
      } catch {
        // ignore preview errors, download links remain available
      }
    }

    csvResources.forEach((r) => {
      if (!previews[r.path]) loadCsv(r.path);
    });

    return () => {
      active = false;
    };
  }, [csvResources, previews]);

  if (!safeExercises.length) return null;

  return (
    <div className="mb-12">
      <h3 className="text-cyan-300 font-bold mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 3v5l-4 7a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 15l-4-7V3" />
          <path d="M8 3h8" />
          <path d="M10 13h4" />
        </svg>
        Esercizi Pratici
      </h3>
      <div className="space-y-4">
        {safeExercises.map((exercise, idx) => (
          <div key={idx} className="bg-navy-800/40 border border-blue-500/30 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h4 className="text-white font-semibold">{exercise.title}</h4>
              {exercise.duration && (
                <span className="text-xs px-2 py-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 whitespace-nowrap">
                  {exercise.duration}
                </span>
              )}
            </div>

            <p className="text-gray-300 mb-4">{exercise.objective}</p>

            <ol className="list-decimal list-inside text-gray-200 space-y-2 mb-4">
              {exercise.steps.map((step, stepIdx) => (
                <li key={stepIdx}>{step}</li>
              ))}
            </ol>

            {exercise.resources && exercise.resources.length > 0 && (
              <div className="mb-4">
                <div className="text-sm font-semibold text-cyan-200 mb-2">Dataset & risorse</div>
                <div className="flex flex-wrap gap-2">
                  {exercise.resources.filter((res) => !isValidationResource(res.path)).map((res, rIdx) => (
                    <Link
                      key={rIdx}
                      href={res.path}
                      className="inline-flex items-center px-3 py-2 rounded-lg border border-blue-500/40 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all text-sm"
                      target="_blank"
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 21h14" />
                      </svg>
                      {res.label}
                    </Link>
                  ))}
                </div>

                {exercise.resources.some((res) => isValidationResource(res.path)) && (
                  <details className="mt-3 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3">
                    <summary className="cursor-pointer text-sm font-semibold text-amber-300 list-none flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      </svg>
                      Mostra validation / soluzione guidata
                    </summary>
                    <p className="text-xs text-amber-200/90 mt-2 mb-3">
                      Attenzione: la validation è un riferimento per autovalutazione finale. Prova prima a risolvere l&apos;esercizio con il solo train set.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exercise.resources.filter((res) => isValidationResource(res.path)).map((res, rIdx) => (
                        <Link
                          key={`val-${rIdx}`}
                          href={res.path}
                          className="inline-flex items-center px-3 py-2 rounded-lg border border-amber-400/50 text-amber-200 hover:bg-amber-400/10 transition-all text-sm"
                          target="_blank"
                        >
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 3v12" />
                            <path d="m7 10 5 5 5-5" />
                            <path d="M5 21h14" />
                          </svg>
                          {res.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            )}

            {exercise.resources?.some((r) => r.path.toLowerCase().endsWith('.csv')) && (
              <div className="mb-4 space-y-3">
                <div className="text-sm font-semibold text-cyan-200">Anteprima dataset</div>
                {exercise.resources
                  .filter((r) => r.path.toLowerCase().endsWith('.csv'))
                  .map((res) => {
                    if (isValidationResource(res.path)) return null;
                    const preview = previews[res.path];
                    if (!preview) return null;

                    return (
                      <div key={`preview-${res.path}`} className="overflow-x-auto rounded-lg border border-blue-700/40">
                        <div className="px-3 py-2 text-xs text-gray-400 border-b border-blue-800/40">{res.label} (prime 6 righe)</div>
                        <table className="min-w-full text-xs">
                          <thead className="bg-navy-800/80 text-cyan-200">
                            <tr>
                              {preview.headers.map((h) => (
                                <th key={h} className="px-3 py-2 text-left font-semibold whitespace-nowrap">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="text-gray-200">
                            {preview.rows.map((row, rowIdx) => (
                              <tr key={rowIdx} className="border-t border-blue-900/50">
                                {row.map((cell, cIdx) => (
                                  <td key={`${rowIdx}-${cIdx}`} className="px-3 py-2 whitespace-nowrap">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  })}
              </div>
            )}

            <div className="text-sm text-gray-300 border-t border-navy-600 pt-3 space-y-2">
              <div>
                <span className="font-semibold text-cyan-200">Checkpoint personale:</span> {exercise.deliverable}
              </div>
              <div className="text-xs text-gray-400">
                Autovalutazione rapida: Ho capito il concetto · So riconoscere l&apos;errore comune · So motivare una decisione pratica
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
