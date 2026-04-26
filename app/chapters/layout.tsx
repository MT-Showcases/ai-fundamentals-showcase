'use client';

import { chapters } from '@/data/chapters';
import Link from 'next/link';
import { useState } from 'react';

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-900 text-white flex">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-navy-800 border-r border-blue-700 fixed lg:static h-screen overflow-y-auto transition-transform z-40 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="p-6">
          <Link href="/" className="text-cyan-300 hover:text-cyan-200 font-bold mb-6 block">
            ← Torna alla Home
          </Link>
          <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4">Capitoli</h3>
          <ul className="space-y-2">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  href={`/chapters/${chapter.slug}`}
                  className="block px-3 py-2 rounded hover:bg-blue-800 text-sm text-gray-300 hover:text-cyan-300 transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="text-cyan-300 font-bold mr-2">{chapter.id}</span>
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-navy-800 border-b border-blue-700 p-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-cyan-400 hover:text-cyan-300"
          >
            ☰ Menu
          </button>
          <span className="text-sm text-gray-400">Naviga capitoli</span>
        </div>

        {/* Content Area */}
        <div className="p-6 lg:p-12 max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
