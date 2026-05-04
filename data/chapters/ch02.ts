import type { Chapter } from '../types';

export const ch02: Chapter = {
    id: 2,
    slug: 'how-ai-works',
    title: 'Come Funziona l\'AI',
    description: 'I tre pilastri fondamentali',
    sections: [
      { title: 'I Tre Pilastri dell\'AI', content: 'Ogni sistema di AI ha bisogno di **tre pilastri**: (1) **DATI** — esempi da cui imparare, (2) **ALGORITMO** — passi che trasformano input in output, (3) **POTENZA DI CALCOLO** — risorse per processare tutto. Senza uno di questi tre, l\'AI non funziona. In produzione questa triade diventa pipeline: raccolta dati, training controllato e monitoraggio continuo delle metriche. <<Se manca un pilastro, crolla tutta la qualità del sistema>>.', media: [ { type: 'infographic', title: 'I 3 Pilastri Fondamentali', description: 'I tre pilastri fondamentali di ogni sistema AI: dati (quantita, qualita, rappresentativita), algoritmo (sequenza di passi per trasformare input in output), potenza di calcolo (GPU, cloud, scalabilita). Schema visuale della triade con esempi pratici per ciascun pilastro.', placeholderPath: 'media/ch02-how-ai-works/sec-01/infographic.png', notes: 'ready' } ] },
      { title: 'Cos\'è un Algoritmo', content: 'Un algoritmo è una **ricetta eseguibile**: una sequenza precisa di passi per trasformare un input in output. Esempio: cucinare la pasta. Algoritmo: (1) acqua a ebollizione, (2) sale, (3) pasta, (4) tempo di cottura. Senza ordine e precisione, il risultato peggiora. *Nel software vale lo stesso principio*: <<input chiaro + passi chiari = output affidabile>>.', media: [ { type: 'infographic', title: 'Algoritmo: ricetta AI', description: 'Analogia visiva cucina-algoritmo: la ricetta come sequenza di istruzioni eseguibili. Dal concetto astratto di algoritmo alla sua implementazione concreta in AI, con esempi di pseudocodice e diagramma di flusso di un classificatore semplice.', placeholderPath: 'media/ch02-how-ai-works/sec-02/infographic.png', notes: 'ready' } ] },
      { title: 'Le Reti Neurali', content: 'Le reti neurali sono algoritmi moderni che apprendono da grandi quantità di dati. Hanno neuroni artificiali collegati da **pesi**, che rappresentano l\'importanza delle connessioni. Durante l\'addestramento, i pesi vengono aggiornati per migliorare il risultato. *Non è magia*: è ottimizzazione iterativa. <<Più il training è curato, più la rete generalizza bene>>.', media: [ { type: 'video', title: 'Video — Le Reti Neurali', description: 'Animazione didattica sulle reti neurali: neuroni artificiali, connessioni pesate, funzioni di attivazione. Come i pesi vengono aggiornati iterativamente durante il training per ridurre l errore. Dal perceptron alle reti moderne in 5 minuti.', placeholderPath: 'media/ch02-how-ai-works/sec-03/video.mp4', notes: 'ready' } ] },
      { title: "Caso reale", content: "In un e-commerce reale: dati ordini + catalogo alimentano un modello di raccomandazione, l\'algoritmo di ranking decide i suggerimenti, il cloud scala nei picchi. Quando uno dei 3 pilastri degrada, cala la conversione. La performance business dipende dalla qualità tecnica end-to-end." },
      { title: "Production Warning + Task", content: "**Warning:** senza monitoraggio post-deploy, il modello degrada nel tempo (data drift).\n\n**Task (20 min):** definisci 4 metriche da monitorare in produzione:\n- **Accuracy proxy** (qualità percepita/precisione su campioni verificati)\n- **Latenza** (tempo medio risposta)\n- **Fallback rate** (quante richieste vanno su fallback/manuale)\n- **Segnalazioni utente** (errori reali riportati in uso)\n\n<<Nessun modello è 'finito' dopo il deploy: va osservato continuamente>>.", media: [ { type: 'podcast', title: 'Podcast — Accuracy non basta', description: 'Un podcast sul rischio silenzioso del data drift: perché un modello che funziona oggi può degradare silenziosamente in produzione. Come costruire un sistema di monitoraggio con 4 metriche operative (accuracy proxy, latenza, fallback rate, segnalazioni utente) e quando intervenire. Collega i tre pilastri AI del capitolo con la realtà operativa post-deploy. Takeaway: un modello non è mai finito dopo il rilascio — va osservato come un sistema vivente.', placeholderPath: 'media/ch02-how-ai-works/sec-05/podcast.mp3', notes: 'placeholder' } ]},
    ],
    keyTakeaways: [
      'Algoritmo = serie di passi precisi (non intuizioni)',
      'Reti neurali ricercano somiglianze, non significati',
      'Più dati = migliore apprendimento',
      'L\'output dipende dalla qualità dell\'input',
      'Learning outcome: spiegare la triade dati-algoritmo-calcolo e mapparla su un caso reale',
    ],
    discussionPrompts: [
      'Quale dei tre pilastri (Dati, Algoritmo, Potenza) pensi sia il più importante per l\'AI moderno?',
      'Come cambierebbe il risultato se uno dei tre pilastri fosse di qualità inferiore?',
      'Puoi pensare a un algoritmo che usi nella vita quotidiana, magari in cucina o nello sport?'
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 2',
        description: 'Video completo del Capitolo 2: i tre pilastri AI (dati, algoritmo, calcolo), come funziona un algoritmo, introduzione alle reti neurali e monitoraggio post-deploy. Con esempi da e-commerce e produzione reale.',
        estimatedDuration: '9-10 min',
        placeholderPath: 'media/ch02-how-ai-works/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 2',
        description: 'Podcast del Capitolo 2: triade AI, algoritmi come ricette eseguibili, reti neurali e ottimizzazione iterativa. Con focus sulle implicazioni pratiche per chi costruisce prodotti digitali. Ascoltabile in autonomia senza slide.',
        estimatedDuration: '16-17 min',
        placeholderPath: 'media/ch02-how-ai-works/podcast.mp3',
        notes: 'ready'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 2',
        description: 'Infografica riassuntiva Capitolo 2: schema della triade dati-algoritmo-calcolo, anatomia semplificata di una rete neurale, e checklist di monitoraggio post-deploy con le 4 metriche operative fondamentali.',
        placeholderPath: 'media/ch02-how-ai-works/infographic.jpg',
        notes: 'ready'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Materiale scaricabile per studio e esercitazione guidata.',
        placeholderPath: 'media/ch02-how-ai-works/handout.pdf',
        notes: 'placeholder'
      }
    ],
    quiz: [
      {
        question: "Cosa distingue il Machine Learning dalla programmazione tradizionale?",
        options: [
          "Il ML usa solo linguaggi di basso livello",
          "Nel ML le regole emergono dai dati, non vengono scritte a mano",
          "La programmazione tradizionale è sempre più lenta",
          "Il ML non richiede dati per funzionare",
        ],
        correct: 1,
        explanation: "Nella programmazione classica si scrivono regole esplicite. Nel ML si forniscono esempi (dati) e il modello apprende le regole da solo — utile quando le regole sono troppo complesse o sconosciute."
      },
      {
        question: "Supervised Learning richiede:",
        options: [
          "Dataset con esempi etichettati (input + output atteso)",
          "Solo dati grezzi senza etichette",
          "Un supervisore umano presente durante il training",
          "Dati esclusivamente numerici, mai categorici",
        ],
        correct: 0,
        explanation: "In supervised learning ogni esempio di training ha un'etichetta (es. 'spam'/'non spam', prezzo della casa). Il modello impara a predire l'output dato l'input."
      },
      {
        question: "Qual è la differenza tra classificazione e regressione?",
        options: [
          "La classificazione è sempre più accurata della regressione",
          "Nessuna — sono sinonimi in ML",
          "La regressione usa solo alberi decisionali",
          "La classificazione predice categorie discrete, la regressione predice valori continui",
        ],
        correct: 3,
        explanation: "Classificazione: 'è spam o no?', 'che cifra è?' — output discreto. Regressione: 'quanto costa questa casa?', 'quanti gradi farà domani?' — output numerico continuo."
      },
      {
        question: "Un modello ha training accuracy 99% e test accuracy 62%. Cosa sta succedendo?",
        options: [
          "Underfitting — il modello è troppo semplice",
          "Overfitting — il modello ha memorizzato il training set ma non generalizza",
          "Risultato normale — il gap è sempre così ampio",
          "Errore nel codice dello split train/test",
        ],
        correct: 1,
        explanation: "Gap enorme tra training e test accuracy = overfitting classico. Il modello ha 'studiato a memoria' il training set invece di imparare pattern generalizzabili."
      },
      {
        question: "Quale tipo di problema è più adatto all'Unsupervised Learning?",
        options: [
          "Predire il prezzo di una casa da 8 feature note",
          "Classificare email in spam/non-spam con esempi etichettati",
          "Scoprire segmenti naturali in 100.000 clienti senza etichette predefinite",
          "Riconoscere cifre scritte a mano con dataset MNIST etichettato",
        ],
        correct: 2,
        explanation: "Unsupervised Learning lavora senza etichette — trova strutture nascoste nei dati. La segmentazione clienti (clustering) è il caso d'uso classico: non sai a priori quanti gruppi esistono."
      },
      {
        question: "Il validation set serve a:",
        options: [
          "Aumentare la quantità di dati di training",
          "Validare l'identità dell'utente che usa il modello",
          "Valutare le performance durante il training senza 'contaminare' il test set finale",
          "Sostituire il test set nelle fasi avanzate",
        ],
        correct: 2,
        explanation: "Il validation set è separato dal test set: si usa durante il development per scegliere iperparametri e confrontare modelli. Il test set si usa UNA SOLA VOLTA alla fine — è la valutazione finale imparziale."
      },
      {
        question: "Random Forest migliora rispetto a un singolo albero decisionale perché:",
        options: [
          "Usa più dati di training grazie alla parallelizzazione",
          "Combina le previsioni di molti alberi diversi riducendo varianza e overfitting",
          "Ha sempre meno parametri da ottimizzare",
          "Non richiede la divisione train/test",
        ],
        correct: 1,
        explanation: "Random Forest è un ensemble: allena molti alberi su subset diversi dei dati e delle feature, poi fa voting. La varietà degli alberi riduce l'overfitting del singolo albero."
      },
      {
        question: "Una startup vuole predire il churn (abbandono) dei clienti. Quale metrica è più rilevante?",
        options: [
          "Solo accuracy globale",
          "Precision e Recall sul churn (classe positiva), non solo accuracy",
          "Solo velocità di training del modello",
          "Numero di feature nel dataset",
        ],
        correct: 1,
        explanation: "Con churn, i clienti che abbandonano sono tipicamente pochi (dataset sbilanciato). Accuracy del 95% può significare 'predico sempre non-churn'. Serve Recall (quanti churner identifico) e Precision (quanti allarmi sono corretti)."
      },
      {
        question: "Cosa si intende per 'feature engineering'?",
        options: [
          "La scelta del framework ML da usare",
          "Il processo di selezionare, trasformare e creare variabili input utili per il modello",
          "L'ottimizzazione degli iperparametri del modello",
          "La visualizzazione dei risultati dopo il training",
        ],
        correct: 1,
        explanation: "Feature engineering è spesso più impattante del modello scelto: estrarre l'ora dal timestamp, combinare feature correlate, normalizzare scale diverse — tutto questo può fare la differenza tra un modello mediocre e uno eccellente."
      },
      {
        question: "Qual è il ciclo corretto di un progetto ML?",
        options: [
          "Scegli modello → training → deploy (senza validazione)",
          "Raccogli dati → esplora → prepara → training → valida → deploy → monitora",
          "Training → raccogli dati → valida",
          "Deploy → training → raccogli dati",
        ],
        correct: 1,
        explanation: "Il ciclo ML corretto inizia sempre dai dati e termina con il monitoring in produzione. Saltare fasi (soprattutto validazione e monitoring) è la causa principale di modelli che falliscono in produzione."
      }
    ]
};