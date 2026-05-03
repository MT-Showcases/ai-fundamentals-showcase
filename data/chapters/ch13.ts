import type { Chapter } from '../types';

export const ch13: Chapter = {
    id: 13,
    slug: 'practical-tools',
    title: 'Strumenti Pratici: ChatGPT, Copilot e Tool Assistivi',
    description: 'Workflow operativo per usare assistenti AI con controllo qualità',
    sections: [
      { title: 'Quando usare ChatGPT (e quando no)', content: "**ChatGPT** è ottimo per brainstorming, prima bozza, sintesi e riscrittura. Non è una fonte di verità automatica.\n\nUsalo quando vuoi accelerare il lavoro iniziale; evita di delegargli decisioni finali senza verifica, soprattutto in contesti legali, sanitari o finanziari.\n\n*Nota pratica:* separa sempre fase di generazione da fase di validazione. <<Takeaway: velocità senza verifica aumenta il rischio di errori costosi>>.", media: [ { type: 'infographic', title: 'Mappa uso corretto di ChatGPT', description: 'Cosa delegare al modello e cosa tenere in revisione umana.', placeholderPath: 'media/ch13-practical-tools/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Copilot, Cursor e pair programming AI', content: "Gli assistenti di coding riducono il tempo su task ripetitivi: boilerplate, test iniziali, refactor guidato e documentazione tecnica.\n\nIl guadagno reale arriva solo se mantieni una disciplina chiara: leggere il codice suggerito, eseguire test, verificare sicurezza e allineamento allo stile del progetto.\n\n*Nota pratica:* considera ogni suggestion AI come proposta, non come verità. <<Takeaway: produttività alta richiede review tecnica sistematica>>.", media: [ { type: 'video', title: 'Review di codice suggerito da AI', description: 'Checklist rapida per accettare o scartare suggerimenti.', placeholderPath: 'media/ch13-practical-tools/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: "In team startup il flusso più solido è: **prompt strutturato -> output AI -> review umana -> test -> rilascio**.\n\nQuesto approccio evita due estremi: fiducia cieca nell'AI e rifiuto totale dello strumento. L\'obiettivo non è usare più AI, ma ridurre lead time mantenendo qualità prevedibile.", media: [ { type: 'infographic', title: 'Workflow AI con quality gate', description: 'Pipeline pratica per team piccoli e veloci.', placeholderPath: 'media/ch13-practical-tools/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** usare output AI direttamente in produzione senza controlli minimi.\n\n**Check rapido (2 min):** prima di usare un output, verifica 1) accuratezza fattuale, 2) coerenza col contesto, 3) impatto se fosse sbagliato. Se uno dei tre fallisce, blocca il rilascio.", media: [ { type: 'podcast', title: 'Podcast — Quality gate prima del rilascio', description: 'Come evitare incidenti da automazione superficiale.', placeholderPath: 'media/ch13-practical-tools/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'ChatGPT accelera la bozza, non sostituisce la validazione',
      'Gli assistenti di coding aumentano produttività solo con review e test',
      'Prompt chiari migliorano qualità e ripetibilità dell output',
      'Quality gate e fallback umano riducono rischio operativo',
      'Learning outcome: progettare un workflow AI con controlli minimi prima del deploy',
    ],
    codeSnippets: [
      {
        lang: 'bash',
        label: 'Template prompt operativo per task tecnici',
        code: '# Prompt template\nRuolo: Sei un assistente tecnico per [contesto].\nObiettivo: [task specifico].\nVincoli: [linguaggio, standard, limiti].\nInput: [dati disponibili].\nOutput atteso:\n1) Soluzione proposta\n2) Assunzioni esplicite\n3) Rischi/limiti\n4) Checklist di verifica finale'
      },
      {
        lang: 'bash',
        label: 'Quality gate minimo prima del merge',
        code: '# Esempio flusso locale\nnpm run lint\nnpx tsc --noEmit\nnpm run test\n\n# Se tutti i check passano, apri PR con note review\ngit add .\ngit commit -m "feat: integra output AI con review e test"'
      }
    ],
    discussionPrompts: [
      'In quali task del tuo flusso quotidiano l AI ti fa risparmiare più tempo senza aumentare il rischio?',
      'Quali output devono avere revisione umana obbligatoria prima della pubblicazione?',
      'Come misureresti in modo oggettivo il valore reale di Copilot o Cursor nel tuo team?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 13', description: 'Workflow pratico per usare tool AI con controllo qualità.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch13-practical-tools/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 13', description: 'Errori frequenti nell uso operativo di ChatGPT e coding assistant.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch13-practical-tools/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 13', description: 'Processo: prompt, review, test, rilascio.', placeholderPath: 'media/ch13-practical-tools/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist di validazione output AI prima del deploy.', placeholderPath: 'media/ch13-practical-tools/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — Self-paced workflow AI (senza coding obbligatorio)',
        objective: 'Applicare un processo completo di uso AI: richiesta, revisione, verifica e decisione finale su un output reale.',
        duration: '20-30 min',
        steps: [
          'Apri il dataset train CH13 e scegli 5 scenari con tool diversi (chat assistant, coding assistant, ricerca).',
          'Per ogni scenario valuta se l output può essere usato subito, va rivisto o va scartato.',
          'Confronta le tue decisioni con validation CH13 e identifica 2 errori di valutazione iniziali.',
          'Definisci una checklist personale in 4 punti da riutilizzare nei prossimi task AI.'
        ],
        deliverable: 'Checkpoint personale: tabella scenario -> decisione (use/review/reject) + checklist finale in 4 punti.',
        resources: [
          { label: 'Dataset train CH13 (CSV)', path: '/datasets/ch13-practical-tools/train.csv' },
          { label: 'Dataset validation CH13 (CSV)', path: '/datasets/ch13-practical-tools/validation.csv' },
          { label: 'Schema campi CH13 (JSON)', path: '/datasets/ch13-practical-tools/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'Scenario: il modello propone una spiegazione tecnica molto fluida ma senza fonti verificabili. Prima azione corretta?', options: ['Pubblicare subito per risparmiare tempo', 'Chiedere esempi più creativi', 'Verificare i fatti chiave su fonti affidabili prima dell uso', 'Aumentare solo la temperature'], correct: 2, explanation: 'La qualità stilistica non garantisce accuratezza: serve verifica fattuale.' },
      { question: 'Qual è il beneficio più realistico di Copilot in un team maturo?', options: ['Azzerare il bisogno di test', 'Ridurre tempo su task ripetitivi mantenendo review umana', 'Sostituire senior developer', 'Eliminare bug di sicurezza'], correct: 1, explanation: 'Accelera l esecuzione, ma responsabilità tecnica e qualità restano del team.' },
      { question: 'Scenario: output AI include una query SQL efficace ma con rischio di data leak. Cosa fai?', options: ['Eseguire direttamente in produzione', 'Bloccare, fare security review e aggiungere controlli accesso', 'Cambiare solo il naming delle colonne', 'Ignorare se passa i test locali'], correct: 1, explanation: 'I rischi di sicurezza richiedono review dedicata prima dell esecuzione.' },
      { question: 'Prompt engineering utile significa soprattutto:', options: ['Scrivere prompt lunghissimi', 'Definire obiettivo, vincoli e formato output in modo esplicito', 'Usare solo inglese tecnico', 'Evitare esempi per non influenzare il modello'], correct: 1, explanation: 'Struttura chiara del prompt migliora qualità e coerenza della risposta.' },
      { question: 'Scenario: il team usa AI per generare test unitari. Quale controllo è prioritario?', options: ['Verificare copertura e rilevanza dei test sui casi critici', 'Contare solo il numero totale di file test', 'Accettare tutto se compila', 'Saltare test manuali e code review'], correct: 0, explanation: 'Conta la qualità dei test sui comportamenti importanti, non solo la quantità.' },
      { question: 'Quale metrica misura meglio il valore operativo dei tool AI nel tempo?', options: ['Numero di prompt inviati', 'Riduzione lead time con qualità stabile (bug e rework sotto controllo)', 'Numero di modelli provati', 'Dimensione media dei commit'], correct: 1, explanation: 'Il valore reale è velocità sostenibile senza degradare affidabilità.' },
      { question: 'Scenario: output AI corretto nel 90% dei casi, ma sbaglia in casi sensibili clienti. Decisione migliore?', options: ['Usarlo comunque senza filtri', 'Limitare utilizzo ai casi low-risk e introdurre fallback umano sui casi sensibili', 'Disattivare completamente ogni automazione', 'Cambiare provider ogni settimana'], correct: 1, explanation: 'Segmentare per rischio e introdurre fallback riduce incidenti ad alto impatto.' },
      { question: 'Errore comune nell adozione di ChatGPT in azienda:', options: ['Definire policy e checklist condivise', 'Trattare il tool come autore definitivo senza processo di review', 'Usare prompt template', 'Loggare decisioni critiche'], correct: 1, explanation: 'Senza governance minima l errore umano+automazione cresce rapidamente.' },
      { question: 'Nel dataset CH13, uno scenario con tool=coding_assistant, risk_level=high e output_quality=medium dovrebbe andare in:', options: ['use_direct', 'review_required', 'auto_publish', 'archive_without_check'], correct: 1, explanation: 'Con rischio alto la revisione è obbligatoria anche con qualità discreta.' },
      { question: 'Messaggio chiave del capitolo 13:', options: ['Più automazione possibile, meno controlli', 'Tool AI utili solo per studenti', 'Uso efficace AI = velocità + review umana + quality gate misurabili', 'La qualità dipende solo dal modello scelto'], correct: 2, explanation: 'Il risultato affidabile nasce dal processo operativo, non da un singolo tool.' }
    ]
};
