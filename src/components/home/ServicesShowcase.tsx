import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RevealSection, FloatingOrbs } from '../common/RevealSection';
import { alacarteServices } from '../../data/servicesData';

export const ServicesShowcase: React.FC = () => {
  const alacarteCarouselRef = useRef<HTMLDivElement>(null);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  const scrollAlacarte = (direction: 'left' | 'right') => {
    if (alacarteCarouselRef.current) {
      const scrollAmount = 300;
      alacarteCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isAutoPlayPaused) return;
    const interval = setInterval(() => {
      if (alacarteCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = alacarteCarouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          alacarteCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          alacarteCarouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlayPaused]);

  return (
    <section id="services-showcase" className="py-12 bg-[#f4ebe0] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden font-sans text-navy-dark">
      <div className="absolute top-1/2 left-0 right-0 h-56 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none" />
      <FloatingOrbs />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <RevealSection type="fade-up" className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-10 bg-gold-medium/60" />
            <span className="text-xs font-semibold tracking-widest text-gold-dark uppercase font-sans">
              OUR SERVICES
            </span>
            <span className="h-[1px] w-10 bg-gold-medium/60" />
          </div>
          
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-dark tracking-tight leading-tight">
            Comprehensive Hospitality Management Solutions
          </h2>
          
          <p className="font-sans text-slate-700 text-sm sm:text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
            End-to-end services designed to optimize operations, maximize revenue, and enhance the overall guest experience.
          </p>
        </RevealSection>

        {/* Carousel Viewport with Indicator Controls */}
        <RevealSection type="slide-up" delay={0.1} className="relative px-2 sm:px-6">
          <div 
            onMouseEnter={() => setIsAutoPlayPaused(true)}
            onMouseLeave={() => setIsAutoPlayPaused(false)}
          >
            {/* Left Indicator Arrow */}
            <button
              onClick={() => scrollAlacarte('left')}
              aria-label="Previous Slide"
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-medium/40 bg-white text-gold-dark hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Indicator Arrow */}
            <button
              onClick={() => scrollAlacarte('right')}
              aria-label="Next Slide"
              className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-medium/40 bg-white text-gold-dark hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Single Line Carousel Track */}
            <div
              ref={alacarteCarouselRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {alacarteServices.map((ala) => {
                const Icon = ala.icon;
                return (
                  <div
                    key={ala.id}
                    className="w-[260px] sm:w-[280px] flex-shrink-0 snap-start flex flex-col"
                  >
                    <div className="w-full h-[270px] sm:h-[285px] bg-white border border-gold-medium/25 hover:border-gold-medium rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col items-center text-center justify-between relative overflow-hidden group">
                      
                      {/* Top: Category Tag & Icon Badge */}
                      <div className="flex flex-col items-center w-full flex-shrink-0">
                        <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-gold-medium/15">
                          <span className="text-[11px] font-sans tracking-wider text-gold-dark uppercase font-semibold truncate">
                            {ala.categoryLabel}
                          </span>
                          <span className="text-xs font-sans text-gold-dark/80 font-bold ml-2">
                            #{ala.num}
                          </span>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center mb-3 text-gold-dark group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                          <Icon className="w-6 h-6 text-gold-dark group-hover:text-navy-dark transition-colors" />
                        </div>
                      </div>

                      {/* Center: Title & Description */}
                      <div className="flex flex-col items-center justify-center flex-1 w-full my-auto">
                        <h3 className="font-sans text-sm sm:text-base font-semibold text-navy-dark mb-2 leading-snug tracking-normal group-hover:text-gold-dark transition-colors text-center line-clamp-2 min-h-[2.6rem] sm:min-h-[2.8rem] flex items-center justify-center">
                          {ala.title}
                        </h3>

                        <p className="font-sans text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed text-center px-1 line-clamp-2">
                          {ala.desc}
                        </p>
                      </div>

                      {/* Bottom Gold Indicator */}
                      <div className="w-8 h-[1.5px] bg-gold-medium/40 group-hover:w-16 group-hover:bg-gold-dark transition-all duration-300 mt-3 flex-shrink-0" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealSection>

      </div>
    </section>
  );
};
