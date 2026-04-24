import React from 'react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-300 mb-6">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span className="text-gray-500">/</span>}
          {item.href ? (
            <a href={item.href} className="text-cyan-400 hover:text-cyan-300 transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-200">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
