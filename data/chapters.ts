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

export interface ExerciseResource {
  label: string;
  path: string;
}

export interface ChapterExercise {
  title: string;
  objective: string;
  duration?: string;
  steps: string[];
  deliverable: string;
  resources?: ExerciseResource[];
}

export interface ChallengeOption {
  id: string;
  text: string;
}

export interface ChallengeChecklistItem {
  id: string;
  text: string;
  keywords: string[];
}

export interface ChallengeQuestionMultipleChoice {
  id: string;
  type: 'multiple-choice';
  text: string;
  options: ChallengeOption[];
  correctIds: string[];
  feedback: {
    correct: string;
    partial: string;
    wrong: string;
  };
}

export interface ChallengeQuestionOpenText {
  id: string;
  type: 'open-text';
  text: string;
  placeholder: string;
  maxLength: number;
  checklist: ChallengeChecklistItem[];
}

export interface ChapterChallengeBias {
  id: string;
  title: string;
  intro: string;
  dataset: Array<{
    nome: string;
    genere: 'M' | 'F';
    età: number;
    città: string;
    assunto: boolean;
  }>;
  questions: [ChallengeQuestionMultipleChoice, ChallengeQuestionOpenText];
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
  exercises?: ChapterExercise[];
  challenge?: ChapterChallengeBias;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: 'what-is-ai',
    title: "Cos'è davvero l'Intelligenza Artificiale",
    description: 'Introduzione ai concetti fondamentali dell\'AI',
    sections: [
      { title: 'AI vs Intelligenza Umana', content: 'L\'intelligenza artificiale *non pensa come gli umani*. Mentre un bambino impara a riconoscere i cani da pochi esempi, l\'AI ha bisogno di migliaia di immagini di cani per lo stesso compito. La differenza fondamentale: gli umani comprendono il significato, l\'AI fa **riconoscimento di pattern** nei dati. Questo significa che il modello apprende correlazioni statistiche che *simulano* comprensione, ma non possiede semantica umana reale. In pratica: valida sempre il contesto prima di usare un output AI; AI e una leva, non un oracolo.', media: [ { type: 'infographic', title: 'AI vs Intelligenza Umana — visual', description: 'Confronto visivo tra apprendimento umano e apprendimento AI.', placeholderPath: 'media/ch01-what-is-ai/sec-01/infographic.png', notes: 'ready' }, { type: 'video', title: 'Video — AI vs Intelligenza Umana', description: 'Mini video sul confronto tra apprendimento umano e pattern recognition AI.', placeholderPath: 'media/ch01-what-is-ai/sec-01/video.mp4', notes: 'ready' } ] },
      { title: "L'AI nella Vita Quotidiana", content: 'Ogni giorno interagiamo con l\'AI senza rendercene conto: Spotify suggerisce musica basandosi sui tuoi ascolti, Netflix consiglia film simili a quelli che hai guardato, Alexa risponde ai tuoi comandi vocali. Questo è **sistema di raccomandazione basato su dati**. *Utile non significa infallibile*: sembra intelligente, ma sta facendo predizione statistica. Caso pratico: se Netflix ti propone film sbagliati per una settimana, il KPI di qualità della raccomandazione sta calando e il sistema va ricalibrato.', media: [ { type: 'infographic', title: 'AI nella vita quotidiana', description: 'Infografica sui sistemi di raccomandazione e assistenti vocali.', placeholderPath: 'media/ch01-what-is-ai/sec-02/infographic.png', notes: 'ready' } ] },
      { title: "Startup Lens", content: "Per un MVP startup, usa AI dove riduce tempo operativo in modo misurabile: supporto clienti, classificazione ticket, suggerimenti contenuto. Definisci **KPI misurabili** (tempo medio risposta, tasso risoluzione, error rate) prima del rilascio. <<Niente AI in produzione senza metrica di controllo>>.", media: [ { type: 'infographic', title: 'AI per Startup: KPI e controllo', description: 'Infografica strategica su casi d’uso MVP e metriche di controllo.', placeholderPath: 'media/ch01-what-is-ai/sec-03/infographic.png', notes: 'ready' } ] },
      { title: "Errore comune + Mini esercizio", content: "**Errore comune:** trattare l'AI come fonte di verita assoluta.\n\n**Mini esercizio (15 min):** prendi 3 risposte AI su un tema tecnico, verifica fonti, segna cosa era corretto, ambiguo o errato, poi riscrivi una risposta validata.\n\nRubrica rapida di validazione:\n- **Dataset check**: i dati sono rappresentativi o sbilanciati?\n- **Output check**: dove sbaglia più spesso il modello?\n- **KPI check**: quale metrica minima (precisione, recall o errore medio) useresti per dire che il sistema funziona?\n\n<<Usa AI come copilota, non come verita assoluta>>.", media: [ { type: 'infographic', title: 'AI copilota: metodo di validazione', description: 'Infografica sul metodo pratico di verifica e riscrittura delle risposte AI.', placeholderPath: 'media/ch01-what-is-ai/sec-04/infographic.png', notes: 'ready' }, { type: 'podcast', title: 'Podcast sezione — Errore comune e validazione', description: 'Mini podcast dedicato all\'errore più comune con AI e metodo di controllo pratico.', placeholderPath: 'media/ch01-what-is-ai/sec-04/podcast.mp3', notes: 'ready' } ] },
    ],
    keyTakeaways: [
      'L\'AI non pensa — riconosce pattern nei dati',
      'L\'AI ha bisogno di migliaia di esempi, l\'uomo impara da pochi',
      'I 3 ingredienti: Dati + Algoritmo + Potenza di calcolo',
      'L\'AI sbaglia quando i dati sono scarsi o distorti',
      'L\'AI è uno strumento — la qualità dipende dall\'input',
      'Learning outcome: valutare un caso AI base in 3 step (dati, modello, output) e identificare almeno 1 rischio'
    ],
    discussionPrompts: [
      'Quali differenze noti tra come gli umani e come l\'AI imparano da nuove informazioni?',
      'Puoi fare un esempio di AI che usi regolarmente nella tua vita quotidiana?',
      'Se l\'AI riconosce solo pattern, come può mai essere creativa o innovativa?'
    ],
    exercises: [
      {
        title: 'Validation Lab — Verifica un Output AI',
        objective: 'Imparare a riconoscere quando un output AI è affidabile e quando richiede verifiche.',
        duration: '20-25 min',
        steps: [
          'Scegli un argomento tecnico che conosci (es: "come funziona una REST API", "differenza tra SQL e NoSQL")',
          'Poni la domanda a ChatGPT o Claude',
          'Valuta la risposta su 3 assi: (1) Correttezza fattuale, (2) Completezza, (3) Hallucination/Imprecisioni',
          'Confronta con 2 fonti indipendenti (documentazione ufficiale, articoli tecnici)',
          'Marca le parti corrette (✅), incomplete (⚠️) e errate (❌)',
          'Riscrivi una versione "validata" combinando AI + fonti'
        ],
        deliverable: 'Documento: output originale → marcatura → versione corretta + spiegazione delle differenze',
        resources: [
          { label: 'Rubrica di valutazione (PDF)', path: '/resources/ch01-validation-rubric.pdf' },
          { label: 'Template risposta (DOCX)', path: '/resources/ch01-exercise-template.docx' }
        ]
      }
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 1',
        description: 'Introduzione completa al Capitolo 1: AI vs intelligenza umana e basi operative.',
        estimatedDuration: '7-8 min',
        placeholderPath: 'media/ch01-what-is-ai/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 1',
        description: 'Versione audio completa del Capitolo 1 con spiegazione e contesto operativo.',
        estimatedDuration: '12-13 min',
        placeholderPath: 'media/ch01-what-is-ai/podcast.mp3',
        notes: 'ready'
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
        question: "Qual è la differenza più solida tra intelligenza umana e AI moderna?",
        options: [
          "L'AI comprende il significato come un umano",
          "L'AI apprende soprattutto correlazioni e pattern statistici",
          "L'AI non dipende dai dati",
          "L'AI è sempre più creativa dell'umano",
        ],
        correct: 1,
        explanation: "L'AI è fortissima nel pattern matching, ma non ha comprensione semantica umana piena."
      },
      {
        question: "Se un output AI è molto fluido e convincente, qual è il comportamento corretto?",
        options: [
          "Pubblicarlo subito perché suona bene",
          "Verificarne fonti, contesto e coerenza prima di usarlo",
          "Usarlo solo se è breve",
          "Scartarlo sempre",
        ],
        correct: 1,
        explanation: "Fluenza linguistica non equivale a verità: serve validazione."
      },
      {
        question: "Un sistema di raccomandazione peggiora per una settimana: quale ipotesi è più utile per iniziare il debug?",
        options: [
          "Il brand è cambiato",
          "Possibile drift nei dati/comportamenti utenti da misurare con KPI",
          "Il modello è diventato cosciente",
          "È un problema inevitabile e non monitorabile",
        ],
        correct: 1,
        explanation: "Quando cala la qualità, partire da dati/KPI è più utile che da ipotesi vaghe."
      },
      {
        question: "Quale triade è necessaria per costruire un sistema AI funzionante?",
        options: [
          "Dati + Algoritmo + Potenza di calcolo",
          "Prompt + UI + Branding",
          "GPU + DNS + CDN",
          "SEO + Design + Social",
        ],
        correct: 0,
        explanation: "Senza uno dei tre pilastri, la qualità del sistema crolla."
      },
      {
        question: "Hai 2 modelli: A più accurato ma con dati poco rappresentativi, B leggermente meno accurato ma più robusto sui casi reali. In produzione scegli:",
        options: [
          "A, sempre: basta il numero più alto",
          "B, se regge meglio gli edge-case del dominio reale",
          "A, ma senza monitoraggio",
          "Nessuno dei due",
        ],
        correct: 1,
        explanation: "In produzione conta la robustezza sul reale, non solo il picco in test controllato."
      },
      {
        question: "Qual è un segnale che stai trattando l'AI come “oracolo” invece che come “copilot”?",
        options: [
          "Definire KPI prima del rilascio",
          "Confrontare output AI con fonti indipendenti",
          "Accettare output senza review perché “sembra giusto”",
          "Documentare limiti e fallback",
        ],
        correct: 2,
        explanation: "Il rischio principale è delegare verità all'AI senza controllo umano."
      },
      {
        question: "In un MVP startup, dove ha più senso inserire AI per prima?",
        options: [
          "In processi ad alto volume e ripetitivi con KPI chiari",
          "In qualsiasi punto “fa scena”",
          "Solo in funzionalità non usate dagli utenti",
          "Solo dopo aver assunto un team ML completo",
        ],
        correct: 0,
        explanation: "L'AI crea valore quando riduce tempo/costo su flussi misurabili."
      },
      {
        question: "Quale combinazione rappresenta una validazione minima sensata di output AI?",
        options: [
          "Controllo dati di input + verifica output + metrica di qualità",
          "Solo rilettura grammaticale",
          "Solo test su 1 esempio",
          "Solo benchmark marketing",
        ],
        correct: 0,
        explanation: "La validazione utile copre input, output e criterio misurabile."
      },
      {
        question: "Prima del go-live, quale decisione è più matura?",
        options: [
          "Rilasciare e sperare che vada bene",
          "Definire soglie KPI e regole di fallback/manual review",
          "Nascondere i log per evitare rumore",
          "Misurare solo il tempo di caricamento UI",
        ],
        correct: 1,
        explanation: "Soglie e fallback trasformano un prototipo in sistema operativo controllabile."
      },
      {
        question: "Quale affermazione è più corretta sul ruolo umano con l'AI?",
        options: [
          "L'umano diventa inutile appena il modello è grande",
          "Il valore umano cresce su decisioni, verifica e responsabilità",
          "Basta sapere scrivere prompt lunghi",
          "L'AI elimina il bisogno di contesto",
        ],
        correct: 1,
        explanation: "L'AI amplifica, ma governance e responsabilità restano umane."
      }
    ]
  },
  {
    id: 2,
    slug: 'how-ai-works',
    title: 'Come Funziona l\'AI',
    description: 'I tre pilastri fondamentali',
    sections: [
      { title: 'I Tre Pilastri dell\'AI', content: 'Ogni sistema di AI ha bisogno di **tre pilastri**: (1) **DATI** — esempi da cui imparare, (2) **ALGORITMO** — passi che trasformano input in output, (3) **POTENZA DI CALCOLO** — risorse per processare tutto. Senza uno di questi tre, l\'AI non funziona. In produzione questa triade diventa pipeline: raccolta dati, training controllato e monitoraggio continuo delle metriche. <<Se manca un pilastro, crolla tutta la qualità del sistema>>.', media: [ { type: 'infographic', title: 'I 3 Pilastri Fondamentali', description: 'Infografica: dati, algoritmi e architettura nel funzionamento AI.', placeholderPath: 'media/ch02-how-ai-works/sec-01/infographic.png', notes: 'ready' }, { type: 'video', title: 'Video — I Tre Pilastri dell\'AI', description: 'Mini video sui 3 pilastri fondamentali: dati, algoritmo e potenza di calcolo.', placeholderPath: 'media/ch02-how-ai-works/sec-01/video.mp4', notes: 'ready' } ] },
      { title: 'Cos\'è un Algoritmo', content: 'Un algoritmo è una **ricetta eseguibile**: una sequenza precisa di passi per trasformare un input in output. Esempio: cucinare la pasta. Algoritmo: (1) acqua a ebollizione, (2) sale, (3) pasta, (4) tempo di cottura. Senza ordine e precisione, il risultato peggiora. *Nel software vale lo stesso principio*: <<input chiaro + passi chiari = output affidabile>>.', media: [ { type: 'infographic', title: 'Algoritmo: ricetta AI', description: 'Parallelismo cucina/AI per spiegare gli step algoritmici.', placeholderPath: 'media/ch02-how-ai-works/sec-02/infographic.png', notes: 'ready' } ] },
      { title: 'Le Reti Neurali', content: 'Le reti neurali sono algoritmi moderni che apprendono da grandi quantità di dati. Hanno neuroni artificiali collegati da **pesi**, che rappresentano l\'importanza delle connessioni. Durante l\'addestramento, i pesi vengono aggiornati per migliorare il risultato. *Non è magia*: è ottimizzazione iterativa. <<Più il training è curato, più la rete generalizza bene>>.', media: [ { type: 'infographic', title: 'Neuroni e pesi', description: 'Schema visuale sul meccanismo di apprendimento delle reti neurali.', placeholderPath: 'media/ch02-how-ai-works/sec-03/infographic.png', notes: 'ready' }, { type: 'video', title: 'Video — Le Reti Neurali', description: 'Mini video dedicato alle reti neurali, pesi e ottimizzazione iterativa.', placeholderPath: 'media/ch02-how-ai-works/sec-03/video.mp4', notes: 'ready' } ] },
      { title: "Caso reale", content: "In un e-commerce reale: dati ordini + catalogo alimentano un modello di raccomandazione, l\'algoritmo di ranking decide i suggerimenti, il cloud scala nei picchi. Quando uno dei 3 pilastri degrada, cala la conversione. La performance business dipende dalla qualità tecnica end-to-end." },
      { title: "Production Warning + Task", content: "**Warning:** senza monitoraggio post-deploy, il modello degrada nel tempo (data drift).\n\n**Task (20 min):** definisci 4 metriche da monitorare in produzione:\n- **Accuracy proxy** (qualità percepita/precisione su campioni verificati)\n- **Latenza** (tempo medio risposta)\n- **Fallback rate** (quante richieste vanno su fallback/manuale)\n- **Segnalazioni utente** (errori reali riportati in uso)\n\n<<Nessun modello è 'finito' dopo il deploy: va osservato continuamente>>." },
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
        description: 'Introduzione operativa al Capitolo 2: triade, algoritmi e funzionamento AI.',
        estimatedDuration: '9-10 min',
        placeholderPath: 'media/ch02-how-ai-works/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 2',
        description: 'Versione audio completa del Capitolo 2 con spiegazione e contesto operativo.',
        estimatedDuration: '16-17 min',
        placeholderPath: 'media/ch02-how-ai-works/podcast.mp3',
        notes: 'ready'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 2',
        description: 'Sintesi visuale del capitolo 2: triade, rete neurale e monitoraggio.',
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
        question: "Quale descrizione rappresenta meglio i 3 pilastri dell'AI?",
        options: [
          "Dati, algoritmo e potenza di calcolo che lavorano insieme",
          "Solo prompt e interfaccia",
          "Solo hardware potente",
          "Solo dataset molto grande",
        ],
        correct: 0,
        explanation: "La qualità emerge dall'equilibrio tra tutti e tre i pilastri."
      },
      {
        question: "Hai tantissimi dati ma rumorosi: cosa è più probabile?",
        options: [
          "Il modello generalizza meglio automaticamente",
          "Il modello apprende rumore e peggiora nel reale",
          "Il modello diventa più etico",
          "L'algoritmo non serve più",
        ],
        correct: 1,
        explanation: "Quantità senza qualità spesso aumenta errori e instabilità."
      },
      {
        question: "Qual è la definizione più operativa di algoritmo nel capitolo 2?",
        options: [
          "Una sequenza ripetibile di passi per trasformare input in output",
          "Una scelta artistica del team",
          "Una scorciatoia casuale",
          "Un file di configurazione UI",
        ],
        correct: 0,
        explanation: "Algoritmo = procedura eseguibile, non intuizione."
      },
      {
        question: "In un e-commerce, se cala la conversione del recommender, quale pilastro controlli per primo?",
        options: [
          "Dati recenti e loro qualità/rappresentatività",
          "Solo il font della pagina",
          "Solo il dominio internet",
          "Solo il numero di slide della presentazione",
        ],
        correct: 0,
        explanation: "I degradi reali partono spesso da drift o qualità dati."
      },
      {
        question: "Le reti neurali sono più utili quando il problema richiede:",
        options: [
          "Pattern complessi difficili da codificare a regole fisse",
          "Regole statiche e banali",
          "Zero dati",
          "Nessuna validazione",
        ],
        correct: 0,
        explanation: "Le NN eccellono su relazioni non lineari e pattern complessi."
      },
      {
        question: "Se aumenti il calcolo ma lasci algoritmo e dati invariati e scadenti, cosa aspettarti?",
        options: [
          "Miglioramento strutturale garantito",
          "Possibile accelerazione, ma qualità non necessariamente migliore",
          "Risoluzione automatica del bias",
          "Scomparsa del data drift",
        ],
        correct: 1,
        explanation: "Più compute non compensa da solo dati/algoritmo deboli."
      },
      {
        question: "Quale scelta è più robusta in produzione dopo il deploy?",
        options: [
          "Considerare il modello finito",
          "Monitorare KPI e aggiornare il sistema su segnali reali",
          "Bloccare i log",
          "Valutare solo demo iniziale",
        ],
        correct: 1,
        explanation: "Un modello in produzione va osservato continuamente."
      },
      {
        question: "Nel task “Production Warning”, quale metrica aiuta a capire quante richieste non regge il modello?",
        options: [
          "Fallback rate",
          "Colore card",
          "Numero capitoli",
          "Versione browser",
        ],
        correct: 0,
        explanation: "Il fallback rate misura quante volte serve escalation/manuale."
      },
      {
        question: "Qual è il rischio di valutare il modello solo su test statico?",
        options: [
          "Nessun rischio se il test è grande",
          "Non vedere drift e nuovi edge-case reali",
          "Aumentare automaticamente robustezza",
          "Ridurre sempre latenza",
        ],
        correct: 1,
        explanation: "La realtà evolve: test statico da solo non basta."
      },
      {
        question: "In ottica decisionale, quale frase è più corretta?",
        options: [
          "Un pilastro forte può sostituire gli altri due",
          "La triade è interdipendente: se cede un pilastro, cede il sistema",
          "Conta solo il modello",
          "Conta solo il cloud",
        ],
        correct: 1,
        explanation: "La stabilità AI nasce dall'equilibrio complessivo, non da un singolo elemento."
      }
    ]
  },
  {
    id: 3,
    slug: 'data-importance',
    title: 'L\'Importanza dei Dati',
    description: 'Il carburante dell\'AI',
    sections: [
      { title: 'Quantità vs Qualità', content: 'Non è vero che più dati = meglio. Se raccogli 1 milione di foto blurrate di gatti, un algoritmo le imparerà male. Al contrario, 10.000 foto nitide di gatti diverse porteranno a risultati migliori. I dati devono essere: (1) sufficienti in quantità, (2) di alta qualità, (3) rappresentativi della realtà. Nel lavoro reale creare **dataset** bilanciati e versionati e spesso il fattore che separa una demo da una soluzione affidabile. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Dati puliti e rappresentativi valgono più di grandi volumi rumorosi>>.', media: [ { type: 'infographic', title: 'Quantità vs Qualità dati', description: 'Infografica: confronto visivo tra dataset grande ma rumoroso vs dataset piccolo ma curato.', placeholderPath: 'media/ch03-data-importance/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Bias nei Dati', content: 'Il **bias** è il problema più grave. Se alleni un algoritmo di riconoscimento facciale usando foto solo di uomini, avrà difficoltà a riconoscere i volti femminili. Amazon ha dovuto buttare il suo sistema di assunzione automatico perché discriminava le donne — i dati storici riflettevano pregiudizi umani, e l\'AI li aveva imparati perfettamente. Nel lavoro reale creare dataset bilanciati e versionati e spesso il fattore che separa una demo da una soluzione affidabile. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Dati puliti e rappresentativi valgono più di grandi volumi rumorosi>>.', media: [ { type: 'video', title: 'Video — Bias nei dati: il caso Amazon', description: 'Mini video narrativo sul bias nei dati, con il caso Amazon hiring.', placeholderPath: 'media/ch03-data-importance/sec-02/video.mp4', notes: 'ready' } ] },
      { title: "Startup Lens", content: "In early-stage product, meglio 5.000 record puliti e bilanciati che 500.000 rumorosi. Introduci versionamento dataset e changelog: ogni modifica ai dati deve essere tracciata." },
      { title: "Errore comune + Check rapido", content: "**Errore comune:** valutare il modello solo su test set statico.\n\n**Check rapido (2 min):** indica un caso reale in cui un test statico può dare falsa sicurezza e quale controllo aggiungeresti per evitare errori in produzione.", media: [ { type: 'podcast', title: 'Podcast — Errore comune: testare solo su dati statici', description: 'Micro-podcast sull\'errore di validation e come costruire edge-case robusti.', placeholderPath: 'media/ch03-data-importance/sec-04/podcast.mp3', notes: 'placeholder' } ] },
    ],
    keyTakeaways: [
      'Dati di qualità = AI di qualità',
      'Bias nei dati = discriminazione nell\'output',
      'Pulizia dati è 80% del lavoro in ML',
      'Diversità nei dati = modello più robusto',
      'Learning outcome: riconoscere bias e proporre una correzione dati concreta',
    ],
    discussionPrompts: [
      'Se un algoritmo fa discriminazioni, è colpa dell\'algoritmo o dei dati di allenamento?',
      'Come potremmo raccogliere dati che non riflettano i bias umani?',
      'Quali conseguenze potrebbe avere un sistema biased usato per assunzioni, prestiti bancari, o sentenze?'
    ],
    exercises: [
      {
        title: 'Mini Lab — Robustezza dati e edge-case (senza coding)',
        objective: 'Capire come stressare un modello con casi limite e proporre correzioni dati prima del deploy.',
        duration: '15-20 min',
        steps: [
          'Leggi il dataset CH3 (train) e immagina 5 edge-case realistici che potrebbero mettere in crisi il modello.',
          'Per ogni edge-case, indica quale tipo di errore potrebbe emergere (bias, confusione classe, mancata generalizzazione).',
          'Proponi una correzione dati o di processo (raccolta, bilanciamento, labeling, monitoraggio).',
          'Definisci 2 metriche da osservare per verificare se la correzione migliora davvero il comportamento del modello.'
        ],
        deliverable: 'Checkpoint personale: elenco dei 5 edge-case + 1 proposta di miglioramento prioritario con motivazione.',
        resources: [
          { label: 'Dataset train CH3 (CSV)', path: '/datasets/ch03-data-quality/train.csv' },
          { label: 'Dataset validation CH3 (CSV)', path: '/datasets/ch03-data-quality/validation.csv' },
          { label: 'Schema campi CH3 (JSON)', path: '/datasets/ch03-data-quality/schema.json' }
        ]
      }
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 3',
        description: 'Video completo su qualità dei dati, bias e validazione operativa.',
        estimatedDuration: '8 min',
        placeholderPath: 'media/ch03-data-importance/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 3',
        description: 'Versione audio completa del Capitolo 3: qualità dati, bias e validazione.',
        estimatedDuration: '23 min',
        placeholderPath: 'media/ch03-data-importance/podcast.mp3',
        notes: 'ready'
      },
      {
        type: 'infographic',
        title: 'Infografica',
        description: 'Sintesi visuale: 5 punti chiave, 1 warning, 1 mini framework.',
        placeholderPath: 'media/ch03-data-importance/infographic.png',
        notes: 'placeholder'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Materiale scaricabile per studio e esercitazione guidata.',
        placeholderPath: 'media/ch03-data-importance/handout.pdf',
        notes: 'placeholder'
      }
    ],
    quiz: [
      {
        question: "Qual è il rischio principale di un dataset sbilanciato?",
        options: [
          "Decisioni discriminatorie su gruppi sotto-rappresentati",
          "Riduzione automatica dei costi cloud",
          "Generalizzazione migliore per definizione",
          "Latenza sempre più bassa",
        ],
        correct: 0,
        explanation: "Squilibri nei dati possono diventare squilibri nelle decisioni."
      },
      {
        question: "Hai 1M record rumorosi vs 100k record puliti e rappresentativi: in genere conviene partire da:",
        options: [
          "1M rumorosi, sempre",
          "100k puliti, poi scalare qualità e copertura",
          "È equivalente",
          "Dipende solo dalla GPU",
        ],
        correct: 1,
        explanation: "Qualità e rappresentatività guidano più della quantità grezza."
      },
      {
        question: "Il caso Amazon hiring bias dimostra soprattutto che:",
        options: [
          "Il modello può amplificare pregiudizi storici presenti nei dati",
          "I modelli rimuovono automaticamente i bias",
          "Basta aumentare il calcolo per risolvere fairness",
          "Il problema è solo legale, non tecnico",
        ],
        correct: 0,
        explanation: "Se i dati sono distorti, il modello tende a replicare quella distorsione."
      },
      {
        question: "Qual è un segnale che il dataset non rappresenta il mondo reale?",
        options: [
          "Performance uniforme su tutti i sottogruppi",
          "Errori concentrati sempre sullo stesso tipo di utenti/casi",
          "Riduzione del tempo di training",
          "Numero di feature elevato",
        ],
        correct: 1,
        explanation: "Errori sistematici su sottogruppi indicano gap di rappresentatività."
      },
      {
        question: "In fase di validazione, perché creare edge-case è utile?",
        options: [
          "Per ridurre artificialmente la difficoltà del test",
          "Per trovare failure pattern non visibili nei casi standard",
          "Per evitare monitoraggio in produzione",
          "Per sostituire completamente il dataset di training",
        ],
        correct: 1,
        explanation: "Gli edge-case stressano il modello dove è più fragile."
      },
      {
        question: "Se una feature sembra predittiva ma potrebbe essere proxy sensibile (es. zona), cosa fai per prima?",
        options: [
          "La lasci invariata perché aumenta accuracy",
          "Esegui fairness audit per sottogruppi e valuti mitigazioni",
          "La rimuovi sempre senza analisi",
          "Ignori il problema finché non arriva un reclamo",
        ],
        correct: 1,
        explanation: "Prima misuri impatto e trade-off, poi applichi mitigazioni consapevoli."
      },
      {
        question: "Quale strategia è più matura per data cleaning?",
        options: [
          "Una tantum prima del primo training",
          "Processo continuo con regole versionate e controlli periodici",
          "Solo quando il cliente si lamenta",
          "Delegarla tutta al modello",
        ],
        correct: 1,
        explanation: "La qualità dati in produzione va mantenuta nel tempo, non fatta una sola volta."
      },
      {
        question: "Quale combinazione descrive meglio un buon piano anti-bias?",
        options: [
          "Più compute e meno audit",
          "Dataset bilanciato + metriche fairness + review umana dei casi critici",
          "Solo policy legale senza test tecnico",
          "Solo dashboard KPI globale",
        ],
        correct: 1,
        explanation: "Ridurre bias richiede interventi su dati, metriche e processo decisionale."
      },
      {
        question: "In produzione noti aumento segnalazioni utente ma accuracy media stabile: interpretazione più corretta?",
        options: [
          "Tutto ok, nessuna azione",
          "Possibili errori concentrati su casi/sottogruppi: analizzare distribuzione errori",
          "Basta aumentare batch size",
          "Disattivare canale segnalazioni",
        ],
        correct: 1,
        explanation: "La media può nascondere regressioni localizzate ma critiche."
      },
      {
        question: "Quale frase sintetizza meglio il Capitolo 3?",
        options: [
          "Con abbastanza dati qualunque modello diventa affidabile",
          "Qualità, rappresentatività e monitoraggio continuo sono la base dell'affidabilità",
          "Il bias è inevitabile quindi non si può mitigare",
          "Pulizia dati è secondaria rispetto al design UI",
        ],
        correct: 1,
        explanation: "Affidabilità AI = dati buoni + controlli robusti + osservazione continua."
      }
    ]
  },
  {
    id: 4,
    slug: 'machine-learning',
    title: 'Machine Learning: Imparare dai Dati',
    description: 'Come gli algoritmi imparano',
    sections: [
      { title: 'Il Processo di Apprendimento', content: '**Machine Learning** significa che l\'algoritmo impara dai dati senza essere programmato esplicitamente. Il processo base è questo: riceve i dati, produce una previsione iniziale, misura l\'errore, aggiorna i parametri e ripete il ciclo molte volte. Dopo molte iterazioni, il modello non "conosce" davvero i dati: apprende pattern utili e migliora la capacità di generalizzare su esempi nuovi. In un prodotto reale il valore nasce da un ciclo rapido di esperimento, misurazione e miglioramento: senza metriche stai solo facendo una demo, non costruendo un sistema affidabile. *Nota pratica:* prima del deploy testa il modello su dati mai visti. <<Takeaway: conta il modello che generalizza meglio, non quello più complesso>>.', media: [ { type: 'infographic', title: 'Loop di apprendimento ML', description: 'Schema del ciclo previsione-errore-aggiornamento con focus su generalizzazione.', placeholderPath: 'media/ch04-machine-learning/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Overfitting e Underfitting', content: '**Overfitting**: quando l\'algoritmo memorizza i dati di training invece di apprendere pattern generali. È come studiare gli esami passati a memoria e andare in crisi quando cambiano le domande.\n\n**Underfitting**: quando il modello è troppo semplice per catturare i pattern rilevanti.\n\nSegnale pratico rapido: training score alto + validation score basso = overfitting; training e validation entrambi bassi = underfitting. La sfida è trovare equilibrio tra semplicità e capacità di generalizzare su dati nuovi. *Nota pratica:* valuta sempre il modello su dati mai visti, non solo su quelli di training. <<Takeaway: scegli il modello che regge meglio nel reale, non quello che "brilla" solo in training>>.', media: [ { type: 'video', title: 'Video — Overfitting vs Underfitting', description: 'Confronto visivo dei due errori con pattern diagnostici training/validation.', placeholderPath: 'media/ch04-machine-learning/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: "Caso reale", content: "Nel forecasting delle vendite, un modello lineare può battere modelli più complessi quando i dati sono pochi, puliti e relativamente stabili nel tempo. In pratica non scegli il modello più sofisticato, ma quello che mantiene performance stabili sui dati nuovi del tuo scenario reale.", media: [ { type: 'infographic', title: 'Scelta modello nel forecasting', description: 'Mini framework decisionale: semplicità vs complessità in base al contesto dati.', placeholderPath: 'media/ch04-machine-learning/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: "Production Warning + Task", content: "**Warning:** ottimizzare solo l'accuracy può nascondere errori gravi, soprattutto quando alcune classi sono rare ma importanti.\n\n**Task (20 min):** scegli due metriche aggiuntive — ad esempio precision e recall per classificazione, oppure MAE e MAPE per regressione — e spiega in quale scenario reale le useresti al posto dell'accuracy.", media: [ { type: 'podcast', title: 'Podcast — Accuracy non basta', description: 'Mini deep dive su scelta metrica e trade-off in produzione.', placeholderPath: 'media/ch04-machine-learning/sec-04/podcast.mp3', notes: 'placeholder' } ] },
      {
        title: 'ML Workflow Pratico — 5 Step',
        content: 'Impara facendo con la guida e lo ZIP lab. Scarica, leggi gli step qui sotto, esegui main.py e sperimenta.',
        media: []
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
        description: 'Panoramica operativa su apprendimento, overfitting e scelta metriche.',
        estimatedDuration: '8-10 min',
        placeholderPath: 'media/ch04-machine-learning/video.mp4',
        notes: 'placeholder'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 4',
        description: 'Versione audio con focus su generalizzazione e decisioni di produzione.',
        estimatedDuration: '10-15 min',
        placeholderPath: 'media/ch04-machine-learning/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 4',
        description: 'Schema visuale ML pipeline + overfitting/underfitting + metriche.',
        placeholderPath: 'media/ch04-machine-learning/infographic.png',
        notes: 'placeholder'
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
        question: "Perché usare solo l'accuracy può essere pericoloso?",
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
  },
  {
    id: 5,
    slug: 'neural-networks',
    title: 'Reti Neurali: L\'Architettura dell\'AI Moderna',
    description: 'Come funzionano i neuroni artificiali',
    sections: [
      { title: 'Struttura di una Rete Neurale', content: 'Una rete neurale è composta da layer: **input** (riceve i dati), **hidden** (trasformano i segnali) e **output** (produce la previsione finale). Ogni connessione tra neuroni ha un **peso** che regola quanto una informazione influenza il risultato. Aumentare i layer può migliorare la capacità di rappresentare pattern complessi, ma aumenta anche costo e rischio di overfitting. *Nota pratica:* parti con un\'architettura piccola e aggiungi complessità solo se i dati lo richiedono. <<Takeaway: una rete neurale è efficace quando bilancia capacità, costo e generalizzazione>>.', media: [ { type: 'infographic', title: 'Anatomia rete neurale', description: 'Input, hidden e output layer con ruolo dei pesi.', placeholderPath: 'media/ch05-neural-networks/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Il Processo di Backpropagation', content: 'La **backpropagation** è il meccanismo con cui la rete si corregge: confronta previsione e valore reale, calcola l\'errore e aggiorna i pesi in direzione che riduce la perdita. In pratica è un ciclo continuo di tentativo, feedback e aggiustamento. Segnale utile: se la loss di training scende ma quella di validation peggiora, stai probabilmente overfittando. *Nota pratica:* monitora sempre training e validation insieme, non un solo numero. <<Takeaway: il training efficace è guidato da feedback misurabile, non da tentativi casuali>>.', media: [ { type: 'video', title: 'Backprop spiegata semplice', description: 'Visual del flusso errore → gradiente → aggiornamento pesi.', placeholderPath: 'media/ch05-neural-networks/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: "Startup Lens", content: "Le reti neurali hanno senso quando i pattern sono davvero complessi (immagini, linguaggio, segnali). Se il problema è lineare o il dataset è piccolo, un modello più semplice può dare risultati simili con costi minori, tempi più rapidi e maggiore spiegabilità.", media: [ { type: 'infographic', title: 'Quando usare reti neurali', description: 'Matrice decisionale: complessità problema vs costo operativo.', placeholderPath: 'media/ch05-neural-networks/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: "Errore comune + Check rapido", content: "**Errore comune:** aumentare layer senza una strategia di validazione.\n\n**Check rapido (2 min):** guarda il tuo scenario e rispondi: stai scegliendo profondità perché serve davvero ai dati o solo perché sembra più potente?", media: [ { type: 'podcast', title: 'Podcast — Profondità con criterio', description: 'Trade-off pratici tra profondità, costo e robustezza.', placeholderPath: 'media/ch05-neural-networks/sec-04/podcast.mp3', notes: 'placeholder' } ] },
    ],
    keyTakeaways: [
      'Neuroni artificiali imitano il cervello',
      'Peso dei neuroni = importanza della connessione',
      'Backprop aggiusta i pesi per ridurre errori',
      'Più layer = più capacità di astrazione',
      'Learning outcome: descrivere come i pesi vengono aggiornati durante il training',
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 5',
        description: 'Panoramica pratica su architettura, backpropagation e trade-off.',
        estimatedDuration: '8-10 min',
        placeholderPath: 'media/ch05-neural-networks/video.mp4',
        notes: 'placeholder'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 5',
        description: 'Versione audio orientata a decisioni di progetto.',
        estimatedDuration: '10-15 min',
        placeholderPath: 'media/ch05-neural-networks/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 5',
        description: 'Schema layer + flusso backprop + segnali di overfitting.',
        placeholderPath: 'media/ch05-neural-networks/infographic.png',
        notes: 'placeholder'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Checklist operativa per scegliere profondità rete e metrica.',
        placeholderPath: 'media/ch05-neural-networks/handout.pdf',
        notes: 'placeholder'
      }
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
    ,exercises: [
      {
        title: 'Mini Lab — Scegliere il modello giusto (senza coding)',
        objective: 'Valutare quando conviene un approccio semplice rispetto a uno più complesso, usando il dataset come base di ragionamento decisionale.',
        duration: '20 min',
        steps: [
          'Scarica train.csv e validation.csv dal dataset CH5 e osserva i campi principali.',
          'Identifica quali feature sembrano più utili per prevedere "passed" e quali potrebbero introdurre rumore.',
          'Confronta due opzioni: Modello A (semplice, più spiegabile) vs Modello B (più complesso, potenzialmente più potente).',
          'Prendi una decisione motivata: quale modello useresti in una startup early-stage e perché.'
        ],
        deliverable: 'Compila una tabella decisionale (A vs B) e scrivi 5 righe di motivazione su generalizzazione, costo e interpretabilità.',
        resources: [
          { label: 'Dataset train (CSV)', path: '/datasets/ch05-neural-networks/train.csv' },
          { label: 'Dataset validation (CSV)', path: '/datasets/ch05-neural-networks/validation.csv' },
          { label: 'Schema campi dataset (JSON)', path: '/datasets/ch05-neural-networks/schema.json' }
        ]
      }
    ]
    ,quiz: [
      {
        question: "In una rete neurale, il ruolo principale dei pesi è:",
        options: [
          "Regolare quanto ogni input influenza la previsione",
          "Cambiare il colore dei layer",
          "Ridurre automaticamente il dataset",
          "Sostituire la funzione di loss",
        ],
        correct: 0,
        explanation: "I pesi determinano il contributo di ogni segnale nel calcolo dell'output."
      },
      {
        question: "Se aumenti i layer senza abbastanza dati, quale rischio cresce di più?",
        options: [
          "Overfitting",
          "Compressione lossless",
          "Riduzione bias di interfaccia",
          "Migliore spiegabilità",
        ],
        correct: 0,
        explanation: "Maggiore complessità con pochi dati spesso porta a memorizzazione e scarsa generalizzazione."
      },
      {
        question: "La backpropagation serve principalmente a:",
        options: [
          "Aggiornare i pesi per ridurre l'errore",
          "Creare nuove feature manuali",
          "Aumentare la RAM del server",
          "Eliminare la validation",
        ],
        correct: 0,
        explanation: "Backprop usa l'errore per correggere i pesi iterativamente."
      },
      {
        question: "Training loss in calo ma validation loss in aumento indica spesso:",
        options: [
          "Overfitting",
          "Underfitting",
          "Dataset perfetto",
          "Convergenza ideale",
        ],
        correct: 0,
        explanation: "Il modello sta imparando troppo i dati visti e peggiora su dati nuovi."
      },
      {
        question: "Quando una startup dovrebbe preferire un modello più semplice a una rete profonda?",
        options: [
          "Quando il problema è semplice e i dati sono limitati",
          "Quando vuole usare più GPU a prescindere",
          "Quando vuole metriche meno trasparenti",
          "Quando non deve validare",
        ],
        correct: 0,
        explanation: "Modelli semplici possono essere più economici, rapidi e spiegabili in contesti poco complessi."
      },
      {
        question: "Quale metrica/controllo è più utile durante il training di una rete?",
        options: [
          "Monitorare insieme training e validation",
          "Guardare solo il numero di epoche",
          "Guardare solo la loss di training",
          "Guardare solo il tempo di avvio notebook",
        ],
        correct: 0,
        explanation: "Serve confronto continuo tra training e validation per capire se generalizza."
      },
      {
        question: "Quale decisione è più robusta in produzione?",
        options: [
          "Scegliere il modello con performance stabili su dati nuovi",
          "Scegliere sempre il modello più profondo",
          "Scegliere il modello con training più lungo",
          "Scegliere il modello con nome più recente",
        ],
        correct: 0,
        explanation: "La stabilità nel mondo reale conta più della complessità fine a sé stessa."
      },
      {
        question: "Se due architetture hanno accuracy simile, quale criterio può guidare la scelta finale?",
        options: [
          "Costo computazionale e interpretabilità",
          "Numero massimo di layer",
          "Quantità di righe di codice",
          "Tema UI del dashboard",
        ],
        correct: 0,
        explanation: "A parità di performance, efficienza e manutenibilità fanno la differenza."
      },
      {
        question: "In un mini esperimento piccola vs profonda, quale confronto è corretto?",
        options: [
          "Generalizzazione, tempo training, interpretabilità",
          "Solo numero di parametri",
          "Solo tempo di inferenza",
          "Solo punteggio training",
        ],
        correct: 0,
        explanation: "Confronto completo evita decisioni basate su un singolo numero."
      },
      {
        question: "Qual è l'obiettivo reale del training di una rete neurale?",
        options: [
          "Generalizzare bene su dati non visti",
          "Memorizzare tutto il training set",
          "Massimizzare la profondità",
          "Ridurre a zero ogni errore sul training",
        ],
        correct: 0,
        explanation: "Un buon modello non ripete il passato: predice bene su nuovi esempi."
      }
    ]
  },
  {
    id: 6,
    slug: 'nlp',
    title: 'NLP: Processamento del Linguaggio Naturale',
    description: 'Come l\'AI capisce il linguaggio umano',
    sections: [
      { title: 'Da Testo a Numeri', content: 'I computer non capiscono le parole come gli esseri umani: devono trasformarle in numeri.\n\nIl processo base ha due step: **tokenizzazione** (spezza il testo in unità) e **embedding** (trasforma ogni token in un vettore numerico). Parole e frasi con significato vicino tendono ad avere vettori vicini nello spazio semantico.\n\n*Nota pratica:* se la tokenizzazione è sbagliata, anche il miglior modello produrrà risposte incoerenti. <<Takeaway: NLP parte dalla qualità della rappresentazione numerica del testo>>.', media: [ { type: 'infographic', title: 'Token e embedding', description: 'Schema visuale: testo → token → vettori.', placeholderPath: 'media/ch06-nlp/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Transformer e Attention', content: 'I **Transformer** sono l\'architettura alla base dei moderni LLM. Il meccanismo chiave è l\'**attention**: il modello pesa dinamicamente quali parti del testo sono più rilevanti nel contesto attuale.\n\nEsempio: in una frase lunga, attention permette di collegare parole distanti ma semanticamente legate, migliorando coerenza e comprensione.\n\n*Nota pratica:* l\'attention migliora il focus, ma non elimina errori fattuali: serve sempre validazione output. <<Takeaway: attenzione al contesto > semplice sequenza di parole>>.', media: [ { type: 'video', title: 'Transformer in pratica', description: 'Spiegazione visiva di attention su frasi reali.', placeholderPath: 'media/ch06-nlp/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: 'In un prodotto reale NLP non significa solo "prompt": significa pipeline completa con fallback, moderazione, monitoraggio qualità e controllo costi token.\n\nSe non tracci latenza, tasso fallback e qualità percepita, il sistema sembra funzionare in demo ma degrada in produzione.', media: [ { type: 'infographic', title: 'NLP pipeline prodotto', description: 'Prompt, guardrail, fallback e KPI di qualità.', placeholderPath: 'media/ch06-nlp/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: '**Errore comune:** valutare il sistema NLP solo su 2-3 prompt "fortunati".\n\n**Check rapido (2 min):** scegli un caso d\'uso (chat supporto, FAQ, classificazione) e indica 2 prompt edge-case che potrebbero rompere il comportamento atteso.', media: [ { type: 'podcast', title: 'Podcast — Prompt edge-case', description: 'Come testare robustezza NLP con casi limite.', placeholderPath: 'media/ch06-nlp/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'Il linguaggio deve essere convertito in numeri',
      'Attention mechanism = "cosa è importante"',
      'Transformer = base di ChatGPT e moderni LLM',
      'Context window = quante parole ricorda il modello',
      'Learning outcome: spiegare token/embedding/attention su un esempio pratico',
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
    ,media: [
      {
        type: 'video',
        title: 'Video Capitolo 6',
        description: 'Panoramica NLP: token, embedding, attention e uso in prodotto.',
        estimatedDuration: '8-10 min',
        placeholderPath: 'media/ch06-nlp/video.mp4',
        notes: 'placeholder'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 6',
        description: 'Versione audio su NLP pratico e failure mode comuni.',
        estimatedDuration: '10-15 min',
        placeholderPath: 'media/ch06-nlp/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 6',
        description: 'Schema completo pipeline NLP + prompt QA.',
        placeholderPath: 'media/ch06-nlp/infographic.png',
        notes: 'placeholder'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Checklist di test prompt e qualità output NLP.',
        placeholderPath: 'media/ch06-nlp/handout.pdf',
        notes: 'placeholder'
      }
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
          "Mai, l'LLM basta sempre",
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
    ]
  },
  {
    id: 7,
    slug: 'computer-vision',
    title: 'Computer Vision: La Vista dell\'AI',
    description: 'Come l\'AI vede e analizza immagini',
    sections: [
      { title: 'Convolutional Neural Networks', content: "Le **CNN** estraggono pattern visivi con filtri locali: bordi, texture e forme. I layer iniziali catturano feature semplici; quelli profondi feature più astratte utili alla classificazione.\n\n*Nota pratica:* validare solo su immagini pulite crea falsa sicurezza. <<Takeaway: Vision affidabile = modello + test realistici>>.", media: [ { type: 'infographic', title: 'CNN a strati', description: 'Dal pixel alle feature complesse.', placeholderPath: 'media/ch07-computer-vision/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Riconoscimento di Oggetti', content: "Il modello produce probabilità per classe, ma può degradare su sfocature, controluce, occlusioni e angoli insoliti.\n\n*Nota pratica:* misura errori su edge-case, non solo accuracy media. <<Takeaway: la media può nascondere failure critici>>.", media: [ { type: 'video', title: 'Object detection edge-case', description: 'Errori tipici in luce scarsa e occlusioni.', placeholderPath: 'media/ch07-computer-vision/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: "In produzione servono soglie di confidence, fallback umano e monitoraggio continuo dei casi ambigui. Senza osservabilità, il sistema sembra buono in demo ma fragile nel reale.", media: [ { type: 'infographic', title: 'Pipeline vision in produzione', description: 'Acquisizione, inferenza, fallback e KPI.', placeholderPath: 'media/ch07-computer-vision/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** testare solo immagini perfette da laboratorio.\n\n**Check rapido (2 min):** indica 2 edge-case del tuo dominio e 1 mitigazione operativa.", media: [ { type: 'podcast', title: 'Podcast — Vision robusta', description: 'Come progettare test set realistici.', placeholderPath: 'media/ch07-computer-vision/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'Immagine = griglia numerica di pixel',
      'CNN estrae feature in modo gerarchico',
      'Gli edge-case contano più della media',
      'Serve fallback con confidence bassa',
      'Learning outcome: identificare un failure mode vision e proporre una mitigazione',
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'Classificazione immagini con CNN (PyTorch)',
        code: '# CNN semplice con PyTorch\nimport torch.nn as nn\n\nclass SimpleCNN(nn.Module):\n    def __init__(self, num_classes=10):\n        super().__init__()\n        self.features = nn.Sequential(\n            nn.Conv2d(3, 32, kernel_size=3, padding=1),\n            nn.ReLU(),\n            nn.MaxPool2d(2, 2),\n            nn.Conv2d(32, 64, kernel_size=3, padding=1),\n            nn.ReLU(),\n            nn.MaxPool2d(2, 2)\n        )\n        self.classifier = nn.Linear(64 * 8 * 8, num_classes)\n\n    def forward(self, x):\n        x = self.features(x)\n        x = x.view(x.size(0), -1)\n        return self.classifier(x)\n\nmodel = SimpleCNN(num_classes=10)\nprint(model)'
      }
    ],
    discussionPrompts: [
      'Perché le CNN funzionano meglio delle reti dense pure sulle immagini?',
      'Quale edge-case è più critico nel tuo dominio?',
      'Quando conviene usare transfer learning in vision?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 7', description: 'Panoramica operativa di computer vision.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch07-computer-vision/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 7', description: 'Versione audio su failure mode vision.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch07-computer-vision/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 7', description: 'Schema CNN + robustezza + fallback.', placeholderPath: 'media/ch07-computer-vision/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist QA vision su edge-case reali.', placeholderPath: 'media/ch07-computer-vision/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Test set realistico vision (senza coding)',
        objective: 'Progettare un mini piano test per stressare un sistema vision prima del deploy.',
        duration: '15-20 min',
        steps: [
          'Leggi il dataset train CH7 e individua pattern principali.',
          'Definisci 3 edge-case: luce, angolo, occlusione.',
          'Confronta con validation CH7 e segna dove serve fallback.',
          'Definisci 2 KPI: errori critici e fallback rate.'
        ],
        deliverable: 'Checkpoint personale: 3 edge-case + 1 mitigazione operativa.',
        resources: [
          { label: 'Dataset train CH7 (CSV)', path: '/datasets/ch07-vision-cases/train.csv' },
          { label: 'Dataset validation CH7 (CSV)', path: '/datasets/ch07-vision-cases/validation.csv' },
          { label: 'Schema campi CH7 (JSON)', path: '/datasets/ch07-vision-cases/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'In un sistema vision per accessi aziendali, quale test è PIÙ utile prima del deploy?', options: ['Solo immagini in ufficio ben illuminato', 'Edge-case con controluce, occhiali, cappelli e movimento', 'Solo test con immagini ad alta risoluzione', 'Solo test su volti frontali'], correct: 1, explanation: 'I test realistici con variabili difficili riducono failure in produzione.' },
      { question: 'Perché una CNN generalizza meglio di una rete fully-connected su immagini?', options: ['Perché condivide pesi e cattura pattern locali', 'Perché non ha bisogno di dati etichettati', 'Perché elimina completamente l\'overfitting', 'Perché non richiede validazione'], correct: 0, explanation: 'Convoluzione + weight sharing sfruttano la struttura spaziale dell\'immagine.' },
      { question: 'Hai confidence media alta, ma errori gravi su persone in controluce. Cosa fai per primo?', options: ['Aumenti subito i layer', 'Ignori il problema perché accuracy media è alta', 'Aggiungi casi controluce al validation set e monitori quel segmento', 'Riduci la risoluzione immagini'], correct: 2, explanation: 'Segmentare e misurare i failure mode critici è la priorità operativa.' },
      { question: 'Quale combinazione è più corretta per ridurre rischio operativo in vision?', options: ['Solo threshold basso per classificare tutto', 'Confidence threshold + fallback umano per casi ambigui', 'Nessuna soglia ma più GPU', 'Solo data augmentation senza monitoraggio'], correct: 1, explanation: 'Soglia e fallback creano un meccanismo di sicurezza reale.' },
      { question: 'Transfer learning è particolarmente vantaggioso quando:', options: ['Hai pochi dati etichettati ma task simile a dataset noti', 'Hai già milioni di esempi perfetti del tuo dominio', 'Vuoi evitare completamente il training', 'Il dominio target non ha alcuna relazione visiva col pretraining'], correct: 0, explanation: 'Riusa feature visive già apprese e accelera il go-to-market.' },
      { question: 'Un aumento di accuracy dal 94% al 96% può essere inutile se:', options: ['Gli errori residui sono su classi ad alto impatto', 'Il modello usa convoluzioni', 'Il dataset ha immagini RGB', 'Il batch size è piccolo'], correct: 0, explanation: 'Conta dove sbaglia il modello, non solo la media globale.' },
      { question: 'Quale segnale indica possibile data drift in computer vision?', options: ['Calo progressivo performance con nuove camere/ambienti', 'Aumento numero di layer nel modello', 'Riduzione del tempo di training', 'Stessa accuracy su train e train'], correct: 0, explanation: 'Nuove condizioni visive possono cambiare la distribuzione dei dati.' },
      { question: 'Nel dataset CH7, quale assegnazione rischio è più plausibile?', options: ['low_light + heavy occlusion + high blur -> low risk', 'good light + front + no occlusion -> high risk', 'backlight + partial occlusion + high blur -> high risk', 'good light + top angle + no blur -> always high risk'], correct: 2, explanation: 'Combinazioni con visibilità ridotta e blur aumentano il rischio di errore.' },
      { question: 'Cosa misura meglio la robustezza di un modello vision?', options: ['Solo loss finale di training', 'Solo numero di immagini totali', 'Performance consistente su segmenti difficili e condizioni variabili', 'Velocità di inferenza su un unico device'], correct: 2, explanation: 'Robustezza = stabilità su scenari reali eterogenei.' },
      { question: 'Messaggio chiave del capitolo 7:', options: ['Vision affidabile = modello + test realistici + controllo operativo', 'Basta aumentare risoluzione immagini', 'Basta usare una CNN più grande', 'Basta ottimizzare il learning rate'], correct: 0, explanation: 'La qualità in produzione nasce da tecnica + validazione + governance.' }
    ]
  },
  {
    id: 8,
    slug: 'generative-ai',
    title: 'AI Generativa: Quando l\'AI Crea',
    description: 'Da ChatGPT alle immagini generate',
    sections: [
      { title: 'Come Funziona un LLM', content: "Un **LLM** genera testo predicendo il token successivo in base al contesto. L'output può essere fluido ma non sempre corretto.\n\n*Nota pratica:* separa qualità linguistica da accuratezza fattuale. <<Takeaway: testo convincente non equivale a testo vero>>.", media: [ { type: 'infographic', title: 'Next-token prediction', description: 'Schema del ciclo di generazione token.', placeholderPath: 'media/ch08-generative-ai/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Prompt Engineering', content: "Prompt vaghi producono output generici; prompt strutturati aumentano pertinenza, formato e coerenza.\n\n*Nota pratica:* usa template con ruolo, contesto, vincoli e output atteso. <<Takeaway: prompt design è una leva di controllo>>.", media: [ { type: 'video', title: 'Prompt design in pratica', description: 'Confronto prima/dopo su prompt.', placeholderPath: 'media/ch08-generative-ai/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: "Generative AI in produzione richiede guardrail: verifica fonti, filtri sicurezza, logging e fallback umano sui casi critici.", media: [ { type: 'infographic', title: 'Guardrail generativa', description: 'Pipeline di controllo output.', placeholderPath: 'media/ch08-generative-ai/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** pubblicare output AI senza verifica.\n\n**Check rapido (2 min):** prendi un output e indica 2 controlli minimi da fare prima di usarlo.", media: [ { type: 'podcast', title: 'Podcast — Validazione output', description: 'QA rapido su output generativi.', placeholderPath: 'media/ch08-generative-ai/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'LLM predice token, non ragiona come un umano',
      'Prompt specifici migliorano controllo output',
      'Serve verifica fattuale sui casi critici',
      'Guardrail e fallback sono parte del prodotto',
      'Learning outcome: progettare prompt robusti e validare output',
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
      'Perché un output plausibile può essere comunque sbagliato?',
      'Quali guardrail minimi metteresti in un chatbot pubblico?',
      'Quando usare fallback umano in un flusso generativo?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 8', description: 'Panoramica su LLM, prompt e validazione.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch08-generative-ai/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 8', description: 'Rischi e uso responsabile della generativa.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch08-generative-ai/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 8', description: 'Prompt framework + guardrail.', placeholderPath: 'media/ch08-generative-ai/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist QA output generativi.', placeholderPath: 'media/ch08-generative-ai/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — QA output generativo (senza coding)',
        objective: 'Valutare output AI con criteri di qualità e rischio prima della pubblicazione.',
        duration: '15-20 min',
        steps: [
          'Apri dataset train CH8 e leggi prompt+output.',
          'Classifica 3 output: OK / da rivedere / da scartare.',
          'Confronta con validation CH8 sui casi borderline.',
          'Definisci un protocollo QA in 3 controlli.'
        ],
        deliverable: 'Checkpoint personale: 3 valutazioni motivate + protocollo QA.',
        resources: [
          { label: 'Dataset train CH8 (CSV)', path: '/datasets/ch08-generative-evals/train.csv' },
          { label: 'Dataset validation CH8 (CSV)', path: '/datasets/ch08-generative-evals/validation.csv' },
          { label: 'Schema campi CH8 (JSON)', path: '/datasets/ch08-generative-evals/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'Un output LLM sembra credibile ma cita dati inventati. Come lo classifichi?', options: ['Buono, perché è scritto bene', 'Allucinazione con rischio fattuale', 'Errore di rete', 'Normale variabilità stilistica'], correct: 1, explanation: 'Forma fluida non garantisce veridicità del contenuto.' },
      { question: 'Quale prompt è più robusto per ottenere una risposta verificabile?', options: ['"Parlami di AI"', '"Spiega in modo creativo"', '"Rispondi in 5 punti, cita fonti, separa fatti da ipotesi"', '"Rispondi velocemente"'], correct: 2, explanation: 'Vincoli su formato e fonti migliorano controllo e auditabilità.' },
      { question: 'Quando la temperature è alta, tipicamente ottieni:', options: ['Output più deterministico e ripetibile', 'Output più vario ma meno stabile', 'Meno token generati', 'Meno rischio di allucinazioni per definizione'], correct: 1, explanation: 'Maggiore casualità aumenta creatività ma anche variabilità.' },
      { question: 'Per ridurre allucinazioni su knowledge aziendale, scelta migliore:', options: ['Solo aumentare il contesto del prompt', 'RAG con fonti interne aggiornate + verifica finale', 'Ridurre max_tokens', 'Cambiare solo modello ogni settimana'], correct: 1, explanation: 'RAG ancora il modello a documenti reali e aggiornati.' },
      { question: 'Quale guardrail è più utile in un chatbot pubblico?', options: ['Filtro contenuti sensibili + escalation umana su richieste critiche', 'Nessun filtro, fidarsi del modello', 'Solo limite di 50 token', 'Solo UI più bella'], correct: 0, explanation: 'La mitigazione del rischio richiede controlli applicativi concreti.' },
      { question: 'Nel dataset CH8, caso con high safety_risk e output_quality low: azione attesa?', options: ['publish', 'review', 'rewrite', 'auto-approve'], correct: 2, explanation: 'Rischio alto e qualità bassa richiedono riscrittura, non pubblicazione.' },
      { question: 'Quale metrica è più adatta per QA generativo in produzione?', options: ['Solo tempo medio risposta', 'Tasso di correzioni post-pubblicazione + incident rate', 'Solo token per secondo', 'Solo numero prompt al giorno'], correct: 1, explanation: 'Misure di qualità reale e rischio sono più informative delle sole metriche tecniche.' },
      { question: 'Fallback umano è obbligatorio soprattutto quando:', options: ['Si tratta di contenuti sensibili legali/sanitari/finanziari', 'Il prompt è breve', 'Il modello è recente', 'L\'utente scrive in maiuscolo'], correct: 0, explanation: 'Nei domini ad alto impatto serve supervisione umana.' },
      { question: 'Errore comune nel prompt engineering:', options: ['Definire ruolo, vincoli e formato output', 'Richiedere esempi di output', 'Usare prompt vaghi senza criteri di qualità', 'Separare task complessi in step'], correct: 2, explanation: 'Ambiguità nel prompt produce output poco controllabile.' },
      { question: 'Messaggio chiave del capitolo 8:', options: ['Basta un modello grande per avere affidabilità', 'Generative AI affidabile = prompt strutturato + fonti + guardrail + QA', 'La validazione rallenta e va evitata', 'Temperature alta risolve i bias'], correct: 1, explanation: 'La qualità operativa nasce da un processo completo, non da un solo parametro.' }
    ]
  },
  {
    id: 9,
    slug: 'fine-tuning',
    title: 'Fine-Tuning e Transfer Learning',
    description: 'Come personalizzare modelli esistenti',
    sections: [
      { title: 'Transfer Learning', content: "Il **transfer learning** parte da un modello pre-addestrato e lo adatta al dominio target. Riduce tempi e costi rispetto al training da zero.\n\n*Nota pratica:* funziona meglio quando i domini sono abbastanza vicini. <<Takeaway: riuso intelligente > ricostruzione da zero>>.", media: [ { type: 'infographic', title: 'Transfer learning flow', description: 'Base model → adattamento dominio.', placeholderPath: 'media/ch09-fine-tuning/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Fine-tuning vs Zero-shot', content: "Zero-shot è rapido da avviare; fine-tuning richiede investimento ma può migliorare consistenza su task specifici.\n\n*Nota pratica:* valuta sempre costo, aggiornabilità e qualità richiesta. <<Takeaway: la scelta tecnica deve avere ROI chiaro>>.", media: [ { type: 'video', title: 'Fine-tuning decision guide', description: 'Quando conviene davvero fare tuning.', placeholderPath: 'media/ch09-fine-tuning/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: "Spesso conviene partire con RAG + prompt robusti e passare al fine-tuning solo con evidenza di gap persistenti.", media: [ { type: 'infographic', title: 'RAG vs Fine-tuning', description: 'Matrice decisionale pratica.', placeholderPath: 'media/ch09-fine-tuning/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** fare tuning troppo presto senza baseline.\n\n**Check rapido (2 min):** indica 2 segnali che mostrano che prompt+RAG non bastano più.", media: [ { type: 'podcast', title: 'Podcast — Tuning con criterio', description: 'Errori frequenti nella fase decisionale.', placeholderPath: 'media/ch09-fine-tuning/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'Transfer learning accelera go-to-market',
      'Fine-tuning migliora task specifici se motivato',
      'RAG è forte su contenuti aggiornabili',
      'Non esiste una scelta universale',
      'Learning outcome: scegliere tra zero-shot, RAG e fine-tuning su un caso reale',
    ],
    discussionPrompts: [
      'Quando il costo del fine-tuning è giustificato?',
      'Quale rischio vedi nel tuning con dati poco curati?',
      'In quali scenari RAG resta preferibile?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 9', description: 'Strategie di adattamento modello in prodotto.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch09-fine-tuning/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 9', description: 'Trade-off tecnici ed economici.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch09-fine-tuning/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 9', description: 'Decision tree: zero-shot vs RAG vs tuning.', placeholderPath: 'media/ch09-fine-tuning/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist decisionale strategia modello.', placeholderPath: 'media/ch09-fine-tuning/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Decisione strategia modello (senza coding)',
        objective: 'Scegliere tra zero-shot, RAG e fine-tuning su base business+tecnica.',
        duration: '15-20 min',
        steps: [
          'Leggi dataset train CH9 con scenari e vincoli.',
          'Per ogni scenario scegli una strategia e motiva.',
          'Confronta con validation CH9.',
          'Definisci 2 KPI per validare la scelta dopo deploy.'
        ],
        deliverable: 'Checkpoint personale: scenario → strategia + motivazione.',
        resources: [
          { label: 'Dataset train CH9 (CSV)', path: '/datasets/ch09-strategy-choice/train.csv' },
          { label: 'Dataset validation CH9 (CSV)', path: '/datasets/ch09-strategy-choice/validation.csv' },
          { label: 'Schema campi CH9 (JSON)', path: '/datasets/ch09-strategy-choice/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'Scenario: FAQ prodotto aggiornate ogni settimana. Strategia iniziale più sensata?', options: ['Fine-tuning immediato mensile', 'RAG con base documentale aggiornata', 'Zero-shot senza monitoraggio', 'Training da zero con dataset sintetico'], correct: 1, explanation: 'Con contenuti dinamici, RAG è più flessibile e sostenibile.' },
      { question: 'Quando il fine-tuning è realmente giustificato?', options: ['Quando esiste gap persistente dopo baseline solide', 'Sempre, appena il progetto parte', 'Quando non hai KPI', 'Quando vuoi ridurre il lavoro di QA a zero'], correct: 0, explanation: 'Serve evidenza misurabile che alternative più semplici non bastano.' },
      { question: 'Rischio tipico del fine-tuning con dataset sbilanciato:', options: ['Miglior spiegabilità automatica', 'Over-specializzazione e peggioramento su casi rari', 'Riduzione costi cloud garantita', 'Eliminazione del bisogno di validazione'], correct: 1, explanation: 'Dati non rappresentativi degradano la generalizzazione.' },
      { question: 'Transfer learning offre soprattutto:', options: ['Riutilizzo di feature apprese e minor tempo di sviluppo', 'Azzeramento totale bias', 'Nessun bisogno di dati target', 'Garanzia di accuracy massima'], correct: 0, explanation: 'Riduce effort iniziale, ma richiede comunque validazione nel dominio.' },
      { question: 'Quale KPI confronta meglio zero-shot vs RAG vs fine-tuning?', options: ['Solo tempo di training', 'Accuratezza task + costo operativo + tempo di aggiornamento', 'Solo numero parametri', 'Solo latenza GPU'], correct: 1, explanation: 'La scelta è tecnico-economica, non solo tecnica.' },
      { question: 'Nel dataset CH9: high accuracy_need + high budget + slow time_to_market suggerisce spesso:', options: ['zero_shot', 'rag', 'fine_tuning', 'nessuna strategia'], correct: 2, explanation: 'Con requisiti alti e margine di investimento, il tuning può avere senso.' },
      { question: 'Errore comune pre-tuning:', options: ['Definire baseline con prompt/RAG', 'Fare A/B test', 'Saltare fase di benchmark e andare “a intuito”', 'Calcolare costo per iterazione'], correct: 2, explanation: 'Senza benchmark non puoi dimostrare ROI del tuning.' },
      { question: 'Quando zero-shot è accettabile?', options: ['Prototipo rapido a basso rischio', 'Produzione critica regolata senza QA', 'Domini con forte compliance e audit', 'Quando servono risposte legalmente vincolanti'], correct: 0, explanation: 'Zero-shot è ottimo per partire, meno per scenari ad alto rischio.' },
      { question: 'Differenza chiave RAG vs fine-tuning:', options: ['RAG aggiorna conoscenza via documenti, tuning modifica i pesi del modello', 'RAG modifica i pesi, tuning no', 'Sono equivalenti', 'RAG elimina allucinazioni al 100%'], correct: 0, explanation: 'RAG e tuning intervengono su livelli diversi della pipeline.' },
      { question: 'Messaggio chiave del capitolo 9:', options: ['Una sola strategia vince sempre', 'Scegli strategia per vincoli reali, KPI e rischio', 'Fine-tuning è sempre obbligatorio', 'RAG è sempre gratuito'], correct: 1, explanation: 'La decisione corretta dipende da contesto e trade-off misurabili.' }
    ]
  },
  {
    id: 10,
    slug: 'ethics-ai',
    title: "Etica e Responsabilità nell'AI",
    description: "Quando l'AI fa male",
    sections: [
      { title: 'Bias e Discriminazione', content: "I bias nei dati possono diventare decisioni ingiuste su persone reali.\n\n*Nota pratica:* non basta accuracy globale: analizza l'impatto sui sottogruppi. <<Takeaway: performance senza fairness può creare danni concreti>>.", media: [ { type: 'infographic', title: 'Bias pipeline', description: 'Dove nasce e come si propaga il bias.', placeholderPath: 'media/ch10-ethics-ai/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Trasparenza e Spiegabilità', content: "Nei contesti sensibili serve spiegare come e perché il sistema decide.\n\n*Nota pratica:* definisci logging decisionale e revisione umana dove necessario. <<Takeaway: trasparenza è requisito operativo>>.", media: [ { type: 'video', title: 'Explainability in pratica', description: 'Come rendere verificabili decisioni AI.', placeholderPath: 'media/ch10-ethics-ai/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: "Governance minima: policy d'uso, livelli di rischio, escalation umana, audit periodici e tracciamento incidenti.", media: [ { type: 'infographic', title: 'Governance AI minima', description: 'Policy, audit e controllo continuo.', placeholderPath: 'media/ch10-ethics-ai/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** trattare l'etica come documento e non come processo tecnico.\n\n**Check rapido (2 min):** indica una decisione del tuo use case che deve avere revisione umana obbligatoria.", media: [ { type: 'podcast', title: 'Podcast — Etica operativa', description: 'Dal principio etico al controllo pratico.', placeholderPath: 'media/ch10-ethics-ai/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'I dati possono amplificare bias',
      'Explainability è cruciale nei casi ad alto impatto',
      'Fairness e accountability vanno misurate',
      'Serve governance operativa oltre la compliance',
      'Learning outcome: identificare un rischio etico e definire una mitigazione concreta',
    ],
    discussionPrompts: [
      'Quale decisione AI nel tuo dominio richiede sempre revisione umana?',
      'Come bilanciare accuratezza e spiegabilità?',
      'Quale metrica useresti per monitorare fairness nel tempo?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 10', description: 'Etica AI applicata a decisioni reali.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch10-ethics-ai/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 10', description: 'Rischi, trade-off e governance operativa.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch10-ethics-ai/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 10', description: 'Mappa rischi etici + mitigazioni.', placeholderPath: 'media/ch10-ethics-ai/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist audit etico pre-deploy.', placeholderPath: 'media/ch10-ethics-ai/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Ethical risk review (senza coding)',
        objective: 'Valutare rischi etici di un sistema AI e proporre mitigazioni operative.',
        duration: '15-20 min',
        steps: [
          'Leggi dataset train CH10 con scenari e possibili impatti.',
          'Segna per ogni scenario il rischio principale.',
          'Confronta con validation CH10 e valuta dove serve human-in-the-loop.',
          'Definisci 2 controlli obbligatori pre-deploy.'
        ],
        deliverable: 'Checkpoint personale: mappa rischi + 2 mitigazioni prioritarie.',
        resources: [
          { label: 'Dataset train CH10 (CSV)', path: '/datasets/ch10-ethics-risks/train.csv' },
          { label: 'Dataset validation CH10 (CSV)', path: '/datasets/ch10-ethics-risks/validation.csv' },
          { label: 'Schema campi CH10 (JSON)', path: '/datasets/ch10-ethics-risks/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'Un sistema AI di screening CV scarta sistematicamente un gruppo demografico. Primo passo corretto?', options: ['Aumentare subito il numero di layer', 'Analizzare bias nei dati e nei criteri decisionali', 'Nascondere le feature sensibili e basta', 'Disattivare tutti i log'], correct: 1, explanation: 'Serve diagnosi strutturata delle cause di discriminazione.' },
      { question: 'Explainability è più critica quando:', options: ['Le decisioni impattano diritti/opportunità delle persone', 'Il modello è open-source', 'La latenza è sotto 100ms', 'Il team è piccolo'], correct: 0, explanation: 'Nei contesti ad alto impatto è necessario giustificare le decisioni.' },
      { question: 'Quale controllo riduce meglio il rischio in high-stakes AI?', options: ['Human-in-the-loop + escalation policy + audit trail', 'Solo documentazione marketing', 'Solo accuracy media', 'Solo test una tantum'], correct: 0, explanation: 'Servono controlli operativi continui, non solo dichiarazioni.' },
      { question: 'Nel dataset CH10, caso affects_persons=yes + bias_risk=high + explainability=high dovrebbe avere:', options: ['automated', 'human_review', 'nessun controllo', 'publish_direct'], correct: 1, explanation: 'Combinazione ad alto rischio richiede revisione umana.' },
      { question: 'Errore comune sulla governance AI:', options: ['Trattarla come processo continuo', 'Definire ruoli e responsabilità', 'Ridurla a documento statico senza enforcement', 'Monitorare incidenti'], correct: 2, explanation: 'Senza applicazione operativa, la governance non funziona.' },
      { question: 'Quale metrica è più utile per fairness monitoring?', options: ['Delta di errore tra sottogruppi', 'Solo throughput API', 'Solo costo GPU', 'Solo numero utenti attivi'], correct: 0, explanation: 'La fairness va misurata confrontando performance tra gruppi.' },
      { question: 'Privacy-by-design in AI implica:', options: ['Raccogliere tutti i dati possibili e filtrare dopo', 'Minimizzazione dati, controllo accessi e tracciabilità uso', 'Nascondere il modello al team', 'Disattivare backup'], correct: 1, explanation: 'Ridurre e proteggere i dati è parte del design, non post-processing.' },
      { question: 'Se un modello peggiora nel tempo su casi reali, quale pratica aiuta?', options: ['Audit periodico con retraining/recalibrazione controllata', 'Ignorare feedback utente', 'Cambiare UI', 'Aumentare solo batch size'], correct: 0, explanation: 'Il monitoraggio continuo intercetta drift e regressioni.' },
      { question: 'AI Act (approccio generale) enfatizza:', options: ['Classificazione per livello di rischio e obblighi proporzionati', 'Solo numero di parametri', 'Divieto di QA interna', 'Assenza di documentazione'], correct: 0, explanation: 'I requisiti aumentano con il rischio del sistema.' },
      { question: 'Messaggio chiave del capitolo 10:', options: ['Etica e compliance sono opzionali se il modello performa', 'AI responsabile = performance tecnica + fairness + accountability + controllo umano dove serve', 'Basta anonimizzare e tutto è risolto', 'Solo il reparto legale deve occuparsene'], correct: 1, explanation: 'Responsabilità AI è multidisciplinare e operativa.' }
    ]
  },
  {
    id: 11,
    slug: 'ai-act',
    title: 'AI Act Europeo: Regolazione dell\'AI',
    description: 'Come classificare il rischio AI e rispettare gli obblighi normativi UE',
    sections: [
      { title: 'I 4 Livelli di Rischio', content: "L'**AI Act** classifica i sistemi in base al rischio: **vietato**, **alto rischio**, **rischio limitato** e **rischio minimo**. La regola è semplice: più alto è l'impatto sulle persone, più rigorosi diventano i controlli.\n\nEsempi pratici:\n- **Vietato**: pratiche manipolative o sorveglianza inaccettabile\n- **Alto rischio**: AI usata in selezione personale, credito, sanità, istruzione, infrastrutture critiche\n- **Limitato**: sistemi che richiedono trasparenza verso l'utente\n- **Minimo**: uso a basso impatto, con obblighi ridotti\n\n*Nota pratica:* la classificazione rischio va fatta prima del build finale, non dopo il go-live. <<Takeaway: prima classifichi il rischio, poi scegli i controlli tecnici e documentali>>.", media: [ { type: 'infographic', title: 'Mappa dei livelli di rischio AI Act', description: 'Schema visuale dei 4 livelli e dei relativi obblighi principali.', placeholderPath: 'media/ch11-ai-act/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Obblighi per Sistemi ad Alto Rischio', content: "Per i sistemi ad **alto rischio** non basta che il modello funzioni: devi dimostrare che è governato in modo tracciabile. In pratica servono:\n- documentazione tecnica completa\n- gestione del rischio lungo il ciclo di vita\n- qualità e governance dei dati\n- logging, monitoraggio e registri degli incidenti\n- supervisione umana dove necessario\n- robustezza, accuratezza e cybersecurity adeguate\n\nLe sanzioni possono essere molto alte, quindi compliance e prodotto devono avanzare insieme. *Nota pratica:* tratta la compliance come parte della Definition of Done di ogni release. <<Takeaway: in high-risk AI, evidenza e tracciabilità contano quanto la performance>>.", media: [ { type: 'video', title: 'Obblighi high-risk spiegati semplice', description: 'Panoramica operativa sui requisiti minimi per i sistemi ad alto rischio.', placeholderPath: 'media/ch11-ai-act/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: "Per una startup, la strategia vincente è integrare la compliance in pipeline: classificazione rischio, checklist release, owner responsabile, audit periodico e piano incidenti. Così riduci ritardi, rework e rischio legale quando il prodotto scala.", media: [ { type: 'infographic', title: 'Compliance by design per startup', description: 'Workflow pratico: rischio, controlli, evidenze, rilascio.', placeholderPath: 'media/ch11-ai-act/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** pensare che la compliance sia solo un documento legale da compilare a fine progetto.\n\n**Check rapido (2 min):** scegli un caso d'uso AI reale e rispondi:\n1) in quale livello di rischio lo collochi?\n2) quale controllo tecnico rendi obbligatorio prima del deploy?\n3) quale evidenza conserveresti per un audit?", media: [ { type: 'podcast', title: 'Podcast — Compliance operativa', description: 'Come trasformare i requisiti AI Act in attività concrete del team.', placeholderPath: 'media/ch11-ai-act/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'L\'AI Act regola i sistemi in base al livello di rischio',
      'Per l\'alto rischio servono controlli tecnici, governance e supervisione umana',
      'Trasparenza, documentazione e tracciabilità non sono opzionali',
      'Compliance efficace = processo continuo, non check finale',
      'Learning outcome: classificare un caso AI e definire controlli minimi prima del deploy',
    ],
    discussionPrompts: [
      'Quale parte del tuo prodotto AI potrebbe essere classificata come alto rischio?',
      'Come bilanceresti velocità di rilascio e obblighi di conformità?',
      'Quali evidenze tecniche conserveresti per dimostrare accountability?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 11', description: 'Panoramica pratica su classificazione rischio e obblighi AI Act.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch11-ai-act/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 11', description: 'Versione audio su compliance AI orientata al prodotto.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch11-ai-act/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 11', description: 'Mappa livelli di rischio, obblighi e controlli operativi.', placeholderPath: 'media/ch11-ai-act/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist AI Act per pre-deploy e audit interno.', placeholderPath: 'media/ch11-ai-act/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Classificazione rischio e controlli AI Act (senza coding)',
        objective: 'Applicare l\'AI Act a scenari reali per definire il livello di rischio e i controlli minimi di conformità.',
        duration: '15-20 min',
        steps: [
          'Apri il dataset train CH11 e leggi i casi d\'uso con contesto operativo.',
          'Classifica ogni caso: prohibited, high, limited oppure minimal.',
          'Per i casi high indica il controllo prioritario (human review, conformity assessment, logging o transparency notice).',
          'Confronta con validation CH11 e annota 2 rischi di non conformità da evitare nel tuo dominio.'
        ],
        deliverable: 'Checkpoint personale: tabella scenario → rischio → controllo prioritario con breve motivazione.',
        resources: [
          { label: 'Dataset train CH11 (CSV)', path: '/datasets/ch11-ai-act-compliance/train.csv' },
          { label: 'Dataset validation CH11 (CSV)', path: '/datasets/ch11-ai-act-compliance/validation.csv' },
          { label: 'Schema campi CH11 (JSON)', path: '/datasets/ch11-ai-act-compliance/schema.json' }
        ]
      }
    ],
    quiz: [
      {
        question: 'L\'AI Act organizza i requisiti principalmente in base a:',
        options: [
          'Livello di rischio del sistema',
          'Numero di parametri del modello',
          'Prezzo dell\'abbonamento cloud',
          'Interfaccia grafica del prodotto',
        ],
        correct: 0,
        explanation: 'La logica normativa è risk-based: obblighi più severi quando aumenta l\'impatto sulle persone.'
      },
      {
        question: 'Per un sistema ad alto rischio, quale approccio è più corretto?',
        options: [
          'Documentazione, controlli tecnici, monitoraggio e supervisione umana dove serve',
          'Solo un README pubblico',
          'Nessun obbligo se il modello ha alta accuracy',
          'Solo una policy generica sul sito',
        ],
        correct: 0,
        explanation: 'La conformità richiede un insieme strutturato di evidenze e processi, non un singolo documento.'
      },
      {
        question: 'Qual è un errore frequente nei team che affrontano AI Act?',
        options: [
          'Trattare la compliance come attività finale e non come processo continuo',
          'Definire owner chiari di rischio e conformità',
          'Tenere traccia delle decisioni e dei test',
          'Prevedere audit periodici',
        ],
        correct: 0,
        explanation: 'Se arrivi tardi sulla compliance, aumentano ritardi, costi e rischio di non conformità.'
      },
      {
        question: 'Un chatbot che interagisce con utenti finali senza decisioni critiche ricade più spesso in:',
        options: [
          'Rischio limitato, con obblighi di trasparenza',
          'Rischio vietato per definizione',
          'Sempre alto rischio',
          'Nessuna categoria normativa',
        ],
        correct: 0,
        explanation: 'Molti chatbot sono in rischio limitato, ma devono chiarire quando l\'utente sta parlando con AI.'
      },
      {
        question: 'Quale evidenza è più utile in caso di audit su sistema high-risk?',
        options: [
          'Registro decisioni, test di robustezza e log incidenti',
          'Solo screenshot della dashboard',
          'Solo slide di progetto',
          'Solo changelog UI',
        ],
        correct: 0,
        explanation: 'Audit e accountability richiedono prove tecniche tracciabili del ciclo di vita del sistema.'
      },
      {
        question: 'Se un caso d\'uso impatta accesso a credito o lavoro, la scelta più prudente è:',
        options: [
          'Valutarlo come potenziale high-risk e applicare controlli rinforzati',
          'Classificarlo sempre come rischio minimo',
          'Ignorare la classificazione fino al post-lancio',
          'Valutare solo metriche di latenza',
        ],
        correct: 0,
        explanation: 'Domini che incidono su diritti/opportunità richiedono particolare attenzione normativa.'
      },
      {
        question: 'Quale controllo riduce meglio il rischio operativo nei casi ambigui ad alto impatto?',
        options: [
          'Human-in-the-loop con regole di escalation',
          'Aumentare solo la temperature del modello',
          'Nascondere gli errori agli utenti',
          'Disattivare logging per privacy',
        ],
        correct: 0,
        explanation: 'La supervisione umana sui casi critici migliora sicurezza e accountability del processo decisionale.'
      },
      {
        question: 'Quale affermazione è più corretta sulla relazione tra performance e compliance?',
        options: [
          'Alta performance non sostituisce gli obblighi normativi',
          'Se l\'accuracy supera il 95% la compliance non serve',
          'Compliance riguarda solo la UI',
          'Compliance è necessaria solo per aziende extra-UE',
        ],
        correct: 0,
        explanation: 'L\'AI Act richiede controlli e governance anche per sistemi tecnicamente performanti.'
      },
      {
        question: 'Nel dataset CH11, uno scenario con risk_level=high e affects_rights=yes dovrebbe avere come priorità:',
        options: [
          'human_review',
          'no_control',
          'auto_publish',
          'marketing_notice_only',
        ],
        correct: 0,
        explanation: 'Quando impatta diritti e opportunità, la revisione umana è un controllo prioritario.'
      },
      {
        question: 'Messaggio chiave del capitolo 11:',
        options: [
          'Compliance AI efficace = classificazione rischio + controlli tecnici + evidenze tracciabili',
          'Basta una policy legale statica senza processi',
          'La regolazione rallenta sempre e va evitata',
          'Solo i modelli open-source devono conformarsi',
        ],
        correct: 0,
        explanation: 'La conformità utile è integrata nel ciclo prodotto, con responsabilità e verifiche continue.'
      }
    ]
  },
  {
    id: 12,
    slug: 'ai-at-work',
    title: 'L\'AI nel Lavoro e nel Futuro',
    description: 'Come l\'AI trasforma ruoli, competenze e decisioni nel mondo del lavoro',
    sections: [
      { title: 'Automazione dei task, non delle persone', content: 'L\'AI eccelle nell\'automatizzare attività ripetitive e ad alto volume: classificazione email, estrazione dati da documenti, triage ticket, reportistica standard. Questo non significa che i ruoli umani spariscono in blocco: significa che cambiano il mix di attività. In molti team, i task operativi diminuiscono e crescono i task di controllo qualità, decisione e relazione con il cliente.\n\n*Nota pratica:* prima di introdurre AI in un flusso, mappa il processo in tre categorie: task da automatizzare, task da assistere e task da mantenere umani. <<Takeaway: la vera unità di trasformazione è il task, non il job title>>.', media: [ { type: 'infographic', title: 'Mappa task: automazione vs supervisione', description: 'Schema operativo per classificare attività in automatiche, assistite e umane.', placeholderPath: 'media/ch12-ai-at-work/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Nuovi ruoli e responsabilità operative', content: 'Con l\'adozione AI emergono ruoli ibridi: AI Product Owner, AI Ops Specialist, Prompt Designer, Data Steward, AI Compliance Coordinator. Anche ruoli già esistenti evolvono: recruiter, project manager, marketer e developer usano AI come leva quotidiana, ma con responsabilità nuove su qualità, verificabilità e rischio.\n\nNel lavoro reale conta la capacità di disegnare workflow robusti: input chiari, controlli in uscita, escalation quando la confidenza è bassa. *Nota pratica:* definisci sempre ownership esplicita su "chi valida cosa" prima del rilascio. <<Takeaway: usare AI senza responsabilità definite crea velocità apparente e rischio reale>>.', media: [ { type: 'video', title: 'Ruoli AI-ready in team moderni', description: 'Panoramica su ruoli emergenti, responsabilità e collaborazione uomo-AI.', placeholderPath: 'media/ch12-ai-at-work/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Competenze ad alto valore nel mercato AI', content: 'Le competenze che aumentano di valore non sono solo tecniche. Le più richieste combinano: **pensiero critico** (valutare affidabilità), **problem framing** (definire bene il problema), **comunicazione** (spiegare decisioni), **alfabetizzazione dati** (leggere metriche), **adattabilità** (aggiornare metodo e tool).\n\nConoscere un tool specifico aiuta, ma il vantaggio competitivo è saper progettare processi ripetibili e misurabili. *Nota pratica:* costruisci un portfolio di casi concreti in cui mostri come hai ridotto errori o tempo di ciclo usando AI con metriche chiare. <<Takeaway: nel mercato AI vince chi sa misurare impatto, non chi usa più tool>>.', media: [ { type: 'infographic', title: 'Skill stack AI-ready', description: 'Matrice competenze tecniche e trasversali con esempi di impatto misurabile.', placeholderPath: 'media/ch12-ai-at-work/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: '**Errore comune:** introdurre AI per moda, senza baseline e senza KPI di qualità del lavoro.\n\n**Check rapido (2 min):** scegli un processo reale (es. supporto clienti, selezione CV, QA contenuti) e rispondi:\n1) quale task automatizzi per primo?\n2) quale metrica userai per capire se hai migliorato davvero?\n3) quando scatta obbligatoriamente la revisione umana?', media: [ { type: 'podcast', title: 'Podcast — Adozione AI con KPI reali', description: 'Come evitare automazione superficiale e impostare controlli operativi.', placeholderPath: 'media/ch12-ai-at-work/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'L\'AI trasforma soprattutto i task ripetitivi, non elimina automaticamente interi ruoli',
      'Nuovi ruoli e responsabilità emergono su governance, qualità e orchestrazione dei workflow',
      'Pensiero critico, capacità di framing e literacy dei dati sono skill centrali nel lavoro AI-ready',
      'Ogni adozione AI va valutata con KPI operativi, qualità e rischio, non solo velocità',
      'Learning outcome: progettare un mini piano di adozione AI con task, metriche e supervisione umana',
    ],
    discussionPrompts: [
      'Nel tuo settore, quali task sono candidati ideali per automazione assistita da AI?',
      'Quale competenza umana pensi diventerà più preziosa con l\'uso esteso dell\'AI?',
      'Come bilanceresti velocità operativa e controllo qualità in un workflow AI?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 12', description: 'Panoramica su trasformazione del lavoro, skill e governance operativa con AI.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch12-ai-at-work/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 12', description: 'Versione audio su adozione AI nei team e impatto sul mercato del lavoro.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch12-ai-at-work/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 12', description: 'Mappa task, competenze e controlli per una adozione AI sostenibile.', placeholderPath: 'media/ch12-ai-at-work/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Template operativo per piano adozione AI con KPI e responsabilità.', placeholderPath: 'media/ch12-ai-at-work/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Piano self-paced di adozione AI (senza coding)',
        objective: 'Progettare un piano concreto per introdurre AI in un processo di lavoro mantenendo qualità e controllo rischio.',
        duration: '20-25 min',
        steps: [
          'Apri il dataset train CH12 e seleziona 3 scenari di lavoro diversi (es. supporto, HR, operations).',
          'Per ogni scenario identifica: task da automatizzare, task da assistere e task da lasciare umani.',
          'Usa la validation CH12 per verificare la coerenza delle scelte e annota eventuali correzioni.',
          'Definisci per uno scenario finale 3 KPI (efficienza, qualità, rischio) e una regola di escalation umana.'
        ],
        deliverable: 'Checkpoint personale: tabella scenario → task split → KPI → regola di supervisione, pronta per discussione in aula.',
        resources: [
          { label: 'Dataset train CH12 (CSV)', path: '/datasets/ch12-ai-workforce/train.csv' },
          { label: 'Dataset validation CH12 (CSV)', path: '/datasets/ch12-ai-workforce/validation.csv' },
          { label: 'Schema campi CH12 (JSON)', path: '/datasets/ch12-ai-workforce/schema.json' }
        ]
      }
    ],
    quiz: [
      {
        question: 'In un team operations, quale approccio descrive meglio un\'adozione AI matura?',
        options: [
          'Automatizzare tutto subito senza monitoraggio',
          'Mappare i task, partire da casi ripetitivi e misurare KPI',
          'Usare AI solo per contenuti marketing',
          'Delegare l\'intero processo al modello senza review',
        ],
        correct: 1,
        explanation: 'La strategia robusta parte da task chiari, rollout progressivo e metriche misurabili.'
      },
      {
        question: 'Scenario: il tempo medio risposta cala del 40% ma aumentano gli errori critici. Cosa fai?',
        options: [
          'Confermi il rollout perché la velocità è migliorata',
          'Blocchi AI definitivamente',
          'Rivedi KPI qualità/rischio e introduci escalation umana sui casi sensibili',
          'Aumenti solo il numero di prompt',
        ],
        correct: 2,
        explanation: 'Efficienza senza qualità affidabile è un falso miglioramento operativo.'
      },
      {
        question: 'Quale skill umana cresce di valore quando i task ripetitivi vengono automatizzati?',
        options: [
          'Pensiero critico e decision making',
          'Memorizzazione meccanica',
          'Compilazione manuale ripetitiva',
          'Esecuzione senza contesto',
        ],
        correct: 0,
        explanation: 'Le attività ad alto giudizio umano diventano il vero differenziale competitivo.'
      },
      {
        question: 'Scenario HR: AI filtra CV ma penalizza profili non standard. Primo intervento corretto?',
        options: [
          'Aumentare soltanto la soglia di scarto',
          'Rimuovere ogni controllo umano',
          'Audit del dataset e regole di revisione per candidati borderline',
          'Disattivare i log del sistema',
        ],
        correct: 2,
        explanation: 'Quando emerge rischio di esclusione ingiusta, servono audit dati e supervisione operativa.'
      },
      {
        question: 'Quale metrica è più utile per valutare qualità di un workflow AI di supporto clienti?',
        options: [
          'Solo numero ticket processati',
          'Tasso di risoluzione corretta al primo contatto',
          'Solo costo mensile cloud',
          'Numero di prompt per operatore',
        ],
        correct: 1,
        explanation: 'La qualità percepita dal cliente dipende dalla correttezza risolutiva, non solo dal volume.'
      },
      {
        question: 'In ottica carriera, quale scelta è più solida nei prossimi anni?',
        options: [
          'Imparare un solo tool e non aggiornarsi più',
          'Combinare skill di dominio, dati e governance AI',
          'Evitare qualsiasi esposizione a processi AI',
          'Concentrarsi solo su velocità di digitazione',
        ],
        correct: 1,
        explanation: 'Il valore professionale cresce con competenze trasferibili e capacità di orchestrazione.'
      },
      {
        question: 'Scenario: il team vuole introdurre AI in 12 processi insieme. Rischio principale?',
        options: [
          'Miglioramento troppo rapido della qualità',
          'Perdita di controllo su priorità, KPI e responsabilità',
          'Riduzione automatica dei costi di training',
          'Eliminazione immediata dei bias',
        ],
        correct: 1,
        explanation: 'Senza rollout graduale e ownership chiara, aumenta il rischio di caos operativo.'
      },
      {
        question: 'Quale combinazione descrive meglio una governance minima per AI nel lavoro?',
        options: [
          'Prompt lunghi + dashboard estetica',
          'KPI definiti + revisione umana nei casi critici + logging',
          'Solo modello più recente disponibile',
          'Solo formazione iniziale una tantum',
        ],
        correct: 1,
        explanation: 'Governance efficace richiede metriche, controllo umano e tracciabilità decisionale.'
      },
      {
        question: 'Se un task richiede empatia, negoziazione o giudizio contestuale, la scelta migliore è:',
        options: [
          'Automazione completa senza eccezioni',
          'Eliminare l\'interazione umana',
          'Modello human-in-the-loop con AI di supporto',
          'Bloccare l\'uso AI in tutto il team',
        ],
        correct: 2,
        explanation: 'Nei task ad alta componente relazionale, AI supporta ma non sostituisce la decisione umana.'
      },
      {
        question: 'Messaggio chiave del Capitolo 12:',
        options: [
          'AI sostituisce ogni professione in modo uniforme',
          'Basta usare più tool per essere competitivi',
          'Adozione AI efficace = task design + skill umane + KPI + supervisione',
          'La governance rallenta sempre e va evitata',
        ],
        correct: 2,
        explanation: 'Il valore nasce dall\'integrazione tra tecnologia, processo e responsabilità.'
      }
    ]
  },
  {
    id: 13,
    slug: 'practical-tools',
    title: 'Strumenti Pratici: ChatGPT, Copilot e Tool Assistivi',
    description: 'Workflow operativo per usare assistenti AI con controllo qualità',
    sections: [
      { title: 'Quando usare ChatGPT (e quando no)', content: "**ChatGPT** è ottimo per brainstorming, prima bozza, sintesi e riscrittura. Non è una fonte di verità automatica.\n\nUsalo quando vuoi accelerare il lavoro iniziale; evita di delegargli decisioni finali senza verifica, soprattutto in contesti legali, sanitari o finanziari.\n\n*Nota pratica:* separa sempre fase di generazione da fase di validazione. <<Takeaway: velocità senza verifica aumenta il rischio di errori costosi>>.", media: [ { type: 'infographic', title: 'Mappa uso corretto di ChatGPT', description: 'Cosa delegare al modello e cosa tenere in revisione umana.', placeholderPath: 'media/ch13-practical-tools/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Copilot, Cursor e pair programming AI', content: "Gli assistenti di coding riducono il tempo su task ripetitivi: boilerplate, test iniziali, refactor guidato e documentazione tecnica.\n\nIl guadagno reale arriva solo se mantieni una disciplina chiara: leggere il codice suggerito, eseguire test, verificare sicurezza e allineamento allo stile del progetto.\n\n*Nota pratica:* considera ogni suggestion AI come proposta, non come verità. <<Takeaway: produttività alta richiede review tecnica sistematica>>.", media: [ { type: 'video', title: 'Review di codice suggerito da AI', description: 'Checklist rapida per accettare o scartare suggerimenti.', placeholderPath: 'media/ch13-practical-tools/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: "In team startup il flusso più solido è: **prompt strutturato -> output AI -> review umana -> test -> rilascio**.\n\nQuesto approccio evita due estremi: fiducia cieca nell'AI e rifiuto totale dello strumento. L'obiettivo non è usare più AI, ma ridurre lead time mantenendo qualità prevedibile.", media: [ { type: 'infographic', title: 'Workflow AI con quality gate', description: 'Pipeline pratica per team piccoli e veloci.', placeholderPath: 'media/ch13-practical-tools/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** usare output AI direttamente in produzione senza controlli minimi.\n\n**Check rapido (2 min):** prima di usare un output, verifica 1) accuratezza fattuale, 2) coerenza col contesto, 3) impatto se fosse sbagliato. Se uno dei tre fallisce, blocca il rilascio.", media: [ { type: 'podcast', title: 'Podcast — Quality gate prima del rilascio', description: 'Come evitare incidenti da automazione superficiale.', placeholderPath: 'media/ch13-practical-tools/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'ChatGPT accelera la bozza, non sostituisce la validazione',
      'Gli assistenti di coding aumentano produttività solo con review e test',
      'Prompt chiari migliorano qualità e ripetibilità dell output',
      'Quality gate e fallback umano riducono rischio operativo',
      'Learning outcome: progettare un workflow AI con controlli minimi prima del deploy',
    ],
    codeSnippets: [
      {
        lang: 'bash',
        label: 'Template prompt operativo per task tecnici',
        code: '# Prompt template\nRuolo: Sei un assistente tecnico per [contesto].\nObiettivo: [task specifico].\nVincoli: [linguaggio, standard, limiti].\nInput: [dati disponibili].\nOutput atteso:\n1) Soluzione proposta\n2) Assunzioni esplicite\n3) Rischi/limiti\n4) Checklist di verifica finale'
      },
      {
        lang: 'bash',
        label: 'Quality gate minimo prima del merge',
        code: '# Esempio flusso locale\nnpm run lint\nnpx tsc --noEmit\nnpm run test\n\n# Se tutti i check passano, apri PR con note review\ngit add .\ngit commit -m "feat: integra output AI con review e test"'
      }
    ],
    discussionPrompts: [
      'In quali task del tuo flusso quotidiano l AI ti fa risparmiare più tempo senza aumentare il rischio?',
      'Quali output devono avere revisione umana obbligatoria prima della pubblicazione?',
      'Come misureresti in modo oggettivo il valore reale di Copilot o Cursor nel tuo team?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 13', description: 'Workflow pratico per usare tool AI con controllo qualità.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch13-practical-tools/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 13', description: 'Errori frequenti nell uso operativo di ChatGPT e coding assistant.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch13-practical-tools/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 13', description: 'Processo: prompt, review, test, rilascio.', placeholderPath: 'media/ch13-practical-tools/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist di validazione output AI prima del deploy.', placeholderPath: 'media/ch13-practical-tools/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Self-paced workflow AI (senza coding obbligatorio)',
        objective: 'Applicare un processo completo di uso AI: richiesta, revisione, verifica e decisione finale su un output reale.',
        duration: '20-30 min',
        steps: [
          'Apri il dataset train CH13 e scegli 5 scenari con tool diversi (chat assistant, coding assistant, ricerca).',
          'Per ogni scenario valuta se l output può essere usato subito, va rivisto o va scartato.',
          'Confronta le tue decisioni con validation CH13 e identifica 2 errori di valutazione iniziali.',
          'Definisci una checklist personale in 4 punti da riutilizzare nei prossimi task AI.'
        ],
        deliverable: 'Checkpoint personale: tabella scenario -> decisione (use/review/reject) + checklist finale in 4 punti.',
        resources: [
          { label: 'Dataset train CH13 (CSV)', path: '/datasets/ch13-practical-tools/train.csv' },
          { label: 'Dataset validation CH13 (CSV)', path: '/datasets/ch13-practical-tools/validation.csv' },
          { label: 'Schema campi CH13 (JSON)', path: '/datasets/ch13-practical-tools/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'Scenario: il modello propone una spiegazione tecnica molto fluida ma senza fonti verificabili. Prima azione corretta?', options: ['Pubblicare subito per risparmiare tempo', 'Chiedere esempi più creativi', 'Verificare i fatti chiave su fonti affidabili prima dell uso', 'Aumentare solo la temperature'], correct: 2, explanation: 'La qualità stilistica non garantisce accuratezza: serve verifica fattuale.' },
      { question: 'Qual è il beneficio più realistico di Copilot in un team maturo?', options: ['Azzerare il bisogno di test', 'Ridurre tempo su task ripetitivi mantenendo review umana', 'Sostituire senior developer', 'Eliminare bug di sicurezza'], correct: 1, explanation: 'Accelera l esecuzione, ma responsabilità tecnica e qualità restano del team.' },
      { question: 'Scenario: output AI include una query SQL efficace ma con rischio di data leak. Cosa fai?', options: ['Eseguire direttamente in produzione', 'Bloccare, fare security review e aggiungere controlli accesso', 'Cambiare solo il naming delle colonne', 'Ignorare se passa i test locali'], correct: 1, explanation: 'I rischi di sicurezza richiedono review dedicata prima dell esecuzione.' },
      { question: 'Prompt engineering utile significa soprattutto:', options: ['Scrivere prompt lunghissimi', 'Definire obiettivo, vincoli e formato output in modo esplicito', 'Usare solo inglese tecnico', 'Evitare esempi per non influenzare il modello'], correct: 1, explanation: 'Struttura chiara del prompt migliora qualità e coerenza della risposta.' },
      { question: 'Scenario: il team usa AI per generare test unitari. Quale controllo è prioritario?', options: ['Verificare copertura e rilevanza dei test sui casi critici', 'Contare solo il numero totale di file test', 'Accettare tutto se compila', 'Saltare test manuali e code review'], correct: 0, explanation: 'Conta la qualità dei test sui comportamenti importanti, non solo la quantità.' },
      { question: 'Quale metrica misura meglio il valore operativo dei tool AI nel tempo?', options: ['Numero di prompt inviati', 'Riduzione lead time con qualità stabile (bug e rework sotto controllo)', 'Numero di modelli provati', 'Dimensione media dei commit'], correct: 1, explanation: 'Il valore reale è velocità sostenibile senza degradare affidabilità.' },
      { question: 'Scenario: output AI corretto nel 90% dei casi, ma sbaglia in casi sensibili clienti. Decisione migliore?', options: ['Usarlo comunque senza filtri', 'Limitare utilizzo ai casi low-risk e introdurre fallback umano sui casi sensibili', 'Disattivare completamente ogni automazione', 'Cambiare provider ogni settimana'], correct: 1, explanation: 'Segmentare per rischio e introdurre fallback riduce incidenti ad alto impatto.' },
      { question: 'Errore comune nell adozione di ChatGPT in azienda:', options: ['Definire policy e checklist condivise', 'Trattare il tool come autore definitivo senza processo di review', 'Usare prompt template', 'Loggare decisioni critiche'], correct: 1, explanation: 'Senza governance minima l errore umano+automazione cresce rapidamente.' },
      { question: 'Nel dataset CH13, uno scenario con tool=coding_assistant, risk_level=high e output_quality=medium dovrebbe andare in:', options: ['use_direct', 'review_required', 'auto_publish', 'archive_without_check'], correct: 1, explanation: 'Con rischio alto la revisione è obbligatoria anche con qualità discreta.' },
      { question: 'Messaggio chiave del capitolo 13:', options: ['Più automazione possibile, meno controlli', 'Tool AI utili solo per studenti', 'Uso efficace AI = velocità + review umana + quality gate misurabili', 'La qualità dipende solo dal modello scelto'], correct: 2, explanation: 'Il risultato affidabile nasce dal processo operativo, non da un singolo tool.' }
    ]
  },
  {
    id: 14,
    slug: 'advanced-patterns',
    title: 'Pattern Avanzati: RAG, Agent e Fine-tuning',
    description: 'Come scegliere e governare architetture AI avanzate in produzione',
    sections: [
      { title: 'RAG: Retrieval-Augmented Generation', content: "Il **RAG** unisce retrieval e generazione: prima recupera documenti affidabili, poi il modello risponde usando quel contesto. È spesso la scelta migliore quando la conoscenza cambia spesso (policy, cataloghi, procedure interne) perché aggiorni i documenti senza riaddestrare i pesi del modello. In pratica, RAG riduce il rischio di risposte obsolete e offre più controllo su fonti e tracciabilità. *Nota operativa:* ogni risposta dovrebbe includere evidenza delle fonti usate. <<Takeaway: RAG è efficace quando servono aggiornabilità, controllo e auditabilità>>.", media: [ { type: 'infographic', title: 'RAG pipeline operativa', description: 'Flusso: ingestione documenti, retrieval, ranking, generazione con citazioni.', placeholderPath: 'media/ch14-advanced-patterns/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Agent AI e Tool-use', content: "Un **agent** non si limita a generare testo: pianifica step, usa strumenti e verifica risultati rispetto a un obiettivo. Questo aumenta il valore operativo, ma anche il rischio: errori di tool-call, azioni non autorizzate, loop non controllati. Per questo servono permessi granulari, limiti di budget/tempo e conferme su azioni sensibili. *Nota operativa:* definisci sempre quali tool sono consentiti, con quali parametri e in quali condizioni. <<Takeaway: un agent affidabile è prima di tutto governato>>.", media: [ { type: 'video', title: 'Agent con tool-use: schema decisionale', description: 'Esempio di pianificazione, esecuzione tool e validazione output.', placeholderPath: 'media/ch14-advanced-patterns/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Fine-tuning: quando conviene davvero', content: "Il **fine-tuning** è utile quando hai pattern ricorrenti e mismatch persistente che prompt+RAG non risolvono in modo stabile. Non è il primo passo: richiede dataset curato, valutazioni robuste e ciclo di aggiornamento dei dati. In molti casi, una baseline con prompt strutturato + retrieval ben fatto offre ROI più rapido e meno complessità operativa. *Nota operativa:* scegli tuning solo dopo benchmark comparativi con KPI chiari su qualità, costo e latenza. <<Takeaway: tuning sì, ma solo con evidenza misurabile>>.", media: [ { type: 'infographic', title: 'Decision matrix: Prompt vs RAG vs Fine-tuning', description: 'Matrice per scegliere strategia in base a rischio, aggiornabilità e costo.', placeholderPath: 'media/ch14-advanced-patterns/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** scegliere l'architettura più complessa senza baseline e senza KPI.\n\n**Check rapido (2 min):** per un caso reale del tuo dominio, rispondi:\n1) quale problema risolvi (qualità, aggiornabilità, automazione)?\n2) quale opzione parte per prima (prompt, RAG o agent) e perché?\n3) quale metrica userai entro 2 settimane per confermare la scelta?", media: [ { type: 'podcast', title: 'Podcast — Complessità con criterio', description: 'Come evitare over-engineering in pattern avanzati AI.', placeholderPath: 'media/ch14-advanced-patterns/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'RAG migliora aggiornabilità e controllo delle fonti',
      'Gli agent richiedono governance: permessi, limiti e audit trail',
      'Fine-tuning è efficace solo con gap persistenti e dati curati',
      'La scelta architetturale va guidata da KPI, non dall\'hype',
      'Learning outcome: progettare un flusso avanzato con guardrail e metriche operative',
    ],
    discussionPrompts: [
      'Nel tuo prodotto, quale parte richiede aggiornabilità continua e quindi favorisce RAG?',
      'Quali azioni di un agent dovrebbero richiedere approvazione umana obbligatoria?',
      'Quale segnale concreto ti direbbe che è arrivato il momento del fine-tuning?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 14', description: 'Panoramica pratica su RAG, agent e fine-tuning in produzione.', estimatedDuration: '9-11 min', placeholderPath: 'media/ch14-advanced-patterns/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 14', description: 'Versione audio con focus su trade-off tecnici e di governance.', estimatedDuration: '12-16 min', placeholderPath: 'media/ch14-advanced-patterns/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 14', description: 'Schema decisionale completo: quando usare RAG, agent o fine-tuning.', placeholderPath: 'media/ch14-advanced-patterns/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist operativa per valutazione architettura e controllo rischio.', placeholderPath: 'media/ch14-advanced-patterns/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Scelta architettura avanzata (self-paced, senza coding)',
        objective: 'Confrontare prompt-only, RAG e agent su uno scenario reale usando criteri tecnici e business.',
        duration: '20-25 min',
        steps: [
          'Apri il dataset train CH14 e scegli 3 scenari con vincoli diversi (qualità, tempo, compliance).',
          'Per ogni scenario proponi una strategia iniziale: prompt-only, RAG o agent assistito.',
          'Confronta le tue scelte con il validation CH14 e identifica un caso in cui servirebbe escalation umana.',
          'Definisci 3 KPI di verifica per le prime 2 settimane: quality pass rate, fallback rate, costo per task.'
        ],
        deliverable: 'Checkpoint personale: tabella scenario → strategia → rischio principale → KPI di monitoraggio.',
        resources: [
          { label: 'Dataset train CH14 (CSV)', path: '/datasets/ch14-advanced-patterns/train.csv' },
          { label: 'Dataset validation CH14 (CSV)', path: '/datasets/ch14-advanced-patterns/validation.csv' },
          { label: 'Schema campi CH14 (JSON)', path: '/datasets/ch14-advanced-patterns/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'Una knowledge base interna cambia ogni giorno. Strategia iniziale più sensata?', options: ['Fine-tuning immediato', 'RAG con retrieval su documenti aggiornati', 'Solo zero-shot senza fonti', 'Agent con accesso completo senza controlli'], correct: 1, explanation: 'Con contenuti dinamici il RAG riduce latenza di aggiornamento e migliora tracciabilità.' },
      { question: 'Qual è il rischio operativo principale di un agent con tool finanziari?', options: ['Prompt troppo corto', 'Azioni irreversibili non autorizzate', 'Output troppo sintetico', 'Numero basso di token'], correct: 1, explanation: 'Con tool ad alto impatto servono limiti, approvazioni e audit trail.' },
      { question: 'Quando il fine-tuning è davvero giustificato?', options: ['Sempre, per default', 'Quando prompt+RAG mostrano gap persistenti su KPI critici', 'Quando vuoi ridurre il lavoro di valutazione', 'Quando il dataset è piccolo e rumoroso'], correct: 1, explanation: 'Il tuning va deciso con evidenza misurabile, non per preferenza tecnologica.' },
      { question: 'Quale set di controlli è più robusto per agent in produzione?', options: ['Permessi granulari + limiti budget/tempo + human approval su azioni sensibili', 'Solo temperature bassa', 'Solo logging UI', 'Nessun fallback per velocità'], correct: 0, explanation: 'La governance operativa riduce rischio tecnico e business.' },
      { question: 'Scenario: risposte corrette ma senza citazioni fonte. Cosa manca?', options: ['Più GPU', 'Tracciabilità e verificabilità del retrieval', 'Più token in output', 'Cambio linguaggio di programmazione'], correct: 1, explanation: 'In RAG la citazione fonte è parte chiave del controllo qualità.' },
      { question: 'In una scelta architetturale, quale metrica combina qualità e rischio?', options: ['Solo latenza media', 'Quality pass rate segmentato + incident rate', 'Solo costo mensile cloud', 'Solo numero prompt/giorno'], correct: 1, explanation: 'Valutare segmenti e incidenti evita decisioni basate su medie fuorvianti.' },
      { question: 'Se un agent entra in loop di retry su API esterna, prima mitigazione?', options: ['Aumentare max token', 'Circuit breaker con retry cap e timeout', 'Aumentare temperatura', 'Eliminare logging'], correct: 1, explanation: 'Limiti di retry/tempo prevengono consumo incontrollato e failure a cascata.' },
      { question: 'Quale segnale suggerisce di restare su RAG e NON passare a tuning?', options: ['Dati e policy cambiano frequentemente', 'Hai budget alto', 'Vuoi una demo più complessa', 'Il team preferisce modelli custom'], correct: 0, explanation: 'Quando la conoscenza cambia spesso, RAG è più agile e manutenibile.' },
      { question: 'Scenario compliance: dominio regolato con decisioni ad alto impatto. Cosa è prioritario?', options: ['Rimuovere tutte le approvazioni', 'Definire escalation umana e audit log obbligatori', 'Nascondere i fallimenti agli utenti', 'Usare solo output creativo'], correct: 1, explanation: 'Nei contesti high-stakes conta la governance verificabile oltre alla performance.' },
      { question: 'Messaggio chiave del capitolo 14:', options: ['Pattern avanzati efficaci = scelta guidata da KPI + guardrail + monitoraggio continuo', 'Più complesso è sempre meglio', 'Basta un modello grande per risolvere tutto', 'Gli agent non hanno bisogno di controlli'], correct: 0, explanation: 'Il valore reale nasce da architettura appropriata e controllo operativo.' }
    ]
  },
  {
    id: 15,
    slug: 'future-ai',
    title: 'Il Futuro dell\'AI: Scenari, Impatti e Scelte Strategiche',
    description: 'Come prepararsi ai prossimi 5-10 anni dell\'AI con approccio pratico e responsabile',
    sections: [
      {
        title: 'Da Narrow AI a AGI: cosa è realistico oggi',
        content: 'La maggior parte dei sistemi attuali è **narrow AI**: molto forte in compiti specifici, fragile fuori contesto. L\'idea di **AGI** (Artificial General Intelligence) descrive invece un sistema capace di adattarsi trasversalmente a domini diversi con ragionamento robusto. Oggi non siamo a quel livello: abbiamo progressi rapidi, ma anche limiti chiari su affidabilità, causalità e autonomia decisionale in ambienti complessi.\n\n*Nota pratica:* per valutare roadmap e investimenti, distingui sempre "demo impressionante" da "capacità stabile in produzione". <<Takeaway: il futuro si costruisce su evidenze misurabili, non su hype>>.',
        media: [
          { type: 'infographic', title: 'Narrow AI vs AGI', description: 'Confronto visivo tra capacità specialistiche attuali e ipotesi di intelligenza generale.', placeholderPath: 'media/ch15-future-ai/sec-01/infographic.png', notes: 'placeholder' }
        ]
      },
      {
        title: 'Trend 2026-2030: cosa cambia davvero nei prodotti',
        content: 'Nei prossimi anni vedremo soprattutto tre direttrici: (1) **copilot verticali** integrati nei workflow, (2) **agent orchestrati** con limiti e approvazioni, (3) **automazione multimodale** (testo, voce, immagini, documenti) nei processi operativi. Il vantaggio competitivo non verrà da "avere l\'AI", ma da come la integri con dati, processi e responsabilità chiare.\n\n*Nota pratica:* ogni iniziativa AI dovrebbe avere baseline, KPI e piano di fallback prima del rilascio. <<Takeaway: scalano i team che trasformano l\'AI in processo, non solo in feature>>.',
        media: [
          { type: 'video', title: 'Trend AI di prodotto 2026-2030', description: 'Panoramica sui pattern emergenti: copilot verticali, agent governati e multimodalità.', placeholderPath: 'media/ch15-future-ai/sec-02/video.mp4', notes: 'placeholder' }
        ]
      },
      {
        title: 'Opportunità, rischi e governance nel lungo periodo',
        content: 'Le opportunità sono enormi: ricerca scientifica accelerata, salute più personalizzata, formazione adattiva, produttività diffusa. I rischi sono altrettanto concreti: concentrazione di potere, automazione senza tutele, disinformazione scalabile, errori ad alto impatto in settori sensibili.\n\nLa domanda utile non è "AI sì o no", ma **quale AI, con quali controlli, per quali decisioni**. Struttura minima di governance: classificazione rischio, human-in-the-loop nei casi critici, audit trail, monitoraggio continuo e revisione periodica delle policy.',
        media: [
          { type: 'infographic', title: 'Matrice Opportunità-Rischio-Mitigation', description: 'Framework pratico per valutare valore, impatto e controlli necessari.', placeholderPath: 'media/ch15-future-ai/sec-03/infographic.png', notes: 'placeholder' }
        ]
      },
      {
        title: 'Errore comune + Check rapido',
        content: '**Errore comune:** confondere trend mediatico con priorità strategica del proprio contesto.\n\n**Check rapido (2 min):** scegli un caso AI del tuo dominio e rispondi:\n1) quale problema reale risolve?\n2) quale rischio operativo introduce?\n3) quale controllo metti prima del rollout?',
        media: [
          { type: 'podcast', title: 'Podcast — Strategia AI senza hype', description: 'Come tradurre trend futuri in scelte operative sostenibili.', placeholderPath: 'media/ch15-future-ai/sec-04/podcast.mp3', notes: 'placeholder' }
        ]
      }
    ],
    keyTakeaways: [
      'Narrow AI e AGI sono concetti diversi: confonderli porta a decisioni strategiche errate',
      'Nei prossimi anni vinceranno i team che integrano AI in workflow misurabili e governati',
      'Opportunità e rischi crescono insieme: valore senza controllo aumenta il debito operativo',
      'Governance minima: KPI, escalation umana, audit trail, monitoraggio continuo',
      'Learning outcome: costruire una mini roadmap AI con priorità, rischi e metriche di verifica',
    ],
    discussionPrompts: [
      'Nel tuo settore, quale attività cambierà prima con AI: analisi, decisione o esecuzione?',
      'Quali decisioni non automatizzeresti mai senza revisione umana obbligatoria?',
      'Come misureresti se un progetto AI “futuro-oriented” sta creando valore reale oggi?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 15', description: 'Scenari futuri AI e scelte strategiche per i prossimi anni.', estimatedDuration: '9-11 min', placeholderPath: 'media/ch15-future-ai/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 15', description: 'Versione audio su trend, impatti e governance del futuro AI.', estimatedDuration: '12-16 min', placeholderPath: 'media/ch15-future-ai/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 15', description: 'Mappa scenari 2026-2030 con opportunità, rischi e controlli consigliati.', placeholderPath: 'media/ch15-future-ai/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Template roadmap AI con KPI, rischi e azioni di mitigazione.', placeholderPath: 'media/ch15-future-ai/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Roadmap AI 12 mesi (self-paced, senza coding)',
        objective: 'Definire una roadmap AI realistica per un team o una startup bilanciando valore, rischio e governance.',
        duration: '20-30 min',
        steps: [
          'Apri il dataset train CH15 e seleziona 4 scenari con priorità differenti (efficienza, qualità, compliance, crescita).',
          'Per ogni scenario assegna priorità (alta/media/bassa) e indica il principale rischio operativo.',
          'Confronta le tue scelte con validation CH15 e correggi almeno un caso dove la mitigazione era insufficiente.',
          'Scegli uno scenario finale e definisci 3 KPI per i prossimi 90 giorni: impatto, qualità, rischio.'
        ],
        deliverable: 'Checkpoint personale: tabella scenario → priorità → rischio → mitigazione → KPI (90 giorni).',
        resources: [
          { label: 'Dataset train CH15 (CSV)', path: '/datasets/ch15-future-scenarios/train.csv' },
          { label: 'Dataset validation CH15 (CSV)', path: '/datasets/ch15-future-scenarios/validation.csv' },
          { label: 'Schema campi CH15 (JSON)', path: '/datasets/ch15-future-scenarios/schema.json' }
        ]
      }
    ],
    quiz: [
      {
        question: 'Qual è la differenza più corretta tra narrow AI e AGI?',
        options: [
          'Narrow AI è specializzata, AGI implicherebbe adattamento generale multi-dominio',
          'Sono sinonimi usati in modo diverso dai media',
          'AGI è un tipo di database per modelli avanzati',
          'Narrow AI è sempre non supervisionata, AGI sempre supervisionata',
        ],
        correct: 0,
        explanation: 'La narrow AI eccelle in task specifici; AGI descrive capacità trasversali e adattive non ancora raggiunte.'
      },
      {
        question: 'Scenario: un team adotta un copilot su assistenza clienti. Quale KPI è più utile per misurare valore reale?',
        options: [
          'Riduzione tempo medio risposta con tasso di risoluzione corretta stabile',
          'Numero di prompt inviati al giorno',
          'Numero di pagine della documentazione interna',
          'Tempo medio di avvio del browser',
        ],
        correct: 0,
        explanation: 'Velocità senza qualità non basta: il KPI deve combinare efficienza e correttezza.'
      },
      {
        question: 'Quale rischio aumenta quando un agent può eseguire tool senza limiti o approvazioni?',
        options: [
          'Azioni non autorizzate e incidenti operativi ad alto impatto',
          'Riduzione automatica del debito tecnico',
          'Eliminazione della necessità di logging',
          'Maggiore spiegabilità del modello',
        ],
        correct: 0,
        explanation: 'La governance di agent richiede confini chiari su tool, budget e azioni sensibili.'
      },
      {
        question: 'In ottica strategica, quale decisione è più matura?',
        options: [
          'Partire da use case con baseline e KPI prima di scalare',
          'Avviare 20 iniziative AI contemporaneamente senza priorità',
          'Scegliere tecnologie solo in base all’hype',
          'Valutare i risultati solo a fine anno',
        ],
        correct: 0,
        explanation: 'La scalabilità sostenibile parte da sperimentazioni misurabili e progressive.'
      },
      {
        question: 'Scenario: un progetto AI aumenta produttività, ma genera errori critici in casi sensibili. Cosa fai?',
        options: [
          'Introduci escalation umana e regole di fallback sui casi ad alto rischio',
          'Ignori gli errori perché la media è migliorata',
          'Aumenti solo la lunghezza del prompt',
          'Rimuovi completamente ogni monitoraggio',
        ],
        correct: 0,
        explanation: 'Quando cresce il rischio sui casi critici, il controllo umano è prioritario rispetto alla sola velocità.'
      },
      {
        question: 'Quale combinazione rappresenta meglio una governance minima per iniziative AI future-ready?',
        options: [
          'Classificazione rischio + KPI + audit trail + review periodica',
          'Solo policy legale statica',
          'Solo benchmark di latenza',
          'Solo scelta del modello più recente',
        ],
        correct: 0,
        explanation: 'Serve un sistema operativo completo: rischio, metriche, tracciabilità e miglioramento continuo.'
      },
      {
        question: 'Quale segnale indica che un progetto AI sta creando valore reale e non solo effetto demo?',
        options: [
          'Migliora KPI di business mantenendo sotto controllo incidenti e rework',
          'Riceve molti like interni nella presentazione',
          'Usa il modello più grande disponibile',
          'Ha il maggior numero di slide nel kick-off',
        ],
        correct: 0,
        explanation: 'Il valore reale emerge da impatto misurabile e qualità operativa nel tempo.'
      },
      {
        question: 'Scenario pubblico: contenuti sintetici generati automaticamente senza verifica fonte. Rischio principale?',
        options: [
          'Disinformazione scalabile con perdita di fiducia',
          'Riduzione del costo cloud',
          'Miglioramento automatico della compliance',
          'Eliminazione della necessità di editor umani',
        ],
        correct: 0,
        explanation: 'Senza verifica delle fonti, l’errore si propaga rapidamente su larga scala.'
      },
      {
        question: 'Se il tuo dominio cambia ogni settimana (policy, cataloghi, prezzi), quale scelta iniziale è più robusta?',
        options: [
          'RAG con base documentale aggiornata e tracciabilità fonti',
          'Fine-tuning continuo senza governance',
          'Zero-shot senza monitoraggio',
          'Disattivare fallback per velocità',
        ],
        correct: 0,
        explanation: 'Con conoscenza dinamica, retrieval aggiornabile offre maggiore controllo e sostenibilità.'
      },
      {
        question: 'Messaggio chiave del Capitolo 15:',
        options: [
          'Futuro AI efficace = scelte progressive, metriche chiare e governance operativa',
          'Il futuro dipende solo dalla potenza del modello',
          'Basta accelerare senza controlli per vincere il mercato',
          'Etica e sicurezza rallentano sempre e vanno ridotte',
        ],
        correct: 0,
        explanation: 'La crescita AI sostenibile unisce innovazione, qualità e responsabilità in un unico processo.'
      }
    ]
  }
];
