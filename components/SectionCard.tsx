import React from 'react';

interface SectionCardProps {
  title: string;
  content: string;
}

function extractOrderedItems(text: string): string[] {
  // Match sequences like: (1) foo (2) bar (3) baz
  const regex = /\((\d+)\)\s*([\s\S]*?)(?=\(\d+\)\s*|$)/g;
  const matches = [...text.matchAll(regex)];

  if (matches.length < 2) return [];

  return matches
    .map((m) => m[2].trim())
    .filter(Boolean);
}

export default function SectionCard({ title, content }: SectionCardProps) {
  const items = extractOrderedItems(content);
  const hasOrderedList = items.length >= 2;

  return (
    <section className="bg-blue-900 p-6 rounded-lg mb-6 border border-blue-700">
      <h2 className="text-2xl font-bold text-cyan-300 mb-4">{title}</h2>

      {hasOrderedList ? (
        <ol className="list-decimal pl-6 space-y-2 text-gray-300 leading-relaxed marker:text-cyan-300">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      ) : (
        <p className="text-gray-300 leading-relaxed">{content}</p>
      )}
    </section>
  );
}
