import type { Chapter } from '../types';

export const ch12: Chapter = {
    id: 12,
    slug: 'ai-at-work',
    title: 'L\'AI nel Lavoro e nel Futuro',
    description: 'Come l\'AI trasforma ruoli, competenze e decisioni nel mondo del lavoro',
    sections: [
      { title: 'Automazione dei task, non delle persone', content: 'L\'AI eccelle nell\'automatizzare attività ripetitive e ad alto volume: in molti casi il supporto arriva da modelli di **Machine Learning** guidati da un **algoritmo** adatto al contesto, come classificazione email, estrazione dati da documenti, triage ticket, reportistica standard. Questo non significa che i ruoli umani spariscono in blocco: significa che cambiano il mix di attività. In molti team, i task operativi diminuiscono e crescono i task di controllo qualità, decisione e relazione con il cliente.\n\n*Nota pratica:* prima di introdurre AI in un flusso, mappa il processo in tre categorie: task da automatizzare, task da assistere e task da mantenere umani. <<Takeaway: la vera unità di trasformazione è il task, non il job title>>.' },
      { title: 'Nuovi ruoli e responsabilità operative', content: 'Con l\'adozione AI emergono ruoli ibridi: AI Product Owner, AI Ops Specialist, Prompt Designer, Data Steward, AI Compliance Coordinator. Anche ruoli già esistenti evolvono: recruiter, project manager, marketer e developer usano AI come leva quotidiana, ma con responsabilità nuove su qualità, verificabilità e rischio.\n\nNel lavoro reale conta la capacità di disegnare workflow robusti anche **in produzione**: input chiari, controlli in uscita, escalation quando la confidenza è bassa. *Nota pratica:* definisci sempre ownership esplicita su "chi valida cosa" prima del rilascio, soprattutto quando un **Agente Autonomo (Autonomous Agent)** può prendere iniziative operative. <<Takeaway: usare AI senza responsabilità definite crea velocità apparente e rischio reale>>.' },
      { title: 'Competenze ad alto valore nel mercato AI', content: 'Le competenze che aumentano di valore non sono solo tecniche. Le più richieste combinano: **pensiero critico** (valutare affidabilità), **problem framing** (definire bene il problema), **comunicazione** (spiegare decisioni), **alfabetizzazione dati** (leggere metriche), **adattabilità** (aggiornare metodo e tool).\n\nConoscere un tool specifico aiuta, ma il vantaggio competitivo è saper progettare processi ripetibili e misurabili. *Nota pratica:* costruisci un portfolio di casi concreti in cui mostri come hai ridotto errori o tempo di ciclo usando AI con metriche chiare. <<Takeaway: nel mercato AI vince chi sa misurare impatto, non chi usa più tool>>.' },
      { title: 'Errore comune + Check rapido', content: '**Errore comune:** introdurre AI per moda, senza baseline e senza KPI di qualità del lavoro.\n\n**Check rapido (2 min):** scegli un processo reale (es. supporto clienti, selezione CV, QA contenuti) e rispondi:\n1) quale task automatizzi per primo?\n2) quale metrica userai per capire se hai migliorato davvero?\n3) quando scatta obbligatoriamente la revisione umana?' }
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 12',
        description: 'Video completo Capitolo 12: come l\'AI trasforma ruoli, competenze e decisioni nel mondo del lavoro.',
        estimatedDuration: '7 min',
        placeholderPath: 'media/ch12-ai-work/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 12',
        description: 'Podcast di approfondimento su adozione AI nel lavoro, nuovi ruoli e skill ad alto valore.',
        estimatedDuration: '18 min',
        placeholderPath: 'media/ch12-ai-work/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 12',
        description: 'AI nel lavoro: mappa visiva di automazione task, nuovi ruoli e skill strategiche nel mercato AI-ready.',
        placeholderPath: 'media/ch12-ai-work/infographic.jpg',
        notes: 'ready'
      },
      {
        type: 'resource',
        title: 'Handout Capitolo 12',
        description: 'Scheda riassuntiva stampabile con task split framework, KPI operativi e piano adozione AI.',
        placeholderPath: 'media/ch12-ai-work/handout.pdf',
        notes: 'placeholder'
      }
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
    challenge: {
      id: 'ch12-operating-mode-review',
      title: 'Operating Mode Review — Automate / Assist / Human-led',
      intro: 'Valuta gli scenari di lavoro e individua dove la modalità operativa proposta è rischiosa o non coerente.',
      scoringMode: 'balanced',
      table: {
        columns: ['case_id', 'domain', 'task', 'task_repetitiveness', 'impact_if_wrong', 'needs_human_judgment', 'data_sensitivity', 'recommended_operating_mode'],
        rows: [
          { case_id: 'W001', domain: 'customer_support', task: 'faq_routing', task_repetitiveness: 'high', impact_if_wrong: 'low', needs_human_judgment: 'no', data_sensitivity: 'medium', recommended_operating_mode: 'automate' },
          { case_id: 'W002', domain: 'finance', task: 'invoice_data_extraction', task_repetitiveness: 'high', impact_if_wrong: 'medium', needs_human_judgment: 'no', data_sensitivity: 'high', recommended_operating_mode: 'assist' },
          { case_id: 'W003', domain: 'hiring', task: 'candidate_cv_screening', task_repetitiveness: 'medium', impact_if_wrong: 'high', needs_human_judgment: 'yes', data_sensitivity: 'high', recommended_operating_mode: 'human_led' },
          { case_id: 'W004', domain: 'legal_ops', task: 'contract_risk_flagging', task_repetitiveness: 'medium', impact_if_wrong: 'high', needs_human_judgment: 'yes', data_sensitivity: 'high', recommended_operating_mode: 'automate' }
        ]
      },
      phases: [
        {
          id: 'wrong-mode-cell',
          title: 'Fase 1',
          instruction: 'Seleziona la cella recommended_operating_mode non coerente con il rischio.',
          selectionMode: 'cell',
          correctCells: [{ row: 3, column: 'recommended_operating_mode' }]
        },
        {
          id: 'human-led-rows',
          title: 'Fase 2',
          instruction: 'Seleziona le righe che richiedono human-led o supervisione forte.',
          selectionMode: 'row',
          correctRows: [2, 3]
        }
      ]
    },
    quiz: [
      {
        question: 'Team operations: con AI i rimborsi spese sono 3x più veloci ma i reclami per errori salgono del 22%. Come interpreti?',
        options: [
          'Il throughput è triplicato: il rollout è un successo operativo confermato.',
          'Il 22% è il costo fisiologico di onboarding e si stabilizza entro sei mesi.',
          'I KPI misurano solo velocità: serve aggiungere qualità e revisione umana.',
          'Velocità e qualità sono trade-off naturali da accettare in qualsiasi rollout.',
        ],
        correct: 2,
        explanation: 'Misurare solo la velocità nasconde il costo reale degli errori. Servono KPI bilanciati su qualità e revisione umana sui casi rischiosi.'
      },
      {
        question: 'Il tuo manager vuole automatizzare i colloqui HR iniziali con un AI conversazionale. Rischio principale?',
        options: [
          'Latenza: un AI conversazionale è più lento di un recruiter esperto.',
          'Costo: i modelli enterprise superano il risparmio sui recruiter junior.',
          'Cultura: i candidati italiani preferiscono il contatto umano per fiducia.',
          'AI Act: la selezione automatizzata è alto rischio e introduce bias sistemici.',
        ],
        correct: 3,
        explanation: 'I sistemi di selezione personale sono esplicitamente alto rischio AI Act. Senza supervisione introducono bias e penalizzano profili non standard.'
      },
      {
        question: 'In quale scenario AI in un workflow aziendale crea più valore strutturale nel tempo?',
        options: [
          'Quando automatizza task ripetitivi liberando persone su attività di giudizio.',
          'Quando sostituisce funzioni intere per eliminare costi fissi del personale.',
          'Quando è applicata a tutti i processi contemporaneamente per massimo impatto.',
          'Quando si concentra su task ad alta variabilità per liberare budget rapido.',
        ],
        correct: 0,
        explanation: 'Il valore nasce dividendo: AI sui task ripetitivi e misurabili, persone sui task di giudizio. Le altre strategie producono caos o falso ROI.'
      },
      {
        question: 'Customer support AI: 89% ticket risolti ma l\'11% chiusi come "risolti" non lo era. Problema reale?',
        options: [
          'L\'89% è sotto soglia accettabile: serve raggiungere almeno il 95% prima.',
          'Il sistema serve più training: con altri dati la resolution rate crescerà ancora.',
          'Manca KPI di false closure: i clienti insoddisfatti spariscono dalle metriche.',
          'Il problema è UX: i clienti non sanno riaprire facilmente i ticket chiusi.',
        ],
        correct: 2,
        explanation: 'Misurare solo resolution rate nasconde l\'11% di clienti non ricontattati. Serve un set bilanciato di KPI che includa il costo degli errori.'
      },
      {
        question: 'Co-pilota AI per diagnosi differenziale in ospedale. Quale rollout è corretto?',
        options: [
          'Deploy esteso su tutti i reparti per raccogliere feedback su volume reale.',
          'Pilot controllato su un reparto con KPI predefiniti e supervisione medica.',
          'Rollout sui reparti più carichi per massimizzare il ROI nel breve periodo.',
          'Attesa fino a F1=0.99 prima di qualsiasi sperimentazione clinica reale.',
        ],
        correct: 1,
        explanation: 'In ambito clinico serve rollout progressivo con decision gate misurabili. Deploy ampio senza pilot blocca correzioni; F1=0.99 è irrealistico.'
      },
      {
        question: 'Marketing manager con 10 anni di esperienza teme che l\'AI sostituisca il suo ruolo. Risposta più accurata?',
        options: [
          'Ha ragione: i ruoli creativi senior saranno automatizzati nei prossimi tre anni.',
          'Non rischia: l\'AI non sostituisce mai professionisti con esperienza di dominio.',
          'Deve riconvertirsi: l\'unica strategia è passare a ruoli tecnici come ML engineer.',
          'Esperienza + capacità di orchestrare AI = vantaggio competitivo sostenibile.',
        ],
        correct: 3,
        explanation: 'L\'impatto AI è task-level, non role-level. Chi combina dominio + orchestrazione AI diventa più produttivo; chi ignora il cambiamento perde rilevanza.'
      },
      {
        question: 'Governance AI minima ma sufficiente per un sistema di controllo qualità manifatturiero:',
        options: [
          'Dashboard real-time + aggiornamento annuale del modello in produzione.',
          'Solo accuracy globale misurata in pre-produzione con target sopra il 95%.',
          'KPI definiti + soglie di escalation + log decisioni + revisione periodica.',
          'Formazione operatori + manuale d\'uso + procedure di sicurezza standard.',
        ],
        correct: 2,
        explanation: 'Governance reale richiede quattro elementi: cosa misuri, quando intervieni, cosa è successo, se si degrada nel tempo. Senza uno è solo carta.'
      },
      {
        question: '8 processi automatizzati in 3 mesi: 3 positivi, 3 neutri, 2 negativi. Nessuno sa perché. Causa radice?',
        options: [
          'Modelli AI di qualità insufficiente per i processi più complessi del set.',
          'Mancano KPI predefiniti e ownership chiara per processo: niente misurabile.',
          'Rollout troppo lento: con 12 processi i risultati si sarebbero compensati.',
          'Team non abbastanza tecnico per gestire l\'integrazione di sistemi eterogenei.',
        ],
        correct: 1,
        explanation: 'Senza KPI predefiniti e ownership non puoi imparare dagli errori né replicare i successi. È l\'errore più comune nell\'adozione AI aziendale.'
      },
      {
        question: 'Manager propone un LLM per generare i feedback annuali di performance dei dipendenti. Problema?',
        options: [
          'I LLM non sono abbastanza precisi grammaticalmente per documenti HR formali.',
          'Il problema è economico: i LLM enterprise costano troppo per questo use case.',
          'Non è un problema se il manager rivede il testo finale prima di inviarlo.',
          'Feedback automatizzato svuota la valutazione e introduce bias gestionali.',
        ],
        correct: 3,
        explanation: 'Il feedback di performance è atto gestionale: automatizzarlo senza supervisione autentica svuota il significato e introduce bias sistemici.'
      },
      {
        question: 'Quale affermazione descrive meglio l\'impatto AI sul lavoro nei prossimi 5 anni dai dati attuali?',
        options: [
          'Sostituzione uniforme di tutti i ruoli cognitivi entro la fine del 2028.',
          'Impatto minimo sui knowledge worker: la tecnologia è ancora troppo immatura.',
          'Trasformazione task-level: alcune attività automatizzate, altre amplificate.',
          'Impatto concentrato solo sui ruoli tecnici come developer e data scientist.',
        ],
        correct: 2,
        explanation: 'L\'impatto è granulare sui task, non sui ruoli interi. Chi orchestra AI + dominio + giudizio guadagna vantaggio; gli altri restano fermi.'
      },
    ]
};
