import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glossario AI — Termini Fondamentali',
  description:
    'Glossario interattivo con 70+ termini AI, Machine Learning, Deep Learning e NLP. Definizioni, sinonimi, esempi e link ai capitoli del corso.',
  alternates: { canonical: '/glossario' },
};

export default function GlossarioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
