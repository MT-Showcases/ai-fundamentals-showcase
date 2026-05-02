'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { glossaryTerms, CATEGORIES, type GlossaryTerm } from '@/data/glossary';

// Category color config (reused from tooltip)
const categoryColors: Record<string, string> = {
  AI: 'bg-violet-500/20 text-violet-300 border-violet-500/40 hover:bg-violet-500/30',
  ML: 'bg-blue-500/20 text-blue-300 border-blue-500/40 hover:bg-blue-500/30',
  'Deep Learning': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30',
  NLP: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30',
  Generativa: 'bg-pink-500/20 text-pink-300 border-pink-500/40 hover:bg-pink-500/30',
  Etica: 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30',
  Dati: 'bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30',
  Prodotto: 'bg-teal-500/20 text-teal-300 border-teal-500/40 hover:bg-teal-500/30',
};

const categoryColorsActive: Record<string, string> = {
  AI: 'bg-violet-500/50 text-violet-200 border-violet-400',
  ML: 'bg-blue-500/50 text-blue-200 border-blue-400',
  'Deep Learning': 'bg-cyan-500/50 text-cyan-200 border-cyan-400',
  NLP: 'bg-emerald-500/50 text-emerald-200 border-emerald-400',
  Generativa: 'bg-pink-500/50 text-pink-200 border-pink-400',
  Etica: 'bg-amber-500/50 text-amber-200 border-amber-400',
  Dati: 'bg-orange-500/50 text-orange-200 border-orange-400',
  Prodotto: 'bg-teal-500/50 text-teal-200 border-teal-400',
};

// Chapter slug to label mapping
const chapterLabels: Record<string, string> = {
  'what-is-ai': 'CH1 — Cos\'è l\'AI',
  'ai-history': 'CH2 — Storia dell\'AI',
  'data-importance': 'CH3 — Dati',
  'machine-learning': 'CH4 — Machine Learning',
  'neural-networks': 'CH5 — Reti Neurali',
  'nlp': 'CH6 — NLP',
  'computer-vision': 'CH7 — Computer Vision',
  'generative-ai': 'CH8 — AI Generativa',
  'fine-tuning': 'CH9 — Fine-Tuning',
  'ethics-ai': 'CH10 — Etica AI',
  'ai-products': 'CH11 — Prodotti AI',
  'ai-at-work': 'CH12 — AI al Lavoro',
  'future-ai': 'CH13 — Futuro AI',
  'ai-strategy': 'CH14 — Strategia AI',
  'ai-capstone': 'CH15 — Capstone',
};

export default function GlossarioPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<GlossaryTerm['category'] | 'Tutti'>('Tutti');
  const [expanded, setExpanded] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Auto-focus expanded term from URL hash (deferred to avoid setState-in-effect lint error)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const timer = setTimeout(() => {
      setExpanded(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return glossaryTerms
      .filter((t) => {
        const matchCat = activeCategory === 'Tutti' || t.category === activeCategory;
        if (!matchCat) return false;
        if (!q) return true;
        return (
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          t.shortDef.toLowerCase().includes(q) ||
          t.synonyms?.some((s) => s.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => a.term.localeCompare(b.term, 'it'));
  }, [search, activeCategory]);

  const totalCount = glossaryTerms.length;

  const toggleExpand = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
    // Update hash silently
    if (expanded !== id) {
      window.history.replaceState(null, '', `#${id}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            📖 Glossario AI
          </h1>
          <p className="text-gray-400 text-lg">
            {totalCount} termini fondamentali dall&apos;AI al Deep Learning — con definizioni, sinonimi e link ai capitoli.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            ref={searchRef}
            type="search"
            placeholder="Cerca termine, definizione o sinonimo…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-blue-900/60 border border-blue-700/60 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              aria-label="Cancella ricerca"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('Tutti')}
            className={[
              'px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150',
              activeCategory === 'Tutti'
                ? 'bg-white/20 text-white border-white/40'
                : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-gray-300',
            ].join(' ')}
          >
            Tutti ({totalCount})
          </button>
          {CATEGORIES.map((cat) => {
            const count = glossaryTerms.filter((t) => t.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  'px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150',
                  isActive
                    ? categoryColorsActive[cat] ?? 'bg-gray-500/50 text-gray-200 border-gray-400'
                    : (categoryColors[cat] ?? 'bg-gray-500/20 text-gray-300 border-gray-500/40 hover:bg-gray-500/30'),
                ].join(' ')}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="text-xs text-gray-500 mb-5 font-mono">
          {filtered.length} {filtered.length === 1 ? 'termine' : 'termini'}
          {search && ` per "${search}"`}
          {activeCategory !== 'Tutti' && ` · categoria: ${activeCategory}`}
        </div>

        {/* Terms list */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-lg font-medium text-gray-400 mb-2">Nessun termine trovato</p>
            <p className="text-sm">Prova con un&apos;altra parola o rimuovi il filtro categoria.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((term) => {
              const isOpen = expanded === term.id;
              const catColor = categoryColors[term.category] ?? 'bg-gray-500/20 text-gray-300 border-gray-500/40';

              return (
                <article
                  key={term.id}
                  id={term.id}
                  className={[
                    'rounded-xl border transition-all duration-200',
                    isOpen
                      ? 'bg-blue-900/60 border-blue-500/50 shadow-lg shadow-blue-900/20'
                      : 'bg-blue-900/30 border-blue-800/40 hover:border-blue-600/50 hover:bg-blue-900/50',
                  ].join(' ')}
                >
                  {/* Term header (always visible) */}
                  <button
                    onClick={() => toggleExpand(term.id)}
                    className="w-full text-left px-5 py-4 flex items-center gap-3"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium hidden sm:inline-block ${catColor}`}
                    >
                      {term.category}
                    </span>
                    <span className="font-semibold text-white flex-1 text-sm sm:text-base">
                      {term.term}
                    </span>
                    {term.synonyms && term.synonyms.length > 0 && (
                      <span className="text-gray-500 text-xs hidden md:inline truncate max-w-32">
                        {term.synonyms.slice(0, 2).join(', ')}
                      </span>
                    )}
                    <svg
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="px-5 pb-5">
                      {/* Category badge on mobile */}
                      <span className={`inline-block sm:hidden text-xs px-2 py-0.5 rounded-full border font-medium mb-3 ${catColor}`}>
                        {term.category}
                      </span>

                      {/* Full definition */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{term.definition}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        {/* Synonyms */}
                        {term.synonyms && term.synonyms.length > 0 && (
                          <div>
                            <span className="text-gray-500 font-semibold uppercase tracking-wide text-[10px]">Sinonimi</span>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                              {term.synonyms.map((s) => (
                                <span
                                  key={s}
                                  className="bg-white/5 text-gray-300 border border-white/10 rounded-full px-2 py-0.5"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Related terms */}
                        {term.relatedTerms && term.relatedTerms.length > 0 && (
                          <div>
                            <span className="text-gray-500 font-semibold uppercase tracking-wide text-[10px]">Termini correlati</span>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                              {term.relatedTerms.slice(0, 5).map((rid) => {
                                const related = glossaryTerms.find((t) => t.id === rid);
                                return related ? (
                                  <button
                                    key={rid}
                                    onClick={() => toggleExpand(rid)}
                                    className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full px-2 py-0.5 hover:bg-cyan-500/20 transition-colors"
                                  >
                                    {related.term}
                                  </button>
                                ) : null;
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Examples */}
                      {term.examples && term.examples.length > 0 && (
                        <div className="mt-4">
                          <span className="text-gray-500 font-semibold uppercase tracking-wide text-[10px]">Esempi</span>
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {term.examples.map((ex) => (
                              <span
                                key={ex}
                                className="bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-lg px-2.5 py-1 text-xs"
                              >
                                {ex}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Related chapters */}
                      {term.relatedChapters && term.relatedChapters.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-blue-700/40">
                          <span className="text-gray-500 font-semibold uppercase tracking-wide text-[10px]">Capitoli correlati</span>
                          <div className="flex flex-wrap gap-2 mt-1.5">
                            {term.relatedChapters.map((slug) => (
                              <Link
                                key={slug}
                                href={`/chapters/${slug}`}
                                className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                              >
                                📚 {chapterLabels[slug] ?? slug}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-blue-800/40 text-center text-xs text-gray-600">
          {totalCount} termini · AI Fundamentals — SJA Catania
          <span className="mx-2" aria-hidden="true">·</span>
          <Link href="/privacy" className="hover:text-cyan-300 transition-colors">
            Privacy Policy
          </Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <Link href="/terms" className="hover:text-cyan-300 transition-colors">
            Termini di Servizio
          </Link>
        </div>
      </div>
    </div>
  );
}
