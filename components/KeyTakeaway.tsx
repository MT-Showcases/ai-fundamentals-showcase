import React from 'react';

interface KeyTakeawayProps {
  items: string[];
}

export default function KeyTakeaway({ items }: KeyTakeawayProps) {
  return (
    <div className="border-l-4 border-yellow-400 bg-blue-800 p-6 rounded-lg mb-6">
      <h3 className="text-yellow-400 font-bold mb-4 flex items-center gap-2">
        🎯 Punti Chiave
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-gray-200 flex gap-3">
            <span className="text-yellow-400">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
