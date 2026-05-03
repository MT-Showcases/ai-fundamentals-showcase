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
        question: 'Qual è la differenza più corretta tra narrow AI e AGI?',
        options: [
          'Narrow AI è specializzata, AGI implicherebbe adattamento generale multi-dominio',
          'Sono sinonimi usati in modo diverso dai media',
          'AGI è un tipo di database per modelli avanzati',
          'Narrow AI è sempre non supervisionata, AGI sempre supervisionata',
        ],
        correct: 0,
        explanation: 'La narrow AI eccelle in task specifici; AGI descrive capacità trasversali e adattive non ancora raggiunte.'
      },
      {
        question: 'Scenario: un team adotta un copilot su assistenza clienti. Quale KPI è più utile per misurare valore reale?',
        options: [
          'Riduzione tempo medio risposta con tasso di risoluzione corretta stabile',
          'Numero di prompt inviati al giorno',
          'Numero di pagine della documentazione interna',
          'Tempo medio di avvio del browser',
        ],
        correct: 0,
        explanation: 'Velocità senza qualità non basta: il KPI deve combinare efficienza e correttezza.'
      },
      {
        question: 'Quale rischio aumenta quando un agent può eseguire tool senza limiti o approvazioni?',
        options: [
          'Azioni non autorizzate e incidenti operativi ad alto impatto',
          'Riduzione automatica del debito tecnico',
          'Eliminazione della necessità di logging',
          'Maggiore spiegabilità del modello',
        ],
        correct: 0,
        explanation: 'La governance di agent richiede confini chiari su tool, budget e azioni sensibili.'
      },
      {
        question: 'In ottica strategica, quale decisione è più matura?',
        options: [
          'Partire da use case con baseline e KPI prima di scalare',
          'Avviare 20 iniziative AI contemporaneamente senza priorità',
          'Scegliere tecnologie solo in base all\'hype',
          'Valutare i risultati solo a fine anno',
        ],
        correct: 0,
        explanation: 'La scalabilità sostenibile parte da sperimentazioni misurabili e progressive.'
      },
      {
        question: 'Scenario: un progetto AI aumenta produttività, ma genera errori critici in casi sensibili. Cosa fai?',
        options: [
          'Introduci escalation umana e regole di fallback sui casi ad alto rischio',
          'Ignori gli errori perché la media è migliorata',
          'Aumenti solo la lunghezza del prompt',
          'Rimuovi completamente ogni monitoraggio',
        ],
        correct: 0,
        explanation: 'Quando cresce il rischio sui casi critici, il controllo umano è prioritario rispetto alla sola velocità.'
      },
      {
        question: 'Quale combinazione rappresenta meglio una governance minima per iniziative AI future-ready?',
        options: [
          'Classificazione rischio + KPI + audit trail + review periodica',
          'Solo policy legale statica',
          'Solo benchmark di latenza',
          'Solo scelta del modello più recente',
        ],
        correct: 0,
        explanation: 'Serve un sistema operativo completo: rischio, metriche, tracciabilità e miglioramento continuo.'
      },
      {
        question: 'Quale segnale indica che un progetto AI sta creando valore reale e non solo effetto demo?',
        options: [
          'Migliora KPI di business mantenendo sotto controllo incidenti e rework',
          'Riceve molti like interni nella presentazione',
          'Usa il modello più grande disponibile',
          'Ha il maggior numero di slide nel kick-off',
        ],
        correct: 0,
        explanation: 'Il valore reale emerge da impatto misurabile e qualità operativa nel tempo.'
      },
      {
        question: 'Scenario pubblico: contenuti sintetici generati automaticamente senza verifica fonte. Rischio principale?',
        options: [
          'Disinformazione scalabile con perdita di fiducia',
          'Riduzione del costo cloud',
          'Miglioramento automatico della compliance',
          'Eliminazione della necessità di editor umani',
        ],
        correct: 0,
        explanation: 'Senza verifica delle fonti, l\'errore si propaga rapidamente su larga scala.'
      },
      {
        question: 'Se il tuo dominio cambia ogni settimana (policy, cataloghi, prezzi), quale scelta iniziale è più robusta?',
        options: [
          'RAG con base documentale aggiornata e tracciabilità fonti',
          'Fine-tuning continuo senza governance',
          'Zero-shot senza monitoraggio',
          'Disattivare fallback per velocità',
        ],
        correct: 0,
        explanation: 'Con conoscenza dinamica, retrieval aggiornabile offre maggiore controllo e sostenibilità.'
      },
      {
        question: 'Messaggio chiave del Capitolo 15:',
        options: [
          'Futuro AI efficace = scelte progressive, metriche chiare e governance operativa',
          'Il futuro dipende solo dalla potenza del modello',
          'Basta accelerare senza controlli per vincere il mercato',
          'Etica e sicurezza rallentano sempre e vanno ridotte',
        ],
        correct: 0,
        explanation: 'La crescita AI sostenibile unisce innovazione, qualità e responsabilità in un unico processo.'
      }
    ]
};
