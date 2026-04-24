import React from 'react';
import Button from './Button';

interface ChapterNavProps {
  previousChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
  currentChapter: number;
  totalChapters: number;
}

export default function ChapterNav({
  previousChapter,
  nextChapter,
  currentChapter,
  totalChapters,
}: ChapterNavProps) {
  return (
    <div className="mt-12 pt-8 border-t border-blue-700">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-400">
          Capitolo {currentChapter} di {totalChapters}
        </span>
        <div className="h-2 bg-blue-800 rounded-full w-32">
          <div
            className="h-2 bg-cyan-400 rounded-full transition-all"
            style={{ width: `${(currentChapter / totalChapters) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between gap-4 mt-8">
        {previousChapter ? (
          <Button href={`/chapters/${previousChapter.slug}`} variant="secondary">
            ← Capitolo Precedente
          </Button>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Button href={`/chapters/${nextChapter.slug}`}>
            Capitolo Successivo →
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
