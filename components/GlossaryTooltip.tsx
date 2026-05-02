'use client';

import React, { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';
import { getTermById } from '@/data/glossary';
import GlossaryDrawer from './GlossaryDrawer';

interface GlossaryTooltipProps {
  termId: string;
  children: React.ReactNode;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);

    onChange();
    media.addEventListener('change', onChange);

    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export default function GlossaryTooltip({ termId, children }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const tooltipId = useId();

  const term = getTermById(termId);

  if (!term) return <>{children}</>;

  if (isMobile) {
    return (
      <>
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="inline cursor-pointer text-cyan-300 underline decoration-dashed underline-offset-4 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded transition-colors duration-150 word-break-keep-all"
          aria-label={`Apri definizione di ${term.term}`}
        >
          {children}
        </button>

        <GlossaryDrawer termId={termId} open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
      </>
    );
  }

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="inline cursor-help text-cyan-300 underline decoration-dashed underline-offset-4 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded transition-colors duration-150 hover:text-cyan-200 word-break-keep-all"
          aria-describedby={tooltipId}
        >
          {children}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          id={tooltipId}
          role="tooltip"
          sideOffset={10}
          className="bg-navy-900 text-cyan-100 p-4 rounded-lg shadow-lg border border-cyan-300/20 max-w-sm z-[60] transition-all duration-150"
        >
          <div className="prose prose-sm prose-invert max-w-none">
            <p>{term.shortDef || term.definition}</p>
            <Link href={`/glossario#${term.id}`} className="text-cyan-300 hover:text-cyan-200">
              Learn more →
            </Link>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
