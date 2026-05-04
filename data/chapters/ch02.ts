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
        question: "Quale descrizione rappresenta meglio i 3 pilastri dell'AI?",
        options: [
          "Dati, algoritmo e potenza di calcolo che lavorano insieme",
          "Solo prompt e interfaccia",
          "Solo hardware potente",
          "Solo dataset molto grande",
        ],
        correct: 0,
        explanation: "La qualità emerge dall\'equilibrio tra tutti e tre i pilastri."
      },
      {
        question: "Hai tantissimi dati ma rumorosi: cosa è più probabile?",
        options: [
          "Il modello generalizza meglio automaticamente",
          "Il modello apprende rumore e peggiora nel reale",
          "Il modello diventa più etico",
          "L\'algoritmo non serve più",
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
        question: "Nel task \"Production Warning\", quale metrica aiuta a capire quante richieste non regge il modello?",
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
        explanation: "La stabilità AI nasce dall\'equilibrio complessivo, non da un singolo elemento."
      }
    ]
};
