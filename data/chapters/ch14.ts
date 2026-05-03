import type { Chapter } from '../types';

export const ch14: Chapter = {
    id: 14,
    slug: 'advanced-patterns',
    title: 'Pattern Avanzati: RAG, Agent e Fine-tuning',
    description: 'Come scegliere e governare architetture AI avanzate in produzione',
    sections: [
      { title: 'RAG: Retrieval-Augmented Generation', content: "Il **RAG** unisce retrieval e generazione: prima recupera documenti affidabili, poi il modello risponde usando quel contesto. È spesso la scelta migliore quando la conoscenza cambia spesso (policy, cataloghi, procedure interne) perché aggiorni i documenti senza riaddestrare i pesi del modello. In pratica, RAG riduce il rischio di risposte obsolete e offre più controllo su fonti e tracciabilità. *Nota operativa:* ogni risposta dovrebbe includere evidenza delle fonti usate. <<Takeaway: RAG è efficace quando servono aggiornabilità, controllo e auditabilità>>." },
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
    exercises: [
      {
        title: 'Mini Lab — Scelta architettura avanzata (self-paced, senza coding)',
        objective: 'Confrontare prompt-only, RAG e agent su uno scenario reale usando criteri tecnici e business.',
        duration: '20-25 min',
        steps: [
          'Apri il dataset train CH14 e scegli 3 scenari con vincoli diversi (qualità, tempo, compliance).',
          'Per ogni scenario proponi una strategia iniziale: prompt-only, RAG o agent assistito.',
          'Confronta le tue scelte con il validation CH14 e identifica un caso in cui servirebbe escalation umana.',
          'Definisci 3 KPI di verifica per le prime 2 settimane: quality pass rate, fallback rate, costo per task.'
        ],
        deliverable: 'Checkpoint personale: tabella scenario → strategia → rischio principale → KPI di monitoraggio.',
        resources: [
          { label: 'Dataset train CH14 (CSV)', path: '/datasets/ch14-advanced-patterns/train.csv' },
          { label: 'Dataset validation CH14 (CSV)', path: '/datasets/ch14-advanced-patterns/validation.csv' },
          { label: 'Schema campi CH14 (JSON)', path: '/datasets/ch14-advanced-patterns/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'Una knowledge base interna cambia ogni giorno. Strategia iniziale più sensata?', options: ['Fine-tuning immediato', 'RAG con retrieval su documenti aggiornati', 'Solo zero-shot senza fonti', 'Agent con accesso completo senza controlli'], correct: 1, explanation: 'Con contenuti dinamici il RAG riduce latenza di aggiornamento e migliora tracciabilità.' },
      { question: 'Qual è il rischio operativo principale di un agent con tool finanziari?', options: ['Prompt troppo corto', 'Azioni irreversibili non autorizzate', 'Output troppo sintetico', 'Numero basso di token'], correct: 1, explanation: 'Con tool ad alto impatto servono limiti, approvazioni e audit trail.' },
      { question: 'Quando il fine-tuning è davvero giustificato?', options: ['Sempre, per default', 'Quando prompt+RAG mostrano gap persistenti su KPI critici', 'Quando vuoi ridurre il lavoro di valutazione', 'Quando il dataset è piccolo e rumoroso'], correct: 1, explanation: 'Il tuning va deciso con evidenza misurabile, non per preferenza tecnologica.' },
      { question: 'Quale set di controlli è più robusto per agent in produzione?', options: ['Permessi granulari + limiti budget/tempo + human approval su azioni sensibili', 'Solo temperature bassa', 'Solo logging UI', 'Nessun fallback per velocità'], correct: 0, explanation: 'La governance operativa riduce rischio tecnico e business.' },
      { question: 'Scenario: risposte corrette ma senza citazioni fonte. Cosa manca?', options: ['Più GPU', 'Tracciabilità e verificabilità del retrieval', 'Più token in output', 'Cambio linguaggio di programmazione'], correct: 1, explanation: 'In RAG la citazione fonte è parte chiave del controllo qualità.' },
      { question: 'In una scelta architetturale, quale metrica combina qualità e rischio?', options: ['Solo latenza media', 'Quality pass rate segmentato + incident rate', 'Solo costo mensile cloud', 'Solo numero prompt/giorno'], correct: 1, explanation: 'Valutare segmenti e incidenti evita decisioni basate su medie fuorvianti.' },
      { question: 'Se un agent entra in loop di retry su API esterna, prima mitigazione?', options: ['Aumentare max token', 'Circuit breaker con retry cap e timeout', 'Aumentare temperatura', 'Eliminare logging'], correct: 1, explanation: 'Limiti di retry/tempo prevengono consumo incontrollato e failure a cascata.' },
      { question: 'Quale segnale suggerisce di restare su RAG e NON passare a tuning?', options: ['Dati e policy cambiano frequentemente', 'Hai budget alto', 'Vuoi una demo più complessa', 'Il team preferisce modelli custom'], correct: 0, explanation: 'Quando la conoscenza cambia spesso, RAG è più agile e manutenibile.' },
      { question: 'Scenario compliance: dominio regolato con decisioni ad alto impatto. Cosa è prioritario?', options: ['Rimuovere tutte le approvazioni', 'Definire escalation umana e audit log obbligatori', 'Nascondere i fallimenti agli utenti', 'Usare solo output creativo'], correct: 1, explanation: 'Nei contesti high-stakes conta la governance verificabile oltre alla performance.' },
      { question: 'Messaggio chiave del capitolo 14:', options: ['Pattern avanzati efficaci = scelta guidata da KPI + guardrail + monitoraggio continuo', 'Più complesso è sempre meglio', 'Basta un modello grande per risolvere tutto', 'Gli agent non hanno bisogno di controlli'], correct: 0, explanation: 'Il valore reale nasce da architettura appropriata e controllo operativo.' }
    ]
};
