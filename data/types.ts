export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Section {
  title: string;
  content: string;
  media?: MediaPlaceholder[];
}

export interface CodeSnippet {
  lang: 'python' | 'javascript' | 'json' | 'bash';
  label: string;
  code: string;
}

export interface MediaPlaceholder {
  type: 'video' | 'podcast' | 'infographic' | 'resource';
  title: string;
  description: string;
  estimatedDuration?: string;
  placeholderPath: string;
  notes?: string;
}

export interface ExerciseResource {
  label: string;
  path: string;
}

export interface ChapterExercise {
  title: string;
  objective: string;
  duration?: string;
  steps: string[];
  deliverable: string;
  resources?: ExerciseResource[];
}

export interface ChallengeOption {
  id: string;
  text: string;
}

export interface ChallengeChecklistItem {
  id: string;
  text: string;
  keywords: string[];
}

export interface ChallengeQuestionMultipleChoice {
  id: string;
  type: 'multiple-choice';
  text: string;
  options: ChallengeOption[];
  correctIds: string[];
  feedback: {
    correct: string;
    partial: string;
    wrong: string;
  };
}

export interface ChallengeQuestionOpenText {
  id: string;
  type: 'open-text';
  text: string;
  placeholder: string;
  maxLength: number;
  checklist: ChallengeChecklistItem[];
}

export interface ChapterChallengeBias {
  id: string;
  title: string;
  intro: string;
  dataset: Array<{
    nome: string;
    genere: 'M' | 'F';
    età: number;
    città: string;
    assunto: boolean;
  }>;
  correctIndices: number[];
  questions: [ChallengeQuestionMultipleChoice, ChallengeQuestionOpenText];
}

export interface HallucinationSpan {
  id: string;
  text: string;
  isError: boolean;
  feedback: string;
}

export interface ChapterChallengeHallucination {
  id: string;
  title: string;
  intro: string;
  fullText: string;
  spans: HallucinationSpan[];
}

export interface RiskScenario {
  id: string;
  text: string;
  correctRisk: 'prohibited' | 'high' | 'limited' | 'minimal';
  rationale: string;
}

export interface ChapterChallengeRiskClassification {
  id: string;
  title: string;
  intro: string;
  scenarios: RiskScenario[];
  riskOptions: Array<{ value: 'prohibited' | 'high' | 'limited' | 'minimal'; label: string; color: string }>;
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  description: string;
  sections: Section[];
  keyTakeaways: string[];
  discussionPrompts?: string[];
  codeSnippets?: CodeSnippet[];
  quiz?: QuizQuestion[];
  media?: MediaPlaceholder[];
  exercises?: ChapterExercise[];
  challenge?: ChapterChallengeBias | ChapterChallengeHallucination | ChapterChallengeRiskClassification;
  labNote?: string;
}
