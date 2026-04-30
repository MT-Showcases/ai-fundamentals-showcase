import React from 'react';

interface SectionCardProps {
  title: string;
  content: string;
}

function renderInlineFormatting(text: string): React.ReactNode[] {
  // Supports:
  // **bold**
  // *italic*
  // <<highlight>> (yellow accent)
  const tokens = text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*|<<[^>]+>>)/g)
    .filter(Boolean);

  return tokens.map((token, idx) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      const value = token.slice(2, -2);
      return (
        <strong key={idx} className="font-bold text-white">
          {value}
        </strong>
      );
    }

    if (token.startsWith('*') && token.endsWith('*')) {
      const value = token.slice(1, -1);
      return (
        <em key={idx} className="italic text-gray-100">
          {value}
        </em>
      );
    }

    if (token.startsWith('<<') && token.endsWith('>>')) {
      const value = token.slice(2, -2);
      return (
        <span key={idx} className="text-yellow-300 font-medium">
          {value}
        </span>
      );
    }

    return <React.Fragment key={idx}>{token}</React.Fragment>;
  });
}

function getSectionIcon(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('errore')) return '⚠️';
  if (t.includes('esercizio') || t.includes('task')) return '🛠️';
  if (t.includes('startup') || t.includes('caso')) return '🚀';
  if (t.includes('rete') || t.includes('algoritmo')) return '🧠';
  if (t.includes('dati') || t.includes('dataset')) return '📊';
  if (t.includes('etica') || t.includes('rischio')) return '🛡️';
  if (t.includes('futuro') || t.includes('opportunità')) return '🔮';
  return '📌';
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
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
        <span>{getSectionIcon(title)}</span>
        <span>{title}</span>
      </h2>

      {hasOrderedList ? (
        <ol className="list-decimal pl-6 space-y-2 text-gray-300 leading-relaxed marker:text-cyan-300">
          {items.map((item, idx) => (
            <li key={idx}>{renderInlineFormatting(item)}</li>
          ))}
        </ol>
      ) : (
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{renderInlineFormatting(content)}</p>
      )}
    </section>
  );
}
