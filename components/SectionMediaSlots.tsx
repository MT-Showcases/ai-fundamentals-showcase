import type { MediaPlaceholder } from '@/data/chapters';

interface Props {
  chapterId: number;
  chapterSlug: string;
  sectionIndex: number;
  sectionTitle: string;
  media?: MediaPlaceholder[];
}

function defaultSectionMedia(chapterId: number, chapterSlug: string, sectionIndex: number, sectionTitle: string): MediaPlaceholder[] {
  const sec = `sec-${String(sectionIndex + 1).padStart(2, '0')}`;
  const base = `media/ch${String(chapterId).padStart(2, '0')}-${chapterSlug}/${sec}`;

  return [
    {
      type: 'video',
      title: `Mini video — ${sectionTitle}`,
      description: 'Clip breve per chiarire il concetto appena letto.',
      estimatedDuration: '1-3 min',
      placeholderPath: `${base}/video.mp4`,
      notes: 'Formato short verticale o landscape, focus su 1 concetto.'
    },
    {
      type: 'infographic',
      title: `Visual recap — ${sectionTitle}`,
      description: 'Mini infografica con schema e parole chiave della sezione.',
      placeholderPath: `${base}/infographic.png`,
      notes: 'Formato consigliato PNG 1080x1350 o 1080x1920.'
    }
  ];
}

const badgeByType: Record<MediaPlaceholder['type'], string> = {
  video: '🎬 Video',
  podcast: '🎙️ Podcast',
  infographic: '🖼️ Infografica',
  resource: '📄 Risorsa'
};

export default function SectionMediaSlots({ chapterId, chapterSlug, sectionIndex, sectionTitle, media }: Props) {
  const slots = media && media.length > 0 ? media : defaultSectionMedia(chapterId, chapterSlug, sectionIndex, sectionTitle);

  return (
    <div className="mb-8 rounded-xl border border-navy-600 bg-navy-800/40 p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-cyan-300 font-semibold text-sm">Media sezione {sectionIndex + 1} — {sectionTitle}</h4>
        <span className="text-xs px-2 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">Coming soon</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {slots.map((slot, idx) => (
          <div key={`${slot.type}-${idx}`} className="rounded-lg border border-navy-600 bg-navy-900/70 p-3">
            <p className="text-cyan-200 text-sm font-medium mb-1">{badgeByType[slot.type]} — {slot.title}</p>
            <p className="text-xs text-gray-300 mb-1">{slot.description}</p>
            {slot.estimatedDuration && <p className="text-xs text-gray-400">Durata target: {slot.estimatedDuration}</p>}
            <p className="text-xs text-blue-300 font-mono break-all mt-1">{slot.placeholderPath}</p>

            {slot.type === 'infographic' && slot.notes?.toLowerCase().includes('ready') && (
              <div className="mt-3 rounded-md overflow-hidden border border-navy-600">
                <img
                  src={`/${slot.placeholderPath}`}
                  alt={slot.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
