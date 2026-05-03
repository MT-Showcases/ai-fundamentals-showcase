# Metadata & SEO Audit — v1.0.0

## 1) `next.config.ts`
- ✅ `compress: true`
- ✅ `poweredByHeader: false`
- ✅ Optimised image formats (`avif`, `webp`)
- ✅ `standalone` output confirmed

## 2) `app/layout.tsx` global metadata
Updated with:
- ✅ `metadataBase`
- ✅ Title template + default title
- ✅ Global description
- ✅ Canonical `/`
- ✅ Open Graph: `og:title`, `og:description`, `og:url`, `og:image`
- ✅ Twitter card metadata

## 3) Dynamic chapter metadata
In `app/chapters/[slug]/page.tsx`:
- ✅ Dynamic `generateMetadata()` added per chapter
- ✅ Dynamic title (`Chapter XX — title`)
- ✅ Dynamic description from `chapter.description`
- ✅ Canonical chapter URL
- ✅ Open Graph + Twitter metadata per chapter page
- ✅ Chapter coverage ch3, ch5–ch15 included (via `chapters[]` source)

## 4) Robots
- ✅ Created `app/robots.ts`
- ✅ Indexing enabled (`allow: /`)
- ✅ Sitemap reference set

## 5) Sitemap
- ✅ Created `app/sitemap.ts`
- ✅ Includes homepage + all chapter pages generated from `chapters[]`
- ✅ Priority and changeFrequency set

## 6) Operational notes
- ℹ️ `og:image` points to `/media/og-cover.png`: verify presence of final 1200x630 asset in production.

## Outcome
**SEO technical baseline ready for launch** (metadata, robots, and sitemap aligned).
