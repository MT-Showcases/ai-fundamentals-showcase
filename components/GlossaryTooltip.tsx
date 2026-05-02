'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { getTermById, type GlossaryTerm } from '@/data/glossary';

interface GlossaryTooltipProps {
  termId: string;
  children: React.ReactNode;
}

export default function GlossaryTooltip({ termId, children }: GlossaryTooltipProps) {
  const term: GlossaryTerm | undefined = getTermById(termId);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Compute position to avoid viewport overflow
  const computePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceAbove = rect.top;
    setPosition(spaceAbove > 180 ? 'top' : 'bottom');
  }, []);

  const show = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    computePosition();
    setVisible(true);
  }, [computePosition]);

  const hide = useCallback(() => {
    hideTimer.current = setTimeout(() => setVisible(false), 120);
  }, []);

  const keepOpen = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  }, []);

  // Close on outside click or Escape
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false);
    };
    const onClick = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [visible]);

  if (!term) {
    // Render children without tooltip if term not found
    return <>{children}</>;
  }

  const categoryColors: Record<string, string> = {
    AI: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
    ML: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    'Deep Learning': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    NLP: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    Generativa: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
    Etica: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    Dati: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    Prodotto: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
  };

  const catColor = categoryColors[term.category] ?? 'bg-gray-500/20 text-gray-300 border-gray-500/40';

  return (
    <span className="relative inline" ref={triggerRef}>
      {/* Trigger — underlined term */}
      <span
        className={[
          'cursor-help border-b border-dashed border-cyan-400/60 text-cyan-200',
          'hover:border-cyan-300 hover:text-cyan-100 transition-colors duration-150',
          'focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded-sm',
        ].join(' ')}
        tabIndex={0}
        role="button"
        aria-expanded={visible}
        aria-describedby={visible ? `tooltip-${termId}` : undefined}
        // Desktop: hover
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        // Mobile: tap to toggle
        onClick={(e) => {
          e.stopPropagation();
          if (visible) { setVisible(false); } else { show(); }
        }}
      >
        {children}
      </span>

      {/* Tooltip popup */}
      {visible && (
        <div
          id={`tooltip-${termId}`}
          role="tooltip"
          ref={tooltipRef}
          onMouseEnter={keepOpen}
          onMouseLeave={hide}
          className={[
            'absolute z-50 left-1/2 -translate-x-1/2',
            position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
            'w-72 sm:w-80',
            'bg-navy-900 border border-blue-500/40 rounded-xl shadow-xl shadow-black/40',
            'p-4 text-sm',
            // Animate in
            'animate-in fade-in zoom-in-95 duration-150',
          ].join(' ')}
          style={{ maxWidth: 'min(320px, calc(100vw - 2rem))' }}
        >
          {/* Arrow */}
          <span
            className={[
              'absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45',
              'bg-navy-900 border border-blue-500/40',
              position === 'top'
                ? 'top-full -mt-1.5 border-t-0 border-l-0'
                : 'bottom-full -mb-1.5 border-b-0 border-r-0',
            ].join(' ')}
            aria-hidden="true"
          />

          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="font-bold text-white text-sm leading-tight">{term.term}</span>
            <span
              className={`shrink-0 text-xs px-1.5 py-0.5 rounded-full border font-medium ${catColor}`}
            >
              {term.category}
            </span>
          </div>

          {/* Short definition */}
          <p className="text-gray-300 text-xs leading-relaxed mb-3">{term.shortDef}</p>

          {/* Learn more */}
          <Link
            href={`/glossario#${termId}`}
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors"
            onClick={() => setVisible(false)}
          >
            Scopri di più
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )}
    </span>
  );
}
