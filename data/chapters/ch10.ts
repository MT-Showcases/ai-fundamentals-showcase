import type { Chapter } from '../types';

export const ch10: Chapter = {
    id: 10,
    slug: 'ethics-ai',
    title: "Etica e Responsabilità nell'AI",
    description: "Quando l\'AI fa male",
    sections: [
      { title: 'Bias e Discriminazione', content: "I bias nei dati possono diventare decisioni ingiuste su persone reali.\n\n*Nota pratica:* non basta accuracy globale: analizza l\'impatto sui sottogruppi. <<Takeaway: performance senza fairness può creare danni concreti>>." },
      { title: 'Trasparenza e Spiegabilità', content: "Nei contesti sensibili serve spiegare come e perché il sistema decide.\n\n*Nota pratica:* definisci logging decisionale e revisione umana dove necessario. <<Takeaway: trasparenza è requisito operativo>>." },
      { title: 'Startup Lens', content: "Governance minima: policy d\'uso, livelli di rischio, escalation umana, audit periodici e tracciamento incidenti." },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** trattare l\'etica come documento e non come processo tecnico.\n\n**Check rapido (2 min):** indica una decisione del tuo use case che deve avere revisione umana obbligatoria." }
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
    challenge: {
      id: 'ch10-bias-credito',
      title: 'Trova il Bias — Algoritmo di Credito',
      intro: 'Un sistema AI valuta richieste di prestito. Alcune decisioni mostrano un pattern discriminatorio non immediato. Seleziona le righe che ritieni indicative di bias sistemico.',
      dataset: [
        { nome: 'Roberto M.', genere: 'M' as const, età: 34, città: 'Milano', assunto: true },
        { nome: 'Fatima A.', genere: 'F' as const, età: 32, città: 'Milano', assunto: false },
        { nome: 'Giovanni P.', genere: 'M' as const, età: 41, città: 'Roma', assunto: true },
        { nome: 'Amira K.', genere: 'F' as const, età: 38, città: 'Roma', assunto: false },
        { nome: 'Marco S.', genere: 'M' as const, età: 29, città: 'Torino', assunto: true },
        { nome: 'Yuki T.', genere: 'F' as const, età: 33, città: 'Milano', assunto: true },
        { nome: 'Luca B.', genere: 'M' as const, età: 55, città: 'Napoli', assunto: false },
        { nome: 'Priya R.', genere: 'F' as const, età: 28, città: 'Milano', assunto: false },
        { nome: 'Alessandro F.', genere: 'M' as const, età: 36, città: 'Roma', assunto: true },
        { nome: 'Layla H.', genere: 'F' as const, età: 31, città: 'Torino', assunto: false },
      ],
      correctIndices: [1, 3, 7, 9],
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice' as const,
          text: 'Osservando il dataset, quale combinazione di fattori sembra influenzare maggiormente le decisioni negative?',
          options: [
            { id: 'a', text: 'Età elevata e residenza nel Sud Italia' },
            { id: 'b', text: 'Nome di origine straniera + genere femminile' },
            { id: 'c', text: 'Provenienza da città diverse da Milano' },
            { id: 'd', text: 'Nessun pattern rilevante — le decisioni sembrano casuali' },
          ],
          correctIds: ['b'],
          feedback: {
            correct: "✅ Esatto! Il pattern emergente è l'intersezione tra nome percepito come straniero e genere femminile — un caso di bias intersezionale spesso invisibile nelle metriche aggregate.",
            partial: "⚠️ Parzialmente corretto — il pattern più significativo coinvolge una combinazione specifica di fattori. Riesamina le righe con nome di origine straniera.",
            wrong: "❌ Rianalizza con attenzione: confronta le righe con nomi di origine straniera vs italiana, poi considera anche il genere. Il bias intersezionale è più subdolo di un singolo fattore.",
          },
        },
        {
          id: 'q2',
          type: 'open-text' as const,
          text: 'Quali controlli tecnici o procedurali introdurresti per rilevare e mitigare questo bias prima del deploy in produzione?',
          placeholder: 'Es: analisi per sottogruppi, fairness metrics, human review, audit trail...',
          maxLength: 350,
          checklist: [
            { id: 'c1', text: 'Fairness metrics per sottogruppo', keywords: ['fairness', 'sottogruppo', 'demografico', 'parità', 'equità', 'disparate'] },
            { id: 'c2', text: 'Human review o supervisione umana', keywords: ['human', 'umana', 'revisione', 'supervisione', 'manuale', 'review'] },
            { id: 'c3', text: 'Audit trail e explainability', keywords: ['audit', 'tracciabilità', 'explain', 'spiegab', 'xai', 'logging', 'log'] },
          ],
        },
      ] as [import('../types').ChallengeQuestionMultipleChoice, import('../types').ChallengeQuestionOpenText],
    },
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 10',
        description: 'Video completo Capitolo 10: bias, explainability e governance etica operativa nei sistemi AI.',
        estimatedDuration: '9 min',
        placeholderPath: 'media/ch10-ethics-ai/video.mp4',
        notes: 'placeholder'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 10',
        description: 'Podcast di approfondimento su fairness, accountability e decisioni high-stakes.',
        estimatedDuration: '18 min',
        placeholderPath: 'media/ch10-ethics-ai/podcast.mp3',
        notes: 'ready'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 10',
        description: 'Etica e responsabilità nell\'AI: rischi principali (bias/opacità) e governance operativa con human review.',
        placeholderPath: 'media/ch10-ethics-ai/infographic.jpg',
        notes: 'ready'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Materiale scaricabile su policy, audit trail e controllo etico operativo.',
        placeholderPath: 'media/ch10-ethics-ai/handout.pdf',
        notes: 'placeholder'
      }
    ],
    quiz: [
      {
        question: 'Un sistema AI di screening CV scarta sistematicamente un gruppo demografico. Primo passo corretto?',
        options: [
          'Analizzare bias nei dati e nei criteri decisionali',
          'Aumentare subito il numero di layer',
          'Nascondere le feature sensibili e basta',
          'Disattivare tutti i log',
        ],
        correct: 0,
        explanation: 'Serve diagnosi strutturata delle cause di discriminazione.'
      },
      {
        question: 'Explainability è più critica quando:',
        options: [
          'Il modello è open-source',
          'Le decisioni impattano diritti/opportunità delle persone',
          'La latenza è sotto 100ms',
          'Il team è piccolo',
        ],
        correct: 1,
        explanation: 'Nei contesti ad alto impatto è necessario giustificare le decisioni.'
      },
      {
        question: 'Quale controllo riduce meglio il rischio in high-stakes AI?',
        options: [
          'Solo documentazione marketing',
          'Solo accuracy media',
          'Human-in-the-loop + escalation policy + audit trail',
          'Solo test una tantum',
        ],
        correct: 2,
        explanation: 'Servono controlli operativi continui, non solo dichiarazioni.'
      },
      {
        question: 'Nel dataset CH10, caso affects_persons=yes + bias_risk=high + explainability=high dovrebbe avere:',
        options: [
          'automated',
          'nessun controllo',
          'publish_direct',
          'human_review',
        ],
        correct: 3,
        explanation: 'Combinazione ad alto rischio richiede revisione umana.'
      },
      {
        question: 'Errore comune sulla governance AI:',
        options: [
          'Trattarla come processo continuo',
          'Ridurla a documento statico senza enforcement',
          'Definire ruoli e responsabilità',
          'Monitorare incidenti',
        ],
        correct: 1,
        explanation: 'Senza applicazione operativa, la governance non funziona.'
      },
      {
        question: 'Quale metrica è più utile per fairness monitoring?',
        options: [
          'Solo throughput API',
          'Solo costo GPU',
          'Delta di errore tra sottogruppi',
          'Solo numero utenti attivi',
        ],
        correct: 2,
        explanation: 'La fairness va misurata confrontando performance tra gruppi.'
      },
      {
        question: 'Privacy-by-design in AI implica:',
        options: [
          'Raccogliere tutti i dati possibili e filtrare dopo',
          'Nascondere il modello al team',
          'Disattivare backup',
          'Minimizzazione dati, controllo accessi e tracciabilità uso',
        ],
        correct: 3,
        explanation: 'Ridurre e proteggere i dati è parte del design, non post-processing.'
      },
      {
        question: 'Se un modello peggiora nel tempo su casi reali, quale pratica aiuta?',
        options: [
          'Audit periodico con retraining/recalibrazione controllata',
          'Ignorare feedback utente',
          'Cambiare UI',
          'Aumentare solo batch size',
        ],
        correct: 0,
        explanation: 'Il monitoraggio continuo intercetta drift e regressioni.'
      },
      {
        question: 'AI Act (approccio generale) enfatizza:',
        options: [
          'Solo numero di parametri',
          'Divieto di QA interna',
          'Classificazione per livello di rischio e obblighi proporzionati',
          'Assenza di documentazione',
        ],
        correct: 2,
        explanation: 'I requisiti aumentano con il rischio del sistema.'
      },
      {
        question: 'Messaggio chiave del capitolo 10:',
        options: [
          'Etica e compliance sono opzionali se il modello performa',
          'AI responsabile = performance tecnica + fairness + accountability + controllo umano dove serve',
          'Basta anonimizzare e tutto è risolto',
          'Solo il reparto legale deve occuparsene',
        ],
        correct: 1,
        explanation: 'Responsabilità AI è multidisciplinare e operativa.'
      }
    ]
};
