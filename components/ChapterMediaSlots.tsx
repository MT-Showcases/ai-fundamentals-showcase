"use client";

import { useState } from 'react';
import type { Chapter, MediaPlaceholder } from '@/data/chapters';

interface Props {
  chapter: Chapter;
}

const defaultSlots = (chapter: Chapter): MediaPlaceholder[] => {
  const base = `media/ch${String(chapter.id).padStart(2, '0')}-${chapter.slug}`;
  return [
    {
      type: 'video',
      title: 'Video Lesson',
      description: 'Spiegazione visuale del capitolo (8-12 min) con esempi pratici.',
      estimatedDuration: '8-12 min',
      placeholderPath: `${base}/video.mp4`,
      notes: 'placeholder'
    },
    {
      type: 'podcast',
      title: 'Podcast Deep Dive',
      description: 'Versione audio con casi reali, errori comuni e takeaway operativi.',
      estimatedDuration: '10-15 min',
      placeholderPath: `${base}/podcast.mp3`,
      notes: 'placeholder'
    },
    {
      type: 'infographic',
      title: 'Infografica',
      description: 'Sintesi visuale: 5 punti chiave, 1 warning, 1 mini framework.',
      placeholderPath: `${base}/infographic.png`,
      notes: 'placeholder'
    },
    {
      type: 'resource',
      title: 'Asset/Dispensa',
      description: 'Materiale scaricabile per studio e esercitazione guidata.',
      placeholderPath: `${base}/handout.pdf`,
      notes: 'placeholder'
    }
  ];
};

const badgeByType: Record<MediaPlaceholder['type'], string> = {
  video: '🎬 Video',
  podcast: '🎙️ Podcast',
  infographic: '🖼️ Infografica',
  resource: '📄 Risorsa'
};

export default function ChapterMediaSlots({ chapter }: Props) {
  const slots = chapter.media && chapter.media.length > 0 ? chapter.media : defaultSlots(chapter);
  const [active, setActive] = useState<MediaPlaceholder | null>(null);
  const isReady = (slot: MediaPlaceholder) => slot.notes?.toLowerCase().includes('ready');
  const readyCount = slots.filter(isReady).length;

  return (
    <>
      <section className="mb-12 rounded-xl border border-blue-700 bg-blue-900/40 p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-cyan-300 font-bold text-xl">Media del Capitolo</h3>
          {readyCount === slots.length ? (
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">Completo</span>
          ) : (
            <span className="text-xs px-2 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">{readyCount}/{slots.length} pronti</span>
          )}
        </div>
        <p className="text-gray-300 text-sm mb-5">
          Gli slot con media reale non sono più placeholder; gli altri restano placeholder finché non carichiamo i file.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slots.map((slot, idx) => (
            <div key={`${slot.type}-${idx}`} className="rounded-lg border border-navy-600 bg-navy-900/70 p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-cyan-200 font-semibold">{badgeByType[slot.type]}</h4>
                {isReady(slot) ? (
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">Ready</span>
                ) : (
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">Placeholder</span>
                )}
              </div>

              {isReady(slot) && slot.type === 'infographic' ? (
                <button onClick={() => setActive(slot)} className="block w-full text-left">
                  <img
                    src={`/${slot.placeholderPath}`}
                    alt={slot.title}
                    className="w-full h-48 object-cover rounded-md border border-navy-600 hover:opacity-90 transition"
                    loading="lazy"
                  />
                </button>
              ) : isReady(slot) && slot.type === 'video' ? (
                <video
                  src={`/${slot.placeholderPath}`}
                  controls
                  className="w-full h-48 object-cover rounded-md border border-navy-600 bg-black cursor-pointer"
                  onClick={() => setActive(slot)}
                />
              ) : (
                <>
                  <p className="text-gray-300 text-sm mb-2">{slot.description}</p>
                  {slot.estimatedDuration && (
                    <p className="text-xs text-gray-400 mb-1">Durata target: {slot.estimatedDuration}</p>
                  )}
                  <p className="text-xs text-blue-300 font-mono break-all mb-1">Path previsto: {slot.placeholderPath}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[120] bg-black/80 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-navy-900 border border-navy-600 rounded-xl p-3" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute top-2 right-2 text-white/80 hover:text-white text-sm px-2 py-1"
            >
              ✕ Chiudi
            </button>
            <div className="pt-8">
              {active.type === 'infographic' ? (
                <img src={`/${active.placeholderPath}`} alt={active.title} className="w-full h-auto max-h-[78vh] object-contain" />
              ) : (
                <video src={`/${active.placeholderPath}`} controls className="w-full max-h-[78vh] bg-black rounded" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
