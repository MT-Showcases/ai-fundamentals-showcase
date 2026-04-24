import React from 'react';

interface ChapterHeaderProps {
  title: string;
  description: string;
  chapterNumber: number;
}

export default function ChapterHeader({
  title,
  description,
  chapterNumber,
}: ChapterHeaderProps) {
  return (
    <header className="bg-gradient-to-r from-navy-900 to-blue-900 text-white p-8 rounded-lg mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-blue-400 text-navy-900 px-3 py-1 rounded-full text-sm font-bold">
          Capitolo {chapterNumber}
        </span>
      </div>
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p className="text-cyan-300 text-lg">{description}</p>
    </header>
  );
}
