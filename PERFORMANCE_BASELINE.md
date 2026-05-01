# Performance Baseline — v1.0.0

## Environment
- Build: `npm run build` (Next.js 15.5.15)
- Lighthouse target: local production build (`http://localhost:3000`)
- Command:

```bash
npx -y lighthouse http://localhost:3000 --quiet --chrome-flags='--headless --no-sandbox' --output=json --output-path=./docs/lighthouse.local.json
```

## Lighthouse Scores
- ✅ **Performance: 94**
- ✅ **Accessibility: 95**
- ✅ Best Practices: 100
- ✅ SEO: 100

Target richiesto (>85 Performance + Accessibility): **RAGGIUNTO**.

## Build output highlights
- ✅ Build produzione completata con successo
- ✅ Route statiche + SSG chapters generate correttamente
- ✅ JS shared first load ~102 kB
- ✅ CSS/JS minification gestita da Next.js in produzione

## Image optimization
- ✅ Homepage card preview migrata a `next/image`
- ⚠️ Restano alcuni `<img>` in:
  - `components/ChapterMediaSlots.tsx`
  - `components/SectionMediaSlots.tsx`
- Stato: non blocker per launch (score >85), ma miglioramento consigliato post-launch.

## Caching
- ✅ ISR configurato su pagine chapter (`revalidate = 60`)
- ✅ Vercel gestisce cache headers edge/CDN automaticamente

## Console & responsive quick check
- ✅ Nessun errore console bloccante rilevato su homepage
- ✅ Viewport smoke test eseguito su 4 risoluzioni: 375x812, 390x844, 768x1024, 1440x900

## Nota deployment
- URL live fornito (`https://ai-fundamentals-showcase.vercel.app`) al momento risponde `DEPLOYMENT_NOT_FOUND (404)`; Lighthouse è stato eseguito su build locale production-equivalent.

## Outcome
**Performance baseline pronta per launch tecnico** con score sopra target.