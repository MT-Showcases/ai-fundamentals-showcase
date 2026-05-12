import type { Chapter } from '../types';

export const ch14: Chapter = {
    id: 14,
    slug: 'advanced-patterns',
    title: 'Pattern Avanzati: RAG, Agent e Fine-tuning',
    description: 'Come scegliere e governare architetture AI avanzate in produzione',
    sections: [
      { title: 'RAG: Retrieval-Augmented Generation', content: "Il **RAG** unisce retrieval e generazione: prima recupera documenti affidabili, poi il modello risponde usando quel contesto. È spesso la scelta migliore quando la conoscenza cambia spesso (policy, cataloghi, procedure interne) perché aggiorni i documenti senza riaddestrare i pesi del modello. In pratica, RAG riduce il rischio di risposte obsolete e offre più controllo su fonti e tracciabilità. *Nota operativa:* ogni risposta dovrebbe includere evidenza delle fonti usate.  Nei pattern avanzati diventano centrali **LLM**, limiti di **Context Window** e orchestrazione con **Agente Autonomo** supervisionato. <<Takeaway: RAG è efficace quando servono aggiornabilità, controllo e auditabilità>>." },
      { title: 'Agent AI e Tool-use', content: "Un **agent** non si limita a generare testo: pianifica step, usa strumenti e verifica risultati rispetto a un obiettivo. Questo aumenta il valore operativo, ma anche il rischio: errori di tool-call, azioni non autorizzate, loop non controllati. Per questo servono permessi granulari, limiti di budget/tempo e conferme su azioni sensibili. *Nota operativa:* definisci sempre quali tool sono consentiti, con quali parametri e in quali condizioni. <<Takeaway: un agent affidabile è prima di tutto governato>>." },
      { title: 'Fine-tuning: quando conviene davvero', content: "Il **fine-tuning** è utile quando hai pattern ricorrenti e mismatch persistente che prompt+RAG non risolvono in modo stabile. Non è il primo passo: richiede dataset curato, valutazioni robuste e ciclo di aggiornamento dei dati. In molti casi, una baseline con prompt strutturato + retrieval ben fatto offre ROI più rapido e meno complessità operativa. *Nota operativa:* scegli tuning solo dopo benchmark comparativi con KPI chiari su qualità, costo e latenza. <<Takeaway: tuning sì, ma solo con evidenza misurabile>>." },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** scegliere l'architettura più complessa senza baseline e senza KPI.\n\n**Check rapido (2 min):** per un caso reale del tuo dominio, rispondi:\n1) quale problema risolvi (qualità, aggiornabilità, automazione)?\n2) quale opzione parte per prima (prompt, RAG o agent) e perché?\n3) quale metrica userai entro 2 settimane per confermare la scelta?" }
    ],
    keyTakeaways: [
      'RAG migliora aggiornabilità e controllo delle fonti',
      'Gli agent richiedono governance: permessi, limiti e audit trail',
      'Fine-tuning è efficace solo con gap persistenti e dati curati',
      'La scelta architetturale va guidata da KPI, non dall\'hype',
      'Learning outcome: progettare un flusso avanzato con guardrail e metriche operative',
    ],
    discussionPrompts: [
      'Nel tuo prodotto, quale parte richiede aggiornabilità continua e quindi favorisce RAG?',
      'Quali azioni di un agent dovrebbero richiedere approvazione umana obbligatoria?',
      'Quale segnale concreto ti direbbe che è arrivato il momento del fine-tuning?'
    ],
    challenge: {
      id: 'ch14-architecture-review',
      title: 'Architecture Review — RAG vs Agent vs Fine-tuning',
      intro: 'Analizza gli scenari avanzati e identifica dove la strategia scelta richiede più guardrail o escalation.',
      scoringMode: 'balanced',
      table: {
        columns: ['case_id', 'domain', 'knowledge_change_rate', 'action_automation_needed', 'compliance_risk', 'response_accuracy_need', 'budget_level', 'latency_tolerance', 'recommended_strategy'],
        rows: [
          { case_id: 'CH14-001', domain: 'customer_support', knowledge_change_rate: 'high', action_automation_needed: 'low', compliance_risk: 'medium', response_accuracy_need: 'high', budget_level: 'medium', latency_tolerance: 'moderate', recommended_strategy: 'rag' },
          { case_id: 'CH14-002', domain: 'internal_wiki_qa', knowledge_change_rate: 'high', action_automation_needed: 'low', compliance_risk: 'low', response_accuracy_need: 'medium', budget_level: 'low', latency_tolerance: 'moderate', recommended_strategy: 'rag' },
          { case_id: 'CH14-003', domain: 'invoice_reconciliation', knowledge_change_rate: 'medium', action_automation_needed: 'high', compliance_risk: 'high', response_accuracy_need: 'high', budget_level: 'medium', latency_tolerance: 'strict', recommended_strategy: 'agent_assisted' },
          { case_id: 'CH14-004', domain: 'policy_qa_regulated', knowledge_change_rate: 'high', action_automation_needed: 'high', compliance_risk: 'high', response_accuracy_need: 'high', budget_level: 'medium', latency_tolerance: 'strict', recommended_strategy: 'prompt_only' }
        ]
      },
      phases: [
        {
          id: 'wrong-strategy',
          title: 'Fase 1',
          instruction: 'Seleziona la cella recommended_strategy più rischiosa/non coerente.',
          selectionMode: 'cell',
          correctCells: [{ row: 3, column: 'recommended_strategy' }]
        },
        {
          id: 'guardrail-columns',
          title: 'Fase 2',
          instruction: 'Seleziona le colonne da usare sempre come guardrail decisionali.',
          selectionMode: 'column',
          correctColumns: ['compliance_risk', 'action_automation_needed', 'response_accuracy_need', 'recommended_strategy']
        }
      ]
    },
    quiz: [
      {
        question: 'Una knowledge base interna cambia ogni giorno. Strategia iniziale più sensata?',
        options: [
          'Fine-tuning immediato',
          'RAG con retrieval su documenti aggiornati',
          'Solo zero-shot senza fonti',
          'Agent con accesso completo senza controlli',
        ],
        correct: 1,
        explanation: 'Con contenuti dinamici il RAG riduce latenza di aggiornamento e migliora tracciabilità.'
      },
      {
        question: 'Qual è il rischio operativo principale di un agent con tool finanziari?',
        options: [
          'Prompt troppo corto',
          'Output troppo sintetico',
          'Azioni irreversibili non autorizzate',
          'Numero basso di token',
        ],
        correct: 2,
        explanation: 'Con tool ad alto impatto servono limiti, approvazioni e audit trail.'
      },
      {
        question: 'Quando il fine-tuning è davvero giustificato?',
        options: [
          'Sempre, per default',
          'Quando vuoi ridurre il lavoro di valutazione',
          'Quando il dataset è piccolo e rumoroso',
          'Quando prompt+RAG mostrano gap persistenti su KPI critici',
        ],
        correct: 3,
        explanation: 'Il tuning va deciso con evidenza misurabile, non per preferenza tecnologica.'
      },
      {
        question: 'Quale set di controlli è più robusto per agent in produzione?',
        options: [
          'Permessi granulari + limiti budget/tempo + human approval su azioni sensibili',
          'Solo temperature bassa',
          'Solo logging UI',
          'Nessun fallback per velocità',
        ],
        correct: 0,
        explanation: 'La governance operativa riduce rischio tecnico e business.'
      },
      {
        question: 'Scenario: risposte corrette ma senza citazioni fonte. Cosa manca?',
        options: [
          'Più GPU',
          'Più token in output',
          'Tracciabilità e verificabilità del retrieval',
          'Cambio linguaggio di programmazione',
        ],
        correct: 2,
        explanation: 'In RAG la citazione fonte è parte chiave del controllo qualità.'
      },
      {
        question: 'In una scelta architetturale, quale metrica combina qualità e rischio?',
        options: [
          'Solo latenza media',
          'Quality pass rate segmentato + incident rate',
          'Solo costo mensile cloud',
          'Solo numero prompt/giorno',
        ],
        correct: 1,
        explanation: 'Valutare segmenti e incidenti evita decisioni basate su medie fuorvianti.'
      },
      {
        question: 'Se un agent entra in loop di retry su API esterna, prima mitigazione?',
        options: [
          'Circuit breaker con retry cap e timeout',
          'Aumentare max token',
          'Aumentare temperatura',
          'Eliminare logging',
        ],
        correct: 0,
        explanation: 'Limiti di retry/tempo prevengono consumo incontrollato e failure a cascata.'
      },
      {
        question: 'Quale segnale suggerisce di restare su RAG e NON passare a tuning?',
        options: [
          'Hai budget alto',
          'Dati e policy cambiano frequentemente',
          'Vuoi una demo più complessa',
          'Il team preferisce modelli custom',
        ],
        correct: 1,
        explanation: 'Quando la conoscenza cambia spesso, RAG è più agile e manutenibile.'
      },
      {
        question: 'Scenario compliance: dominio regolato con decisioni ad alto impatto. Cosa è prioritario?',
        options: [
          'Rimuovere tutte le approvazioni',
          'Nascondere i fallimenti agli utenti',
          'Definire escalation umana e audit log obbligatori',
          'Usare solo output creativo',
        ],
        correct: 2,
        explanation: 'Nei contesti high-stakes conta la governance verificabile oltre alla performance.'
      },
      {
        question: 'Messaggio chiave del capitolo 14:',
        options: [
          'Più complesso è sempre meglio',
          'Basta un modello grande per risolvere tutto',
          'Gli agent non hanno bisogno di controlli',
          'Pattern avanzati efficaci = scelta guidata da KPI + guardrail + monitoraggio continuo',
        ],
        correct: 3,
        explanation: 'Il valore reale nasce da architettura appropriata e controllo operativo.'
      }
    ]
};
