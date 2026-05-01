"use client";

import { useMemo, useState } from 'react';
import { chapters } from '@/data/chapters';
import {
  getTotalCompletedQuestions,
  loadQuizScores,
  resetQuizScores,
  type QuizScoresMap,
} from '@/lib/quiz-storage';

export default function QuizScoreDashboard() {
  const [scores, setScores] = useState<QuizScoresMap>(() => loadQuizScores());

  const quizChaptersCount = useMemo(() => chapters.filter((c) => c.quiz?.length).length, []);
  const completed = Object.keys(scores).length;
  const totals = getTotalCompletedQuestions(scores);

  return (
    <div className="rounded-2xl border border-blue-700/40 bg-navy-800/40 p-5 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-cyan-300">Progress Dashboard Quiz</h3>
          <p className="text-sm text-gray-300 mt-1">
            Hai completato <span className="font-semibold text-white">{totals.correct}/{totals.total || 0}</span> domande
            {' '}su <span className="font-semibold text-white">{quizChaptersCount}</span> capitoli con quiz.
          </p>
          <p className="text-xs text-gray-400 mt-1">Capitoli completati: {completed}/{quizChaptersCount}</p>
        </div>

        <button
          onClick={() => {
            resetQuizScores();
            setScores({});
          }}
          className="min-h-11 px-4 py-2 rounded-lg border border-rose-500/50 text-rose-200 hover:bg-rose-500/10 transition-all duration-300"
        >
          Reset score
        </button>
      </div>
    </div>
  );
}
