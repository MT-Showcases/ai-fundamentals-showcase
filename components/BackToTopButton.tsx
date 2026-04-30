"use client";

import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-cyan-500 text-navy-950 font-semibold shadow-lg hover:bg-cyan-400 transition"
      style={{ cursor: 'pointer' }}
      aria-label="Torna su"
      title="Torna su"
    >
      ↑ Torna su
    </button>
  );
}
