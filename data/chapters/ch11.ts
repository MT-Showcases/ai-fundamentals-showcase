import type { Chapter } from '../types';

export const ch11: Chapter = {
    id: 11,
    slug: 'ai-act',
    title: 'AI Act Europeo: Regolazione dell\'AI',
    description: 'Come classificare il rischio AI e rispettare gli obblighi normativi UE',
    sections: [
      { title: 'I 4 Livelli di Rischio', content: "L'**AI Act** classifica i sistemi in base al rischio: **vietato**, **alto rischio**, **rischio limitato** e **rischio minimo**. La regola è semplice: più alto è l\'impatto sulle persone, più rigorosi diventano i controlli.\n\nEsempi pratici:\n- **Vietato**: pratiche manipolative o sorveglianza inaccettabile\n- **Alto rischio**: AI usata in selezione personale, credito, sanità, istruzione, infrastrutture critiche\n- **Limitato**: sistemi che richiedono trasparenza verso l\'utente\n- **Minimo**: uso a basso impatto, con obblighi ridotti\n\n*Nota pratica:* la classificazione rischio va fatta prima del build finale, non dopo il go-live. <<Takeaway: prima classifichi il rischio, poi scegli i controlli tecnici e documentali>>." },
      { title: 'Obblighi per Sistemi ad Alto Rischio', content: "Per i sistemi ad **alto rischio** non basta che il modello funzioni: devi dimostrare che è governato in modo tracciabile. In pratica servono:\n- documentazione tecnica completa\n- gestione del rischio lungo il ciclo di vita\n- qualità e governance dei dati\n- logging, monitoraggio e registri degli incidenti\n- supervisione umana dove necessario\n- robustezza, accuratezza e cybersecurity adeguate\n\nLe sanzioni possono essere molto alte, quindi compliance e prodotto devono avanzare insieme. *Nota pratica:* tratta la compliance come parte della Definition of Done di ogni release. <<Takeaway: in high-risk AI, evidenza e tracciabilità contano quanto la performance>>." },
      { title: 'Startup Lens', content: "Per una startup, la strategia vincente è integrare la compliance in pipeline: classificazione rischio, checklist release, owner responsabile, audit periodico e piano incidenti. Così riduci ritardi, rework e rischio legale quando il prodotto scala." },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** pensare che la compliance sia solo un documento legale da compilare a fine progetto.\n\n**Check rapido (2 min):** scegli un caso d\'uso AI reale e rispondi:\n1) in quale livello di rischio lo collochi?\n2) quale controllo tecnico rendi obbligatorio prima del deploy?\n3) quale evidenza conserveresti per un audit?" }
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
        question: 'L\'AI Act europeo classifica i sistemi AI principalmente in base a:',
        options: [
          'Il numero di parametri del modello',
          'Il livello di rischio per diritti e sicurezza delle persone',
          'Il costo computazionale di training',
          'La nazionalità del fornitore',
        ],
        correct: 1,
        explanation: 'L\'AI Act usa una piramide del rischio: inaccettabile (vietato), alto rischio (obblighi forti), limitato (trasparenza), minimale (libero). I requisiti crescono con l\'impatto potenziale sulle persone.'
      },
      {
        question: 'Un sistema di screening CV automatizzato che impatta l\'accesso al lavoro rientra in quale categoria AI Act?',
        options: [
          'Rischio minimale — è solo un filtro',
          'Rischio limitato — basta dichiararlo',
          'Alto rischio — obblighi di documentazione, audit e supervisione umana',
          'Vietato — nessun sistema automatizzato può filtrare CV',
        ],
        correct: 2,
        explanation: 'I sistemi che impattano accesso a lavoro, credito o istruzione sono esplicitamente classificati ad alto rischio nell\'AI Act. Richiedono risk assessment, documentazione tecnica e possibilità di supervisione umana.'
      },
      {
        question: 'Qual è l\'errore più frequente dei team che affrontano la compliance AI Act per la prima volta?',
        options: [
          'Fare troppi test prima del deploy',
          'Coinvolgere troppo il team legale',
          'Documentare troppo dettagliatamente i modelli',
          'Trattarla come documento statico da produrre una volta sola, senza enforcement operativo',
        ],
        correct: 3,
        explanation: 'La compliance non è un documento da archiviare — è un processo continuo. Senza monitoring, incident tracking e aggiornamento della documentazione, la conformità si degrada nel tempo.'
      },
      {
        question: 'Un chatbot per FAQ aziendali interne (senza decisioni su persone) ricade tipicamente in:',
        options: [
          'Alto rischio — tutti i chatbot sono ad alto rischio',
          'Rischio minimale o limitato, con obbligo di disclosure se sembra umano',
          'Vietato — i chatbot imitano esseri umani',
          'Fuori scope dell\'AI Act',
        ],
        correct: 1,
        explanation: 'Un FAQ bot interno senza impatto su diritti individuali è a rischio basso. Se però interagisce con utenti esterni simulando un umano, scatta l\'obbligo di disclosure (\'stai parlando con un\'AI\').'
      },
      {
        question: 'Quale evidenza è più utile in caso di audit su un sistema AI ad alto rischio?',
        options: [
          'Numero di utenti attivi al mese',
          'Solo accuracy media sul test set',
          'Log tecnici + risultati test fairness + documentazione decisioni architetturali + incident trail',
          'Screenshot dell\'interfaccia utente',
        ],
        correct: 2,
        explanation: 'Un audit richiede tracciabilità completa: come funziona il sistema, come è stato testato (incluso fairness), quali incidenti sono avvenuti e come sono stati gestiti.'
      },
      {
        question: 'Privacy-by-design in un sistema AI significa:',
        options: [
          'Raccogliere tutti i dati possibili e poi anonimizzarli alla fine',
          'Nascondere il modello agli utenti',
          'Usare solo dati sintetici senza eccezioni',
          'Minimizzare i dati raccolti, controllare l\'accesso e tracciare ogni uso — fin dalla progettazione',
        ],
        correct: 3,
        explanation: 'Privacy-by-design significa integrare la protezione dei dati nel design del sistema, non aggiungerla dopo. Minimizzazione, controllo accessi e audit trail sono requisiti strutturali, non optional.'
      },
      {
        question: 'Un modello AI ha accuracy del 94% ma sbaglia sistematicamente su un gruppo demografico specifico. Primo passo corretto?',
        options: [
          'Analizzare la distribuzione degli errori per gruppo e valutare l\'impatto reale',
          'Accettare il modello — il 94% globale è ottimo',
          'Aumentare solo il batch size',
          'Pubblicare il modello e raccogliere feedback post-deploy',
        ],
        correct: 0,
        explanation: 'L\'accuracy globale può mascherare bias gravi su sottogruppi. Prima di qualsiasi deploy che impatta persone, serve analisi di fairness segmentata — non solo media.'
      },
      {
        question: 'Quale controllo riduce meglio il rischio operativo in sistemi AI ad alto impatto?',
        options: [
          'Solo documentazione marketing del prodotto',
          'Solo accuracy media superiore al 90%',
          'Human-in-the-loop + escalation policy + audit trail continuo',
          'Test unitari una tantum prima del deploy',
        ],
        correct: 2,
        explanation: 'Controlli operativi continui (supervisione umana, escalation, tracciabilità) sono più efficaci di qualsiasi metrica statica. L\'affidabilità si costruisce nel processo, non in un singolo numero.'
      },
      {
        question: 'Nel dataset CH11, uno scenario con risk_level=high e affects_rights=yes dovrebbe avere come priorità:',
        options: [
          'Auto-deploy con monitoring passivo',
          'human_review obbligatorio prima di qualsiasi azione automatica',
          'Nessun controllo aggiuntivo se accuracy è alta',
          'Publish diretto per ridurre latenza operativa',
        ],
        correct: 1,
        explanation: 'Alto rischio + impatto su diritti = supervisione umana obbligatoria. Nessuna accuracy media giustifica l\'assenza di revisione umana su decisioni che impattano diritti fondamentali.'
      },
      {
        question: 'Messaggio chiave del capitolo 11 sull\'AI Act:',
        options: [
          'AI responsabile = performance tecnica + fairness + accountability + controllo umano dove serve',
          'La compliance è opzionale se il modello performa bene',
          'Solo il reparto legale deve occuparsi di AI Act',
          'Basta anonimizzare i dati e tutto è risolto',
        ],
        correct: 0,
        explanation: 'L\'AI Act riflette un principio più ampio: i sistemi AI affidabili richiedono governance multidisciplinare — tecnica, legale, etica e operativa. Non è un check-box, è un processo continuo.'
      }
    ]
};