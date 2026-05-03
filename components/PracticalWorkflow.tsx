'use client';

import { useState, type ReactNode } from 'react';
import Button from '@/components/Button';
import CodeSnippet from '@/components/CodeSnippet';
import SectionMediaSlots from '@/components/SectionMediaSlots';
import { MediaPlaceholder } from '@/data/types';

interface ModificationExample {
  lineNumber: number;
  description: string;
  before: string;
  after: string;
  expectedResult: string;
}

interface WorkflowStep {
  number: number;
  title: string;
  description: ReactNode;
  code: string;
  codeLang?: 'python' | 'javascript' | 'sql' | 'json' | 'bash';
  tryThis: ReactNode;
  fileReference?: FileReference;
  modificationExample?: ModificationExample;
  notebookLmSource?: string;
}

interface FileReference {
  filename: string;
  lines?: string;
  description: string;
}

interface WorkflowDownloadLink {
  label: string;
  url: string;
  icon?: string; // 'zip' | 'pdf'
}

interface PracticalWorkflowProps {
  title: string;
  intro?: string;
  downloadLinks: WorkflowDownloadLink[];
  steps: WorkflowStep[];
  workflowCompleteSource?: string;
  media?: MediaPlaceholder[];
  chapterId?: number;
  chapterSlug?: string;
  setupContent?: ReactNode;
}

export default function PracticalWorkflow({
  title,
  intro,
  downloadLinks,
  steps,
  workflowCompleteSource,
  media,
  chapterId,
  chapterSlug,
  setupContent
}: PracticalWorkflowProps) {
  const [expandedSources, setExpandedSources] = useState<Record<number, boolean>>({});
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [showCompleteSource, setShowCompleteSource] = useState(false);
  const [copiedComplete, setCopiedComplete] = useState(false);

  return (
    <div className="bg-navy-900 border border-cyan-400/20 rounded-xl p-8 mb-8">
      <h3 className="text-2xl font-bold text-cyan-300 mb-2">{title}</h3>
      {intro && <p className="text-gray-300 mb-6">{intro}</p>}

      <div className="bg-navy-800 border border-blue-400/30 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold text-blue-300 mb-4">📋 Setup</h4>
        <div className="flex flex-wrap gap-3 mb-6">
          {downloadLinks.map((link, idx) => (
            <a key={idx} href={link.url} download className="inline-block">
              <Button variant="primary" className="px-4 py-2 min-h-0 text-sm">
                {link.icon === 'zip' ? '📦' : link.icon === 'pdf' ? '📄' : '⬇️'} {link.label}
              </Button>
            </a>
          ))}
        </div>
        {setupContent && <div>{setupContent}</div>}
      </div>

      {media && media.length > 0 && chapterId && chapterSlug && (
        <div className="mb-8">
          <SectionMediaSlots
            chapterId={chapterId}
            chapterSlug={chapterSlug}
            sectionIndex={999}
            sectionTitle={title}
            sectionContent={intro || ''}
            media={media}
            isWorkflow={true}
            customSourceText={workflowCompleteSource}
          />
        </div>
      )}

      <div className="space-y-8">
        {steps.map((step) => {
          const lang = step.codeLang === 'sql' ? 'javascript' : (step.codeLang || 'python');

          return (
            <div
              key={step.number}
              className="bg-navy-800 rounded-lg p-4 md:p-6 border border-cyan-400/20"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <div className="bg-cyan-400/20 text-cyan-300 font-bold px-3 py-1 rounded text-sm">
                  Step {step.number}
                </div>
                <h4 className="text-lg font-semibold text-cyan-300">{step.title}</h4>
              </div>

              <p className="text-gray-300 mb-4">{step.description}</p>

              <div className="mb-4">
                <CodeSnippet
                  lang={lang}
                  code={step.code}
                  label={`${step.title} — Codice`}
                />
              </div>

              {step.fileReference && (
                <div className="mt-3 p-3 bg-navy-700/50 rounded border-l-2 border-cyan-400 text-sm text-gray-300">
                  <p className="font-mono text-xs text-cyan-300 mb-1">
                    📁 {step.fileReference.filename}
                    {step.fileReference.lines && ` (righe ${step.fileReference.lines})`}
                  </p>
                  <p>{step.fileReference.description}</p>
                </div>
              )}

              <div className="bg-blue-900/20 border-l-2 border-blue-400 pl-4 py-3">
                <p className="text-sm text-gray-300">
                  <strong>🎯 Prova:</strong> {step.tryThis}
                </p>
              </div>

              {step.modificationExample && (
                <div className="mt-6 bg-blue-900/10 rounded-lg p-6 border border-blue-400/20">
                  <p className="text-sm font-semibold text-blue-300 mb-4">
                    📝 MODIFICA ESEMPIO — Riga {step.modificationExample.lineNumber}
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                    {step.modificationExample.description}
                  </p>

                  <div className="space-y-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-2 font-mono">PRIMA:</p>
                      <CodeSnippet
                        lang={step.codeLang === 'sql' ? 'javascript' : (step.codeLang || 'python')}
                        code={step.modificationExample.before}
                        label="Originale"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 mb-2 font-mono">DOPO (Prova):</p>
                      <CodeSnippet
                        lang={step.codeLang === 'sql' ? 'javascript' : (step.codeLang || 'python')}
                        code={step.modificationExample.after}
                        label="Modificato"
                      />
                    </div>
                  </div>

                  <div className="bg-cyan-900/20 border-l-2 border-cyan-400 pl-4 py-3">
                    <p className="text-sm text-gray-300">
                      <strong>Risultato atteso:</strong> {step.modificationExample.expectedResult}
                    </p>
                  </div>
                </div>
              )}

            </div>
          );
        })}

      </div>

      {workflowCompleteSource && (
        <div className="mt-8 pt-6 border-t border-navy-700">
          <button
            onClick={() => setShowCompleteSource((v) => !v)}
            className="text-xs px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition mr-2"
          >
            {showCompleteSource ? 'Nascondi fonte lab' : 'Mostra fonte lab'}
          </button>
          {showCompleteSource && (
            <div className="mt-3 rounded-lg border border-navy-600 bg-navy-900/70 p-3">
              <textarea
                readOnly
                value={workflowCompleteSource}
                className="w-full min-h-[220px] bg-navy-950 text-gray-200 text-xs p-3 rounded-md border border-navy-700"
              />
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(workflowCompleteSource);
                  setCopiedComplete(true);
                  setTimeout(() => setCopiedComplete(false), 1500);
                }}
                className="mt-2 text-xs px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition"
              >
                {copiedComplete ? 'Copiato ✓' : 'Copia fonte lab'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
