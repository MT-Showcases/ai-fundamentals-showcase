import type { Chapter } from '../types';

export const ch09: Chapter = {
    id: 9,
    slug: 'fine-tuning',
    title: 'Fine-Tuning e Transfer Learning',
    description: 'Come personalizzare modelli esistenti',
    sections: [
      { title: 'Transfer Learning', content: "Il **transfer learning** parte da un modello pre-addestrato e lo adatta al dominio target. Riduce tempi e costi rispetto al training da zero.\n\n*Nota pratica:* funziona meglio quando i domini sono abbastanza vicini. <<Takeaway: riuso intelligente > ricostruzione da zero>>.", media: [ { type: 'infographic', title: 'Transfer learning flow', description: 'Base model → adattamento dominio.', placeholderPath: 'media/ch09-fine-tuning/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Fine-tuning vs Zero-shot', content: "Zero-shot è rapido da avviare; fine-tuning richiede investimento ma può migliorare consistenza su task specifici.\n\n*Nota pratica:* valuta sempre costo, aggiornabilità e qualità richiesta. <<Takeaway: la scelta tecnica deve avere ROI chiaro>>.", media: [ { type: 'video', title: 'Fine-tuning decision guide', description: 'Quando conviene davvero fare tuning.', placeholderPath: 'media/ch09-fine-tuning/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: "Spesso conviene partire con RAG + prompt robusti e passare al fine-tuning solo con evidenza di gap persistenti.", media: [ { type: 'infographic', title: 'RAG vs Fine-tuning', description: 'Matrice decisionale pratica.', placeholderPath: 'media/ch09-fine-tuning/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** fare tuning troppo presto senza baseline.\n\n**Check rapido (2 min):** indica 2 segnali che mostrano che prompt+RAG non bastano più.", media: [ { type: 'podcast', title: 'Podcast — Tuning con criterio', description: 'Errori frequenti nella fase decisionale.', placeholderPath: 'media/ch09-fine-tuning/sec-04/podcast.mp3', notes: 'placeholder' } ] }
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
    media: [
      { type: 'video', title: 'Video Capitolo 9', description: 'Strategie di adattamento modello in prodotto.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch09-fine-tuning/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 9', description: 'Trade-off tecnici ed economici.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch09-fine-tuning/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 9', description: 'Decision tree: zero-shot vs RAG vs tuning.', placeholderPath: 'media/ch09-fine-tuning/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist decisionale strategia modello.', placeholderPath: 'media/ch09-fine-tuning/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Decisione strategia modello (senza coding)',
        objective: 'Scegliere tra zero-shot, RAG e fine-tuning su base business+tecnica.',
        duration: '15-20 min',
        steps: [
          'Leggi dataset train CH9 con scenari e vincoli.',
          'Per ogni scenario scegli una strategia e motiva.',
          'Confronta con validation CH9.',
          'Definisci 2 KPI per validare la scelta dopo deploy.'
        ],
        deliverable: 'Checkpoint personale: scenario → strategia + motivazione.',
        resources: [
          { label: 'Dataset train CH9 (CSV)', path: '/datasets/ch09-strategy-choice/train.csv' },
          { label: 'Dataset validation CH9 (CSV)', path: '/datasets/ch09-strategy-choice/validation.csv' },
          { label: 'Schema campi CH9 (JSON)', path: '/datasets/ch09-strategy-choice/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'Scenario: FAQ prodotto aggiornate ogni settimana. Strategia iniziale più sensata?', options: ['Fine-tuning immediato mensile', 'RAG con base documentale aggiornata', 'Zero-shot senza monitoraggio', 'Training da zero con dataset sintetico'], correct: 1, explanation: 'Con contenuti dinamici, RAG è più flessibile e sostenibile.' },
      { question: 'Quando il fine-tuning è realmente giustificato?', options: ['Quando esiste gap persistente dopo baseline solide', 'Sempre, appena il progetto parte', 'Quando non hai KPI', 'Quando vuoi ridurre il lavoro di QA a zero'], correct: 0, explanation: 'Serve evidenza misurabile che alternative più semplici non bastano.' },
      { question: 'Rischio tipico del fine-tuning con dataset sbilanciato:', options: ['Miglior spiegabilità automatica', 'Over-specializzazione e peggioramento su casi rari', 'Riduzione costi cloud garantita', 'Eliminazione del bisogno di validazione'], correct: 1, explanation: 'Dati non rappresentativi degradano la generalizzazione.' },
      { question: 'Transfer learning offre soprattutto:', options: ['Riutilizzo di feature apprese e minor tempo di sviluppo', 'Azzeramento totale bias', 'Nessun bisogno di dati target', 'Garanzia di accuracy massima'], correct: 0, explanation: 'Riduce effort iniziale, ma richiede comunque validazione nel dominio.' },
      { question: 'Quale KPI confronta meglio zero-shot vs RAG vs fine-tuning?', options: ['Solo tempo di training', 'Accuratezza task + costo operativo + tempo di aggiornamento', 'Solo numero parametri', 'Solo latenza GPU'], correct: 1, explanation: 'La scelta è tecnico-economica, non solo tecnica.' },
      { question: 'Nel dataset CH9: high accuracy_need + high budget + slow time_to_market suggerisce spesso:', options: ['zero_shot', 'rag', 'fine_tuning', 'nessuna strategia'], correct: 2, explanation: 'Con requisiti alti e margine di investimento, il tuning può avere senso.' },
      { question: 'Errore comune pre-tuning:', options: ['Definire baseline con prompt/RAG', 'Fare A/B test', 'Saltare fase di benchmark e andare "a intuito"', 'Calcolare costo per iterazione'], correct: 2, explanation: 'Senza benchmark non puoi dimostrare ROI del tuning.' },
      { question: 'Quando zero-shot è accettabile?', options: ['Prototipo rapido a basso rischio', 'Produzione critica regolata senza QA', 'Domini con forte compliance e audit', 'Quando servono risposte legalmente vincolanti'], correct: 0, explanation: 'Zero-shot è ottimo per partire, meno per scenari ad alto rischio.' },
      { question: 'Differenza chiave RAG vs fine-tuning:', options: ['RAG aggiorna conoscenza via documenti, tuning modifica i pesi del modello', 'RAG modifica i pesi, tuning no', 'Sono equivalenti', 'RAG elimina allucinazioni al 100%'], correct: 0, explanation: 'RAG e tuning intervengono su livelli diversi della pipeline.' },
      { question: 'Messaggio chiave del capitolo 9:', options: ['Una sola strategia vince sempre', 'Scegli strategia per vincoli reali, KPI e rischio', 'Fine-tuning è sempre obbligatorio', 'RAG è sempre gratuito'], correct: 1, explanation: 'La decisione corretta dipende da contesto e trade-off misurabili.' }
    ]
};
