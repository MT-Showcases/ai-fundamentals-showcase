import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block active:scale-95';
  
  const variants = {
    primary: 'bg-blue-400 text-white hover:bg-cyan-300 hover:text-navy-900 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/40',
    secondary: 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30',
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
}
