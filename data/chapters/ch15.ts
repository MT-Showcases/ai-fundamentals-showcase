import type { Chapter } from '../types';

export const ch15: Chapter = {
    id: 15,
    slug: 'future-ai',
    title: 'Il Futuro dell\'AI: Scenari, Impatti e Scelte Strategiche',
    description: 'Come prepararsi ai prossimi 5-10 anni dell\'AI con approccio pratico e responsabile',
    sections: [
      {
        title: 'Da Narrow AI a AGI: cosa è realistico oggi',
        content: 'La maggior parte dei sistemi attuali è **narrow AI**: molto forte in compiti specifici, fragile fuori contesto. L\'idea di **AGI** (Artificial General Intelligence) descrive invece un sistema capace di adattarsi trasversalmente a domini diversi con ragionamento robusto. Oggi non siamo a quel livello: abbiamo progressi rapidi, ma anche limiti chiari su affidabilità, causalità e autonomia decisionale in ambienti complessi. La traiettoria attuale è trainata da **Deep Learning**, non da una AGI già matura.\n\n*Nota pratica:* per valutare roadmap e investimenti, distingui sempre "demo impressionante" da "capacità stabile in produzione". <<Takeaway: il futuro si costruisce su evidenze misurabili, non su hype>>.'
      },
      {
        title: 'Trend 2026-2030: cosa cambia davvero nei prodotti',
        content: 'Nei prossimi anni vedremo soprattutto tre direttrici, con forte accelerazione dell\'**AI Generativa**: (1) **copilot verticali** integrati nei workflow, (2) **agent orchestrati** con limiti e approvazioni, (3) **automazione multimodale** (testo, voce, immagini, documenti) nei processi operativi. Il vantaggio competitivo non verrà da "avere l\'AI", ma da come la integri con dati, processi e responsabilità chiare.\n\n*Nota pratica:* ogni iniziativa AI dovrebbe avere baseline, KPI e piano di fallback prima del rilascio. <<Takeaway: scalano i team che trasformano l\'AI in processo, non solo in feature>>.'
      },
      {
        title: 'Opportunità, rischi e governance nel lungo periodo',
        content: 'Le opportunità sono enormi: ricerca scientifica accelerata, salute più personalizzata, formazione adattiva, produttività diffusa. I rischi sono altrettanto concreti: concentrazione di potere, automazione senza tutele, disinformazione scalabile, errori ad alto impatto in settori sensibili.\n\nLa domanda utile non è "AI sì o no", ma **quale AI, con quali controlli, per quali decisioni**. In alcuni casi evoluti vedremo anche loop di **Reinforcement Learning** e pratiche di **RLHF** per allineare meglio i sistemi. Struttura minima di governance: classificazione rischio, human-in-the-loop nei casi critici, audit trail, monitoraggio continuo e revisione periodica delle policy.'
      },
      {
        title: 'Errore comune + Check rapido',
        content: '**Errore comune:** confondere trend mediatico con priorità strategica del proprio contesto.\n\n**Check rapido (2 min):** scegli un caso AI del tuo dominio e rispondi:\n1) quale problema reale risolve?\n2) quale rischio operativo introduce?\n3) quale controllo metti prima del rollout, nel rispetto di principi di **Etica AI**?'
      }
    ],
    media: [
      {
        type: 'infographic',
        title: 'Infografica Capitolo 15',
        description: 'Scenario map sul futuro dell’AI: impatti, rischi e scelte strategiche nei prossimi 5-10 anni.',
        placeholderPath: 'media/ch15-future-ai/infographic.jpg',
        notes: 'ready'
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
    challenge: {
      id: 'ch15-roadmap-review',
      title: 'Roadmap Review — Futuro AI',
      intro: 'Valuta scenari futuri e individua dove strategia o mitigazioni sono insufficienti per il rischio dichiarato.',
      scoringMode: 'balanced',
      table: {
        columns: ['scenario_id', 'domain', 'initiative', 'horizon', 'expected_value', 'risk_level', 'data_readiness', 'governance_maturity', 'recommended_strategy', 'primary_kpi', 'primary_mitigation'],
        rows: [
          { scenario_id: 'CH15-001', domain: 'Healthcare', initiative: 'AI triage support', horizon: '6-month', expected_value: 'high', risk_level: 'high', data_readiness: 'medium', governance_maturity: 'medium', recommended_strategy: 'human_in_the_loop + risk segmentation', primary_kpi: 'triage_accuracy_critical_cases', primary_mitigation: 'mandatory_clinician_review_for_high_impact' },
          { scenario_id: 'CH15-002', domain: 'E-commerce', initiative: 'Multimodal product assistant', horizon: '3-month', expected_value: 'medium', risk_level: 'medium', data_readiness: 'high', governance_maturity: 'medium', recommended_strategy: 'rag + fallback_human', primary_kpi: 'first_contact_resolution_rate', primary_mitigation: 'confidence_threshold_and_escalation' },
          { scenario_id: 'CH15-003', domain: 'Education', initiative: 'Adaptive feedback generator', horizon: '6-month', expected_value: 'high', risk_level: 'medium', data_readiness: 'medium', governance_maturity: 'low', recommended_strategy: 'pilot_with_guardrails', primary_kpi: 'learning_outcome_improvement', primary_mitigation: 'teacher_validation_on_assessment_outputs' },
          { scenario_id: 'CH15-004', domain: 'Finance', initiative: 'Auto-credit approval', horizon: '3-month', expected_value: 'high', risk_level: 'high', data_readiness: 'low', governance_maturity: 'low', recommended_strategy: 'full_automation_fast_rollout', primary_kpi: 'approval_speed', primary_mitigation: 'none' }
        ]
      },
      phases: [
        {
          id: 'critical-wrong-cells',
          title: 'Fase 1',
          instruction: 'Seleziona le celle critiche errate o insufficienti nello scenario più rischioso.',
          selectionMode: 'cell',
          correctCells: [
            { row: 3, column: 'recommended_strategy' },
            { row: 3, column: 'primary_mitigation' }
          ]
        },
        {
          id: 'high-risk-rows',
          title: 'Fase 2',
          instruction: 'Seleziona le righe high-risk che richiedono governance forte.',
          selectionMode: 'row',
          correctRows: [0, 3]
        }
      ]
    },
    quiz: [
      {
        question: 'Qual è la differenza più corretta tra Narrow AI e AGI?',
        options: [
          'Narrow AI usa reti neurali, AGI usa algoritmi classici',
          'Narrow AI è open-source, AGI è sempre proprietaria',
          'Narrow AI eccelle in un dominio specifico, AGI (ipotetica) ragionerebbe autonomamente su qualsiasi problema',
          'Non c\'è differenza — AGI è solo marketing',
        ],
        correct: 2,
        explanation: 'Tutti i sistemi AI attuali (GPT, Gemini, Copilot) sono Narrow AI: eccezionali nel loro dominio, incapaci di generalizzare fuori. AGI è ancora un obiettivo di ricerca, non un prodotto esistente.'
      },
      {
        question: 'Un team adotta un copilot AI su assistenza clienti. Quale KPI misura meglio il valore reale nel tempo?',
        options: [
          'Numero di prompt inviati al giorno',
          'Velocità di risposta in millisecondi',
          'Numero di modelli AI provati',
          'Riduzione del tempo medio di risoluzione con tasso di escalation stabile o in calo',
        ],
        correct: 3,
        explanation: 'Il valore reale si misura su outcome operativi: meno tempo + qualità stabile. Metriche di volume (prompt/giorno) non dicono nulla sull\'impatto sul cliente.'
      },
      {
        question: 'Quale rischio aumenta quando un agente AI può eseguire tool senza limiti o approvazioni?',
        options: [
          'Azioni irreversibili non autorizzate con impatti difficili da tracciare',
          'Il modello diventa troppo lento',
          'Si riduce la context window disponibile',
          'Il numero di token generati cresce indefinitamente',
        ],
        correct: 0,
        explanation: 'Agenti senza guardrail possono eseguire azioni reali (inviare email, modificare DB, spendere budget) in modo autonomo. Senza limiti, approvazioni e audit trail il rischio operativo è molto alto.'
      },
      {
        question: 'In ottica strategica, quale decisione è più matura per un\'organizzazione che vuole adottare AI?',
        options: [
          'Adottare il modello più grande disponibile sul mercato',
          'Aspettare l\'AGI prima di investire',
          'Identificare un caso d\'uso con KPI misurabili, pilotare, misurare, scalare solo se i dati lo giustificano',
          'Delegare tutte le decisioni AI al reparto IT',
        ],
        correct: 2,
        explanation: 'Le organizzazioni che ottengono valore dall\'AI partono da problemi concreti con metriche chiare. Adottare AI per seguire il trend senza KPI porta a progetti demo senza ROI reale.'
      },
      {
        question: 'Un progetto AI aumenta produttività del 30% ma genera errori critici in casi sensibili. Cosa fai?',
        options: [
          'Accetti il trade-off — il 30% vale qualsiasi rischio',
          'Segmenti per rischio: usi AI sui casi low-risk, mantieni supervisione umana sui casi critici',
          'Disattivi tutto immediatamente e torni al processo manuale',
          'Aumenti solo la temperatura del modello',
        ],
        correct: 1,
        explanation: 'La segmentazione per rischio è la risposta matura: catturi il valore dove il rischio è basso, proteggi dove il rischio è alto. Non è tutto-o-niente.'
      },
      {
        question: 'Quale combinazione rappresenta una governance AI minima ma efficace?',
        options: [
          'Policy d\'uso + ruoli definiti + monitoring KPI + processo di incident response',
          'Solo un documento di policy approvato dal CEO',
          'Solo audit annuale da parte di una società esterna',
          'Nessuna governance — rallenta l\'innovazione',
        ],
        correct: 0,
        explanation: 'Governance efficace non significa burocrazia: significa sapere chi decide cosa, come si misura la qualità, come si gestiscono i problemi. Senza questi elementi, l\'adozione AI è caotica.'
      },
      {
        question: 'Quale segnale indica che un progetto AI sta creando valore reale e non solo effetto demo?',
        options: [
          'La demo impressiona il management',
          'I KPI operativi migliorano in modo stabile dopo 3+ mesi di produzione',
          'Il modello è il più recente disponibile',
          'Il team è entusiasta nella fase di sviluppo',
        ],
        correct: 1,
        explanation: 'L\'effetto demo dura settimane, il valore reale si vede in produzione su mesi. KPI stabili nel tempo (non spike iniziali) sono il segnale affidabile.'
      },
      {
        question: 'Contenuti sintetici generati automaticamente e pubblicati senza verifica fonte. Rischio principale?',
        options: [
          'Il modello consuma troppi token',
          'La latenza aumenta a causa del volume',
          'Diffusione di informazioni false o distorte con credibilità apparente (allucinazioni a scala)',
          'Il costo del cloud cresce proporzionalmente',
        ],
        correct: 2,
        explanation: 'I contenuti AI-generated sembrano autorevoli ma possono contenere fatti inventati. Senza review umana o fact-checking, la scala dell\'automazione amplifica il danno informativo.'
      },
      {
        question: 'Il tuo dominio cambia ogni settimana (nuovi prezzi, policy, cataloghi). Scelta iniziale più robusta?',
        options: [
          'Fine-tuning mensile del modello base',
          'Zero-shot senza fonti e senza monitoring',
          'Agente autonomo con accesso completo ai sistemi interni senza controlli',
          'RAG con knowledge base aggiornata che il modello interroga in tempo reale',
        ],
        correct: 3,
        explanation: 'Con contenuti dinamici, il RAG è nettamente superiore: non richiede re-training, si aggiorna cambiando i documenti e garantisce tracciabilità delle fonti. Fine-tuning frequente è costoso e lento.'
      },
      {
        question: 'Messaggio chiave del Capitolo 15 — Futuro dell\'AI:',
        options: [
          'AGI arriverà presto e renderà obsoleto qualsiasi piano strategico attuale',
          'Il futuro dell\'AI si naviga con scelte graduali, misurate, governate — non con hype o paura',
          'L\'AI va adottata tutta e subito per non restare indietro',
          'Solo le grandi aziende possono usare l\'AI in modo responsabile',
        ],
        correct: 1,
        explanation: 'Il capitolo conclude con una visione pragmatica: né catastrofismo né entusiasmo acritico. Le organizzazioni che vincono con l\'AI scelgono casi concreti, misurano, governano e iterano.'
      }
    ]
};
