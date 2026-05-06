import RichContent from './RichContent';

interface SectionCardProps {
  title: string;
  content: string;
  enableGlossary?: boolean;
  glossaryTermIds?: string[];
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


export default function SectionCard({ title, content, enableGlossary = false, glossaryTermIds }: SectionCardProps) {
  return (
    <section className="bg-blue-900 p-6 rounded-lg mb-6 border border-blue-700">
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
        <span>{getSectionIcon(title)}</span>
        <span>{title}</span>
      </h2>
      <RichContent content={content} enableGlossary={enableGlossary} glossaryTermIds={glossaryTermIds} />
    </section>
  );
}
