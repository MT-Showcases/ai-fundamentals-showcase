'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { chapters } from '@/data/chapters';

interface ChapterSidebarProps {
  currentSlug: string;
}

export default function ChapterSidebar({ currentSlug }: ChapterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentIndex = chapters.findIndex((ch) => ch.slug === currentSlug);

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Lock body scroll on mobile when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus close button for accessibility
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* ─── Mobile hamburger button — fixed top-right, hidden on md+ ─── */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 right-4 z-50 bg-[#0a1628] border border-cyan-700 text-cyan-300 p-2 rounded-lg shadow-lg hover:bg-navy-700 hover:text-cyan-100 hover:border-cyan-400 active:scale-95 transition-all duration-200"
        aria-label="Apri menu capitoli"
        aria-expanded={isOpen}
        aria-controls="chapter-sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* ─── Overlay — mobile only, fades in/out ─── */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ─── Sidebar panel ─── */}
      {/*
        Mobile:  fixed, slides in from left (translate), z-50
        Desktop: sticky top-8, in-flow (translate always 0), no shadow
      */}
      <aside
        id="chapter-sidebar"
        className={`
          fixed md:sticky
          top-0 left-0
          h-screen md:h-auto md:top-8
          w-72 md:w-full
          bg-[#0a1628]
          border-r border-cyan-900 md:border md:border-navy-600
          md:rounded-xl
          overflow-y-auto
          z-50 md:z-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          shadow-2xl md:shadow-none
          flex-shrink-0
        `}
        aria-label="Navigazione capitoli"
      >
        {/* ─── Sidebar header ─── */}
        <div className="sticky top-0 bg-[#0a1628] border-b border-cyan-900 px-4 py-4 z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-cyan-500 uppercase tracking-wider font-semibold mb-0.5">
                AI Fundamentals
              </p>
              <h2 className="text-sm font-bold text-white">Tutti i Capitoli</h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-cyan-400 font-mono">{currentIndex + 1}/15</span>

              {/* Close button — visible on mobile only */}
              <button
                ref={closeButtonRef}
                onClick={() => setIsOpen(false)}
                className="md:hidden text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors duration-150"
                aria-label="Chiudi menu capitoli"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-2 h-1 bg-navy-700 rounded-full overflow-hidden">
            <div
              className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / 15) * 100}%` }}
            />
          </div>
        </div>

        {/* ─── Chapter list ─── */}
        <nav className="py-2" aria-label="Lista capitoli">
          {chapters.map((chapter, idx) => {
            const isActive = chapter.slug === currentSlug;
            const isPast = idx < currentIndex;

            return (
              <Link
                key={chapter.slug}
                href={`/chapters/${chapter.slug}`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  flex items-start gap-3 px-4 py-3 text-sm transition-all duration-150 group
                  ${
                    isActive
                      ? 'bg-cyan-500/15 border-l-2 border-cyan-400 text-cyan-300'
                      : isPast
                      ? 'border-l-2 border-transparent text-gray-400 hover:bg-white/5 hover:text-gray-200 hover:border-cyan-700'
                      : 'border-l-2 border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300 hover:border-cyan-800'
                  }
                `}
              >
                {/* Chapter number badge */}
                <span
                  className={`
                    flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5
                    ${
                      isActive
                        ? 'bg-cyan-400 text-navy-900'
                        : isPast
                        ? 'bg-blue-800 text-blue-300'
                        : 'bg-navy-700 text-gray-500'
                    }
                  `}
                >
                  {String(chapter.id).padStart(2, '0')}
                </span>
                <span className="leading-snug line-clamp-2">{chapter.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom padding for scroll */}
        <div className="h-8" />
      </aside>
    </>
  );
}
