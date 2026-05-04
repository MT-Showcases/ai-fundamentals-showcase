// Glossario Interattivo AI Fundamentals
// Termini estratti dai capitoli CH1-CH15

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  shortDef: string; // for tooltip (max ~120 chars)
  category: 'AI' | 'ML' | 'Deep Learning' | 'NLP' | 'Generativa' | 'Etica' | 'Dati' | 'Prodotto';
  synonyms?: string[];
  relatedTerms?: string[]; // other term ids
  relatedChapters?: string[]; // chapter slugs
  examples?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // ── AI ──────────────────────────────────────────────────────────────────
  {
    id: 'intelligenza-artificiale',
    term: 'Intelligenza Artificiale',
    shortDef: 'Sistemi informatici che simulano capacità cognitive umane tramite riconoscimento di pattern.',
    definition:
      "L'Intelligenza Artificiale (AI) è la disciplina informatica che sviluppa sistemi capaci di eseguire attività che normalmente richiedono intelligenza umana: riconoscere immagini, comprendere linguaggio, prendere decisioni. L'AI non pensa davvero: riconosce pattern statistici nei dati e li usa per produrre output utili.",
    category: 'AI',
    synonyms: ['AI', 'IA'],
    relatedTerms: ['machine-learning', 'deep-learning', 'pattern-recognition'],
    relatedChapters: ['what-is-ai'],
    examples: ['Riconoscimento facciale', 'Assistenti vocali', 'Filtri spam email'],
  },
  {
    id: 'pattern-recognition',
    term: 'Pattern Recognition',
    shortDef: 'Capacità dell\'AI di identificare schemi ricorrenti nei dati per fare previsioni.',
    definition:
      "Il riconoscimento di pattern è il meccanismo fondamentale dell'AI: invece di seguire regole esplicite, il sistema impara a identificare schemi nei dati di training e li usa per classificare o prevedere nuovi esempi. È la differenza tra programmare le regole manualmente e lasciar apprendere il sistema.",
    category: 'AI',
    relatedTerms: ['machine-learning', 'training'],
    relatedChapters: ['what-is-ai'],
    examples: ['Riconoscere un gatto in una foto', 'Classificare email come spam'],
  },
  {
    id: 'algoritmo',
    term: 'Algoritmo',
    shortDef: 'Sequenza di istruzioni che un computer segue per risolvere un problema o fare una previsione.',
    definition:
      "Un algoritmo è una sequenza finita e deterministica di istruzioni che trasforma un input in un output. In AI, gli algoritmi di apprendimento automatico definiscono come il modello aggiorna i propri parametri in base ai dati osservati. La scelta dell'algoritmo dipende dal tipo di problema, dalla quantità di dati disponibili e dai requisiti di latenza.",
    category: 'AI',
    relatedTerms: ['machine-learning', 'modello'],
    relatedChapters: ['what-is-ai', 'machine-learning'],
    examples: ['Gradient Descent', 'Random Forest', 'Backpropagation'],
  },
  {
    id: 'modello',
    term: 'Modello',
    shortDef: 'Struttura matematica che ha appreso pattern dai dati e produce previsioni su nuovi input.',
    definition:
      "In ML, un modello è la struttura matematica risultante dal training su un dataset. Il modello è definito da una architettura (il tipo di struttura) e da parametri appresi (i pesi). In produzione il modello riceve nuovi input e produce previsioni senza conoscere i dati su cui è stato addestrato.",
    category: 'ML',
    relatedTerms: ['training', 'overfitting', 'underfitting', 'parametri'],
    relatedChapters: ['machine-learning', 'neural-networks'],
    examples: ['Un modello di regressione che prevede prezzi', 'Un classificatore di immagini'],
  },
  {
    id: 'kpi',
    term: 'KPI',
    shortDef: 'Indicatore quantitativo usato per misurare se un sistema AI raggiunge gli obiettivi attesi.',
    definition:
      "Key Performance Indicator (KPI) è una metrica quantitativa che misura le prestazioni di un sistema rispetto a obiettivi definiti. In AI, scegliere KPI chiari prima del deploy è essenziale: accuracy, precision, recall, latenza, tasso di errore. Senza KPI non è possibile distinguere un sistema che funziona da uno che sembra funzionare.",
    category: 'Prodotto',
    synonyms: ['Key Performance Indicator', 'metrica'],
    relatedTerms: ['accuracy', 'precision', 'recall'],
    relatedChapters: ['what-is-ai', 'machine-learning'],
    examples: ['Accuracy > 90%', 'Latenza < 200ms', 'Tasso recall su casi critici'],
  },

  // ── ML ──────────────────────────────────────────────────────────────────
  {
    id: 'machine-learning',
    term: 'Machine Learning',
    shortDef: 'Approccio AI in cui il modello impara dai dati senza essere programmato esplicitamente.',
    definition:
      "Il Machine Learning (ML) è un sottoinsieme dell'AI in cui i sistemi migliorano le proprie prestazioni tramite l'esperienza con i dati, senza regole esplicite programmate. Il ciclo base è: ricevere dati, fare una previsione, misurare l'errore, aggiornare i parametri, ripetere. L'obiettivo è un modello che generalizza bene su dati mai visti.",
    category: 'ML',
    synonyms: ['ML', 'apprendimento automatico'],
    relatedTerms: ['training', 'overfitting', 'underfitting', 'dataset'],
    relatedChapters: ['machine-learning'],
    examples: ['Filtri email spam', 'Previsioni di vendita', 'Sistemi di raccomandazione'],
  },
  {
    id: 'supervised-learning',
    term: 'Supervised Learning',
    shortDef: 'Apprendimento ML su dati etichettati: il modello impara la mappatura input → output corretto.',
    definition:
      "Nell'apprendimento supervisionato il dataset di training contiene coppie (input, label): il modello impara la funzione che mappa ogni input alla label corretta. È la forma più comune di ML per classificazione e regressione. Richiede dati etichettati di qualità, che spesso sono costosi da produrre.",
    category: 'ML',
    synonyms: ['apprendimento supervisionato'],
    relatedTerms: ['unsupervised-learning', 'dataset', 'label', 'training'],
    relatedChapters: ['machine-learning'],
    examples: ['Classificazione email spam/non-spam', 'Previsione prezzi immobili'],
  },
  {
    id: 'unsupervised-learning',
    term: 'Unsupervised Learning',
    shortDef: 'ML su dati senza etichette: il modello scopre strutture nascoste autonomamente.',
    definition:
      "Nell'apprendimento non supervisionato il modello non ha label di riferimento: deve trovare autonomamente strutture, cluster o rappresentazioni nei dati. È utile per segmentazione clienti, anomaly detection, riduzione dimensionalità. La valutazione è più difficile perché non esiste una risposta corretta da confrontare.",
    category: 'ML',
    synonyms: ['apprendimento non supervisionato'],
    relatedTerms: ['supervised-learning', 'clustering'],
    relatedChapters: ['machine-learning'],
    examples: ['Clustering clienti per segmentazione', 'Anomaly detection nei log'],
  },
  {
    id: 'training',
    term: 'Training',
    shortDef: 'Fase in cui il modello aggiorna i propri parametri su un dataset per ridurre l\'errore.',
    definition:
      "Il training (o addestramento) è il processo iterativo in cui il modello vede i dati, fa previsioni, misura l'errore tramite una loss function e aggiorna i parametri usando gradient descent. Il training si conclude quando la loss converge o quando si raggiunge un numero di epoch predefinito. Troppi cicli portano a overfitting.",
    category: 'ML',
    synonyms: ['addestramento', 'apprendimento'],
    relatedTerms: ['overfitting', 'loss-function', 'backpropagation', 'dataset'],
    relatedChapters: ['machine-learning', 'neural-networks'],
  },
  {
    id: 'overfitting',
    term: 'Overfitting',
    shortDef: 'Memorizzazione dei dati di training: il modello performa bene in training ma male su dati nuovi.',
    definition:
      "L'overfitting si verifica quando il modello apprende i dettagli del training set, incluso il rumore, invece di generalizzare i pattern. Si diagnostica con: training score alto, validation score significativamente inferiore. Soluzioni: regolarizzazione, dropout, più dati, architettura più semplice.",
    category: 'ML',
    synonyms: ['sovra-adattamento'],
    relatedTerms: ['underfitting', 'validation', 'regolarizzazione', 'training'],
    relatedChapters: ['machine-learning'],
    examples: ['Score training 98%, validation 60%'],
  },
  {
    id: 'underfitting',
    term: 'Underfitting',
    shortDef: 'Il modello è troppo semplice e non riesce a catturare i pattern rilevanti nei dati.',
    definition:
      "L'underfitting accade quando il modello non ha sufficiente capacità per imparare i pattern del dataset. Si manifesta con training score e validation score entrambi bassi. Soluzioni: modello più complesso, più feature rilevanti, meno regolarizzazione, più dati.",
    category: 'ML',
    synonyms: ['sotto-adattamento'],
    relatedTerms: ['overfitting', 'training', 'modello'],
    relatedChapters: ['machine-learning'],
  },
  {
    id: 'dataset',
    term: 'Dataset',
    shortDef: 'Insieme di dati strutturati usato per addestrare, validare e testare un modello AI.',
    definition:
      "Un dataset è una collezione organizzata di esempi (record, immagini, testi) usata nelle fasi di training, validation e test di un modello ML. La qualità del dataset — non solo la quantità — è il fattore più determinante per le prestazioni del modello. Un dataset bilanciato e rappresentativo è la base di ogni sistema affidabile.",
    category: 'Dati',
    relatedTerms: ['training', 'bias', 'label', 'data-quality'],
    relatedChapters: ['data-importance'],
    examples: ['CSV con prezzi immobili', 'Raccolta immagini etichettate', 'Log applicazione'],
  },
  {
    id: 'bias',
    term: 'Bias (nei dati)',
    shortDef: 'Distorsione sistematica nei dati che porta il modello a fare errori su certi gruppi o casi.',
    definition:
      "Il bias nei dati è una distorsione sistematica che si verifica quando il dataset non rappresenta uniformemente la realtà o riflette pregiudizi storici. Il modello apprende questi bias e li amplifica nelle previsioni. Il caso Amazon hiring è emblematico: il sistema discriminava le donne perché i dati storici riflettevano un mercato del lavoro a predominanza maschile.",
    category: 'Etica',
    synonyms: ['data bias', 'pregiudizio nei dati'],
    relatedTerms: ['dataset', 'fairness', 'data-quality'],
    relatedChapters: ['data-importance', 'ethics-ai'],
    examples: ['Riconoscimento facciale meno accurato su persone scure di pelle', 'Sistema di hiring che discrimina donne'],
  },
  {
    id: 'label',
    term: 'Label',
    shortDef: 'Etichetta associata a un esempio nel dataset supervisionato che indica la risposta corretta.',
    definition:
      "In supervised learning, una label è il valore target associato a ogni esempio nel dataset di training. La qualità delle label è fondamentale: label errate o ambigue degradano direttamente le prestazioni del modello. Il processo di annotazione (labeling) è costoso e spesso richiede expertise del dominio.",
    category: 'Dati',
    synonyms: ['etichetta', 'annotation', 'ground truth'],
    relatedTerms: ['supervised-learning', 'dataset', 'training'],
    relatedChapters: ['data-importance', 'machine-learning'],
  },
  {
    id: 'data-quality',
    term: 'Qualità dei Dati',
    shortDef: 'Misura quanto i dati sono accurati, completi, rappresentativi e privi di rumore.',
    definition:
      "La qualità dei dati è il fattore più critico in ML: dati di alta qualità in quantità sufficiente battono sistematicamente grandi volumi di dati rumorosi. Le dimensioni chiave sono: accuratezza (i valori sono corretti?), completezza (ci sono valori mancanti?), rappresentatività (coprono tutti i casi rilevanti?) e consistenza (formati uniformi?).",
    category: 'Dati',
    synonyms: ['data quality', 'pulizia dati'],
    relatedTerms: ['bias', 'dataset', 'preprocessing'],
    relatedChapters: ['data-importance'],
    examples: ['Dati privi di duplicati', 'Valori mancanti gestiti', 'Classi bilanciate'],
  },
  {
    id: 'accuracy',
    term: 'Accuracy',
    shortDef: 'Percentuale di previsioni corrette sul totale. Utile ma insufficiente su dataset sbilanciati.',
    definition:
      "L'accuracy è la proporzione di previsioni corrette rispetto al totale degli esempi. Formula: (veri positivi + veri negativi) / totale. Limitazione importante: su dataset sbilanciati (es. 99% negativi) un modello che predice sempre negativo ottiene 99% di accuracy pur essendo inutile. Integrare con precision, recall e F1-score.",
    category: 'ML',
    synonyms: ['accuratezza', 'precisione globale'],
    relatedTerms: ['precision', 'recall', 'f1-score', 'kpi'],
    relatedChapters: ['machine-learning'],
  },
  {
    id: 'precision',
    term: 'Precision',
    shortDef: 'Proporzione di previsioni positive corrette sul totale delle previsioni positive fatte.',
    definition:
      "La precision misura quante delle istanze classificate come positive sono realmente positive. Formula: veri positivi / (veri positivi + falsi positivi). Alta precision = pochi falsi allarmi. Importante quando il costo di un falso positivo è elevato (es. spam filter che blocca email legittime).",
    category: 'ML',
    relatedTerms: ['recall', 'accuracy', 'f1-score'],
    relatedChapters: ['machine-learning'],
  },
  {
    id: 'recall',
    term: 'Recall',
    shortDef: 'Proporzione di veri positivi rilevati sul totale dei positivi realmente presenti.',
    definition:
      "Il recall (sensibilità) misura quanti dei positivi reali sono stati correttamente identificati. Formula: veri positivi / (veri positivi + falsi negativi). Alto recall = pochi casi mancati. Fondamentale quando il costo di un falso negativo è elevato (es. diagnosi medica, rilevamento frodi).",
    category: 'ML',
    synonyms: ['sensibilità', 'sensitivity'],
    relatedTerms: ['precision', 'accuracy', 'f1-score'],
    relatedChapters: ['machine-learning'],
  },
  {
    id: 'f1-score',
    term: 'F1-Score',
    shortDef: 'Media armonica di precision e recall. Bilancia i due tradeoff in un unico numero.',
    definition:
      "L'F1-score è la media armonica tra precision e recall. Formula: 2 × (precision × recall) / (precision + recall). Utile quando serve bilanciare i due tradeoff su classi sbilanciate. Valori vicini a 1 indicano un buon equilibrio tra falsi positivi e falsi negativi.",
    category: 'ML',
    relatedTerms: ['precision', 'recall', 'accuracy'],
    relatedChapters: ['machine-learning'],
  },

  // ── Deep Learning ────────────────────────────────────────────────────────
  {
    id: 'deep-learning',
    term: 'Deep Learning',
    shortDef: 'Sottocampo del ML basato su reti neurali profonde con molti strati di trasformazione.',
    definition:
      "Il Deep Learning usa reti neurali con molti layer nascosti (da qui 'deep') per apprendere rappresentazioni sempre più astratte dei dati. È alla base di quasi tutti i sistemi AI moderni: computer vision, NLP, generazione di immagini. Richiede grandi quantità di dati e potenza computazionale significativa.",
    category: 'Deep Learning',
    synonyms: ['DL', 'apprendimento profondo'],
    relatedTerms: ['neural-network', 'backpropagation', 'machine-learning'],
    relatedChapters: ['neural-networks'],
    examples: ['GPT-4', 'DALL-E', 'AlphaGo', 'Stable Diffusion'],
  },
  {
    id: 'neural-network',
    term: 'Rete Neurale',
    shortDef: 'Architettura ML con layer di nodi connessi (neuroni artificiali) che trasformano i dati.',
    definition:
      "Una rete neurale artificiale è composta da layer: input (riceve dati), hidden (trasformano i segnali) e output (produce la previsione). Ogni connessione ha un peso che viene aggiornato durante il training. I layer nascosti imparano rappresentazioni gerarchiche dei dati: bordi → forme → oggetti.",
    category: 'Deep Learning',
    synonyms: ['ANN', 'rete neurale artificiale'],
    relatedTerms: ['backpropagation', 'peso', 'layer', 'deep-learning'],
    relatedChapters: ['neural-networks'],
  },
  {
    id: 'backpropagation',
    term: 'Backpropagation',
    shortDef: 'Algoritmo che propaga l\'errore all\'indietro nella rete per aggiornare i pesi e ridurre la loss.',
    definition:
      "La backpropagation (retropropagazione dell'errore) è l'algoritmo che permette alle reti neurali di imparare. Dopo una previsione, calcola il gradiente dell'errore rispetto a ciascun peso usando la chain rule, poi aggiorna i pesi in direzione opposta al gradiente (gradient descent). Il ciclo si ripete fino a convergenza.",
    category: 'Deep Learning',
    synonyms: ['retropropagazione', 'backprop'],
    relatedTerms: ['neural-network', 'gradient-descent', 'loss-function', 'training'],
    relatedChapters: ['neural-networks'],
  },
  {
    id: 'gradient-descent',
    term: 'Gradient Descent',
    shortDef: 'Algoritmo di ottimizzazione che aggiorna i parametri del modello seguendo il gradiente della loss.',
    definition:
      "Il Gradient Descent è l'algoritmo di ottimizzazione fondamentale in ML: aggiorna iterativamente i parametri del modello nella direzione opposta al gradiente della loss function, riducendo progressivamente l'errore. Il learning rate controlla la dimensione di ogni passo. Varianti: SGD, Adam, RMSProp.",
    category: 'Deep Learning',
    synonyms: ['discesa del gradiente'],
    relatedTerms: ['backpropagation', 'learning-rate', 'loss-function'],
    relatedChapters: ['neural-networks'],
  },
  {
    id: 'loss-function',
    term: 'Loss Function',
    shortDef: 'Funzione che misura l\'errore del modello sulle previsioni. Il training mira a minimizzarla.',
    definition:
      "La loss function (funzione di perdita) quantifica la differenza tra la previsione del modello e il valore reale. Il training mira a minimizzare questa funzione. Scelta in base al task: MSE per regressione, Cross-Entropy per classificazione. Una loss che non scende è segnale di problemi nell'architettura o nei dati.",
    category: 'Deep Learning',
    synonyms: ['funzione di perdita', 'cost function', 'objective function'],
    relatedTerms: ['gradient-descent', 'training', 'backpropagation'],
    relatedChapters: ['neural-networks', 'machine-learning'],
  },
  {
    id: 'learning-rate',
    term: 'Learning Rate',
    shortDef: 'Iperparametro che controlla la dimensione degli aggiornamenti dei pesi durante il training.',
    definition:
      "Il learning rate (tasso di apprendimento) è un iperparametro critico che determina quanto vengono modificati i pesi a ogni step di gradient descent. Troppo alto: il training diverge. Troppo basso: convergenza lentissima o trappola nei minimi locali. Tecniche moderne usano scheduling adattivo (Adam, cosine annealing).",
    category: 'Deep Learning',
    synonyms: ['tasso di apprendimento'],
    relatedTerms: ['gradient-descent', 'training', 'iperparametro'],
    relatedChapters: ['neural-networks'],
  },
  {
    id: 'layer',
    term: 'Layer',
    shortDef: 'Strato di neuroni in una rete neurale che applica una trasformazione ai dati in input.',
    definition:
      "Un layer è un livello della rete neurale composto da neuroni che applicano trasformazioni ai dati in input. Tipi principali: fully connected (dense), convoluzionale (per immagini), ricorrente (per sequenze), attention (per Transformer). La profondità (numero di layer) determina la capacità di astrazione della rete.",
    category: 'Deep Learning',
    synonyms: ['strato', 'livello'],
    relatedTerms: ['neural-network', 'deep-learning', 'transformer'],
    relatedChapters: ['neural-networks'],
  },
  {
    id: 'peso',
    term: 'Peso (Weight)',
    shortDef: 'Parametro numerico in una rete neurale che quantifica l\'importanza di una connessione.',
    definition:
      "I pesi sono i parametri appresi di una rete neurale. Ogni connessione tra neuroni ha un peso che regola quanto il segnale viene amplificato o attenuato. Durante il training i pesi vengono aggiornati tramite backpropagation per minimizzare la loss. Un modello addestrato è essenzialmente il vettore dei suoi pesi ottimizzati.",
    category: 'Deep Learning',
    synonyms: ['parametro', 'weight'],
    relatedTerms: ['neural-network', 'backpropagation', 'training'],
    relatedChapters: ['neural-networks'],
  },
  {
    id: 'dropout',
    term: 'Dropout',
    shortDef: 'Tecnica di regolarizzazione che disattiva casualmente neuroni durante il training per ridurre overfitting.',
    definition:
      "Il dropout è una tecnica di regolarizzazione per reti neurali: durante il training, un certo percentuale di neuroni viene disattivato casualmente a ogni step. Questo forza la rete ad apprendere rappresentazioni distribuite e riduce la co-adattazione tra neuroni. In inference il dropout viene disabilitato.",
    category: 'Deep Learning',
    relatedTerms: ['overfitting', 'regolarizzazione', 'neural-network'],
    relatedChapters: ['neural-networks'],
  },
  {
    id: 'cnn',
    term: 'CNN',
    shortDef: 'Rete Convoluzionale: architettura Deep Learning specializzata per elaborare dati a griglia (immagini).',
    definition:
      "Le Convolutional Neural Networks (CNN) sono architetture Deep Learning progettate per dati strutturati spazialmente come immagini. Usano filtri convoluzionali che rilevano caratteristiche locali (bordi, texture, forme) a diversi livelli di astrazione. Sono alla base di tutti i sistemi moderni di computer vision.",
    category: 'Deep Learning',
    synonyms: ['Convolutional Neural Network', 'rete convoluzionale'],
    relatedTerms: ['deep-learning', 'neural-network', 'computer-vision'],
    relatedChapters: ['neural-networks'],
  },

  // ── NLP ─────────────────────────────────────────────────────────────────
  {
    id: 'nlp',
    term: 'NLP',
    shortDef: 'Natural Language Processing: campo AI che permette ai computer di elaborare il linguaggio umano.',
    definition:
      "Il Natural Language Processing (NLP) è il campo dell'AI che si occupa dell'interazione tra computer e linguaggio umano. Include task come traduzione automatica, analisi del sentiment, question answering, sintesi testuale. Richiede di trasformare il testo in rappresentazioni numeriche (token, embedding) prima di poter applicare ML.",
    category: 'NLP',
    synonyms: ['Natural Language Processing', 'elaborazione del linguaggio naturale'],
    relatedTerms: ['tokenizzazione', 'embedding', 'transformer', 'llm'],
    relatedChapters: ['nlp'],
    examples: ['ChatGPT', 'Google Translate', 'Analisi sentiment recensioni'],
  },
  {
    id: 'tokenizzazione',
    term: 'Tokenizzazione',
    shortDef: 'Processo che spezza il testo in unità (token) — parole, sottoparte o caratteri — prima dell\'elaborazione.',
    definition:
      "La tokenizzazione è il primo step nell'elaborazione NLP: trasforma una stringa di testo in una sequenza di token. Un token può essere una parola, un sottoparte di parola (subword), o un carattere. La qualità della tokenizzazione influenza direttamente le prestazioni del modello. Modelli moderni usano tokenizzazione BPE o SentencePiece.",
    category: 'NLP',
    synonyms: ['tokenization'],
    relatedTerms: ['embedding', 'nlp', 'llm'],
    relatedChapters: ['nlp'],
  },
  {
    id: 'embedding',
    term: 'Embedding',
    shortDef: 'Rappresentazione densa di testo (o altri dati) in un vettore numerico nello spazio semantico.',
    definition:
      "Un embedding è una rappresentazione vettoriale densa di un token o documento in uno spazio multidimensionale. Parole o frasi con significati simili hanno embedding vicini in questo spazio. Gli embedding catturano relazioni semantiche: re - uomo + donna ≈ regina. Sono il fondamento di tutti i moderni sistemi NLP.",
    category: 'NLP',
    synonyms: ['vettore semantico', 'word embedding'],
    relatedTerms: ['tokenizzazione', 'nlp', 'transformer'],
    relatedChapters: ['nlp'],
    examples: ['Word2Vec', 'GloVe', 'BERT embeddings'],
  },
  {
    id: 'transformer',
    term: 'Transformer',
    shortDef: 'Architettura neurale basata su self-attention, fondamento di GPT, BERT e moderni LLM.',
    definition:
      "Il Transformer è l'architettura introdotta nel paper 'Attention Is All You Need' (2017) che ha rivoluzionato il NLP. Il meccanismo chiave è la self-attention: ogni token calcola quanto prestare attenzione agli altri token nel contesto. Questo permette di modellare dipendenze a lunga distanza e parallelizzare il training. Tutti i moderni LLM si basano su varianti del Transformer.",
    category: 'NLP',
    relatedTerms: ['attention-mechanism', 'llm', 'embedding', 'nlp'],
    relatedChapters: ['nlp', 'generative-ai'],
    examples: ['GPT-4', 'BERT', 'T5', 'Claude'],
  },
  {
    id: 'attention-mechanism',
    term: 'Attention Mechanism',
    shortDef: 'Meccanismo che permette al modello di pesare dinamicamente le parti più rilevanti del contesto.',
    definition:
      "Il meccanismo di attenzione permette alla rete di 'pesare' dinamicamente quanto ciascuna parte dell'input è rilevante per generare ogni token dell'output. In un Transformer, l'auto-attenzione (self-attention) calcola questi pesi per ogni posizione rispetto a tutte le altre, permettendo di modellare dipendenze contestuali complesse.",
    category: 'NLP',
    synonyms: ['self-attention', 'meccanismo di attenzione'],
    relatedTerms: ['transformer', 'llm', 'context-window'],
    relatedChapters: ['nlp'],
  },
  {
    id: 'context-window',
    term: 'Context Window',
    shortDef: 'Quantità massima di testo (in token) che un LLM può elaborare in una singola chiamata.',
    definition:
      "La context window è il limite massimo di token che un LLM può elaborare in un singolo prompt+risposta. Oltre questo limite il modello 'dimentica' il contenuto precedente. GPT-4 supporta fino a 128K token, Claude fino a 200K. Una context window ridotta limita la capacità del modello di ragionare su documenti lunghi.",
    category: 'NLP',
    synonyms: ['finestra di contesto', 'context length'],
    relatedTerms: ['llm', 'transformer', 'tokenizzazione'],
    relatedChapters: ['nlp', 'generative-ai'],
  },

  // ── Generativa ──────────────────────────────────────────────────────────
  {
    id: 'llm',
    term: 'LLM',
    shortDef: 'Large Language Model: modello linguistico su larga scala addestrato su enormi corpus testuali.',
    definition:
      "Un Large Language Model (LLM) è un modello Transformer addestrato su corpus di testo su vasta scala (centinaia di miliardi di parole) per predire il token successivo. Questa task semplice, scalata, produce modelli capaci di ragionare, tradurre, generare codice e rispondere a domande. GPT-4, Claude, Gemini e Llama sono esempi di LLM.",
    category: 'Generativa',
    synonyms: ['Large Language Model', 'modello linguistico di grandi dimensioni'],
    relatedTerms: ['transformer', 'prompt-engineering', 'allucinazione', 'rag'],
    relatedChapters: ['generative-ai'],
    examples: ['GPT-4o', 'Claude 3.5', 'Gemini 1.5', 'Llama 3'],
  },
  {
    id: 'prompt-engineering',
    term: 'Prompt Engineering',
    shortDef: 'Tecnica di progettazione dei prompt per guidare un LLM verso output accurati e controllati.',
    definition:
      "Il prompt engineering è la pratica di progettare input strutturati per ottenere output di qualità da LLM. Un buon prompt specifica: ruolo (es. 'sei un esperto di...'), contesto, vincoli e formato di output atteso. Prompt vaghi producono output generici; prompt strutturati aumentano pertinenza e controllabilità.",
    category: 'Generativa',
    synonyms: ['prompt design'],
    relatedTerms: ['llm', 'allucinazione', 'temperatura', 'rag'],
    relatedChapters: ['generative-ai'],
    examples: ['Chain-of-thought prompting', 'Few-shot prompting', 'System prompt'],
  },
  {
    id: 'allucinazione',
    term: 'Allucinazione',
    shortDef: 'Output LLM fluente e plausibile ma fattualmente errato o inventato.',
    definition:
      "Un'allucinazione è un output generato da un LLM che appare linguisticamente corretto e plausibile ma contiene informazioni false, inventate o non verificabili. Avviene perché il modello ottimizza per la coerenza del testo, non per la veridicità fattuale. Mitigazione: RAG, prompt con istruzioni esplicite di incertezza, verifica umana.",
    category: 'Generativa',
    synonyms: ['hallucination', 'confabulazione'],
    relatedTerms: ['llm', 'rag', 'prompt-engineering'],
    relatedChapters: ['generative-ai'],
    examples: ['Citare paper inesistenti', 'Inventare date storiche'],
  },
  {
    id: 'temperatura',
    term: 'Temperatura',
    shortDef: 'Parametro LLM che controlla la casualità dell\'output: alta = più creativo, bassa = più deterministico.',
    definition:
      "La temperatura è un iperparametro di sampling dei LLM che scala la distribuzione di probabilità sui token. Temperature bassa (0.1-0.3): output più deterministico e ripetibile. Temperature alta (0.8-1.2): output più vario e creativo ma meno stabile. Per task che richiedono accuratezza fattuale è preferibile tenere la temperature bassa.",
    category: 'Generativa',
    synonyms: ['temperature', 'parametro temperatura'],
    relatedTerms: ['llm', 'prompt-engineering', 'allucinazione'],
    relatedChapters: ['generative-ai'],
  },
  {
    id: 'rag',
    term: 'RAG',
    shortDef: 'Retrieval-Augmented Generation: combina un LLM con recupero di documenti per risposte ancorate a fatti.',
    definition:
      "Il RAG (Retrieval-Augmented Generation) è un'architettura che combina un retriever (che cerca documenti rilevanti in una knowledge base) con un LLM generativo che usa quei documenti come contesto. Riduce le allucinazioni ancorando il modello a fonti verificabili e permette aggiornamenti frequenti senza fine-tuning.",
    category: 'Generativa',
    synonyms: ['Retrieval-Augmented Generation'],
    relatedTerms: ['llm', 'fine-tuning', 'allucinazione', 'embedding'],
    relatedChapters: ['generative-ai', 'fine-tuning'],
    examples: ['Chatbot su documentazione interna', 'FAQ con knowledge base aziendale'],
  },
  {
    id: 'fine-tuning',
    term: 'Fine-Tuning',
    shortDef: 'Adattamento di un modello pre-addestrato a un dominio specifico tramite training su dati targetizzati.',
    definition:
      "Il fine-tuning è il processo di ulteriore addestramento di un modello pre-addestrato su dati specifici del dominio target, modificando i pesi del modello. Migliora la performance su task specifici ma richiede dati di qualità, costo computazionale e aggiornamento periodico. Alternativa a RAG per task di stile e consistenza.",
    category: 'Generativa',
    synonyms: ['messa a punto', 'adattamento del modello'],
    relatedTerms: ['transfer-learning', 'rag', 'llm', 'training'],
    relatedChapters: ['fine-tuning'],
  },
  {
    id: 'transfer-learning',
    term: 'Transfer Learning',
    shortDef: 'Riutilizzo di un modello pre-addestrato su un task come punto di partenza per un nuovo task.',
    definition:
      "Il transfer learning è la tecnica di riutilizzare la conoscenza appresa da un modello su un task o dominio per accelerare l'apprendimento su un task diverso ma correlato. Riduce drasticamente i dati e il compute necessari rispetto al training da zero. È la base di fine-tuning e feature extraction.",
    category: 'ML',
    synonyms: ['apprendimento per trasferimento'],
    relatedTerms: ['fine-tuning', 'modello', 'pre-training'],
    relatedChapters: ['fine-tuning'],
    examples: ['BERT pre-addestrato + fine-tuning su sentiment analysis'],
  },
  {
    id: 'guardrail',
    term: 'Guardrail',
    shortDef: 'Controlli tecnici che limitano o filtrano l\'output di un sistema AI per ridurre rischi.',
    definition:
      "I guardrail sono meccanismi di controllo applicati in un sistema AI generativo per prevenire output dannosi, fuori tema o non conformi alle policy. Includono: filtri contenuti (moderazione), validazioni output, rate limiting, escalation umana per casi critici, logging per audit. Non sono opzionali in produzione.",
    category: 'Prodotto',
    synonyms: ['safety filters', 'controlli di sicurezza AI'],
    relatedTerms: ['llm', 'allucinazione', 'etica-ai'],
    relatedChapters: ['generative-ai', 'ethics-ai'],
  },

  // ── Etica ────────────────────────────────────────────────────────────────
  {
    id: 'fairness',
    term: 'Fairness',
    shortDef: 'Proprietà di un sistema AI di non discriminare in modo ingiusto su gruppi o individui.',
    definition:
      "La fairness (equità) nell'AI richiede che il sistema non produca decisioni sistematicamente svantaggiose per certi gruppi (per genere, etnia, età, ecc.). Misurare fairness è complesso: ci sono diverse definizioni matematiche (equalized odds, demographic parity) che possono essere in conflitto tra loro. Richiede audit continui, non solo una validazione iniziale.",
    category: 'Etica',
    synonyms: ['equità', 'giustizia algoritmica'],
    relatedTerms: ['bias', 'etica-ai', 'data-quality'],
    relatedChapters: ['ethics-ai', 'data-importance'],
  },
  {
    id: 'explainability',
    term: 'Explainability',
    shortDef: 'Capacità di un sistema AI di spiegare come e perché ha prodotto una certa decisione.',
    definition:
      "L'explainability (spiegabilità) è la capacità di un modello di rendere comprensibili le proprie decisioni a umani. Fondamentale nei domini regolati (credito, assunzioni, salute) dove la legge può richiedere spiegazioni. Tecniche: LIME, SHAP per modelli black-box; architetture inherently interpretable come alberi decisionali.",
    category: 'Etica',
    synonyms: ['spiegabilità', 'interpretabilità', 'XAI'],
    relatedTerms: ['fairness', 'etica-ai', 'modello'],
    relatedChapters: ['ethics-ai'],
  },
  {
    id: 'etica-ai',
    term: 'Etica AI',
    shortDef: 'Principi e pratiche per sviluppare AI in modo responsabile, equo e trasparente.',
    definition:
      "L'etica nell'AI non è un documento: è un processo tecnico che include audit bias, metriche fairness, escalation umana, logging decisionale e review periodiche. Include principi come: non maleficenza, trasparenza, accountabilità, privacy e rispetto dei diritti. L'AI Act europeo traduce molti di questi principi in obblighi legali.",
    category: 'Etica',
    synonyms: ['AI ethics', 'responsible AI'],
    relatedTerms: ['fairness', 'explainability', 'bias', 'guardrail'],
    relatedChapters: ['ethics-ai'],
  },

  // ── Prodotto / Architettura ──────────────────────────────────────────────
  {
    id: 'mvp',
    term: 'MVP',
    shortDef: 'Minimum Viable Product: versione minimale del prodotto che testa le ipotesi chiave sul mercato.',
    definition:
      "Un MVP (Minimum Viable Product) è la versione più semplice del prodotto che permette di validare le ipotesi fondamentali con utenti reali. In contesto AI significa partire con modelli semplici e architetture snelle, misurare il valore reale, poi aggiungere complessità solo dove i dati lo giustificano.",
    category: 'Prodotto',
    synonyms: ['Minimum Viable Product', 'prodotto minimo funzionante'],
    relatedTerms: ['kpi', 'produzione'],
    relatedChapters: ['what-is-ai'],
  },
  {
    id: 'produzione',
    term: 'Produzione (In produzione)',
    shortDef: 'Stato in cui un sistema AI è attivo e riceve input reali da utenti o sistemi.',
    definition:
      "Un sistema è 'in produzione' quando elabora dati reali in un ambiente live. In ML questo è il momento più critico: il modello incontra distribuzione di dati spesso diversa dal training set (data drift). Richiede: monitoring continuo, alerting su anomalie, procedure di rollback e aggiornamento periodico.",
    category: 'Prodotto',
    synonyms: ['deployment', 'in production'],
    relatedTerms: ['monitoring', 'data-drift', 'kpi'],
    relatedChapters: ['machine-learning'],
  },
  {
    id: 'data-drift',
    term: 'Data Drift',
    shortDef: 'Cambiamento della distribuzione dei dati in produzione rispetto ai dati di training nel tempo.',
    definition:
      "Il data drift è il fenomeno per cui i dati che arrivano al modello in produzione cambiano statisticamente rispetto al dataset su cui è stato addestrato. Può causare degradazione delle prestazioni silenziosa. Richiede monitoring della distribuzione degli input e delle metriche di output per rilevarlo tempestivamente.",
    category: 'Prodotto',
    synonyms: ['dataset shift', 'distributional shift'],
    relatedTerms: ['produzione', 'monitoring', 'training'],
    relatedChapters: ['machine-learning'],
  },
  {
    id: 'iperparametro',
    term: 'Iperparametro',
    shortDef: 'Parametro di configurazione del modello scelto prima del training, non appreso dai dati.',
    definition:
      "Gli iperparametri sono le impostazioni di configurazione di un modello che si scelgono prima del training e non vengono appresi automaticamente dai dati: learning rate, numero di layer, dimensione del batch, dropout rate. Trovare i valori ottimali richiede sperimentazione (hyperparameter tuning) o tecniche automatizzate (AutoML, Bayesian optimization).",
    category: 'ML',
    synonyms: ['hyperparameter'],
    relatedTerms: ['learning-rate', 'training', 'modello'],
    relatedChapters: ['machine-learning', 'neural-networks'],
  },
  {
    id: 'preprocessing',
    term: 'Preprocessing',
    shortDef: 'Fase di pulizia e trasformazione dei dati grezzi prima di usarli per il training.',
    definition:
      "Il preprocessing è l'insieme di operazioni di pulizia e trasformazione applicate ai dati grezzi prima del training: gestione valori mancanti, normalizzazione, encoding categorico, rimozione outlier, feature engineering. È spesso il 70-80% del lavoro in un progetto ML e impatta direttamente la qualità del modello.",
    category: 'Dati',
    synonyms: ['preparazione dati', 'data preparation', 'data cleaning'],
    relatedTerms: ['dataset', 'data-quality', 'feature-engineering'],
    relatedChapters: ['data-importance'],
  },
  {
    id: 'feature-engineering',
    term: 'Feature Engineering',
    shortDef: 'Processo di creazione e selezione di variabili rilevanti dai dati grezzi per migliorare il modello.',
    definition:
      "Il feature engineering è il processo di creare, trasformare e selezionare le variabili (feature) più informative per il modello, partendo dai dati grezzi. Una buona feature può migliorare più le prestazioni di un modello che un'architettura più complessa. Include: creazione di feature aggregate, encoding, interazioni, riduzione dimensionalità.",
    category: 'Dati',
    synonyms: ['ingegneria delle feature'],
    relatedTerms: ['preprocessing', 'dataset', 'modello'],
    relatedChapters: ['data-importance', 'machine-learning'],
  },
  {
    id: 'validation',
    term: 'Validation Set',
    shortDef: 'Sottoinsieme del dataset usato per valutare il modello durante il training e scegliere gli iperparametri.',
    definition:
      "Il validation set è una porzione dei dati tenuta separata dal training set per valutare le prestazioni del modello durante lo sviluppo. Permette di rilevare overfitting e fare model selection senza contaminare il test set. La separazione tipica è 70/15/15 (train/val/test) o 80/10/10.",
    category: 'ML',
    synonyms: ['dev set', 'development set', 'insieme di validazione'],
    relatedTerms: ['training', 'overfitting', 'test-set'],
    relatedChapters: ['machine-learning'],
  },
  {
    id: 'test-set',
    term: 'Test Set',
    shortDef: 'Sottoinsieme di dati mai visti dal modello, usato per la valutazione finale delle prestazioni.',
    definition:
      "Il test set è la porzione di dati riservata esclusivamente per la valutazione finale del modello, dopo che tutti i cicli di training e tuning sono completati. Non deve mai essere usato per decisioni di training o tuning: altrimenti le metriche risultanti sovrastimano la performance reale in produzione.",
    category: 'ML',
    synonyms: ['insieme di test', 'hold-out set'],
    relatedTerms: ['validation', 'training', 'overfitting'],
    relatedChapters: ['machine-learning'],
  },
  {
    id: 'clustering',
    term: 'Clustering',
    shortDef: 'Tecnica unsupervised di raggruppamento automatico di dati simili in cluster.',
    definition:
      "Il clustering è una tecnica di apprendimento non supervisionato che raggruppa esempi simili in cluster, senza usare label. Algoritmi comuni: K-Means, DBSCAN, Hierarchical Clustering. Applicato in segmentazione clienti, anomaly detection, compressione dati. La 'qualità' del clustering si valuta con metriche come silhouette score.",
    category: 'ML',
    synonyms: ['clusterizzazione', 'segmentazione'],
    relatedTerms: ['unsupervised-learning', 'dataset'],
    relatedChapters: ['machine-learning'],
    examples: ['Segmentazione clienti per campagne marketing', 'Raggruppamento documenti simili'],
  },
  {
    id: 'computer-vision',
    term: 'Computer Vision',
    shortDef: 'Campo AI che permette ai computer di interpretare e analizzare informazioni visive da immagini e video.',
    definition:
      "La Computer Vision è il campo dell'AI che sviluppa sistemi capaci di interpretare immagini e video. Task principali: classificazione immagini, object detection, segmentazione semantica, face recognition. Si basa principalmente su CNN e Vision Transformer. Applicazioni: guida autonoma, diagnostica medica, controllo qualità industriale.",
    category: 'Deep Learning',
    synonyms: ['visione artificiale', 'CV'],
    relatedTerms: ['cnn', 'deep-learning', 'neural-network'],
    relatedChapters: ['neural-networks'],
  },
  {
    id: 'reinforcement-learning',
    term: 'Reinforcement Learning',
    shortDef: 'Paradigma ML in cui un agente impara tramite reward e penalty interagendo con un ambiente.',
    definition:
      "Nel Reinforcement Learning (RL) un agente apprende a prendere decisioni tramite interazione con un ambiente: riceve una ricompensa (reward) per azioni positive e una penalità per quelle negative. Usato in giochi (AlphaGo), robotica e ottimizzazione. RLHF (RL from Human Feedback) è alla base dell'allineamento degli LLM.",
    category: 'ML',
    synonyms: ['RL', 'apprendimento per rinforzo'],
    relatedTerms: ['machine-learning', 'llm'],
    relatedChapters: ['machine-learning'],
    examples: ['AlphaGo', 'ChatGPT (RLHF)', 'Robot che impara a camminare'],
  },
  {
    id: 'rlhf',
    term: 'RLHF',
    shortDef: 'Reinforcement Learning from Human Feedback: tecnica di allineamento LLM basata su feedback umano.',
    definition:
      "RLHF (Reinforcement Learning from Human Feedback) è la tecnica usata per allineare LLM alle preferenze umane. Gli annotatori umani valutano coppie di risposte, creando un modello di reward che guida ulteriore fine-tuning tramite RL. È alla base dell'allineamento di GPT-4, Claude e Gemini alle istruzioni umane.",
    category: 'Generativa',
    synonyms: ['Reinforcement Learning from Human Feedback'],
    relatedTerms: ['llm', 'fine-tuning', 'reinforcement-learning'],
    relatedChapters: ['fine-tuning'],
  },
  {
    id: 'zero-shot',
    term: 'Zero-shot',
    shortDef: 'Capacità di un LLM di eseguire un task senza esempi di training specifici per quel task.',
    definition:
      "Zero-shot si riferisce alla capacità di un modello di eseguire task per cui non è stato esplicitamente addestrato, basandosi solo su istruzioni nel prompt. Gli LLM moderni eccellono in questo grazie alla loro ampia pre-training. Utile per prototipazione rapida, ma può essere meno affidabile di few-shot o fine-tuned approach su task specifici.",
    category: 'Generativa',
    synonyms: ['zero-shot learning', 'zero shot'],
    relatedTerms: ['fine-tuning', 'rag', 'prompt-engineering', 'llm'],
    relatedChapters: ['fine-tuning'],
  },
  {
    id: 'regolarizzazione',
    term: 'Regolarizzazione',
    shortDef: 'Tecniche che penalizzano la complessità del modello per ridurre overfitting e migliorare la generalizzazione.',
    definition:
      "La regolarizzazione è un insieme di tecniche che aggiungono un termine di penalità alla loss function per scoraggiare modelli troppo complessi. Tipi principali: L1 (Lasso, produce sparsità), L2 (Ridge, riduce i pesi grandi), Dropout (per reti neurali), Early Stopping. Migliorano la capacità del modello di generalizzare su dati nuovi.",
    category: 'ML',
    synonyms: ['regularization'],
    relatedTerms: ['overfitting', 'dropout', 'loss-function'],
    relatedChapters: ['machine-learning', 'neural-networks'],
  },
  {
    id: 'generative-ai',
    term: 'AI Generativa',
    shortDef: 'Modelli AI capaci di generare nuovi contenuti (testo, immagini, audio) a partire da un input.',
    definition:
      "L'AI generativa comprende modelli addestrati a generare nuovi contenuti realistici: testo (LLM), immagini (Diffusion Models, GAN), audio, video e codice. Il meccanismo base è la previsione iterativa del token successivo più probabile, condizionata sul contesto. Richiede guardrail, QA e verifica fattuale prima dell'uso in produzione.",
    category: 'Generativa',
    synonyms: ['generative AI', 'gen AI'],
    relatedTerms: ['llm', 'prompt-engineering', 'allucinazione', 'guardrail'],
    relatedChapters: ['generative-ai'],
    examples: ['ChatGPT', 'DALL-E', 'Midjourney', 'GitHub Copilot'],
  },
  {
    id: 'gpt',
    term: 'GPT',
    shortDef: 'Generative Pre-trained Transformer: famiglia di LLM di OpenAI, base di ChatGPT.',
    definition:
      "GPT (Generative Pre-trained Transformer) è una famiglia di LLM sviluppati da OpenAI. Si basa sull'architettura Transformer con pre-training su enormi corpus testuali e fine-tuning con RLHF per l'allineamento alle istruzioni umane. GPT-4 e GPT-4o sono alla base di ChatGPT. La versione 'o' indica modelli con ragionamento esteso (chain-of-thought).",
    category: 'Generativa',
    synonyms: ['Generative Pre-trained Transformer', 'ChatGPT'],
    relatedTerms: ['llm', 'transformer', 'rlhf'],
    relatedChapters: ['generative-ai'],
  },
  {
    id: 'diffusion-model',
    term: 'Diffusion Model',
    shortDef: 'Modello generativo che crea immagini denoising iterativo a partire da rumore gaussiano.',
    definition:
      "I Diffusion Model sono modelli generativi che imparano a creare immagini invertendo un processo di aggiunta progressiva di rumore. Durante il training: aggiunge rumore graduale alle immagini. Durante l'inference: parte da rumore puro e rimuove iterativamente rumore condizionato sul prompt testuale. Stable Diffusion e DALL-E 3 sono esempi.",
    category: 'Generativa',
    synonyms: ['modello di diffusione'],
    relatedTerms: ['generative-ai', 'deep-learning'],
    relatedChapters: ['generative-ai'],
    examples: ['Stable Diffusion', 'DALL-E 3', 'Midjourney'],
  },
  {
    id: 'pre-training',
    term: 'Pre-training',
    shortDef: 'Fase di addestramento su dataset generale e massiccio prima di adattare il modello a task specifici.',
    definition:
      "Il pre-training è la fase in cui un modello viene addestrato su un corpus molto ampio e generico (es. tutto il testo di Wikipedia + libri + web) con un obiettivo self-supervised come predire il token successivo. Il modello acquisisce una rappresentazione ricca della lingua e del mondo. Il pre-training è costoso ma viene fatto una sola volta; poi si adatta con fine-tuning.",
    category: 'ML',
    synonyms: ['pre-addestramento'],
    relatedTerms: ['fine-tuning', 'transfer-learning', 'llm'],
    relatedChapters: ['fine-tuning'],
  },
  {
    id: 'api',
    term: 'API',
    shortDef: 'Application Programming Interface: interfaccia standard per integrare capacità AI in applicazioni.',
    definition:
      "Un'API (Application Programming Interface) è un'interfaccia standard che permette a software diversi di comunicare. In contesto AI, le API come OpenAI API o Anthropic API permettono di integrare capacità LLM in applicazioni senza gestire l'infrastruttura. Il costo è basato su token consumati; ottimizzare prompt = ridurre costi.",
    category: 'Prodotto',
    synonyms: ['interfaccia programmatica'],
    relatedTerms: ['llm', 'prompt-engineering', 'rag'],
    relatedChapters: ['generative-ai'],
  },
  {
    id: 'autonomous-agent',
    term: 'Agente Autonomo',
    shortDef: 'Sistema AI che pianifica e esegue sequenze di azioni in modo autonomo per raggiungere un obiettivo.',
    definition:
      "Un agente autonomo AI è un sistema che percepisce l'ambiente, pianifica azioni e le esegue in modo autonomo per raggiungere un obiettivo. Gli agenti AI moderni combinano LLM con strumenti (tool use) e cicli di ragionamento (ReAct, chain-of-thought). Esempi: AutoGPT, AI assistants con access to web. Richiede governance rigorosa in produzione.",
    category: 'AI',
    synonyms: ['AI agent', 'autonomous AI'],
    relatedTerms: ['llm', 'rag', 'guardrail'],
    relatedChapters: ['generative-ai'],
  },
  {
    id: 'ai-act',
    term: 'AI Act',
    shortDef: 'Regolamento europeo (2024) che classifica sistemi AI per livello di rischio e impone obblighi di conformità.',
    definition:
      "L'AI Act è il regolamento europeo sull'intelligenza artificiale entrato in vigore nel 2024, primo framework legislativo completo al mondo su AI. Classifica i sistemi AI in categorie di rischio: inaccettabile (vietato), alto (soggetto a audit e trasparenza), limitato e minimo. Impone obblighi su trasparenza, dati di training e valutazione di conformità.",
    category: 'Etica',
    synonyms: ['Regolamento AI europeo', 'EU AI Act'],
    relatedTerms: ['etica-ai', 'fairness', 'explainability'],
    relatedChapters: ['ethics-ai'],
  },
  {
    id: 'edge-case',
    term: 'Edge Case',
    shortDef: 'Caso limite o insolito che il modello incontra raramente ma dove spesso fallisce in modo significativo.',
    definition:
      "Un edge case è uno scenario ai margini della distribuzione normale dei dati: infrequente ma spesso critico. I modelli AI tendono a performare peggio sugli edge case perché nel training erano sotto-rappresentati. Testare sistematicamente gli edge case è fondamentale prima del deploy: è dove i fallimenti hanno spesso l'impatto maggiore.",
    category: 'ML',
    synonyms: ['caso limite', 'corner case'],
    relatedTerms: ['validation', 'test-set', 'data-quality'],
    relatedChapters: ['data-importance', 'machine-learning'],
  },
  {
    id: 'autonomy-levels',
    term: 'Livelli di Automazione',
    shortDef: 'Scala che classifica il grado di autonomia di un sistema AI da assistenza totalmente umana a piena autonomia.',
    definition:
      "I livelli di automazione classificano quanta autonomia ha un sistema AI: da L1 (nessuna automazione, umano fa tutto) a L5 (piena autonomia, macchina gestisce tutto senza supervisione umana). In pratica la maggior parte dei sistemi AI è L2-L3: assistono l'umano ma richiedono supervisione su decisioni critiche.",
    category: 'Prodotto',
    relatedTerms: ['guardrail', 'etica-ai', 'autonomous-agent'],
    relatedChapters: ['ethics-ai'],
  },
  {
    id: 'MAE',
    term: 'MAE',
    shortDef: 'Mean Absolute Error — errore medio in valore assoluto tra previsione e realtà.',
    definition:
      "Il Mean Absolute Error (MAE) misura in media di quanto sbaglia un modello di regressione. Se il MAE è $45.000, il modello prevede il prezzo delle case con un errore medio di 45 mila dollari. A differenza dell'RMSE, il MAE pesa tutti gli errori allo stesso modo — non penalizza gli errori grandi più di quelli piccoli. Un MAE basso significa previsioni più precise.",
    category: 'ML',
    synonyms: ['Mean Absolute Error', 'errore medio assoluto'],
    relatedTerms: ['R²', 'RMSE', 'overfitting'],
    relatedChapters: ['supervised-learning-regression'],
  },
  {
    id: 'R²',
    term: 'R²',
    shortDef: 'Coefficiente di determinazione — quanto bene il modello spiega la variabilità dei dati (0 = niente, 1 = perfetto).',
    definition:
      "R² (R quadro, o coefficiente di determinazione) misura la proporzione di variabilità nei dati che il modello riesce a spiegare. Va da 0 a 1: R²=1 significa previsione perfetta, R²=0 significa che il modello non spiega nulla (pari a predire sempre la media). In pratica, un R²=0.85 significa che l'85% delle variazioni di prezzo è spiegato dalle feature. Più alto è, meglio il modello cattura i pattern reali.",
    category: 'ML',
    synonyms: ['R quadro', 'coefficiente di determinazione', 'R-squared'],
    relatedTerms: ['MAE', 'RMSE', 'overfitting'],
    relatedChapters: ['supervised-learning-regression'],
  },
  {
    id: 'RMSE',
    term: 'RMSE',
    shortDef: 'Root Mean Square Error — come il MAE ma penalizza di più gli errori grandi.',
    definition:
      "Il Root Mean Square Error (RMSE) è simile al MAE ma prima eleva al quadrato ogni errore, poi fa la radice quadrata. Questo significa che penalizza molto di più gli errori grandi rispetto a quelli piccoli. Se il modello fa un errore enorme su poche case, l'RMSE cresce molto, mentre il MAE lo nota meno. Tipicamente RMSE > MAE: la differenza tra i due dice quanto il modello fa errori 'a macchia di leopardo' su casi difficili.",
    category: 'ML',
    synonyms: ['Root Mean Square Error', 'errore quadratico medio'],
    relatedTerms: ['MAE', 'R²', 'overfitting'],
    relatedChapters: ['supervised-learning-regression'],
  },
  {
    id: 'logistic-regression',
    term: 'LogisticRegression',
    shortDef: 'Classificatore lineare per problemi di classificazione binaria o multi-classe.',
    definition:
      "Logistic Regression è un modello lineare usato per classificazione. Invece di predire un numero continuo, stima la probabilità che un esempio appartenga a una classe (es. positivo/negativo). Nel lab NLP funziona bene con feature TF-IDF perché è veloce, stabile e i coefficienti sono interpretabili (puoi capire quali parole spingono la predizione).",
    category: 'ML',
    synonyms: ['Logistic Regression', 'regressione logistica'],
    relatedTerms: ['MultinomialNB', 'training', 'validation'],
    relatedChapters: ['nlp'],
  },
  {
    id: 'multinomial-nb',
    term: 'MultinomialNB',
    shortDef: 'Classificatore probabilistico Naive Bayes molto usato nel text classification.',
    definition:
      "Multinomial Naive Bayes è un modello probabilistico che assume indipendenza condizionata tra feature. Nel testo (bag-of-words o TF-IDF) spesso offre baseline eccellenti: è rapido, semplice e robusto con pochi dati. Pur con assunzioni semplificate, in molte pipeline NLP pratiche resta un benchmark forte contro modelli più complessi.",
    category: 'NLP',
    synonyms: ['Multinomial Naive Bayes', 'Naive Bayes'],
    relatedTerms: ['LogisticRegression', 'TF-IDF', 'training'],
    relatedChapters: ['nlp'],
  },
];

// Helper: get term by id
export function getTermById(id: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.id === id);
}

// Helper: search terms
export function searchTerms(query: string): GlossaryTerm[] {
  const q = query.toLowerCase();
  return glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q) ||
      t.synonyms?.some((s) => s.toLowerCase().includes(q))
  );
}

// Helper: get terms by category
export function getTermsByCategory(category: GlossaryTerm['category']): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export const CATEGORIES: GlossaryTerm['category'][] = [
  'AI',
  'ML',
  'Deep Learning',
  'NLP',
  'Generativa',
  'Etica',
  'Dati',
  'Prodotto',
];
