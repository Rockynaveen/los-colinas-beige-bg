import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Lightbulb, Handshake, Leaf, Star } from 'lucide-react';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'scale-up' | 'slide-up' | 'fade';
}

const RevealSection: React.FC<RevealSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.7,
  type = 'fade-up' 
}) => {
  const getVariants = () => {
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
      case 'scale-up':
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.94 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay, ease } }
        };
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

const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { delayChildren: 0.08, staggerChildren: 0.09 }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => (
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

export const MissionVisionSection: React.FC = () => {
  return (
    <section id="vision-mission" className="py-12 bg-gradient-to-b from-[#faf4eb] via-[#f4ede0] to-[#faf4eb] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden text-navy-dark">
      {/* Center Illuminated Golden Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(212,175,55,0.09)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <RevealSection type="fade-up" className="max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gold-medium/60" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase font-sans">
              OUR PURPOSE
            </span>
            <span className="h-[1px] w-12 bg-gold-medium/60" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-navy-dark tracking-wide">
            Mission & Vision
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm font-normal tracking-wide">
            Delivering excellence today. Inspiring tomorrow.
          </p>
        </RevealSection>

        {/* Central 3-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Flank: MISSION */}
          <RevealSection type="fade-right" delay={0.1} className="lg:col-span-4 flex flex-col items-center text-center space-y-4 px-4">
            <motion.div 
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-full border-2 border-gold-medium bg-white flex items-center justify-center text-gold-dark shadow-lg shadow-gold-medium/15 cursor-pointer"
            >
              <Target className="w-6 h-6 text-gold-dark" />
            </motion.div>

            <div className="flex items-center justify-center gap-3 w-full">
              <span className="h-[1px] bg-gold-medium/40 flex-1 hidden sm:block" />
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-gold-dark uppercase">
                MISSION
              </h3>
              <span className="h-[1px] bg-gold-medium/40 flex-1 hidden sm:block" />
            </div>

            <p className="text-slate-700 font-normal text-xs sm:text-sm leading-relaxed max-w-sm">
              To deliver exceptional hospitality management services that drive operational excellence, maximize value, and create memorable experiences for our guests and stakeholders.
            </p>
          </RevealSection>

          {/* Center Focal: Grand Circular Image Portal with Orbiting Rings */}
          <RevealSection type="scale-up" delay={0.15} className="lg:col-span-4 flex justify-center items-center py-4">
            <div className="relative w-64 h-64 sm:w-76 sm:h-76 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-gold-medium/50 scale-105 pointer-events-none" 
              />
              
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                className="absolute inset-3 rounded-full border border-gold-dark/40 pointer-events-none shadow-xl shadow-gold-medium/20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gold-bright absolute -top-1 left-1/2 -translate-x-1/2 shadow-md shadow-gold-bright" />
                <div className="w-2 rounded-full bg-gold-medium absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-sm shadow-gold-medium" />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-gold-medium shadow-2xl relative group cursor-pointer bg-[#ede3d2]"
              >
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                  alt="Grand Luxury Hotel Atrium & Chandelier Lounge"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </RevealSection>

          {/* Right Flank: VISION */}
          <RevealSection type="fade-left" delay={0.1} className="lg:col-span-4 flex flex-col items-center text-center space-y-4 px-4">
            <motion.div 
              whileHover={{ scale: 1.15, rotate: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-full border-2 border-gold-medium bg-white flex items-center justify-center text-gold-dark shadow-lg shadow-gold-medium/15 cursor-pointer"
            >
              <Eye className="w-6 h-6 text-gold-dark" />
            </motion.div>

            <div className="flex items-center justify-center gap-3 w-full">
              <span className="h-[1px] bg-gold-medium/40 flex-1 hidden sm:block" />
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-gold-dark uppercase">
                VISION
              </h3>
              <span className="h-[1px] bg-gold-medium/40 flex-1 hidden sm:block" />
            </div>

            <p className="text-slate-700 font-normal text-xs sm:text-sm leading-relaxed max-w-sm">
              To be the most trusted and innovative hospitality management partner, recognized for transforming properties, inspiring teams, and shaping the future of hospitality.
            </p>
          </RevealSection>

        </div>

        {/* Bottom 5 Value Pillars */}
        <div className="pt-10 border-t border-gold-medium/20">
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-5xl mx-auto">
            
            {/* 1. Integrity */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-sm">
                  <Shield className="w-5 h-5 text-gold-dark group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-semibold text-navy-dark group-hover:text-gold-dark tracking-wider transition-colors">
                  Integrity
                </span>
              </motion.div>
            </StaggerItem>

            {/* 2. Innovation */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-sm">
                  <Lightbulb className="w-5 h-5 text-gold-dark group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-semibold text-navy-dark group-hover:text-gold-dark tracking-wider transition-colors">
                  Innovation
                </span>
              </motion.div>
            </StaggerItem>

            {/* 3. Collaboration */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-sm">
                  <Handshake className="w-5 h-5 text-gold-dark group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-semibold text-navy-dark group-hover:text-gold-dark tracking-wider transition-colors">
                  Collaboration
                </span>
              </motion.div>
            </StaggerItem>

            {/* 4. Sustainability */}
            <StaggerItem>
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-sm">
                  <Leaf className="w-5 h-5 text-gold-dark group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-semibold text-navy-dark group-hover:text-gold-dark tracking-wider transition-colors">
                  Sustainability
                </span>
              </motion.div>
            </StaggerItem>

            {/* 5. Excellence */}
            <StaggerItem className="col-span-2 sm:col-span-1">
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-sm">
                  <Star className="w-5 h-5 text-gold-dark group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-semibold text-navy-dark group-hover:text-gold-dark tracking-wider transition-colors">
                  Excellence
                </span>
              </motion.div>
            </StaggerItem>

          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};
