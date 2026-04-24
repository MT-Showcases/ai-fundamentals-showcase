import React from 'react';

interface DiscussionPromptProps {
  prompts: string[];
}

export default function DiscussionPrompt({ prompts }: DiscussionPromptProps) {
  return (
    <div className="bg-blue-900 p-6 rounded-lg border-2 border-cyan-400 mb-6">
      <h3 className="text-cyan-300 font-bold mb-4 flex items-center gap-2">
        💬 Discussione in Aula
      </h3>
      <ul className="space-y-3">
        {prompts.map((prompt, i) => (
          <li key={i} className="text-gray-300 flex gap-3">
            <span className="text-cyan-400">•</span>
            <span>{prompt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
