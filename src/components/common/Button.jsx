import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // primary, secondary, outline, text, white
  size = 'md', // sm, md, lg
  className = '',
  disabled = false,
  icon,
  iconPosition = 'left'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-premium hover:shadow-premium-hover focus:ring-primary-500',
    secondary: 'bg-teal-600 hover:bg-teal-700 text-white shadow-premium hover:shadow-premium-hover focus:ring-teal-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    text: 'text-primary-600 hover:text-primary-700 focus:ring-primary-500 bg-transparent px-0 py-0',
    white: 'bg-white hover:bg-slate-50 text-primary-700 shadow-premium hover:shadow-premium-hover focus:ring-primary-500'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
