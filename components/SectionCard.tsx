import React from 'react';

interface SectionCardProps {
  title: string;
  content: string;
}

const KEY_TERMS = [
  'AI',
  'Machine Learning',
  'Deep Learning',
  'RAG',
  'fine-tuning',
  'Transformer',
  'attention',
  'bias',
  'dataset',
  'algoritmo',
  'modello',
  'reti neurali',
  'prompt',
  'overfitting',
  'underfitting'
];

function highlightKeywords(text: string): React.ReactNode[] {
  const termsRegex = new RegExp(`(${KEY_TERMS.map((t) => t.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(termsRegex);

  return parts.map((part, idx) => {
    const isKeyword = KEY_TERMS.some((term) => term.toLowerCase() === part.toLowerCase());
    if (!isKeyword) return <React.Fragment key={idx}>{part}</React.Fragment>;

    return (
      <span key={idx} className="text-cyan-300 font-semibold">
        {part}
      </span>
    );
  });
}

function renderInlineFormatting(text: string): React.ReactNode[] {
  // Supports **bold** and *italic*
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return tokens.map((token, idx) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      const value = token.slice(2, -2);
      return (
        <strong key={idx} className="font-bold text-white">
          {highlightKeywords(value)}
        </strong>
      );
    }

    if (token.startsWith('*') && token.endsWith('*')) {
      const value = token.slice(1, -1);
      return (
        <em key={idx} className="italic text-gray-100">
          {highlightKeywords(value)}
        </em>
      );
    }

    return <React.Fragment key={idx}>{highlightKeywords(token)}</React.Fragment>;
  });
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
            <li key={idx}>{renderInlineFormatting(item)}</li>
          ))}
        </ol>
      ) : (
        <p className="text-gray-300 leading-relaxed">{renderInlineFormatting(content)}</p>
      )}
    </section>
  );
}
