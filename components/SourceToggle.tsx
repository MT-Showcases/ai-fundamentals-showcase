'use client';

import { useState } from 'react';

interface SourceToggleProps {
  source: string;
  label?: string;
}

export default function SourceToggle({ source, label = 'Mostra fonte workflow' }: SourceToggleProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="text-xs px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition"
      >
        {open ? 'Nascondi fonte workflow' : label}
      </button>

      {open && (
        <div className="mt-3 rounded-lg border border-navy-600 bg-navy-900/70 p-3">
          <textarea
            readOnly
            value={source}
            className="w-full min-h-[180px] bg-navy-950 text-gray-200 text-xs p-3 rounded-md border border-navy-700"
          />
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(source);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="mt-2 text-xs px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition"
          >
            {copied ? 'Copiato ✓' : 'Copia fonte'}
          </button>
        </div>
      )}
    </div>
  );
}
