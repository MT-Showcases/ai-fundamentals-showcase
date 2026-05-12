import type { Chapter } from '../types';

export const ch10: Chapter = {
    id: 10,
    slug: 'ethics-ai',
    title: "Etica e Responsabilità nell'AI",
    description: "Quando l\'AI fa male",
    sections: [
      { title: 'Bias e Discriminazione', content: "I bias nei dati possono diventare decisioni ingiuste su persone reali.\n\n*Nota pratica:* non basta accuracy globale: analizza l\'impatto sui sottogruppi.  Una pratica matura richiede principi di **Etica AI**, gestione degli **Edge Case** e **Guardrail** operativi. <<Takeaway: performance senza fairness può creare danni concreti>>." },
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
    challenge: {
      id: 'ch10-bias-credito-table-review',
      title: 'Bias Review Interattivo — Credito',
      intro: 'Analizza il dataset come reviewer etico: trova le decisioni sospette e i gruppi più esposti a bias. Verifica solo alla fine.',
      scoringMode: 'balanced',
      table: {
        columns: ['applicant_id', 'genere', 'citta', 'income_band', 'credit_history', 'model_decision'],
        rows: [
          { applicant_id: 'CR-001', genere: 'M', citta: 'Milano', income_band: 'medium', credit_history: 'good', model_decision: 'approved' },
          { applicant_id: 'CR-002', genere: 'F', citta: 'Milano', income_band: 'medium', credit_history: 'good', model_decision: 'rejected' },
          { applicant_id: 'CR-003', genere: 'M', citta: 'Roma', income_band: 'medium', credit_history: 'good', model_decision: 'approved' },
          { applicant_id: 'CR-004', genere: 'F', citta: 'Roma', income_band: 'medium', credit_history: 'good', model_decision: 'rejected' },
          { applicant_id: 'CR-005', genere: 'M', citta: 'Torino', income_band: 'low', credit_history: 'limited', model_decision: 'rejected' },
          { applicant_id: 'CR-006', genere: 'F', citta: 'Torino', income_band: 'low', credit_history: 'limited', model_decision: 'rejected' },
          { applicant_id: 'CR-007', genere: 'M', citta: 'Napoli', income_band: 'high', credit_history: 'good', model_decision: 'approved' },
          { applicant_id: 'CR-008', genere: 'F', citta: 'Napoli', income_band: 'high', credit_history: 'good', model_decision: 'rejected' }
        ]
      },
      phases: [
        {
          id: 'bias-cells',
          title: 'Fase 1',
          instruction: 'Seleziona le celle model_decision potenzialmente discriminatorie rispetto a casi equivalenti.',
          selectionMode: 'cell',
          correctCells: [
            { row: 1, column: 'model_decision' },
            { row: 3, column: 'model_decision' },
            { row: 7, column: 'model_decision' }
          ]
        },
        {
          id: 'bias-rows',
          title: 'Fase 2',
          instruction: 'Seleziona le righe candidate a revisione umana prioritaria.',
          selectionMode: 'row',
          correctRows: [1, 3, 7]
        },
        {
          id: 'bias-columns',
          title: 'Fase 3',
          instruction: 'Seleziona le colonne da monitorare sempre per fairness in questo caso.',
          selectionMode: 'column',
          correctColumns: ['genere', 'citta', 'model_decision']
        }
      ]
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
