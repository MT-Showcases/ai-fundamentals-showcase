'use client';

import { useState } from 'react';
import Button from '@/components/Button';

interface NotebookLMSourceProps {
  source: string;
}

export default function NotebookLMSource({ source }: NotebookLMSourceProps) {
  const [showSource, setShowSource] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(source);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 bg-blue-900/10 rounded-lg p-4 border border-blue-400/20">
      <div className="flex items-center justify-between gap-3 mb-3">
        <p className="text-sm font-semibold text-blue-300">📚 Fonte per NotebookLM</p>
        <Button
          variant="secondary"
          className="px-3 py-1.5 min-h-0 text-xs"
          onClick={() => setShowSource(!showSource)}
        >
          {showSource ? 'Nascondi' : 'Mostra'} Fonte
        </Button>
      </div>

      {showSource && (
        <div className="mt-3">
          <pre className="bg-navy-800 p-3 rounded text-xs text-gray-300 overflow-auto max-h-40 mb-3 font-mono border border-navy-600 whitespace-pre-wrap">
            {source}
          </pre>
          <Button
            variant="primary"
            className="w-full px-3 py-2 min-h-0 text-sm"
            onClick={handleCopy}
          >
            {copied ? '✅ Copiato!' : '📋 Copia Fonte'}
          </Button>
        </div>
      )}
    </div>
  );
}
