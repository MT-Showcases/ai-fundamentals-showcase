import type { Chapter } from '../types';

export const ch09: Chapter = {
    id: 9,
    slug: 'fine-tuning',
    title: 'Fine-Tuning e Transfer Learning',
    description: 'Come personalizzare modelli esistenti',
    sections: [
      { title: 'Transfer Learning', content: "Il **transfer learning** parte da un modello pre-addestrato e lo adatta al dominio target. Riduce tempi e costi rispetto al training da zero.\n\n*Nota pratica:* funziona meglio quando i domini sono abbastanza vicini.  In questo scenario conta integrare **LLM**, fase di **Pre-training**, scelta di **Iperparametro** e controllo di **Overfitting**. <<Takeaway: riuso intelligente > ricostruzione da zero>>." },
      { title: 'Fine-tuning vs Zero-shot', content: "Zero-shot è rapido da avviare; fine-tuning richiede investimento ma può migliorare consistenza su task specifici.\n\n*Nota pratica:* valuta sempre costo, aggiornabilità e qualità richiesta. <<Takeaway: la scelta tecnica deve avere ROI chiaro>>." },
      { title: 'Startup Lens', content: "Spesso conviene partire con RAG + prompt robusti e passare al fine-tuning solo con evidenza di gap persistenti." },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** fare tuning troppo presto senza baseline.\n\n**Check rapido (2 min):** indica 2 segnali che mostrano che prompt+RAG non bastano più." }
    ],
    keyTakeaways: [
      'Transfer learning accelera go-to-market',
      'Fine-tuning migliora task specifici se motivato',
      'RAG è forte su contenuti aggiornabili',
      'Non esiste una scelta universale',
      'Learning outcome: scegliere tra zero-shot, RAG e fine-tuning su un caso reale',
    ],
    discussionPrompts: [
      'Quando il costo del fine-tuning è giustificato?',
      'Quale rischio vedi nel tuning con dati poco curati?',
      'In quali scenari RAG resta preferibile?'
    ],
    challenge: {
      id: 'ch09-strategy-review',
      title: 'Strategy Review — Zero-shot vs RAG vs Fine-tuning',
      intro: 'Valuta ogni scenario e individua dove la strategia proposta è debole o ad alto rischio.',
      scoringMode: 'balanced',
      table: {
        columns: ['scenario_id', 'domain', 'data_freshness', 'accuracy_need', 'budget_level', 'time_to_market', 'recommended_strategy'],
        rows: [
          { scenario_id: 'S001', domain: 'customer_support', data_freshness: 'high', accuracy_need: 'high', budget_level: 'medium', time_to_market: 'fast', recommended_strategy: 'rag' },
          { scenario_id: 'S002', domain: 'legal_ops', data_freshness: 'medium', accuracy_need: 'high', budget_level: 'high', time_to_market: 'medium', recommended_strategy: 'fine_tuning' },
          { scenario_id: 'S003', domain: 'marketing', data_freshness: 'high', accuracy_need: 'medium', budget_level: 'low', time_to_market: 'fast', recommended_strategy: 'zero_shot' },
          { scenario_id: 'S004', domain: 'finance_reporting', data_freshness: 'high', accuracy_need: 'high', budget_level: 'medium', time_to_market: 'fast', recommended_strategy: 'zero_shot' }
        ]
      },
      phases: [
        {
          id: 'wrong-strategy-cell',
          title: 'Fase 1',
          instruction: 'Seleziona la cella recommended_strategy che ritieni errata rispetto ai vincoli.',
          selectionMode: 'cell',
          correctCells: [{ row: 3, column: 'recommended_strategy' }]
        },
        {
          id: 'decision-columns',
          title: 'Fase 2',
          instruction: 'Seleziona le colonne chiave per prendere una decisione di strategia.',
          selectionMode: 'column',
          correctColumns: ['data_freshness', 'accuracy_need', 'budget_level', 'time_to_market']
        }
      ]
    },
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 9',
        description: 'Video completo Capitolo 9: quando usare fine-tuning, confronto con RAG e roadmap decisionale per startup.',
        estimatedDuration: '9 min',
        placeholderPath: 'media/ch09-fine-tuning/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 9',
        description: 'Podcast di approfondimento sulle strategie di adattamento AI e trade-off costo/beneficio.',
        estimatedDuration: '18 min',
        placeholderPath: 'media/ch09-fine-tuning/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 9',
        description: 'Strategie di adattamento AI: zero-shot vs RAG vs fine-tuning, con roadmap decisionale e rischio tuning precoce.',
        placeholderPath: 'media/ch09-fine-tuning/infographic.jpg',
        notes: 'ready'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Materiale scaricabile per supportare decisioni tecniche su adaptation strategy.',
        placeholderPath: 'media/ch09-fine-tuning/handout.pdf',
        notes: 'placeholder'
      }
    ],
    quiz: [
      {
        question: 'Scenario: FAQ prodotto aggiornate ogni settimana. Strategia iniziale più sensata?',
        options: [
          'Fine-tuning immediato mensile',
          'RAG con base documentale aggiornata',
          'Zero-shot senza monitoraggio',
          'Training da zero con dataset sintetico',
        ],
        correct: 1,
        explanation: 'Con contenuti dinamici, RAG è più flessibile e sostenibile.'
      },
      {
        question: 'Quando il fine-tuning è realmente giustificato?',
        options: [
          'Quando esiste gap persistente dopo baseline solide',
          'Sempre, appena il progetto parte',
          'Quando non hai KPI',
          'Quando vuoi ridurre il lavoro di QA a zero',
        ],
        correct: 0,
        explanation: 'Serve evidenza misurabile che alternative più semplici non bastano.'
      },
      {
        question: 'Rischio tipico del fine-tuning con dataset sbilanciato:',
        options: [
          'Miglior spiegabilità automatica',
          'Over-specializzazione e peggioramento su casi rari',
          'Riduzione costi cloud garantita',
          'Eliminazione del bisogno di validazione',
        ],
        correct: 1,
        explanation: 'Dati non rappresentativi degradano la generalizzazione.'
      },
      {
        question: 'Transfer learning offre soprattutto:',
        options: [
          'Azzeramento totale bias',
          'Nessun bisogno di dati target',
          'Riutilizzo di feature apprese e minor tempo di sviluppo',
          'Garanzia di accuracy massima',
        ],
        correct: 2,
        explanation: 'Riduce effort iniziale, ma richiede comunque validazione nel dominio.'
      },
      {
        question: 'Quale KPI confronta meglio zero-shot vs RAG vs fine-tuning?',
        options: [
          'Solo tempo di training',
          'Solo numero parametri',
          'Solo latenza GPU',
          'Accuratezza task + costo operativo + tempo di aggiornamento',
        ],
        correct: 3,
        explanation: 'La scelta è tecnico-economica, non solo tecnica.'
      },
      {
        question: 'Nel dataset CH9: high accuracy_need + high budget + slow time_to_market suggerisce spesso:',
        options: [
          'zero_shot',
          'fine_tuning',
          'rag',
          'nessuna strategia',
        ],
        correct: 1,
        explanation: 'Con requisiti alti e margine di investimento, il tuning può avere senso.'
      },
      {
        question: 'Errore comune pre-tuning:',
        options: [
          'Definire baseline con prompt/RAG',
          'Fare A/B test',
          'Saltare fase di benchmark e andare "a intuito"',
          'Calcolare costo per iterazione',
        ],
        correct: 2,
        explanation: 'Senza benchmark non puoi dimostrare ROI del tuning.'
      },
      {
        question: 'Quando zero-shot è accettabile?',
        options: [
          'Produzione critica regolata senza QA',
          'Domini con forte compliance e audit',
          'Quando servono risposte legalmente vincolanti',
          'Prototipo rapido a basso rischio',
        ],
        correct: 3,
        explanation: 'Zero-shot è ottimo per partire, meno per scenari ad alto rischio.'
      },
      {
        question: 'Differenza chiave RAG vs fine-tuning:',
        options: [
          'RAG aggiorna conoscenza via documenti, tuning modifica i pesi del modello',
          'RAG modifica i pesi, tuning no',
          'Sono equivalenti',
          'RAG elimina allucinazioni al 100%',
        ],
        correct: 0,
        explanation: 'RAG e tuning intervengono su livelli diversi della pipeline.'
      },
      {
        question: 'Messaggio chiave del capitolo 9:',
        options: [
          'Una sola strategia vince sempre',
          'Fine-tuning è sempre obbligatorio',
          'Scegli strategia per vincoli reali, KPI e rischio',
          'RAG è sempre gratuito',
        ],
        correct: 2,
        explanation: 'La decisione corretta dipende da contesto e trade-off misurabili.'
      }
    ]
};
