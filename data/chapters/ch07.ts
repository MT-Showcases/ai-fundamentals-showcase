import type { Chapter } from '../types';

export const ch07: Chapter = {
    id: 7,
    slug: 'computer-vision',
    title: 'Computer Vision: La Vista dell\'AI',
    description: 'Come l\'AI vede e analizza immagini',
    sections: [
      { title: 'Convolutional Neural Networks', content: "Le **CNN** estraggono pattern visivi con filtri locali: bordi, texture e forme. I layer iniziali catturano feature semplici; quelli profondi feature più astratte utili alla classificazione.\n\n*Nota pratica:* validare solo su immagini pulite crea falsa sicurezza. <<Takeaway: Vision affidabile = modello + test realistici>>." , media: [ { type: 'infographic', title: 'CNN — Filtri e Feature Maps', description: 'Schema visuale dettagliato dei layer convoluzionali: dai filtri per i bordi (low-level features) alle mappe di feature per texture e pattern, fino alle rappresentazioni semantiche di oggetti complessi. Illustra il processo di pooling, attivazioni ReLU e come la gerarchia delle CNN imita la visione umana. Utile per capire perché le CNN sono così efficaci sulle immagini.', placeholderPath: 'media/ch07-computer-vision/sec-01/infographic-v2.jpg', notes: 'ready' } ]},
      { title: 'Riconoscimento di Oggetti', content: "Il modello produce probabilità per classe, ma può degradare su sfocature, controluce, occlusioni e angoli insoliti.\n\n*Nota pratica:* misura errori su edge-case, non solo accuracy media. <<Takeaway: la media può nascondere failure critici>>." , media: [ { type: 'video', title: 'Object detection in pratica', description: 'Come funziona la detection di oggetti in immagini reali: regione proposal, classificazione per classe, bounding box regression. Spiegazione pratica dei limiti su occlusioni, angoli insoliti e dataset bias, con esempi concreti di failure mode.', placeholderPath: 'media/ch07-computer-vision/sec-02/video.mp4', notes: 'placeholder' } ]},
      { title: 'Startup Lens', content: "In produzione servono soglie di confidence, fallback umano e monitoraggio continuo dei casi ambigui. Senza osservabilità, il sistema sembra buono in demo ma fragile nel reale." },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** testare solo immagini perfette da laboratorio.\n\n**Check rapido (2 min):** indica 2 edge-case del tuo dominio e 1 mitigazione operativa." }
    ],
    keyTakeaways: [
      'Immagine = griglia numerica di pixel',
      'CNN estrae feature in modo gerarchico',
      'Gli edge-case contano più della media',
      'Serve fallback con confidence bassa',
      'Learning outcome: identificare un failure mode vision e proporre una mitigazione',
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'Classificazione immagini con CNN (PyTorch)',
        code: '# CNN semplice con PyTorch\nimport torch.nn as nn\n\nclass SimpleCNN(nn.Module):\n    def __init__(self, num_classes=10):\n        super().__init__()\n        self.features = nn.Sequential(\n            nn.Conv2d(3, 32, kernel_size=3, padding=1),\n            nn.ReLU(),\n            nn.MaxPool2d(2, 2),\n            nn.Conv2d(32, 64, kernel_size=3, padding=1),\n            nn.ReLU(),\n            nn.MaxPool2d(2, 2)\n        )\n        self.classifier = nn.Linear(64 * 8 * 8, num_classes)\n\n    def forward(self, x):\n        x = self.features(x)\n        x = x.view(x.size(0), -1)\n        return self.classifier(x)\n\nmodel = SimpleCNN(num_classes=10)\nprint(model)'
      }
    ],
    discussionPrompts: [
      'Perché le CNN funzionano meglio delle reti dense pure sulle immagini?',
      'Quale edge-case è più critico nel tuo dominio?',
      'Quando conviene usare transfer learning in vision?'
    ],
    exercises: [
      {
        title: 'Mini Lab — Test set realistico vision (senza coding)',
        objective: 'Progettare un mini piano test per stressare un sistema vision prima del deploy.',
        duration: '15-20 min',
        steps: [
          'Leggi il dataset train CH7 e individua pattern principali.',
          'Definisci 3 edge-case: luce, angolo, occlusione.',
          'Confronta con validation CH7 e segna dove serve fallback.',
          'Definisci 2 KPI: errori critici e fallback rate.'
        ],
        deliverable: 'Checkpoint personale: 3 edge-case + 1 mitigazione operativa.',
        resources: [
          { label: 'Dataset train CH7 (CSV)', path: '/datasets/ch07-vision-cases/train.csv' },
          { label: 'Dataset validation CH7 (CSV)', path: '/datasets/ch07-vision-cases/validation.csv' },
          { label: 'Schema campi CH7 (JSON)', path: '/datasets/ch07-vision-cases/schema.json' }
        ]
      }
    ],
    quiz: [
      {
        question: 'In un sistema vision per accessi aziendali, quale test è PIÙ utile prima del deploy?',
        options: [
          'Edge-case con controluce, occhiali, cappelli e movimento',
          'Solo immagini in ufficio ben illuminato',
          'Solo test con immagini ad alta risoluzione',
          'Solo test su volti frontali',
        ],
        correct: 0,
        explanation: 'I test realistici con variabili difficili riducono failure in produzione.'
      },
      {
        question: 'Perché una CNN generalizza meglio di una rete fully-connected su immagini?',
        options: [
          'Perché non ha bisogno di dati etichettati',
          'Perché elimina completamente l\'overfitting',
          'Perché condivide pesi e cattura pattern locali',
          'Perché non richiede validazione',
        ],
        correct: 2,
        explanation: 'Convoluzione + weight sharing sfruttano la struttura spaziale dell\'immagine.'
      },
      {
        question: 'Hai confidence media alta, ma errori gravi su persone in controluce. Cosa fai per primo?',
        options: [
          'Aumenti subito i layer',
          'Aggiungi casi controluce al validation set e monitori quel segmento',
          'Ignori il problema perché accuracy media è alta',
          'Riduci la risoluzione immagini',
        ],
        correct: 1,
        explanation: 'Segmentare e misurare i failure mode critici è la priorità operativa.'
      },
      {
        question: 'Quale combinazione è più corretta per ridurre rischio operativo in vision?',
        options: [
          'Confidence threshold + fallback umano per casi ambigui',
          'Solo threshold basso per classificare tutto',
          'Nessuna soglia ma più GPU',
          'Solo data augmentation senza monitoraggio',
        ],
        correct: 0,
        explanation: 'Soglia e fallback creano un meccanismo di sicurezza reale.'
      },
      {
        question: 'Transfer learning è particolarmente vantaggioso quando:',
        options: [
          'Hai già milioni di esempi perfetti del tuo dominio',
          'Hai pochi dati etichettati ma task simile a dataset noti',
          'Vuoi evitare completamente il training',
          'Il dominio target non ha alcuna relazione visiva col pretraining',
        ],
        correct: 1,
        explanation: 'Riusa feature visive già apprese e accelera il go-to-market.'
      },
      {
        question: 'Un aumento di accuracy dal 94% al 96% può essere inutile se:',
        options: [
          'Il modello usa convoluzioni',
          'Il dataset ha immagini RGB',
          'Gli errori residui sono su classi ad alto impatto',
          'Il batch size è piccolo',
        ],
        correct: 2,
        explanation: 'Conta dove sbaglia il modello, non solo la media globale.'
      },
      {
        question: 'Quale segnale indica possibile data drift in computer vision?',
        options: [
          'Aumento numero di layer nel modello',
          'Riduzione del tempo di training',
          'Stessa accuracy su train e train',
          'Calo progressivo performance con nuove camere/ambienti',
        ],
        correct: 3,
        explanation: 'Nuove condizioni visive possono cambiare la distribuzione dei dati.'
      },
      {
        question: 'Nel dataset CH7, quale assegnazione rischio è più plausibile?',
        options: [
          'low_light + heavy occlusion + high blur -> low risk',
          'backlight + partial occlusion + high blur -> high risk',
          'good light + front + no occlusion -> high risk',
          'good light + top angle + no blur -> always high risk',
        ],
        correct: 1,
        explanation: 'Combinazioni con visibilità ridotta e blur aumentano il rischio di errore.'
      },
      {
        question: 'Cosa misura meglio la robustezza di un modello vision?',
        options: [
          'Solo loss finale di training',
          'Solo numero di immagini totali',
          'Performance consistente su segmenti difficili e condizioni variabili',
          'Velocità di inferenza su un unico device',
        ],
        correct: 2,
        explanation: 'Robustezza = stabilità su scenari reali eterogenei.'
      },
      {
        question: 'Messaggio chiave del capitolo 7:',
        options: [
          'Basta aumentare risoluzione immagini',
          'Basta usare una CNN più grande',
          'Basta ottimizzare il learning rate',
          'Vision affidabile = modello + test realistici + controllo operativo',
        ],
        correct: 3,
        explanation: 'La qualità in produzione nasce da tecnica + validazione + governance.'
      }
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 7',
        description: 'Video completo Capitolo 7: come le CNN estraggono pattern visivi, object detection in produzione, edge-case critici (occlusione, controluce, angoli), confidence threshold e fallback umano. Con esempi da sistemi vision reali.',
        estimatedDuration: '8-10 min',
        placeholderPath: 'media/ch07-computer-vision/video.mp4',
        notes: 'ready'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 7',
        description: 'Schema CNN layer per layer, pipeline object detection, matrice edge-case per dominio, e checklist deploy vision con confidence threshold e fallback.',
        placeholderPath: 'media/ch07-computer-vision/infographic-v2.jpg',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 7',
        description: 'Computer Vision in produzione: dall accuratezza media ai failure mode critici. Come costruire un sistema vision robusto con soglie di confidence, fallback umano e monitoraggio continuo dei casi ambigui. Collegamento con transfer learning e scelta dataset.',
        estimatedDuration: '10-12 min',
        placeholderPath: 'media/ch07-computer-vision/podcast.mp3',
        notes: 'placeholder'
      }
    ]
};
