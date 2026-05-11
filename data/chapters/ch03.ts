import type { Chapter } from '../types';

export const ch03: Chapter = {
    id: 3,
    slug: 'data-importance',
    title: 'L\'Importanza dei Dati',
    description: 'Il carburante dell\'AI',
    sections: [
      { title: 'Quantità vs Qualità', content: 'Non è vero che più dati = meglio. Se raccogli 1 milione di foto blurrate di gatti, un algoritmo le imparerà male. Al contrario, 10.000 foto nitide di gatti diverse porteranno a risultati migliori. I dati devono essere: (1) sufficienti in quantità, (2) di alta qualità, (3) rappresentativi della realtà. Nel lavoro reale creare **dataset** bilanciati e versionati e spesso il fattore che separa una demo da una soluzione affidabile. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Dati puliti e rappresentativi valgono più di grandi volumi rumorosi>>.', media: [ { type: 'infographic', title: 'Quantità vs Qualità dati', description: 'Infografica: confronto visivo tra dataset grande ma rumoroso vs dataset piccolo ma curato.', placeholderPath: 'media/ch03-data-importance/sec-01/infographic.png', notes: 'ready' } ] },
      { title: 'Bias nei Dati', content: 'Il **bias** è il problema più grave. Se alleni un algoritmo di riconoscimento facciale usando foto solo di uomini, avrà difficoltà a riconoscere i volti femminili. Amazon ha dovuto buttare il suo sistema di assunzione automatico perché discriminava le donne — i dati storici riflettevano pregiudizi umani, e l\'AI li aveva imparati perfettamente. Nel lavoro reale creare dataset bilanciati e versionati e spesso il fattore che separa una demo da una soluzione affidabile. *Nota pratica:* applica il concetto in un mini scenario reale prima del deploy. <<Takeaway: Dati puliti e rappresentativi valgono più di grandi volumi rumorosi>>.', media: [ { type: 'video', title: 'Video — Bias nei dati: il caso Amazon', description: 'Video narrativo sul bias nei dati: il caso reale Amazon hiring tool (2018) che discriminava le donne perche addestrato su CV storici prevalentemente maschili. Come il bias entra nei dati, si propaga nel modello e produce decisioni ingiuste su persone reali.', placeholderPath: 'media/ch03-data-importance/sec-02/video.mp4', notes: 'ready' } ] },
      { title: "Startup Lens", content: "In early-stage product, meglio 5.000 record puliti e bilanciati che 500.000 rumorosi. Introduci versionamento dataset e changelog: ogni modifica ai dati deve essere tracciata." },
      { title: "Errore comune + Check rapido", content: "**Errore comune:** valutare il modello solo su test set statico.\n\n**Check rapido (2 min):** indica un caso reale in cui un test statico può dare falsa sicurezza e quale controllo aggiungeresti per evitare errori in produzione.", media: [ { type: 'podcast', title: 'Podcast — Errore comune: testare solo su dati statici', description: 'Micro-podcast sull\'errore di validation e come costruire edge-case robusti.', placeholderPath: 'media/ch03-data-importance/sec-04/podcast.mp3', notes: 'placeholder' } ] },
    ],
    keyTakeaways: [
      'Dati di qualità = AI di qualità',
      'Bias nei dati = discriminazione nell\'output',
      'Pulizia dati è 80% del lavoro in ML',
      'Diversità nei dati = modello più robusto',
      'Learning outcome: riconoscere bias e proporre una correzione dati concreta',
    ],
    discussionPrompts: [
      'Se un algoritmo fa discriminazioni, è colpa dell\'algoritmo o dei dati di allenamento?',
      'Come potremmo raccogliere dati che non riflettano i bias umani?',
      'Quali conseguenze potrebbe avere un sistema biased usato per assunzioni, prestiti bancari, o sentenze?'
    ],
    exercises: [
      {
        title: 'Mini Lab — Robustezza dati e edge-case (senza coding)',
        objective: 'Capire come stressare un modello con casi limite e proporre correzioni dati prima del deploy.',
        duration: '15-20 min',
        steps: [
          'Leggi il dataset CH3 (train) e immagina 5 edge-case realistici che potrebbero mettere in crisi il modello.',
          'Per ogni edge-case, indica quale tipo di errore potrebbe emergere (bias, confusione classe, mancata generalizzazione).',
          'Proponi una correzione dati o di processo (raccolta, bilanciamento, labeling, monitoraggio).',
          'Definisci 2 metriche da osservare per verificare se la correzione migliora davvero il comportamento del modello.'
        ],
        deliverable: 'Checkpoint personale: elenco dei 5 edge-case + 1 proposta di miglioramento prioritario con motivazione.',
        resources: [
          { label: 'Dataset train CH3 (CSV)', path: '/datasets/ch03-data-quality/train.csv' },
          { label: 'Dataset validation CH3 (CSV)', path: '/datasets/ch03-data-quality/validation.csv' },
          { label: 'Schema campi CH3 (JSON)', path: '/datasets/ch03-data-quality/schema.json' }
        ]
      }
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 3',
        description: 'Video completo Capitolo 3: quantita vs qualita dei dati, bias e discriminazione (caso Amazon), versionamento dataset, test statici vs dinamici. Con framework operativo per costruire dataset bilanciati e validazione robusta in produzione.',
        estimatedDuration: '8 min',
        placeholderPath: 'media/ch03-data-importance/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 3',
        description: 'Podcast del Capitolo 3: perche i dati sono il carburante dell AI, come il bias si insinua nei dataset, strategie di versionamento e validazione continua. Con il caso Amazon e framework pratico per dataset affidabili in startup.',
        estimatedDuration: '23 min',
        placeholderPath: 'media/ch03-data-importance/podcast.mp3',
        notes: 'ready'
      },
      {
        type: 'infographic',
        title: 'Infografica',
        description: 'Infografica Capitolo 3: 5 caratteristiche di un dataset di qualita, 3 tipi di bias piu comuni (storico, selezione, etichettatura), warning su test statici, e mini framework per audit dataset in 4 step.',
        placeholderPath: 'media/ch03-data-importance/infographic.png',
        notes: 'placeholder'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Materiale scaricabile per studio e esercitazione guidata.',
        placeholderPath: 'media/ch03-data-importance/handout.pdf',
        notes: 'placeholder'
      }
    ],
    challenge: {
      id: 'ch03-trova-bias',
      title: 'Trova il Bias',
      intro: 'Analizza questo dataset di candidature. Alcune righe mostrano un pattern discriminatorio. Clicca sulle righe che ritieni problematiche.',
      dataset: [
        { nome: 'Marco R.', genere: 'M' as const, età: 28, città: 'Milano', assunto: true },
        { nome: 'Laura B.', genere: 'F' as const, età: 27, città: 'Roma', assunto: false },
        { nome: 'Andrea C.', genere: 'M' as const, età: 32, città: 'Milano', assunto: true },
        { nome: 'Sara M.', genere: 'F' as const, età: 30, città: 'Napoli', assunto: false },
        { nome: 'Luca P.', genere: 'M' as const, età: 25, città: 'Milano', assunto: true },
        { nome: 'Elena V.', genere: 'F' as const, età: 26, città: 'Torino', assunto: false },
        { nome: 'Matteo G.', genere: 'M' as const, età: 35, città: 'Milano', assunto: true },
        { nome: 'Chiara F.', genere: 'F' as const, età: 29, città: 'Roma', assunto: false },
        { nome: 'Davide L.', genere: 'M' as const, età: 31, città: 'Milano', assunto: true },
        { nome: 'Giulia T.', genere: 'F' as const, età: 28, città: 'Napoli', assunto: false },
      ],
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice' as const,
          text: 'Quale tipo di bias è più evidente in questo dataset?',
          options: [
            { id: 'a', text: 'Bias di età' },
            { id: 'b', text: 'Bias di genere e geografico combinato' },
            { id: 'c', text: 'Bias di istruzione' },
            { id: 'd', text: 'Nessun bias rilevabile' },
          ],
          correctIds: ['b'],
          feedback: {
            correct: '✅ Esatto! Tutti gli uomini di Milano sono stati assunti, tutte le donne no — un pattern di doppio bias (genere + geografico).',
            partial: "⚠️ Parzialmente corretto — c'è un bias più specifico da identificare.",
            wrong: '❌ Rianalizza il dataset: guarda le colonne Genere e Città insieme alla colonna Assunto.',
          },
        },
        {
          id: 'q2',
          type: 'open-text' as const,
          text: 'Come correggeresti questo dataset per renderlo più equo?',
          placeholder: 'Es: bilanciare genere e provenienza geografica, blind hiring...',
          maxLength: 300,
          checklist: [
            { id: 'c1', text: 'Bilanciamento genere', keywords: ['bilanc', 'parità', 'genere', 'uomini', 'donne'] },
            { id: 'c2', text: 'Rimozione dati geografici discriminatori', keywords: ['geograf', 'città', 'provenienza', 'sede'] },
            { id: 'c3', text: 'Blind hiring o anonimizzazione', keywords: ['blind', 'anonimiz', 'nascond', 'rimuov'] },
          ],
        },
      ] as [import('../types').ChallengeQuestionMultipleChoice, import('../types').ChallengeQuestionOpenText],
    },
    quiz: [
      {
        question: 'Quali sono le tre dimensioni chiave della qualità dei dati?',
        options: [
          'Velocità, volume, varietà',
          'Accuratezza, latenza, throughput',
          'Dimensione, formato, compressione',
          'Quantità, qualità e rappresentatività',
        ],
        correct: 3,
        explanation: 'Un dataset utile per il ML deve avere abbastanza esempi (quantità), dati corretti e puliti (qualità) e una distribuzione che riflette il mondo reale (rappresentatività). Mancarne uno compromette il modello.'
      },
      {
        question: 'Il data drift in produzione indica che:',
        options: [
          'Il modello ha troppi parametri',
          'La distribuzione dei dati reali si è spostata rispetto ai dati di training',
          'Il server di inferenza è lento',
          'Il dataset di training era troppo piccolo',
        ],
        correct: 1,
        explanation: 'Il data drift avviene quando il mondo cambia (nuovi comportamenti utenti, stagionalità, eventi) e i dati in produzione non assomigliano più a quelli su cui il modello è stato addestrato. Causa degradazione silente delle performance.'
      },
      {
        question: 'Un dataset di 10.000 esempi con 9.800 etichette \'non frode\' e 200 \'frode\' è:',
        options: [
          'Perfetto — più dati non-frode aiutano il modello a stabilizzarsi',
          'Troppo piccolo per qualsiasi modello ML',
          'Sbilanciato — il modello rischia di predire sempre \'non frode\' e raggiungere il 98% di accuracy senza imparare nulla',
          'Normale — tutti i dataset reali hanno questa distribuzione',
        ],
        correct: 2,
        explanation: 'Dataset sbilanciati sono insidiosi: un modello stupido che predice sempre la classe maggioritaria raggiunge il 98% di accuracy. Serve oversampling, undersampling o metriche come F1-score e AUC-ROC.'
      },
      {
        question: 'Cosa significa \'data leakage\' in un progetto ML?',
        options: [
          'I dati vengono rubati da attori esterni',
          'Il dataset è troppo grande per la RAM',
          'I dati perdono qualità durante la trasformazione',
          'Il modello vede durante il training informazioni che non saranno disponibili in produzione',
        ],
        correct: 3,
        explanation: 'Data leakage è uno degli errori più subdoli: es. normalizzare con la media dell\'intero dataset PRIMA dello split, o includere feature che \'vedono il futuro\'. Il modello sembra ottimo in training ma fallisce in produzione.'
      },
      {
        question: 'Quale approccio è corretto per gestire valori mancanti (NaN) in un dataset?',
        options: [
          'Analizzare il pattern di missingness prima di scegliere strategia (imputazione, eliminazione, o feature apposita)',
          'Eliminare sempre tutte le righe con NaN',
          'Ignorarli — la maggior parte dei modelli li gestisce automaticamente',
          'Sostituirli sempre con 0',
        ],
        correct: 0,
        explanation: 'Non esiste una soluzione universale. I NaN possono essere MCAR (random), MAR (dipendente da altre variabili) o MNAR (sistematico). La strategia dipende dal pattern — eliminare tutto o mettere 0 può introdurre bias.'
      },
      {
        question: 'Perché la rappresentatività del dataset è critica per il ML?',
        options: [
          'Dataset rappresentativi richiedono meno computational power',
          'La rappresentatività influenza solo la velocità di training',
          'Un modello addestrato su dati non rappresentativi impara bias e discrimina su gruppi sottorappresentati',
          'Dataset rappresentativi sono sempre più grandi',
        ],
        correct: 2,
        explanation: 'Se il dataset di training è composto solo da uomini bianchi di 30-40 anni, il modello fallirà su donne, anziani, altre etnie. I bias nei dati diventano bias nel modello — con impatti reali sulle persone.'
      },
      {
        question: 'Qual è la differenza tra dato strutturato e non strutturato?',
        options: [
          'I dati strutturati sono sempre più accurati',
          'Il dato strutturato è organizzato in righe/colonne (tabelle); il non strutturato è testo libero, immagini, audio',
          'I dati non strutturati non possono essere usati nel ML',
          'Strutturato = open-source, non strutturato = proprietario',
        ],
        correct: 1,
        explanation: 'Dati strutturati: tabelle SQL, CSV, fogli Excel. Dati non strutturati: email, articoli, foto, video, registrazioni. La maggior parte del valore aziendale è nel non strutturato — da qui l\'importanza di NLP e Computer Vision.'
      },
      {
        question: 'Una startup ha 500 esempi etichettati. Quale tecnica può aumentare efficacemente la dimensione del training set per immagini?',
        options: [
          'Data augmentation — rotazioni, flip, zoom, variazioni di luminosità',
          'Copiare ogni immagine 10 volte senza modifiche',
          'Ridurre la risoluzione per avere più spazio',
          'Usare solo il 10% dei dati per ridurre overfitting',
        ],
        correct: 0,
        explanation: 'La data augmentation crea varianti artificiali degli esempi esistenti: un\'immagine di un gatto ruotata di 15° è ancora un gatto, ma il modello la tratta come esempio nuovo. Molto usata in Computer Vision con dati limitati.'
      },
      {
        question: 'Cosa succede se normalizzi i dati DOPO lo split train/test invece che prima?',
        options: [
          'Niente — l\'ordine non influisce sui risultati',
          'Eviti data leakage: la normalizzazione usa solo le statistiche del training set, non quelle del test',
          'Il modello diventa più veloce',
          'Il test set diventa più piccolo',
        ],
        correct: 1,
        explanation: 'Normalizzare prima dello split = usare media e std dell\'intero dataset (incluso test) → data leakage. Corretto: calcola media/std sul training set → applica le stesse trasformazioni a validation e test.'
      },
      {
        question: 'Qual è il messaggio chiave sulla qualità dei dati nel ML?',
        options: [
          'Più dati hai, meglio è — la quantità batte sempre la qualità',
          'Il preprocessing è opzionale se usi modelli moderni come le reti neurali',
          'Dati puliti, rappresentativi e senza leakage sono più importanti del modello scelto',
          'I dati non strutturati non servono — meglio concentrarsi sui tabellari',
        ],
        correct: 2,
        explanation: '\'Garbage in, garbage out\' è la regola d\'oro del ML. Il modello più sofisticato non può compensare dati di bassa qualità. Investire in data quality è spesso più efficace che ottimizzare il modello.'
      }
    ]
};