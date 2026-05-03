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
};
