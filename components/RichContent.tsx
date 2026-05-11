'use client';

import React from 'react';
import GlossaryTooltip from './GlossaryTooltip';
import { glossaryTerms } from '@/data/glossary';

// Sorted by term length descending so longer terms match before shorter substrings
const SORTED_TERMS = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length);

/**
 * Renders rich inline content with:
 * - **bold**  *italic*  <<highlight>>  newlines
 * - GlossaryTooltip wrapping when enableGlossary=true
 */

type Token =
  | { type: 'bold'; value: string }
  | { type: 'italic'; value: string }
  | { type: 'highlight'; value: string }
  | { type: 'newline' }
  | { type: 'text'; value: string };

function normalizePedagogicBreaks(text: string): string {
  // Ensure "Nota pratica" and "<<Takeaway: ...>>" appear on separate lines
  return text.replace(/(\*Nota pratica:\*[^\n]*?)\s*(<<Takeaway:[^>]+>>)/g, '$1\n$2');
}

function tokenizeMarkdown(text: string): Token[] {
  const normalized = normalizePedagogicBreaks(text);
  const parts = normalized.split(/(\*\*[^*]+\*\*|\*[^*]+\*|<<[^>]+>>|\n)/g).filter(Boolean);
  const tokens: Token[] = [];
  for (const part of parts) {
    if (part === '\n') {
      tokens.push({ type: 'newline' });
    } else if (part.startsWith('**') && part.endsWith('**')) {
      tokens.push({ type: 'bold', value: part.slice(2, -2) });
    } else if (part.startsWith('*') && part.endsWith('*')) {
      tokens.push({ type: 'italic', value: part.slice(1, -1) });
    } else if (part.startsWith('<<') && part.endsWith('>>')) {
      tokens.push({ type: 'highlight', value: part.slice(2, -2) });
    } else {
      tokens.push({ type: 'text', value: part });
    }
  }
  return tokens;
}

/**
 * Split a text string into segments, wrapping glossary term occurrences.
 * Returns an array of React nodes.
 */
function wrapGlossaryTerms(text: string, keyPrefix: string): React.ReactNode[] {
  if (!text) return [];

  // Build a regex that matches any glossary term (case insensitive)
  // We sort by length to match longer terms first
  const escapedTerms = SORTED_TERMS.map((t) => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (escapedTerms.length === 0) return [text];

  const regex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
  const parts = text.split(regex);

  const nodes: React.ReactNode[] = [];
  let matchCount = 0;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;

    // Check if this part matches a glossary term
    const matchedTerm = SORTED_TERMS.find(
      (t) => t.term.toLowerCase() === part.toLowerCase()
    );

    if (matchedTerm) {
      nodes.push(
        <GlossaryTooltip key={`${keyPrefix}-gterm-${matchCount++}-${i}`} termId={matchedTerm.id}>
          {part}
        </GlossaryTooltip>
      );
    } else {
      nodes.push(part);
    }
  }

  return nodes;
}

function renderToken(
  token: Token,
  idx: number,
  enableGlossary: boolean
): React.ReactNode {
  const key = `tok-${idx}`;

  const renderText = (value: string, innerKey: string): React.ReactNode => {
    if (!enableGlossary) return value;
    const wrapped = wrapGlossaryTerms(value, innerKey);
    return wrapped.length === 1 ? wrapped[0] : <React.Fragment>{wrapped}</React.Fragment>;
  };

  switch (token.type) {
    case 'newline':
      return <br key={key} />;
    case 'bold':
      return (
        <strong key={key} className="font-bold text-white">
          {renderText(token.value, `${key}-b`)}
        </strong>
      );
    case 'italic':
      return (
        <em key={key} className="italic text-gray-100">
          {renderText(token.value, `${key}-i`)}
        </em>
      );
    case 'highlight':
      return (
        <span key={key} className="text-yellow-300 font-medium">
          {renderText(token.value, `${key}-h`)}
        </span>
      );
    case 'text':
      return (
        <React.Fragment key={key}>
          {renderText(token.value, `${key}-t`)}
        </React.Fragment>
      );
  }
}

interface RichContentProps {
  content: string;
  enableGlossary?: boolean;
  glossaryTermIds?: string[];
  className?: string;
}

function extractOrderedItems(text: string): string[] {
  const regex = /\((\d+)\)\s*([\s\S]*?)(?=\(\d+\)\s*|$)/g;
  const matches = [...text.matchAll(regex)];
  if (matches.length < 2) return [];
  return matches.map((m) => m[2].trim()).filter(Boolean);
}

export default function RichContent({ content, enableGlossary = false, glossaryTermIds, className }: RichContentProps) {
  const items = extractOrderedItems(content);
  const hasOrderedList = items.length >= 2;

  const selectedTerms = glossaryTermIds && glossaryTermIds.length > 0
    ? SORTED_TERMS.filter((t) => glossaryTermIds.includes(t.id))
    : SORTED_TERMS;

  const wrapWithSelectedTerms = (text: string, keyPrefix: string): React.ReactNode[] => {
    if (!text) return [];
    const escapedTerms = selectedTerms.map((t) => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (escapedTerms.length === 0) return [text];
    const regex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    const parts = text.split(regex);
    const linkedTermIds = new Set<string>();
    const nodes: React.ReactNode[] = [];
    let matchCount = 0;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!part) continue;
      const matchedTerm = selectedTerms.find((t) => t.term.toLowerCase() === part.toLowerCase());
      if (matchedTerm && !linkedTermIds.has(matchedTerm.id)) {
        linkedTermIds.add(matchedTerm.id);
        nodes.push(
          <GlossaryTooltip key={`${keyPrefix}-gterm-${matchCount++}-${i}`} termId={matchedTerm.id}>
            {part}
          </GlossaryTooltip>
        );
      } else {
        nodes.push(part);
      }
    }

    return nodes;
  };

  const renderTokenScoped = (token: Token, idx: number): React.ReactNode => {
    const key = `tok-${idx}`;
    const renderText = (value: string, innerKey: string): React.ReactNode => {
      if (!enableGlossary) return value;
      const wrapped = wrapWithSelectedTerms(value, innerKey);
      return wrapped.length === 1 ? wrapped[0] : <React.Fragment>{wrapped}</React.Fragment>;
    };

    switch (token.type) {
      case 'newline':
        return <br key={key} />;
      case 'bold':
        return <strong key={key} className="font-bold text-white">{renderText(token.value, `${key}-b`)}</strong>;
      case 'italic':
        return <em key={key} className="italic text-gray-100">{renderText(token.value, `${key}-i`)}</em>;
      case 'highlight':
        return <span key={key} className="text-yellow-300 font-medium">{renderText(token.value, `${key}-h`)}</span>;
      case 'text':
        return <React.Fragment key={key}>{renderText(token.value, `${key}-t`)}</React.Fragment>;
    }
  };

  if (hasOrderedList) {
    return (
      <ol className={`list-decimal pl-6 space-y-2 text-gray-300 leading-relaxed marker:text-cyan-300 ${className ?? ''}`}>
        {items.map((item, idx) => {
          const tokens = tokenizeMarkdown(item);
          return (
            <li key={idx}>
              {tokens.map((tok, tidx) => renderTokenScoped(tok, tidx))}
            </li>
          );
        })}
      </ol>
    );
  }

  const tokens = tokenizeMarkdown(content);
  return (
    <p className={`text-gray-300 leading-relaxed whitespace-pre-line ${className ?? ''}`}>
      {tokens.map((tok, idx) => renderTokenScoped(tok, idx))}
    </p>
  );
}
