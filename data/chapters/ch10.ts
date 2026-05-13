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
        question: 'Un modello di scoring del credito ha accuracy del 91% globale, ma sbaglia sul 34% dei richiedenti provenienti da una specifica area geografica. Il team vuole pubblicarlo. Cosa fai?',
        options: [
          'Pubblichi perché il 91% globale supera la soglia interna di accettazione',
          'Blocchi e analizzi la distribuzione degli errori per area: il 34% su un sottogruppo è un segnale di bias inaccettabile in un contesto ad alto rischio',
          'Aggiungi un disclaimer nellâinterfaccia e pubblichi comunque',
          'Riaddestri con più dati globali per alzare lâaccuracy al 95%',
        ],
        correct: 1,
        explanation: 'Lâaccuracy globale può nascondere bias gravi su sottogruppi. Un 34% di errori su unâarea geografica specifica in un sistema creditizio è potenzialmente discriminatorio e illegale. Prima di qualsiasi deploy in contesti ad alto impatto serve analisi di fairness segmentata, non solo media.'
      },
      {
        question: 'Il team legale chiede explainability sul modello che decide i bonus aziendali. Il data scientist risponde: âil modello ha 94% accuracy, funziona beneâ. Perché questa risposta è insufficiente?',
        options: [
          'Il 94% non è abbastanza alto — serve almeno il 99% per sistemi HR',
          'Explainability non riguarda lâaccuracy ma la capacità di giustificare singole decisioni in modo comprensibile e verificabile dalle persone impattate',
          'Il team legale dovrebbe fidarsi dei data scientist senza richiedere spiegazioni tecniche',
          'Lâaccuracy è la metrica più importante in sistemi HR — le spiegazioni sono opzionali',
        ],
        correct: 1,
        explanation: 'Explainability non è un numero di performance — è la capacità di spiegare perché il modello ha preso una specifica decisione su una specifica persona. In contesti HR, creditizi o sanitari, è un requisito etico e spesso legale: le persone hanno diritto a capire perché sono state penalizzate.'
      },
      {
        question: 'Stai progettando un sistema AI per la diagnosi di patologie rare. Hai un modello con F1=0.87. Quale architettura di governance è più appropriata?',
        options: [
          'Deploy automatico con notifica email al medico per ogni diagnosi',
          'Deploy solo in ambienti di ricerca senza pazienti reali fino a F1=0.95',
          'Human-in-the-loop strutturato: AI propone diagnosi con confidence score, medico decide sempre — con audit trail completo',
          'Escalation umana solo per i casi con confidence < 50%',
        ],
        correct: 2,
        explanation: 'In ambito medico ad alto rischio, nessun F1 score giustifica lâautomazione completa. La governance corretta prevede che lâAI supporti il medico, non lo sostituisca. Lâaudit trail serve per tracciare responsabilità e migliorare il sistema nel tempo.'
      },
      {
        question: 'Il tuo sistema AI di moderazione contenuti blocca correttamente il 97% dei contenuti inappropriati, ma ha un false positive rate del 18% su contenuti in arabo. Come classifichi questo problema?',
        options: [
          'Problema tecnico di scarsa qualità del dataset in arabo — da risolvere con più dati',
          'Non è un problema se la performance globale è al 97%',
          'Bias sistemico che produce discriminazione linguistica — richiede analisi fairness, correzione e probabilmente revisione umana sui contenuti in arabo nel frattempo',
          'Problema di latenza del modello su lingue non latine',
        ],
        correct: 2,
        explanation: 'Un false positive del 18% su utenti arabofoni significa che 1 su 5 contenuti legittimi viene bloccato erroneamente — discriminazione operativa reale. Richiede sia una soluzione tecnica (più dati bilanciati) sia una misura immediata (revisione umana) per non penalizzare gli utenti nel frattempo.'
      },
      {
        question: 'Il documento di governance AI del tuo team è stato scritto 18 mesi fa. Il modello in produzione è stato aggiornato 3 volte. Qual è il rischio principale?',
        options: [
          'Il documento è ormai inutile e va eliminato',
          'La governance è diventata un documento statico che non riflette più il sistema reale — se arriva un audit, non puoi dimostrare controllo effettivo',
          'Il rischio è minimo se il modello continua a performare bene',
          'Basta aggiornare la data di revisione sul documento',
        ],
        correct: 1,
        explanation: 'Governance non aggiornata è governance non esistente in pratica. Se il modello cambia e la documentazione no, in caso di audit o incidente non puoi dimostrare che il sistema è sotto controllo. La governance è un processo continuo, non un deliverable one-shot.'
      },
      {
        question: 'Stai monitorando un sistema AI di raccomandazione. Quale metrica segnala un problema di fairness, non solo di performance?',
        options: [
          'Calo dellâNDCG globale dal 0.82 a 0.79',
          'Aumento della latenza media da 120ms a 180ms',
          'Il sistema raccomanda contenuti ad alto engagement a tutti i gruppi demografici in modo equivalente, ma i contenuti raccomandati al gruppo A hanno valore economico medio 3x superiore al gruppo B',
          'Riduzione del click-through rate dal 12% allâinterno dello stesso gruppo demografico',
        ],
        correct: 2,
        explanation: 'Un sistema può sembrare equo in engagement ma produrre disparità economiche strutturali. Il fairness monitoring deve guardare oltre le metriche aggregate — serve analisi del valore distribuito tra gruppi, non solo click o accuracy media.'
      },
      {
        question: 'Il tuo sistema raccoglie feedback degli utenti per migliorare il modello. Un avvocato ti chiede: "chi ha accesso a questi feedback e per quanto tempo li conservate?". Non hai una risposta chiara. Che cosa rivela questo?',
        options: [
          'Che serve un data engineer dedicato al progetto',
          'Che il sistema non ha implementato privacy-by-design — lâaccesso e la retention dei dati avrebbero dovuto essere definiti in fase di progettazione, non a sistema già in produzione',
          'Che il team legale dovrebbe essere più coinvolto nelle fasi finali',
          'Che la domanda è prematura — questi aspetti si definiscono dopo la fase di product-market fit',
        ],
        correct: 1,
        explanation: 'Privacy-by-design significa che controllo degli accessi, retention policy e finalità dâuso dei dati sono decisi prima di raccogliere i dati, non dopo. Non avere una risposta chiara a questa domanda è un segnale che il principio non è stato applicato.'
      },
      {
        question: 'Il modello di classificazione che usi in produzione aveva accuracy del 91% a gennaio. A maggio è sceso allâ 83% senza modifiche al codice. Cosa è più probabile e cosa fai?',
        options: [
          'Bug introdotto da un aggiornamento del framework — fai rollback',
          'Data drift: la distribuzione dei dati reali si è spostata rispetto al training set. Analizzi il drift, valuti se serve retraining o recalibrazione, e introduci monitoring automatico per il futuro',
          'Il modello è sovrafit sul training set e va sostituito con uno più semplice',
          'Problema di infrastruttura: la GPU sta degradando le performance',
        ],
        correct: 1,
        explanation: 'Un calo di performance senza modifiche al codice è quasi sempre data drift: il mondo è cambiato, il modello no. La risposta corretta non è il panico ma un processo: analisi del drift, decisione informata su retraining/recalibrazione, e monitoring preventivo per intercettarlo prima che diventi un problema.'
      },
      {
        question: 'Quale affermazione sullâAI Act è corretta?',
        options: [
          'LâAI Act vieta lâuso di AI in ambito HR e creditizio',
          'LâAI Act classifica i sistemi per livello di rischio e assegna obblighi proporzionati — più alto il rischio, più stringenti i requisiti di documentazione, audit e supervisione',
          'LâAI Act si applica solo ai modelli con più di 10 miliardi di parametri',
          'LâAI Act è una raccomandazione volontaria, non un regolamento vincolante',
        ],
        correct: 1,
        explanation: 'LâAI Act usa una piramide del rischio: sistemi vietati (social scoring, manipolazione subliminale), alto rischio (CV screening, credito, diagnosi medica), rischio limitato (chatbot — obbligo di disclosure), minimale (filtri spam). Ogni livello ha obblighi specifici proporzionati allâimpatto potenziale.'
      },
      {
        question: 'Il team vuole ridurre i costi di infrastructure spostando il sistema AI di approvazione prestiti su un modello più piccolo e veloce. Lâaccuracy globale rimane al 89%. Quale domanda devi fare prima di approvare il cambio?',
        options: [
          'Il nuovo modello è certificato ISO 27001?',
          'La latenza media migliora di almeno il 30%?',
          'Lâaccuracy per sottogruppo demografico rimane equivalente tra i due modelli — o il modello più piccolo introduce nuovi bias?',
          'Il vendor del nuovo modello ha firmato un NDA?',
        ],
        correct: 2,
        explanation: 'Un cambio di modello in un sistema ad alto rischio richiede fairness analysis comparativa, non solo confronto di accuracy globale. Il modello più piccolo potrebbe aver perso capacità di generalizzazione su sottogruppi — e in ambito creditizio questo è un rischio legale oltre che etico.'
      },
    ]
};
