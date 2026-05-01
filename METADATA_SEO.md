# Metadata & SEO Audit — v1.0.0

## 1) `next.config.ts`
- ✅ `compress: true`
- ✅ `poweredByHeader: false`
- ✅ image formats ottimizzati (`avif`, `webp`)
- ✅ output `standalone` confermato

## 2) `app/layout.tsx` global metadata
Aggiornato con:
- ✅ `metadataBase`
- ✅ title template + default title
- ✅ description globale
- ✅ canonical `/`
- ✅ Open Graph: `og:title`, `og:description`, `og:url`, `og:image`
- ✅ Twitter card metadata

## 3) Dynamic metadata capitoli
In `app/chapters/[slug]/page.tsx`:
- ✅ aggiunta `generateMetadata()` dinamica per ogni chapter
- ✅ title dinamico (`Capitolo XX — titolo`)
- ✅ description dinamica da `chapter.description`
- ✅ canonical chapter URL
- ✅ Open Graph + Twitter metadata per pagina capitolo
- ✅ coverage capitoli ch3, ch5–ch15 inclusa (via source `chapters[]`)

## 4) Robots
- ✅ Creato `app/robots.ts`
- ✅ Indicizzazione abilitata (`allow: /`)
- ✅ riferimento sitemap impostato

## 5) Sitemap
- ✅ Creato `app/sitemap.ts`
- ✅ Include homepage + tutte le pagine capitolo generate da `chapters[]`
- ✅ Priorità e changeFrequency impostate

## 6) Note operative
- ℹ️ `og:image` punta a `/media/og-cover.png`: verificare presenza asset finale 1200x630 in produzione.

## Outcome
**SEO technical baseline pronta per launch** (metadata, robots e sitemap allineati).