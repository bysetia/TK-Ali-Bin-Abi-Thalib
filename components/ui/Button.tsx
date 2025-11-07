
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg focus:ring-orange-300',
    secondary: 'bg-sky-500 hover:bg-sky-600 text-white shadow-md focus:ring-sky-300',
    ghost: 'bg-transparent hover:bg-yellow-100 text-orange-600 border-2 border-orange-500 focus:ring-orange-200',
  };

  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
