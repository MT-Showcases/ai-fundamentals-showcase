import type { Chapter } from '../types';

export const ch01: Chapter = {
    id: 1,
    slug: 'what-is-ai',
    title: "Cos'è davvero l\'Intelligenza Artificiale",
    description: 'Introduzione ai concetti fondamentali dell\'AI',
    sections: [
      { title: 'AI vs Intelligenza Umana', content: 'L\'intelligenza artificiale *non pensa come gli umani*. Mentre un bambino impara a riconoscere i cani da pochi esempi, l\'AI ha bisogno di migliaia di immagini di cani per lo stesso compito. La differenza fondamentale: gli umani comprendono il significato, l\'AI fa **riconoscimento di pattern** nei dati. Questo significa che il modello apprende correlazioni statistiche che *simulano* comprensione, ma non possiede semantica umana reale. In pratica: valida sempre il contesto prima di usare un output AI; AI e una leva, non un oracolo. Questo include differenziare chiaramente **Machine Learning**, **Pattern Recognition** e **Deep Learning** nei casi d\'uso reali.', media: [ { type: 'infographic', title: 'AI vs Intelligenza Umana — visual', description: 'Schema comparativo tra come impara un bambino (esperienza diretta, regole implicite, adattamento) e come impara una macchina (dati etichettati, ottimizzazione matematica, generalizzazione statistica). Evidenzia capacita e limiti di ciascun approccio.', placeholderPath: 'media/ch01-what-is-ai/sec-01/infographic.png', notes: 'ready' } ] },
      { title: "L\'AI nella Vita Quotidiana", content: 'Ogni giorno interagiamo con l\'AI senza rendercene conto: Spotify suggerisce musica basandosi sui tuoi ascolti, Netflix consiglia film simili a quelli che hai guardato, Alexa risponde ai tuoi comandi vocali. Questo è **sistema di raccomandazione basato su dati**. *Utile non significa infallibile*: sembra intelligente, ma sta facendo predizione statistica. Caso pratico: se Netflix ti propone film sbagliati per una settimana, il KPI di qualità della raccomandazione sta calando e il sistema va ricalibrato.', media: [ { type: 'infographic', title: 'AI nella vita quotidiana', description: 'Come funzionano i sistemi AI nella vita quotidiana: raccomandazione (Netflix, Spotify), riconoscimento vocale (Siri, Alexa), filtri antispam, navigazione GPS. Ogni esempio mostra input, algoritmo e output concreto.', placeholderPath: 'media/ch01-what-is-ai/sec-02/infographic.png', notes: 'ready' } ] },
      { title: "Startup Lens", content: "Per un MVP startup, usa AI dove riduce tempo operativo in modo misurabile: supporto clienti, classificazione ticket, suggerimenti contenuto. Definisci **KPI misurabili** (tempo medio risposta, tasso risoluzione, error rate) prima del rilascio. <<Niente AI in produzione senza metrica di controllo>>.", },
      { title: "Errore comune + Mini esercizio", content: "**Errore comune:** trattare l'AI come fonte di verita assoluta.\n\n**Mini esercizio (15 min):** prendi 3 risposte AI su un tema tecnico, verifica fonti, segna cosa era corretto, ambiguo o errato, poi riscrivi una risposta validata.\n\nRubrica rapida di validazione:\n- **Dataset check**: i dati sono rappresentativi o sbilanciati?\n- **Output check**: dove sbaglia più spesso il modello?\n- **KPI check**: quale metrica minima (precisione, recall o errore medio) useresti per dire che il sistema funziona?\n\n<<Usa AI come copilota, non come verita assoluta>>.", media: [ { type: 'podcast', title: 'Podcast sezione — Errore comune e validazione', description: 'Mini podcast dedicato all\'errore più comune con AI e metodo di controllo pratico.', placeholderPath: 'media/ch01-what-is-ai/sec-04/podcast.mp3', notes: 'ready' } ] },
    ],
    keyTakeaways: [
      'L\'AI non pensa — riconosce pattern nei dati',
      'L\'AI ha bisogno di migliaia di esempi, l\'uomo impara da pochi',
      'I 3 ingredienti: Dati + Algoritmo + Potenza di calcolo',
      'L\'AI sbaglia quando i dati sono scarsi o distorti',
      'L\'AI è uno strumento — la qualità dipende dall\'input',
      'Learning outcome: valutare un caso AI base in 3 step (dati, modello, output) e identificare almeno 1 rischio'
    ],
    discussionPrompts: [
      'Quali differenze noti tra come gli umani e come l\'AI imparano da nuove informazioni?',
      'Puoi fare un esempio di AI che usi regolarmente nella tua vita quotidiana?',
      'Se l\'AI riconosce solo pattern, come può mai essere creativa o innovativa?'
    ],
    exercises: [
      {
        title: 'Validation Lab — Verifica un Output AI',
        objective: 'Imparare a riconoscere quando un output AI è affidabile e quando richiede verifiche.',
        duration: '20-25 min',
        steps: [
          'Scegli un argomento tecnico che conosci (es: "come funziona una REST API", "differenza tra SQL e NoSQL")',
          'Poni la domanda a ChatGPT o Claude',
          'Valuta la risposta su 3 assi: (1) Correttezza fattuale, (2) Completezza, (3) Hallucination/Imprecisioni',
          'Confronta con 2 fonti indipendenti (documentazione ufficiale, articoli tecnici)',
          'Marca le parti corrette (✅), incomplete (⚠️) e errate (❌)',
          'Riscrivi una versione "validata" combinando AI + fonti'
        ],
        deliverable: 'Documento: output originale → marcatura → versione corretta + spiegazione delle differenze',
        resources: [
          { label: 'Rubrica di valutazione (PDF)', path: '/resources/ch01-validation-rubric.pdf' },
          { label: 'Template risposta (DOCX)', path: '/resources/ch01-exercise-template.docx' }
        ]
      }
    ],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 1',
        description: 'Video di apertura del corso: cosa e AI, differenza tra intelligenza umana e artificiale, panoramica dei 15 capitoli e come usare la piattaforma per massimizzare l apprendimento. Ideale come primo contatto con il materiale.',
        estimatedDuration: '7-8 min',
        placeholderPath: 'media/ch01-what-is-ai/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 1',
        description: 'Versione audio del Capitolo 1: definizione di AI, confronto con intelligenza umana, esempi concreti nella vita quotidiana e framework mentale per affrontare i capitoli successivi. Perfetto da ascoltare in mobilita.',
        estimatedDuration: '12-13 min',
        placeholderPath: 'media/ch01-what-is-ai/podcast.mp3',
        notes: 'ready'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 1',
        description: 'Mappa visuale del Capitolo 1: definizione AI, 3 differenze chiave con intelligenza umana, 5 esempi quotidiani, e i 3 takeaway fondamentali. Una pagina per portare sempre con se il nucleo del capitolo.',
        placeholderPath: 'media/ch01-what-is-ai/infographic.png',
        notes: 'ready'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Materiale scaricabile per studio e esercitazione guidata.',
        placeholderPath: 'media/ch01-what-is-ai/handout.pdf',
        notes: 'placeholder'
      }
    ],
    quiz: [
      {
        question: 'Qual è la differenza più solida tra intelligenza umana e AI moderna?',
        options: [
          'L\'AI comprende il significato come un umano',
          'L\'AI apprende soprattutto correlazioni e pattern statistici',
          'L\'AI non dipende dai dati',
          'L\'AI è sempre più creativa dell\'umano',
        ],
        correct: 1,
        explanation: 'L\'AI è fortissima nel pattern matching, ma non ha comprensione semantica umana piena.'
      },
      {
        question: 'Se un output AI è molto fluido e convincente, qual è il comportamento corretto?',
        options: [
          'Pubblicarlo subito perché suona bene',
          'Usarlo solo se è breve',
          'Verificarne fonti, contesto e coerenza prima di usarlo',
          'Scartarlo sempre',
        ],
        correct: 2,
        explanation: 'Fluenza linguistica non equivale a verità: serve validazione.'
      },
      {
        question: 'Un sistema di raccomandazione peggiora per una settimana: quale ipotesi è più utile per iniziare il debug?',
        options: [
          'Il brand è cambiato',
          'Il modello è diventato cosciente',
          'È un problema inevitabile e non monitorabile',
          'Possibile drift nei dati/comportamenti utenti da misurare con KPI',
        ],
        correct: 3,
        explanation: 'Quando cala la qualità, partire da dati/KPI è più utile che da ipotesi vaghe.'
      },
      {
        question: 'Quale triade è necessaria per costruire un sistema AI funzionante?',
        options: [
          'Prompt + UI + Branding',
          'Dati + Algoritmo + Potenza di calcolo',
          'GPU + DNS + CDN',
          'SEO + Design + Social',
        ],
        correct: 1,
        explanation: 'Senza uno dei tre pilastri, la qualità del sistema crolla.'
      },
      {
        question: 'Hai 2 modelli: A più accurato ma con dati poco rappresentativi, B leggermente meno accurato ma più robusto sui casi reali. In produzione scegli:',
        options: [
          'A, sempre: basta il numero più alto',
          'A, ma senza monitoraggio',
          'B, se regge meglio gli edge-case del dominio reale',
          'Nessuno dei due',
        ],
        correct: 2,
        explanation: 'In produzione conta la robustezza sul reale, non solo il picco in test controllato.'
      },
      {
        question: 'Qual è un segnale che stai trattando l\'AI come "oracolo" invece che come "copilot"?',
        options: [
          'Definire KPI prima del rilascio',
          'Confrontare output AI con fonti indipendenti',
          'Documentare limiti e fallback',
          'Accettare output senza review perché "sembra giusto"',
        ],
        correct: 3,
        explanation: 'Il rischio principale è delegare verità all\'AI senza controllo umano.'
      },
      {
        question: 'In un MVP startup, dove ha più senso inserire AI per prima?',
        options: [
          'In processi ad alto volume e ripetitivi con KPI chiari',
          'In qualsiasi punto "fa scena"',
          'Solo in funzionalità non usate dagli utenti',
          'Solo dopo aver assunto un team ML completo',
        ],
        correct: 0,
        explanation: 'L\'AI crea valore quando riduce tempo/costo su flussi misurabili.'
      },
      {
        question: 'Quale combinazione rappresenta una validazione minima sensata di output AI?',
        options: [
          'Solo rilettura grammaticale',
          'Solo test su 1 esempio',
          'Controllo dati di input + verifica output + metrica di qualità',
          'Solo benchmark marketing',
        ],
        correct: 2,
        explanation: 'La validazione utile copre input, output e criterio misurabile.'
      },
      {
        question: 'Prima del go-live, quale decisione è più matura?',
        options: [
          'Rilasciare e sperare che vada bene',
          'Definire soglie KPI e regole di fallback/manual review',
          'Nascondere i log per evitare rumore',
          'Misurare solo il tempo di caricamento UI',
        ],
        correct: 1,
        explanation: 'Soglie e fallback trasformano un prototipo in sistema operativo controllabile.'
      },
      {
        question: 'Quale affermazione è più corretta sul ruolo umano con l\'AI?',
        options: [
          'Il valore umano cresce su decisioni, verifica e responsabilità',
          'L\'umano diventa inutile appena il modello è grande',
          'Basta sapere scrivere prompt lunghi',
          'L\'AI elimina il bisogno di contesto',
        ],
        correct: 0,
        explanation: 'L\'AI amplifica, ma governance e responsabilità restano umane.'
      }
    ]
};
