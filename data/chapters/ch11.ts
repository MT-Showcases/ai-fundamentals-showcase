import type { Chapter } from '../types';

export const ch11: Chapter = {
    id: 11,
    slug: 'ai-act',
    title: 'AI Act Europeo: Regolazione dell\'AI',
    description: 'Come classificare il rischio AI e rispettare gli obblighi normativi UE',
    sections: [
      { title: 'I 4 Livelli di Rischio', content: "L'**AI Act** classifica i sistemi in base al rischio: **vietato**, **alto rischio**, **rischio limitato** e **rischio minimo**. La regola è semplice: più alto è l\'impatto sulle persone, più rigorosi diventano i controlli.\n\nEsempi pratici:\n- **Vietato**: pratiche manipolative o sorveglianza inaccettabile\n- **Alto rischio**: AI usata in selezione personale, credito, sanità, istruzione, infrastrutture critiche\n- **Limitato**: sistemi che richiedono trasparenza verso l\'utente\n- **Minimo**: uso a basso impatto, con obblighi ridotti\n\n*Nota pratica:* la classificazione rischio va fatta prima del build finale, non dopo il go-live. <<Takeaway: prima classifichi il rischio, poi scegli i controlli tecnici e documentali>>." },
      { title: 'Obblighi per Sistemi ad Alto Rischio', content: "Per i sistemi ad **alto rischio** non basta che il modello funzioni: devi dimostrare che è governato in modo tracciabile. In pratica servono:\n- documentazione tecnica completa\n- gestione del rischio lungo il ciclo di vita\n- qualità e governance dei dati\n- logging, monitoraggio e registri degli incidenti\n- supervisione umana dove necessario\n- robustezza, accuratezza e cybersecurity adeguate\n\nIn questo contesto, **Explainability** ed evidenze **in produzione** diventano requisiti operativi, non solo teorici. Le sanzioni possono essere molto alte, quindi compliance e prodotto devono avanzare insieme. *Nota pratica:* tratta la compliance come parte della Definition of Done di ogni release, con **guardrail** e check di **Etica AI** già in pipeline. <<Takeaway: in high-risk AI, evidenza e tracciabilità contano quanto la performance>>." },
      { title: 'Startup Lens', content: "Per una startup, la strategia vincente è integrare la compliance in pipeline: classificazione rischio, checklist release, owner responsabile, audit periodico e piano incidenti. Così riduci ritardi, rework e rischio legale quando il prodotto scala." },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** pensare che la compliance sia solo un documento legale da compilare a fine progetto.\n\n**Check rapido (2 min):** scegli un caso d\'uso AI reale e rispondi:\n1) in quale livello di rischio lo collochi?\n2) quale controllo tecnico rendi obbligatorio prima del deploy?\n3) quale evidenza conserveresti per un audit?" }
    ],
    keyTakeaways: [
      'L\'AI Act regola i sistemi in base al livello di rischio',
      'Per l\'alto rischio servono controlli tecnici, governance e supervisione umana',
      'Trasparenza, documentazione e tracciabilità non sono opzionali',
      'Compliance efficace = processo continuo, non check finale',
      'Learning outcome: classificare un caso AI e definire controlli minimi prima del deploy',
    ],
    discussionPrompts: [
      'Quale parte del tuo prodotto AI potrebbe essere classificata come alto rischio?',
      'Come bilanceresti velocità di rilascio e obblighi di conformità?',
      'Quali evidenze tecniche conserveresti per dimostrare accountability?'
    ],
    challenge: {
      id: 'ch11-classifica-rischio',
      title: 'Classifica il Rischio AI Act',
      intro: 'Leggi ogni scenario e assegna il livello di rischio corretto secondo l\'AI Act europeo. Clicca "Verifica" per scoprire se hai classificato correttamente.',
      scenarios: [
        {
          id: 's1',
          text: 'Una startup sviluppa un sistema AI che analizza le micro-espressioni facciali di studenti durante un esame universitario per rilevare comportamenti sospetti di copiatura, senza che gli studenti ne siano informati.',
          correctRisk: 'prohibited',
          rationale: 'Questo sistema rientra nella categoria vietata: utilizza sistemi biometrici in tempo reale in spazi accessibili al pubblico (o semi-pubblici come aule) per scopi non espressamente autorizzati. Inoltre, la raccolta di dati biometrici senza consenso informato viola esplicitamente l\'AI Act e il GDPR.',
        },
        {
          id: 's2',
          text: 'Un\'azienda HR utilizza un algoritmo AI per screeners automatici di CV e assegnare un punteggio di "idoneità lavorativa" che determina chi passa alla fase di colloquio, senza revisione umana obbligatoria.',
          correctRisk: 'high',
          rationale: 'I sistemi AI usati in processi di selezione e valutazione del personale sono esplicitamente classificati come alto rischio nell\'AI Act (Allegato III). Impattano direttamente l\'accesso all\'occupazione e richiedono documentazione tecnica, audit di fairness e supervisione umana.',
        },
        {
          id: 's3',
          text: 'Una fintech usa un modello AI per valutare il merito creditizio di persone fisiche e determinare automaticamente l\'approvazione o il rifiuto di un mutuo, con output vincolante e nessuna possibilità di ricorso.',
          correctRisk: 'high',
          rationale: 'I sistemi AI che valutano la solvibilità e determinano l\'accesso al credito sono alto rischio (Allegato III, categoria 5b). Impattano diritti economici fondamentali. Richiedono trasparenza, supervisione umana, possibilità di ricorso e documentazione del processo decisionale.',
        },
        {
          id: 's4',
          text: 'Un e-commerce integra un chatbot AI per rispondere alle domande dei clienti sul tracking degli ordini e sui resi. Il bot gestisce solo richieste standard; per casi complessi trasferisce a un operatore umano.',
          correctRisk: 'limited',
          rationale: 'Un chatbot di customer service senza impatto su diritti individuali è a rischio limitato. L\'obbligo principale dell\'AI Act è la disclosure: gli utenti devono sapere che stanno interagendo con un sistema AI, non con un umano.',
        },
        {
          id: 's5',
          text: 'Un\'app di produttività usa AI per suggerire automaticamente l\'orario migliore per le riunioni, analizzando la disponibilità del calendario degli utenti che hanno esplicitamente acconsentito.',
          correctRisk: 'minimal',
          rationale: 'Un sistema di scheduling AI con consenso esplicito, nessun impatto su diritti fondamentali e funzionalità puramente assistiva è a rischio minimo. Non richiede obblighi specifici oltre alle normali best practice di sviluppo software e privacy.',
        },
      ],
      riskOptions: [
        { value: 'prohibited', label: '🚫 Vietato', color: 'red' },
        { value: 'high', label: '🔴 Alto Rischio', color: 'orange' },
        { value: 'limited', label: '🟡 Rischio Limitato', color: 'yellow' },
        { value: 'minimal', label: '🟢 Rischio Minimo', color: 'green' },
      ],
    },
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 11',
        description: 'Video completo Capitolo 11: AI Act UE, livelli di rischio e controlli di compliance in pratica.',
        estimatedDuration: '9 min',
        placeholderPath: 'media/ch11-ai-act/video.mp4',
        notes: 'placeholder'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 11',
        description: 'Podcast su classificazione rischio AI e governance operativa per team prodotto.',
        estimatedDuration: '18 min',
        placeholderPath: 'media/ch11-ai-act/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 11',
        description: 'AI Act Europeo: livelli di rischio, principio di proporzionalità e pilastri per i sistemi ad alto rischio.',
        placeholderPath: 'media/ch11-ai-act/infographic.jpg',
        notes: 'ready'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Materiale scaricabile su classificazione rischio e controlli minimi di conformità.',
        placeholderPath: 'media/ch11-ai-act/handout.pdf',
        notes: 'placeholder'
      }
    ],
    quiz: [
      {
        question: 'Un’azienda italiana usa un sistema AI per filtrare candidati a posizioni dirigenziali. Il fornitore dice che il modello è “low risk”. Sei il DPO. Cosa verifichi prima di accettare questa classificazione?',
        options: [
          'Se il fornitore è certificato ISO 27001',
          'Se il sistema impatta accesso a opportunità di lavoro — in quel caso l’AI Act lo classifica esplicitamente ad alto rischio indipendentemente da quanto dice il fornitore',
          'Se il modello usa un’architettura Transformer o CNN',
          'Se il fornitore è stabilito nell’UE',
        ],
        correct: 1,
        explanation: 'L’AI Act non lascia al fornitore la classificazione del rischio in modo discrezionale per categorie specifiche. Sistemi che impattano accesso a lavoro, credito, istruzione e servizi pubblici essenziali sono elencati esplicitamente come alto rischio nell’Allegato III del regolamento, indipendentemente da quanto dichiara il vendor.'
      },
      {
        question: 'Il tuo chatbot di supporto interno risponde in modo così naturale che i dipendenti pensano di parlare con un collega umano. Cosa richiede l’AI Act in questo caso?',
        options: [
          'Nulla — i chatbot interni sono esclusi dal perimetro dell’AI Act',
          'Disclosure obbligatoria: gli utenti devono sapere che stanno interagendo con un sistema AI, non con un umano',
          'Il chatbot deve rispondere solo in inglese per evitare ambiguità culturali',
          'Il chatbot deve avere accuracy > 95% prima del deploy',
        ],
        correct: 1,
        explanation: 'L’AI Act prevede obblighi di trasparenza per i sistemi che interagiscono con persone: se un sistema può essere scambiato per umano, deve dichiarare esplicitamente di essere AI. Questo vale anche per uso interno, non solo per consumatori esterni.'
      },
      {
        question: 'Il team vuole accelerare il deploy di un sistema AI per la gestione delle segnalazioni di sicurezza sul lavoro. Propongono di completare la documentazione tecnica dopo il go-live. Perché questa sequenza è sbagliata secondo l’AI Act?',
        options: [
          'La documentazione tecnica non è richiesta per sistemi di sicurezza sul lavoro',
          'Per sistemi ad alto rischio, la documentazione tecnica e la conformità devono essere completate e verificabili prima del deploy, non dopo',
          'Il problema è solo procedurale — basta inserire la data corretta nel documento',
          'L’AI Act consente una finestra di 90 giorni per completare la documentazione post-deploy',
        ],
        correct: 1,
        explanation: 'Per sistemi ad alto rischio, l’AI Act richiede conformità prima della messa in servizio, non dopo. La documentazione tecnica serve a dimostrare che il sistema è stato progettato e testato correttamente. Documenti prodotti post-deploy non provano nulla sulla qualità del processo di sviluppo.'
      },
      {
        question: 'Un sistema AI con accuracy globale del 94% sbaglia sistematicamente sul 28% dei casi relativi a persone con disabilità motorie. Secondo l’AI Act, quale è il primo intervento corretto?',
        options: [
          'Accettare il sistema perché il 94% supera qualsiasi soglia ragionevole',
          'Aggiungere un disclaimer nell’interfaccia che segnala limitazioni per utenti con disabilità',
          'Analisi approfondita della discriminazione su sottogruppo, sospensione del deploy su casi impattati e piano di correzione documentato',
          'Aumentare il dataset di training con più esempi generici',
        ],
        correct: 2,
        explanation: 'Un 28% di errori su un gruppo protetto non è accettabile indipendentemente dall’accuracy globale. L’AI Act impone che i sistemi ad alto rischio siano equi e non discriminatori. La risposta corretta prevede analisi, sospensione cautelativa dove applicabile e un piano di remediation documentato.'
      },
      {
        question: 'Stai preparando un audit su un sistema AI ad alto rischio già in produzione da 6 mesi. Quale set di evidenze è più utile per dimostrare conformità AI Act?',
        options: [
          'Dashboard di monitoring con uptime al 99.9% e latenza media < 200ms',
          'Documentazione tecnica aggiornata + risultati test di fairness per sottogruppo + incident log con gestione + proof of human oversight per i casi critici',
          'Solo il contratto firmato con il fornitore del modello base',
          'Screenshot dell’interfaccia + numero di utenti attivi mensili',
        ],
        correct: 1,
        explanation: 'Un audit AI Act ad alto rischio richiede tracciabilità completa: come il sistema funziona tecnicamente, come è stato testato (incluso fairness), come sono stati gestiti gli incidenti, e come è garantita la supervisione umana. Performance tecnica da sola non dimostra conformità normativa.'
      },
      {
        question: 'Privacy-by-design richiede che la minimizzazione dei dati sia applicata in fase di progettazione. Nel contesto di un sistema AI, cosa significa concretamente?',
        options: [
          'Raccogliere tutti i dati disponibili e anonimizzarli prima del training',
          'Usare solo dati sintetici per evitare problemi GDPR',
          'Definire prima del training quali dati sono strettamente necessari per il task, scartare il resto, e progettare accesso e retention come vincoli architetturali — non come post-processing',
          'Chiedere il consenso esplicito per ogni dato raccolto, indipendentemente dal volume',
        ],
        correct: 2,
        explanation: 'Privacy-by-design non è anonimizzazione a posteriori — è un principio architetturale. Significa progettare il sistema partendo dal minimo necessario: quali dati servono davvero, chi può accedervi, per quanto tempo, e per quale scopo. Questi vincoli vanno definiti prima di costruire il sistema, non dopo.'
      },
      {
        question: 'Un sistema AI per la valutazione del rischio clinico ha F1=0.91 su pazienti adulti ma F1=0.71 su pazienti over 80. Il team dice “è normale, gli anziani sono una popolazione complessa”. Come valuti questa affermazione?',
        options: [
          'È corretta — popolazioni complesse hanno naturalmente performance inferiori e questo è accettabile',
          'È una razionalizzazione non accettabile: F1=0.71 su un sottogruppo clinicamente vulnerabile è un problema di fairness e sicurezza che richiede analisi causa-radice e intervento, non giustificazione',
          'È un problema solo se il dataset di training aveva meno del 10% di pazienti anziani',
          'È accettabile se il medico può sempre fare override della raccomandazione',
        ],
        correct: 1,
        explanation: 'La "complessità della popolazione" non è una giustificazione valida per discriminazione algoritmica su gruppi vulnerabili. F1=0.71 su pazienti anziani in un sistema clinico significa che quasi 3 pazienti su 10 ricevono una valutazione errata. Questo richiede analisi delle cause (dati insufficienti? feature non rappresentative?) e intervento, non accettazione.'
      },
      {
        question: 'Quale delle seguenti affermazioni sull’AI Act è falsa?',
        options: [
          'I sistemi di social scoring governativo sui cittadini sono vietati',
          'I sistemi ad alto rischio richiedono documentazione tecnica, test di robustezza e possibilità di supervisione umana',
          'L’AI Act si applica solo ai sistemi sviluppati da aziende con sede nell’UE',
          'I chatbot che simulano persone umane hanno obblighi di disclosure',
        ],
        correct: 2,
        explanation: 'L’AI Act ha effetto extraterritoriale: si applica a qualsiasi sistema AI che viene utilizzato nell’UE, indipendentemente da dove è stato sviluppato. Un’azienda americana che vende un sistema di scoring creditizio in Europa deve rispettare l’AI Act esattamente come un’azienda italiana.'
      },
      {
        question: 'Il team di sviluppo propone di usare un LLM open-source per automatizzare decisioni di erogazione sussidi sociali, senza revisione umana, perché “riduceva i tempi del 70%”. Qual è il problema principale?',
        options: [
          'I modelli open-source non sono abbastanza accurati per sistemi pubblici',
          'Il 70% di riduzione dei tempi non è verificabile senza un benchmark indipendente',
          'I sussidi sociali rientrano nell’alto rischio AI Act — decisioni automatizzate senza supervisione umana violano il regolamento oltre che il principio di tutela dei diritti fondamentali',
          'Il problema è solo tecnico: serve un modello più grande e accurato',
        ],
        correct: 2,
        explanation: 'I sistemi che determinano accesso a benefici sociali essenziali sono esplicitamente ad alto rischio nell’AI Act. La piena automazione senza supervisione umana non è consentita in questo contesto, indipendentemente dall’efficienza guadagnata. L’efficienza non può prevalere sui diritti fondamentali delle persone.'
      },
      {
        question: 'Qual è la differenza operativa tra un sistema AI a “rischio limitato” e uno a “alto rischio” secondo l’AI Act?',
        options: [
          'Il rischio limitato richiede solo trasparenza (disclosure), l’alto rischio richiede documentazione tecnica, test di conformità, supervisione umana e registrazione obbligatoria',
          'La differenza è solo nel numero di parametri del modello',
          'I sistemi a rischio limitato non hanno obblighi, l’alto rischio richiede certificazione ISO',
          'L’alto rischio è vietato, il rischio limitato è consentito liberamente',
        ],
        correct: 0,
        explanation: 'L’AI Act è proporzionale: rischio limitato (chatbot, deepfake) richiede principalmente trasparenza verso gli utenti. Alto rischio (CV screening, credito, diagnosi, infrastrutture critiche) richiede obblighi molto più stringenti: documentazione tecnica completa, test di robustezza e fairness, supervisione umana strutturata, e registrazione in una banca dati EU.'
      },
    ]
};
