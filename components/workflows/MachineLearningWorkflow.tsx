import PracticalWorkflow from '@/components/PracticalWorkflow';
import GlossaryTerm from '@/components/GlossaryTerm';
import type { Chapter } from '@/data/chapters';

interface Props {
  chapter: Chapter;
}

export default function MachineLearningWorkflow({ chapter }: Props) {
  return (
    <>
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
                        Imparerai il ciclo di vita completo di un modello di Machine Learning usando dati reali (i prezzi delle case in California). Non è solo teoria: prenderai dei dati grezzi, allenerai due modelli diversi e misurerai in dollari veri quant&apos;è l&apos;errore delle tue predizioni.
                      </p>
                      <ul className="text-xs text-gray-400 space-y-1 ml-4 list-disc">
                        <li>Usare Pandas per esplorare un dataset da 20.640 righe</li>
                        <li>Il concetto fondamentale di split <GlossaryTerm term="training">Training</GlossaryTerm> vs <GlossaryTerm term="validation">Test</GlossaryTerm></li>
                        <li>Confrontare un modello semplice (Linear Regression) con uno complesso (Random Forest)</li>
                        <li>Leggere le metriche d&apos;errore (<GlossaryTerm term="MAE">MAE</GlossaryTerm> e <GlossaryTerm term="R²">R²</GlossaryTerm>) e tracciare un grafico</li>
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
                    code: `import pandas as pd

df = pd.read_csv('data/housing.csv')
X = df.drop(columns=['Price'])
y = df['Price']`,
                    codeLang: 'python',
                    tryThis: <>Stampa <code>X.head()</code> — quante righe? Quante colonne? Poi verifica se i dati sono pronti per la <GlossaryTerm term="validation">validation</GlossaryTerm>.</>,
                    fileReference: {
                      filename: 'main.py',
                      lines: '28-32',
                      description: 'Carica il dataset e costruisce features (X) e target prezzo (y) in formato Pandas — la base strutturata per tutto il workflow ML.',
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
                      description: 'Divide il dataset: 80% per il training, 20% per il test — il principio fondamentale di ogni valutazione ML affidabile.',
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
                      description: 'Istanzia e addestra due modelli sullo stesso training set: Linear Regression (lineare, veloce) vs Random Forest (ensemble, più potente).',
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
                      description: 'Calcola MAE e R² su training e test per misurare l\'errore in dollari e rilevare overfitting dal gap tra le due metriche.',
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
                    code: `fig, axes = plt.subplots(1, 2, figsize=(14, 5))
ax = axes[0]  # Linear Regression

ax.scatter(y_test, y_pred, alpha=0.3, s=10)
ax.plot([min_val, max_val], [min_val, max_val], 'r--', lw=2, label='Perfect')
ax.set_xlabel('Actual Price ($)')
ax.set_ylabel('Predicted Price ($)')
ax.set_title('Predictions vs Reality')
plt.show()`,
                    codeLang: 'python',
                    tryThis: <>Confronta il grafico dei due modelli: chi ha dispersione minore e <GlossaryTerm term="MAE">MAE</GlossaryTerm> più basso?</>,
                    fileReference: {
                      filename: 'main.py',
                      lines: '63-71',
                      description: 'Grafico scatter previsioni vs realtà — più i punti si avvicinano alla diagonale, migliore è la generalizzazione del modello.',
                    },
                    modificationExample: {
                      lineNumber: 3,
                      description: 'Cambia il colore e la trasparenza per visualizzare meglio i cluster di punti.',
                      before: `ax.scatter(y_test, y_pred, alpha=0.3, s=10)`,
                      after: `ax.scatter(y_test, y_pred, alpha=0.5, s=20, c='cyan', edgecolors='blue', linewidth=0.5)`,
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
Il dataset viene letto direttamente da un file CSV locale (\`data/housing.csv\`) incluso nello ZIP. Nessuna connessione internet richiesta. I dati vengono caricati in un DataFrame Pandas: X contiene le feature (camere, posizione, reddito...) e y i prezzi in dollari (~$15k-$500k).

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

            
    </>
  );
}
