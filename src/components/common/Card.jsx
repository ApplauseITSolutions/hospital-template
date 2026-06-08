import React from 'react';

const Card = ({
  children,
  className = '',
  onClick,
  hoverable = true,
  glass = false
}) => {
  const baseClasses = 'rounded-3xl border border-slate-100 bg-white p-6 transition-all duration-500 shadow-premium';
  const hoverClasses = hoverable ? 'hover:-translate-y-1.5 hover:shadow-premium-hover hover:border-primary-100' : '';
  const glassClasses = glass ? 'glassmorphism' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses} ${glassClasses} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {children}
    </div>
  );
};

export default Card;
