import type { Chapter } from '../types';

export const ch15: Chapter = {
    id: 15,
    slug: 'future-ai',
    title: 'Il Futuro dell\'AI: Scenari, Impatti e Scelte Strategiche',
    description: 'Come prepararsi ai prossimi 5-10 anni dell\'AI con approccio pratico e responsabile',
    sections: [
      {
        title: 'Da Narrow AI a AGI: cosa è realistico oggi',
        content: 'La maggior parte dei sistemi attuali è **narrow AI**: molto forte in compiti specifici, fragile fuori contesto. L\'idea di **AGI** (Artificial General Intelligence) descrive invece un sistema capace di adattarsi trasversalmente a domini diversi con ragionamento robusto. Oggi non siamo a quel livello: abbiamo progressi rapidi, ma anche limiti chiari su affidabilità, causalità e autonomia decisionale in ambienti complessi.\n\n*Nota pratica:* per valutare roadmap e investimenti, distingui sempre "demo impressionante" da "capacità stabile in produzione". <<Takeaway: il futuro si costruisce su evidenze misurabili, non su hype>>.'
      },
      {
        title: 'Trend 2026-2030: cosa cambia davvero nei prodotti',
        content: 'Nei prossimi anni vedremo soprattutto tre direttrici: (1) **copilot verticali** integrati nei workflow, (2) **agent orchestrati** con limiti e approvazioni, (3) **automazione multimodale** (testo, voce, immagini, documenti) nei processi operativi. Il vantaggio competitivo non verrà da "avere l\'AI", ma da come la integri con dati, processi e responsabilità chiare.\n\n*Nota pratica:* ogni iniziativa AI dovrebbe avere baseline, KPI e piano di fallback prima del rilascio. <<Takeaway: scalano i team che trasformano l\'AI in processo, non solo in feature>>.'
      },
      {
        title: 'Opportunità, rischi e governance nel lungo periodo',
        content: 'Le opportunità sono enormi: ricerca scientifica accelerata, salute più personalizzata, formazione adattiva, produttività diffusa. I rischi sono altrettanto concreti: concentrazione di potere, automazione senza tutele, disinformazione scalabile, errori ad alto impatto in settori sensibili.\n\nLa domanda utile non è "AI sì o no", ma **quale AI, con quali controlli, per quali decisioni**. Struttura minima di governance: classificazione rischio, human-in-the-loop nei casi critici, audit trail, monitoraggio continuo e revisione periodica delle policy.'
      },
      {
        title: 'Errore comune + Check rapido',
        content: '**Errore comune:** confondere trend mediatico con priorità strategica del proprio contesto.\n\n**Check rapido (2 min):** scegli un caso AI del tuo dominio e rispondi:\n1) quale problema reale risolve?\n2) quale rischio operativo introduce?\n3) quale controllo metti prima del rollout?'
      }
    ],
    keyTakeaways: [
      'Narrow AI e AGI sono concetti diversi: confonderli porta a decisioni strategiche errate',
      'Nei prossimi anni vinceranno i team che integrano AI in workflow misurabili e governati',
      'Opportunità e rischi crescono insieme: valore senza controllo aumenta il debito operativo',
      'Governance minima: KPI, escalation umana, audit trail, monitoraggio continuo',
      'Learning outcome: costruire una mini roadmap AI con priorità, rischi e metriche di verifica',
    ],
    discussionPrompts: [
      'Nel tuo settore, quale attività cambierà prima con AI: analisi, decisione o esecuzione?',
      'Quali decisioni non automatizzeresti mai senza revisione umana obbligatoria?',
      'Come misureresti se un progetto AI "futuro-oriented" sta creando valore reale oggi?'
    ],
    exercises: [
      {
        title: 'Mini Lab — Roadmap AI 12 mesi (self-paced, senza coding)',
        objective: 'Definire una roadmap AI realistica per un team o una startup bilanciando valore, rischio e governance.',
        duration: '20-30 min',
        steps: [
          'Apri il dataset train CH15 e seleziona 4 scenari con priorità differenti (efficienza, qualità, compliance, crescita).',
          'Per ogni scenario assegna priorità (alta/media/bassa) e indica il principale rischio operativo.',
          'Confronta le tue scelte con validation CH15 e correggi almeno un caso dove la mitigazione era insufficiente.',
          'Scegli uno scenario finale e definisci 3 KPI per i prossimi 90 giorni: impatto, qualità, rischio.'
        ],
        deliverable: 'Checkpoint personale: tabella scenario → priorità → rischio → mitigazione → KPI (90 giorni).',
        resources: [
          { label: 'Dataset train CH15 (CSV)', path: '/datasets/ch15-future-scenarios/train.csv' },
          { label: 'Dataset validation CH15 (CSV)', path: '/datasets/ch15-future-scenarios/validation.csv' },
          { label: 'Schema campi CH15 (JSON)', path: '/datasets/ch15-future-scenarios/schema.json' }
        ]
      }
    ],
    quiz: [
      {
        question: "Qual è la differenza più corretta tra Narrow AI e AGI?",
        options: [
          "Narrow AI usa reti neurali, AGI usa algoritmi classici",
          "Narrow AI eccelle in un dominio specifico, AGI (ipotetica) ragionerebbe autonomamente su qualsiasi problema",
          "Narrow AI è open-source, AGI è sempre proprietaria",
          "Non c'è differenza — AGI è solo marketing",
        ],
        correct: 1,
        explanation: "Tutti i sistemi AI attuali (GPT, Gemini, Copilot) sono Narrow AI: eccezionali nel loro dominio, incapaci di generalizzare fuori. AGI è ancora un obiettivo di ricerca, non un prodotto esistente."
      },
      {
        question: "Un team adotta un copilot AI su assistenza clienti. Quale KPI misura meglio il valore reale nel tempo?",
        options: [
          "Numero di prompt inviati al giorno",
          "Riduzione del tempo medio di risoluzione con tasso di escalation stabile o in calo",
          "Velocità di risposta in millisecondi",
          "Numero di modelli AI provati",
        ],
        correct: 1,
        explanation: "Il valore reale si misura su outcome operativi: meno tempo + qualità stabile. Metriche di volume (prompt/giorno) non dicono nulla sull'impatto sul cliente."
      },
      {
        question: "Quale rischio aumenta quando un agente AI può eseguire tool senza limiti o approvazioni?",
        options: [
          "Il modello diventa troppo lento",
          "Si riduce la context window disponibile",
          "Azioni irreversibili non autorizzate con impatti difficili da tracciare",
          "Il numero di token generati cresce indefinitamente",
        ],
        correct: 2,
        explanation: "Agenti senza guardrail possono eseguire azioni reali (inviare email, modificare DB, spendere budget) in modo autonomo. Senza limiti, approvazioni e audit trail il rischio operativo è molto alto."
      },
      {
        question: "In ottica strategica, quale decisione è più matura per un'organizzazione che vuole adottare AI?",
        options: [
          "Adottare il modello più grande disponibile sul mercato",
          "Identificare un caso d'uso con KPI misurabili, pilotare, misurare, scalare solo se i dati lo giustificano",
          "Aspettare l'AGI prima di investire",
          "Delegare tutte le decisioni AI al reparto IT",
        ],
        correct: 1,
        explanation: "Le organizzazioni che ottengono valore dall'AI partono da problemi concreti con metriche chiare. Adottare AI per seguire il trend senza KPI porta a progetti demo senza ROI reale."
      },
      {
        question: "Un progetto AI aumenta produttività del 30% ma genera errori critici in casi sensibili. Cosa fai?",
        options: [
          "Accetti il trade-off — il 30% vale qualsiasi rischio",
          "Disattivi tutto immediatamente e torni al processo manuale",
          "Segmenti per rischio: usi AI sui casi low-risk, mantieni supervisione umana sui casi critici",
          "Aumenti solo la temperatura del modello",
        ],
        correct: 2,
        explanation: "La segmentazione per rischio è la risposta matura: catturi il valore dove il rischio è basso, proteggi dove il rischio è alto. Non è tutto-o-niente."
      },
      {
        question: "Quale combinazione rappresenta una governance AI minima ma efficace?",
        options: [
          "Solo un documento di policy approvato dal CEO",
          "Policy d'uso + ruoli definiti + monitoring KPI + processo di incident response",
          "Solo audit annuale da parte di una società esterna",
          "Nessuna governance — rallenta l'innovazione",
        ],
        correct: 1,
        explanation: "Governance efficace non significa burocrazia: significa sapere chi decide cosa, come si misura la qualità, come si gestiscono i problemi. Senza questi elementi, l'adozione AI è caotica."
      },
      {
        question: "Quale segnale indica che un progetto AI sta creando valore reale e non solo effetto demo?",
        options: [
          "La demo impressiona il management",
          "Il modello è il più recente disponibile",
          "I KPI operativi migliorano in modo stabile dopo 3+ mesi di produzione",
          "Il team è entusiasta nella fase di sviluppo",
        ],
        correct: 2,
        explanation: "L'effetto demo dura settimane, il valore reale si vede in produzione su mesi. KPI stabili nel tempo (non spike iniziali) sono il segnale affidabile."
      },
      {
        question: "Contenuti sintetici generati automaticamente e pubblicati senza verifica fonte. Rischio principale?",
        options: [
          "Il modello consuma troppi token",
          "La latenza aumenta a causa del volume",
          "Diffusione di informazioni false o distorte con credibilità apparente (allucinazioni a scala)",
          "Il costo del cloud cresce proporzionalmente",
        ],
        correct: 2,
        explanation: "I contenuti AI-generated sembrano autorevoli ma possono contenere fatti inventati. Senza review umana o fact-checking, la scala dell'automazione amplifica il danno informativo."
      },
      {
        question: "Il tuo dominio cambia ogni settimana (nuovi prezzi, policy, cataloghi). Scelta iniziale più robusta?",
        options: [
          "Fine-tuning mensile del modello base",
          "RAG con knowledge base aggiornata che il modello interroga in tempo reale",
          "Zero-shot senza fonti e senza monitoring",
          "Agente autonomo con accesso completo ai sistemi interni senza controlli",
        ],
        correct: 1,
        explanation: "Con contenuti dinamici, il RAG è nettamente superiore: non richiede re-training, si aggiorna cambiando i documenti e garantisce tracciabilità delle fonti. Fine-tuning frequente è costoso e lento."
      },
      {
        question: "Messaggio chiave del Capitolo 15 — Futuro dell'AI:",
        options: [
          "AGI arriverà presto e renderà obsoleto qualsiasi piano strategico attuale",
          "L'AI va adottata tutta e subito per non restare indietro",
          "Il futuro dell'AI si naviga con scelte graduali, misurate, governate — non con hype o paura",
          "Solo le grandi aziende possono usare l'AI in modo responsabile",
        ],
        correct: 2,
        explanation: "Il capitolo conclude con una visione pragmatica: né catastrofismo né entusiasmo acritico. Le organizzazioni che vincono con l'AI scelgono casi concreti, misurano, governano e iterano."
      }
    ]
};