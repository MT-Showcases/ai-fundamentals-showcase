// Chapter data for AI Fundamentals Showcase
// Source: Fondamenti di AI course (89 pages, updated 2026-04-24)

export interface Section {
  title: string;
  content: string;
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  description: string;
  sections: Section[];
  keyTakeaways: string[];
  discussionPrompts?: string[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: 'what-is-ai',
    title: "Cos'è davvero l'Intelligenza Artificiale",
    description: 'Introduzione ai concetti fondamentali dell\'AI',
    sections: [
      { title: 'AI vs Intelligenza Umana', content: 'Confronto tra capacità umane e AI' },
      { title: "L'AI nella Vita Quotidiana", content: 'Esempi pratici: Spotify, Netflix, assistenti vocali' }
    ],
    keyTakeaways: [
      'L\'AI non pensa — riconosce pattern nei dati',
      'L\'AI ha bisogno di migliaia di esempi, l\'uomo impara da pochi',
      'I 3 ingredienti: Dati + Algoritmo + Potenza di calcolo',
      'L\'AI sbaglia quando i dati sono scarsi o distorti',
      'L\'AI è uno strumento — la qualità dipende dall\'input'
    ]
  },
  {
    id: 2,
    slug: 'how-ai-works',
    title: 'Come Funziona l\'AI',
    description: 'I tre ingredienti fondamentali',
    sections: [
      { title: 'I Tre Ingredienti dell\'AI', content: 'Dati, Algoritmo, Potenza di calcolo' },
      { title: 'Cos\'è un Algoritmo', content: 'Serie di passi per trasformare dati in risultato' },
      { title: 'Le Reti Neurali', content: 'Tipo di algoritmo moderno per riconoscere schemi' }
    ],
    keyTakeaways: [
      'Algoritmo = serie di passi precisi (non intuizioni)',
      'Reti neurali ricercano somiglianze, non significati',
      'Più dati = migliore apprendimento',
      'L\'output dipende dalla qualità dell\'input'
    ]
  },
  {
    id: 3,
    slug: 'data-importance',
    title: 'L\'Importanza dei Dati',
    description: 'Il carburante dell\'AI',
    sections: [
      { title: 'Quantità vs Qualità', content: 'Quali dati servono davvero' },
      { title: 'Bias nei Dati', content: 'Come i dati distorti creano AI sleale' }
    ],
    keyTakeaways: [
      'Dati di qualità = AI di qualità',
      'Bias nei dati = discriminazione nell\'output',
      'Pulizia dati è 80% del lavoro in ML',
      'Diversità nei dati = modello più robusto'
    ]
  },
  {
    id: 4,
    slug: 'machine-learning',
    title: 'Machine Learning: Imparare dai Dati',
    description: 'Come gli algoritmi imparano',
    sections: [
      { title: 'Il Processo di Apprendimento', content: 'Step-by-step del training' },
      { title: 'Overfitting e Underfitting', content: 'Errori comuni di training' }
    ],
    keyTakeaways: [
      'Il modello impara cercando pattern nei dati',
      'Overfitting = memorizzazione (non generalizzazione)',
      'Underfitting = modello troppo semplice',
      'La validazione è cruciale'
    ]
  },
  {
    id: 5,
    slug: 'neural-networks',
    title: 'Reti Neurali: L\'Architettura dell\'AI Moderna',
    description: 'Come funzionano i neuroni artificiali',
    sections: [
      { title: 'Struttura di una Rete Neurale', content: 'Layer di input, hidden, output' },
      { title: 'Il Processo di Backpropagation', content: 'Come la rete corregge i propri errori' }
    ],
    keyTakeaways: [
      'Neuroni artificiali imitano il cervello',
      'Peso dei neuroni = importanza della connessione',
      'Backprop aggiusta i pesi per ridurre errori',
      'Più layer = più capacità di astrazione'
    ]
  },
  {
    id: 6,
    slug: 'nlp',
    title: 'NLP: Processamento del Linguaggio Naturale',
    description: 'Come l\'AI capisce il linguaggio umano',
    sections: [
      { title: 'Da Testo a Numeri', content: 'Tokenizzazione e embedding' },
      { title: 'Transformer e Attention', content: 'Architettura moderna per il linguaggio' }
    ],
    keyTakeaways: [
      'Il linguaggio deve essere convertito in numeri',
      'Attention mechanism = "cosa è importante"',
      'Transformer = base di ChatGPT e moderni LLM',
      'Context window = quante parole ricorda il modello'
    ]
  },
  {
    id: 7,
    slug: 'computer-vision',
    title: 'Computer Vision: La Vista dell\'AI',
    description: 'Come l\'AI vede e analizza immagini',
    sections: [
      { title: 'Convolutional Neural Networks', content: 'Architettura specializzata per immagini' },
      { title: 'Riconoscimento di Oggetti', content: 'Da pixel a classificazione' }
    ],
    keyTakeaways: [
      'Immagine = griglia di pixel (numeri)',
      'CNN usa filtri per estrarre feature',
      'Più layer = feature sempre più astratte',
      'Transfer learning accelera il training'
    ]
  },
  {
    id: 8,
    slug: 'generative-ai',
    title: 'AI Generativa: Quando l\'AI Crea',
    description: 'Da ChatGPT alle immagini generate',
    sections: [
      { title: 'Come Funziona un LLM', content: 'Predizione di parola in parola' },
      { title: 'Prompt Engineering', content: 'L\'arte di chiedere all\'AI' }
    ],
    keyTakeaways: [
      'LLM predice la prossima parola basandosi sul pattern',
      'ChatGPT ha 175 miliardi di parametri',
      'Il prompt shape l\'output in modo drammatico',
      'Context length limita quanto ricorda'
    ]
  },
  {
    id: 9,
    slug: 'fine-tuning',
    title: 'Fine-Tuning e Transfer Learning',
    description: 'Come personalizzare modelli esistenti',
    sections: [
      { title: 'Transfer Learning', content: 'Riuso di modelli pre-addestrati' },
      { title: 'Fine-tuning vs Zero-shot', content: 'Quando addestrare ancora' }
    ],
    keyTakeaways: [
      'Transfer learning = addestramento più veloce',
      'Fine-tune su dati specifici per adattare il modello',
      'Richiede meno data che addestrare da zero',
      'RAG = alternativa al fine-tuning'
    ]
  },
  {
    id: 10,
    slug: 'ethics-ai',
    title: 'Etica e Responsabilità nell\'AI',
    description: 'Quando l\'AI fa male',
    sections: [
      { title: 'Bias e Discriminazione', content: 'Problemi reali di sistemi AI' },
      { title: 'Trasparenza e Spiegabilità', content: 'Capire le decisioni dell\'AI' }
    ],
    keyTakeaways: [
      'AI riflette i bias nei dati di training',
      'Amazon hiring system discriminava le donne',
      'Explainability = capacità di spiegare perché',
      'La trasparenza è un diritto (GDPR)'
    ]
  },
  {
    id: 11,
    slug: 'ai-act',
    title: 'AI Act Europeo: Regolazione dell\'AI',
    description: 'Le leggi che governi l\'AI in Europa',
    sections: [
      { title: 'I 4 Livelli di Rischio', content: 'Vietato, Alto, Limitato, Minimo' },
      { title: 'Obblighi per Sviluppatori', content: 'Cosa devi fare per essere conforme' }
    ],
    keyTakeaways: [
      'Rischio Vietato = divieto totale',
      'Alto rischio = obbligo di assessment',
      'Devi mantenere documentazione completa',
      'Non conformità = multe salate'
    ]
  },
  {
    id: 12,
    slug: 'ai-at-work',
    title: 'L\'AI nel Lavoro e nel Futuro',
    description: 'Come l\'AI cambierà il mercato del lavoro',
    sections: [
      { title: 'Automazione e Nuovi Ruoli', content: 'Quali lavori spariranno, quali emergono' },
      { title: 'Competenze Richieste', content: 'Cosa imparare ora per il futuro' }
    ],
    keyTakeaways: [
      'L\'AI automatizza compiti ripetitivi',
      'Nuovi ruoli: prompt engineer, AI trainer, ethicist',
      'Critical thinking rimane insostituibile',
      'Lifelong learning è obbligatorio'
    ]
  },
  {
    id: 13,
    slug: 'practical-tools',
    title: 'Strumenti Pratici: ChatGPT, Copilot & Co.',
    description: 'Come usare l\'AI oggi',
    sections: [
      { title: 'ChatGPT e Assistenti Vocali', content: 'Come usarli al meglio' },
      { title: 'AI per Sviluppatori', content: 'Copilot, Cursor, e altri tool' }
    ],
    keyTakeaways: [
      'ChatGPT non è infallibile',
      'Copilot accelera lo sviluppo di codice',
      'Fact-check sempre l\'output dell\'AI',
      'Prompt quality = risultati migliori'
    ]
  },
  {
    id: 14,
    slug: 'advanced-patterns',
    title: 'Pattern Avanzati: RAG, Agents, Fine-tuning',
    description: 'Architetture sofisticate con AI',
    sections: [
      { title: 'RAG (Retrieval-Augmented Generation)', content: 'Aggiungere conoscenza esterna' },
      { title: 'AI Agents', content: 'AI che prende decisioni autonome' }
    ],
    keyTakeaways: [
      'RAG = LLM + knowledge base',
      'Agents possono usare tool autonomamente',
      'Orchestrazione di più modelli = power',
      'Chain-of-thought = reasoning migliore'
    ]
  },
  {
    id: 15,
    slug: 'future-ai',
    title: 'Il Futuro dell\'AI: Prospettive e Opportunità',
    description: 'Dove va l\'AI nei prossimi anni',
    sections: [
      { title: 'AGI: Artificial General Intelligence', content: 'AI al livello umano' },
      { title: 'Opportunità e Rischi', content: 'Cosa fare adesso' }
    ],
    keyTakeaways: [
      'AGI non è ancora qui, ma è il goal',
      'L\'AI cambierà ogni industria',
      'Imparare ora = vantaggio competitivo',
      'Etica e sicurezza sono fondamentali'
    ]
  }
];
