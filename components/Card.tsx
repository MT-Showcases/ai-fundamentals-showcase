import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-blue-900 border border-blue-700 rounded-xl p-6 shadow-lg hover:border-cyan-400 transition-colors ${className}`}>
      {children}
    </div>
  );
}
