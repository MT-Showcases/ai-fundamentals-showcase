# AI Fundamentals Showcase 🤖

> **An interactive learning platform for AI and Machine Learning concepts — practical, visual, and built for developers.**

AI Fundamentals Showcase is an open-source educational platform that transforms AI theory into hands-on, guided learning. 15 structured chapters take you from "What is AI?" to Neural Networks, NLP, and Computer Vision — with interactive quizzes, practical Python labs, and downloadable resources. **No boring textbooks. No passive reading. Just learn by doing.**

---

## 🎯 Project Philosophy

Traditional AI learning dumps theory on you without context. You read definitions, memorize formulas, and never actually build anything.

**We believe learning should be different.**

AI Fundamentals Showcase is built on **progressive disclosure** and **learning by doing**: concepts are introduced gradually, reinforced with interactive quizzes, and applied through real Python labs you can run locally.

### Core Principles

- **Learn by Doing** — Real Python labs with downloadable code, not just theory
- **Progressive Depth** — Quick concepts first, deep dives on demand
- **Glossary-First** — Every technical term is linked and explained inline
- **Practical Labs** — Real datasets, real models, real output
- **AI-Assisted Development** — Structured for Copilot, Codex, and Claude collaboration

---

## 🌐 Live

- **Production:** https://ai-fundamentals.micheletornello.com

---

## 🗂️ What's Inside

15 chapters covering the full AI learning path:

| # | Chapter (slug) | Topics |
|---|-----------------|--------|
| 01 | What is AI (`what-is-ai`) | Definition, limits, real-world examples |
| 02 | How AI Works (`how-ai-works`) | Data, algorithms, compute, training loop |
| 03 | Data Importance (`data-importance`) | Dataset quality, bias, validation |
| 04 | Machine Learning (`machine-learning`) | Supervised learning, metrics, over/underfitting |
| 05 | Neural Networks (`neural-networks`) | Layers, backpropagation, practical trade-offs |
| 06 | NLP (`nlp`) | Tokenization, embeddings, transformers |
| 07 | Computer Vision (`computer-vision`) | CNN basics, visual features, robustness |
| 08 | Generative AI (`generative-ai`) | LLM behavior, prompting, hallucinations |
| 09 | Fine-Tuning (`fine-tuning`) | Transfer learning, adaptation strategies |
| 10 | AI Ethics (`ethics-ai`) | Fairness, explainability, accountability |
| 11 | AI Act (`ai-act`) | EU risk classes, compliance controls |
| 12 | AI at Work (`ai-at-work`) | Team adoption, workflows, governance |
| 13 | Practical Tools (`practical-tools`) | ChatGPT, Copilot, assistant workflows |
| 14 | Advanced Patterns (`advanced-patterns`) | RAG, agent patterns, orchestration |
| 15 | Future of AI (`future-ai`) | Trends, opportunities, risk outlook |

Each chapter includes:
- 📖 Structured sections with inline glossary
- 🧠 Interactive quiz (10 questions)
- 💬 Discussion prompts
- 🎯 Key takeaways
- 🔬 Practical exercises (selected chapters)
- 🧪 Downloadable Python lab (selected chapters)

---

## 🔬 Practical Labs

### ML Lab 01 — Housing Regression (Chapter 4)

**Download:** Available from the chapter page

**What you build:** Predict California housing prices with Linear Regression and Random Forest

**What you learn:**
- Load and explore a real dataset (20k+ records)
- Split training / validation sets
- Train two models and compare performance
- Evaluate with MAE and R²
- Visualize predictions vs reality

**Setup:**
```bash
cd ml-lab-01-regression/
pip install -r requirements.txt
python main.py
```

More labs coming for chapters on Neural Networks, NLP, and Computer Vision.

---

## 🛠️ Technologies

Built with modern web technologies focused on **developer experience** and **educational clarity**:

- **[Next.js 15](https://nextjs.org/)** — React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe, maintainable code
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling
- **Custom Design System** — Navy/blue/cyan palette, dark-first, mobile-ready
- **Static Generation** — All 15 chapters pre-rendered for instant load

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/MT-Showcases/ai-fundamentals-showcase.git

# Navigate to project directory
cd ai-fundamentals-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🏗️ Project Structure

```
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage (chapter grid)
│   ├── layout.tsx                # Root layout + metadata
│   ├── chapters/[slug]/          # Dynamic chapter pages
│   ├── glossario/                # Interactive glossary
│   ├── sitemap.ts                # Auto-generated sitemap
│   └── robots.ts                 # SEO robots
├── components/                   # Reusable React components
│   ├── ChapterHeader.tsx         # Chapter title + metadata
│   ├── SectionCard.tsx           # Content section wrapper
│   ├── ChapterQuiz.tsx           # Interactive quiz engine
│   ├── ChapterExercises.tsx      # Practical exercises
│   ├── ChapterChallengeTableReview.tsx # Modular row/cell/column challenge engine
│   ├── PracticalWorkflow.tsx     # Step-by-step lab guide
│   ├── CodeSnippet.tsx           # Syntax-highlighted code
│   ├── GlossaryTooltip.tsx       # Inline term tooltips
│   ├── GlossaryDrawer.tsx        # Full glossary sidebar
│   ├── SectionMediaSlots.tsx     # Media + NotebookLM source
│   └── ChapterMediaSlots.tsx     # Chapter-level media slots
├── data/                         # All content (TypeScript)
│   ├── chapters.ts               # 15 chapters (sections, quiz, exercises)
│   └── glossary.ts               # 100+ glossary terms
├── public/
│   ├── downloads/                # Downloadable ZIPs
│   └── labs/                     # Lab source files (Python)
└── docs/                         # Reports and audits
```

Interactive challenge system docs: `docs/interactive-challenges.md`

---

## ✏️ How to Add or Edit Content

All content lives in `data/chapters.ts` as TypeScript objects. No CMS, no database.

### Add a new section to a chapter

```typescript
// In data/chapters.ts, find the chapter and add to sections[]
{
  title: 'Your Section Title',
  content: 'Content here. Use **bold** and *italic* for emphasis.',
  media: []  // optional: video, podcast, infographic slots
}
```

### Add a quiz question

```typescript
// In the chapter's quiz.questions[]
{
  question: 'What does overfitting mean?',
  options: ['...', '...', '...', '...'],
  correct: 0,  // index of correct option
  explanation: 'Overfitting means the model memorized training data...'
}
```

### Add a glossary term

```typescript
// In data/glossary.ts
{
  id: 'overfitting',
  term: 'Overfitting',
  definition: 'When a model learns training data too well...',
  relatedTerms: ['generalization', 'validation']
}
```

---

## 🤖 AI-Assisted Development

This project is intentionally **AI-assistant friendly** while remaining fully human-readable.

### Why AI-Assisted?

The codebase is structured so that tools like **GitHub Copilot**, **Codex**, or **Claude** can:

- ✅ Understand chapter/section/quiz structure from TypeScript interfaces
- ✅ Generate new chapters consistent with existing patterns
- ✅ Add quiz questions that match the existing format
- ✅ Extend components following established conventions

### AI-Friendly ≠ AI-Only

**This is still clean, idiomatic TypeScript/React code:**

- 👥 Fully readable and editable by humans
- 📖 TypeScript interfaces document every data shape
- 🏗️ Clear component roles and separation of concerns
- ✨ Follows Next.js 15 App Router best practices

---

## 📊 Quality (baseline v1.0.0)

Lighthouse scores (local production build):

| Metric | Score |
|--------|-------|
| Performance | 94 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 100 |

---

## 🗺️ Roadmap

### Phase 1: Core Platform ✅
- [x] 15 chapters with full content
- [x] Interactive quiz engine (10 questions/chapter)
- [x] Inline glossary with hover tooltips
- [x] Practical exercises (CH1, CH4)
- [x] ML Lab 01 — Housing Regression (CH4)
- [x] NotebookLM source integration (per step + full workflow)
- [x] Mobile responsive (390px, 768px, 1280px)
- [x] SEO ready (metadata, sitemap, robots)

### Phase 2: Labs Expansion (Q2 2026)
- [ ] ML Lab 02 — Neural Network from Scratch (CH5)
- [ ] ML Lab 03 — Text Classification with NLP (CH7)
- [ ] ML Lab 04 — Image Classifier (CH8)
- [ ] Difficulty levels for quizzes

### Phase 3: Interactive Features (Q3 2026)
- [ ] In-browser code editor (run Python snippets)
- [ ] Progress tracking (localStorage)
- [ ] Chapter completion badges
- [ ] Video tutorials integration

### Phase 4: Community (Q4 2026)
- [ ] User-submitted exercises
- [ ] Translations (EN/IT)
- [ ] Teacher mode (custom chapter selection)

---

## 🤝 Contributing

We welcome contributions from developers of all skill levels!

### Ways to Contribute

- 🐛 **Report Bugs** — Open an issue with reproduction steps
- 💡 **Suggest Content** — Propose new chapters, exercises, or quiz questions
- 🔬 **Add Labs** — Build Python labs for chapters that don't have one yet
- 🎨 **Improve UI/UX** — Enhance mobile experience or accessibility
- 💻 **Code Contributions** — Fix bugs or implement roadmap features
- 📝 **Documentation** — Improve guides and inline comments

### Contribution Guidelines

1. **Fork** the repository and create a feature branch
2. **Follow the data structure** — content lives in `data/chapters.ts`
3. **Run the build** before submitting: `npm run build`
4. **Test on mobile** — 390px minimum viewport
5. **Write meaningful commits** using conventional commits style
6. **Submit a PR** with context and screenshots if UI changes

### Quick Reference

```bash
npm run dev      # Start development server
npm run build    # Production build (must pass before PR)
npm run lint     # Run ESLint
```

---

## 🔗 Related Projects

Part of the **MT-Showcases** series of interactive learning platforms:

- **[Design Pattern Showcase](https://github.com/MT-Showcases/development-design-pattern-showcase)** — Design patterns through gamification
- **[Angular Showcase](https://github.com/MT-Showcases/angular-showcase)** — Angular concepts with progressive disclosure
- **AI Fundamentals Showcase** (this project) — AI/ML learning with practical labs

All projects share the same philosophy:
- **Learn by doing** (labs and interactivity over passive reading)
- **Progressive depth** (start simple, go deep when ready)
- **AI-assisted development** (structured for human + AI collaboration)

---

## 📄 License

MIT — see [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

**Michele Tornello**
- GitHub: [@Flame0510](https://github.com/Flame0510)
- Website: [micheletornello.com](https://micheletornello.com)

---

*Ready to learn AI the practical way? Start from Chapter 1 →* 🚀
