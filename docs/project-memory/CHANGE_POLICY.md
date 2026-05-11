# Change Policy (Project-Specific)

Obiettivo: evitare regressioni quando agenti o contributor modificano contenuti, media, challenge o componenti.

## 1) Regola generale
Ogni modifica deve aggiornare **codice + dati + documentazione locale** se tocca un comportamento utente.

## 2) Tipi di modifica

### A. Content-only (testi, quiz, prompt)
- File tipici: `data/chapters/chXX.ts`
- Check: build OK, nessun errore TS
- Doc: aggiornare solo se cambia struttura o processo

### B. Media update (immagini/video/podcast)
- File tipici: `public/media/...` + `data/chapters/chXX.ts`
- Check obbligatori:
  - `placeholderPath` corretto
  - `notes: 'ready'`
  - livello corretto (`chapter.media` vs `section.media`)
  - smoke live post-deploy

### C. Challenge/UX logic
- File tipici: `components/*Challenge*`, `data/types.ts`, `data/chapters/chXX.ts`, `app/chapters/[slug]/page.tsx`
- Check obbligatori:
  - build OK
  - interazione non ovvia (evitare risposte “telegrafate” dal design)
  - feedback didattico utile (spiega perché)

## 3) Done criteria minima
- `npm run build` passa
- push su `main`
- verifica live su capitolo toccato
- se problema cache: cache-bust filename + path

## 4) Commit hygiene
- 1 fix = 1 commit chiaro
- formato consigliato: `feat(...)`, `fix(...)`, `docs(...)`, `chore(...)`
- non mescolare refactor ampio con hotfix urgente
