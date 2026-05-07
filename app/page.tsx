'use client';

import { chapters } from '@/data/chapters';
import { chapterEmojis } from '@/data/chapterEmojis';
import Card from '@/components/Card';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';
import Image from 'next/image';
import QuizScoreDashboard from '@/components/QuizScoreDashboard';
import Link from 'next/link';
import GlossaryTooltip from '@/components/GlossaryTooltip';

export default function Home() {
  const [introVideoError, setIntroVideoError] = useState(false);

  return (
    <main className="min-h-screen bg-navy-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-navy-900 via-blue-900 to-navy-800 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 leading-tight">
            Fondamenti di AI
          </h1>
          <p className="text-cyan-300 text-xl font-medium mb-2">
            Capire l&apos;Intelligenza Artificiale — davvero.
          </p>
          <p className="text-gray-400 text-base mb-8 max-w-2xl">
            Dal <GlossaryTooltip termId="machine-learning">Machine Learning</GlossaryTooltip> alle <GlossaryTooltip termId="neural-network">reti neurali</GlossaryTooltip>, dai <GlossaryTooltip termId="llm">modelli linguistici</GlossaryTooltip> alle applicazioni pratiche: un percorso completo pensato per chi vuole costruire con l&apos;<GlossaryTooltip termId="intelligenza-artificiale">AI</GlossaryTooltip>, non solo parlarne.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-300 items-center">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-extrabold text-3xl">{chapters.length}</span>
              <span className="text-gray-400 text-sm">Capitoli</span>
            </div>
            <div className="w-px bg-blue-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-extrabold text-3xl">~3h</span>
              <span className="text-gray-400 text-sm">di lettura</span>
            </div>
            <div className="w-px bg-blue-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-extrabold text-3xl">
                {chapters.reduce((acc, ch) => acc + (ch.discussionPrompts?.length || 0), 0)}
              </span>
              <span className="text-gray-400 text-sm">Discussioni</span>
            </div>
            <div className="w-px bg-blue-700 hidden sm:block" />
            <Link
              href="/glossario"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-200 transition-all text-sm font-medium"
            >
              📖 Glossario
            </Link>
          </div>
        </div>
      </header>

      {/* Banner OpenClaw */}
      <section className="py-4 px-6 bg-blue-900/30 border-b border-blue-400/20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-300">
            <span className="text-cyan-300 font-semibold">✨ Dietro questo sito c&apos;è un sistema di agenti AI che ho costruito con OpenClaw</span> — per trasformare la mia visione didattica in un&apos;esperienza di apprendimento concreta, pratica e accessibile a tutti.
          </p>
          <Link href="/openclaw" className="text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors whitespace-nowrap border border-blue-400/40 hover:border-cyan-400/60 px-4 py-1.5 rounded-full">
            Scopri come →
          </Link>
        </div>
      </section>

      {/* Course Intro Video */}
      <section className="py-10 px-6 border-t border-blue-800/40 border-b border-blue-800/40 bg-navy-900/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Introduzione al Corso</h2>
          <p className="text-gray-400 mb-5">Video overview completo del percorso Fondamenti di AI.</p>

          {!introVideoError ? (
            <video
              src="/media/course-intro.mp4"
              controls
              className="w-full max-w-4xl rounded-xl bg-black"
              onError={() => setIntroVideoError(true)}
            />
          ) : (
            <div className="max-w-4xl rounded-xl border border-dashed border-blue-700 bg-navy-800/60 p-6 text-sm text-gray-300">
              Video non ancora caricato. Inserisci il file in: <span className="text-cyan-300 font-mono">public/media/course-intro.mp4</span>
            </div>
          )}
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <QuizScoreDashboard />
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Percorso di Apprendimento</h2>
            <span className="text-sm text-gray-500">{chapters.length} capitoli disponibili</span>
          </div>
          {/* Search */}
          <div className="mb-10">
            <SearchBar />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => {
              const chapterInfographic = chapter.media?.find(
                (m) => m.type === 'infographic' && m.notes?.toLowerCase().includes('ready')
              );

              return (
                <Card key={chapter.id} className="h-full flex flex-col">
                  <div className="space-y-3 flex-1 pb-6">
                    <div className="flex items-center gap-2">
                      <span className="bg-cyan-400 text-navy-900 px-2 py-0.5 rounded text-xs font-bold">
                        Cap. {chapter.id}
                      </span>
                    </div>

                    {chapterInfographic && (
                      <Image
                        src={`/${chapterInfographic.placeholderPath}`}
                        alt={`Anteprima infografica ${chapter.title}`}
                        width={800}
                        height={450}
                        className="w-full max-h-56 rounded-lg object-contain bg-black/20 border border-blue-700/40"
                        loading="lazy"
                      />
                    )}

                    <h3 className="text-base font-bold text-white leading-snug line-clamp-2">
                      {chapterEmojis[chapter.id] ?? ''} {chapter.title}
                    </h3>
                    <p className="text-gray-300 text-base line-clamp-2">{chapter.description}</p>
                    <div className="text-xs text-gray-500">
                      {chapter.sections.length} sezioni · {chapter.keyTakeaways.length} punti chiave
                    </div>
                  </div>

                  <Button href={`/chapters/${chapter.slug}`} className="w-full text-center py-3 mt-auto">
                    Leggi Capitolo →
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-800 border-t border-blue-700/60 py-10 px-6 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">Fondamenti di AI</p>
              <p className="text-gray-400 text-xs mt-0.5">Corso di Formazione AI</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-gray-300 text-sm">Docente: <span className="text-cyan-400 font-medium">Michele Tornello</span></p>
              <div className="flex items-center justify-center sm:justify-end gap-3 mt-1">
                <span className="text-gray-500 text-xs">Tutti i diritti riservati</span>
                <span className="text-gray-700" aria-hidden="true">·</span>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-300 text-xs transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-700" aria-hidden="true">·</span>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-300 text-xs transition-colors">
                  Termini di Servizio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
