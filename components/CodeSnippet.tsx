"use client";

import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

interface CodeSnippetProps {
  code: string;
  lang: 'python' | 'javascript' | 'json' | 'bash';
  label: string;
}

const langMap: Record<CodeSnippetProps['lang'], string> = {
  python: 'python',
  javascript: 'javascript',
  json: 'json',
  bash: 'shell',
};

export default function CodeSnippet({ code, lang, label }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const lines = code.split('\n').length;
  const minHeight = isMobile ? 180 : 120;
  const maxHeight = isMobile ? 560 : 480;
  const height = Math.min(Math.max(lines * 20 + 24, minHeight), maxHeight);

  return (
    <div className="h-auto rounded-xl border border-navy-600 overflow-hidden bg-navy-900/70">
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

      <Editor
        height={`${height}px`}
        language={langMap[lang]}
        value={code}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 13,
          lineNumbers: 'on',
          automaticLayout: true,
          wordWrap: 'off',
          tabSize: 2,
          padding: { top: 12, bottom: 12 },
          scrollbar: {
            horizontal: 'auto',
            vertical: 'auto',
          },
          fontFamily: 'JetBrains Mono, Fira Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        }}
      />
    </div>
  );
}
