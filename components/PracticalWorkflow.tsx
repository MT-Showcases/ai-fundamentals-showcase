'use client';

import Button from '@/components/Button';
import CodeSnippet from '@/components/CodeSnippet';

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  code: string;
  codeLang?: 'python' | 'javascript' | 'sql' | 'json' | 'bash';
  tryThis: string;
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
}

export default function PracticalWorkflow({
  title,
  intro,
  downloadLinks,
  steps,
}: PracticalWorkflowProps) {
  return (
    <div className="bg-navy-900 border border-cyan-400/20 rounded-xl p-8 mb-8">
      <h3 className="text-2xl font-bold text-cyan-300 mb-2">{title}</h3>
      {intro && <p className="text-gray-300 mb-6">{intro}</p>}

      <div className="bg-navy-800 rounded-lg p-6 mb-8 border border-blue-400/30">
        <p className="text-sm text-gray-400 mb-4">📥 Scarica risorse:</p>
        <div className="flex flex-wrap gap-3">
          {downloadLinks.map((link, idx) => (
            <a key={idx} href={link.url} download className="inline-block">
              <Button variant="primary" className="px-4 py-2 min-h-0 text-sm">
                {link.icon === 'zip' ? '📦' : link.icon === 'pdf' ? '📄' : '⬇️'} {link.label}
              </Button>
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {steps.map((step) => {
          const lang = step.codeLang === 'sql' ? 'javascript' : (step.codeLang || 'python');

          return (
            <div
              key={step.number}
              className="bg-navy-800 rounded-lg p-6 border border-cyan-400/20"
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

              <div className="bg-blue-900/20 border-l-2 border-blue-400 pl-4 py-3">
                <p className="text-sm text-gray-300">
                  <strong>🎯 Prova:</strong> {step.tryThis}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
