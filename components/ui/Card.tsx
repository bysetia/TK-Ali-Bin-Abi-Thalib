import React from 'react';

// FIX: The Card component did not accept standard div attributes like `onClick`. This is fixed by extending React.HTMLAttributes and spreading the extra props onto the div.
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false, ...props }) => {
  const hoverClasses = hoverEffect ? 'transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2' : '';
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
