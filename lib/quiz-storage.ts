export type ChapterScoreEntry = {
  chapterId: number;
  chapterSlug: string;
  score: string; // e.g. "8/10"
  correct: number;
  total: number;
  updatedAt: number;
};

export type QuizScoresMap = Record<string, ChapterScoreEntry>; // key: ch{id}

const QUIZ_STORAGE_KEY = 'quiz_scores';

function hasStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getQuizStorageKey() {
  return QUIZ_STORAGE_KEY;
}

export function getChapterStorageKey(chapterId: number) {
  return `ch${chapterId}`;
}

export function loadQuizScores(): QuizScoresMap {
  if (!hasStorage()) return {};

  try {
    const raw = window.localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as QuizScoresMap;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function saveQuizScores(scores: QuizScoresMap) {
  if (!hasStorage()) return;
  try {
    window.localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(scores));
  } catch {
    // graceful degradation
  }
}

export function saveChapterScore(params: {
  chapterId: number;
  chapterSlug: string;
  correct: number;
  total: number;
}) {
  const all = loadQuizScores();
  const key = getChapterStorageKey(params.chapterId);
  const entry: ChapterScoreEntry = {
    chapterId: params.chapterId,
    chapterSlug: params.chapterSlug,
    correct: params.correct,
    total: params.total,
    score: `${params.correct}/${params.total}`,
    updatedAt: Date.now(),
  };

  all[key] = entry;
  saveQuizScores(all);
  return all;
}

export function resetQuizScores() {
  if (!hasStorage()) return;
  try {
    window.localStorage.removeItem(QUIZ_STORAGE_KEY);
  } catch {
    // graceful degradation
  }
}

export function getTotalCompletedQuestions(scores: QuizScoresMap) {
  return Object.values(scores).reduce(
    (acc, item) => {
      acc.correct += item.correct;
      acc.total += item.total;
      return acc;
    },
    { correct: 0, total: 0 }
  );
}
