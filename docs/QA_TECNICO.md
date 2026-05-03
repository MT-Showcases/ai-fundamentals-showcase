# Final Technical QA — Build + Runtime

Audit date: 2026-05-01  
Repo: `ai-fundamentals-showcase`

## Scope
- Build: `npm run build`
- Runtime route check across 15 chapters + home
- Console/page errors
- Quiz interaction smoke test (next/previous)
- Dataset load (content render from `chapters.ts`)

## Environment note
Live URL (`https://ai-fundamentals-showcase.vercel.app`) returned `DEPLOYMENT_NOT_FOUND (404)` at test time.  
Runtime QA was completed via smoke test on local instance (`npm run start`, `http://127.0.0.1:3000`).

---

## 1) Build verification

**Command:** `npm run build`  
**Result:** ✅ PASS

Details:
- Compilation: OK
- Static generation: OK (20/20)
- Type check: OK
- Non-blocking ESLint warnings present (img tag / hook deps)

Main warnings:
- `@next/next/no-img-element` in some media components
- `react-hooks/exhaustive-deps` in `ChapterExercises.tsx`

---

## 2) Runtime checks (local)

Source: `docs/runtime-local.json`

- Route navigation (16 total routes): ✅ PASS
- Component render without crash: ✅ PASS
- Console errors: ✅ ZERO
- Page runtime errors: ✅ ZERO
- Quiz smoke interactions (next/previous): ✅ PASS
- Dataset load (chapters rendered correctly): ✅ PASS

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

Command:
`lighthouse http://127.0.0.1:3000 --only-categories=accessibility`

Result:
- **Accessibility score: 95/100** ✅
- Requirement (`>=90`): ✅ PASS

Raw report file: `docs/lighthouse-accessibility.json`

---

## Technical checklist

- npm run build: PASS ✅
- Route navigation: PASS ✅
- Console errors: ZERO ✅
- Quiz functional: PASS ✅
- Dataset loads: PASS ✅

## Conclusion
✅ **Overall Technical QA: PASS**  
No critical blocks detected. Only non-blocking code/UI quality warnings.
