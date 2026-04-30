"use client";

import { useState } from 'react';
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
      type: 'infographic',
      title: `Visual recap — ${sectionTitle}`,
      description: 'Mini infografica con schema e parole chiave della sezione.',
      placeholderPath: `${base}/infographic.png`,
      notes: 'placeholder'
    }
  ];
}

export default function SectionMediaSlots({ chapterId, chapterSlug, sectionIndex, sectionTitle, media }: Props) {
  const baseSlots = defaultSectionMedia(chapterId, chapterSlug, sectionIndex, sectionTitle);
  const slotMap = new Map(baseSlots.map((s) => [s.type, s]));
  (media ?? []).forEach((m) => slotMap.set(m.type, { ...slotMap.get(m.type), ...m } as MediaPlaceholder));
  const slots = Array.from(slotMap.values()).filter((s) => s.type === 'infographic');
  const [active, setActive] = useState<MediaPlaceholder | null>(null);

  const isReady = (slot: MediaPlaceholder) => slot.notes?.toLowerCase().includes('ready');

  return (
    <>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
        {slots.map((slot, idx) => (
          <div
            key={`${slot.type}-${idx}`}
            className={
              isReady(slot)
                ? 'rounded-lg p-0'
                : 'rounded-lg border border-navy-600 bg-navy-900/70 p-3'
            }
          >
            {isReady(slot) ? (
              <button onClick={() => setActive(slot)} className="block w-full text-left">
                <img
                  src={`/${slot.placeholderPath}`}
                  alt={slot.title}
                  className="w-full h-44 object-cover rounded-md hover:opacity-90 transition"
                  loading="lazy"
                />
              </button>
            ) : (
              <>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-cyan-200 text-sm font-medium">🖼️ Infografica</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">In arrivo</span>
                </div>
                <p className="text-xs text-gray-300 mb-1">{slot.description}</p>
                <p className="text-xs text-blue-300 font-mono break-all mt-1">{slot.placeholderPath}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 text-white/90 hover:text-white text-lg px-3 py-1.5 z-[121]"
          >
            ✕
          </button>

          <div className="w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img src={`/${active.placeholderPath}`} alt={active.title} className="w-full h-auto max-h-[90vh] object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
