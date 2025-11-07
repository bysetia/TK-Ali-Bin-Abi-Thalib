import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className || 'w-10 h-10'} // Default size
    >
      {/* Trunk */}
      <rect x="45" y="60" width="10" height="35" rx="5" fill="#A0522D" />
      
      {/* Canopy - a cloud of colorful circles */}
      <g>
        <circle cx="50" cy="30" r="20" fill="#34D399" />
        <circle cx="35" cy="45" r="18" fill="#FBBF24" />
        <circle cx="65" cy="45" r="18" fill="#60A5FA" />
        <circle cx="50" cy="55" r="15" fill="#F97316" />
      </g>
    </svg>
  );
};

export default Logo;
