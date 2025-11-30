import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded px-6 font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white shadow-lg focus:ring-primary-500 border border-transparent",
    secondary: "bg-secondary text-primary-900 hover:bg-yellow-400 focus:ring-yellow-400",
    white: "bg-white text-primary-500 hover:bg-gray-50 shadow-lg focus:ring-white",
    outline: "border border-white text-white hover:bg-white hover:text-primary-500 focus:ring-white",
    ghost: "text-gray-500 hover:text-primary-500 hover:bg-gray-100 focus:ring-gray-500"
  };

  const sizes = {
    sm: "py-2 text-sm",
    md: "py-3 text-base",
    lg: "py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};