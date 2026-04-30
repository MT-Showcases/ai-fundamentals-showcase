"use client";

import { useMemo, useState } from 'react';
import type { QuizQuestion } from '@/data/chapters';

interface Props {
  quiz: QuizQuestion[];
  mode?: 'step' | 'all';
}

export default function ChapterQuiz({ quiz, mode = 'step' }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const score = useMemo(
    () => quiz.reduce((acc, q, idx) => acc + (answers[idx] === q.correct ? 1 : 0), 0),
    [answers, quiz]
  );

  if (mode === 'all') {
    return (
      <div className="space-y-5">
        {quiz.map((q, idx) => {
          const picked = answers[idx];
          const checked = picked !== undefined;
          const correct = checked && picked === q.correct;

          return (
            <div key={idx} className="rounded-xl border border-navy-600 bg-navy-800/50 p-5">
              <p className="text-gray-100 font-semibold mb-3">{idx + 1}. {q.question}</p>
              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setAnswers((s) => ({ ...s, [idx]: i }))}
                    className={`w-full text-left px-3 py-2 rounded-lg border transition ${
                      picked === i
                        ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200'
                        : 'border-navy-600 text-gray-200 hover:border-cyan-600'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {checked && (
                <div className={`mt-3 text-sm ${correct ? 'text-emerald-300' : 'text-amber-300'}`}>
                  {correct ? '✅ Risposta corretta.' : '❌ Risposta errata.'} {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  const q = quiz[currentIndex];
  const picked = answers[currentIndex];
  const checked = picked !== undefined;
  const correct = checked && picked === q.correct;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === quiz.length - 1;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-gray-400">
        <span>Domanda {currentIndex + 1} / {quiz.length}</span>
        <span>{answeredCount}/{quiz.length} risposte</span>
      </div>

      <div className="h-2 rounded-full bg-navy-700 overflow-hidden">
        <div className="h-full bg-cyan-400 transition-all" style={{ width: `${((currentIndex + 1) / quiz.length) * 100}%` }} />
      </div>

      <div className="rounded-xl border border-navy-600 bg-navy-800/50 p-5">
        <p className="text-gray-100 font-semibold mb-3">{currentIndex + 1}. {q.question}</p>
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setAnswers((s) => ({ ...s, [currentIndex]: i }))}
              className={`w-full text-left px-3 py-2 rounded-lg border transition ${
                picked === i
                  ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200'
                  : 'border-navy-600 text-gray-200 hover:border-cyan-600'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {checked && (
          <div className={`mt-3 text-sm ${correct ? 'text-emerald-300' : 'text-amber-300'}`}>
            {correct ? '✅ Risposta corretta.' : '❌ Risposta errata.'} {q.explanation}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
          className="px-4 py-2 rounded-lg border border-navy-600 text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:border-cyan-600 transition"
        >
          ← Indietro
        </button>

        <button
          onClick={() => setCurrentIndex((i) => Math.min(quiz.length - 1, i + 1))}
          disabled={isLast}
          className="px-4 py-2 rounded-lg border border-cyan-500/50 text-cyan-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-500/10 transition"
        >
          Avanti →
        </button>
      </div>

      {isLast && answeredCount === quiz.length && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200 text-sm">
          Risultato finale: <span className="font-semibold">{score}/{quiz.length}</span>
        </div>
      )}
    </div>
  );
}
