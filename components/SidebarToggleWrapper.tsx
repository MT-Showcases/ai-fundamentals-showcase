'use client';

import React, { useState, useEffect } from 'react';
import ChapterSidebar from '@/components/ChapterSidebar';

interface SidebarToggleWrapperProps {
  currentSlug: string;
}

export default function SidebarToggleWrapper({ currentSlug }: SidebarToggleWrapperProps) {
  const [sidebarVisible, setSidebarVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('sidebarVisible');
    setSidebarVisible(saved === null ? true : saved === 'true');
  }, []);

  const toggle = () => {
    const next = !sidebarVisible;
    setSidebarVisible(next);
    localStorage.setItem('sidebarVisible', String(next));
  };

  // Avoid layout shift during hydration
  const visible = sidebarVisible !== false;

  return (
    <>
      {/* Sidebar container */}
      <div
        className={`w-0 overflow-visible flex-shrink-0 transition-all duration-300 ${
          visible ? 'md:w-64 lg:w-72' : 'md:w-0'
        }`}
      >
        <ChapterSidebar currentSlug={currentSlug} />
      </div>

      {/* Toggle button — desktop only */}
      <button
        onClick={toggle}
        className="hidden md:flex items-center justify-center w-5 h-5 mt-3 flex-shrink-0 text-gray-500 hover:text-cyan-400 transition-colors duration-200"
        title={visible ? 'Nascondi sidebar' : 'Mostra sidebar'}
        aria-label={visible ? 'Nascondi sidebar' : 'Mostra sidebar'}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {visible ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M18 19l-7-7 7-7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M6 5l7 7-7 7" />
          )}
        </svg>
      </button>
    </>
  );
}
