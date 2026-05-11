# Agent Playbook — AI Fundamentals Showcase

Questo playbook guida gli agenti sul progetto senza gonfiare la skill.

## Startup rapido (prima di toccare file)
1. Leggere `docs/project-memory/INDEX.md`
2. Se task media: leggere `MEDIA_RENDERING_CONTRACT.md` + `QA_MEDIA_CHECKLIST.md`
3. Se task challenge/UX: leggere `CONTENT_MODEL.md` + `CHANGE_POLICY.md`

## Flussi standard

### Flusso media (capitolo/sezione)
- Aggiorna asset in `public/media/...`
- Aggiorna `placeholderPath`
- Imposta `notes: 'ready'`
- Verifica livello corretto (`chapter.media` o `section.media`)
- Build + push + smoke

### Flusso challenge
- Allinea `types.ts` + dati capitolo + componente + rendering pagina
- Evita meccaniche ovvie (cliccabili solo gli errori, ecc.)
- Aggiungi feedback che insegna, non solo “giusto/sbagliato”

### Flusso docs
- Se la modifica è specifica del progetto, aggiorna `docs/project-memory/*`
- Non mettere regole di progetto dentro skill generiche

## Anti-pattern da evitare
- Caricare solo asset senza aggiornare `notes`/path
- Dimenticare `chapter.media` quando si vuole il blocco “Media del Capitolo”
- Usare la skill come dumping di dettagli progetto-specifici
