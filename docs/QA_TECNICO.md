# QA Tecnico Finale — Build + Runtime

Data audit: 2026-05-01  
Repo: `ai-fundamentals-showcase`

## Scope
- Build: `npm run build`
- Runtime route-check su 15 capitoli + home
- Console/page errors
- Quiz interaction smoke test (next/previous)
- Dataset load (render contenuti da `chapters.ts`)

## Nota ambiente
URL live fornita (`https://ai-fundamentals-showcase.vercel.app`) al momento del test restituisce `DEPLOYMENT_NOT_FOUND (404)` da Vercel.  
Per completare il QA runtime è stato eseguito smoke test su istanza locale (`npm run start`, `http://127.0.0.1:3000`).

---

## 1) Build verification

**Comando:** `npm run build`  
**Esito:** ✅ PASS

Dettagli:
- Compilazione OK
- Generazione statica OK (20/20)
- Type check OK
- Warning non bloccanti ESLint presenti (img tag / hook deps)

Warning principali:
- `@next/next/no-img-element` in alcune componenti media
- `react-hooks/exhaustive-deps` in `ChapterExercises.tsx`

---

## 2) Runtime checks (local)

Fonte: `docs/runtime-local.json`

- Route navigation (16 route totali): ✅ PASS
- Component render senza crash: ✅ PASS
- Console errors: ✅ ZERO
- Page runtime errors: ✅ ZERO
- Quiz smoke interactions (next/previous): ✅ PASS
- Dataset load (capitoli renderizzati correttamente): ✅ PASS

### Route coverage
- `/`
- `/chapters/what-is-ai`
- `/chapters/how-ai-works`
- `/chapters/data-importance`
- `/chapters/machine-learning`
- `/chapters/neural-networks`
- `/chapters/nlp`
- `/chapters/computer-vision`
- `/chapters/generative-ai`
- `/chapters/fine-tuning`
- `/chapters/ethics-ai`
- `/chapters/ai-act`
- `/chapters/ai-at-work`
- `/chapters/practical-tools`
- `/chapters/advanced-patterns`
- `/chapters/future-ai`

---

## 3) Lighthouse Accessibility

Comando:
`lighthouse http://127.0.0.1:3000 --only-categories=accessibility`

Risultato:
- **Accessibility score: 95/100** ✅
- Requisito (`>=90`): ✅ PASS

File report raw: `docs/lighthouse-accessibility.json`

---

## Checklist tecnico

- npm run build: PASS ✅
- Route navigation: PASS ✅
- Console errors: ZERO ✅
- Quiz functional: PASS ✅
- Dataset loads: PASS ✅

## Conclusione
✅ **QA Tecnico complessivo PASS**  
Nessun blocco critico rilevato. Solo warning di qualità codice/UI non bloccanti.