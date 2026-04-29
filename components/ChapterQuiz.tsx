"use client";

import { useState } from 'react';
import type { QuizQuestion } from '@/data/chapters';

interface Props {
  quiz: QuizQuestion[];
}

export default function ChapterQuiz({ quiz }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

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
