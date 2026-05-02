'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { useFocusTrap } from './FocusTrap';
import { getTermById } from '@/data/glossary';

interface GlossaryDrawerProps {
  termId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GlossaryDrawer({ termId, open, onOpenChange }: GlossaryDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(drawerRef);

  const term = getTermById(termId);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!term) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content
          ref={drawerRef}
          className="fixed bottom-0 left-0 right-0 bg-navy-900 text-white max-h-[380px] overflow-y-auto z-[60] rounded-t-xl shadow-2xl border-t border-cyan-300/20 transform transition-transform duration-150 data-[state=open]:translate-y-0 data-[state=closed]:translate-y-full"
          onEscapeKeyDown={() => onOpenChange(false)}
        >
          <div className="sticky top-0 bg-navy-900 p-4 border-b border-cyan-300/20 flex justify-between items-center">
            <Dialog.Title className="text-lg font-bold">{term.term}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="text-cyan-300 hover:text-cyan-200 p-2 rounded focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label="Chiudi glossario"
              >
                ✕
              </button>
            </Dialog.Close>
          </div>

          <div className="p-4 prose prose-sm prose-invert max-w-none">
            <p>{term.definition}</p>

            {term.relatedTerms?.length ? (
              <>
                <h4>Termini correlati</h4>
                <ul>
                  {term.relatedTerms.map((relTermId) => {
                    const relTerm = getTermById(relTermId);
                    if (!relTerm) return null;

                    return (
                      <li key={relTermId}>
                        <Link href={`/glossario#${relTermId}`} className="text-cyan-300 hover:text-cyan-200">
                          {relTerm.term}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : null}

            <Link
              href={`/glossario#${termId}`}
              className="inline-block mt-4 px-4 py-2 bg-cyan-400 text-navy-900 rounded font-bold hover:bg-cyan-300 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              Full Definition →
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
