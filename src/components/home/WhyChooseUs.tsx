import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FloatingOrbs } from '../common/RevealSection';
import { whyChooseHeadingsList } from '../../data/whyChooseData';

export const WhyChooseUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, 'change', (latest: number) => {
    const totalHeadings = whyChooseHeadingsList.length;
    const computedIndex = Math.min(
      Math.floor(latest * totalHeadings),
      totalHeadings - 1
    );
    if (computedIndex !== activeIndex && computedIndex >= 0) {
      setActiveIndex(computedIndex);
    }
  });

  const currentItem = whyChooseHeadingsList[activeIndex] || whyChooseHeadingsList[0];
  const Icon = currentItem.icon;

  return (
    <div ref={containerRef} className="relative h-[280vh]">
      {/* Sticky Responsive Viewport in Warm Luxury Beige */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-3 sm:px-6 md:px-8 text-center overflow-hidden z-10 pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-10 font-sans bg-[#faf5eb]">
        
        {/* Ambient Radial Golden Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[850px] h-[700px] sm:h-[850px] bg-[radial-gradient(circle,rgba(212,175,55,0.09)_0%,transparent_70%)] pointer-events-none" />
        <FloatingOrbs />

        <div className="w-full max-w-5xl flex flex-col items-center justify-between h-full max-h-[88vh] sm:max-h-[620px] relative z-10">
          
          {/* Header */}
          <div className="w-full space-y-2 flex-shrink-0 font-sans">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-medium/15 border border-gold-medium/35">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span className="text-xs font-normal tracking-[0.2em] text-gold-dark uppercase font-sans">
                WHY CHOOSE LAS COLINAS
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-navy-dark tracking-tight font-sans">
              They choose us because...
            </h2>
          </div>

          {/* Center Display with Smooth Transition & Clean Typography */}
          <div className="w-full flex-1 flex items-center justify-center relative my-auto py-2 font-sans">
            <div className="w-full min-h-[260px] sm:min-h-[290px] md:min-h-[310px] flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.number}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center px-4 w-full"
                >
                  {/* Meta Badge */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3 font-sans">
                    <span className="font-sans text-xs sm:text-sm font-normal text-gold-dark px-3.5 py-0.5 rounded-full bg-white border border-gold-medium/40">
                      Pillar {currentItem.number} of {whyChooseHeadingsList.length}
                    </span>
                    <span className="text-xs sm:text-sm font-sans tracking-widest text-gold-dark uppercase font-normal">
                      {currentItem.tag}
                    </span>
                  </div>

                  {/* Animated Icon Badge */}
                  <motion.div 
                    initial={{ scale: 0.88, rotate: -6 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center mb-3 sm:mb-4 text-gold-dark"
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold-dark" />
                  </motion.div>

                  {/* Heading with reduced font weight */}
                  <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-navy-dark tracking-tight leading-tight max-w-3xl mx-auto mb-3">
                    {currentItem.title}
                  </h3>

                  {/* Subtext */}
                  <p className="font-sans text-slate-600 text-sm sm:text-base md:text-lg font-light max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
                    {currentItem.subtext}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
