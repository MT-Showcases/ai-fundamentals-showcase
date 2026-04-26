'use client';

import { chapters } from '@/data/chapters';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Home() {
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
            Dal machine learning alle reti neurali, dai modelli linguistici alle applicazioni pratiche: un percorso completo pensato per chi vuole costruire con l&apos;AI, non solo parlarne.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold text-2xl">{chapters.length}</span>
              <span className="text-gray-400">Capitoli</span>
            </div>
            <div className="w-px bg-blue-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold text-2xl">~3h</span>
              <span className="text-gray-400">di lettura</span>
            </div>
            <div className="w-px bg-blue-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold text-2xl">
                {chapters.reduce((acc, ch) => acc + (ch.discussionPrompts?.length || 0), 0)}
              </span>
              <span className="text-gray-400">Discussioni</span>
            </div>
          </div>
        </div>
      </header>

      {/* Chapters Grid */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-cyan-300">Percorso di Apprendimento</h2>
            <span className="text-sm text-gray-500">{chapters.length} capitoli disponibili</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {chapters.map((chapter) => (
              <Card key={chapter.id}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-400 text-navy-900 px-2 py-0.5 rounded text-xs font-bold">
                    Cap. {chapter.id}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 leading-snug">{chapter.title}</h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{chapter.description}</p>
                <div className="text-xs text-gray-500 mb-4">
                  {chapter.sections.length} sezioni · {chapter.keyTakeaways.length} punti chiave
                </div>
                <Button href={`/chapters/${chapter.slug}`} className="w-full text-center text-sm py-2.5">
                  Leggi Capitolo →
                </Button>
              </Card>
            ))}
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
              <p className="text-gray-500 text-xs mt-0.5">Tutti i diritti riservati</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
