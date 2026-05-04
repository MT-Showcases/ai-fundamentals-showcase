import type { Chapter } from '../types';

export const ch04: Chapter = {
    id: 4,
    slug: 'machine-learning',
    title: 'Machine Learning: Imparare dai Dati',
    description: 'Come gli algoritmi imparano',
    sections: [
      { title: 'Il Processo di Apprendimento', content: '**Machine Learning** significa che l\'algoritmo impara dai dati senza essere programmato esplicitamente. Il processo base è questo: riceve i dati, produce una previsione iniziale, misura l\'errore, aggiorna i parametri e ripete il ciclo molte volte. Dopo molte iterazioni, il modello non "conosce" davvero i dati: apprende pattern utili e migliora la capacità di generalizzare su esempi nuovi. In un prodotto reale il valore nasce da un ciclo rapido di esperimento, misurazione e miglioramento: senza metriche stai solo facendo una demo, non costruendo un sistema affidabile. *Nota pratica:* prima del deploy testa il modello su dati mai visti. <<Takeaway: conta il modello che generalizza meglio, non quello più complesso>>.',  media: [ { type: 'infographic', title: 'Loop di apprendimento ML', description: 'Il ciclo fondamentale del Machine Learning: dati in input, previsione del modello, calcolo errore, aggiornamento pesi. Schema visuale che mostra la differenza tra modello che memorizza (overfitting) e modello che generalizza, con il concetto di train/test split.', placeholderPath: 'media/ch04-machine-learning/sec-01/infographic.png', notes: 'placeholder' } ] },
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
        question: "Un modello ha score altissimo sul training set ma peggiora molto su dati nuovi. Il problema più probabile è:",
        options: [
          "Overfitting",
          "Underfitting",
          "Mancanza di internet",
          "UI troppo lenta",
        ],
        correct: 0,
        explanation: "Ottima performance sui dati visti + crollo su dati nuovi è segnale classico di overfitting."
      },
      {
        question: "Quale obiettivo descrive meglio il training di un modello ML?",
        options: [
          "Memorizzare ogni riga del dataset",
          "Apprendere pattern che generalizzino su dati mai visti",
          "Ridurre il numero di feature a uno",
          "Aumentare sempre la complessità del modello",
        ],
        correct: 1,
        explanation: "Il valore reale è la generalizzazione, non la memorizzazione."
      },
      {
        question: "Se training e validation sono entrambi bassi, la diagnosi più probabile è:",
        options: [
          "Overfitting",
          "Underfitting",
          "Perfetta generalizzazione",
          "Data leakage",
        ],
        correct: 1,
        explanation: "Quando il modello va male ovunque, è spesso troppo semplice o mal configurato."
      },
      {
        question: "Nel forecasting vendite con pochi dati stabili, quale scelta è spesso più robusta?",
        options: [
          "Modello lineare ben validato",
          "Modello più complesso possibile",
          "Modello senza test",
          "Qualsiasi modello con più parametri",
        ],
        correct: 0,
        explanation: "Semplice ma robusto può battere complesso ma instabile in contesti piccoli."
      },
      {
        question: "Perché usare solo l\'accuracy può essere pericoloso?",
        options: [
          "Perché misura solo la latenza",
          "Perché può nascondere errori su classi rare importanti",
          "Perché è valida solo in regressione",
          "Perché elimina automaticamente il bias",
        ],
        correct: 1,
        explanation: "Con classi sbilanciate, accuracy alta non garantisce decisioni corrette nei casi critici."
      },
      {
        question: "Quale coppia metrica è più adatta in classificazione quando vuoi controllare falsi positivi/falsi negativi?",
        options: [
          "Precision e Recall",
          "MAE e MAPE",
          "CPU e RAM",
          "Throughput e uptime",
        ],
        correct: 0,
        explanation: "Precision/recall aiutano a leggere il trade-off sugli errori di classe."
      },
      {
        question: "Quale coppia metrica è più adatta in regressione?",
        options: [
          "Precision e Recall",
          "MAE e MAPE",
          "AUC e F1",
          "Top-1 e Top-5",
        ],
        correct: 1,
        explanation: "MAE/MAPE sono metriche standard per errore su valori continui."
      },
      {
        question: "Hai due modelli: A più accurato in test statico, B più stabile su dati nuovi reali. In produzione scegli:",
        options: [
          "A, sempre",
          "B, perché massimizza robustezza nel reale",
          "A, ma senza monitoraggio",
          "Nessuno",
        ],
        correct: 1,
        explanation: "La stabilità su dati reali vale più del picco su test statico isolato."
      },
      {
        question: "Quale pratica riduce meglio il rischio di deploy fragile?",
        options: [
          "Valutare solo training score",
          "Validare su dati mai visti e monitorare KPI post-deploy",
          "Disattivare logging",
          "Cambiare solo il prompt",
        ],
        correct: 1,
        explanation: "Serve controllo continuo, non solo un buon numero in fase di training."
      },
      {
        question: "Qual è la frase più corretta sul Machine Learning in produzione?",
        options: [
          "Il modello è finito dopo il training",
          "Il modello va osservato e adattato nel tempo",
          "Basta aumentare la compute per risolvere tutto",
          "Le metriche sono opzionali",
        ],
        correct: 1,
        explanation: "In produzione il contesto cambia: monitoraggio e iterazione sono obbligatori."
      }
    ]
};
