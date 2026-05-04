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
