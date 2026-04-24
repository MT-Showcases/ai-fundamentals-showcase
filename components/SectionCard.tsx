import React from 'react';

interface SectionCardProps {
  title: string;
  content: string;
}

export default function SectionCard({ title, content }: SectionCardProps) {
  return (
    <section className="bg-blue-900 p-6 rounded-lg mb-6 border border-blue-700">
      <h2 className="text-2xl font-bold text-cyan-300 mb-4">{title}</h2>
      <p className="text-gray-300 leading-relaxed">{content}</p>
    </section>
  );
}
