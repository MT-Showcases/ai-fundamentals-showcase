import type { Chapter } from '../types';

export const ch05: Chapter = {
    id: 5,
    slug: 'neural-networks',
    title: 'Reti Neurali: L\'Architettura dell\'AI Moderna',
    description: 'Come funzionano i neuroni artificiali',
    sections: [
      { title: 'Struttura di una Rete Neurale', content: 'Una rete neurale è composta da layer: **input** (riceve i dati), **hidden** (trasformano i segnali) e **output** (produce la previsione finale). Ogni connessione tra neuroni ha un **peso** che regola quanto una informazione influenza il risultato. Aumentare i layer può migliorare la capacità di rappresentare pattern complessi, ma aumenta anche costo e rischio di overfitting. *Nota pratica:* parti con un\'architettura piccola e aggiungi complessità solo se i dati lo richiedono. <<Takeaway: una rete neurale è efficace quando bilancia capacità, costo e generalizzazione>>.', media: [ { type: 'infographic', title: 'Anatomia rete neurale', description: 'Input, hidden e output layer con ruolo dei pesi.', placeholderPath: 'media/ch05-neural-networks/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Il Processo di Backpropagation', content: 'La **backpropagation** è il meccanismo con cui la rete si corregge: confronta previsione e valore reale, calcola l\'errore e aggiorna i pesi in direzione che riduce la perdita. In pratica è un ciclo continuo di tentativo, feedback e aggiustamento. Segnale utile: se la loss di training scende ma quella di validation peggiora, stai probabilmente overfittando. *Nota pratica:* monitora sempre training e validation insieme, non un solo numero. <<Takeaway: il training efficace è guidato da feedback misurabile, non da tentativi casuali>>.', media: [ { type: 'video', title: 'Backprop spiegata semplice', description: 'Visual del flusso errore → gradiente → aggiornamento pesi.', placeholderPath: 'media/ch05-neural-networks/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: "Startup Lens", content: "Le reti neurali hanno senso quando i pattern sono davvero complessi (immagini, linguaggio, segnali). Se il problema è lineare o il dataset è piccolo, un modello più semplice può dare risultati simili con costi minori, tempi più rapidi e maggiore spiegabilità.", media: [ { type: 'infographic', title: 'Quando usare reti neurali', description: 'Matrice decisionale: complessità problema vs costo operativo.', placeholderPath: 'media/ch05-neural-networks/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: "Errore comune + Check rapido", content: "**Errore comune:** aumentare layer senza una strategia di validazione.\n\n**Check rapido (2 min):** guarda il tuo scenario e rispondi: stai scegliendo profondità perché serve davvero ai dati o solo perché sembra più potente?", media: [ { type: 'podcast', title: 'Podcast — Profondità con criterio', description: 'Trade-off pratici tra profondità, costo e robustezza.', placeholderPath: 'media/ch05-neural-networks/sec-04/podcast.mp3', notes: 'placeholder' } ] },
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
        notes: 'placeholder'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 5',
        description: 'Versione audio orientata a decisioni di progetto.',
        estimatedDuration: '10-15 min',
        placeholderPath: 'media/ch05-neural-networks/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 5',
        description: 'Schema layer + flusso backprop + segnali di overfitting.',
        placeholderPath: 'media/ch05-neural-networks/infographic.png',
        notes: 'placeholder'
      }
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'Rete neurale semplice con PyTorch',
        code: '# Rete neurale semplice con PyTorch\nimport torch\nimport torch.nn as nn\n\nclass SimpleNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.layers = nn.Sequential(\n            nn.Linear(2, 4),\n            nn.ReLU(),\n            nn.Linear(4, 1),\n            nn.Sigmoid()\n        )\n    \n    def forward(self, x):\n        return self.layers(x)\n\nmodel = SimpleNN()\nprint(model)\n# Output: SimpleNN(\n#   (layers): Sequential(\n#     (0): Linear(in_features=2, out_features=4, bias=True)\n#     (1): ReLU()\n#     (2): Linear(in_features=4, out_features=1, bias=True)\n#     (3): Sigmoid()\n#   )\n# )'
      }
    ],
    discussionPrompts: [
      'Perché una rete neurale con 100 layer sarebbe diversa da una con 2 layer?',
      'Come è simile Backpropagation al processo di imparare dai propri errori?',
      'Cosa succederebbe se i pesi iniziali non fossero random ma zero?'
    ],
    exercises: [
      {
        title: 'Mini Lab — Costruire e Analizzare la Prima Rete Neurale',
        objective: 'Comprendere come i parametri di una rete (layer, neuroni, epoche) influenzano il processo di apprendimento (Overfitting vs Convergenza).',
        duration: '25 min',
        steps: [
          'Scarica ed estrai lo ZIP Lab 2.',
          'Esamina main.py: individua dove i dati MNIST vengono normalizzati.',
          'Esegui main.py e osserva la curva di apprendimento (loss che scende).',
          'Nel codice, modifica il parametro "hidden_layer_sizes=(50,)" a "(50, 50,)" per aggiungere un layer. Riesegui.',
          'Annota cosa succede all\'accuracy e ai tempi di addestramento: una rete più profonda impara sempre meglio?'
        ],
        deliverable: 'Il codice python che traina un classificatore sul dataset MNIST, più l\'immagine predictions.png salvata e un\'analisi di due righe su "aumentare i layer".',
        resources: [
        ]
      }
    ],
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
