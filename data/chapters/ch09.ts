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
        question: 'Hai un chatbot di supporto clienti con 90% accuracy su domande standard, ma fallisce su edge case tecnici complessi (~10%). Il product manager vuole fine-tuning immediato. Cosa fai prima?',
        options: [
          'Inizi subito il fine-tuning su un dataset di 200 esempi raccolti in fretta',
          'Misuri baseline RAG con prompt strutturati sugli stessi edge case e confronti i risultati',
          'Passi a un modello più grande senza modifiche al workflow',
          'Aumenti il numero di esempi nel system prompt fino a 50',
        ],
        correct: 1,
        explanation: 'Il fine-tuning su 200 esempi raccolti in fretta è pericoloso: rischi overfitting e peggioramento su casi normali. Prima devi avere una baseline RAG solida sugli stessi edge case — solo se RAG non basta, allora il tuning è giustificato.'
      },
      {
        question: 'Un modello fine-tunato su dati aziendali storici performa bene in test ma peggiora in produzione dopo 3 mesi. Causa più probabile?',
        options: [
          'Il modello base era troppo piccolo per il dominio',
          'Il learning rate usato durante il tuning era troppo alto',
          'I dati di produzione si sono spostati rispetto al distribution del training set (data drift)',
          'Il fine-tuning ha eliminato troppi parametri dal modello base',
        ],
        correct: 2,
        explanation: 'Data drift: il mondo cambia, il modello no. I dati su cui è stato tunato non rappresentano più la realtà corrente. Questo è il motivo per cui serve monitoring continuo in produzione, non solo test statici.'
      },
      {
        question: 'Stai scegliendo tra RAG e fine-tuning per un sistema legale che deve rispondere su normative aggiornate mensilmente, con accuracy critica. Quale affermazione è corretta?',
        options: [
          'Fine-tuning è preferibile perché produce risposte più fluide e coerenti stilisticamente',
          'RAG è preferibile perché permette aggiornamenti senza retraining, ma richiede retrieval di qualità alta',
          'Sono equivalenti in accuracy — scegli in base al budget GPU disponibile',
          'RAG elimina le allucinazioni, quindi è sempre la scelta sicura in ambito legale',
        ],
        correct: 1,
        explanation: 'Con normative che cambiano mensilmente, il fine-tuning sarebbe già obsoleto prima di essere completato. RAG permette aggiornamenti immediati della knowledge base. Attenzione però: RAG non elimina le allucinazioni — se il retrieval recupera chunk irrilevanti, il modello può comunque allucinare.'
      },
      {
        question: 'Il transfer learning riduce i tempi di sviluppo principalmente perché:',
        options: [
          'Elimina la necessità di validare il modello nel dominio target',
          'Il modello pre-addestrato ha già appreso rappresentazioni generali riutilizzabili (feature linguistiche, pattern semantici)',
          'Permette di usare dataset sintetici invece di dati reali',
          'Azzera il rischio di overfitting nel dominio target',
        ],
        correct: 1,
        explanation: 'Il valore del transfer learning sta nelle rappresentazioni apprese: il modello ha già "capito" strutture linguistiche, semantica, pattern comuni. Adattarlo al dominio target richiede molto meno dato e compute rispetto al training da zero. Non elimina però overfitting né il bisogno di validazione.'
      },
      {
        question: 'Confronti zero-shot, RAG e fine-tuning per un nuovo progetto. Quale combinazione di metriche è più utile per decidere?',
        options: [
          'Solo accuracy sul test set interno',
          'Numero di parametri del modello + latenza media',
          'Accuracy sul task reale + costo operativo mensile + tempo per aggiornare la conoscenza',
          'F1-score + dimensione del dataset di training',
        ],
        correct: 2,
        explanation: 'La scelta tra strategie è tecnico-economica. Accuracy da sola non basta: un modello accurato ma costoso da aggiornare può essere la scelta sbagliata. Devi considerare il costo operativo nel tempo e la frequenza con cui la conoscenza cambia.'
      },
      {
        question: 'Scenario: startup con budget limitato, dominio stabile (terminologia medica di base), time-to-market 2 settimane. Strategia più sensata?',
        options: [
          'Fine-tuning su modello open-source con 500 esempi sintetici',
          'RAG con database vettoriale aggiornato in tempo reale',
          'Zero-shot con prompt ben strutturato + few-shot examples + validazione manuale output',
          'Training da zero su corpus medico pubblico',
        ],
        correct: 2,
        explanation: 'Con dominio stabile, budget basso e 2 settimane, zero-shot con prompt ingegnerizzato è la baseline corretta. Il fine-tuning richiede tempo e dati di qualità. Il RAG con DB vettoriale aggiunge complessità infrastrutturale non necessaria se la conoscenza non cambia spesso.'
      },
      {
        question: 'Un collega propone di fare fine-tuning su GPT-4 per migliorare il tono delle risposte di un assistente interno. Qual è il problema principale di questa proposta?',
        options: [
          'GPT-4 non supporta il fine-tuning tramite API',
          'Il fine-tuning non può modificare il tono del modello',
          'Migliorare il tono è tipicamente ottenibile con system prompt + few-shot senza costi di tuning — il fine-tuning va riservato a gap che tecniche più semplici non risolvono',
          'Il fine-tuning su GPT-4 richiederebbe un dataset di almeno 100.000 esempi',
        ],
        correct: 2,
        explanation: 'Il fine-tuning ha costi reali (compute, dati, manutenzione). Modificare il tono è quasi sempre risolvibile con un system prompt ben scritto o few-shot examples. Usare il tuning per questo è spreco di risorse — viola il principio "baseline prima, tuning dopo".'
      },
      {
        question: 'Qual è la differenza operativa più importante tra RAG e fine-tuning in produzione?',
        options: [
          'RAG è sempre più lento in inference perché deve fare retrieval',
          'Fine-tuning aggiorna i pesi del modello permanentemente, RAG aggiorna la knowledge base senza toccare il modello',
          'RAG richiede GPU dedicata, fine-tuning no',
          'Fine-tuning produce risposte più corte e precise di RAG',
        ],
        correct: 1,
        explanation: 'Questa è la distinzione fondamentale: con RAG puoi cambiare cosa il modello "sa" aggiornando i documenti, senza retraining. Con fine-tuning modifichi i pesi — più costoso da aggiornare, ma utile per adattare comportamento e stile. In produzione questa differenza determina la strategia di manutenzione.'
      },
      {
        question: 'Hai un modello fine-tunato su dati di customer support in italiano. Noti che performa peggio su ticket in inglese rispetto al modello base. Questo fenomeno si chiama:',
        options: [
          'Data leakage dal training set',
          'Catastrophic forgetting — il tuning ha sovrascritto capacità del modello base',
          'Overfitting al validation set',
          'Underfitting causato da learning rate troppo basso',
        ],
        correct: 1,
        explanation: 'Catastrophic forgetting: il fine-tuning su un dominio ristretto può degradare le performance su compiti che il modello base sapeva fare bene. È uno dei rischi chiave del tuning aggressivo. Si gestisce con learning rate basso, pochi epoch e validazione cross-domain.'
      },
      {
        question: 'Un sistema RAG restituisce risposte plausibili ma factualmente sbagliate anche quando il documento corretto è nella knowledge base. Causa più probabile?',
        options: [
          'Il modello base è troppo vecchio e deve essere aggiornato',
          'Il retrieval recupera chunk non pertinenti o troppo brevi, e il modello "riempie" con conoscenza parametrica',
          'La temperature è troppo bassa — bisogna aumentarla',
          'Il fine-tuning successivo al RAG non è stato fatto correttamente',
        ],
        correct: 1,
        explanation: 'RAG non è immune alle allucinazioni. Se il retrieval restituisce chunk irrilevanti o troppo frammentati, il modello non trova la risposta nei documenti e genera qualcosa di plausibile dalla sua conoscenza parametrica. La qualità del chunking e del retrieval è critica quanto il modello stesso.'
      },
    ]
};
