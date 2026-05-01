# Fondamenti di AI — Showcase

Showcase didattica in italiano per il corso **Fondamenti di AI** (15 capitoli), progettata per studenti SJA con approccio pratico, visuale e startup-friendly.

## 🌐 Live
- Produzione: https://ai-fundamentals-showcase.vercel.app

## ✨ Features
- 15 capitoli strutturati con:
  - sezioni didattiche
  - key takeaways
  - prompt di discussione
  - quiz
  - esercizi pratici
- Navigazione chapter-by-chapter con progress tracking
- Ricerca contenuti
- Tema dark coerente con brand SJA
- SEO base pronta (metadata, robots, sitemap)

## 🧱 Tech Stack
- **Framework:** Next.js 15 (App Router)
- **UI:** React 19 + Tailwind CSS 4
- **Language:** TypeScript
- **Deploy target:** Vercel

## 🚀 Avvio locale
```bash
npm install
npm run dev
```

Apri: http://localhost:3000

## 🏗️ Build produzione
```bash
npm run build
npm run start
```

## 📁 Struttura principale
- `app/` — routing e pagine (homepage, chapters, metadata routes)
- `components/` — componenti UI riusabili
- `data/` — contenuti capitoli e asset metadata
- `public/` — media statici e dataset
- `docs/` — report e artefatti tecnici (es. Lighthouse)

## 🔍 SEO
- Metadata globali in `app/layout.tsx`
- Metadata dinamici chapter in `app/chapters/[slug]/page.tsx`
- Robots in `app/robots.ts`
- Sitemap in `app/sitemap.ts`

## 📊 Qualità (baseline launch v1.0.0)
- Lighthouse (local prod):
  - Performance: 94
  - Accessibility: 95
  - Best Practices: 100
  - SEO: 100

## 🤝 Contributi
Vedi `CONTRIBUTING.md` per linee guida di contribuzione.

## 📄 Licenza
MIT — vedi `LICENSE`.
