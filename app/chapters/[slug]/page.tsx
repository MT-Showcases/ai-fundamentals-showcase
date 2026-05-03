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
                  <div className="space-y-6">
                    <div className="bg-blue-900/20 border-l-2 border-blue-400 pl-4 py-3">
                      <p className="text-sm text-gray-300 font-semibold mb-1">Obiettivo del Laboratorio:</p>
                      <p className="text-xs text-gray-400 leading-relaxed mb-2">
                        Imparerai il ciclo di vita completo di un modello di Machine Learning usando dati reali (i prezzi delle case in California). Non è solo teoria: prenderai dei dati grezzi, allenerai due modelli diversi e misurerai in dollari veri quant'è l'errore delle tue predizioni.
                      </p>
                      <ul className="text-xs text-gray-400 space-y-1 ml-4 list-disc">
                        <li>Usare Pandas per esplorare un dataset da 20.640 righe</li>
                        <li>Il concetto fondamentale di split <GlossaryTerm term="training">Training</GlossaryTerm> vs <GlossaryTerm term="validation">Test</GlossaryTerm></li>
                        <li>Confrontare un modello semplice (Linear Regression) con uno complesso (Random Forest)</li>
                        <li>Leggere le metriche d'errore (MAE e R²) e tracciare un grafico</li>
                      </ul>
                    </div>

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
                        <p className="text-gray-400"># 1. Estrai lo ZIP e accedi</p>
                        <p>$ cd ml-lab-01-regression/</p>
                        <p className="text-gray-400"># 2. Installa dipendenze</p>
                        <p>$ pip install -r requirements.txt</p>
                        <p className="text-gray-400"># 3. Esegui il lab</p>
                        <p>$ python main.py</p>
                      </div>
                    </div>
                    
                    <div className="bg-navy-800 rounded-lg p-4 border border-navy-600">
                      <p className="text-xs text-gray-300">
                        <strong>💡 Tip:</strong> Se <code className="text-red-300 bg-navy-900 px-1 rounded text-xs">pip install</code> fallisce, prova <code className="text-red-300 bg-navy-900 px-1 rounded text-xs">pip3</code> o usa un virtual environment.
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
                  },
                ]}
                workflowCompleteSource={`CAPITOLO 4 — WORKFLOW DI MACHINE LEARNING (PREDIZIONE PREZZI CASE)
================================================================

CONTESTO DEL LABORATORIO:
Questo workflow guida gli studenti attraverso i 5 passaggi fondamentali per allenare modelli di Machine Learning su dati reali. L'obiettivo è imparare il ciclo completo e rigoroso dell'addestramento, allontanandosi dalla teoria astratta e concentrandosi su risultati e metriche concrete.

DATASET UTILIZZATO: 
- California Housing Dataset.
- Consiste in 20.640 record rappresentanti distretti californiani.
- Ogni record ha 8 feature (es. reddito mediano, età media della casa, numero stanze).
- Il target è il prezzo mediano della casa nel distretto.

TECNOLOGIE E MODELLI:
- Linguaggio: Python 3.
- Librerie: Scikit-Learn per il Machine Learning, Pandas per manipolazione dati, Matplotlib per i grafici.
- Modelli confrontati: Linear Regression (modello base/lineare) vs Random Forest Regressor (modello ensemble, alberi decisionali multipli).
- Metriche: Mean Absolute Error (MAE) e R² (Coefficiente di Determinazione).

---

I 5 STEP DEL WORKFLOW:

[Step 1] Estrazione e Caricamento Dati
Il codice usa \`fetch_california_housing\` di scikit-learn. I dati vengono trasformati in un DataFrame Pandas per la massima chiarezza e manipolabilità. Questo step insegna l'importanza dell'esplorazione esplorativa dei dati (EDA), stampando il range dei prezzi per capire con cosa si sta lavorando (da ~$15k a ~$500k).

[Step 2] Split dei Dati (Train/Test)
Concetto fondamentale del ML: non testare mai il modello sui dati con cui ha studiato.
Viene applicato \`train_test_split\` dividendo il dataset 80% (Training, per far imparare l'algoritmo) e 20% (Testing, come esame finale su dati mai visti per simulare l'ambiente reale).

[Step 3] Addestramento (Training di 2 Modelli)
Qui avviene il confronto didattico. Vengono istanziati e allenati in sequenza:
1. Una \`LinearRegression()\`: Veloce, interpretabile, ma limitata. Traccia una singola linea matematica.
2. Un \`RandomForestRegressor(n_estimators=100)\`: Pesante, black-box, ma potente. Usa 100 alberi decisionali che votano insieme.
Questo step dimostra che la vera "intelligenza" algoritmica risiede nel comando \`.fit()\`.

[Step 4] Valutazione e Metriche
Sui dati di test (il 20% isolato), i due modelli fanno le loro predizioni.
I risultati vengono misurati col MAE (l'errore in dollari reale: di quanto sbaglia in media?) e l'R² (da 0 a 1, quanto variano i dati spiegati dal modello?).
Tipicamente il Random Forest schiaccia la Regressione Lineare, dimostrando il concetto di "Sotto-adattamento (Underfitting)" del modello lineare su dati complessi.

[Step 5] Visualizzazione delle Predizioni
I numeri nudi e crudi non bastano per comunicare con gli stakeholder. Il codice genera uno scatter plot (grafico a dispersione) confrontando sull'asse X i Prezzi Reali e sull'asse Y le Predizioni del Modello. Viene tracciata una riga rossa perfetta diagonale: più i puntini blu seguono la riga rossa, più il modello è preciso.

---

ESERCIZIO PRATICO DI MODIFICA (Ottimizzazione Parametri):
Agli studenti viene chiesto di toccare con mano un iperparametro per capire il trade-off velocità/precisione.
PRIMA: \`RandomForestRegressor(n_estimators=100)\`
DOPO: \`RandomForestRegressor(n_estimators=10)\`
Risultato atteso per lo studente: Riducendo drasticamente il numero di alberi, il training del modello diventerà fulmineo (10 volte più veloce), ma il MAE (l'errore in dollari) peggiorerà sensibilmente e il grafico sarà più "sparpagliato" rispetto alla riga rossa perfetta.

---

OBIETTIVO GENERAZIONE CONTENUTI DA QUESTO PROMPT:
Questo documento racchiude l'esperienza olistica del primo lab di Machine Learning degli studenti.
Usa questa fonte per generare:
1) Script video per introdurre il concetto di Train/Test Split basato sull'analogia della "scuola vs esame finale".
2) Infografiche riassuntive che comparino visivamente Linear Regression vs Random Forest in termini di pro/contro usando il caso California Housing.
3) Riassunti didattici sulle metriche (spiegando il MAE e l'R²).`}
              />
              </div>
              </>
            )}

            {chapter.slug === 'nlp' && (
              <div className="mb-12">
                <PracticalWorkflow
                  title="NLP Workflow Pratico — 5 Step"
                  setupContent={
                    <div className="space-y-4">
                      <div className="bg-blue-900/20 border-l-2 border-blue-400 pl-4 py-3">
                        <p className="text-sm text-gray-300 font-semibold mb-1">Cosa imparerai in questo lab:</p>
                        <ul className="text-xs text-gray-400 space-y-1 ml-4 list-disc">
                          <li>Costruire un dataset testuale inline e pre-processarlo</li>
                          <li>Trasformare il testo in numeri con TF-IDF</li>
                          <li>Confrontare Logistic Regression vs Naive Bayes su testo</li>
                          <li>Visualizzare la confusion matrix e le parole pi&ugrave; discriminanti</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">Prerequisiti:</p>
                        <ul className="text-sm text-gray-400 space-y-1 ml-4">
                          <li>&#x2705; Python 3.7+</li>
                          <li>&#x2705; pip installato</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">Comandi di avvio:</p>
                        <div className="bg-navy-900 rounded-lg p-4 border border-cyan-400/20 font-mono text-xs text-cyan-300 space-y-1">
                          <p className="text-gray-400"># 1. Estrai lo ZIP e accedi</p>
                          <p>$ cd ml-lab-03-nlp/</p>
                          <p className="text-gray-400"># 2. Installa le dipendenze</p>
                          <p>$ pip install -r requirements.txt</p>
                          <p className="text-gray-400"># 3. Esegui il lab</p>
                          <p>$ python main.py</p>
                        </div>
                      </div>
                    </div>
                  }
                  downloadLinks={[
                    {
                      label: 'Scarica ZIP Lab 3 — NLP Sentiment Analysis',
                      url: '/downloads/ml-lab-03-nlp.zip',
                      icon: 'zip',
                    },
                  ]}
                  steps={[
                    {
                      number: 1,
                      title: 'Carica i Dati',
                      description: 'Dataset inline di 30 recensioni (15 positive + 15 negative) — nessun download richiesto.',
                      code: 'texts = [\n  "Prodotto fantastico, lo consiglio!",\n  "Pessima qualità, deluso.",\n  # ... 28 altre frasi\n]\nlabels = [1, 0, ...]',
                      codeLang: 'python',
                      tryThis: 'Aggiungi 5 tue frasi al dataset — il modello le include nel training.',
                    },
                    {
                      number: 2,
                      title: 'Preprocessing',
                      description: 'Lowercase + rimozione punteggiatura con regex. Nessuna libreria esterna.',
                      code: 'import re\n\ndef preprocess(text):\n    text = text.lower()\n    text = re.sub(r"[^\\w\\s]", "", text)\n    return text',
                      codeLang: 'python',
                      tryThis: 'Prova a rimuovere anche i numeri — migliora o peggiora l\'accuracy?',
                    },
                    {
                      number: 3,
                      title: 'TF-IDF Vectorization',
                      description: 'Trasforma il testo in numeri: ogni parola diventa una feature pesata per rarità.',
                      code: 'from sklearn.feature_extraction.text import TfidfVectorizer\n\nvectorizer = TfidfVectorizer(max_features=1000)\nX = vectorizer.fit_transform(texts_clean)',
                      codeLang: 'python',
                      tryThis: 'Cambia max_features=500 — cambia l\'accuracy?',
                    },
                    {
                      number: 4,
                      title: 'Training — LR vs Naive Bayes',
                      description: 'Allena e confronta Logistic Regression vs Multinomial Naive Bayes.',
                      code: 'from sklearn.linear_model import LogisticRegression\nfrom sklearn.naive_bayes import MultinomialNB\n\nlr = LogisticRegression(random_state=42)\nnb = MultinomialNB()\nlr.fit(X_train, y_train)\nnb.fit(X_train, y_train)',
                      codeLang: 'python',
                      tryThis: 'Quale modello ha accuracy più alta? Perché Naive Bayes funziona bene con testo?',
                    },
                    {
                      number: 5,
                      title: 'Visualizzazione',
                      description: 'Confusion matrix con seaborn + top 10 parole più positive e negative.',
                      code: 'import seaborn as sns\nfrom sklearn.metrics import confusion_matrix\n\ncm = confusion_matrix(y_test, y_pred)\nsns.heatmap(cm, annot=True, fmt="d")\nplt.savefig("sentiment-analysis.png")',
                      codeLang: 'python',
                      tryThis: 'Aggiungi la tua frase nella sezione ESPERIMENTO in fondo al main.py!',
                    },
                  ]}
                  workflowCompleteSource={`CAPITOLO 6 — NLP WORKFLOW PRATICO COMPLETO: ANALISI DEL SENTIMENT
============================================================

CONTESTO DEL LABORATORIO:
Questo workflow guida gli studenti nella costruzione di un analizzatore di sentiment in Python — il loro primo sistema NLP funzionante. L'obiettivo è demistificare l'elaborazione del linguaggio naturale, mostrando che dietro ogni AI che "capisce" il testo c'è una pipeline matematica accessibile.

DATASET:
- 30 frasi inline in italiano (15 positive + 15 negative). Nessun download, nessuna API, nessun account.

TECNOLOGIE:
- TF-IDF: rappresentazione numerica del testo basata su rarità/frequenza parole
- Logistic Regression: modello lineare interpretabile
- Multinomial Naive Bayes: classificatore probabilistico, efficace su testo
- Seaborn/Matplotlib: confusion matrix e top parole
- Scelta deliberata: NO BERT, NO Transformers — focus sulla teoria

I 5 STEP:

[Step 1] Caricamento Dati
Dataset inline: 30 frasi con etichette 0/1. Lo studente può aggiungere le proprie frasi e vedere l'impatto immediato.

[Step 2] Preprocessing
Lowercase + rimozione punteggiatura con regex. Mostra che anche i sistemi AI avanzati partono da trasformazioni elementari.

[Step 3] TF-IDF Vectorization
TfidfVectorizer trasforma frasi in vettori numerici. Parole rare ma frequenti in un testo hanno peso alto. max_features=1000.

[Step 4] Training e Confronto
Logistic Regression vs Multinomial Naive Bayes sullo stesso train set. random_state=42 per riproducibilità.

[Step 5] Visualizzazione
Confusion matrix + top 10 parole positive/negative dai coefficienti LR. Grafico: sentiment-analysis.png.

FLUSSO DIDATTICO:
1. Scarica ZIP Lab 3 (ml-lab-03-nlp.zip)
2. cd ml-lab-03-nlp/
3. pip install -r requirements.txt
4. python main.py
5. Legge output: accuracy LR vs NB + top 10 parole
6. Apre sentiment-analysis.png
7. Modifica mia_recensione e re-esegue

OBIETTIVO GENERAZIONE CONTENUTI:
1) Video: "Come un computer legge il testo — da parole a numeri con TF-IDF"
2) Infografica: pipeline NLP in 5 step
3) Quiz: TF-IDF vs word count, NB vs LR, confusion matrix`}
                />
              </div>
            )}

            {chapter.slug === 'generative-ai' && (
              <div className="mb-12">
                <PracticalWorkflow
                  title="Generative AI Workflow — Prompt Engineering"
                  setupContent={
                    <div className="space-y-4">
                      <div className="bg-blue-900/20 border-l-2 border-blue-400 pl-4 py-3">
                        <p className="text-sm text-gray-300 font-semibold mb-1">Cosa imparerai in questo lab:</p>
                        <ul className="text-xs text-gray-400 space-y-1 ml-4 list-disc">
                          <li>Connetterti a un LLM reale via API (gratis, senza carta)</li>
                          <li>Confrontare prompt vaghi vs strutturati sullo stesso obiettivo</li>
                          <li>Usare il system prompt per controllare il comportamento del modello</li>
                          <li>Valutare la qualità dell&apos;output con criteri pratici</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">Prerequisiti:</p>
                        <ul className="text-sm text-gray-400 space-y-1 ml-4">
                          <li>&#x2705; Python 3.7+</li>
                          <li>&#x2705; pip installato</li>
                          <li>&#x2705; Account Groq gratuito — <a href="https://console.groq.com" target="_blank" rel="noopener" className="text-blue-300 hover:underline">console.groq.com</a> (no carta)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">Comandi di avvio:</p>
                        <div className="bg-navy-900 rounded-lg p-4 border border-cyan-400/20 font-mono text-xs text-cyan-300 space-y-1">
                          <p className="text-gray-400"># 1. Estrai lo ZIP e accedi</p>
                          <p>$ cd ml-lab-04-generative-ai/</p>
                          <p className="text-gray-400"># 2. Installa le dipendenze</p>
                          <p>$ pip install -r requirements.txt</p>
                          <p className="text-gray-400"># 3. Crea file .env con la tua chiave Groq</p>
                          <p>$ echo &quot;GROQ_API_KEY=gsk_...&quot; &gt; .env</p>
                          <p className="text-gray-400"># 4. Esegui il lab</p>
                          <p>$ python main.py</p>
                        </div>
                      </div>
                    </div>
                  }
                  downloadLinks={[
                    {
                      label: 'Scarica ZIP Lab 4 — Generative AI',
                      url: '/downloads/ml-lab-04-generative-ai.zip',
                      icon: 'zip',
                    },
                  ]}
                  steps={[
                    {
                      number: 1,
                      title: 'Setup e connessione API',
                      description: 'Carica la chiave Groq dal file .env e verifica la connessione con una chiamata test.',
                      code: 'from dotenv import load_dotenv\nfrom groq import Groq\nimport os\n\nload_dotenv()\nclient = Groq(api_key=os.getenv("GROQ_API_KEY"))\n\n# Test connessione\nrisposta, tokens = call_llm(client, "Rispondi solo con: OK")\nprint(f"Connessione OK — token test: {tokens}")',
                      codeLang: 'python',
                      tryThis: 'Se vedi un errore 401, controlla che la chiave nel file .env sia corretta.',
                    },
                    {
                      number: 2,
                      title: 'Prima chiamata — prompt semplice',
                      description: 'Chiedi al modello di spiegare un concetto AI in 2 righe.',
                      code: 'prompt = "Spiega cos\'\u00e8 il Machine Learning in 2 righe."\nrisposta, tokens = call_llm(client, prompt)\nprint(risposta)\nprint(f"Token usati: {tokens}")',
                      codeLang: 'python',
                      tryThis: 'Cambia il concetto — prova con "deep learning" o "overfitting". La risposta cambia?',
                    },
                    {
                      number: 3,
                      title: 'Prompt vago vs Prompt strutturato',
                      description: 'Stesso obiettivo, due prompt diversi: osserva come cambia la qualità della risposta.',
                      code: '# Prompt A: vago\nprompt_a = "Cos\'\u00e8 l\'overfitting?"\n\n# Prompt B: strutturato (ruolo + vincoli + formato)\nprompt_b = (\n    "Sei un docente AI per studenti di primo anno. "\n    "Spiega overfitting in max 3 bullet point "\n    "usando un\'analogia pratica."\n)',
                      codeLang: 'python',
                      tryThis: 'Qualè la differenza tra le due risposte? Il prompt B è sempre migliore?',
                    },
                    {
                      number: 4,
                      title: 'System Prompt — controllo comportamento',
                      description: 'Il system prompt definisce il ruolo e i vincoli globali del modello per tutta la conversazione.',
                      code: 'system = (\n    "Sei un assistente tecnico per startup AI. "\n    "Rispondi sempre in max 5 righe, "\n    "con linguaggio pratico e orientato al business."\n)\nrisposta, _ = call_llm(client, domanda, system_prompt=system)',
                      codeLang: 'python',
                      tryThis: 'Cambia il ruolo nel system prompt — prova "Sei uno studente universitario scettico". Come cambia il tono?',
                    },
                    {
                      number: 5,
                      title: 'Valutazione qualità output',
                      description: 'Confronta le risposte con una scorecard: lunghezza, struttura, coerenza con il prompt.',
                      code: 'def valuta(risposta):\n    parole = len(risposta.split())\n    ha_struttura = any(c in risposta for c in ["\u2022", "-", "1.", "\\n-"])\n    print(f"Parole: {parole}")\n    print(f"Struttura: {\u2705 if ha_struttura else \u274c}")\n\nvaluta(risposta_a)  # prompt vago\nvaluta(risposta_b)  # prompt strutturato',
                      codeLang: 'python',
                      tryThis: 'Sblocca la sezione ESPERIMENTO in fondo al main.py e testa il tuo prompt preferito!',
                    },
                  ]}
                  workflowCompleteSource={`CAPITOLO 8 — GENERATIVE AI: PROMPT ENGINEERING CON GROQ API
=============================================================

CONTESTO DEL LABORATORIO:
Questo lab porta gli studenti a interagire con un LLM reale per la prima volta. L'obiettivo non è usare l'AI come una chat, ma capire come costruire prompt controllati, come il system prompt modifica il comportamento del modello e come valutare la qualità dell'output in modo sistematico.

TECNOLOGIE:
- Groq API: provider gratuito (no carta di credito) con modelli LLaMA 3.1 open-source
- llama-3.1-8b-instant: modello veloce e gratuito, compatibile con lo standard OpenAI
- python-dotenv: gestione sicura della chiave API tramite file .env
- Scelta deliberata: Groq invece di OpenAI per accessibilità totale degli studenti

PERCHÉ GROQ E NON OPENAI:
- Account gratuito, nessuna carta di credito, limiti generosi
- Stesso standard API (il codice funziona su OpenAI cambiando 3 righe)
- Modelli open-source (LLaMA 3 di Meta) — nessun vendor lock-in
- Velocità estrema (hardware LPU specializzato)

I 5 STEP DEL WORKFLOW:

[Step 1] Setup e connessione API
Lo studente carica la chiave Groq dal file .env tramite python-dotenv. Il client Groq viene inizializzato e testato con una chiamata minima. Se la chiave è assente o errata, il codice guida lo studente con istruzioni chiare.

[Step 2] Prima chiamata — prompt semplice
Una singola domanda semplice al modello (spiegare ML in 2 righe). Mostra il meccanismo base: prompt → risposta + conteggio token. Introduce il concetto di "token" come unità di costo/misura.

[Step 3] Prompt vago vs Prompt strutturato
Il cuore del lab. Stesso obiettivo (spiegare overfitting) con due prompt:
- Prompt A vago: risposta generica, poco controllata
- Prompt B strutturato (ruolo + vincoli + formato): risposta organizzata, coerente, utile
Dimostra che il modello non è "intelligente" — segue istruzioni. Più istruzioni dai, più controllo hai.

[Step 4] System Prompt
Introduce il system prompt come livello di controllo superiore: definisce il ruolo e i vincoli validi per tutta la conversazione. Esempio: assistente tecnico per startup, risponde in 5 righe, linguaggio business.

[Step 5] Valutazione qualità
Scorecard automatica: lunghezza risposta, presenza struttura (bullet/numeri), coerenza con il prompt. Mostra che anche l'output AI si può valutare con metriche oggettive, non solo "mi piace/non mi piace".

FLUSSO DIDATTICO:
1. Vai su console.groq.com e crea account gratuito (2 minuti, no carta)
2. Crea API Key → copia la chiave (inizia con gsk_...)
3. Scarica ZIP Lab 4 (ml-lab-04-generative-ai.zip)
4. cd ml-lab-04-generative-ai/
5. pip install -r requirements.txt
6. Crea file .env: GROQ_API_KEY=gsk_la_tua_chiave
7. python main.py
8. Osserva: connessione OK → prima risposta → confronto A/B → scorecard
9. Sblocca la sezione ESPERIMENTO in fondo al main.py e testa prompt personalizzati

OBIETTIVO GENERAZIONE CONTENUTI:
1) Video: "Come costruire un prompt efficace — da vago a strutturato in 3 step"
2) Infografica: anatomia di un prompt strutturato (ruolo + contesto + vincoli + formato)
3) Quiz: differenza prompt vs system prompt, cosa sono i token, quando usare temperature alta vs bassa`}
                />
              </div>
            )}

            {chapter.slug === 'neural-networks' && (
              <div className="mt-12">
                <PracticalWorkflow
                  title="Mini Lab — La Tua Prima Rete Neurale"
                  
                  chapterId={chapter.id}
                  chapterSlug={chapter.slug}
                  media={[
                    {
                      type: 'infographic',
                      title: 'L\'Architettura del Modello',
                      description: 'Uno sguardo alla struttura della rete: da 784 pixel in input a 10 classi in output.',
                      placeholderPath: 'media/ch05-neural-networks/lab/infographic.jpg',
                      notes: 'ready'
                    },
                    {
                      type: 'video',
                      title: 'Video Lab — Reti Neurali con MNIST',
                      description: 'Guida pratica al lab: dal caricamento MNIST al riconoscimento cifre con MLP.',
                      placeholderPath: 'media/ch05-neural-networks/lab/video.mp4',
                      notes: 'ready'
                    }
                  ]}
                  setupContent={
                    <div className="space-y-6">
                      <div className="bg-blue-900/20 border-l-2 border-blue-400 pl-4 py-3">
                        <p className="text-sm text-gray-300 font-semibold mb-1">Cosa imparerai in questo lab:</p>
                        <ul className="text-xs text-gray-400 space-y-1 ml-4 list-disc">
                          <li>Caricare e visualizzare il dataset MNIST (immagini da 28x28 pixel)</li>
                          <li>Pre-processare i dati (Scaling) per accelerare l'apprendimento</li>
                          <li>Costruire un Multi-Layer Perceptron (MLP)</li>
                          <li>Valutare le predizioni visualizzando i numeri scritti a mano</li>
                        </ul>
                      </div>

                      <div className="bg-navy-800 rounded-lg p-4 border border-navy-600">
                        <p className="text-sm font-semibold text-cyan-300 mb-2">🛠️ Perché Scikit-Learn e non PyTorch?</p>
                        <p className="text-xs text-gray-400 leading-relaxed mb-2">
                          Nell'industria moderna si usano framework giganti come PyTorch o TensorFlow. Tuttavia in questo lab useremo Scikit-Learn. Perché?
                        </p>
                        <ul className="text-xs text-gray-400 space-y-1 ml-4 list-decimal">
                          <li><strong>Nessuna GPU richiesta:</strong> non devi installare 1GB+ di roba. Gira sul tuo PC in 5 secondi.</li>
                          <li><strong>Focus sulla teoria:</strong> con PyTorch dovresti scrivere tu i cicli per i gradienti. Qui chiami <code>.fit()</code> e ti concentri sui livelli della rete, non sull'ingegneria del calcolo.</li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-2">Prerequisiti:</p>
                        <ul className="text-sm text-gray-400 space-y-1 ml-4">
                          <li>✅ Python 3.7+</li>
                          <li>✅ pip installato</li>
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
                      tryThis: 'Se non scalassi i dati, il processo di discesa del gradiente farebbe enormi balzi a vuoto, rallentando la convergenza.'
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
                      }
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
                      tryThis: 'Guarda l\'immagine generata: gli errori del modello sono giustificati? (Numeri scritti male e ambigui).'
                    }
                  ]}
                  workflowCompleteSource={`CAPITOLO 5 — RETI NEURALI: RICONOSCIMENTO CIFRE (MNIST)
======================================================

CONTESTO DEL LABORATORIO:
Questo workflow guida gli studenti nella costruzione, addestramento e analisi della loro prima Rete Neurale Artificiale. Il laboratorio mira a smitizzare le reti neurali, trattandole come modelli matematici accessibili piuttosto che come "scatole magiche" incomprensibili.

DATASET UTILIZZATO: 
- MNIST (Modified National Institute of Standards and Technology).
- E' considerato lo "Hello World" del Machine Learning.
- Consiste in immagini 28x28 pixel in scala di grigi raffiguranti numeri scritti a mano (da 0 a 9).
- Per questioni di performance nel lab viene caricato un subset di 10.000 immagini.
- Ogni immagine viene "appiattita" in un array 1D di 784 valori (28 * 28 = 784 features).

TECNOLOGIE:
- Scikit-learn (MLPClassifier). Viene scelto deliberatamente al posto di framework industriali (TensorFlow/PyTorch) per permettere allo studente di focalizzarsi sull'architettura dei layer e della backpropagation, senza doversi scontrare con l'ingegneria del calcolo su GPU, tensori, o cicli manuali di loss.backward().
- Matplotlib e Seaborn per la visualizzazione.

---

I 5 STEP DEL WORKFLOW:

[Step 1] Caricamento Dati (MNIST)
Il codice scarica il dataset MNIST via fetch_openml. I dati grezzi vengono affettati per estrarre 10.000 campioni (X) e le rispettive etichette (y). 
L'obiettivo qui è far capire allo studente che un'immagine per il computer è solo una lunga fila di 784 numeri.

[Step 2] Preprocessing e Scaling
Questo è un passaggio cruciale per le reti neurali. I pixel originali hanno valori da 0 a 255. Passare valori così alti e sparsi a una rete neurale causa esplosioni dei gradienti e convergenza lentissima.
Viene applicato uno \`StandardScaler\` che porta la media dei valori a 0 e la deviazione standard a 1. La normalizzazione accelera e stabilizza l'addestramento.

[Step 3] Architettura e Addestramento (Multi-Layer Perceptron)
Viene istanziato un classificatore neurale (\`MLPClassifier\`) configurato così:
- \`hidden_layer_sizes=(50,)\`: Un singolo strato nascosto con 50 neuroni.
- \`solver='sgd'\`: Discesa Stocastica del Gradiente.
- \`max_iter=20\`: Numero limitato di epoche (volutamente basso per rapidità didattica, causerà un normale warning di convergenza).
L'addestramento avviene chiamando il classico \`nn_model.fit(X_train_scaled, y_train)\`.

[Step 4] Valutazione del Modello
La rete fa predizioni sul set di test e ne calcoliamo l'accuratezza. Generalmente, anche un MLP semplice e allenato per sole 20 epoche riesce a ottenere un'accuratezza superiore al 90% su MNIST, dando un feedback molto positivo allo studente.

[Step 5] Visualizzazione delle Predizioni
Vengono estratti i primi 10 numeri dal Test Set. Ogni array di 784 pixel viene rimescolato (reshaped) in una matrice 28x28 per essere renderizzato a schermo.
Matplotlib genera una griglia 2x5:
- In verde i titoli con le predizioni corrette.
- In rosso i titoli dove la rete neurale ha commesso un errore.

---

ESERCIZIO PRATICO DI MODIFICA (Sperimentazione dell'Architettura):
Il workflow spinge lo studente a esplorare l'architettura aprendo main.py e modificando il parametro dell'MLP.
PRIMA: \`hidden_layer_sizes=(50,)\` (1 livello, 50 neuroni)
DOPO: \`hidden_layer_sizes=(50, 50,)\` (2 livelli, 50 neuroni ciascuno, rete "Deep").
Risultato atteso per lo studente: Vengono creati due livelli nascosti. La backpropagation diventerà matematicamente più costosa, il tempo di addestramento si allungherà, ma il modello acquisirà la capacità (in teoria) di mappare relazioni non lineari più complesse e migliorare l'accuracy finale.

---

FLUSSO DIDATTICO (Come si svolge il Lab):
Questo è l'esperienza concreta dello studente durante il laboratorio del Capitolo 5.
1. Lo studente scarica lo ZIP Lab 2 (\`ml-lab-02-neural-networks.zip\`) dal sito.
2. Estrae lo ZIP e naviga nella cartella: \`cd ml-lab-02-neural-networks/\`
3. Installa le dipendenze: \`pip install -r requirements.txt\` (include numpy, scikit-learn, matplotlib, seaborn).
4. Esegue lo script principale: \`python main.py\`
5. Alla prima esecuzione, il dataset MNIST viene scaricato automaticamente via \`fetch_openml\` (operazione una tantum).
6. Il risultato finale è una griglia 2x5 con 10 cifre del Test Set: i titoli in verde indicano predizioni corrette, in rosso gli errori della rete.
7. Lo studente sperimenta modificando \`hidden_layer_sizes\` in main.py e re-eseguendo per vedere l'impatto dell'architettura sull'accuracy.

---

OBIETTIVO GENERAZIONE CONTENUTI DA QUESTO PROMPT:
Usa questo intero workflow didattico per generare materiali di approfondimento per gli studenti. 
Esempi di utilizzo:
1) Script per video tutorial che mostra lo schermo mentre si spiega perché normalizzare MNIST.
2) Infografica animabile che mostra il passaggio dai 784 input, ai 50 nodi nascosti, ai 10 nodi in output.
3) Quiz di rinforzo sui motivi tecnici della scelta di Scikit-Learn invece di PyTorch per questo specifico lab.`}
                />
              </div>
            )}

            <div className="mb-12">
              <KeyTakeaway items={chapter.keyTakeaways} />
            </div>

            {chapter.discussionPrompts && chapter.discussionPrompts.length > 0 && (
              <div className="mb-12">
                <DiscussionPrompt prompts={chapter.discussionPrompts} />
              </div>
            )}

            <ChapterMediaSlots chapter={chapter} />

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

            {chapter.exercises && chapter.exercises.length > 0 && (
              <ChapterExercises exercises={chapter.exercises} />
            )}

            {chapter.quiz && chapter.quiz.length > 0 && (
              <div className="mb-12">
                <h3 className="text-cyan-300 font-bold mb-4">🧠 Quiz del Capitolo</h3>
                <ChapterQuiz quiz={chapter.quiz} chapterId={chapter.id} chapterSlug={chapter.slug} />
              </div>
            )}

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
