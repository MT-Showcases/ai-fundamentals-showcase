import type { Chapter } from '../types';

export const ch05: Chapter = {
    id: 5,
    slug: 'neural-networks',
    title: 'Reti Neurali: L\'Architettura dell\'AI Moderna',
    description: 'Come funzionano i neuroni artificiali',
    sections: [
      { title: 'Struttura di una Rete Neurale', content: 'Una rete neurale è composta da layer: **input** (riceve i dati), **hidden** (trasformano i segnali) e **output** (produce la previsione finale). Ogni connessione tra neuroni ha un **peso** che regola quanto una informazione influenza il risultato. Aumentare i layer può migliorare la capacità di rappresentare pattern complessi, ma aumenta anche costo e rischio di overfitting. *Nota pratica:* parti con un\'architettura piccola e aggiungi complessità solo se i dati lo richiedono.  Nel flusso di una rete neurale contano anche principi di **Deep Learning**, **Dropout**, **Loss Function** e **Regolarizzazione**. <<Takeaway: una rete neurale è efficace quando bilancia capacità, costo e generalizzazione>>.',  media: [ { type: 'infographic', title: 'Anatomia rete neurale', description: 'Anatomia visuale di una rete neurale: layer di input (dati grezzi), hidden layer (trasformazioni non lineari), output layer (previsione finale). Ruolo dei pesi, funzioni di attivazione ReLU e sigmoid, e come la dimensione della rete influenza la capacita di apprendimento.', placeholderPath: 'media/ch05-neural-networks/sec-01/infographic.png', notes: 'ready' } ] },
      { title: 'Il Processo di Backpropagation', content: 'La **backpropagation** è il meccanismo con cui la rete si corregge: confronta previsione e valore reale, calcola l\'errore e aggiorna i pesi in direzione che riduce la perdita. In pratica è un ciclo continuo di tentativo, feedback e aggiustamento. Segnale utile: se la loss di training scende ma quella di validation peggiora, stai probabilmente overfittando. *Nota pratica:* monitora sempre training e validation insieme, non un solo numero. <<Takeaway: il training efficace è guidato da feedback misurabile, non da tentativi casuali>>.',  media: [ { type: 'video', title: 'Backprop spiegata semplice', description: 'Animazione del flusso di backpropagation: dalla previsione sbagliata al calcolo dell errore, dalla derivazione del gradiente all aggiornamento dei pesi via gradient descent. Con schema visivo del forward pass e backward pass su una rete a 3 layer.', placeholderPath: 'media/ch05-neural-networks/sec-02/video.mp4', notes: 'ready' } ] },
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
        description: 'Video completo Capitolo 5: architettura delle reti neurali (layer, pesi, attivazioni), backpropagation passo per passo, segnali di overfitting durante il training, e quando scegliere una rete neurale vs un modello piu semplice in contesto startup.',
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
        description: 'Infografica riassuntiva Capitolo 5: anatomia rete neurale (input/hidden/output), schema backpropagation in 4 step, tabella segnali di overfitting con contromisure, e guida decisionale su quando usare reti neurali vs modelli semplici.',
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
        question: 'Un MLP con hidden_layer_sizes=(50, 50) ha due layer nascosti da 50 neuroni ciascuno. Cosa succede rispetto a (50,) con lo stesso dataset?',
        options: [
          'Training più veloce, sicuramente più accurato',
          'Stesso comportamento, cambia solo la sintassi',
          'Training più lento, potenzialmente più accurato',
          'Errore: non si possono usare due layer in Scikit-learn',
        ],
        correct: 2,
        explanation: 'Più layer = più parametri = più capacità di apprendere pattern complessi, ma anche più calcolo e rischio overfitting. Non è automaticamente migliore.'
      },
      {
        question: 'Nel lab MNIST, ogni immagine ha 28×28 pixel. Quante feature riceve il primo layer del MLP?',
        options: [
          '28',
          '256',
          '28²=784, ma Scikit-learn le riduce a 28',
          '784',
        ],
        correct: 3,
        explanation: '28×28 = 784 pixel, ognuno è una feature. Il MLP appiattisce l\'immagine in un vettore 1D di 784 valori prima di elaborarla.'
      },
      {
        question: 'La backpropagation aggiorna i pesi in quale direzione?',
        options: [
          'Opposta al gradiente della loss (discesa del gradiente)',
          'Casuale, per evitare minimi locali',
          'Nella direzione del gradiente crescente',
          'Uguale per tutti i layer indipendentemente dall\'errore',
        ],
        correct: 0,
        explanation: 'Backprop calcola il gradiente (quanto ogni peso contribuisce all\'errore) e si muove nella direzione opposta — riducendo la loss ad ogni passo.'
      },
      {
        question: 'Training loss = 0.05, Validation loss = 0.51 dopo 100 epoche. Cosa sta succedendo?',
        options: [
          'Underfitting — il modello è troppo semplice',
          'Convergenza ottimale — entrambe le loss sono accettabili',
          'Overfitting — il modello ha memorizzato il training set',
          'Niente di strano, è un gap normale in ogni rete',
        ],
        correct: 2,
        explanation: 'Un gap enorme tra training loss (quasi zero) e validation loss (alta) è il segnale classico di overfitting: il modello ha imparato a memoria i dati di training, ma non generalizza su dati nuovi.'
      },
      {
        question: 'Perché lo StandardScaler è importante prima di addestrare un MLP?',
        options: [
          'Perché Scikit-learn non accetta valori negativi senza scaling',
          'Perché le reti neurali convergono male con feature su scale molto diverse',
          'Per ridurre il numero di feature automaticamente',
          'Per aumentare artificialmente la dimensione del dataset',
        ],
        correct: 1,
        explanation: 'Le reti neurali usano la discesa del gradiente: se una feature vale 0–1 e un\'altra 0–10000, i gradienti hanno magnitudini molto diverse e il training diventa instabile o lentissimo.'
      },
      {
        question: 'Nel lab MNIST usi 10.000 immagini con test_size=0.2. Quante immagini restano per il training?',
        options: [
          '8.000',
          '2.000',
          '10.000 — il test set è separato dal conteggio',
          '5.000',
        ],
        correct: 0,
        explanation: '80% di 10.000 = 8.000 immagini per il training. Il restante 20% (2.000 immagini) rimane nascosto durante il training e serve solo per valutare la generalizzazione finale.'
      },
      {
        question: 'Una startup ha 500 esempi etichettati e vuole classificare immagini. Qual è la scelta più pragmatica?',
        options: [
          'ResNet-152 addestrata da zero sui 500 esempi',
          'Modello pre-addestrato con fine-tuning sui 500 esempi',
          'MLP con 5 layer profondi e 1000 neuroni per layer',
          'GPT-4 fine-tuned sulla classificazione visiva',
        ],
        correct: 1,
        explanation: 'Con pochi dati, addestrare una rete profonda da zero porta quasi certamente a overfitting. Un modello pre-addestrato (transfer learning) porta già una rappresentazione visiva ricca — basta adattare l\'ultimo layer.'
      },
      {
        question: 'Quale curva di training indica un modello che sta imparando correttamente?',
        options: [
          'Training loss stabile, validation loss in calo rapido',
          'Training loss in calo, validation loss completamente piatta',
          'Training loss e validation loss entrambe in calo e vicine tra loro',
          'Entrambe le loss a zero dopo 5 epoche su dati reali',
        ],
        correct: 2,
        explanation: 'Il segnale sano è: entrambe le loss scendono e rimangono vicine. Divergenza = overfitting. Validation piatta = modello troppo semplice o learning rate errato. Loss a zero dopo 5 epoche su dati reali = quasi certamente un bug.'
      },
      {
        question: 'Nel grafico finale del lab MNIST, un titolo in rosso significa:',
        options: [
          'Il modello ha classificato correttamente quella cifra',
          'Il pixel è corrotto nel dataset originale',
          'Il numero è scritto in modo troppo chiaro e confonde il modello',
          'Il modello ha sbagliato la predizione su quella immagine',
        ],
        correct: 3,
        explanation: 'Nel lab, verde = predizione corretta, rosso = errore. Guardare le immagini con titolo rosso aiuta a capire quali cifre confonde di più il modello (tipicamente 4 vs 9, 3 vs 8, 5 vs 6).'
      },
      {
        question: 'Accuracy del 90% su MNIST sembra ottima. In quale scenario potrebbe essere fuorviante?',
        options: [
          'Sempre — l\'accuracy è una metrica inutile per le reti neurali',
          'Se il dataset avesse il 90% di una sola classe, un modello che predice sempre quella raggiungerebbe il 90% senza imparare nulla',
          'Se l\'accuracy supera l\'85%, il modello è sicuramente in overfitting',
          'Mai — il 90% è sempre un risultato affidabile su qualsiasi dataset',
        ],
        correct: 1,
        explanation: 'L\'accuracy è fuorviante con dataset sbilanciati. Su MNIST le 10 cifre sono bilanciate (~10% ciascuna), quindi il 90% è reale. Ma su fraud detection (1% di frodi), un modello che dice sempre \'non frode\' raggiunge il 99% — completamente inutile.'
      }
    ]
};