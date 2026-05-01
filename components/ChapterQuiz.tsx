"use client";

import { useEffect, useMemo, useState } from 'react';
import type { QuizQuestion } from '@/data/chapters';
import { saveChapterScore } from '@/lib/quiz-storage';

interface Props {
  quiz: QuizQuestion[];
  chapterId: number;
  chapterSlug: string;
  mode?: 'step' | 'all';
}

export default function ChapterQuiz({ quiz, chapterId, chapterSlug, mode = 'step' }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const score = useMemo(
    () => quiz.reduce((acc, q, idx) => acc + (answers[idx] === q.correct ? 1 : 0), 0),
    [answers, quiz]
  );

  const answeredCount = Object.keys(answers).length;
  const isCompleted = answeredCount === quiz.length;

  useEffect(() => {
    if (!isCompleted) return;
    saveChapterScore({
      chapterId,
      chapterSlug,
      correct: score,
      total: quiz.length,
    });
  }, [isCompleted, chapterId, chapterSlug, score, quiz.length]);

  const handlePick = (questionIdx: number, optionIdx: number, correctIdx: number) => {
    if (answers[questionIdx] !== undefined) return;

    setAnswers((s) => ({ ...s, [questionIdx]: optionIdx }));

    if (optionIdx === correctIdx) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1200);
    }
  };

  const shareText = `Ho totalizzato ${score}/${quiz.length} su Fondamenti di AI 🎓 #SJA`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedInLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  if (mode === 'all') {
    return (
      <div className="space-y-5">
        {quiz.map((q, idx) => {
          const picked = answers[idx];
          const checked = picked !== undefined;

          return (
            <div key={idx} className="rounded-xl border border-navy-600 bg-navy-800/50 p-5">
              <p className="text-gray-100 font-semibold mb-3">{idx + 1}. {q.question}</p>
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const isPicked = picked === i;
                  const isCorrect = i === q.correct;

                  return (
                    <button
                      key={i}
                      onClick={() => handlePick(idx, i, q.correct)}
                      disabled={checked}
                      className={`min-h-11 w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 disabled:cursor-not-allowed ${
                        checked && isPicked && isCorrect
                          ? 'border-emerald-400 bg-emerald-500/20 text-emerald-100'
                          : checked && isPicked && !isCorrect
                            ? 'border-rose-400 bg-rose-500/20 text-rose-100'
                            : checked && isCorrect
                              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                              : 'border-navy-600 text-gray-200 hover:border-cyan-600'
                      }`}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span>{opt}</span>
                        {checked && isPicked && isCorrect && <span>✅</span>}
                        {checked && isPicked && !isCorrect && <span>❌</span>}
                      </span>
                    </button>
                  );
                })}
              </div>

              {checked && (
                <div className="mt-3 text-sm text-gray-200">
                  {picked === q.correct ? (
                    <p className="text-emerald-300">✅ Risposta corretta. {q.explanation}</p>
                  ) : (
                    <p className="text-rose-300">❌ Risposta errata. Risposta corretta: <span className="font-semibold">{q.options[q.correct]}</span>. {q.explanation}</p>
                  )}
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

  return (
    <div className="space-y-4 relative">
      {showToast && (
        <div className="absolute right-0 -top-2 z-10 rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-3 py-2 text-xs text-emerald-100 transition-all duration-300">
          🎉 Ottimo! Risposta corretta
        </div>
      )}

      <div className="flex items-center justify-between text-sm text-gray-400">
        <span>Domanda {currentIndex + 1} / {quiz.length}</span>
        <span>{answeredCount}/{quiz.length} risposte</span>
      </div>

      <div className="h-2 rounded-full bg-navy-700 overflow-hidden">
        <div className="h-full bg-cyan-400 transition-all duration-300" style={{ width: `${((currentIndex + 1) / quiz.length) * 100}%` }} />
      </div>

      <div className="rounded-xl border border-navy-600 bg-navy-800/50 p-5">
        <p className="text-gray-100 font-semibold mb-3">{currentIndex + 1}. {q.question}</p>
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const isPicked = picked === i;
            const isCorrect = i === q.correct;

            return (
              <button
                key={i}
                onClick={() => handlePick(currentIndex, i, q.correct)}
                disabled={checked}
                className={`min-h-11 w-full text-left px-3 py-2 rounded-lg border transition-all duration-300 disabled:cursor-not-allowed ${
                  checked && isPicked && isCorrect
                    ? 'border-emerald-400 bg-emerald-500/20 text-emerald-100'
                    : checked && isPicked && !isCorrect
                      ? 'border-rose-400 bg-rose-500/20 text-rose-100'
                      : checked && isCorrect
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                        : 'border-navy-600 text-gray-200 hover:border-cyan-600'
                }`}
              >
                <span className="flex items-center justify-between gap-2">
                  <span>{opt}</span>
                  {checked && isPicked && isCorrect && <span>✅</span>}
                  {checked && isPicked && !isCorrect && <span>❌</span>}
                </span>
              </button>
            );
          })}
        </div>

        {checked && (
          <div className="mt-3 text-sm text-gray-200">
            {correct ? (
              <p className="text-emerald-300">✅ Risposta corretta. {q.explanation}</p>
            ) : (
              <p className="text-rose-300">❌ Risposta errata. Risposta corretta: <span className="font-semibold">{q.options[q.correct]}</span>. {q.explanation}</p>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
          className="min-h-11 px-4 py-2 rounded-lg border border-navy-600 text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:border-cyan-600 transition-all duration-300"
        >
          ← Indietro
        </button>

        {checked ? (
          <button
            onClick={() => setCurrentIndex((i) => Math.min(quiz.length - 1, i + 1))}
            disabled={isLast}
            className="min-h-11 px-4 py-2 rounded-lg border border-cyan-500/50 text-cyan-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-500/10 transition-all duration-300"
          >
            Next question →
          </button>
        ) : (
          <span className="text-xs text-gray-500">Seleziona una risposta per continuare</span>
        )}
      </div>

      {isLast && isCompleted && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200 text-sm space-y-3">
          <div>
            Risultato finale: <span className="font-semibold">{score}/{quiz.length}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={twitterLink}
              target="_blank"
              rel="noreferrer"
              className="min-h-11 inline-flex items-center px-3 py-2 rounded-lg border border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Share su Twitter
            </a>
            <a
              href={linkedInLink}
              target="_blank"
              rel="noreferrer"
              className="min-h-11 inline-flex items-center px-3 py-2 rounded-lg border border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Share su LinkedIn
            </a>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 1200);
                } catch {
                  // no-op fallback
                }
              }}
              className="min-h-11 px-3 py-2 rounded-lg border border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Copy score
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
