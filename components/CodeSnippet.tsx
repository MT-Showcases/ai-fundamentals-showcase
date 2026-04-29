"use client";

import { useState } from 'react';

interface CodeSnippetProps {
  code: string;
  lang: 'python' | 'javascript' | 'json' | 'bash';
  label: string;
}

export default function CodeSnippet({ code, lang, label }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-xl border border-navy-600 overflow-hidden bg-navy-900/70">
      <div className="flex items-center justify-between px-4 py-3 border-b border-navy-600 bg-navy-800/80">
        <div>
          <p className="text-cyan-300 font-semibold text-sm">{label}</p>
          <p className="text-gray-400 text-xs uppercase tracking-wide">{lang}</p>
        </div>
        <button
          onClick={onCopy}
          className="px-3 py-1.5 rounded-lg text-xs font-medium border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition"
        >
          {copied ? 'Copiato ✓' : 'Copia'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed text-gray-100 bg-[#0a1f3d]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
