"use client";

import { useState } from 'react';
import type { MediaPlaceholder } from '@/data/chapters';

interface Props {
  chapterId: number;
  chapterSlug: string;
  sectionIndex: number;
  sectionTitle: string;
  sectionContent: string;
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

export default function SectionMediaSlots({ chapterId, chapterSlug, sectionIndex, sectionTitle, sectionContent, media }: Props) {
  const baseSlots = defaultSectionMedia(chapterId, chapterSlug, sectionIndex, sectionTitle);
  const slotMap = new Map(baseSlots.map((s) => [s.type, s]));
  (media ?? []).forEach((m) => slotMap.set(m.type, { ...slotMap.get(m.type), ...m } as MediaPlaceholder));
  const slots = Array.from(slotMap.values()).filter((s) => s.type === 'infographic');
  const [active, setActive] = useState<MediaPlaceholder | null>(null);
  const [showSource, setShowSource] = useState(false);
  const [copied, setCopied] = useState(false);

  const isReady = (slot: MediaPlaceholder) => slot.notes?.toLowerCase().includes('ready');

  const sourceText = `CAPITOLO ${String(chapterId).padStart(2, '0')} — ${chapterSlug}\nSEZIONE ${sectionIndex + 1}: ${sectionTitle}\n\nCONTESTO:\n${sectionContent}\n\nOBIETTIVO:\nGenera un contenuto didattico chiaro, pratico, startup-friendly basato SOLO su questo contesto.\n\nOUTPUT RICHIESTI (scegline uno):\n1) Script video 60-120s\n2) Testo infografica (titolo + 5 bullet + 1 warning + 1 takeaway)\n3) Voiceover breve.\n\nVINCOLI:\n- Linguaggio semplice\n- Niente allucinazioni\n- Coerenza con il contesto fornito`;
  return (
    <>
      <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  className="w-full h-64 md:h-72 object-contain rounded-md hover:opacity-90 transition bg-black/20"
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

      <div className="mb-8">
        <button
          onClick={() => setShowSource((v) => !v)}
          className="text-xs px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition mr-2"
        >
          {showSource ? 'Nascondi fonte sezione' : 'Mostra fonte sezione'}
        </button>
        {showSource && (
          <div className="mt-2 rounded-lg border border-navy-600 bg-navy-900/70 p-3">
            <textarea
              readOnly
              value={sourceText}
              className="w-full min-h-[180px] bg-navy-950 text-gray-200 text-xs p-3 rounded-md border border-navy-700"
            />
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(sourceText);
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
