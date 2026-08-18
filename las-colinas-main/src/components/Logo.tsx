import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'navy';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'navy', 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-16',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-36',
  };

  const logoSrc = (variant === 'light') 
    ? '/images/las-colinas-logo-white.png' 
    : '/images/las-colinas-logo-dark.png';

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={logoSrc}
        alt="Las Colinas Hospitality Management"
        className={`${sizeClasses[size]} w-auto object-contain select-none transition-transform duration-300`}
      />
    </div>
  );
};
