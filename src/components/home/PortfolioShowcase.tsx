import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Building2, ArrowRight } from 'lucide-react';
import { RevealSection, FloatingOrbs } from '../common/RevealSection';
import { portfolioProperties } from '../../data/portfolioData';

interface PortfolioShowcaseProps {
  onViewAll?: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onViewAll }) => {
  const portfolioCarouselRef = useRef<HTMLDivElement>(null);
  const [isPortfolioPaused, setIsPortfolioPaused] = useState(false);

  const scrollPortfolio = (direction: 'left' | 'right') => {
    if (portfolioCarouselRef.current) {
      const scrollAmount = 300;
      portfolioCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isPortfolioPaused) return;
    const interval = setInterval(() => {
      if (portfolioCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = portfolioCarouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          portfolioCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          portfolioCarouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPortfolioPaused]);

  return (
    <section id="portfolio-showcase" className="py-12 bg-[#fbf8f2] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden font-sans text-navy-dark">
      <div className="absolute top-1/2 left-0 right-0 h-56 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none" />
      <FloatingOrbs />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <RevealSection type="fade-up" className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-10 bg-gold-medium/60" />
            <span className="text-xs font-semibold tracking-widest text-gold-dark uppercase font-sans">
              FEATURED ASSETS
            </span>
            <span className="h-[1px] w-10 bg-gold-medium/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-navy-dark tracking-wide leading-tight">
            Our Growing Management Portfolio
          </h2>

          <p className="font-sans text-slate-700 text-sm sm:text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
            A diverse collection of full-service, select-service, extended-stay, and boutique properties managed with operational rigor.
          </p>
        </RevealSection>

        {/* Carousel Viewport with Indicator Controls */}
        <RevealSection type="slide-up" delay={0.1} className="relative px-2 sm:px-6">
          <div 
            onMouseEnter={() => setIsPortfolioPaused(true)}
            onMouseLeave={() => setIsPortfolioPaused(false)}
          >
            {/* Left Indicator Arrow */}
            <button
              onClick={() => scrollPortfolio('left')}
              aria-label="Previous Property"
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-medium/40 bg-white text-gold-dark hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Indicator Arrow */}
            <button
              onClick={() => scrollPortfolio('right')}
              aria-label="Next Property"
              className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-medium/40 bg-white text-gold-dark hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Single Line Carousel Track */}
            <div
              ref={portfolioCarouselRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {portfolioProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="w-[250px] sm:w-[280px] flex-shrink-0 snap-start flex flex-col"
                >
                  <div className="w-full bg-white border border-gold-medium/25 hover:border-gold-medium rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer">
                    
                    {/* Top Image Container */}
                    <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-[#eee5d3]">
                      <img
                        src={prop.image}
                        alt={prop.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-gold-medium/30 flex items-center gap-1.5 shadow-sm">
                        <Building2 className="w-3 h-3 text-gold-dark" />
                        <span className="text-[10px] font-sans font-semibold text-navy-dark tracking-wide uppercase">
                          {prop.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-3">
                      <div>
                        <h3 className="font-sans text-sm sm:text-base font-semibold text-navy-dark group-hover:text-gold-dark transition-colors line-clamp-1">
                          {prop.name}
                        </h3>
                        
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-light mt-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gold-dark flex-shrink-0" />
                          <span className="truncate">{prop.location}</span>
                        </div>
                      </div>

                      {/* Bottom Hairline */}
                      <div className="pt-2 border-t border-gold-medium/15 flex items-center justify-between">
                        <span className="text-[10px] font-sans tracking-widest text-gold-dark uppercase font-semibold">Managed Asset</span>
                        <div className="w-5 h-[1.5px] bg-gold-medium/50 group-hover:w-10 group-hover:bg-gold-dark transition-all duration-300" />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* View All Button */}
        <div className="text-center pt-2">
          <button
            onClick={onViewAll}
            className="btn-gold-luxury px-8 py-3.5 rounded-lg text-xs font-bold tracking-[0.18em] uppercase shadow-lg inline-flex items-center gap-3 cursor-pointer group"
          >
            <span>Explore Full Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
