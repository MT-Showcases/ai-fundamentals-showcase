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
import SourceToggle from '@/components/SourceToggle';
import Breadcrumb from '@/components/Breadcrumb';
import ChapterSidebar from '@/components/ChapterSidebar';
import BackToTopButton from '@/components/BackToTopButton';
import GlossaryTerm from '@/components/GlossaryTerm';
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

  const workflowCompleteSource = `CAPITOLO 4 — ML WORKFLOW PRATICO COMPLETO
============================================

CONTESTO:
Questo workflow guida gli studenti attraverso 5 step per allenare modelli di Machine Learning su dati reali (California Housing). L'obiettivo è imparare il ciclo completo: carica → split → allena → valuta → visualizza.

DATASET: California Housing (20,640 case, 8 features, prezzi reali).
MODELLI: Linear Regression (semplice) vs Random Forest (complesso).
METRICA: MAE (Mean Absolute Error) + R² (coefficient of determination).

---

STEP 1: CARICA I DATI
File: main.py (linee 1-10)

Obiettivo: Caricare dataset reale e prepararlo.

Codice:
\`\`\`python
from sklearn.datasets import fetch_california_housing
import pandas as pd
housing = fetch_california_housing()
X = pd.DataFrame(housing.data, columns=housing.feature_names)
y = pd.Series(housing.target * 100000, name='Price')
print(f"Dataset shape: {X.shape}")
print(f"Price range: \${y.min():,.0f} - \${y.max():,.0f}")
\`\`\`

Output atteso:
- Dataset shape: (20640, 8)
- Price range: $14,999 - $500,001

Learning outcome:
- Come caricare dataset scikit-learn
- Come esplorare shape e range del dataset
- Come preparare features (X) e target (y)

---

STEP 2: DIVIDI IN TRAINING E VALIDATION
File: main.py (linee 35-38)

Obiettivo: Separare dati di allenamento da dati di valutazione per evitare overfitting.

Codice:
\`\`\`python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print(f"Train: {len(X_train)}, Test: {len(X_test)}")
\`\`\`

Spiegazione:
- test_size=0.2: 20% test, 80% training
- random_state=42: garantisce risultati riproducibili
- X_train/y_train: dati che il modello "vede" durante allenamento
- X_test/y_test: dati "mai visti" per valutare generalizzazione

Output atteso:
- Train: 16512, Test: 4128

Learning outcome:
- Perché è cruciale il test set
- Cos'è overfitting e come rilevarlo
- Ruolo di random_state per riproducibilità

---

STEP 3: ALLENA IL MODELLO
File: main.py (linee 45-52)

Obiettivo: Allenare 2 modelli con diversa complessità e confrontarli.

Codice:
\`\`\`python
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor

# Modello 1: Linear Regression (semplice, veloce)
model_lr = LinearRegression()
model_lr.fit(X_train, y_train)

# Modello 2: Random Forest (complesso, più accurato)
model_rf = RandomForestRegressor(n_estimators=100, random_state=42)
model_rf.fit(X_train, y_train)
\`\`\`

Differenze:
- Linear Regression: assume y = a*x + b (lineare, ~10 parametri)
- Random Forest: crea 100 alberi (non-lineare, ~1000 parametri)

Learning outcome:
- Trade-off tra semplicità e accuratezza
- Quando usare modelli semplici vs complessi
- Concetto di n_estimators in ensemble methods

---

STEP 4: VALUTA PERFORMANCE
File: main.py (linee 54-62)

Obiettivo: Misurare errore su training e test. Diagnosi overfitting.

Codice:
\`\`\`python
from sklearn.metrics import mean_absolute_error, r2_score, mean_squared_error
import numpy as np

# Linear Regression
train_mae_lr = mean_absolute_error(y_train, model_lr.predict(X_train))
test_mae_lr = mean_absolute_error(y_test, model_lr.predict(X_test))
r2_lr = r2_score(y_test, model_lr.predict(X_test))

# Random Forest
train_mae_rf = mean_absolute_error(y_train, model_rf.predict(X_train))
test_mae_rf = mean_absolute_error(y_test, model_rf.predict(X_test))
r2_rf = r2_score(y_test, model_rf.predict(X_test))

print(f"Linear Regression - Train MAE: \${train_mae_lr:,.0f}, Test MAE: \${test_mae_lr:,.0f}, R²: {r2_lr:.3f}")
print(f"Random Forest - Train MAE: \${train_mae_rf:,.0f}, Test MAE: \${test_mae_rf:,.0f}, R²: {r2_rf:.3f}")
\`\`\`

Output atteso:
\`\`\`
Linear Regression - Train MAE: $70,234, Test MAE: $71,234, R²: 0.580
Random Forest - Train MAE: $10,123, Test MAE: $49,123, R²: 0.760
\`\`\`

Diagnostica overfitting:
- Linear: train ~= test ✅ Buona generalizzazione
- Random Forest: train << test ⚠️ Segnale overfitting (ma R² test ancora buono)

Metriche spiegate:
- MAE: errore medio in dollari (più basso = meglio)
- R²: % varianza spiegata (0-1, più alto = meglio)
- train_mae vs test_mae: rivela overfitting

Learning outcome:
- Come interpretare MAE e R²
- Riconoscere segnali di overfitting
- Quando un modello "complesso" non significa "migliore"

---

STEP 5: VISUALIZZA RISULTATI
File: main.py (linee 65-75)

Obiettivo: Grafico scatter per visualizzare bontà previsioni.

Codice:
\`\`\`python
import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Linear Regression
ax = axes[0]
ax.scatter(y_test, model_lr.predict(X_test), alpha=0.3, s=10)
min_val = min(y_test.min(), model_lr.predict(X_test).min())
max_val = max(y_test.max(), model_lr.predict(X_test).max())
ax.plot([min_val, max_val], [min_val, max_val], 'r--', lw=2, label='Perfect')
ax.set_xlabel('Actual Price ($)')
ax.set_ylabel('Predicted Price ($)')
ax.set_title(f'Linear Regression (R²: {r2_lr:.3f})')
ax.legend()
ax.grid(True, alpha=0.3)

# Random Forest
ax = axes[1]
ax.scatter(y_test, model_rf.predict(X_test), alpha=0.3, s=10)
min_val = min(y_test.min(), model_rf.predict(X_test).min())
max_val = max(y_test.max(), model_rf.predict(X_test).max())
ax.plot([min_val, max_val], [min_val, max_val], 'r--', lw=2, label='Perfect')
ax.set_xlabel('Actual Price ($)')
ax.set_ylabel('Predicted Price ($)')
ax.set_title(f'Random Forest (R²: {r2_rf:.3f})')
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('housing-predictions.png', dpi=100)
plt.show()
\`\`\`

Interpretazione grafico:
- Punti sulla linea rossa = previsioni perfette
- Scatter serrato = modello bravo
- Scatter disperso = modello sbaglia molto

Confronto modelli:
- Linear: scatter più disperso (meno accurato)
- Random Forest: scatter più serrato (più accurato)

Learning outcome:
- Visualizzazione come strumento diagnostico
- Come riconoscere pattern di errore
- Differenza visuale tra modelli

---

WORKFLOW COMPLETO — FLUSSO DIDATTICO
============================================

Sequenza consigliata:
1. Studente scarica ZIP Lab 1
2. Esegue python main.py
3. Legge gli step sul sito (glossario interattivo, file structure)
4. Modifica parametri (test_size, n_estimators) e re-esegue
5. Carica questa fonte in NotebookLM → genera video/infografica workflow

Concetti chiave:
- Machine Learning = imparare pattern dai dati
- Training set = dati per "insegnare"
- Test set = dati per verificare che generalizza
- Overfitting = memorizzazione (male)
- Generalizzazione = apprendimento (bene)
- MAE + R² = metriche complementari

Esperimenti proposti (per approfondimento):
1. Cambia test_size (0.1, 0.3, 0.5) → MAE cambia?
2. Riduci n_estimators (10, 50) → velocità vs accuratezza
3. Aggiungi feature nuove → R² migliora?
4. Prova GradientBoostingRegressor → confronto con Random Forest

Output atteso complessivo:
- Screenshot grafico previsioni
- Console con MAE + R² per entrambi i modelli
- Comprensione del workflow completo
- Capacità di estendere il lab con varianti proprie

Tempo totale: 30-45 minuti (setup + esecuzione + esperimenti + lettura)

---

FONTE PER NOTEBOOKLM — ISTRUZIONI:
1. Copia questo testo
2. Vai a https://notebooklm.google.com
3. Crea notebook nuovo
4. Incolla il testo come fonte
5. Genera: video (60-120s) oppure infografica (5 bullet + warning + takeaway)

Output ideale:
- Video: "ML Workflow: Da Housing Dataset a Previsioni Accurate"
- Infografica: "5 Step per Allenare Modelli ML Efficaci"
`;

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
                return chapter.sections.map((section, idx) => {
                  // Skip rendering the workflow section as a standard card since we render it via PracticalWorkflow below
                  if (
                    (chapter.slug === 'machine-learning' && section.title === 'ML Workflow Pratico — 5 Step') ||
                    (chapter.slug === 'neural-networks' && section.title === 'Mini Lab — Costruire e Analizzare la Prima Rete Neurale')
                  ) {
                    return null;
                  }

                  return (
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
                  );
                });
              })()}
            </div>

            {chapter.slug === 'machine-learning' && (
              <>
              <div className="mt-12">
                <PracticalWorkflow
                title="ML Workflow Pratico — 5 Step"
                intro="Impara facendo. Scarica il lab e la guida, poi segui gli step."
                chapterId={chapter.id}
                chapterSlug={chapter.slug}
                media={[
                  {
                    type: 'infographic',
                    title: 'Infografica — ML Workflow 5 Step',
                    description: 'Workflow visuale del processo ML applicato al dataset California Housing: dati, preprocessing, training, validazione e metriche.',
                    placeholderPath: 'media/ch04-machine-learning/lab/infographic.png',
                    notes: 'ready'
                  },
                  {
                    type: 'video',
                    title: 'Video — ML Workflow California Housing',
                    description: 'Guida pratica ai 5 step del workflow ML: dal dataset al modello validato, con focus su metriche e decisioni operative.',
                    estimatedDuration: '8 min',
                    placeholderPath: 'media/ch04-machine-learning/lab/video.mp4',
                    notes: 'ready'
                  }
                ]}
                setupContent={
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-2">Prerequisiti:</p>
                      <ul className="text-sm text-gray-400 space-y-1 ml-4">
                        <li>✅ Python 3.7+ (scarica da <a href="https://python.org" target="_blank" rel="noopener" className="text-blue-300 hover:underline">python.org</a>)</li>
                        <li>✅ pip (incluso in Python)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-2">Comandi di avvio:</p>
                      <div className="bg-navy-900 rounded-lg p-4 border border-cyan-400/20 font-mono text-xs text-cyan-300 space-y-1">
                        <p className="text-gray-400"># 1. Estrai lo ZIP</p>
                        <p className="text-gray-400"># 2. Accedi alla cartella</p>
                        <p>$ cd ml-lab-01-regression/</p>
                        <p className="text-gray-400"># 3. Installa dipendenze</p>
                        <p>$ pip install -r requirements.txt</p>
                        <p className="text-gray-400"># 4. Esegui il lab</p>
                        <p>$ python main.py</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-900/20 border-l-2 border-blue-400 pl-4 py-3">
                      <p className="text-xs text-gray-300">
                        <strong>💡 Tip:</strong> Se <code className="text-red-300 bg-navy-900 px-1 rounded text-xs">pip install</code> fallisce, prova <code className="text-red-300 bg-navy-900 px-1 rounded text-xs">pip3</code> o crea un virtual environment: <code className="text-cyan-300 bg-navy-900 px-1 rounded text-xs">python -m venv venv</code>
                      </p>
                    </div>
                  </div>
                }
                downloadLinks={[
                  {
                    label: 'Scarica ZIP Lab 1 — Regressione Housing',
                    url: '/downloads/ml-lab-01-regression.zip',
                    icon: 'zip',
                  },
                ]}
                steps={[
                  {
                    number: 1,
                    title: 'Carica i Dati',
                    description: <>Legge il dataset California Housing (20k case con prezzi reali) che userai per il <GlossaryTerm term="training">training</GlossaryTerm>.</>,
                    code: `from sklearn.datasets import fetch_california_housing
housing = fetch_california_housing()
X = pd.DataFrame(housing.data, columns=housing.feature_names)
y = pd.Series(housing.target * 100000, name='Price')`,
                    codeLang: 'python',
                    tryThis: <>Stampa X.head() — quante righe? Quante colonne? Poi verifica se i dati sono pronti per la <GlossaryTerm term="validation">validation</GlossaryTerm>.</>,
                    fileReference: {
                      filename: 'main.py',
                      lines: '28-32',
                      description: 'Carica il dataset e costruisce features (X) e target prezzo (y) in formato Pandas, base per tutto il workflow.',
                    },
                    modificationExample: {
                      lineNumber: 4,
                      description: 'Prova a stampare le statistiche del dataset anziché il prezzo in dollari.',
                      before: `y = pd.Series(housing.target * 100000, name='Price')`,
                      after: `y = pd.Series(housing.target, name='Price_Normalized')
print(y.describe())  # media, std, min, max`,
                      expectedResult: 'Vedrai statistiche del dataset: media ~$2.07M, std ~$1.15M, min/max range',
                    },
                    notebookLmSource: `File: main.py (righe 28-32)

from sklearn.datasets import fetch_california_housing
housing = fetch_california_housing()
X = pd.DataFrame(housing.data, columns=housing.feature_names)
y = pd.Series(housing.target * 100000, name='Price')

Spiegazione:
- fetch_california_housing(): scarica dataset reale di case in California
- X: tabella con le feature (es. stanze medie, reddito area, popolazione)
- y: prezzo target in dollari (target originale * 100000)

Perché: senza separare chiaramente feature e target non puoi addestrare né valutare un modello di regressione.`,
                  },
                  {
                    number: 2,
                    title: 'Dividi Training e Test',
                    description: <>Split 80% <GlossaryTerm term="training">training</GlossaryTerm> / 20% <GlossaryTerm term="validation">validation</GlossaryTerm>.</>,
                    code: `from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)`,
                    codeLang: 'python',
                    tryThis: <>Cambia <GlossaryTerm term="test_size">test_size</GlossaryTerm> a 0.1 — vedi <GlossaryTerm term="MAE">MAE</GlossaryTerm> migliorare?</>,
                    fileReference: {
                      filename: 'main.py',
                      lines: '35-38',
                      description: 'Divide il dataset: 80% per allenare il modello, 20% per valutare quanto generalizza su dati nuovi.',
                    },
                    modificationExample: {
                      lineNumber: 3,
                      description: 'Cambia il rapporto train/test per vedere come cambia l\'allenamento.',
                      before: `test_size=0.2  # 80% train, 20% test`,
                      after: `test_size=0.1  # 90% train, 10% test`,
                      expectedResult: 'MAE su test potrebbe migliorare (più training), ma validazione meno rigorosa',
                    },
                    notebookLmSource: `File: main.py (righe 35-38)

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

Spiegazione:
- test_size=0.2: 20% dei dati va al test, 80% al training
- random_state=42: rende lo split riproducibile
- X_train/X_test: features per training e test
- y_train/y_test: target (prezzi) per training e test

Perché: il test set rappresenta dati mai visti. Se il modello va bene solo su training ma male su test, c'è overfitting.`,
                  },
                  {
                    number: 3,
                    title: 'Allena il Modello',
                    description: <>Crea 2 modelli: Linear Regression + Random Forest, poi confronta la capacità di <GlossaryTerm term="generalization">generalization</GlossaryTerm>.</>,
                    code: `# Modello 1: Linear Regression
model_lr = LinearRegression()
model_lr.fit(X_train, y_train)

# Modello 2: Random Forest
model_rf = RandomForestRegressor(n_estimators=100, random_state=42)
model_rf.fit(X_train, y_train)`,
                    codeLang: 'python',
                    tryThis: <>Cambia <GlossaryTerm term="n_estimators">n_estimators</GlossaryTerm> e confronta velocità/accuratezza: è più veloce?</>,
                    fileReference: {
                      filename: 'main.py',
                      lines: '41-48',
                      description: 'Istanzia e addestra due modelli diversi sullo stesso training set per confrontare approcci lineari vs ensemble.',
                    },
                    modificationExample: {
                      lineNumber: 7,
                      description: 'Prova a ridurre il numero di alberi (n_estimators) per vedere il trade-off velocità/accuratezza.',
                      before: `model_rf = RandomForestRegressor(n_estimators=100, random_state=42)`,
                      after: `model_rf = RandomForestRegressor(n_estimators=10, random_state=42)  # 10 alberi`,
                      expectedResult: 'Addestramento più veloce (~10x), ma MAE potrebbe calare leggermente (meno accurato)',
                    },
                    notebookLmSource: `File: main.py (righe 41-48)

# Modello 1: Linear Regression
model_lr = LinearRegression()
model_lr.fit(X_train, y_train)

# Modello 2: Random Forest
model_rf = RandomForestRegressor(n_estimators=100, random_state=42)
model_rf.fit(X_train, y_train)

Spiegazione:
- LinearRegression: baseline semplice e interpretabile
- RandomForestRegressor: insieme di alberi che cattura relazioni non lineari
- fit(...): fase di training sui dati già separati

Perché: confrontare modelli diversi aiuta a scegliere il compromesso migliore tra semplicità, velocità e accuratezza.`,
                  },
                  {
                    number: 4,
                    title: 'Valuta Performance',
                    description: <>Misura <GlossaryTerm term="MAE">MAE</GlossaryTerm> e <GlossaryTerm term="R²">R²</GlossaryTerm> su training e validation per scovare <GlossaryTerm term="overfitting">overfitting</GlossaryTerm>.</>,
                    code: `from sklearn.metrics import mean_absolute_error, r2_score

train_mae = mean_absolute_error(y_train, model.predict(X_train))
test_mae = mean_absolute_error(y_test, model.predict(X_test))
test_r2 = r2_score(y_test, model.predict(X_test))

print(f"Train MAE: \${train_mae:.0f}, Test MAE: \${test_mae:.0f}")
print(f"Test R²: \${test_r2:.3f}")`,
                    codeLang: 'python',
                    tryThis: <>Se test_mae {'>>'} train_mae → <GlossaryTerm term="overfitting">overfitting</GlossaryTerm>! Confronta anche <GlossaryTerm term="RMSE">RMSE</GlossaryTerm>.</>,
                    fileReference: {
                      filename: 'main.py',
                      lines: '51-60',
                      description: 'Calcola metriche su training e test per misurare errore medio e qualità di spiegazione della varianza.',
                    },
                    modificationExample: {
                      lineNumber: 7,
                      description: 'Aggiungi una metrica extra (RMSE) per capire meglio gli errori grandi.',
                      before: `print(f"Train MAE: \${train_mae:.0f}, Test MAE: \${test_mae:.0f}")`,
                      after: `test_rmse = np.sqrt(mean_squared_error(y_test, model.predict(X_test)))
print(f"Train MAE: \${train_mae:.0f}, Test MAE: \${test_mae:.0f}, RMSE: \${test_rmse:.0f}")`,
                      expectedResult: 'RMSE solitamente è più alto di MAE (penalizza outlier). Tipo MAE $49k, RMSE $73k',
                    },
                    notebookLmSource: `File: main.py (righe 51-60)

from sklearn.metrics import mean_absolute_error, r2_score

train_mae = mean_absolute_error(y_train, model.predict(X_train))
test_mae = mean_absolute_error(y_test, model.predict(X_test))
test_r2 = r2_score(y_test, model.predict(X_test))

print(f"Train MAE: \${train_mae:.0f}, Test MAE: \${test_mae:.0f}")
print(f"Test R²: \${test_r2:.3f}")

Spiegazione:
- MAE: errore medio assoluto (in dollari)
- R²: quota di varianza spiegata dal modello
- confronto train vs test: controllo della generalizzazione

Perché: metriche su dati mai visti sono il test reale di affidabilità del modello.`,
                  },
                  {
                    number: 5,
                    title: 'Visualizza Risultati',
                    description: <>Grafico scatter: previsioni vs realtà. Se i punti si allineano alla diagonale, il modello ha buona <GlossaryTerm term="generalization">generalization</GlossaryTerm>.</>,
                    code: `import matplotlib.pyplot as plt

plt.scatter(y_test, y_pred, alpha=0.3, s=10)
plt.plot([min_val, max_val], [min_val, max_val], 'r--', lw=2, label='Perfect')
plt.xlabel('Actual Price ($)')
plt.ylabel('Predicted Price ($)')
plt.title('Predictions vs Reality')
plt.show()`,
                    codeLang: 'python',
                    tryThis: <>Confronta il grafico dei due modelli: chi ha dispersione minore e MAE più basso?</>,
                    fileReference: {
                      filename: 'main.py',
                      lines: '63-71',
                      description: 'Visualizza qualità delle predizioni confrontando valori reali e stimati con un riferimento ideale (linea diagonale).',
                    },
                    modificationExample: {
                      lineNumber: 3,
                      description: 'Cambia il colore e la trasparenza per visualizzare meglio i cluster di punti.',
                      before: `plt.scatter(y_test, y_pred, alpha=0.3, s=10)`,
                      after: `plt.scatter(y_test, y_pred, alpha=0.5, s=20, c='cyan', edgecolors='blue', linewidth=0.5)`,
                      expectedResult: 'Scatter più leggibile con bordi blu e colore ciano. Punti più grandi (s=20) = più visibilità',
                    },
                    notebookLmSource: `File: main.py (righe 63-71)

import matplotlib.pyplot as plt

plt.scatter(y_test, y_pred, alpha=0.3, s=10)
plt.plot([min_val, max_val], [min_val, max_val], 'r--', lw=2, label='Perfect')
plt.xlabel('Actual Price ($)')
plt.ylabel('Predicted Price ($)')
plt.title('Predictions vs Reality')
plt.show()

Spiegazione:
- scatter: ogni punto è una casa (reale vs predetto)
- linea rossa tratteggiata: predizione perfetta (y = x)
- distanza dalla linea = errore della previsione

Perché: il grafico rende visiva la qualità del modello e aiuta a individuare pattern di errore e outlier.`,
                  },
                ]}
              />
              </div>
              </>
            )}

            {chapter.slug === 'neural-networks' && (
              <div className="mt-12">
                <PracticalWorkflow
                  title="Mini Lab — La Tua Prima Rete Neurale"
                  intro="Costruisci e analizza una rete neurale in Python per il riconoscimento ottico dei caratteri (MNIST)."
                  chapterId={chapter.id}
                  chapterSlug={chapter.slug}
                  media={[
                    {
                      type: 'infographic',
                      title: 'L\'Architettura del Modello',
                      description: 'Uno sguardo alla struttura della rete: da 784 pixel in input a 10 classi in output.',
                      placeholderPath: 'media/ch05-neural-networks/lab/infographic.png',
                      notes: 'ready'
                    }
                  ]}
                  setupContent={
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">Prerequisiti:</p>
                        <ul className="text-sm text-gray-400 space-y-1 ml-4">
                          <li>✅ Python 3.7+</li>
                          <li>✅ Scikit-Learn installato</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">Comandi di avvio:</p>
                        <div className="bg-navy-900 rounded-lg p-4 border border-cyan-400/20 font-mono text-xs text-cyan-300 space-y-1">
                          <p className="text-gray-400"># 1. Estrai lo ZIP Lab 2 e accedi</p>
                          <p>$ cd ml-lab-02-neural-networks/</p>
                          <p className="text-gray-400"># 2. Installa le dipendenze</p>
                          <p>$ pip install -r requirements.txt</p>
                          <p className="text-gray-400"># 3. Esegui il lab (scaricherà MNIST la prima volta)</p>
                          <p>$ python main.py</p>
                        </div>
                      </div>
                    </div>
                  }
                  downloadLinks={[
                    {
                      label: 'Scarica ZIP Lab 2 — Neural Networks',
                      url: '/downloads/ml-lab-02-neural-networks.zip',
                      icon: 'zip',
                    },
                  ]}
                  steps={[
                    {
                      number: 1,
                      title: 'Scarica i Dati (MNIST)',
                      description: 'Carichiamo un subset di MNIST: 10.000 immagini di numeri scritti a mano (28x28 pixel = 784 feature per immagine).',
                      code: `from sklearn.datasets import fetch_openml
X, y = fetch_openml('mnist_784', version=1, return_X_y=True, as_frame=False)
X, y = X[:10000], y[:10000] # Subset per velocità`,
                      codeLang: 'python',
                      tryThis: 'Prova a stampare X.shape. Cosa rappresentano quei 784 valori?',
                      notebookLmSource: 'Il dataset MNIST è lo "Hello World" del Machine Learning: 70.000 immagini (qui usiamo le prime 10.000). Ogni immagine è srotolata in un array di 784 valori.'
                    },
                    {
                      number: 2,
                      title: 'Preprocessing (Scaling)',
                      description: 'Le reti neurali lavorano male con valori grandi (es. pixel da 0 a 255). Scalare i dati verso lo zero accelera enormemente l\'apprendimento.',
                      code: `from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)`,
                      codeLang: 'python',
                      tryThis: 'Se non scalassi i dati, il processo di discesa del gradiente farebbe enormi balzi a vuoto, rallentando la convergenza.',
                      notebookLmSource: 'Lo StandardScaler sposta la media dei pixel a 0 e la deviazione standard a 1. È fondamentale per la stabilità matematica della rete.'
                    },
                    {
                      number: 3,
                      title: 'Definisci e Allena l\'Architettura',
                      description: 'Creiamo un Multi-Layer Perceptron (MLP) con un singolo layer nascosto da 50 neuroni.',
                      code: `from sklearn.neural_network import MLPClassifier
nn_model = MLPClassifier(hidden_layer_sizes=(50,), max_iter=20, solver='sgd')
nn_model.fit(X_train_scaled, y_train)`,
                      codeLang: 'python',
                      tryThis: 'Qui avviene la magia: la backpropagation aggiusta i pesi tra i 784 input, i 50 neuroni nascosti e i 10 output finali.',
                      modificationExample: {
                        lineNumber: 2,
                        description: 'Cosa succede se la rete diventa più profonda?',
                        before: 'hidden_layer_sizes=(50,)',
                        after: 'hidden_layer_sizes=(50, 50,)',
                        expectedResult: 'Vengono creati DUE layer nascosti da 50 neuroni. L\'apprendimento sarà leggermente più lento ma il modello potrà imparare pattern più complessi.'
                      },
                      notebookLmSource: 'Architettura scelta: 1 Hidden Layer, 50 neuroni, Stochastic Gradient Descent come solver e massimo 20 epoche per finire in fretta.'
                    },
                    {
                      number: 4,
                      title: 'Visualizza le Predizioni',
                      description: 'Il modello prevede il numero basandosi sui pixel. Mostriamo i primi 10 risultati visivamente per capire dove sbaglia.',
                      code: `import matplotlib.pyplot as plt
img = X_test[0].reshape(28, 28)
plt.imshow(img, cmap='gray')
plt.title(f"Pred: {y_pred[0]} | Reale: {y_test[0]}")
plt.show()`,
                      codeLang: 'python',
                      tryThis: 'Guarda l\'immagine generata: gli errori del modello sono giustificati? (Numeri scritti male e ambigui).',
                    }
                  ]}
                  workflowCompleteSource="Nel Lab 02 l'utente crea la sua prima rete neurale. Lo script (main.py) scarica 10k immagini MNIST. Usa StandardScaler per appiattire i valori dei pixel (che altrimenti andrebbero da 0 a 255 mandando fuori scala i gradienti). Poi crea un MLPClassifier di scikit-learn con 50 neuroni in un layer nascosto. Traina il modello, fa predizioni e chiude generando una griglia 2x5 matplotlib che mostra l'immagine del numero scritto a mano, colorando il titolo di verde se la previsione è corretta, rosso se errata."
                />
              </div>
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
