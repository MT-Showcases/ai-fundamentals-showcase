import type { Chapter } from '../types';

export const ch04: Chapter = {
    id: 4,
    slug: 'machine-learning',
    title: 'Machine Learning: Imparare dai Dati',
    description: 'Come gli algoritmi imparano',
    sections: [
      { title: 'Il Processo di Apprendimento', content: '**Machine Learning** significa che l\'algoritmo impara dai dati senza essere programmato esplicitamente. Il processo base è questo: riceve i dati, produce una previsione iniziale, misura l\'errore, aggiorna i parametri e ripete il ciclo molte volte. Dopo molte iterazioni, il modello non "conosce" davvero i dati: apprende pattern utili e migliora la capacità di generalizzare su esempi nuovi. In un prodotto reale il valore nasce da un ciclo rapido di esperimento, misurazione e miglioramento: senza metriche stai solo facendo una demo, non costruendo un sistema affidabile. *Nota pratica:* prima del deploy testa il modello su dati mai visti.  Per migliorare risultati reali servono anche **Supervised Learning**, tuning di **Iperparametro**, buon **Feature Engineering** e lettura corretta di **F1-Score**. <<Takeaway: conta il modello che generalizza meglio, non quello più complesso>>.',  media: [ { type: 'infographic', title: 'Loop di apprendimento ML', description: 'Il ciclo fondamentale del Machine Learning: dati in input, previsione del modello, calcolo errore, aggiornamento pesi. Schema visuale che mostra la differenza tra modello che memorizza (overfitting) e modello che generalizza, con il concetto di train/test split.', placeholderPath: 'media/ch04-machine-learning/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Overfitting e Underfitting', content: '**Overfitting**: quando l\'algoritmo memorizza i dati di training invece di apprendere pattern generali. È come studiare gli esami passati a memoria e andare in crisi quando cambiano le domande.\n\n**Underfitting**: quando il modello è troppo semplice per catturare i pattern rilevanti.\n\nSegnale pratico rapido: training score alto + validation score basso = overfitting; training e validation entrambi bassi = underfitting. La sfida è trovare equilibrio tra semplicità e capacità di generalizzare su dati nuovi. *Nota pratica:* valuta sempre il modello su dati mai visti, non solo su quelli di training. <<Takeaway: scegli il modello che regge meglio nel reale, non quello che "brilla" solo in training>>.',  media: [ { type: 'video', title: 'Video — Overfitting vs Underfitting', description: 'Spiegazione visiva di overfitting e underfitting con curve di training e validation loss. Come riconoscere i segnali diagnostici: gap crescente tra train e val, bias elevato, e le strategie di mitigazione (regularization, dropout, early stopping).', placeholderPath: 'media/ch04-machine-learning/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: "Caso reale", content: "Nel forecasting delle vendite, un modello lineare può battere modelli più complessi quando i dati sono pochi, puliti e relativamente stabili nel tempo. In pratica non scegli il modello più sofisticato, ma quello che mantiene performance stabili sui dati nuovi del tuo scenario reale.", media: [ { type: 'infographic', title: 'Scelta modello nel forecasting', description: 'Framework decisionale in 3 passi per scegliere il modello giusto: dimensione dataset, complessità del pattern, vincoli di interpretabilità. Mostra quando un modello semplice (LR) batte uno complesso (RF) e come il contesto business guida la scelta tecnica.', placeholderPath: 'media/ch04-machine-learning/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: "Production Warning + Task", content: "**Warning:** ottimizzare solo l'accuracy può nascondere errori gravi, soprattutto quando alcune classi sono rare ma importanti.\n\n**Task (20 min):** scegli due metriche aggiuntive — ad esempio precision e recall per classificazione, oppure MAE e MAPE per regressione — e spiega in quale scenario reale le useresti al posto dell\'accuracy.", media: [ { type: 'podcast', title: 'Podcast — Accuracy non basta', description: 'Perché ottimizzare solo l\'accuracy è pericoloso: il podcast esplora scenari reali in cui un\'accuracy alta nasconde fallimenti gravi (classi rare, sbilanciamento, errori asimmetrici). Guida lo studente nella scelta di metriche complementari: precision e recall per classificazione, MAE e MAPE per regressione. Collega con overfitting (CH4 sec-2) e con la scelta strategica del modello in CH9. Takeaway operativo: la metrica giusta dipende dal costo degli errori nel tuo contesto specifico.', placeholderPath: 'media/ch04-machine-learning/sec-04/podcast.mp3', notes: 'placeholder' } ] },
      {
        title: 'ML Workflow Pratico — 5 Step',
        content: 'Impara facendo con la guida e lo ZIP lab. Scarica, leggi gli step qui sotto, esegui main.py e sperimenta.',
        media: [
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
        ]
      },
    ],
    keyTakeaways: [
      'Il modello impara cercando pattern nei dati',
      'Overfitting = memorizzazione (non generalizzazione)',
      'Underfitting = modello troppo semplice',
      'La validazione è cruciale',
      'Learning outcome: distinguere overfitting/underfitting e scegliere una metrica adeguata',
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 4',
        description: 'Video completo Capitolo 4: come il Machine Learning apprende dai dati, overfitting e underfitting con esempi visivi, scelta delle metriche giuste per classificazione e regressione, e workflow ML in 5 step applicato a California Housing.',
        estimatedDuration: '8-10 min',
        placeholderPath: 'media/ch04-machine-learning/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 4',
        description: 'Podcast del Capitolo 4: ciclo di apprendimento ML, trappola dell accuracy, come scegliere precision vs recall in base al costo degli errori, e decisioni architetturali per modelli che generalizzano davvero in produzione.',
        estimatedDuration: '10-15 min',
        placeholderPath: 'media/ch04-machine-learning/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 4',
        description: 'Infografica riassuntiva Capitolo 4: pipeline ML in 5 step, diagramma overfitting vs underfitting con curve diagnostiche, tabella comparativa metriche (accuracy, precision, recall, F1, MAE, R2) e quando usare ciascuna.',
        placeholderPath: 'media/ch04-machine-learning/infographic.png',
        notes: 'ready'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Scheda operativa per diagnosi modello e scelta metriche.',
        placeholderPath: 'media/ch04-machine-learning/handout.pdf',
        notes: 'placeholder'
      }
    ],
    discussionPrompts: [
      'Come potremmo testare se un modello sta soffrendo di overfitting?',
      'In quali situazioni reali è più rischioso l\'overfitting vs underfitting?',
      'Se un algoritmo impiega 1000 cicli per imparare, cosa succede al ciclo 1001?'
    ],
    quiz: [
      {
        question: 'Qual è il primo step corretto in qualsiasi workflow ML?',
        options: [
          'Scegliere il modello più performante disponibile',
          'Caricare e esplorare i dati per capire distribuzione, valori mancanti e range',
          'Ottimizzare gli iperparametri',
          'Fare il deploy su cloud',
        ],
        correct: 1,
        explanation: 'Prima di qualsiasi modello: esplora i dati. Capire distribuzione, outlier, correlazioni e valori mancanti è fondamentale — un modello addestrato su dati mal compresi produrrà risultati inaffidabili.'
      },
      {
        question: 'Nel lab CH4 carichi il dataset con pd.read_csv(\'data/housing.csv\'). Perché non usiamo fetch_california_housing()?',
        options: [
          'fetch_california_housing() è deprecata in Python 3',
          'Il CSV ha più righe del dataset sklearn',
          'Il CSV locale funziona offline — nessuna dipendenza di rete o versione di sklearn',
          'fetch_california_housing() non restituisce prezzi in dollari',
        ],
        correct: 2,
        explanation: 'Il CSV bundled nello ZIP garantisce che il lab funzioni su qualsiasi PC, offline, senza problemi di versione di sklearn o connessione internet — essenziale in aula.'
      },
      {
        question: 'Perché si divide il dataset in train e test set PRIMA di addestrare il modello?',
        options: [
          'Per ridurre il tempo di training',
          'Per avere più dati di training disponibili',
          'Perché sklearn lo richiede obbligatoriamente',
          'Per valutare le performance su dati mai visti durante il training — evitando stime ottimistiche',
        ],
        correct: 3,
        explanation: 'Se valutassi il modello sugli stessi dati usati per il training, otterresti una stima gonfiata — il modello \'ha già visto le risposte\'. Il test set simula dati reali nuovi: è la valutazione onesta.'
      },
      {
        question: 'Linear Regression ha MAE $65.000, Random Forest ha MAE $43.000. Quale scegli?',
        options: [
          'Dipende dal contesto: se interpretabilità è critica, Linear Regression può valere i $22k in più di errore',
          'Linear Regression — è più semplice e interpretabile',
          'Random Forest — MAE più basso significa errore minore in media',
          'Non si può decidere senza sapere l\'R²',
        ],
        correct: 0,
        explanation: 'Non esiste una risposta universale. Random Forest è più accurato, ma Linear Regression è interpretabile (sai PERCHÉ prevede quel prezzo). In contesti regolati o dove devi spiegare le decisioni, l\'interpretabilità può valere più dell\'accuracy.'
      },
      {
        question: 'Nel grafico scatter del lab, i punti si allineano perfettamente alla diagonale rossa. Cosa indica?',
        options: [
          'Overfitting — il modello ha memorizzato i dati',
          'Underfitting — il modello è troppo semplice',
          'Il modello predice perfettamente ogni caso — potenziale data leakage da verificare',
          'La visualizzazione è configurata male',
        ],
        correct: 2,
        explanation: 'Perfetta aderenza alla diagonale su dati reali è sospetta — quasi mai succede. Potrebbe indicare data leakage (il test set ha informazioni del training). Un R²=0.85-0.90 su housing è già eccellente.'
      },
      {
        question: 'Cosa misura il MAE (Mean Absolute Error) nel contesto del lab prezzi case?',
        options: [
          'La percentuale di case previste correttamente',
          'L\'errore medio in dollari tra prezzo previsto e prezzo reale',
          'Il numero di case nel dataset',
          'La correlazione tra feature e prezzo',
        ],
        correct: 1,
        explanation: 'MAE = media degli errori assoluti. Se MAE=$45.000, il modello sbaglia in media di $45.000 per casa. È una metrica intuitiva: stessa unità di misura del target (dollari).'
      },
      {
        question: 'Hai training MAE=$38k e test MAE=$71k. Cosa fai?',
        options: [
          'Il gap grande suggerisce overfitting — riduci la complessità del modello o aumenta i dati di training',
          'Aumenti il numero di alberi in Random Forest',
          'Consideri il modello pronto per il deploy',
          'Cambi metrica — usi R² invece di MAE',
        ],
        correct: 0,
        explanation: 'Gap training/test = overfitting. Soluzioni: ridurre max_depth negli alberi, aumentare i dati, aggiungere regolarizzazione. Non si risolve aumentando n_estimators — quello aggiunge complessità, non la riduce.'
      },
      {
        question: 'R²=0.82 significa che:',
        options: [
          'Il modello sbaglia nel 18% dei casi',
          'Il modello spiega l\'82% della variabilità nei prezzi — l\'18% resta inspiegato',
          'Il modello prevede correttamente l\'82% delle case',
          'L\'accuracy è dell\'82%',
        ],
        correct: 1,
        explanation: 'R² non è una percentuale di casi corretti — è la proporzione di varianza spiegata. R²=0.82 significa che il modello cattura l\'82% delle variazioni di prezzo; il 18% dipende da fattori non nelle feature (es. stato interno, vista, ristrutturazioni).'
      },
      {
        question: 'Quale esperimento del lab mostra il trade-off velocità/accuratezza in Random Forest?',
        options: [
          'Cambiare test_size da 0.2 a 0.3',
          'Modificare random_state=42 in random_state=7',
          'Ridurre n_estimators da 100 a 10 — training molto più veloce ma MAE peggiore',
          'Aggiungere StandardScaler prima del training',
        ],
        correct: 2,
        explanation: 'n_estimators=10 vs 100: con 10 alberi il training è ~10x più veloce, ma l\'ensemble è meno robusto e il MAE cresce. Classico trade-off ingegneristico: quanto accuracy vale il tempo di training?'
      },
      {
        question: 'Qual è il messaggio chiave del capitolo 4 sul workflow ML?',
        options: [
          'Il modello più complesso vince sempre — usa sempre Random Forest',
          'Basta un buon dataset — il modello non conta',
          'Il workflow ML è lineare: si fa una volta sola e si deploya',
          'Un buon ML workflow è ciclico: esplora → prepara → addestra → valuta → itera',
        ],
        correct: 3,
        explanation: 'Il workflow ML non è mai lineare. Dopo la valutazione si torna a esplorare i dati, si aggiungono feature, si cambiano modelli. L\'iterazione guidata dalle metriche è il cuore del processo scientifico applicato al ML.'
      }
    ]
};