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
  const slotsRaw = chapter.media && chapter.media.length > 0 ? chapter.media : defaultSlots(chapter);
  // UX choice: hide resource cards until a real downloadable asset exists
  const slots = slotsRaw.filter((slot) => !(slot.type === 'resource' && !slot.notes?.toLowerCase().includes('ready')));
  const [active, setActive] = useState<MediaPlaceholder | null>(null);
  const [showSource, setShowSource] = useState(false);
  const [copied, setCopied] = useState(false);
  const isReady = (slot: MediaPlaceholder) => slot.notes?.toLowerCase().includes('ready');
  const readyCount = slots.filter(isReady).length;

  const chapterSourceText = `CAPITOLO ${String(chapter.id).padStart(2, '0')} — ${chapter.title}\nSLUG: ${chapter.slug}\n\nDESCRIZIONE:\n${chapter.description}\n\nSEZIONI:\n${chapter.sections.map((s, i) => `${i + 1}) ${s.title}\n${s.content}`).join('\n\n')}\n\nPUNTI CHIAVE:\n- ${chapter.keyTakeaways.join('\n- ')}${chapter.labNote ? `\n\nLABORATORIO PRATICO:\n${chapter.labNote}` : ''}\n\nOBIETTIVO:\nGenera contenuti media coerenti con il capitolo (video completo / podcast / infografica) senza inventare concetti esterni al contesto.`;
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
        <p className="text-gray-300 text-sm mb-3">
          Gli slot con media reale non sono più placeholder; gli altri restano placeholder finché non carichiamo i file.
        </p>

        <div className="mb-4">
          <button
            onClick={() => setShowSource((v) => !v)}
            className="text-xs px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition mr-2"
          >
            {showSource ? 'Nascondi fonte capitolo' : 'Mostra fonte capitolo'}
          </button>
          {showSource && (
            <div className="mt-2 rounded-lg border border-navy-600 bg-navy-900/70 p-3">
              <textarea
                readOnly
                value={chapterSourceText}
                className="w-full min-h-[220px] bg-navy-950 text-gray-200 text-xs p-3 rounded-md border border-navy-700"
              />
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(chapterSourceText);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className="mt-2 text-xs px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition"
              >
                {copied ? 'Copiato ✓' : 'Copia fonte capitolo'}
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slots.map((slot, idx) => (
            <div
              key={`${slot.type}-${idx}`}
              className={
                isReady(slot)
                  ? 'rounded-lg p-0'
                  : 'rounded-lg border border-navy-600 bg-navy-900/70 p-4'
              }
            >
              {isReady(slot) && slot.type === 'infographic' ? (
                <button onClick={() => setActive(slot)} className="block w-full text-left cursor-pointer" style={{ cursor: 'pointer' }}>
                  <img
                    src={`/${slot.placeholderPath}`}
                    alt={slot.title}
                    className="w-full h-72 object-contain rounded-md hover:opacity-90 transition bg-black/20 cursor-pointer"
                    loading="lazy"
                  />
                </button>
              ) : isReady(slot) && slot.type === 'video' ? (
                <button onClick={() => setActive(slot)} className="relative block w-full text-left cursor-pointer" style={{ cursor: 'pointer' }}>
                  <video
                    src={`/${slot.placeholderPath}`}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-72 object-contain rounded-md bg-black pointer-events-none"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white/90 text-xs bg-black/20">
                    ▶ Apri video
                  </span>
                </button>
              ) : isReady(slot) && slot.type === 'podcast' ? (
                <div className="rounded-lg bg-navy-900/70 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-cyan-200 font-semibold">🎙️ Podcast</h4>
                  </div>
                  <audio src={`/${slot.placeholderPath}`} controls className="w-full" preload="none" />
                </div>
              ) : isReady(slot) && slot.type === 'resource' ? (
                <div className="rounded-lg bg-navy-900/70 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-cyan-200 font-semibold">📄 Risorsa</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">Ready</span>
                  </div>
                  <a href={`/${slot.placeholderPath}`} target="_blank" rel="noreferrer" className="text-cyan-300 text-sm underline">
                    Apri risorsa
                  </a>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-cyan-200 font-semibold">{badgeByType[slot.type]}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">In arrivo</span>
                  </div>
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
        <div className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 text-white/90 hover:text-white text-lg px-3 py-1.5 z-[121]"
          >
            ✕
          </button>

          <div className="w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {active.type === 'infographic' ? (
              <img src={`/${active.placeholderPath}`} alt={active.title} className="w-full h-auto max-h-[90vh] object-contain" />
            ) : (
              <video
                src={`/${active.placeholderPath}`}
                controls
                playsInline
                preload="metadata"
                className="w-full max-h-[90vh] bg-black"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
