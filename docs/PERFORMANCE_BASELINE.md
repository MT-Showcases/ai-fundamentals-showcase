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

Required target (>85 Performance + Accessibility): **MET**.

## Build output highlights
- ✅ Production build completed successfully
- ✅ Static routes + SSG chapters generated correctly
- ✅ JS shared first load ~102 kB
- ✅ CSS/JS minification handled by Next.js in production

## Image optimisation
- ✅ Homepage card preview migrated to `next/image`
- ⚠️ Some `<img>` tags remain in:
  - `components/ChapterMediaSlots.tsx`
  - `components/SectionMediaSlots.tsx`
- Status: non-blocking for launch (score >85), improvement recommended post-launch.

## Caching
- ✅ ISR configured on chapter pages (`revalidate = 60`)
- ✅ Vercel handles edge/CDN cache headers automatically

## Console & responsive quick check
- ✅ No blocking console errors detected on homepage
- ✅ Viewport smoke test run on 4 resolutions: 375x812, 390x844, 768x1024, 1440x900

## Deployment note
- Live URL (`https://ai-fundamentals-showcase.vercel.app`) returned `DEPLOYMENT_NOT_FOUND (404)` at test time; Lighthouse was run on a local production-equivalent build.

## Outcome
**Performance baseline ready for technical launch** with scores above target.
