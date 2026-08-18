import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

export interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'scale-up' | 'slide-up' | 'fade';
}

export const RevealSection: React.FC<RevealSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.7,
  type = 'fade-up' 
}) => {
  const getVariants = (): Variants => {
    const ease = [0.22, 1, 0.36, 1] as const;
    switch (type) {
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease } }
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease } }
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease } }
        };
      case 'zoom-in':
      case 'scale-up':
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay, ease } }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay, ease } }
        };
      case 'slide-up':
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease } }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  delayChildren = 0.08,
  staggerChildren = 0.09
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glare?: boolean;
  translateZ?: number;
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({ 
  children, 
  className = '', 
  glare = true,
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -3, scale: 1.015 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`relative ${className}`}
    >
      <div className="w-full h-full relative">
        {children}

        {glare && (
          <div
            className={`absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-30 bg-gradient-to-tr from-transparent via-gold-medium/10 to-transparent ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
    </motion.div>
  );
};

export const FloatingOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      <motion.div
        animate={{
          x: [0, 30, -25, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-8 w-[450px] h-[450px] bg-gradient-to-tr from-gold-medium/15 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-8 w-[450px] h-[450px] bg-gradient-to-bl from-gold-dark/15 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
};
