import type { Chapter } from '../types';

export const ch06: Chapter = {
    id: 6,
    slug: 'nlp',
    title: 'NLP: Processamento del Linguaggio Naturale',
    description: 'Come l\'AI capisce il linguaggio umano',
    sections: [
      { title: 'Da Testo a Numeri', content: 'I computer non capiscono le parole come gli esseri umani: devono trasformarle in numeri.\n\nIl processo base ha due step: **tokenizzazione** (spezza il testo in unità) e **embedding** (trasforma ogni token in un vettore numerico). Parole e frasi con significato vicino tendono ad avere vettori vicini nello spazio semantico.\n\n*Nota pratica:* se la tokenizzazione è sbagliata, anche il miglior modello produrrà risposte incoerenti. <<Takeaway: NLP parte dalla qualità della rappresentazione numerica del testo>>.' , media: [ { type: 'infographic', title: 'Token e embedding', description: 'Schema visuale: testo → token → vettori numerici.', placeholderPath: 'media/ch06-nlp/sec-01/infographic.png', notes: 'placeholder' } ]},
      { title: 'Transformer e Attention', content: 'I **Transformer** sono l\'architettura alla base dei moderni LLM. Il meccanismo chiave è l\'**attention**: il modello pesa dinamicamente quali parti del testo sono più rilevanti nel contesto attuale.\n\nEsempio: in una frase lunga, attention permette di collegare parole distanti ma semanticamente legate, migliorando coerenza e comprensione.\n\n*Nota pratica:* l\'attention migliora il focus, ma non elimina errori fattuali: serve sempre validazione output. <<Takeaway: attenzione al contesto > semplice sequenza di parole>>.' , media: [ { type: 'video', title: 'Transformer in pratica', description: 'Spiegazione visiva del meccanismo attention su frasi reali.', placeholderPath: 'media/ch06-nlp/sec-02/video.mp4', notes: 'placeholder' } ]},
      { title: 'Startup Lens', content: 'In un prodotto reale NLP non significa solo "prompt": significa pipeline completa con fallback, moderazione, monitoraggio qualità e controllo costi token.\n\nSe non tracci latenza, tasso fallback e qualità percepita, il sistema sembra funzionare in demo ma degrada in produzione.' },
      { title: 'Errore comune + Check rapido', content: '**Errore comune:** valutare il sistema NLP solo su 2-3 prompt "fortunati".\n\n**Check rapido (2 min):** scegli un caso d\'uso (chat supporto, FAQ, classificazione) e indica 2 prompt edge-case che potrebbero rompere il comportamento atteso.' , media: [ { type: 'podcast', title: 'Podcast — Prompt edge-case', description: 'Come testare robustezza NLP con casi limite.', placeholderPath: 'media/ch06-nlp/sec-04/podcast.mp3', notes: 'placeholder' } ]}
    ],
    keyTakeaways: [
      'Il linguaggio deve essere convertito in numeri',
      'Attention mechanism = "cosa è importante"',
      'Transformer = base di ChatGPT e moderni LLM',
      'Context window = quante parole ricorda il modello',
      'Learning outcome: spiegare token/embedding/attention su un esempio pratico',
    ],
    labNote: 'Lab 3 — NLP Sentiment Analysis (ZIP scaricabile: ml-lab-03-nlp.zip). Dataset inline 30 frasi italiane (15 positive + 15 negative), nessun download esterno. Step: preprocessing regex, TF-IDF vectorization, confronto Logistic Regression vs Naive Bayes, confusion matrix seaborn + top 10 parole sentiment. Esperimento: modifica mia_recensione in fondo al main.py per testare frasi personalizzate.',
    discussionPrompts: [
      'Come cambierebbe ChatGPT se non avesse Attention mechanism?',
      'Qual è il limite della context window e come potrebbe impattare la comprensione?',
      'Se due parole hanno embedding molto simili, cosa significa?'
    ],
    exercises: [
      {
        title: 'Mini Lab — Prompt test set (senza coding)',
        objective: 'Valutare la robustezza di un flusso NLP usando prompt normali ed edge-case prima del rilascio.',
        duration: '15-20 min',
        steps: [
          'Apri il dataset train CH6 e leggi i prompt base con output atteso.',
          'Scegli 3 prompt difficili e spiega perché potrebbero creare ambiguità.',
          'Usa la validation CH6 come confronto finale e identifica dove il sistema dovrebbe avere fallback.',
          'Definisci 2 metriche operative: qualità risposta percepita e fallback rate.'
        ],
        deliverable: 'Checkpoint personale: 3 prompt critici + 1 proposta concreta di guardrail.',
        resources: [
          { label: 'Dataset train CH6 (CSV)', path: '/datasets/ch06-nlp-prompts/train.csv' },
          { label: 'Dataset validation CH6 (CSV)', path: '/datasets/ch06-nlp-prompts/validation.csv' },
          { label: 'Schema campi CH6 (JSON)', path: '/datasets/ch06-nlp-prompts/schema.json' }
        ]
      }
    ],
    quiz: [
      {
        question: "Nel NLP, la tokenizzazione serve a:",
        options: [
          "Dividere il testo in unità elaborabili dal modello",
          "Ridurre automaticamente il bias",
          "Sostituire il fine-tuning",
          "Garantire risposte vere",
        ],
        correct: 0,
        explanation: "Senza tokenizzazione il modello non può convertire correttamente il testo in input numerici."
      },
      {
        question: "Il meccanismo di attention aiuta principalmente a:",
        options: [
          "Pesare il contesto più rilevante per ogni token",
          "Eliminare la necessità di validazione",
          "Ridurre sempre il costo token",
          "Sostituire le policy di safety",
        ],
        correct: 0,
        explanation: "Attention migliora la comprensione contestuale evidenziando relazioni importanti tra parole."
      },
      {
        question: "Un embedding rappresenta:",
        options: [
          "Una rappresentazione numerica del significato",
          "Il prompt originale in formato HTML",
          "Una regola di routing",
          "Una policy di autorizzazione",
        ],
        correct: 0,
        explanation: "Gli embedding mappano testo in uno spazio vettoriale dove la vicinanza riflette similarità semantica."
      },
      {
        question: "Perché testare solo prompt 'facili' è rischioso?",
        options: [
          "Perché nasconde failure mode su edge-case reali",
          "Perché aumenta la precisione",
          "Perché riduce sempre la latenza",
          "Perché rende inutile la context window",
        ],
        correct: 0,
        explanation: "I casi facili non rappresentano la variabilità del traffico reale."
      },
      {
        question: "In un chatbot supporto, quale metrica segnala meglio robustezza operativa?",
        options: [
          "Fallback rate su richieste ambigue",
          "Numero di parole nella risposta",
          "Uso medio CPU locale",
          "Numero di prompt inviati dal team",
        ],
        correct: 0,
        explanation: "Il fallback rate indica quanto spesso il sistema non gestisce bene casi reali complessi."
      },
      {
        question: "Se due parole hanno embedding vicini, significa che:",
        options: [
          "Sono usate in contesti semantici simili",
          "Sono sempre sinonimi perfetti",
          "Hanno stessa lunghezza",
          "Appartengono allo stesso dataset",
        ],
        correct: 0,
        explanation: "Vicini nello spazio vettoriale implica similarità d'uso, non identità assoluta di significato."
      },
      {
        question: "Quale approccio è più corretto prima del deploy NLP?",
        options: [
          "Prompt test set + guardrail + monitoraggio metriche",
          "Solo demo interna con 3 esempi",
          "Solo aumento token massimi",
          "Solo tuning temperatura",
        ],
        correct: 0,
        explanation: "Serve pipeline completa: test, regole e osservabilità."
      },
      {
        question: "La context window limita principalmente:",
        options: [
          "Quanto testo il modello può considerare in una singola risposta",
          "Il numero di utenti totali",
          "La velocità della rete internet",
          "La qualità dei dati di training originale",
        ],
        correct: 0,
        explanation: "Se il contesto supera la finestra, il modello perde parte delle informazioni utili."
      },
      {
        question: "Quando conviene introdurre fallback umano/manuale?",
        options: [
          "Quando confidence bassa o richiesta sensibile/ambigua",
          "Mai, l\'LLM basta sempre",
          "Solo quando server down",
          "Solo in fase di training",
        ],
        correct: 0,
        explanation: "Fallback riduce rischio operativo nei casi critici o poco affidabili."
      },
      {
        question: "Qual è il messaggio chiave del capitolo NLP?",
        options: [
          "Qualità NLP = rappresentazione numerica + contesto + test robusti",
          "Basta un prompt creativo per risolvere tutto",
          "Attention elimina tutti gli errori",
          "I dataset non servono se il modello è grande",
        ],
        correct: 0,
        explanation: "La qualità NLP nasce da basi tecniche solide e validazione continua nel mondo reale."
      }
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 6',
        description: 'Panoramica NLP: token, embedding, attention e uso in prodotto.',
        estimatedDuration: '8-10 min',
        placeholderPath: 'media/ch06-nlp/video.mp4',
        notes: 'ready'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 6',
        description: 'Come l\'AI capisce il linguaggio: tokenizzazione, embedding e attention.',
        placeholderPath: 'media/ch06-nlp/infographic.png',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 6',
        description: 'NLP in produzione: pipeline, guardrail e fallback.',
        estimatedDuration: '10-15 min',
        placeholderPath: 'media/ch06-nlp/podcast.mp3',
        notes: 'placeholder'
      }
    ]
};
