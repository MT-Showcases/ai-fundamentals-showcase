import type { Chapter } from '../types';

export const ch06: Chapter = {
    id: 6,
    slug: 'nlp',
    title: 'NLP: Processamento del Linguaggio Naturale',
    description: 'Come l\'AI capisce il linguaggio umano',
    sections: [
      { title: 'Da Testo a Numeri', content: 'I computer non capiscono le parole come gli esseri umani: devono trasformarle in numeri.\n\nIl processo base ha due step: **tokenizzazione** (spezza il testo in unità) e **embedding** (trasforma ogni token in un vettore numerico). Parole e frasi con significato vicino tendono ad avere vettori vicini nello spazio semantico.\n\n*Nota pratica:* se la tokenizzazione è sbagliata, anche il miglior modello produrrà risposte incoerenti. <<Takeaway: NLP parte dalla qualità della rappresentazione numerica del testo>>.' , media: [ { type: 'infographic', title: 'Token e embedding', description: 'Come un computer trasforma il linguaggio umano in numeri: tokenizzazione (spezzare il testo in unità), embedding (vettori numerici per parole con significato simile), e spazio semantico dove parole vicine hanno vettori vicini. Il punto di partenza di qualsiasi sistema NLP moderno.', placeholderPath: 'media/ch06-nlp/sec-01/infographic.png', notes: 'placeholder' } ]},
      { title: 'Transformer e Attention', content: 'I **Transformer** sono l\'architettura alla base dei moderni LLM. Il meccanismo chiave è l\'**attention**: il modello pesa dinamicamente quali parti del testo sono più rilevanti nel contesto attuale.\n\nEsempio: in una frase lunga, attention permette di collegare parole distanti ma semanticamente legate, migliorando coerenza e comprensione.\n\n*Nota pratica:* l\'attention migliora il focus, ma non elimina errori fattuali: serve sempre validazione output. <<Takeaway: attenzione al contesto > semplice sequenza di parole>>.' , media: [ { type: 'video', title: 'Transformer in pratica', description: 'Come i Transformer usano il meccanismo attention per pesare dinamicamente le parole rilevanti nel contesto. Esempio visivo su frasi lunghe: come due parole distanti ma correlate vengono collegate, e perché questo è superiore alle reti ricorrenti precedenti.', placeholderPath: 'media/ch06-nlp/sec-02/video.mp4', notes: 'placeholder' } ]},
      { title: 'Startup Lens', content: 'In un prodotto reale NLP non significa solo "prompt": significa pipeline completa con fallback, moderazione, monitoraggio qualità e controllo costi token.\n\nSe non tracci latenza, tasso fallback e qualità percepita, il sistema sembra funzionare in demo ma degrada in produzione.' },
      { title: 'Errore comune + Check rapido', content: '**Errore comune:** valutare il sistema NLP solo su 2-3 prompt "fortunati".\n\n**Check rapido (2 min):** scegli un caso d\'uso (chat supporto, FAQ, classificazione) e indica 2 prompt edge-case che potrebbero rompere il comportamento atteso.' , media: [ { type: 'podcast', title: 'Podcast — Prompt edge-case', description: 'Un episodio breve ma denso sull\'errore più comune nei sistemi NLP: valutare solo su prompt \'fortunati\'. Il podcast guida lo studente nella costruzione di un mini test set con edge-case reali (ambiguità, negazioni, frasi miste, tono ironico) per un caso d\'uso specifico (chat supporto, FAQ o classificazione). Collega la robustezza NLP con la pipeline di produzione vista nella Startup Lens e con le metriche operative del capitolo precedente. Takeaway: un sistema NLP affidabile si misura sui casi difficili, non su quelli facili.', placeholderPath: 'media/ch06-nlp/sec-04/podcast.mp3', notes: 'placeholder' } ]}
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
        question: "Cos'è la tokenizzazione nel NLP?",
        options: [
          "La compressione del testo per ridurne la dimensione",
          "Il processo che spezza il testo in unità (token) elaborabili dal modello",
          "La traduzione automatica tra lingue diverse",
          "L'eliminazione delle parole duplicate nel testo",
        ],
        correct: 1,
        explanation: "La tokenizzazione converte testo grezzo in unità discrete (parole, sottoparole o caratteri) che il modello può ricevere come input numerico."
      },
      {
        question: "Nel lab NLP del capitolo 6, quale tecnica converte le frasi in vettori numerici?",
        options: [
          "One-hot encoding con padding fisso",
          "TF-IDF (Term Frequency–Inverse Document Frequency)",
          "Base64 encoding",
          "StandardScaler come nel lab MNIST",
        ],
        correct: 1,
        explanation: "TF-IDF pesa ogni parola in base a quanto è frequente nel documento ma rara nel corpus — parole comuni come 'il', 'di' ricevono peso basso; parole caratteristiche ricevono peso alto."
      },
      {
        question: "Il meccanismo di Attention nei Transformer serve principalmente a:",
        options: [
          "Ridurre il numero di parametri del modello",
          "Eliminare la necessità di dati etichettati",
          "Pesare dinamicamente quali parole del contesto sono più rilevanti per ogni posizione",
          "Velocizzare il preprocessing del testo",
        ],
        correct: 2,
        explanation: "Attention permette al modello di 'guardare' tutta la sequenza contemporaneamente e decidere, per ogni token, quali altri token sono più utili — superando i limiti delle reti ricorrenti."
      },
      {
        question: "Due parole hanno embedding molto vicini nello spazio vettoriale. Cosa significa?",
        options: [
          "Sono ortograficamente simili (es. 'casa' e 'cassa')",
          "Appaiono spesso in contesti simili e hanno uso semantico vicino",
          "Hanno la stessa lunghezza in caratteri",
          "Appartengono alla stessa categoria grammaticale",
        ],
        correct: 1,
        explanation: "Gli embedding catturano similarità d'uso: 're' e 'regina' sono vicini perché compaiono in contesti simili. Non è ortografia, è semantica distribuzionale."
      },
      {
        question: "La context window di un LLM limita principalmente:",
        options: [
          "Il numero di utenti simultanei supportati",
          "La velocità di risposta in millisecondi",
          "La quantità di testo che il modello può considerare in una singola elaborazione",
          "Il numero di lingue supportate",
        ],
        correct: 2,
        explanation: "Se il testo supera la context window, il modello perde le informazioni fuori finestra. Questo impatta domande su documenti lunghi, conversazioni prolungate e RAG con chunk grandi."
      },
      {
        question: "Nel lab NLP confronti Logistic Regression e Naive Bayes su 30 frasi. Quale vantaggio ha Naive Bayes?",
        options: [
          "È sempre più accurato su qualsiasi dataset",
          "Non richiede feature engineering",
          "È molto veloce e funziona bene anche con pochissimi dati",
          "Non ha iperparametri da configurare",
        ],
        correct: 2,
        explanation: "Naive Bayes è velocissimo da addestrare e sorprendentemente efficace con pochi esempi — ideale per prototipi NLP. Con più dati, Logistic Regression tende a superarlo."
      },
      {
        question: "Un chatbot di supporto ha confidence media alta ma fallback rate del 30%. Come interpreti?",
        options: [
          "Il modello è eccellente — confidence alta è l'unica metrica che conta",
          "Il modello è overconfident: dichiara sicurezza alta anche quando sbaglia",
          "Il fallback rate alto è normale e irrilevante",
          "Serve solo più GPU per abbassare la latenza",
        ],
        correct: 1,
        explanation: "Alta confidence + alto fallback = overconfidence. Il modello non sa quando non sa. Serve calibrazione e test su edge-case reali, non solo sui casi facili."
      },
      {
        question: "Perché valutare un sistema NLP solo su prompt 'facili' è pericoloso?",
        options: [
          "I prompt facili costano troppi token",
          "I casi facili non rappresentano la variabilità del traffico reale — il sistema sembrerà funzionare finché non va in produzione",
          "Viola le policy OpenAI",
          "I prompt facili rallentano il benchmark",
        ],
        correct: 1,
        explanation: "In produzione arrivano frasi ambigue, ironiche, miste (italiano + dialetto + emoji), negazioni, slang. Testare solo su casi puliti crea falsa sicurezza."
      },
      {
        question: "Quando è più utile introdurre un fallback umano in un sistema NLP?",
        options: [
          "Solo quando il modello è open-source",
          "Quando il prompt supera 100 token",
          "Mai — rallenta il sistema",
          "Quando confidence è sotto soglia o il caso impatta decisioni critiche per l'utente",
        ],
        correct: 3,
        explanation: "Il fallback umano non è un fallimento tecnico, è un guardrail operativo. Su casi sensibili (salute, legale, finanziario) o bassa confidence, la supervisione umana riduce il rischio reale."
      },
      {
        question: "Qual è il messaggio operativo chiave del capitolo NLP?",
        options: [
          "Basta un buon modello pre-addestrato — il preprocessing è opzionale",
          "NLP affidabile = pipeline completa: tokenizzazione corretta + embedding + test su edge-case + monitoraggio in produzione",
          "La context window non influisce sulla qualità delle risposte",
          "Naive Bayes è sempre superiore a Logistic Regression per il testo",
        ],
        correct: 1,
        explanation: "Un sistema NLP di qualità non dipende solo dal modello: serve preprocessing solido, test realistici e osservabilità continua. La qualità si costruisce a livello di pipeline, non di singolo componente."
      }
    ]
};