'use client';

import { useMemo, useState } from 'react';
import Button from '@/components/Button';
import type { ChapterChallengeBias } from '@/data/chapters';

type ChallengeStatus = 'idle' | 'in-progress' | 'completed';

interface PersistedChallenge {
  status: ChallengeStatus;
  selectedOptionIds: string[];
  openAnswer: string;
  score: number;
  matchedChecklistIds: string[];
  feedbackText: string;
}

interface ChapterChallengeProps {
  challenge: ChapterChallengeBias;
}

export default function ChapterChallenge({ challenge }: ChapterChallengeProps) {
  const multipleChoice = challenge.questions[0];
  const openText = challenge.questions[1];

  const storageKey = `challenge_${challenge.id}`;

  const [state, setState] = useState<PersistedChallenge>(() => {
    if (typeof window === 'undefined') {
      return {
        status: 'idle',
        selectedOptionIds: [],
        openAnswer: '',
        score: 0,
        matchedChecklistIds: [],
        feedbackText: '',
      };
    }

    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) {
        return {
          status: 'idle',
          selectedOptionIds: [],
          openAnswer: '',
          score: 0,
          matchedChecklistIds: [],
          feedbackText: '',
        };
      }

      const parsed = JSON.parse(raw) as PersistedChallenge;
      return {
        status: parsed.status ?? 'idle',
        selectedOptionIds: parsed.selectedOptionIds ?? [],
        openAnswer: parsed.openAnswer ?? '',
        score: parsed.score ?? 0,
        matchedChecklistIds: parsed.matchedChecklistIds ?? [],
        feedbackText: parsed.feedbackText ?? '',
      };
    } catch {
      return {
        status: 'idle',
        selectedOptionIds: [],
        openAnswer: '',
        score: 0,
        matchedChecklistIds: [],
        feedbackText: '',
      };
    }
  });

  const { status, selectedOptionIds, openAnswer, score, matchedChecklistIds, feedbackText } = state;

  const saveState = (payload: PersistedChallenge) => {
    localStorage.setItem(storageKey, JSON.stringify(payload));
    setState(payload);
  };

  const toggleOption = (id: string) => {
    setState((prev) => ({
      ...prev,
      selectedOptionIds: prev.selectedOptionIds.includes(id)
        ? prev.selectedOptionIds.filter((item) => item !== id)
        : [...prev.selectedOptionIds, id],
    }));
  };

  const matchedIds = useMemo(() => {
    const normalized = openAnswer.toLowerCase();
    return openText.checklist
      .filter((item) => item.keywords.some((kw) => normalized.includes(kw)))
      .map((item) => item.id);
  }, [openAnswer, openText.checklist]);

  const submitChallenge = () => {
    const correctSet = new Set(multipleChoice.correctIds);
    const selectedSet = new Set(selectedOptionIds);

    const selectedCorrect = selectedOptionIds.filter((id) => correctSet.has(id)).length;
    const isPerfect =
      selectedSet.size === correctSet.size &&
      [...selectedSet].every((id) => correctSet.has(id));

    let mcFeedback = multipleChoice.feedback.wrong;
    if (isPerfect) {
      mcFeedback = multipleChoice.feedback.correct;
    } else if (selectedCorrect > 0) {
      mcFeedback = multipleChoice.feedback.partial;
    }

    const finalScore = Math.min(matchedIds.length, 3);

    saveState({
      status: 'completed',
      selectedOptionIds,
      openAnswer,
      score: finalScore,
      matchedChecklistIds: matchedIds,
      feedbackText: mcFeedback,
    });
  };

  const startChallenge = () => {
    saveState({
      status: 'in-progress',
      selectedOptionIds,
      openAnswer,
      score,
      matchedChecklistIds,
      feedbackText,
    });
  };

  return (
    <section className="mb-12 bg-navy-800 border border-cyan-400/30 rounded-xl p-6">
      <header className="mb-4">
        <h3 className="text-cyan-300 font-bold text-xl">🎯 Challenge: {challenge.title}</h3>
        <p className="text-gray-300 mt-2">{challenge.intro}</p>
      </header>

      {status === 'idle' && (
        <Button onClick={startChallenge} className="focus-visible:ring-cyan-300">
          Inizia Challenge
        </Button>
      )}

      {status !== 'idle' && (
        <>
          <div className="border-t border-b border-navy-600 py-4 my-4" role="group" aria-label="Dataset candidati challenge CH3">
            <div className="overflow-x-auto rounded-lg border border-navy-700">
              <table className="w-full text-sm bg-navy-900">
                <thead className="bg-navy-700 text-cyan-200">
                  <tr>
                    <th className="text-left p-3">Nome</th>
                    <th className="text-left p-3">Genere</th>
                    <th className="text-left p-3">Età</th>
                    <th className="text-left p-3">Città</th>
                    <th className="text-left p-3">Assunto</th>
                  </tr>
                </thead>
                <tbody>
                  {challenge.dataset.map((row) => (
                    <tr key={row.nome} className="border-t border-navy-800">
                      <td className="p-3 text-gray-200">{row.nome}</td>
                      <td className="p-3 text-gray-300">{row.genere}</td>
                      <td className="p-3 text-gray-300">{row.età}</td>
                      <td className="p-3 text-gray-300">{row.città}</td>
                      <td className="p-3 text-gray-300">{row.assunto ? 'Sì' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-cyan-200 font-semibold mb-3">{multipleChoice.text}</p>
              <div className="space-y-2">
                {multipleChoice.options.map((option) => {
                  const checked = selectedOptionIds.includes(option.id);
                  return (
                    <label
                      key={option.id}
                      className="flex items-start gap-3 bg-navy-900 border border-navy-700 rounded-lg p-3 text-gray-200"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleOption(option.id)}
                        className="mt-1 h-4 w-4 accent-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-300"
                      />
                      <span>{option.text}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-cyan-200 font-semibold mb-3">{openText.text}</p>
                <textarea
                  value={openAnswer}
                onChange={(event) =>
                  setState((prev) => ({
                    ...prev,
                    openAnswer: event.target.value.slice(0, openText.maxLength),
                  }))
                }
                placeholder={openText.placeholder}
                className="w-full min-h-32 bg-navy-900 border border-navy-700 rounded-lg p-3 text-gray-200 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              />
              <p className="text-xs text-gray-400 mt-2">{openAnswer.length}/{openText.maxLength}</p>
            </div>
          </div>

          {status === 'in-progress' && (
            <div className="mt-6">
              <Button onClick={submitChallenge} className="focus-visible:ring-cyan-300">
                Invia Risposte
              </Button>
            </div>
          )}
        </>
      )}

      {status === 'completed' && (
        <div className="mt-6 border-t border-navy-600 pt-4" aria-live="polite" aria-atomic="true">
          <p className="text-cyan-200 font-semibold mb-2">Feedback</p>
          <p className={feedbackText === multipleChoice.feedback.correct ? 'text-emerald-300' : 'text-red-400'}>
            {feedbackText === multipleChoice.feedback.correct ? '✅ ' : '❌ '}
            {feedbackText}
          </p>
          <p className="mt-4 text-emerald-300 font-semibold">Score: {score}/3 ✅</p>
          <ul className="mt-3 space-y-2">
            {openText.checklist.map((item) => {
              const done = matchedChecklistIds.includes(item.id);
              return (
                <li key={item.id} className={done ? 'text-emerald-300' : 'text-red-400'}>
                  {done ? '✅' : '❌'} {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
