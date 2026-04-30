// Chapter data for AI Fundamentals Showcase
// Source: Fondamenti di AI course (89 pages, updated 2026-04-24)

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Section {
  title: string;
  content: string;
  media?: MediaPlaceholder[];
}

export interface CodeSnippet {
  lang: 'python' | 'javascript' | 'json' | 'bash';
  label: string;
  code: string;
}

export interface MediaPlaceholder {
  type: 'video' | 'podcast' | 'infographic' | 'resource';
  title: string;
  description: string;
  estimatedDuration?: string;
  placeholderPath: string;
  notes?: string;
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  description: string;
  sections: Section[];
  keyTakeaways: string[];
  discussionPrompts?: string[];
  codeSnippets?: CodeSnippet[];
  quiz?: QuizQuestion[];
  media?: MediaPlaceholder[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: 'what-is-ai',
    title: "Cos'è davvero l'Intelligenza Artificiale",
    description: 'Introduzione ai concetti fondamentali dell\'AI',
    sections: [
      { title: 'AI vs Intelligenza Umana', content: 'L\'intelligenza artificiale *non pensa come gli umani*. Mentre un bambino impara a riconoscere i cani da pochi esempi, l\'AI ha bisogno di migliaia di immagini di cani per lo stesso compito. La differenza fondamentale: gli umani comprendono il significato, l\'AI fa **riconoscimento di pattern** nei dati. Approccio pratico SJA: <<valida sempre il contesto prima di usare un output AI>>; AI e una leva, non un oracolo.', media: [ { type: 'infographic', title: 'AI vs Intelligenza Umana — visual', description: 'Confronto visivo tra apprendimento umano e apprendimento AI.', placeholderPath: 'media/ch01-what-is-ai/sec-01/infographic.png', notes: 'ready' } ] },
      { title: "L'AI nella Vita Quotidiana", content: 'Ogni giorno interagiamo con l\'AI senza rendercene conto: Spotify suggerisce musica basandosi sui tuoi ascolti, Netflix consiglia film simili a quelli che hai guardato, Alexa risponde ai tuoi comandi vocali. Questo è **sistema di raccomandazione basato su dati**. *Utile non significa infallibile*: <<sembra intelligente, ma sta facendo predizione statistica>>.' },
      { title: "Startup Lens", content: "Per un MVP startup, usa AI dove riduce tempo operativo in modo misurabile: supporto clienti, classificazione ticket, suggerimenti contenuto. Definisci **KPI misurabili** (tempo medio risposta, tasso risoluzione, error rate) prima del rilascio. <<Niente AI in produzione senza metrica di controllo>>." },
      { title: "Errore comune + Mini esercizio", content: "**Errore comune:** trattare l'AI come fonte di verita assoluta. Mini esercizio (15 min): prendi 3 risposte AI su un tema tecnico, verifica fonti, segna cosa era corretto, ambiguo o errato, poi riscrivi una risposta validata. <<Usa AI come copilota, non come verita assoluta>>." },
    ],
    keyTakeaways: [
      'L\'AI non pensa — riconosce pattern nei dati',
      'L\'AI ha bisogno di migliaia di esempi, l\'uomo impara da pochi',
      'I 3 ingredienti: Dati + Algoritmo + Potenza di calcolo',
      'L\'AI sbaglia quando i dati sono scarsi o distorti',
      'L\'AI è uno strumento — la qualità dipende dall\'input'
    ],
    discussionPrompts: [
      'Quali differenze noti tra come gli umani e come l\'AI imparano da nuove informazioni?',
      'Puoi fare un esempio di AI che usi regolarmente nella tua vita quotidiana?',
      'Se l\'AI riconosce solo pattern, come può mai essere creativa o innovativa?'
    ],
    media: [
      {
        type: 'video',
        title: 'Video Lesson',
        description: 'Spiegazione visuale del capitolo (8-12 min) con esempi pratici.',
        estimatedDuration: '8-12 min',
        placeholderPath: 'media/ch01-what-is-ai/video.mp4',
        notes: 'placeholder'
      },
      {
        type: 'podcast',
        title: 'Podcast Deep Dive',
        description: 'Versione audio con casi reali, errori comuni e takeaway operativi.',
        estimatedDuration: '10-15 min',
        placeholderPath: 'media/ch01-what-is-ai/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 1',
        description: 'Sintesi visuale del capitolo 1: concetti chiave, struttura e punti cardine.',
        placeholderPath: 'media/ch01-what-is-ai/infographic.png',
        notes: 'ready'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Materiale scaricabile per studio e esercitazione guidata.',
        placeholderPath: 'media/ch01-what-is-ai/handout.pdf',
        notes: 'placeholder'
      }
    ],
    quiz: [
      {
        question: "Cosa fa AI moderna in modo principale?",
        options: [
          "Riconosce pattern nei dati",
          "Sostituisce sempre umani",
          "Funziona senza dati",
          "Ha coscienza",
        ],
        correct: 0,
        explanation: "AI moderna lavora su pattern nei dati."
      },
      {
        question: "Quale triade serve per AI?",
        options: [
          "Dati algoritmo calcolo",
          "Solo prompt",
          "Solo GPU",
          "Solo internet",
        ],
        correct: 0,
        explanation: "Dati algoritmo e calcolo sono base del sistema."
      },
      {
        question: "Output AI dipende da?",
        options: [
          "Qualita dati",
          "Colore UI",
          "Numero slide",
          "Sistema operativo",
        ],
        correct: 0,
        explanation: "Qualita dati influenza prestazioni e errori."
      }
    ]
  },
  {
    id: 2,
    slug: 'how-ai-works',
    title: 'Come Funziona l\'AI',
    description: 'I tre ingredienti fondamentali',
    sections: [
      { title: 'I Tre Ingredienti dell\'AI', content: 'Ogni sistema di AI ha bisogno di tre cose: (1) DATI — migliaia o milioni di esempi da cui imparare, (2) ALGORITMO — una serie di passi che trasforma i dati in risultati, (3) POTENZA DI CALCOLO — i computer necessari per processare tutto. Senza uno di questi tre, l\'AI non funziona. In produzione questa triade diventa pipeline: raccolta dati, training controllato e monitoraggio continuo delle metriche.', media: [ { type: 'infographic', title: 'I 3 Ingredienti Fondamentali', description: 'Infografica: dati, algoritmi e architettura nel funzionamento AI.', placeholderPath: 'media/ch02-how-ai-works/sec-01/infographic.png', notes: 'ready' } ] },
      { title: 'Cos\'è un Algoritmo', content: 'Un algoritmo è una ricetta: una serie precisa di passi per trasformare un input in output. Esempio: come cucinare la pasta. Algoritmo: (1) portare l\'acqua a ebollizione, (2) aggiungere sale, (3) versare la pasta, (4) aspettare 10 minuti. Senza questa sequenza precisa, il piatto non viene bene. In produzione questa triade diventa pipeline: raccolta dati, training controllato e monitoraggio continuo delle metriche.', media: [ { type: 'infographic', title: 'Algoritmo: ricetta AI', description: 'Parallelismo cucina/AI per spiegare gli step algoritmici.', placeholderPath: 'media/ch02-how-ai-works/sec-02/infographic.png', notes: 'ready' } ] },
      { title: 'Le Reti Neurali', content: 'Le reti neurali sono il tipo di algoritmo più moderno e potente. Imitano il cervello umano: hanno neuroni artificiali connessi tra loro, con "pesi" che indicano l\'importanza di ogni connessione. Attraverso migliaia di cicli di addestramento, questi pesi si aggiustano per riconoscere pattern sempre più sofisticati. In produzione questa triade diventa pipeline: raccolta dati, training controllato e monitoraggio continuo delle metriche.', media: [ { type: 'infographic', title: 'Neuroni e pesi', description: 'Schema visuale sul meccanismo di apprendimento delle reti neurali.', placeholderPath: 'media/ch02-how-ai-works/sec-03/infographic.png', notes: 'ready' } ] },
      { title: "Caso reale", content: "In una pipeline reale e-commerce: dati ordini e catalogo alimentano un modello di raccomandazione, algoritmo ranking produce suggerimenti, infrastruttura cloud scala nei picchi. Se uno dei 3 pilastri degrada, cala conversione." },
      { title: "Production Warning + Task", content: "Warning: senza monitoraggio post-deploy, il modello degrada nel tempo (data drift). Task (20 min): definisci 4 metriche da monitorare in produzione (accuracy proxy, latenza, fallback rate, segnalazioni utente)." },
    ],
    keyTakeaways: [
      'Algoritmo = serie di passi precisi (non intuizioni)',
      'Reti neurali ricercano somiglianze, non significati',
      'Più dati = migliore apprendimento',
      'L\'output dipende dalla qualità dell\'input'
    ],
    discussionPrompts: [
      'Quale dei tre ingredienti (Dati, Algoritmo, Potenza) pensi sia il più importante per l\'AI moderno?',
      'Come cambierebbe il risultato se uno dei tre ingredienti fosse di qualità inferiore?',
      'Puoi pensare a un algoritmo che usi nella vita quotidiana, magari in cucina o nello sport?'
    ]
    ,quiz: [
      {
        question: "Algoritmo significa?",
        options: [
          "Sequenza di passi",
          "Opinione personale",
          "File immagine",
          "Tabella casuale",
        ],
        correct: 0,
        explanation: "Algoritmo e una procedura chiara input output."
      },
      {
        question: "Reti neurali sono utili per?",
        options: [
          "Apprendere pattern complessi",
          "Stampare PDF",
          "Gestire DNS",
          "Fare backup",
        ],
        correct: 0,
        explanation: "Reti neurali apprendono rappresentazioni complesse."
      },
      {
        question: "Senza dati adeguati il modello?",
        options: [
          "Perde efficacia",
          "Migliora da solo",
          "Diventa etico",
          "Non cambia",
        ],
        correct: 0,
        explanation: "Senza dati adeguati le prestazioni calano."
      }
    ]
  },
  {
    id: 3,
    slug: 'data-importance',
    title: 'L\'Importanza dei Dati',
    description: 'Il carburante dell\'AI',
    sections: [
      { title: 'Quantità vs Qualità', content: 'Non è vero che più dati = meglio. Se raccogli 1 milione di foto blurrate di gatti, un algoritmo le imparerà male. Al contrario, 10.000 foto nitide di gatti diverse porteranno a risultati migliori. I dati devono essere: (1) sufficienti in quantità, (2) di alta qualità, (3) rappresentativi della realtà. Nel lavoro reale creare dataset bilanciati e versionati e spesso il fattore che separa una demo da una soluzione affidabile.' },
      { title: 'Bias nei Dati', content: 'Il bias è il problema più grave. Se alleni un algoritmo di riconoscimento facciale usando foto solo di uomini, avrà difficoltà a riconoscere i volti femminili. Amazon ha dovuto buttare il suo sistema di assunzione automatico perché discriminava le donne — i dati storici riflettevano pregiudizi umani, e l\'AI li aveva imparati perfettamente. Nel lavoro reale creare dataset bilanciati e versionati e spesso il fattore che separa una demo da una soluzione affidabile.' },
      { title: "Startup Lens", content: "In early-stage product, meglio 5.000 record puliti e bilanciati che 500.000 rumorosi. Introduci versionamento dataset e changelog: ogni modifica ai dati deve essere tracciata." },
      { title: "Errore comune + Mini esercizio", content: "Errore comune: valutare il modello solo su test set statico. Mini esercizio: crea 5 esempi edge-case e verifica se il modello risponde in modo coerente; annota failure pattern e possibile correzione dati." },
    ],
    keyTakeaways: [
      'Dati di qualità = AI di qualità',
      'Bias nei dati = discriminazione nell\'output',
      'Pulizia dati è 80% del lavoro in ML',
      'Diversità nei dati = modello più robusto'
    ],
    discussionPrompts: [
      'Se un algoritmo fa discriminazioni, è colpa dell\'algoritmo o dei dati di allenamento?',
      'Come potremmo raccogliere dati che non riflettano i bias umani?',
      'Quali conseguenze potrebbe avere un sistema biased usato per assunzioni, prestiti bancari, o sentenze?'
    ]
    ,quiz: [
      {
        question: "Bias nei dati puo causare?",
        options: [
          "Decisioni discriminatorie",
          "Zero errori",
          "Costo zero",
          "Latenza nulla",
        ],
        correct: 0,
        explanation: "Il modello replica bias presenti nei dati."
      },
      {
        question: "Meglio quantita o qualita dati?",
        options: [
          "Entrambe con qualita alta",
          "Solo quantita",
          "Solo numero GPU",
          "Nessuna",
        ],
        correct: 0,
        explanation: "Servono dati sufficienti e di buona qualita."
      },
      {
        question: "Pulizia dati in ML e spesso?",
        options: [
          "Parte molto ampia del lavoro",
          "Trascurabile",
          "Vietata",
          "Automatica sempre",
        ],
        correct: 0,
        explanation: "Data cleaning pesa molto nel ciclo ML."
      }
    ]
  },
  {
    id: 4,
    slug: 'machine-learning',
    title: 'Machine Learning: Imparare dai Dati',
    description: 'Come gli algoritmi imparano',
    sections: [
      { title: 'Il Processo di Apprendimento', content: 'Machine Learning significa che l\'algoritmo impara dai dati senza essere programmato esplicitamente. Processo: (1) dai i dati all\'algoritmo, (2) fa una previsione (random all\'inizio), (3) misura quanto è sbagliata, (4) aggiusta se stesso, (5) ripete migliaia di volte. Dopo questo ciclo, il modello conosce i pattern. Per una startup il valore nasce dal ciclo rapido esperimento, metrica, iterazione; senza metriche il modello resta una ipotesi.' },
      { title: 'Overfitting e Underfitting', content: 'Overfitting: quando l\'algoritmo memorizza i dati invece di imparare i pattern generali. È come studiare gli esami degli anni passati a memoria, allora fallisci quando arrivano esami nuovi. Underfitting: l\'algoritmo è troppo semplice per capire i pattern. È come cercare di fare astronomia con la matematica di base. La sfida è trovare il giusto equilibrio. Per una startup il valore nasce dal ciclo rapido esperimento, metrica, iterazione; senza metriche il modello resta una ipotesi.' },
      { title: "Caso reale", content: "Nel forecasting vendite, un modello lineare puo battere modelli complessi se i dati sono pochi e stabili. La scelta migliore non e il modello piu sofisticato, ma quello piu robusto sul tuo scenario." },
      { title: "Production Warning + Task", content: "Warning: ottimizzare solo accuracy puo nascondere errori gravi su classi rare. Task (20 min): scegli 2 metriche aggiuntive (precision/recall o MAE/MAPE) e spiega quando preferirle all'accuracy." },
    ],
    keyTakeaways: [
      'Il modello impara cercando pattern nei dati',
      'Overfitting = memorizzazione (non generalizzazione)',
      'Underfitting = modello troppo semplice',
      'La validazione è cruciale'
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'Esempio: Linear Regression con scikit-learn',
        code: '# Linear Regression con scikit-learn\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Dati di training: ore di studio -> voto\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([55, 65, 70, 80, 90])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# Previsione: 6 ore di studio\npred = model.predict([[6]])\nprint(f"Voto previsto: {pred[0]:.1f}")  # -> ~98'
      },
      {
        lang: 'python',
        label: 'Esempio: Classificazione con Decision Tree',
        code: '# Decision Tree con scikit-learn\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.model_selection import train_test_split\n\n# Dati: [ore_studio, ore_sonno] -> promosso (1) o no (0)\nX = [[2, 4], [5, 7], [1, 3], [6, 8], [3, 5], [7, 9]]\ny = [0, 1, 0, 1, 0, 1]\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\nclf = DecisionTreeClassifier(max_depth=3)\nclf.fit(X_train, y_train)\naccuracy = clf.score(X_test, y_test)\nprint(f"Accuratezza: {accuracy:.0%}")  # -> 100%'
      }
    ],
    discussionPrompts: [
      'Come potremmo testare se un modello sta soffrendo di overfitting?',
      'In quali situazioni reali è più rischioso l\'overfitting vs underfitting?',
      'Se un algoritmo impiega 1000 cicli per imparare, cosa succede al ciclo 1001?'
    ]
    ,quiz: [
      {
        question: "Overfitting indica?",
        options: [
          "Memoria training e scarsa generalizzazione",
          "Modello troppo semplice",
          "Nessun training",
          "CPU lenta",
        ],
        correct: 0,
        explanation: "Overfitting funziona male su dati nuovi."
      },
      {
        question: "Underfitting indica?",
        options: [
          "Modello troppo semplice",
          "Modello perfetto",
          "Dati troppi",
          "Token bassi",
        ],
        correct: 0,
        explanation: "Underfitting non cattura pattern utili."
      },
      {
        question: "Validazione serve per?",
        options: [
          "Stimare generalizzazione",
          "Aumentare rumore",
          "Ridurre etica",
          "Saltare test",
        ],
        correct: 0,
        explanation: "Validation aiuta scelta modello robusto."
      }
    ]
  },
  {
    id: 5,
    slug: 'neural-networks',
    title: 'Reti Neurali: L\'Architettura dell\'AI Moderna',
    description: 'Come funzionano i neuroni artificiali',
    sections: [
      { title: 'Struttura di una Rete Neurale', content: 'Una rete neurale è composta da layer: Layer di Input riceve i dati, Hidden Layer (ce ne possono essere molti) elaborano e trasformano i dati, Layer di Output produce il risultato. Ogni neurone è connesso ai neuroni del layer successivo, con un "peso" che indica l\'importanza della connessione. Con più layer, il modello può imparare astrazioni sempre più complesse. Quando progetti una rete parti semplice e aumenta complessita solo se i dati lo giustificano, evitando over engineering.' },
      { title: 'Il Processo di Backpropagation', content: 'Backpropagation è come l\'algoritmo si corregge. Quando commette un errore, "ritorna" attraverso la rete da destra a sinistra, aggiustando leggermente i pesi per ridurre l\'errore. È come dire a uno studente: "Hai fatto un errore qui, quindi studierai un po\' di più questa parte." Dopo migliaia di backprop, i pesi sono ottimizzati. Quando progetti una rete parti semplice e aumenta complessita solo se i dati lo giustificano, evitando over engineering.' },
      { title: "Startup Lens", content: "Le reti neurali hanno senso quando il pattern e complesso (immagini, linguaggio, segnali). Per problemi semplici, un modello meno complesso e piu economico e piu spiegabile." },
      { title: "Errore comune + Mini esercizio", content: "Errore comune: aumentare layer senza strategia. Mini esercizio: confronta due architetture (piccola vs piu profonda) su un dataset demo e descrivi differenze su overfitting, tempo training e interpretabilita." },
    ],
    keyTakeaways: [
      'Neuroni artificiali imitano il cervello',
      'Peso dei neuroni = importanza della connessione',
      'Backprop aggiusta i pesi per ridurre errori',
      'Più layer = più capacità di astrazione'
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'Rete neurale semplice con PyTorch',
        code: '# Rete neurale semplice con PyTorch\nimport torch\nimport torch.nn as nn\n\nclass SimpleNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.layers = nn.Sequential(\n            nn.Linear(2, 4),\n            nn.ReLU(),\n            nn.Linear(4, 1),\n            nn.Sigmoid()\n        )\n    \n    def forward(self, x):\n        return self.layers(x)\n\nmodel = SimpleNN()\nprint(model)\n# Output: SimpleNN(\n#   (layers): Sequential(\n#     (0): Linear(in_features=2, out_features=4, bias=True)\n#     (1): ReLU()\n#     (2): Linear(in_features=4, out_features=1, bias=True)\n#     (3): Sigmoid()\n#   )\n# )'
      }
    ],
    discussionPrompts: [
      'Perché una rete neurale con 100 layer sarebbe diversa da una con 2 layer?',
      'Come è simile Backpropagation al processo di imparare dai propri errori?',
      'Cosa succederebbe se i pesi iniziali non fossero random ma zero?'
    ]
    ,quiz: [
      {
        question: "Backpropagation aggiorna?",
        options: [
          "Pesi della rete",
          "Titolo file",
          "Tema grafico",
          "DNS record",
        ],
        correct: 0,
        explanation: "Backprop corregge pesi in base errore."
      },
      {
        question: "Più layer puo dare?",
        options: [
          "Feature più astratte",
          "Meno dati sempre",
          "Nessun vantaggio",
          "Solo bug",
        ],
        correct: 0,
        explanation: "Profondita permette rappresentazioni complesse."
      },
      {
        question: "Peso neurale rappresenta?",
        options: [
          "Importanza connessione",
          "Colore nodo",
          "Nome layer",
          "Ora training",
        ],
        correct: 0,
        explanation: "Peso modula contributo del segnale."
      }
    ]
  },
  {
    id: 6,
    slug: 'nlp',
    title: 'NLP: Processamento del Linguaggio Naturale',
    description: 'Come l\'AI capisce il linguaggio umano',
    sections: [
      { title: 'Da Testo a Numeri', content: 'I computer non capiscono le parole. Devono convertire le parole in numeri. Processo: (1) Tokenizzazione — spezza il testo in parole o sub-parole, (2) Embedding — trasforma ogni token in un vettore di numeri che rappresenta il significato. Esempio: la parola "re" potrebbe essere [0.2, 0.8, -0.1, ...]. Parole simili hanno embedding simili. In una app reale servono anche fallback, validazione e gestione contesto, per mantenere alta la qualita percepita.' },
      { title: 'Transformer e Attention', content: 'Transformer è l\'architettura usata da ChatGPT. L\'innovation chiave è Attention: il modello decide automaticamente quale parte del testo è importante per fare una previsione. Se leggi "Il gatto ha mangiato il pesce", Attention capisce che "gatto" è importante per il verbo "ha mangiato", non "il". Questa capacità di focus è rivoluzionaria. In una app reale servono anche fallback, validazione e gestione contesto, per mantenere alta la qualita percepita.' }
    ],
    keyTakeaways: [
      'Il linguaggio deve essere convertito in numeri',
      'Attention mechanism = "cosa è importante"',
      'Transformer = base di ChatGPT e moderni LLM',
      'Context window = quante parole ricorda il modello'
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'Tokenizzazione con HuggingFace Transformers',
        code: '# Tokenizzazione con HuggingFace\nfrom transformers import AutoTokenizer\n\ntokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")\ntext = "L intelligenza artificiale sta cambiando il mondo"\ntokens = tokenizer(text, return_tensors="pt")\nprint(tokens["input_ids"])\n# tensor([[  101,  1048,  9932,  ... ,   102]])\n\n# Visualizza i token come stringhe\ntoken_strings = tokenizer.convert_ids_to_tokens(tokens["input_ids"][0])\nprint(token_strings)'
      },
      {
        lang: 'python',
        label: 'Word Embeddings con Word2Vec',
        code: '# Word Embeddings con gensim\nfrom gensim.models import Word2Vec\n\n# Corpus di frasi\nsentences = [\n    ["il", "gatto", "dorme"],\n    ["il", "cane", "corre"],\n    ["l-intelligenza", "artificiale", "impara"]\n]\n\n# Addestra il modello\nmodel = Word2Vec(sentences, vector_size=50, window=3, min_count=1)\n\n# Parole simili\nsimilar = model.wv.most_similar("gatto", topn=3)\nprint(similar)\n# [("cane", 0.85), ...]'
      }
    ],
        discussionPrompts: [
      'Come cambierebbe ChatGPT se non avesse Attention mechanism?',
      'Qual è il limite della context window e come potrebbe impattare la comprensione?',
      'Se due parole hanno embedding molto simili, cosa significa?'
    ]
    ,quiz: [
      {
        question: "Tokenizzazione nel NLP e?",
        options: [
          "Divisione testo in token",
          "Traduzione finale",
          "Compressione zip",
          "Filtro spam",
        ],
        correct: 0,
        explanation: "NLP elabora token numerici."
      },
      {
        question: "Attention aiuta a?",
        options: [
          "Pesare contesto rilevante",
          "Disattivare training",
          "Ridurre RAM sempre",
          "Eliminare dataset",
        ],
        correct: 0,
        explanation: "Attention focalizza parti utili del testo."
      },
      {
        question: "Embedding rappresenta?",
        options: [
          "Vettore semantico",
          "Screenshot parola",
          "Tabella CSS",
          "Chiave API",
        ],
        correct: 0,
        explanation: "Embedding mappa testo in spazio numerico."
      }
    ]
  },
  {
    id: 7,
    slug: 'computer-vision',
    title: 'Computer Vision: La Vista dell\'AI',
    description: 'Come l\'AI vede e analizza immagini',
    sections: [
      { title: 'Convolutional Neural Networks', content: 'CNN (Convolutional Neural Networks) sono specializzate per le immagini. Invece di guardare ogni pixel individualmente, usano "filtri" che scansionano piccole aree dell\'immagine. Un filtro potrebbe cercare linee verticali, un altro linee orizzontali, un altro curve. I layer iniziali trovano feature semplici (angoli), i layer profondi trovano feature complesse (occhi, nasi, volti). Prima del deploy testa condizioni reali come luce, angoli e qualita camera per evitare regressioni fuori laboratorio.' },
      { title: 'Riconoscimento di Oggetti', content: 'Il processo è semplice: (1) immagine entra come matrice di pixel, (2) filter CNN estraggono feature in modo gerarchico, (3) alla fine, il modello produce probabilità per ogni classe. Esempio: "Riconosco un cane con 95% probabilità, un gatto con 3%, nient\'altro con 2%". Ma il sistema può sbagliare: una foto sfocata, un cane in posa strana, condizioni di luce scarsa — questi sono gli edge case che confondono l\'AI. Prima del deploy testa condizioni reali come luce, angoli e qualita camera per evitare regressioni fuori laboratorio.' }
    ],
    keyTakeaways: [
      'Immagine = griglia di pixel (numeri)',
      'CNN usa filtri per estrarre feature',
      'Più layer = feature sempre più astratte',
      'Transfer learning accelera il training'
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'Classificazione immagini con CNN (PyTorch)',
        code: '# CNN semplice con PyTorch\nimport torch.nn as nn\n\nclass SimpleCNN(nn.Module):\n    def __init__(self, num_classes=10):\n        super().__init__()\n        self.features = nn.Sequential(\n            nn.Conv2d(3, 32, kernel_size=3, padding=1),\n            nn.ReLU(),\n            nn.MaxPool2d(2, 2),\n            nn.Conv2d(32, 64, kernel_size=3, padding=1),\n            nn.ReLU(),\n            nn.MaxPool2d(2, 2)\n        )\n        self.classifier = nn.Linear(64 * 8 * 8, num_classes)\n    \n    def forward(self, x):\n        x = self.features(x)\n        x = x.view(x.size(0), -1)\n        return self.classifier(x)\n\nmodel = SimpleCNN(num_classes=10)\nprint(model)'
      }
    ],
        discussionPrompts: [
      'Perché le CNN funzionano meglio rispetto alle reti neurali normali per le immagini?',
      'Quali situazioni potrebbero ingannare un sistema di riconoscimento di oggetti?',
      'Come potrebbe il "Transfer Learning" risparmiare tempo nel training di un nuovo modello?'
    ]
    ,quiz: [
      {
        question: "CNN in vision usa?",
        options: [
          "Filtri locali su pixel",
          "Solo regole if",
          "Nessun parametro",
          "Solo OCR",
        ],
        correct: 0,
        explanation: "Convoluzioni estraggono pattern spaziali."
      },
      {
        question: "Transfer learning in vision?",
        options: [
          "Riusa modello pre addestrato",
          "Parte da zero",
          "Blocca training",
          "Rimuove etichette",
        ],
        correct: 0,
        explanation: "Accelera training su nuovi task."
      },
      {
        question: "Edge case vision esempio?",
        options: [
          "Luce scarsa o sfocatura",
          "JSON valido",
          "Prompt breve",
          "CPU libera",
        ],
        correct: 0,
        explanation: "Condizioni difficili riducono accuratezza."
      }
    ]
  },
  {
    id: 8,
    slug: 'generative-ai',
    title: 'AI Generativa: Quando l\'AI Crea',
    description: 'Da ChatGPT alle immagini generate',
    sections: [
      { title: 'Come Funziona un LLM', content: 'LLM (Large Language Model) come ChatGPT predicono la prossima parola basandosi su tutte le parole precedenti. Processo: (1) ricevi un prompt, (2) il modello calcola probabilità per ogni possibile parola successiva (50.000+ possibilità), (3) sceglie la più probabile, (4) aggiunge quella parola al testo, (5) ripete. È come completamento automatico su sterodi. ChatGPT ha 175 miliardi di parametri — numeri che il modello ha imparato dai dati. Framework consigliato: prompt chiaro, verifica fonti, revisione umana e logging delle risposte critiche.' },
      { title: 'Prompt Engineering', content: 'Il prompt è cruciale. Diversi prompt portano a risultati completamente diversi. "Dimmi un articolo su AI" è vago. "Scrivi un articolo di 500 parole su come l\'AI cambierà il marketing, rivolto a CMO di startup" è specifico e dettagliato. Migliore il prompt, migliore il risultato. Questo è diventato una skill: "Prompt Engineering". Framework consigliato: prompt chiaro, verifica fonti, revisione umana e logging delle risposte critiche.' }
    ],
    keyTakeaways: [
      'LLM predice la prossima parola basandosi sul pattern',
      'ChatGPT ha 175 miliardi di parametri',
      'Il prompt shape l\'output in modo drammatico',
      'Context length limita quanto ricorda'
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'Generazione testo con OpenAI API',
        code: '# Generazione testo con OpenAI API\nfrom openai import OpenAI\n\nclient = OpenAI(api_key="your-api-key")\n\nresponse = client.chat.completions.create(\n    model="gpt-4o-mini",\n    messages=[\n        {"role": "system", "content": "Sei un assistente didattico per studenti."},\n        {"role": "user", "content": "Spiega il Machine Learning in 3 frasi semplici."}\n    ],\n    max_tokens=200\n)\n\nprint(response.choices[0].message.content)'
      },
      {
        lang: 'json',
        label: 'Struttura di un prompt ben formato (JSON)',
        code: '{\n  "model": "gpt-4o-mini",\n  "messages": [\n    {\n      "role": "system",\n      "content": "Sei un esperto di AI con linguaggio accessibile."\n    },\n    {\n      "role": "user", \n      "content": "Scrivi un articolo di 300 parole su come l\'AI cambiera\' il marketing, rivolto a startup founder."\n    }\n  ],\n  "temperature": 0.7,\n  "max_tokens": 500\n}'
      }
    ],
        discussionPrompts: [
      'Perché ChatGPT a volte allucinà informazioni false?',
      'Come differisce generare immagini vs generare testo?',
      'Qual è il ruolo del "randomness" nel generare diverse risposte dallo stesso prompt?'
    ]
    ,quiz: [
      {
        question: "LLM genera testo come?",
        options: [
          "Predizione prossimo token",
          "Ricopia database",
          "Regole fisse solo",
          "Hash casuale",
        ],
        correct: 0,
        explanation: "Next token prediction e il core meccanismo."
      },
      {
        question: "Prompt engineering migliora?",
        options: [
          "Pertinenza output",
          "Solo costo rete",
          "Solo RAM",
          "Solo deploy",
        ],
        correct: 0,
        explanation: "Prompt chiaro aumenta qualita risposta."
      },
      {
        question: "Allucinazione significa?",
        options: [
          "Risposta plausibile ma falsa",
          "Errore di login",
          "Token basso",
          "Crash browser",
        ],
        correct: 0,
        explanation: "LLM puo fornire contenuti non veri."
      }
    ]
  },
  {
    id: 9,
    slug: 'fine-tuning',
    title: 'Fine-Tuning e Transfer Learning',
    description: 'Come personalizzare modelli esistenti',
    sections: [
      { title: 'Transfer Learning', content: 'Transfer Learning è un trucco intelligente: invece di addestrare un modello da zero (che richiede milioni di immagini e settimane di calcolo), usi un modello già addestrato su dati generali e lo "adatti" ai tuoi dati specifici. Esempio: un modello addestrato su ImageNet (1 milione di immagini di oggetti comuni) può essere adattato per riconoscere malattie in radiografie mediche con solo 10.000 immagini. La scelta tra RAG e fine tuning dipende da frequenza aggiornamento, costo operativo e accuratezza richiesta.' },
      { title: 'Fine-tuning vs Zero-shot', content: 'Fine-tuning significa addestrare ancora il modello, ma solo leggermente, con i tuoi dati. Zero-shot significa usare il modello senza ulteriore allenamento. Esempio di zero-shot: ChatGPT può scrivere codice senza mai aver visto i tuoi progetti — perché ha visto miliardi di linee di codice. Fine-tuning porterebbe risultati ancora migliori se glielo insegni specificamente. La scelta tra RAG e fine tuning dipende da frequenza aggiornamento, costo operativo e accuratezza richiesta.' }
    ],
    keyTakeaways: [
      'Transfer learning = addestramento più veloce',
      'Fine-tune su dati specifici per adattare il modello',
      'Richiede meno data che addestrare da zero',
      'RAG = alternativa al fine-tuning'
    ],
    discussionPrompts: [
      'Quando sarebbe meglio usare Transfer Learning vs allenare da zero?',
      'Quali rischi ci sono nel fine-tuning se i tuoi dati sono molto diversi dai dati originali?',
      'Come potrebbe RAG (Retrieval-Augmented Generation) essere migliore del fine-tuning?'
    ]
    ,quiz: [
      {
        question: "Transfer learning conviene quando?",
        options: [
          "Adatti modello a dominio specifico",
          "Hai zero modello e zero dati",
          "Serve solo UI",
          "Non fai test",
        ],
        correct: 0,
        explanation: "Adattare pretrain riduce tempi e costi."
      },
      {
        question: "Fine tuning rispetto zero shot?",
        options: [
          "Migliora task specifici",
          "Sempre peggio",
          "Nessuna differenza",
          "Sempre vietato",
        ],
        correct: 0,
        explanation: "Fine tuning allinea a dataset del dominio."
      },
      {
        question: "RAG e utile per?",
        options: [
          "Usare fonti aggiornabili senza retraining completo",
          "Sostituire internet",
          "Evitare prompt",
          "Eliminare retrieval",
        ],
        correct: 0,
        explanation: "RAG combina recupero fonti e generazione."
      }
    ]
  },
  {
    id: 10,
    slug: 'ethics-ai',
    title: 'Etica e Responsabilità nell\'AI',
    description: 'Quando l\'AI fa male',
    sections: [
      { title: 'Bias e Discriminazione', content: 'I bias non sono buoni o cattivi intenzionalmente — riflettono semplicemente i dati di training. Se alleni un sistema di approvazione prestiti su dati storici dove le minoranze avevano tassi di default più alti (a causa di discriminazione sistemica passata), il sistema imparerà questa discriminazione e la perpetuerà. È come insegnare a qualcuno usando solo esempi distorti. Operativamente definisci policy esplicite: cosa il sistema decide da solo e dove serve approvazione umana.' },
      { title: 'Trasparenza e Spiegabilità', content: 'Le persone hanno il diritto di sapere perché l\'AI ha preso una decisione su di loro. Se una banca ti nega un prestito, hai diritto di chiedere perché. Ma le reti neurali sono "black box" — è difficile spiegare quale combinazione di fattori ha portato alla decisione. La GDPR in Europa lo richiede: le aziende devono rendere conto delle decisioni AI. Operativamente definisci policy esplicite: cosa il sistema decide da solo e dove serve approvazione umana.' }
    ],
    keyTakeaways: [
      'AI riflette i bias nei dati di training',
      'Amazon hiring system discriminava le donne',
      'Explainability = capacità di spiegare perché',
      'La trasparenza è un diritto (GDPR)'
    ],
    discussionPrompts: [
      'Come potremmo renderci conto dei bias prima che un sistema AI faccia danni?',
      'Qual è il compromesso tra accuratezza e spiegabilità?',
      'Se un algorithmo è provabilmente migliore ma meno trasparente, dovremmo usarlo comunque?'
    ]
    ,quiz: [
      {
        question: "Etica AI serve a?",
        options: [
          "Ridurre danni e ingiustizie",
          "Aumentare token",
          "Solo marketing",
          "Cambiare logo",
        ],
        correct: 0,
        explanation: "Etica mitiga impatti su persone reali."
      },
      {
        question: "Explainability indica?",
        options: [
          "Spiegare decisione modello",
          "Nascondere logica",
          "Aumentare parametri",
          "Ridurre prompt",
        ],
        correct: 0,
        explanation: "Trasparenza e cruciale in casi sensibili."
      },
      {
        question: "Dataset storici possono?",
        options: [
          "Propagare bias esistenti",
          "Garantire fairness",
          "Eliminare errori",
          "Ridurre costi zero",
        ],
        correct: 0,
        explanation: "Storico distorto porta decisioni distorte."
      }
    ]
  },
  {
    id: 11,
    slug: 'ai-act',
    title: 'AI Act Europeo: Regolazione dell\'AI',
    description: 'Le leggi che governi l\'AI in Europa',
    sections: [
      { title: 'I 4 Livelli di Rischio', content: 'L\'AI Act categorizza i sistemi in 4 livelli: (1) VIETATO — es. riconoscimento facciale in tempo reale senza consenso, (2) ALTO RISCHIO — es. decisioni su prestiti/assunzioni, (3) LIMITATO — es. chatbot che deve rivelare di essere AI, (4) MINIMO — chatbot amichevole, giochi. Più il rischio, più obblighi di documentazione, test, trasparenza. Per team moderni compliance significa integrare checklist legali e tecniche nella Definition of Done.' },
      { title: 'Obblighi per Sviluppatori', content: 'Se sviluppi un sistema AI ad alto rischio, devi: (1) registrarlo, (2) fare assessment di impatto, (3) documentare tutto, (4) fare test di robustezza e sicurezza, (5) avere un sistema per gestire reclami, (6) notificare le autorità di problemi seri. Non conformità = multa fino al 6% del fatturato globale. È come la GDPR ma per AI. Per team moderni compliance significa integrare checklist legali e tecniche nella Definition of Done.' }
    ],
    keyTakeaways: [
      'Rischio Vietato = divieto totale',
      'Alto rischio = obbligo di assessment',
      'Devi mantenere documentazione completa',
      'Non conformità = multe salate'
    ],
    discussionPrompts: [
      'Come decidere in quale categoria di rischio mettere un nuovo sistema AI?',
      'Quali conseguenze avrà l\'AI Act sulla velocità di innovazione?',
      'Se un azienda non italiana viola l\'AI Act in Europa, chi la multa?'
    ]
    ,quiz: [
      {
        question: "AI Act classifica per?",
        options: [
          "Rischio",
          "Prezzo",
          "Lingua",
          "Layout",
        ],
        correct: 0,
        explanation: "Regole cambiano in base al livello rischio."
      },
      {
        question: "Sistema alto rischio richiede?",
        options: [
          "Documentazione e controlli",
          "Nessun obbligo",
          "Solo README",
          "Solo landing",
        ],
        correct: 0,
        explanation: "Compliance forte e richiesta."
      },
      {
        question: "Non conformita puo portare?",
        options: [
          "Sanzioni elevate",
          "Premio bonus",
          "Nessun effetto",
          "Solo email",
        ],
        correct: 0,
        explanation: "Le multe possono essere rilevanti."
      }
    ]
  },
  {
    id: 12,
    slug: 'ai-at-work',
    title: 'L\'AI nel Lavoro e nel Futuro',
    description: 'Come l\'AI cambierà il mercato del lavoro',
    sections: [
      { title: 'Automazione e Nuovi Ruoli', content: 'L\'AI automatizza lavori ripetitivi: data entry, customer service di base, revisione documenti iniziale. Questi ruoli spariranno. Ma nascono nuovi ruoli: prompt engineer (persona che sa scrivere buoni prompt), AI trainer (prepara dati per l\'allenamento), AI ethicist (assicura che l\'AI sia etica), data scientist, ML engineer. Il mercato si trasforma, non scompare. Il vero vantaggio non e usare tool AI, ma orchestrare processi dove AI e competenze umane si completano.' },
      { title: 'Competenze Richieste', content: 'Le competenze critiche per il futuro: (1) Critical Thinking — l\'AI non pensa criticamente, tu sì, (2) Comunicazione — spiegare bene le cose rimane umano, (3) Creatività — generare nuove idee, (4) Adattabilità — il mondo cambia velocemente. Imparare a usare ChatGPT, Copilot, Cursor non è il futuro — capire come usarli bene per il tuo dominio specifico lo è. Il vero vantaggio non e usare tool AI, ma orchestrare processi dove AI e competenze umane si completano.' }
    ],
    keyTakeaways: [
      'L\'AI automatizza compiti ripetitivi',
      'Nuovi ruoli: prompt engineer, AI trainer, ethicist',
      'Critical thinking rimane insostituibile',
      'Lifelong learning è obbligatorio'
    ],
    discussionPrompts: [
      'Quali lavori pensi spariranno nei prossimi 10 anni per colpa dell\'AI?',
      'Come possiamo prepararci ora per lavori che forse non esistono ancora?',
      'Il diritto al "diritto all\'oblio" dovrebbe applicarsi all\'AI training?'
    ]
    ,quiz: [
      {
        question: "AI nel lavoro tende a?",
        options: [
          "Automatizzare compiti ripetitivi",
          "Bloccare ogni ruolo",
          "Non cambiare nulla",
          "Ridurre internet",
        ],
        correct: 0,
        explanation: "Trasforma processi e crea nuovi ruoli."
      },
      {
        question: "Skill centrale era AI?",
        options: [
          "Pensiero critico",
          "Solo dattilografia",
          "Solo grafica",
          "Solo memoria",
        ],
        correct: 0,
        explanation: "Valutazione critica resta umana."
      },
      {
        question: "Formazione continua oggi?",
        options: [
          "Necessaria",
          "Inutile",
          "Solo accademica",
          "Vietata",
        ],
        correct: 0,
        explanation: "Aggiornarsi e fondamentale."
      }
    ]
  },
  {
    id: 13,
    slug: 'practical-tools',
    title: 'Strumenti Pratici: ChatGPT, Copilot & Co.',
    description: 'Come usare l\'AI oggi',
    sections: [
      { title: 'ChatGPT e Assistenti Vocali', content: 'ChatGPT è uno strumento potente ma non è infallibile. Può sembrare sicuro ma sbagliare tranquillamente. Regola d\'oro: usa ChatGPT per brainstorm, drafting, debugging — ma SEMPRE verifica il risultato finale. Non credere al 100% a quello che dice. Per assistenti vocali (Alexa, Siri): sono utili per automazione domestica e richieste semplici, ma la privacy è una considerazione seria. Pattern consigliato: bozza con AI, revisione esperta, test reale e rilascio controllato con feedback loop.' },
      { title: 'AI per Sviluppatori', content: 'Copilot (GitHub Copilot) ti auto-completa il codice. Cursor è un IDE che integra AI per aiutarti a scrivere meglio. CodeWhisperer (Amazon) fa la stessa cosa. Questi tool accelerano lo sviluppo di 30-50%, ma non ti rendono superfluo — devi ancora capire il codice, rivedere le suggestions, correggere gli errori. Pattern consigliato: bozza con AI, revisione esperta, test reale e rilascio controllato con feedback loop.' }
    ],
    keyTakeaways: [
      'ChatGPT non è infallibile',
      'Copilot accelera lo sviluppo di codice',
      'Fact-check sempre l\'output dell\'AI',
      'Prompt quality = risultati migliori'
    ],
    codeSnippets: [
      {
        lang: 'bash',
        label: 'Installare e usare tools AI da terminale',
        code: '# Installa le librerie AI principali\npip install openai langchain transformers torch\n\n# Usa ChatGPT da terminale con curl\ncurl https://api.openai.com/v1/chat/completions \\\n  -H "Authorization: Bearer $OPENAI_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "gpt-4o-mini",\n    "messages": [{"role": "user", "content": "Ciao!"}]\n  }\'\n\n# Oppure con Python\npython3 -c "from openai import OpenAI; c=OpenAI(); print(c.chat.completions.create(model=\"gpt-4o-mini\",messages=[{\"role\":\"user\",\"content\":\"Ciao!\"}]).choices[0].message.content)"'
      }
    ],
        discussionPrompts: [
      'Quando è appropriato usare ChatGPT per i compiti scolastici e quando no?',
      'Come dovrebbero le università adattare l\'insegnamento con gli AI assistant disponibili?',
      'Se Copilot scrive il codice, chi è responsabile dei bug?'
    ]
    ,quiz: [
      {
        question: "Uso corretto ChatGPT?",
        options: [
          "Verifica output prima uso finale",
          "Pubblica senza controllo",
          "Ignora fonti",
          "Disattiva review",
        ],
        correct: 0,
        explanation: "Fact check e fondamentale."
      },
      {
        question: "Copilot e Cursor aiutano a?",
        options: [
          "Aumentare produttivita sviluppo",
          "Sostituire review umana",
          "Gestire HR",
          "Bloccare test",
        ],
        correct: 0,
        explanation: "Assistono sviluppo ma responsabilita resta umana."
      },
      {
        question: "Qualita prompt impatta?",
        options: [
          "Qualita risposta",
          "Solo tema colori",
          "Solo SEO",
          "Solo uptime",
        ],
        correct: 0,
        explanation: "Prompt migliori danno output migliori."
      }
    ]
  },
  {
    id: 14,
    slug: 'advanced-patterns',
    title: 'Pattern Avanzati: RAG, Agents, Fine-tuning',
    description: 'Architetture sofisticate con AI',
    sections: [
      { title: 'RAG (Retrieval-Augmented Generation)', content: 'RAG combina due cose: Retrieval (cercare documenti rilevanti da una knowledge base) + Generation (usare quel contenuto per generare una risposta). Esempio: invece di fare fine-tuning di ChatGPT su 10.000 documenti aziendali, usi RAG: dai a ChatGPT il documento rilevante + il prompt, e lui genera la risposta basato su quell\'informazione. È più flessibile e facile da aggiornare. Prima di usare tool sensibili inserisci guardrail, osservabilita e audit trail per limitare rischi operativi.' },
      { title: 'AI Agents', content: 'Un AI Agent è un sistema che prende decisioni autonome e usa tool per agire. Esempio: un agent che riceve il task "prenota un volo da Roma a Milano il 15 giugno", e lui: (1) usa uno strumento di ricerca per trovare voli, (2) usa uno strumento di pagamento per prenotare, (3) invia una conferma email. Non hai dato istruzioni step-by-step — l\'agent ha ragionato e agito autonomamente. Prima di usare tool sensibili inserisci guardrail, osservabilita e audit trail per limitare rischi operativi.' }
    ],
    keyTakeaways: [
      'RAG = LLM + knowledge base',
      'Agents possono usare tool autonomamente',
      'Orchestrazione di più modelli = power',
      'Chain-of-thought = reasoning migliore'
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'RAG con LangChain (schema semplificato)',
        code: '# RAG con LangChain (schema semplificato)\nfrom langchain.chains import RetrievalQA\nfrom langchain_community.vectorstores import FAISS\nfrom langchain_openai import OpenAIEmbeddings, ChatOpenAI\n\n# 1. Crea vector store dai tuoi documenti\nvectorstore = FAISS.from_documents(documents, OpenAIEmbeddings())\n\n# 2. Crea catena RAG\nllm = ChatOpenAI(model="gpt-4o-mini")\nqa_chain = RetrievalQA.from_chain_type(\n    llm=llm,\n    retriever=vectorstore.as_retriever(search_kwargs={"k": 3})\n)\n\n# 3. Query\nresult = qa_chain.invoke("Cos\'e\' il Transfer Learning?")\nprint(result["result"])'
      },
      {
        lang: 'python',
        label: 'AI Agent semplice con tool use',
        code: '# AI Agent con tool use (OpenAI function calling)\nfrom openai import OpenAI\nimport json\n\nclient = OpenAI()\n\n# Definisci i tool disponibili\ntools = [{\n    "type": "function",\n    "function": {\n        "name": "cerca_voli",\n        "description": "Cerca voli disponibili tra due citta\'",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "origine": {"type": "string"},\n                "destinazione": {"type": "string"},\n                "data": {"type": "string"}\n            },\n            "required": ["origine", "destinazione", "data"]\n        }\n    }\n}]\n\nresponse = client.chat.completions.create(\n    model="gpt-4o-mini",\n    messages=[{"role": "user", "content": "Prenota un volo Roma-Milano il 15 giugno"}],\n    tools=tools\n)\nprint(response.choices[0].message.tool_calls)'
      }
    ],
        discussionPrompts: [
      'Quali vantaggi ha RAG rispetto al fine-tuning?',
      'Quali rischi ci sono nell\'dare ad un AI Agent l\'accesso a tool reali (email, pagamenti)?',
      'Come potremmo verificare che un Agent non abbia fatto errori prima che causa danni?'
    ]
    ,quiz: [
      {
        question: "RAG combina?",
        options: [
          "Retrieval e generation",
          "UI e CSS",
          "Training e backup",
          "Prompt e cache",
        ],
        correct: 0,
        explanation: "RAG usa documenti rilevanti nel contesto."
      },
      {
        question: "AI agent tipico?",
        options: [
          "Usa tool per obiettivo",
          "Solo chat passiva",
          "Solo copia testo",
          "Solo cron",
        ],
        correct: 0,
        explanation: "Agent puo orchestrare azioni con strumenti."
      },
      {
        question: "Rischio con agent tool?",
        options: [
          "Azioni sbagliate su sistemi reali",
          "Sfondo errato",
          "Poco spazio disco",
          "Font piccolo",
        ],
        correct: 0,
        explanation: "Servono guardrail e approvazioni."
      }
    ]
  },
  {
    id: 15,
    slug: 'future-ai',
    title: 'Il Futuro dell\'AI: Prospettive e Opportunità',
    description: 'Dove va l\'AI nei prossimi anni',
    sections: [
      { title: 'AGI: Artificial General Intelligence', content: 'AGI (Artificial General Intelligence) è il "santo graal" dell\'AI — una sistema intelligente quanto l\'umano, in grado di risolvere qualsiasi problema. Non siamo lontani, ma non siamo nemmeno vicini come alcuni credono. Attuali LLM sono "narrow AI" — bravi in un dominio specifico (linguaggio) ma fragili in altri. AGI significherebbe: ragionamento profondo, problem-solving creativo, adattamento a situazioni nuove. Prepararsi al futuro significa costruire ora basi solide: qualita dati, cultura sperimentale e governance responsabile.' },
      { title: 'Opportunità e Rischi', content: 'Opportunità: l\'AI potrebbe risolvere il cambiamento climatico, scoprire nuovi farmaci, migliorare l\'educazione. Rischi: automazione di massa disoccupazione, concentrazione di potere in poche aziende, AI usata per sorveglianza/controllo, armi autonome. La domanda non è "l\'AI è buona o cattiva?" ma "come regoliamo l\'AI per massimizzare i benefici e minimizzare i danni?" Prepararsi al futuro significa costruire ora basi solide: qualita dati, cultura sperimentale e governance responsabile.' }
    ],
    keyTakeaways: [
      'AGI non è ancora qui, ma è il goal',
      'L\'AI cambierà ogni industria',
      'Imparare ora = vantaggio competitivo',
      'Etica e sicurezza sono fondamentali'
    ],
    discussionPrompts: [
      'Pensi che AGI arriverà nei prossimi 10 anni? 50 anni? Mai?',
      'Se l\'AI potesse fare di tutto, quale sarebbe il valore del lavoro umano?',
      'Come dovremmo preparare il mondo dal punto di vista legale/etico per AGI?'
    ]
    ,quiz: [
      {
        question: "AGI indica?",
        options: [
          "Intelligenza generale multi dominio",
          "Plugin browser",
          "Database vettoriale",
          "Template slide",
        ],
        correct: 0,
        explanation: "AGI e concetto di capacita generali."
      },
      {
        question: "Opportunita AI avanzata?",
        options: [
          "Ricerca e medicina accelerate",
          "Solo call center",
          "Ridurre rete",
          "Bloccare innovazione",
        ],
        correct: 0,
        explanation: "AI puo accelerare scoperta e diagnosi."
      },
      {
        question: "Futuro AI sostenibile richiede?",
        options: [
          "Innovazione con etica e sicurezza",
          "Solo velocita",
          "Zero governance",
          "Nessuna formazione",
        ],
        correct: 0,
        explanation: "Bilanciamento tra progresso e guardrail."
      }
    ]
  }
];
