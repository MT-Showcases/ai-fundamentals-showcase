import { chapters } from '@/data/chapters';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ChapterHeader from '@/components/ChapterHeader';
import SectionCard from '@/components/SectionCard';
import SectionMediaSlots from '@/components/SectionMediaSlots';
import KeyTakeaway from '@/components/KeyTakeaway';
import DiscussionPrompt from '@/components/DiscussionPrompt';
import CodeSnippet from '@/components/CodeSnippet';
import ChapterQuiz from '@/components/ChapterQuiz';
import ChapterExercises from '@/components/ChapterExercises';
import ChapterMediaSlots from '@/components/ChapterMediaSlots';
import PracticalWorkflow from '@/components/PracticalWorkflow';
import Breadcrumb from '@/components/Breadcrumb';
import ChapterSidebar from '@/components/ChapterSidebar';
import BackToTopButton from '@/components/BackToTopButton';
import Link from 'next/link';

export const revalidate = 60; // ISR: Revalidate every 60 seconds
export const dynamicParams = true; // Allow on-demand generation

export function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const chapter = chapters.find((ch) => ch.slug === slug);

  if (!chapter) {
    return {
      title: 'Capitolo non trovato',
      description: 'Il capitolo richiesto non esiste.',
    };
  }

  const title = `Capitolo ${String(chapter.id).padStart(2, '0')} — ${chapter.title}`;
  const description = chapter.description;
  const path = `/chapters/${chapter.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'article',
      images: ['/media/og-cover.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/media/og-cover.png'],
    },
  };
}

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;

  const chapter = chapters.find((ch) => ch.slug === slug);

  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex((ch) => ch.slug === slug);
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  const chapterNum = currentIndex + 1;
  const totalChapters = chapters.length;
  const progressPercent = (chapterNum / totalChapters) * 100;

  const chapterGlossaryTerms: Record<string, string[]> = {
    'data-importance': [
      'algoritmo', 'dataset', 'bias', 'training', 'supervised-learning', 'label', 'data-quality', 'validation', 'test-set',
    ],
    'how-ai-works': [
      'neural-network', 'backpropagation', 'gradient-descent', 'learning-rate', 'loss-function', 'layer', 'peso', 'overfitting', 'regolarizzazione', 'dropout',
    ],
    'generative-ai': [
      'generative-ai', 'llm', 'transformer', 'attention-mechanism', 'fine-tuning', 'prompt-engineering', 'tokenizzazione', 'context-window', 'allucinazione', 'rlhf',
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb — full width above grid */}
        <div className="pl-12 md:pl-0 mb-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Capitoli', href: '/#chapters' },
              { label: `${String(chapter.id).padStart(2, '0')} — ${chapter.title}` },
            ]}
          />
        </div>

        {/* Main grid: sidebar + content */}
        <div className="flex gap-0 md:gap-6 lg:gap-8">
          {/*
            Single ChapterSidebar instance:
            - Mobile: w-0 (no layout space) — sidebar is fixed overlay, hamburger is fixed top-right
            - Desktop (md+): w-64/w-72 sticky sidebar in flex layout
          */}
          <div className="w-0 overflow-visible md:w-64 lg:w-72 flex-shrink-0">
            <ChapterSidebar currentSlug={slug} />
          </div>

          {/* Main content area */}
          <main className="flex-1 min-w-0">
            {/* Progress bar */}
            <div className="bg-navy-800/50 rounded-xl px-5 py-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-cyan-300">
                  Capitolo {chapterNum} di {totalChapters}
                </span>
                <span className="text-xs text-gray-400 font-mono">{Math.round(progressPercent)}%</span>
              </div>
              <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-all duration-700"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Chapter Header */}
            <div className="mb-8">
              <ChapterHeader
                title={chapter.title}
                description={chapter.description}
                chapterNumber={chapter.id}
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-8 mb-12">
              {/* Glossary tooltips enabled for CH3, CH5, CH8 */}
              {(() => {
                const glossaryChapters = ['data-importance', 'neural-networks', 'generative-ai'];
                const enableGlossary = glossaryChapters.includes(chapter.slug);
                return chapter.sections.map((section, idx) => (
                <div key={idx}>
                  <SectionCard
                    title={section.title}
                    content={section.content}
                    enableGlossary={enableGlossary}
                    glossaryTermIds={chapterGlossaryTerms[chapter.slug]}
                  />
                  <SectionMediaSlots
                    chapterId={chapter.id}
                    chapterSlug={chapter.slug}
                    sectionIndex={idx}
                    sectionTitle={section.title}
                    sectionContent={section.content}
                    media={section.media}
                  />
                </div>
              ));
              })()}
            </div>

            {chapter.slug === 'machine-learning' && (
              <PracticalWorkflow
                title="ML Workflow Pratico — 5 Step"
                intro="Impara facendo. Scarica il lab e la guida, poi segui gli step."
                downloadLinks={[
                  {
                    label: 'Scarica ZIP Lab 1 — Regressione Housing',
                    url: '/downloads/ml-lab-01-regression.zip',
                    icon: 'zip',
                  },
                  {
                    label: 'Scarica Guida PDF',
                    url: '/downloads/ml-lab-01-workflow-guide.pdf',
                    icon: 'pdf',
                  },
                ]}
                steps={[
                  {
                    number: 1,
                    title: 'Carica i Dati',
                    description: 'Legge il dataset California Housing (20k case con prezzi reali).',
                    code: `from sklearn.datasets import fetch_california_housing
housing = fetch_california_housing()
X = pd.DataFrame(housing.data, columns=housing.feature_names)
y = pd.Series(housing.target * 100000, name='Price')`,
                    codeLang: 'python',
                    tryThis: 'Stampa X.head() — quante righe? Quante colonne?',
                    modificationExample: {
                      lineNumber: 4,
                      description: 'Prova a stampare le statistiche del dataset anziché il prezzo in dollari.',
                      before: `y = pd.Series(housing.target * 100000, name='Price')`,
                      after: `y = pd.Series(housing.target, name='Price_Normalized')
print(y.describe())  # media, std, min, max`,
                      expectedResult: 'Vedrai statistiche del dataset: media ~$2.07M, std ~$1.15M, min/max range',
                    },
                  },
                  {
                    number: 2,
                    title: 'Dividi Training e Test',
                    description: 'Split 80% training / 20% test.',
                    code: `from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)`,
                    codeLang: 'python',
                    tryThis: 'Cambia test_size a 0.1 — vedi MAE migliorare?',
                    modificationExample: {
                      lineNumber: 3,
                      description: 'Cambia il rapporto train/test per vedere come cambia l\'allenamento.',
                      before: `test_size=0.2  # 80% train, 20% test`,
                      after: `test_size=0.1  # 90% train, 10% test`,
                      expectedResult: 'MAE su test potrebbe migliorare (più training), ma validazione meno rigorosa',
                    },
                  },
                  {
                    number: 3,
                    title: 'Allena il Modello',
                    description: 'Crea 2 modelli: Linear Regression + Random Forest.',
                    code: `# Modello 1: Linear Regression
model_lr = LinearRegression()
model_lr.fit(X_train, y_train)

# Modello 2: Random Forest
model_rf = RandomForestRegressor(n_estimators=100, random_state=42)
model_rf.fit(X_train, y_train)`,
                    codeLang: 'python',
                    tryThis: 'Aggiungi GradientBoostingRegressor — è più veloce?',
                    modificationExample: {
                      lineNumber: 7,
                      description: 'Prova a ridurre il numero di alberi (n_estimators) per vedere il trade-off velocità/accuratezza.',
                      before: `model_rf = RandomForestRegressor(n_estimators=100, random_state=42)`,
                      after: `model_rf = RandomForestRegressor(n_estimators=10, random_state=42)  # 10 alberi`,
                      expectedResult: 'Addestramento più veloce (~10x), ma MAE potrebbe calare leggermente (meno accurato)',
                    },
                  },
                  {
                    number: 4,
                    title: 'Valuta Performance',
                    description: 'Misura MAE e R² su training e test.',
                    code: `from sklearn.metrics import mean_absolute_error, r2_score

train_mae = mean_absolute_error(y_train, model.predict(X_train))
test_mae = mean_absolute_error(y_test, model.predict(X_test))
test_r2 = r2_score(y_test, model.predict(X_test))

print(f"Train MAE: \${train_mae:.0f}, Test MAE: \${test_mae:.0f}")
print(f"Test R²: \${test_r2:.3f}")`,
                    codeLang: 'python',
                    tryThis: 'Se test_mae >> train_mae → overfitting! Quale modello è più robusto?',
                    modificationExample: {
                      lineNumber: 7,
                      description: 'Aggiungi una metrica extra (RMSE) per capire meglio gli errori grandi.',
                      before: `print(f"Train MAE: \${train_mae:.0f}, Test MAE: \${test_mae:.0f}")`,
                      after: `test_rmse = np.sqrt(mean_squared_error(y_test, model.predict(X_test)))
print(f"Train MAE: \${train_mae:.0f}, Test MAE: \${test_mae:.0f}, RMSE: \${test_rmse:.0f}")`,
                      expectedResult: 'RMSE solitamente è più alto di MAE (penalizza outlier). Tipo MAE $49k, RMSE $73k',
                    },
                  },
                  {
                    number: 5,
                    title: 'Visualizza Risultati',
                    description: 'Grafico scatter: previsioni vs realtà.',
                    code: `import matplotlib.pyplot as plt

plt.scatter(y_test, y_pred, alpha=0.3, s=10)
plt.plot([min_val, max_val], [min_val, max_val], 'r--', lw=2, label='Perfect')
plt.xlabel('Actual Price ($)')
plt.ylabel('Predicted Price ($)')
plt.title('Predictions vs Reality')
plt.show()`,
                    codeLang: 'python',
                    tryThis: 'Random Forest scatter più serrato che Linear? Perché?',
                    modificationExample: {
                      lineNumber: 3,
                      description: 'Cambia il colore e la trasparenza per visualizzare meglio i cluster di punti.',
                      before: `plt.scatter(y_test, y_pred, alpha=0.3, s=10)`,
                      after: `plt.scatter(y_test, y_pred, alpha=0.5, s=20, c='cyan', edgecolors='blue', linewidth=0.5)`,
                      expectedResult: 'Scatter più leggibile con bordi blu e colore ciano. Punti più grandi (s=20) = più visibilità',
                    },
                  },
                ]}
              />
            )}

            {/* Key Takeaways */}
            <div className="mb-12">
              <KeyTakeaway items={chapter.keyTakeaways} />
            </div>

            {/* Discussion Prompts */}
            {chapter.discussionPrompts && chapter.discussionPrompts.length > 0 && (
              <div className="mb-12">
                <DiscussionPrompt prompts={chapter.discussionPrompts} />
              </div>
            )}

            {/* Media Placeholders */}
            <ChapterMediaSlots chapter={chapter} />

            {/* Code Snippets */}
            {chapter.codeSnippets && chapter.codeSnippets.length > 0 && (
              <div className="mb-12">
                <h3 className="text-cyan-300 font-bold mb-4">💻 Code Snippets</h3>
                <div className="space-y-4">
                  {chapter.codeSnippets.map((snippet, idx) => (
                    <CodeSnippet key={idx} code={snippet.code} lang={snippet.lang} label={snippet.label} />
                  ))}
                </div>
              </div>
            )}

            {/* Practical Exercises */}
            {chapter.exercises && chapter.exercises.length > 0 && (
              <ChapterExercises exercises={chapter.exercises} />
            )}

            {/* Quiz */}
            {chapter.quiz && chapter.quiz.length > 0 && (
              <div className="mb-12">
                <h3 className="text-cyan-300 font-bold mb-4">🧠 Quiz del Capitolo</h3>
                <ChapterQuiz quiz={chapter.quiz} chapterId={chapter.id} chapterSlug={chapter.slug} />
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-navy-600 gap-4">
              {previousChapter ? (
                <Link
                  href={`/chapters/${previousChapter.slug}`}
                  className="group flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-blue-500/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 font-medium text-base"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden sm:inline">← Capitolo Precedente</span>
                  <span className="sm:hidden">Precedente</span>
                </Link>
              ) : (
                <div />
              )}

              <div className="text-xs text-gray-500 font-mono text-center flex-shrink-0">
                {chapterNum} / {totalChapters}
              </div>

              {nextChapter ? (
                <Link
                  href={`/chapters/${nextChapter.slug}`}
                  className="group flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-blue-500/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 font-medium text-base"
                >
                  <span className="hidden sm:inline">Capitolo Successivo →</span>
                  <span className="sm:hidden">Successivo</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </main>
        </div>
      </div>
      <BackToTopButton />
      {/* Mini footer with privacy link */}
      <footer className="bg-navy-800/60 border-t border-blue-800/30 py-4 px-6 text-center text-xs text-gray-600">
        <span>AI Fundamentals — SJA Catania</span>
        <span className="mx-2" aria-hidden="true">·</span>
        <Link href="/privacy" className="hover:text-cyan-300 transition-colors">
          Privacy Policy
        </Link>
        <span className="mx-2" aria-hidden="true">·</span>
        <Link href="/terms" className="hover:text-cyan-300 transition-colors">
          Termini di Servizio
        </Link>
      </footer>
    </div>
  );
}
