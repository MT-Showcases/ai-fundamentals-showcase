'use client';

import { chapters } from '@/data/chapters';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-navy-900 via-blue-900 to-navy-800 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Fondamenti di AI</h1>
          <p className="text-cyan-300 text-lg mb-6">
            Un percorso completo per comprendere l&apos;Intelligenza Artificiale: dai concetti base alle applicazioni moderne
          </p>
          <div className="flex gap-8 text-sm text-gray-300">
            <div>
              <span className="text-cyan-400 font-bold text-xl">{chapters.length}</span> Capitoli
            </div>
            <div>
              <span className="text-cyan-400 font-bold text-xl">~3h</span> di lettura
            </div>
            <div>
              <span className="text-cyan-400 font-bold text-xl">{chapters.reduce((acc, ch) => acc + (ch.discussionPrompts?.length || 0), 0)}</span> Discussioni
            </div>
          </div>
        </div>
      </header>

      {/* Chapters Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-cyan-300">Percorso di Apprendimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter, idx) => (
              <Card key={chapter.id}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-400 text-navy-900 px-2 py-1 rounded text-xs font-bold">
                    Cap. {chapter.id}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{chapter.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{chapter.description}</p>
                <div className="text-xs text-gray-400 mb-4">
                  {chapter.sections.length} sezioni · {chapter.keyTakeaways.length} punti chiave
                </div>
                <Button href={`/chapters/${chapter.slug}`} className="w-full text-center">
                  Leggi Capitolo
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-800 border-t border-blue-700 py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>Fondamenti di AI Showcase • Docente: Michele Tornello • Steve Jobs Academy Catania</p>
        </div>
      </footer>
    </main>
  );
}
