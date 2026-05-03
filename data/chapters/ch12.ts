import type { Chapter } from '../types';

export const ch12: Chapter = {
    id: 12,
    slug: 'ai-at-work',
    title: 'L\'AI nel Lavoro e nel Futuro',
    description: 'Come l\'AI trasforma ruoli, competenze e decisioni nel mondo del lavoro',
    sections: [
      { title: 'Automazione dei task, non delle persone', content: 'L\'AI eccelle nell\'automatizzare attività ripetitive e ad alto volume: classificazione email, estrazione dati da documenti, triage ticket, reportistica standard. Questo non significa che i ruoli umani spariscono in blocco: significa che cambiano il mix di attività. In molti team, i task operativi diminuiscono e crescono i task di controllo qualità, decisione e relazione con il cliente.\n\n*Nota pratica:* prima di introdurre AI in un flusso, mappa il processo in tre categorie: task da automatizzare, task da assistere e task da mantenere umani. <<Takeaway: la vera unità di trasformazione è il task, non il job title>>.', media: [ { type: 'infographic', title: 'Mappa task: automazione vs supervisione', description: 'Schema operativo per classificare attività in automatiche, assistite e umane.', placeholderPath: 'media/ch12-ai-at-work/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Nuovi ruoli e responsabilità operative', content: 'Con l\'adozione AI emergono ruoli ibridi: AI Product Owner, AI Ops Specialist, Prompt Designer, Data Steward, AI Compliance Coordinator. Anche ruoli già esistenti evolvono: recruiter, project manager, marketer e developer usano AI come leva quotidiana, ma con responsabilità nuove su qualità, verificabilità e rischio.\n\nNel lavoro reale conta la capacità di disegnare workflow robusti: input chiari, controlli in uscita, escalation quando la confidenza è bassa. *Nota pratica:* definisci sempre ownership esplicita su "chi valida cosa" prima del rilascio. <<Takeaway: usare AI senza responsabilità definite crea velocità apparente e rischio reale>>.', media: [ { type: 'video', title: 'Ruoli AI-ready in team moderni', description: 'Panoramica su ruoli emergenti, responsabilità e collaborazione uomo-AI.', placeholderPath: 'media/ch12-ai-at-work/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Competenze ad alto valore nel mercato AI', content: 'Le competenze che aumentano di valore non sono solo tecniche. Le più richieste combinano: **pensiero critico** (valutare affidabilità), **problem framing** (definire bene il problema), **comunicazione** (spiegare decisioni), **alfabetizzazione dati** (leggere metriche), **adattabilità** (aggiornare metodo e tool).\n\nConoscere un tool specifico aiuta, ma il vantaggio competitivo è saper progettare processi ripetibili e misurabili. *Nota pratica:* costruisci un portfolio di casi concreti in cui mostri come hai ridotto errori o tempo di ciclo usando AI con metriche chiare. <<Takeaway: nel mercato AI vince chi sa misurare impatto, non chi usa più tool>>.', media: [ { type: 'infographic', title: 'Skill stack AI-ready', description: 'Matrice competenze tecniche e trasversali con esempi di impatto misurabile.', placeholderPath: 'media/ch12-ai-at-work/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: '**Errore comune:** introdurre AI per moda, senza baseline e senza KPI di qualità del lavoro.\n\n**Check rapido (2 min):** scegli un processo reale (es. supporto clienti, selezione CV, QA contenuti) e rispondi:\n1) quale task automatizzi per primo?\n2) quale metrica userai per capire se hai migliorato davvero?\n3) quando scatta obbligatoriamente la revisione umana?', media: [ { type: 'podcast', title: 'Podcast — Adozione AI con KPI reali', description: 'Come evitare automazione superficiale e impostare controlli operativi.', placeholderPath: 'media/ch12-ai-at-work/sec-04/podcast.mp3', notes: 'placeholder' } ] }
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
    media: [
      { type: 'video', title: 'Video Capitolo 12', description: 'Panoramica su trasformazione del lavoro, skill e governance operativa con AI.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch12-ai-at-work/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 12', description: 'Versione audio su adozione AI nei team e impatto sul mercato del lavoro.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch12-ai-at-work/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 12', description: 'Mappa task, competenze e controlli per una adozione AI sostenibile.', placeholderPath: 'media/ch12-ai-at-work/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Template operativo per piano adozione AI con KPI e responsabilità.', placeholderPath: 'media/ch12-ai-at-work/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Piano self-paced di adozione AI (senza coding)',
        objective: 'Progettare un piano concreto per introdurre AI in un processo di lavoro mantenendo qualità e controllo rischio.',
        duration: '20-25 min',
        steps: [
          'Apri il dataset train CH12 e seleziona 3 scenari di lavoro diversi (es. supporto, HR, operations).',
          'Per ogni scenario identifica: task da automatizzare, task da assistere e task da lasciare umani.',
          'Usa la validation CH12 per verificare la coerenza delle scelte e annota eventuali correzioni.',
          'Definisci per uno scenario finale 3 KPI (efficienza, qualità, rischio) e una regola di escalation umana.'
        ],
        deliverable: 'Checkpoint personale: tabella scenario → task split → KPI → regola di supervisione, pronta per discussione in aula.',
        resources: [
          { label: 'Dataset train CH12 (CSV)', path: '/datasets/ch12-ai-workforce/train.csv' },
          { label: 'Dataset validation CH12 (CSV)', path: '/datasets/ch12-ai-workforce/validation.csv' },
          { label: 'Schema campi CH12 (JSON)', path: '/datasets/ch12-ai-workforce/schema.json' }
        ]
      }
    ],
    quiz: [
      {
        question: 'In un team operations, quale approccio descrive meglio un\'adozione AI matura?',
        options: [
          'Automatizzare tutto subito senza monitoraggio',
          'Mappare i task, partire da casi ripetitivi e misurare KPI',
          'Usare AI solo per contenuti marketing',
          'Delegare l\'intero processo al modello senza review',
        ],
        correct: 1,
        explanation: 'La strategia robusta parte da task chiari, rollout progressivo e metriche misurabili.'
      },
      {
        question: 'Scenario: il tempo medio risposta cala del 40% ma aumentano gli errori critici. Cosa fai?',
        options: [
          'Confermi il rollout perché la velocità è migliorata',
          'Blocchi AI definitivamente',
          'Rivedi KPI qualità/rischio e introduci escalation umana sui casi sensibili',
          'Aumenti solo il numero di prompt',
        ],
        correct: 2,
        explanation: 'Efficienza senza qualità affidabile è un falso miglioramento operativo.'
      },
      {
        question: 'Quale skill umana cresce di valore quando i task ripetitivi vengono automatizzati?',
        options: [
          'Pensiero critico e decision making',
          'Memorizzazione meccanica',
          'Compilazione manuale ripetitiva',
          'Esecuzione senza contesto',
        ],
        correct: 0,
        explanation: 'Le attività ad alto giudizio umano diventano il vero differenziale competitivo.'
      },
      {
        question: 'Scenario HR: AI filtra CV ma penalizza profili non standard. Primo intervento corretto?',
        options: [
          'Aumentare soltanto la soglia di scarto',
          'Rimuovere ogni controllo umano',
          'Audit del dataset e regole di revisione per candidati borderline',
          'Disattivare i log del sistema',
        ],
        correct: 2,
        explanation: 'Quando emerge rischio di esclusione ingiusta, servono audit dati e supervisione operativa.'
      },
      {
        question: 'Quale metrica è più utile per valutare qualità di un workflow AI di supporto clienti?',
        options: [
          'Solo numero ticket processati',
          'Tasso di risoluzione corretta al primo contatto',
          'Solo costo mensile cloud',
          'Numero di prompt per operatore',
        ],
        correct: 1,
        explanation: 'La qualità percepita dal cliente dipende dalla correttezza risolutiva, non solo dal volume.'
      },
      {
        question: 'In ottica carriera, quale scelta è più solida nei prossimi anni?',
        options: [
          'Imparare un solo tool e non aggiornarsi più',
          'Combinare skill di dominio, dati e governance AI',
          'Evitare qualsiasi esposizione a processi AI',
          'Concentrarsi solo su velocità di digitazione',
        ],
        correct: 1,
        explanation: 'Il valore professionale cresce con competenze trasferibili e capacità di orchestrazione.'
      },
      {
        question: 'Scenario: il team vuole introdurre AI in 12 processi insieme. Rischio principale?',
        options: [
          'Miglioramento troppo rapido della qualità',
          'Perdita di controllo su priorità, KPI e responsabilità',
          'Riduzione automatica dei costi di training',
          'Eliminazione immediata dei bias',
        ],
        correct: 1,
        explanation: 'Senza rollout graduale e ownership chiara, aumenta il rischio di caos operativo.'
      },
      {
        question: 'Quale combinazione descrive meglio una governance minima per AI nel lavoro?',
        options: [
          'Prompt lunghi + dashboard estetica',
          'KPI definiti + revisione umana nei casi critici + logging',
          'Solo modello più recente disponibile',
          'Solo formazione iniziale una tantum',
        ],
        correct: 1,
        explanation: 'Governance efficace richiede metriche, controllo umano e tracciabilità decisionale.'
      },
      {
        question: 'Se un task richiede empatia, negoziazione o giudizio contestuale, la scelta migliore è:',
        options: [
          'Automazione completa senza eccezioni',
          'Eliminare l\'interazione umana',
          'Modello human-in-the-loop con AI di supporto',
          'Bloccare l\'uso AI in tutto il team',
        ],
        correct: 2,
        explanation: 'Nei task ad alta componente relazionale, AI supporta ma non sostituisce la decisione umana.'
      },
      {
        question: 'Messaggio chiave del Capitolo 12:',
        options: [
          'AI sostituisce ogni professione in modo uniforme',
          'Basta usare più tool per essere competitivi',
          'Adozione AI efficace = task design + skill umane + KPI + supervisione',
          'La governance rallenta sempre e va evitata',
        ],
        correct: 2,
        explanation: 'Il valore nasce dall\'integrazione tra tecnologia, processo e responsabilità.'
      }
    ]
};
