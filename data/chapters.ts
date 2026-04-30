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
      { title: 'AI vs Intelligenza Umana', content: 'L\'intelligenza artificiale *non pensa come gli umani*. Mentre un bambino impara a riconoscere i cani da pochi esempi, l\'AI ha bisogno di migliaia di immagini di cani per lo stesso compito. La differenza fondamentale: gli umani comprendono il significato, l\'AI fa **riconoscimento di pattern** nei dati. Questo significa che il modello apprende correlazioni statistiche che *simulano* comprensione, ma non possiede semantica umana reale. In pratica: valida sempre il contesto prima di usare un output AI; AI e una leva, non un oracolo.', media: [ { type: 'infographic', title: 'AI vs Intelligenza Umana — visual', description: 'Confronto visivo tra apprendimento umano e apprendimento AI.', placeholderPath: 'media/ch01-what-is-ai/sec-01/infographic.png', notes: 'ready' }, { type: 'video', title: 'Video — AI vs Intelligenza Umana', description: 'Mini video sul confronto tra apprendimento umano e pattern recognition AI.', placeholderPath: 'media/ch01-what-is-ai/sec-01/video.mp4', notes: 'ready' } ] },
      { title: "L'AI nella Vita Quotidiana", content: 'Ogni giorno interagiamo con l\'AI senza rendercene conto: Spotify suggerisce musica basandosi sui tuoi ascolti, Netflix consiglia film simili a quelli che hai guardato, Alexa risponde ai tuoi comandi vocali. Questo è **sistema di raccomandazione basato su dati**. *Utile non significa infallibile*: sembra intelligente, ma sta facendo predizione statistica. Caso pratico: se Netflix ti propone film sbagliati per una settimana, il KPI di qualità della raccomandazione sta calando e il sistema va ricalibrato.', media: [ { type: 'infographic', title: 'AI nella vita quotidiana', description: 'Infografica sui sistemi di raccomandazione e assistenti vocali.', placeholderPath: 'media/ch01-what-is-ai/sec-02/infographic.png', notes: 'ready' } ] },
      { title: "Startup Lens", content: "Per un MVP startup, usa AI dove riduce tempo operativo in modo misurabile: supporto clienti, classificazione ticket, suggerimenti contenuto. Definisci **KPI misurabili** (tempo medio risposta, tasso risoluzione, error rate) prima del rilascio. <<Niente AI in produzione senza metrica di controllo>>.", media: [ { type: 'infographic', title: 'AI per Startup: KPI e controllo', description: 'Infografica strategica su casi d’uso MVP e metriche di controllo.', placeholderPath: 'media/ch01-what-is-ai/sec-03/infographic.png', notes: 'ready' } ] },
      { title: "Errore comune + Mini esercizio", content: "**Errore comune:** trattare l'AI come fonte di verita assoluta. Mini esercizio (15 min): prendi 3 risposte AI su un tema tecnico, verifica fonti, segna cosa era corretto, ambiguo o errato, poi riscrivi una risposta validata. Rubrica rapida di validazione: (1) **Dataset check**: i dati sono rappresentativi o sbilanciati? (2) **Output check**: dove sbaglia più spesso il modello? (3) **KPI check**: quale metrica minima (precisione, recall o errore medio) useresti per dire che il sistema funziona? <<Usa AI come copilota, non come verita assoluta>>.", media: [ { type: 'infographic', title: 'AI copilota: metodo di validazione', description: 'Infografica sul metodo pratico di verifica e riscrittura delle risposte AI.', placeholderPath: 'media/ch01-what-is-ai/sec-04/infographic.png', notes: 'ready' }, { type: 'podcast', title: 'Podcast sezione — Errore comune e validazione', description: 'Mini podcast dedicato all\'errore più comune con AI e metodo di controllo pratico.', placeholderPath: 'media/ch01-what-is-ai/sec-04/podcast.mp3', notes: 'ready' } ] },
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
      { title: "Production Warning + Task", content: "**Warning:** senza monitoraggio post-deploy, il modello degrada nel tempo (data drift). Task (20 min): definisci 4 metriche da monitorare in produzione:\n- **Accuracy proxy** (qualità percepita/precisione su campioni verificati)\n- **Latenza** (tempo medio risposta)\n- **Fallback rate** (quante richieste vanno su fallback/manuale)\n- **Segnalazioni utente** (errori reali riportati in uso)\n<<Nessun modello è 'finito' dopo il deploy: va osservato continuamente>>." },
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
      { title: "Errore comune + Mini esercizio", content: "Errore comune: valutare il modello solo su test set statico. Mini esercizio: crea 5 esempi edge-case e verifica se il modello risponde in modo coerente; annota failure pattern e possibile correzione dati.", media: [ { type: 'podcast', title: 'Podcast — Errore comune: testare solo su dati statici', description: 'Micro-podcast sull\'errore di validation e come costruire edge-case robusti.', placeholderPath: 'media/ch03-data-importance/sec-04/podcast.mp3', notes: 'placeholder' } ] },
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
      { title: 'Overfitting e Underfitting', content: '**Overfitting**: quando l\'algoritmo memorizza i dati di training invece di apprendere pattern generali. È come studiare gli esami passati a memoria e andare in crisi quando cambiano le domande. **Underfitting**: quando il modello è troppo semplice per catturare i pattern rilevanti. Segnale pratico rapido: training score alto + validation score basso = overfitting; training e validation entrambi bassi = underfitting. La sfida è trovare equilibrio tra semplicità e capacità di generalizzare su dati nuovi. *Nota pratica:* valuta sempre il modello su dati mai visti, non solo su quelli di training. <<Takeaway: scegli il modello che regge meglio nel reale, non quello che "brilla" solo in training>>.', media: [ { type: 'video', title: 'Video — Overfitting vs Underfitting', description: 'Confronto visivo dei due errori con pattern diagnostici training/validation.', placeholderPath: 'media/ch04-machine-learning/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: "Caso reale", content: "Nel forecasting delle vendite, un modello lineare può battere modelli più complessi quando i dati sono pochi, puliti e relativamente stabili nel tempo. In pratica non scegli il modello più sofisticato, ma quello che mantiene performance stabili sui dati nuovi del tuo scenario reale.", media: [ { type: 'infographic', title: 'Scelta modello nel forecasting', description: 'Mini framework decisionale: semplicità vs complessità in base al contesto dati.', placeholderPath: 'media/ch04-machine-learning/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: "Production Warning + Task", content: "**Warning:** ottimizzare solo l'accuracy può nascondere errori gravi, soprattutto quando alcune classi sono rare ma importanti. **Task (20 min):** scegli due metriche aggiuntive — ad esempio precision e recall per classificazione, oppure MAE e MAPE per regressione — e spiega in quale scenario reale le useresti al posto dell'accuracy.", media: [ { type: 'podcast', title: 'Podcast — Accuracy non basta', description: 'Mini deep dive su scelta metrica e trade-off in produzione.', placeholderPath: 'media/ch04-machine-learning/sec-04/podcast.mp3', notes: 'placeholder' } ] },
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
    codeSnippets: [
      {
        lang: 'python',
        label: 'Esempio: Linear Regression con scikit-learn',
        code: '# Linear Regression con scikit-learn\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Dati di training: ore di studio -> voto\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([55, 65, 70, 80, 90])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# Previsione: 6 ore di studio\npred = model.predict([[6]])\nprint(f"Voto previsto: {pred[0]:.1f}")  # -> ~98'
      },
      {
        lang: 'python',
        label: 'Esempio: Classificazione con Decision Tree',
        code: '# Decision Tree con scikit-learn\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.model_selection import train_test_split\n\n# Dati: [ore_studio, ore_sonno] -> promosso (1) o no (0)\nX = [[2, 4], [5, 7], [1, 3], [6, 8], [3, 5], [7, 9]]\ny = [0, 1, 0, 1, 0, 1]\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\nclf = DecisionTreeClassifier(max_depth=3)\nclf.fit(X_train, y_train)\naccuracy = clf.score(X_test, y_test)\nprint(f"Accuratezza test: {accuracy:.0%}")  # valuta sempre su dati non visti'
      }
    ],
    discussionPrompts: [
      'Come potremmo testare se un modello sta soffrendo di overfitting?',
      'In quali situazioni reali è più rischioso l\'overfitting vs underfitting?',
      'Se un algoritmo impiega 1000 cicli per imparare, cosa succede al ciclo 1001?'
    ]
    ,quiz: [
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
      { title: "Errore comune + Mini esercizio", content: "**Errore comune:** aumentare layer senza una strategia di validazione. **Mini esercizio (20 min):** confronta due architetture (piccola vs più profonda) sullo stesso dataset e valuta tre aspetti: generalizzazione su validation, tempo di training e facilità di interpretazione.", media: [ { type: 'podcast', title: 'Podcast — Profondità con criterio', description: 'Trade-off pratici tra profondità, costo e robustezza.', placeholderPath: 'media/ch05-neural-networks/sec-04/podcast.mp3', notes: 'placeholder' } ] },
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
      { title: 'Da Testo a Numeri', content: 'I computer non capiscono le parole. Devono convertire le parole in numeri. Processo: (1) **Token**izzazione — spezza il testo in parole o sub-parole, (2) Embedding — trasforma ogni token in un vettore di numeri che rappresenta il significato. Esempio: la parola "re" potrebbe essere [0.2, 0.8, -0.1, ...]. Parole simili hanno embedding simili. In una app reale servono anche fallback, validazione e gestione contesto, per mantenere alta la qualita percepita. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Il contesto guida la qualità: prompt e tokenizzazione fanno la differenza>>.' },
      { title: 'Transformer e Attention', content: 'Transformer è l\'architettura usata da ChatGPT. L\'innovation chiave è **Attention**: il modello decide automaticamente quale parte del testo è importante per fare una previsione. Se leggi "Il gatto ha mangiato il pesce", Attention capisce che "gatto" è importante per il verbo "ha mangiato", non "il". Questa capacità di focus è rivoluzionaria. In una app reale servono anche fallback, validazione e gestione contesto, per mantenere alta la qualita percepita. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Il contesto guida la qualità: prompt e tokenizzazione fanno la differenza>>.' }
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
      { title: 'Convolutional Neural Networks', content: '**CNN** (Convolutional Neural Networks) sono specializzate per le immagini. Invece di guardare ogni pixel individualmente, usano "filtri" che scansionano piccole aree dell\'immagine. Un filtro potrebbe cercare linee verticali, un altro linee orizzontali, un altro curve. I layer iniziali trovano feature semplici (angoli), i layer profondi trovano feature complesse (occhi, nasi, volti). Prima del deploy testa condizioni reali come luce, angoli e qualita camera per evitare regressioni fuori laboratorio. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Testa in condizioni reali, non solo su dataset da laboratorio>>.' },
      { title: 'Riconoscimento di Oggetti', content: 'Il processo è semplice: (1) immagine entra come matrice di pixel, (2) filter **CNN** estraggono feature in modo gerarchico, (3) alla fine, il modello produce probabilità per ogni classe. Esempio: "Riconosco un cane con 95% probabilità, un gatto con 3%, nient\'altro con 2%". Ma il sistema può sbagliare: una foto sfocata, un cane in posa strana, condizioni di luce scarsa — questi sono gli edge case che confondono l\'AI. Prima del deploy testa condizioni reali come luce, angoli e qualita camera per evitare regressioni fuori laboratorio. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Testa in condizioni reali, non solo su dataset da laboratorio>>.' }
    ],
    keyTakeaways: [
      'Immagine = griglia di pixel (numeri)',
      'CNN usa filtri per estrarre feature',
      'Più layer = feature sempre più astratte',
      'Transfer learning accelera il training',
      'Learning outcome: valutare un caso vision e identificare almeno un edge-case critico',
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
      { title: 'Come Funziona un LLM', content: '**LLM** (Large Language Model) come ChatGPT predicono la prossima parola basandosi su tutte le parole precedenti. Processo: (1) ricevi un prompt, (2) il modello calcola probabilità per ogni possibile parola successiva (50.000+ possibilità), (3) sceglie la più probabile, (4) aggiunge quella parola al testo, (5) ripete. È come completamento automatico su sterodi. ChatGPT ha 175 miliardi di parametri — numeri che il modello ha imparato dai dati. Framework consigliato: prompt chiaro, verifica fonti, revisione umana e logging delle risposte critiche. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Output fluido non significa output corretto: verifica sempre>>.' },
      { title: 'Prompt Engineering', content: 'Il prompt è cruciale. Diversi prompt portano a risultati completamente diversi. "Dimmi un articolo su AI" è vago. "Scrivi un articolo di 500 parole su come l\'AI cambierà il marketing, rivolto a CMO di startup" è specifico e dettagliato. Migliore il prompt, migliore il risultato. Questo è diventato una skill: "**Prompt Engineering**". Framework consigliato: prompt chiaro, verifica fonti, revisione umana e logging delle risposte critiche. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Output fluido non significa output corretto: verifica sempre>>.' }
    ],
    keyTakeaways: [
      'LLM predice la prossima parola basandosi sul pattern',
      'ChatGPT ha 175 miliardi di parametri',
      'Il prompt shape l\'output in modo drammatico',
      'Context length limita quanto ricorda',
      'Learning outcome: progettare un prompt robusto e verificare un output generativo',
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
      { title: 'Transfer Learning', content: '**Transfer Learning** è un trucco intelligente: invece di addestrare un modello da zero (che richiede milioni di immagini e settimane di calcolo), usi un modello già addestrato su dati generali e lo "adatti" ai tuoi dati specifici. Esempio: un modello addestrato su ImageNet (1 milione di immagini di oggetti comuni) può essere adattato per riconoscere malattie in radiografie mediche con solo 10.000 immagini. La scelta tra RAG e fine tuning dipende da frequenza aggiornamento, costo operativo e accuratezza richiesta. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Decidi tra fine-tuning e RAG in base a costo, aggiornamento e accuratezza>>.' },
      { title: 'Fine-tuning vs Zero-shot', content: '**Fine-tuning** significa addestrare ancora il modello, ma solo leggermente, con i tuoi dati. Zero-shot significa usare il modello senza ulteriore allenamento. Esempio di zero-shot: ChatGPT può scrivere codice senza mai aver visto i tuoi progetti — perché ha visto miliardi di linee di codice. Fine-tuning porterebbe risultati ancora migliori se glielo insegni specificamente. La scelta tra RAG e fine tuning dipende da frequenza aggiornamento, costo operativo e accuratezza richiesta. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Decidi tra fine-tuning e RAG in base a costo, aggiornamento e accuratezza>>.' }
    ],
    keyTakeaways: [
      'Transfer learning = addestramento più veloce',
      'Fine-tune su dati specifici per adattare il modello',
      'Richiede meno data che addestrare da zero',
      'RAG = alternativa al fine-tuning',
      'Learning outcome: decidere quando usare fine-tuning o RAG su un caso di prodotto',
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
      { title: 'Bias e Discriminazione', content: 'I **bias** non sono buoni o cattivi intenzionalmente — riflettono semplicemente i dati di training. Se alleni un sistema di approvazione prestiti su dati storici dove le minoranze avevano tassi di default più alti (a causa di discriminazione sistemica passata), il sistema imparerà questa discriminazione e la perpetuerà. È come insegnare a qualcuno usando solo esempi distorti. Operativamente definisci policy esplicite: cosa il sistema decide da solo e dove serve approvazione umana. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Accuratezza senza responsabilità può creare danni reali>>.' },
      { title: 'Trasparenza e Spiegabilità', content: 'Le persone hanno il diritto di sapere perché l\'AI ha preso una decisione su di loro. Se una banca ti nega un prestito, hai diritto di chiedere perché. Ma le reti neurali sono "black box" — è difficile spiegare quale combinazione di fattori ha portato alla decisione. La GDPR in Europa lo richiede: le aziende devono rendere conto delle decisioni AI. Operativamente definisci policy esplicite: cosa il sistema decide da solo e dove serve approvazione umana. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Accuratezza senza responsabilità può creare danni reali>>.' }
    ],
    keyTakeaways: [
      'AI riflette i bias nei dati di training',
      'Amazon hiring system discriminava le donne',
      'Explainability = capacità di spiegare perché',
      'La trasparenza è un diritto (GDPR)',
      'Learning outcome: identificare un rischio etico e proporre una mitigazione operativa',
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
      { title: 'I 4 Livelli di Rischio', content: 'L\'**AI Act** categorizza i sistemi in 4 livelli: (1) VIETATO — es. riconoscimento facciale in tempo reale senza consenso, (2) ALTO RISCHIO — es. decisioni su prestiti/assunzioni, (3) LIMITATO — es. chatbot che deve rivelare di essere AI, (4) MINIMO — chatbot amichevole, giochi. Più il rischio, più obblighi di documentazione, test, trasparenza. Per team moderni compliance significa integrare checklist legali e tecniche nella Definition of Done. Mini framework operativo: classifica il caso d\'uso, mappa il livello di rischio, definisci obblighi minimi prima del deploy. <<Takeaway: Compliance va progettata nel prodotto, non aggiunta alla fine>>.' },
      { title: 'Obblighi per Sviluppatori', content: 'Se sviluppi un sistema AI ad **alto rischio**, devi: (1) registrarlo, (2) fare assessment di impatto, (3) documentare tutto, (4) fare test di robustezza e sicurezza, (5) avere un sistema per gestire reclami, (6) notificare le autorità di problemi seri. Non conformità = multa fino al 6% del fatturato globale. È come la GDPR ma per AI. Checklist minima prima del rilascio: documentazione aggiornata, test ripetibili, ownership chiara, piano incidenti. <<Takeaway: Compliance va progettata nel prodotto, non aggiunta alla fine>>.' }
    ],
    keyTakeaways: [
      'Rischio Vietato = divieto totale',
      'Alto rischio = obbligo di assessment',
      'Devi mantenere documentazione completa',
      'Non conformità = multe salate',
      'Learning outcome: classificare un caso AI per rischio e definire requisiti minimi di compliance',
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
      { title: 'Automazione e Nuovi Ruoli', content: 'L\'AI automatizza lavori ripetitivi: data entry, customer service di base, revisione documenti iniziale. Questi ruoli spariranno. Ma nascono nuovi ruoli: prompt engineer (persona che sa scrivere buoni prompt), AI trainer (prepara dati per l\'allenamento), AI ethicist (assicura che l\'AI sia etica), data scientist, ML engineer. Il mercato si trasforma, non scompare. Il vero vantaggio non e usare tool AI, ma orchestrare processi dove AI e competenze umane si completano. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: AI amplifica chi sa pensare criticamente e validare risultati>>.' },
      { title: 'Competenze Richieste', content: 'Le competenze critiche per il futuro: (1) **Critical Thinking** — l\'AI non pensa criticamente, tu sì, (2) Comunicazione — spiegare bene le cose rimane umano, (3) Creatività — generare nuove idee, (4) Adattabilità — il mondo cambia velocemente. Imparare a usare ChatGPT, Copilot, Cursor non è il futuro — capire come usarli bene per il tuo dominio specifico lo è. Il vero vantaggio non e usare tool AI, ma orchestrare processi dove AI e competenze umane si completano. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: AI amplifica chi sa pensare criticamente e validare risultati>>.' }
    ],
    keyTakeaways: [
      'L\'AI automatizza compiti ripetitivi',
      'Nuovi ruoli: prompt engineer, AI trainer, ethicist',
      'Critical thinking rimane insostituibile',
      'Lifelong learning è obbligatorio',
      'Learning outcome: mappare task automatizzabili e skill umane ad alto valore',
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
      { title: 'ChatGPT e Assistenti Vocali', content: '**ChatGPT** è uno strumento potente ma non è infallibile. Può sembrare sicuro ma sbagliare tranquillamente. Regola d\'oro: usa ChatGPT per brainstorm, drafting, debugging — ma SEMPRE verifica il risultato finale. Non credere al 100% a quello che dice. Per assistenti vocali (Alexa, Siri): sono utili per automazione domestica e richieste semplici, ma la privacy è una considerazione seria. Pattern consigliato: bozza con AI, revisione esperta, test reale e rilascio controllato con feedback loop. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: AI come copilot: bozza, review umana, test, rilascio>>.' },
      { title: 'AI per Sviluppatori', content: '**Copilot** (GitHub Copilot) ti auto-completa il codice. Cursor è un IDE che integra AI per aiutarti a scrivere meglio. CodeWhisperer (Amazon) fa la stessa cosa. Questi tool accelerano lo sviluppo di 30-50%, ma non ti rendono superfluo — devi ancora capire il codice, rivedere le suggestions, correggere gli errori. Pattern consigliato: bozza con AI, revisione esperta, test reale e rilascio controllato con feedback loop. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: AI come copilot: bozza, review umana, test, rilascio>>.' }
    ],
    keyTakeaways: [
      'ChatGPT non è infallibile',
      'Copilot accelera lo sviluppo di codice',
      'Fact-check sempre l\'output dell\'AI',
      'Prompt quality = risultati migliori',
      'Learning outcome: usare AI tool con workflow di review e quality gate',
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
      { title: 'RAG (Retrieval-Augmented Generation)', content: '**RAG** combina due cose: Retrieval (cercare documenti rilevanti da una knowledge base) + Generation (usare quel contenuto per generare una risposta). Esempio: invece di fare fine-tuning di ChatGPT su 10.000 documenti aziendali, usi RAG: dai a ChatGPT il documento rilevante + il prompt, e lui genera la risposta basato su quell\'informazione. È più flessibile e facile da aggiornare. Prima di usare tool sensibili inserisci guardrail, osservabilita e audit trail per limitare rischi operativi. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Agents e tool-use richiedono guardrail e audit trail>>.' },
      { title: 'AI Agents', content: 'Un AI Agent è un sistema che prende decisioni autonome e usa tool per agire. Esempio: un agent che riceve il task "prenota un volo da Roma a Milano il 15 giugno", e lui: (1) usa uno strumento di ricerca per trovare voli, (2) usa uno strumento di pagamento per prenotare, (3) invia una conferma email. Non hai dato istruzioni step-by-step — l\'agent ha **rag**ionato e agito autonomamente. Prima di usare tool sensibili inserisci guardrail, osservabilita e audit trail per limitare rischi operativi. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Agents e tool-use richiedono guardrail e audit trail>>.' }
    ],
    keyTakeaways: [
      'RAG = LLM + knowledge base',
      'Agents possono usare tool autonomamente',
      'Orchestrazione di più modelli = power',
      'Chain-of-thought = reasoning migliore',
      'Learning outcome: disegnare un flusso RAG/Agent con guardrail essenziali',
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
      { title: 'AGI: Artificial General Intelligence', content: '**AGI** (Artificial General Intelligence) è il "santo graal" dell\'AI — una sistema intelligente quanto l\'umano, in grado di risolvere qualsiasi problema. Non siamo lontani, ma non siamo nemmeno vicini come alcuni credono. Attuali LLM sono "narrow AI" — bravi in un dominio specifico (linguaggio) ma fragili in altri. AGI significherebbe: ragionamento profondo, problem-solving creativo, adattamento a situazioni nuove. Prepararsi al futuro significa costruire ora basi solide: qualita dati, cultura sperimentale e governance responsabile. Criterio pratico: separa hype e realtà chiedendo sempre evidenze misurabili, limiti dichiarati e rischi operativi. <<Takeaway: Innovazione AI sostenibile richiede equilibrio tra valore, etica e sicurezza>>.' },
      { title: 'Opportunità e Rischi', content: '**Opportunità**: l\'AI potrebbe risolvere il cambiamento climatico, scoprire nuovi farmaci, migliorare l\'educazione. Rischi: automazione di massa disoccupazione, concentrazione di potere in poche aziende, AI usata per sorveglianza/controllo, armi autonome. La domanda non è "l\'AI è buona o cattiva?" ma "come regoliamo l\'AI per massimizzare i benefici e minimizzare i danni?" Framework decisionale rapido: per ogni opportunità, mappa rischio, impatto e mitigazione prima del rollout. <<Takeaway: Innovazione AI sostenibile richiede equilibrio tra valore, etica e sicurezza>>.' }
    ],
    keyTakeaways: [
      'AGI non è ancora qui, ma è il goal',
      'L\'AI cambierà ogni industria',
      'Imparare ora = vantaggio competitivo',
      'Etica e sicurezza sono fondamentali',
      'Learning outcome: argomentare opportunità e rischi AI con criteri tecnici ed etici',
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
