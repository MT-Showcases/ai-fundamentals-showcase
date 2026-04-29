'use client'

import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'
import { chapters } from '@/data/chapters'
import { chapterEmojis } from '@/data/chapterEmojis'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  const fuse = useMemo(
    () =>
      new Fuse(chapters, {
        keys: ['title', 'description', 'sections.title', 'sections.content', 'keyTakeaways'],
        threshold: 0.4,
        includeScore: true,
      }),
    []
  )

  const results = query.length >= 2 ? fuse.search(query).slice(0, 5) : []

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Input */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca un capitolo... (es. 'reti neurali', 'etica', 'GPT')"
          className="w-full bg-navy-800 border border-navy-600 text-white placeholder-gray-500 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-navy-800 border border-navy-600 rounded-xl overflow-hidden shadow-2xl z-50">
          {results.map(({ item }: { item: (typeof chapters)[number] }) => (
            <Link
              key={item.slug}
              href={`/chapters/${item.slug}`}
              onClick={() => setQuery('')}
              className="flex items-center gap-3 px-4 py-3 hover:bg-navy-700 transition-colors border-b border-navy-700 last:border-0"
            >
              <span className="text-xl">{chapterEmojis[item.id] ?? '📚'}</span>
              <div>
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-xs text-gray-400 truncate">{item.description}</p>
              </div>
              <span className="ml-auto text-xs text-cyan-400 font-mono">
                Cap. {String(item.id).padStart(2, '0')}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* No results */}
      {query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-navy-800 border border-navy-600 rounded-xl px-4 py-3 text-sm text-gray-400 shadow-2xl z-50">
          Nessun capitolo trovato per &quot;{query}&quot;
        </div>
      )}
    </div>
  )
}
