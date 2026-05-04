import type { Chapter } from '../types';

export const ch05: Chapter = {
    id: 5,
    slug: 'neural-networks',
    title: 'Reti Neurali: L\'Architettura dell\'AI Moderna',
    description: 'Come funzionano i neuroni artificiali',
    sections: [
      { title: 'Struttura di una Rete Neurale', content: 'Una rete neurale è composta da layer: **input** (riceve i dati), **hidden** (trasformano i segnali) e **output** (produce la previsione finale). Ogni connessione tra neuroni ha un **peso** che regola quanto una informazione influenza il risultato. Aumentare i layer può migliorare la capacità di rappresentare pattern complessi, ma aumenta anche costo e rischio di overfitting. *Nota pratica:* parti con un\'architettura piccola e aggiungi complessità solo se i dati lo richiedono. <<Takeaway: una rete neurale è efficace quando bilancia capacità, costo e generalizzazione>>.',  media: [ { type: 'infographic', title: 'Anatomia rete neurale', description: 'Input, hidden e output layer con ruolo dei pesi.', placeholderPath: 'media/ch05-neural-networks/sec-01/infographic.png', notes: 'ready' } ] },
      { title: 'Il Processo di Backpropagation', content: 'La **backpropagation** è il meccanismo con cui la rete si corregge: confronta previsione e valore reale, calcola l\'errore e aggiorna i pesi in direzione che riduce la perdita. In pratica è un ciclo continuo di tentativo, feedback e aggiustamento. Segnale utile: se la loss di training scende ma quella di validation peggiora, stai probabilmente overfittando. *Nota pratica:* monitora sempre training e validation insieme, non un solo numero. <<Takeaway: il training efficace è guidato da feedback misurabile, non da tentativi casuali>>.',  media: [ { type: 'video', title: 'Backprop spiegata semplice', description: 'Visual del flusso errore → gradiente → aggiornamento pesi.', placeholderPath: 'media/ch05-neural-networks/sec-02/video.mp4', notes: 'ready' } ] },
      { title: "Startup Lens", content: "Le reti neurali hanno senso quando i pattern sono davvero complessi (immagini, linguaggio, segnali). Se il problema è lineare o il dataset è piccolo, un modello più semplice può dare risultati simili con costi minori, tempi più rapidi e maggiore spiegabilità." },
      { title: "Errore comune + Check rapido", content: "**Errore comune:** aumentare layer senza una strategia di validazione.\n\n**Check rapido (2 min):** guarda il tuo scenario e rispondi: stai scegliendo profondità perché serve davvero ai dati o solo perché sembra più potente?", media: [ { type: 'podcast', title: 'Podcast — Profondità con criterio: quando aggiungere layer e quando no', description: 'Un episodio riflessivo sulle decisioni architetturali nelle reti neurali. Partendo dall\'errore più comune — aggiungere layer perché \'sembra più potente\' — il podcast guida lo studente attraverso 3 domande concrete: i dati supportano questa complessità? Il costo computazionale è giustificato? L\'interpretabilità conta nel tuo contesto? Collega il concetto di profondità con la Startup Lens (quando un modello semplice batte uno complesso), con il rischio di overfitting visto in CH4, e con la scelta strategica del modello affrontata nel Capitolo 9. Takeaway operativo: la profondità non è un obiettivo — è una conseguenza dei dati.', placeholderPath: 'media/ch05-neural-networks/sec-04/podcast.mp3', notes: 'placeholder' } ] },
    ],
    keyTakeaways: [
      'Neuroni artificiali imitano il cervello',
      'Peso dei neuroni = importanza della connessione',
      'Backprop aggiusta i pesi per ridurre errori',
      'Più layer = più capacità di astrazione',
      'Learning outcome: descrivere come i pesi vengono aggiornati durante il training',
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 5',
        description: 'Panoramica pratica su architettura, backpropagation e trade-off.',
        estimatedDuration: '8-10 min',
        placeholderPath: 'media/ch05-neural-networks/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 5',
        description: 'Versione audio del Capitolo 5: architettura delle reti neurali, backpropagation e decisioni operative. Quando usare reti neurali vs modelli più semplici, come leggere i segnali di overfitting durante il training, e perché la profondità non è sempre la risposta giusta. Orientato a chi deve scegliere, costruire e validare modelli in un contesto startup.',
        estimatedDuration: '10-15 min',
        placeholderPath: 'media/ch05-neural-networks/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 5',
        description: 'Schema layer + flusso backprop + segnali di overfitting.',
        placeholderPath: 'media/ch05-neural-networks/infographic.png',
        notes: 'ready'
      }
    ],
    discussionPrompts: [
      'Perché una rete neurale con 100 layer sarebbe diversa da una con 2 layer?',
      'Come è simile Backpropagation al processo di imparare dai propri errori?',
      'Cosa succederebbe se i pesi iniziali non fossero random ma zero?'
    ],
    labNote: 'Lab 2 — Reti Neurali con MNIST (ZIP scaricabile: ml-lab-02-neural-networks.zip). Il lab usa il dataset MNIST — 10.000 immagini di cifre scritte a mano (28x28 pixel = 784 feature) — e addestra un MLP (Multi-Layer Perceptron) via Scikit-learn con un singolo hidden layer da 50 neuroni. Lo studente installa le dipendenze (numpy, scikit-learn, matplotlib, seaborn) ed esegue python main.py. Alla fine viene visualizzata una griglia 2x5: titoli in verde = predizioni corrette, in rosso = errori della rete. Esperimento guidato: modificare hidden_layer_sizes=(50,) in hidden_layer_sizes=(50, 50,) per aggiungere profondità e osservare l\'impatto su tempo di training e accuracy.',
    quiz: [
      {
        question: "In una rete neurale, il ruolo principale dei pesi è:",
        options: [
          "Regolare quanto ogni input influenza la previsione",
          "Cambiare il colore dei layer",
          "Ridurre automaticamente il dataset",
          "Sostituire la funzione di loss",
        ],
        correct: 0,
        explanation: "I pesi determinano il contributo di ogni segnale nel calcolo dell'output."
      },
      {
        question: "Se aumenti i layer senza abbastanza dati, quale rischio cresce di più?",
        options: [
          "Overfitting",
          "Compressione lossless",
          "Riduzione bias di interfaccia",
          "Migliore spiegabilità",
        ],
        correct: 0,
        explanation: "Maggiore complessità con pochi dati spesso porta a memorizzazione e scarsa generalizzazione."
      },
      {
        question: "La backpropagation serve principalmente a:",
        options: [
          "Aggiornare i pesi per ridurre l\'errore",
          "Creare nuove feature manuali",
          "Aumentare la RAM del server",
          "Eliminare la validation",
        ],
        correct: 0,
        explanation: "Backprop usa l\'errore per correggere i pesi iterativamente."
      },
      {
        question: "Training loss in calo ma validation loss in aumento indica spesso:",
        options: [
          "Overfitting",
          "Underfitting",
          "Dataset perfetto",
          "Convergenza ideale",
        ],
        correct: 0,
        explanation: "Il modello sta imparando troppo i dati visti e peggiora su dati nuovi."
      },
      {
        question: "Quando una startup dovrebbe preferire un modello più semplice a una rete profonda?",
        options: [
          "Quando il problema è semplice e i dati sono limitati",
          "Quando vuole usare più GPU a prescindere",
          "Quando vuole metriche meno trasparenti",
          "Quando non deve validare",
        ],
        correct: 0,
        explanation: "Modelli semplici possono essere più economici, rapidi e spiegabili in contesti poco complessi."
      },
      {
        question: "Quale metrica/controllo è più utile durante il training di una rete?",
        options: [
          "Monitorare insieme training e validation",
          "Guardare solo il numero di epoche",
          "Guardare solo la loss di training",
          "Guardare solo il tempo di avvio notebook",
        ],
        correct: 0,
        explanation: "Serve confronto continuo tra training e validation per capire se generalizza."
      },
      {
        question: "Quale decisione è più robusta in produzione?",
        options: [
          "Scegliere il modello con performance stabili su dati nuovi",
          "Scegliere sempre il modello più profondo",
          "Scegliere il modello con training più lungo",
          "Scegliere il modello con nome più recente",
        ],
        correct: 0,
        explanation: "La stabilità nel mondo reale conta più della complessità fine a sé stessa."
      },
      {
        question: "Se due architetture hanno accuracy simile, quale criterio può guidare la scelta finale?",
        options: [
          "Costo computazionale e interpretabilità",
          "Numero massimo di layer",
          "Quantità di righe di codice",
          "Tema UI del dashboard",
        ],
        correct: 0,
        explanation: "A parità di performance, efficienza e manutenibilità fanno la differenza."
      },
      {
        question: "In un mini esperimento piccola vs profonda, quale confronto è corretto?",
        options: [
          "Generalizzazione, tempo training, interpretabilità",
          "Solo numero di parametri",
          "Solo tempo di inferenza",
          "Solo punteggio training",
        ],
        correct: 0,
        explanation: "Confronto completo evita decisioni basate su un singolo numero."
      },
      {
        question: "Qual è l\'obiettivo reale del training di una rete neurale?",
        options: [
          "Generalizzare bene su dati non visti",
          "Memorizzare tutto il training set",
          "Massimizzare la profondità",
          "Ridurre a zero ogni errore sul training",
        ],
        correct: 0,
        explanation: "Un buon modello non ripete il passato: predice bene su nuovi esempi."
      }
    ]
};
