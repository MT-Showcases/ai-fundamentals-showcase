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
    quiz: [
      {
        question: "Qual è il rischio principale di un dataset sbilanciato?",
        options: [
          "Decisioni discriminatorie su gruppi sotto-rappresentati",
          "Riduzione automatica dei costi cloud",
          "Generalizzazione migliore per definizione",
          "Latenza sempre più bassa",
        ],
        correct: 0,
        explanation: "Squilibri nei dati possono diventare squilibri nelle decisioni."
      },
      {
        question: "Hai 1M record rumorosi vs 100k record puliti e rappresentativi: in genere conviene partire da:",
        options: [
          "1M rumorosi, sempre",
          "100k puliti, poi scalare qualità e copertura",
          "È equivalente",
          "Dipende solo dalla GPU",
        ],
        correct: 1,
        explanation: "Qualità e rappresentatività guidano più della quantità grezza."
      },
      {
        question: "Il caso Amazon hiring bias dimostra soprattutto che:",
        options: [
          "Il modello può amplificare pregiudizi storici presenti nei dati",
          "I modelli rimuovono automaticamente i bias",
          "Basta aumentare il calcolo per risolvere fairness",
          "Il problema è solo legale, non tecnico",
        ],
        correct: 0,
        explanation: "Se i dati sono distorti, il modello tende a replicare quella distorsione."
      },
      {
        question: "Qual è un segnale che il dataset non rappresenta il mondo reale?",
        options: [
          "Performance uniforme su tutti i sottogruppi",
          "Errori concentrati sempre sullo stesso tipo di utenti/casi",
          "Riduzione del tempo di training",
          "Numero di feature elevato",
        ],
        correct: 1,
        explanation: "Errori sistematici su sottogruppi indicano gap di rappresentatività."
      },
      {
        question: "In fase di validazione, perché creare edge-case è utile?",
        options: [
          "Per ridurre artificialmente la difficoltà del test",
          "Per trovare failure pattern non visibili nei casi standard",
          "Per evitare monitoraggio in produzione",
          "Per sostituire completamente il dataset di training",
        ],
        correct: 1,
        explanation: "Gli edge-case stressano il modello dove è più fragile."
      },
      {
        question: "Se una feature sembra predittiva ma potrebbe essere proxy sensibile (es. zona), cosa fai per prima?",
        options: [
          "La lasci invariata perché aumenta accuracy",
          "Esegui fairness audit per sottogruppi e valuti mitigazioni",
          "La rimuovi sempre senza analisi",
          "Ignori il problema finché non arriva un reclamo",
        ],
        correct: 1,
        explanation: "Prima misuri impatto e trade-off, poi applichi mitigazioni consapevoli."
      },
      {
        question: "Quale strategia è più matura per data cleaning?",
        options: [
          "Una tantum prima del primo training",
          "Processo continuo con regole versionate e controlli periodici",
          "Solo quando il cliente si lamenta",
          "Delegarla tutta al modello",
        ],
        correct: 1,
        explanation: "La qualità dati in produzione va mantenuta nel tempo, non fatta una sola volta."
      },
      {
        question: "Quale combinazione descrive meglio un buon piano anti-bias?",
        options: [
          "Più compute e meno audit",
          "Dataset bilanciato + metriche fairness + review umana dei casi critici",
          "Solo policy legale senza test tecnico",
          "Solo dashboard KPI globale",
        ],
        correct: 1,
        explanation: "Ridurre bias richiede interventi su dati, metriche e processo decisionale."
      },
      {
        question: "In produzione noti aumento segnalazioni utente ma accuracy media stabile: interpretazione più corretta?",
        options: [
          "Tutto ok, nessuna azione",
          "Possibili errori concentrati su casi/sottogruppi: analizzare distribuzione errori",
          "Basta aumentare batch size",
          "Disattivare canale segnalazioni",
        ],
        correct: 1,
        explanation: "La media può nascondere regressioni localizzate ma critiche."
      },
      {
        question: "Quale frase sintetizza meglio il Capitolo 3?",
        options: [
          "Con abbastanza dati qualunque modello diventa affidabile",
          "Qualità, rappresentatività e monitoraggio continuo sono la base dell'affidabilità",
          "Il bias è inevitabile quindi non si può mitigare",
          "Pulizia dati è secondaria rispetto al design UI",
        ],
        correct: 1,
        explanation: "Affidabilità AI = dati buoni + controlli robusti + osservazione continua."
      }
    ]
};
