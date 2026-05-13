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
        question: 'Un team operations introduce AI per gestire le richieste di rimborso spese. Dopo 2 mesi, i rimborsi vengono processati 3x più veloce ma i reclami per errori aumentano del 22%. Come interpreti questo dato?',
        options: [
          'Successo: la velocità è l’obiettivo principale di qualsiasi automazione',
          'Il 22% di reclami è nella norma per qualsiasi sistema nuovo — aspetti altri 6 mesi',
          'La velocità è migliorata ma la qualità è peggiorata: serve ribilanciare i KPI e introdurre revisione umana sui casi ad alta probabilità di errore',
          'Togli l’AI e torni al processo manuale',
        ],
        correct: 2,
        explanation: 'Efficienza senza qualità affidabile è un falso guadagno. Il 22% di reclami in più è un segnale che i KPI di successo erano incompleti — si misurava solo la velocità, non la correttezza. La risposta corretta non è bloccare l’AI ma ridisegnare il workflow con supervisione umana sui casi rischiosi.'
      },
      {
        question: 'Il tuo responsabile ti chiede di automatizzare completamente i colloqui iniziali di selezione con un sistema AI conversazionale. Qual è il rischio principale che devi segnalare?',
        options: [
          'Il sistema sarà troppo lento rispetto a un recruiter umano',
          'I candidati potrebbero preferire parlare con un umano per ragioni culturali',
          'Un sistema di selezione automatizzato senza supervisione umana è ad alto rischio AI Act, può introdurre bias sistemici e priva i candidati di interazione contestuale che influenza l’equità del processo',
          'Il costo del sistema AI supererà il risparmio sui recruiter nel primo anno',
        ],
        correct: 2,
        explanation: 'I sistemi di selezione automatizzata rientrano nell’alto rischio AI Act. Oltre alla conformità normativa, l’automazione completa dei colloqui rimuove il giudizio contestuale che è spesso critico per valutare candidati con percorsi non standard. Il rischio di bias sistematico è reale e misurabile.'
      },
      {
        question: 'In quale scenario l’introduzione di AI in un workflow aziendale crea più valore strutturale nel tempo?',
        options: [
          'Quando automatizza task ad alta variabilità e giudizio contestuale per liberare budget',
          'Quando sostituisce completamente una funzione aziendale eliminando i costi fissi',
          'Quando gestisce task ripetitivi e misurabili, liberando le persone per attività ad alto giudizio che l’AI non può replicare',
          'Quando è implementata su tutti i processi contemporaneamente per massimizzare l’impatto',
        ],
        correct: 2,
        explanation: 'Il valore strutturale si crea quando AI e persone si specializzano in ciò che sanno fare meglio: AI su task ripetitivi, volumetrici e misurabili; persone su giudizio contestuale, relazioni e decisioni complesse. L’automazione totale o distribuita ovunque contemporaneamente produce caos operativo, non valore.'
      },
      {
        question: 'Un sistema AI di customer support risolve correttamente l’89% dei ticket, ma il restante 11% viene chiuso automaticamente come “risolto” anche se non lo è. Il team festeggia il 89%. Qual è il problema reale?',
        options: [
          'L’89% è sotto la soglia minima di qualsiasi sistema AI in produzione',
          'Il sistema non è addestrato su abbastanza dati — serve più training',
          'L’11% di falsi positivi “risolti” crea danni reali: clienti insoddisfatti che non vengono ricontattati. La metrica corretta non è solo la resolution rate ma anche il false closure rate',
          'Il problema è solo di UX: i clienti devono poter riaprire il ticket più facilmente',
        ],
        correct: 2,
        explanation: 'Una metrica di successo incompleta è più pericolosa di nessuna metrica. Misurare solo la resolution rate nasconde il problema sistemico: ogni ticket chiuso erroneamente è un cliente che si sente ignorato. In sistemi AI operativi, serve sempre un set bilanciato di KPI — incluso il costo degli errori.'
      },
      {
        question: 'Il tuo team sta valutando se introdurre un co-pilota AI per supportare i medici nella diagnosi differenziale. Quale approccio di rollout è più corretto?',
        options: [
          'Deploy immediato su tutti i reparti per raccogliere feedback reali il prima possibile',
          'Pilot controllato su un reparto specifico con KPI di qualità e sicurezza predefiniti, supervisione medica obbligatoria, e decision gate prima dell’espansione',
          'Deploy solo nei reparti con più carico di lavoro per massimizzare il ROI immediato',
          'Aspettare che il modello raggiunga F1=0.99 prima di qualsiasi test clinico',
        ],
        correct: 1,
        explanation: 'In ambiti ad alto impatto, il rollout progressivo con KPI predefiniti e decision gate è l’unico approccio responsabile. Un deploy immediato ovunque non permette di misurare l’impatto reale prima che i problemi diventino sistemici. La supervisione medica obbligatoria non è opzionale in sistemi clinici.'
      },
      {
        question: 'Un professionista del marketing con 10 anni di esperienza teme che l’AI sostituirà il suo ruolo. Quale risposta è più accurata rispetto ai dati sull’impatto AI sul lavoro?',
        options: [
          'Ha ragione — i ruoli creativi saranno automatizzati entro 3 anni',
          'Non ha nulla da temere — l’AI non sostituisce mai persone con esperienza',
          'La sua esperienza di dominio è un vantaggio, ma deve integrare competenze di orchestrazione AI: chi sa usare l’AI come moltiplicatore di produttività avrà un vantaggio competitivo su chi non lo fa',
          'L’unica strategia è spostarsi su ruoli tecnici come ML engineer',
        ],
        correct: 2,
        explanation: 'La ricerca sull’impatto AI sul lavoro mostra che la sostituzione è più granulare dei task che dei ruoli interi. Chi combina esperienza di dominio con capacità di orchestrare AI diventa più produttivo, non meno rilevante. La minaccia reale non è l’AI — è chi sa usarla meglio di te.'
      },
      {
        question: 'Stai progettando la governance AI per un’azienda manifatturiera che vuole automatizzare il controllo qualità. Quale combinazione di controlli è minima ma sufficiente?',
        options: [
          'Dashboard estetica + modello aggiornato ogni anno',
          'KPI di qualità definiti prima del deploy + soglie di escalation umana per casi ambigui + log delle decisioni automatiche + revisione periodica delle performance per sottogruppo di prodotto',
          'Solo accuracy globale > 95% misurata in pre-produzione',
          'Formazione iniziale degli operatori + manuale d’uso del sistema',
        ],
        correct: 1,
        explanation: 'Una governance minima ma reale richiede: sapere cosa misuri (KPI), sapere quando intervenire (soglie di escalation), sapere cosa è successo (log), e sapere se il sistema si degrada nel tempo (revisione periodica). Senza uno di questi quattro elementi, la governance è solo sulla carta.'
      },
      {
        question: 'Un’azienda introduce AI in 8 processi diversi in 3 mesi. Dopo 6 mesi, i risultati sono positivi in 3, neutri in 3, negativi in 2 — ma nessuno sa esattamente perché. Qual è la causa radice più probabile?',
        options: [
          'I modelli AI usati erano di qualità insufficiente',
          'Il rollout è stato troppo lento — servivano 12 processi invece di 8',
          'Mancavano KPI predefiniti per ogni processo e ownership chiara: senza metriche di successo definite prima, non puoi capire cosa ha funzionato e cosa no',
          'Il team non era abbastanza tecnico per gestire sistemi AI',
        ],
        correct: 2,
        explanation: 'Senza KPI predefiniti e ownership chiara per processo, è impossibile imparare dagli errori o replicare i successi. Il problema non è la velocità del rollout o la qualità del modello — è la mancanza di framework per misurare e attribuire i risultati. Questo è l’errore più comune nell’adozione AI in azienda.'
      },
      {
        question: 'Un manager vuole usare un LLM per automatizzare la stesura dei feedback di performance annuali dei dipendenti. Quale problema etico e operativo devi sollevare?',
        options: [
          'I LLM non sono abbastanza precisi grammaticalmente per documenti HR formali',
          'Il feedback generato da AI senza revisione umana priva i dipendenti di valutazione autentica e personalizzata, può essere discriminatorio, e in molti contesti è un obbligo legale che il responsabile venga coinvolto direttamente',
          'Il problema è solo di costo: i LLM enterprise sono troppo costosi per questo use case',
          'Non è un problema se il manager revisiona il testo finale prima di inviarlo',
        ],
        correct: 1,
        explanation: 'Il feedback di performance è un atto gestionale con implicazioni legali, relazionali e motivazionali. Automatizzarlo senza supervisione autentica del manager svuota il significato del processo e può introdurre bias sistematici. La revisione superficiale di un testo generato non equivale a una valutazione reale.'
      },
      {
        question: 'Quale affermazione descrive meglio il ruolo dell’AI nel lavoro nei prossimi 5 anni, basandosi sui pattern attuali?',
        options: [
          'L’AI sostituirà uniformemente tutti i ruoli cognitivi entro il 2028',
          'L’AI avrà impatto minimo sui lavori del knowledge worker — è ancora troppo primitiva',
          'L’AI trasformerà la composizione dei task all’interno dei ruoli: alcune attività saranno automatizzate, altre amplificate. Chi sa orchestrare AI + esperienza di dominio + giudizio contestuale avrà un vantaggio strutturale',
          'Solo i ruoli tecnici (developer, data scientist) saranno impattati significativamente',
        ],
        correct: 2,
        explanation: 'I dati attuali mostrano che l’impatto AI è task-level, non role-level. I ruoli non spariscono in blocco — cambiano: alcuni task vengono automatizzati, altri diventano più importanti (giudizio, relazione, creatività strategica). Il vantaggio competitivo va a chi sa navigare questa transizione, non a chi la ignora o la teme.'
      },
    ]
};
