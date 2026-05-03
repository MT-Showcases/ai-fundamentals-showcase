import type { Chapter } from '../types';

export const ch08: Chapter = {
    id: 8,
    slug: 'generative-ai',
    title: 'AI Generativa: Quando l\'AI Crea',
    description: 'Da ChatGPT alle immagini generate',
    sections: [
      { title: 'Come Funziona un LLM', content: "Un **LLM** genera testo predicendo il token successivo in base al contesto. L'output può essere fluido ma non sempre corretto.\n\n*Nota pratica:* separa qualità linguistica da accuratezza fattuale. <<Takeaway: testo convincente non equivale a testo vero>>.", media: [ { type: 'infographic', title: 'Next-token prediction', description: 'Schema del ciclo di generazione token.', placeholderPath: 'media/ch08-generative-ai/sec-01/infographic.png', notes: 'placeholder' } ] },
      { title: 'Prompt Engineering', content: "Prompt vaghi producono output generici; prompt strutturati aumentano pertinenza, formato e coerenza.\n\n*Nota pratica:* usa template con ruolo, contesto, vincoli e output atteso. <<Takeaway: prompt design è una leva di controllo>>.", media: [ { type: 'video', title: 'Prompt design in pratica', description: 'Confronto prima/dopo su prompt.', placeholderPath: 'media/ch08-generative-ai/sec-02/video.mp4', notes: 'placeholder' } ] },
      { title: 'Startup Lens', content: "Generative AI in produzione richiede guardrail: verifica fonti, filtri sicurezza, logging e fallback umano sui casi critici.", media: [ { type: 'infographic', title: 'Guardrail generativa', description: 'Pipeline di controllo output.', placeholderPath: 'media/ch08-generative-ai/sec-03/infographic.png', notes: 'placeholder' } ] },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** pubblicare output AI senza verifica.\n\n**Check rapido (2 min):** prendi un output e indica 2 controlli minimi da fare prima di usarlo.", media: [ { type: 'podcast', title: 'Podcast — Validazione output', description: 'QA rapido su output generativi.', placeholderPath: 'media/ch08-generative-ai/sec-04/podcast.mp3', notes: 'placeholder' } ] }
    ],
    keyTakeaways: [
      'LLM predice token, non ragiona come un umano',
      'Prompt specifici migliorano controllo output',
      'Serve verifica fattuale sui casi critici',
      'Guardrail e fallback sono parte del prodotto',
      'Learning outcome: progettare prompt robusti e validare output',
    ],
    codeSnippets: [
      {
        lang: 'python',
        label: 'Generazione testo con OpenAI API',
        code: '# Generazione testo con OpenAI API\nfrom openai import OpenAI\n\nclient = OpenAI(api_key="your-api-key")\n\nresponse = client.chat.completions.create(\n    model="gpt-4o-mini",\n    messages=[\n        {"role": "system", "content": "Sei un assistente didattico per studenti."},\n        {"role": "user", "content": "Spiega il Machine Learning in 3 frasi semplici."}\n    ],\n    max_tokens=200\n)\n\nprint(response.choices[0].message.content)'
      },
      {
        lang: 'json',
        label: 'Struttura di un prompt ben formato (JSON)',
        code: '{\n  "model": "gpt-4o-mini",\n  "messages": [\n    {\n      "role": "system",\n      "content": "Sei un esperto di AI con linguaggio accessibile."\n    },\n    {\n      "role": "user", \n      "content": "Scrivi un articolo di 300 parole su come l\'AI cambiera\' il marketing, rivolto a startup founder."\n    }\n  ],\n  "temperature": 0.7,\n  "max_tokens": 500\n}'
      }
    ],
    discussionPrompts: [
      'Perché un output plausibile può essere comunque sbagliato?',
      'Quali guardrail minimi metteresti in un chatbot pubblico?',
      'Quando usare fallback umano in un flusso generativo?'
    ],
    media: [
      { type: 'video', title: 'Video Capitolo 8', description: 'Panoramica su LLM, prompt e validazione.', estimatedDuration: '8-10 min', placeholderPath: 'media/ch08-generative-ai/video.mp4', notes: 'placeholder' },
      { type: 'podcast', title: 'Podcast Capitolo 8', description: 'Rischi e uso responsabile della generativa.', estimatedDuration: '10-15 min', placeholderPath: 'media/ch08-generative-ai/podcast.mp3', notes: 'placeholder' },
      { type: 'infographic', title: 'Infografica Capitolo 8', description: 'Prompt framework + guardrail.', placeholderPath: 'media/ch08-generative-ai/infographic.png', notes: 'placeholder' },
      { type: 'resource', title: 'Asset/Dispensa', description: 'Checklist QA output generativi.', placeholderPath: 'media/ch08-generative-ai/handout.pdf', notes: 'placeholder' }
    ],
    exercises: [
      {
        title: 'Mini Lab — QA output generativo (senza coding)',
        objective: 'Valutare output AI con criteri di qualità e rischio prima della pubblicazione.',
        duration: '15-20 min',
        steps: [
          'Apri dataset train CH8 e leggi prompt+output.',
          'Classifica 3 output: OK / da rivedere / da scartare.',
          'Confronta con validation CH8 sui casi borderline.',
          'Definisci un protocollo QA in 3 controlli.'
        ],
        deliverable: 'Checkpoint personale: 3 valutazioni motivate + protocollo QA.',
        resources: [
          { label: 'Dataset train CH8 (CSV)', path: '/datasets/ch08-generative-evals/train.csv' },
          { label: 'Dataset validation CH8 (CSV)', path: '/datasets/ch08-generative-evals/validation.csv' },
          { label: 'Schema campi CH8 (JSON)', path: '/datasets/ch08-generative-evals/schema.json' }
        ]
      }
    ],
    quiz: [
      { question: 'Un output LLM sembra credibile ma cita dati inventati. Come lo classifichi?', options: ['Buono, perché è scritto bene', 'Allucinazione con rischio fattuale', 'Errore di rete', 'Normale variabilità stilistica'], correct: 1, explanation: 'Forma fluida non garantisce veridicità del contenuto.' },
      { question: 'Quale prompt è più robusto per ottenere una risposta verificabile?', options: ['"Parlami di AI"', '"Spiega in modo creativo"', '"Rispondi in 5 punti, cita fonti, separa fatti da ipotesi"', '"Rispondi velocemente"'], correct: 2, explanation: 'Vincoli su formato e fonti migliorano controllo e auditabilità.' },
      { question: 'Quando la temperature è alta, tipicamente ottieni:', options: ['Output più deterministico e ripetibile', 'Output più vario ma meno stabile', 'Meno token generati', 'Meno rischio di allucinazioni per definizione'], correct: 1, explanation: 'Maggiore casualità aumenta creatività ma anche variabilità.' },
      { question: 'Per ridurre allucinazioni su knowledge aziendale, scelta migliore:', options: ['Solo aumentare il contesto del prompt', 'RAG con fonti interne aggiornate + verifica finale', 'Ridurre max_tokens', 'Cambiare solo modello ogni settimana'], correct: 1, explanation: 'RAG ancora il modello a documenti reali e aggiornati.' },
      { question: 'Quale guardrail è più utile in un chatbot pubblico?', options: ['Filtro contenuti sensibili + escalation umana su richieste critiche', 'Nessun filtro, fidarsi del modello', 'Solo limite di 50 token', 'Solo UI più bella'], correct: 0, explanation: 'La mitigazione del rischio richiede controlli applicativi concreti.' },
      { question: 'Nel dataset CH8, caso con high safety_risk e output_quality low: azione attesa?', options: ['publish', 'review', 'rewrite', 'auto-approve'], correct: 2, explanation: 'Rischio alto e qualità bassa richiedono riscrittura, non pubblicazione.' },
      { question: 'Quale metrica è più adatta per QA generativo in produzione?', options: ['Solo tempo medio risposta', 'Tasso di correzioni post-pubblicazione + incident rate', 'Solo token per secondo', 'Solo numero prompt al giorno'], correct: 1, explanation: 'Misure di qualità reale e rischio sono più informative delle sole metriche tecniche.' },
      { question: 'Fallback umano è obbligatorio soprattutto quando:', options: ['Si tratta di contenuti sensibili legali/sanitari/finanziari', 'Il prompt è breve', 'Il modello è recente', 'L\'utente scrive in maiuscolo'], correct: 0, explanation: 'Nei domini ad alto impatto serve supervisione umana.' },
      { question: 'Errore comune nel prompt engineering:', options: ['Definire ruolo, vincoli e formato output', 'Richiedere esempi di output', 'Usare prompt vaghi senza criteri di qualità', 'Separare task complessi in step'], correct: 2, explanation: 'Ambiguità nel prompt produce output poco controllabile.' },
      { question: 'Messaggio chiave del capitolo 8:', options: ['Basta un modello grande per avere affidabilità', 'Generative AI affidabile = prompt strutturato + fonti + guardrail + QA', 'La validazione rallenta e va evitata', 'Temperature alta risolve i bias'], correct: 1, explanation: 'La qualità operativa nasce da un processo completo, non da un solo parametro.' }
    ]
};
