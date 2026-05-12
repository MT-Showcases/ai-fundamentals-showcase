import type { Chapter } from '../types';

export const ch08: Chapter = {
    id: 8,
    slug: 'generative-ai',
    title: 'AI Generativa: Quando l\'AI Crea',
    description: 'Da ChatGPT alle immagini generate',
    sections: [
      { title: 'Come Funziona un LLM', content: "Un **LLM** genera testo predicendo il token successivo in base al contesto. L'output può essere fluido ma non sempre corretto.\n\n*Nota pratica:* separa qualità linguistica da accuratezza fattuale.  Per renderla robusta servono anche **Attention Mechanism**, **Tokenizzazione**, limiti di **Context Window**, strategie di **Fine-Tuning** e allineamento tipo **RLHF**. <<Takeaway: testo convincente non equivale a testo vero>>." , media: [ { type: 'infographic', title: 'Next-token prediction', description: 'Il ciclo di generazione token per token negli LLM: come il modello predice il prossimo token in base al contesto, con distribuzione di probabilita e sampling (temperature, top-k). Schema dei layer di attention e feed-forward con esempi numerici reali.', placeholderPath: 'media/ch08-generative-ai/sec-01/infographic.png', notes: 'placeholder' } ]},
      { title: 'Prompt Engineering', content: "Prompt vaghi producono output generici; prompt strutturati aumentano pertinenza, formato e coerenza.\n\n*Nota pratica:* usa template con ruolo, contesto, vincoli e output atteso. <<Takeaway: prompt design è una leva di controllo>>." , media: [ { type: 'video', title: 'Prompt design in pratica', description: 'Confronto visivo step-by-step tra prompt vaghi e prompt strutturati sullo stesso obiettivo: come aggiungere ruolo, vincoli di formato e contesto specifico trasforma radicalmente la qualita dell output. Esempi pratici di prompt engineering per casi reali.', placeholderPath: 'media/ch08-generative-ai/sec-02/video.mp4', notes: 'placeholder' } ]},
      { title: 'Startup Lens', content: "Generative AI in produzione richiede guardrail: verifica fonti, filtri sicurezza, logging e fallback umano sui casi critici." },
      { title: 'Errore comune + Check rapido', content: "**Errore comune:** pubblicare output AI senza verifica.\n\n**Check rapido (2 min):** prendi un output e indica 2 controlli minimi da fare prima di usarlo." }
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
    challenge: {
      id: 'ch08-smonta-allucinazione',
      title: "Smonta l'Allucinazione",
      intro: "Questo testo è stato generato da un LLM. Contiene 3 errori fattuali (allucinazioni). Clicca sulle frasi che ritieni false o inventate.",
      fullText: "GPT-3 è stato rilasciato da OpenAI nel 2020 ed è il primo modello di linguaggio mai creato. Il modello utilizza un'architettura chiamata LSTM, sviluppata originalmente per la traduzione automatica. Con i suoi 175 miliardi di parametri, GPT-3 supera qualsiasi capacità umana in tutti i task di comprensione del linguaggio. La temperatura nei modelli generativi controlla la lunghezza del testo prodotto: valori più alti generano testi più lunghi. Le allucinazioni nei LLM sono errori casuali che si verificano solo quando il modello elabora testi in lingue diverse dall'inglese.",
      spans: [
        { id: 's1', text: "GPT-3 è stato rilasciato da OpenAI nel 2020", isError: false, feedback: "Corretto — GPT-3 è stato effettivamente rilasciato nel 2020." },
        { id: 's2', text: " ed è il primo modello di linguaggio mai creato", isError: true, feedback: "❌ Allucinazione! GPT-3 NON è il primo LLM — prima c'erano GPT-1 (2018), GPT-2 (2019), BERT (2018) e molti altri." },
        { id: 's3', text: " Il modello utilizza un'architettura chiamata LSTM", isError: true, feedback: "❌ Allucinazione! GPT-3 usa l'architettura Transformer, non LSTM. Le LSTM sono reti ricorrenti, usate prima dei Transformer." },
        { id: 's4', text: " sviluppata originalmente per la traduzione automatica", isError: false, feedback: "Il paper 'Attention is All You Need' presentò i Transformer per la traduzione — questa parte è corretta." },
        { id: 's5', text: " Con i suoi 175 miliardi di parametri", isError: false, feedback: "Corretto — GPT-3 ha effettivamente 175B parametri." },
        { id: 's6', text: " GPT-3 supera qualsiasi capacità umana in tutti i task di comprensione del linguaggio", isError: false, feedback: "Esagerazione, ma non un'allucinazione fattuale specifica in questo esercizio." },
        { id: 's7', text: " La temperatura nei modelli generativi controlla la lunghezza del testo prodotto: valori più alti generano testi più lunghi", isError: true, feedback: "❌ Allucinazione! La temperatura controlla la casualità/creatività, NON la lunghezza. Valori alti = più imprevedibile, bassi = più deterministico." },
        { id: 's8', text: " Le allucinazioni nei LLM sono errori casuali che si verificano solo quando il modello elabora testi in lingue diverse dall'inglese", isError: false, feedback: "Non è l'errore target di questo esercizio." },
      ],
    },
    labNote: 'Lab 4 — Generative AI con Groq API (ZIP scaricabile: ml-lab-04-generative-ai.zip). Account Groq gratuito, no carta. Modello: llama-3.1-8b-instant. Step: setup chiave API da .env, prima chiamata semplice, confronto prompt vago vs strutturato, uso system prompt, valutazione qualità output. Esperimento guidato con temperature e few-shot prompting.',
    discussionPrompts: [
      'Perché un output plausibile può essere comunque sbagliato?',
      'Quali guardrail minimi metteresti in un chatbot pubblico?',
      'Quando usare fallback umano in un flusso generativo?'
    ],
    exercises: [],
    media: [
      {
        type: 'video',
        title: 'Video Capitolo 8',
        description: 'Video completo Capitolo 8: funzionamento LLM, prompt design, allucinazioni e guardrail operativi.',
        estimatedDuration: '9 min',
        placeholderPath: 'media/ch08-generative-ai/video.mp4',
        notes: 'ready'
      },
      {
        type: 'podcast',
        title: 'Podcast Capitolo 8',
        description: 'Podcast di ripasso su AI generativa, qualità fattuale e controlli in produzione.',
        estimatedDuration: '18 min',
        placeholderPath: 'media/ch08-generative-ai/podcast.mp3',
        notes: 'placeholder'
      },
      {
        type: 'infographic',
        title: 'Infografica Capitolo 8',
        description: 'AI Generativa: dal funzionamento al controllo professionale (prompt, guardrail, fallback umano, verifica output).',
        placeholderPath: 'media/ch08-generative-ai/infographic.jpg',
        notes: 'ready'
      },
      {
        type: 'resource',
        title: 'Asset/Dispensa',
        description: 'Materiale scaricabile per studio e applicazione operativa.',
        placeholderPath: 'media/ch08-generative-ai/handout.pdf',
        notes: 'placeholder'
      }
    ],
    quiz: [
      {
        question: 'Un output LLM sembra credibile ma cita dati inventati. Come lo classifichi?',
        options: [
          'Buono, perché è scritto bene',
          'Errore di rete',
          'Allucinazione con rischio fattuale',
          'Normale variabilità stilistica',
        ],
        correct: 2,
        explanation: 'Forma fluida non garantisce veridicità del contenuto.'
      },
      {
        question: 'Quale prompt è più robusto per ottenere una risposta verificabile?',
        options: [
          '"Parlami di AI"',
          '"Rispondi in 5 punti, cita fonti, separa fatti da ipotesi"',
          '"Spiega in modo creativo"',
          '"Rispondi velocemente"',
        ],
        correct: 1,
        explanation: 'Vincoli su formato e fonti migliorano controllo e auditabilità.'
      },
      {
        question: 'Quando la temperature è alta, tipicamente ottieni:',
        options: [
          'Output più vario ma meno stabile',
          'Output più deterministico e ripetibile',
          'Meno token generati',
          'Meno rischio di allucinazioni per definizione',
        ],
        correct: 0,
        explanation: 'Maggiore casualità aumenta creatività ma anche variabilità.'
      },
      {
        question: 'Per ridurre allucinazioni su knowledge aziendale, scelta migliore:',
        options: [
          'Solo aumentare il contesto del prompt',
          'RAG con fonti interne aggiornate + verifica finale',
          'Ridurre max_tokens',
          'Cambiare solo modello ogni settimana',
        ],
        correct: 1,
        explanation: 'RAG ancora il modello a documenti reali e aggiornati.'
      },
      {
        question: 'Quale guardrail è più utile in un chatbot pubblico?',
        options: [
          'Nessun filtro, fidarsi del modello',
          'Solo limite di 50 token',
          'Filtro contenuti sensibili + escalation umana su richieste critiche',
          'Solo UI più bella',
        ],
        correct: 2,
        explanation: 'La mitigazione del rischio richiede controlli applicativi concreti.'
      },
      {
        question: 'Nel dataset CH8, caso con high safety_risk e output_quality low: azione attesa?',
        options: [
          'publish',
          'review',
          'auto-approve',
          'rewrite',
        ],
        correct: 3,
        explanation: 'Rischio alto e qualità bassa richiedono riscrittura, non pubblicazione.'
      },
      {
        question: 'Quale metrica è più adatta per QA generativo in produzione?',
        options: [
          'Solo tempo medio risposta',
          'Tasso di correzioni post-pubblicazione + incident rate',
          'Solo token per secondo',
          'Solo numero prompt al giorno',
        ],
        correct: 1,
        explanation: 'Misure di qualità reale e rischio sono più informative delle sole metriche tecniche.'
      },
      {
        question: 'Fallback umano è obbligatorio soprattutto quando:',
        options: [
          'Il prompt è breve',
          'Il modello è recente',
          'Si tratta di contenuti sensibili legali/sanitari/finanziari',
          'L\'utente scrive in maiuscolo',
        ],
        correct: 2,
        explanation: 'Nei domini ad alto impatto serve supervisione umana.'
      },
      {
        question: 'Errore comune nel prompt engineering:',
        options: [
          'Definire ruolo, vincoli e formato output',
          'Richiedere esempi di output',
          'Separare task complessi in step',
          'Usare prompt vaghi senza criteri di qualità',
        ],
        correct: 3,
        explanation: 'Ambiguità nel prompt produce output poco controllabile.'
      },
      {
        question: 'Messaggio chiave del capitolo 8:',
        options: [
          'Generative AI affidabile = prompt strutturato + fonti + guardrail + QA',
          'Basta un modello grande per avere affidabilità',
          'La validazione rallenta e va evitata',
          'Temperature alta risolve i bias',
        ],
        correct: 0,
        explanation: 'La qualità operativa nasce da un processo completo, non da un solo parametro.'
      }
    ]
};
