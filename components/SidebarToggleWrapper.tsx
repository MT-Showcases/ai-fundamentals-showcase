'use client';

import React, { useState } from 'react';
import ChapterSidebar from '@/components/ChapterSidebar';

interface SidebarToggleWrapperProps {
  currentSlug: string;
}

function getInitialSidebarVisible(): boolean {
  if (typeof window === 'undefined') return true;
  const saved = localStorage.getItem('sidebarVisible');
  return saved === null ? true : saved === 'true';
}

export default function SidebarToggleWrapper({ currentSlug }: SidebarToggleWrapperProps) {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(getInitialSidebarVisible);

  const toggle = () => {
    const next = !sidebarVisible;
    setSidebarVisible(next);
    localStorage.setItem('sidebarVisible', String(next));
  };

  return (
    <>
      {/* Sidebar container */}
      <div
        className={`w-0 overflow-visible flex-shrink-0 transition-all duration-300 ${
          sidebarVisible ? 'md:w-64 lg:w-72' : 'md:w-0'
        }`}
      >
        <ChapterSidebar currentSlug={currentSlug} />
      </div>

      {/* Toggle button — desktop only, sticky */}
      <div className="hidden md:block flex-shrink-0 sticky top-8 self-start">
        <button
          onClick={toggle}
          className="flex items-center justify-center w-5 h-5 mt-1 text-gray-500 hover:text-cyan-400 transition-colors duration-200"
          title={sidebarVisible ? 'Nascondi sidebar' : 'Mostra sidebar'}
          aria-label={sidebarVisible ? 'Nascondi sidebar' : 'Mostra sidebar'}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {sidebarVisible ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M18 19l-7-7 7-7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M6 5l7 7-7 7" />
            )}
          </svg>
        </button>
      </div>
    </>
  );
}
