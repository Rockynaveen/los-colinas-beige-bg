import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { RevealSection, FloatingOrbs } from '../common/RevealSection';
import { teamMembersData } from '../../data/teamData';

interface TeamShowcaseProps {
  onMeetTeam?: () => void;
}

export const TeamShowcase: React.FC<TeamShowcaseProps> = ({ onMeetTeam }) => {
  const teamCarouselRef = useRef<HTMLDivElement>(null);

  const scrollTeam = (direction: 'left' | 'right') => {
    if (teamCarouselRef.current) {
      const scrollAmount = 260;
      teamCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team-showcase" className="py-12 bg-[#faf4ea] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden font-sans text-navy-dark">
      <div className="absolute top-1/2 left-0 right-0 h-56 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none" />
      <FloatingOrbs />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Narrative (5 Cols) */}
          <RevealSection type="fade-right" className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase font-sans">
                LEADERSHIP & PEOPLE
              </span>
              <span className="h-[1px] w-12 bg-gold-medium/60 inline-block" />
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-navy-dark tracking-wide leading-tight">
                Experienced Leadership.<br />
                <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-medium to-gold-bright">
                  Dedicated Teams.
                </span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-gold-medium to-gold-bright rounded-full mt-4" />
            </div>

            <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
              Our seasoned corporate leaders and dedicated on-property teams bring decades of specialized experience across hotel operations, revenue management, finance, and guest service.
            </p>

            {/* Meet the Team Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onMeetTeam}
                className="btn-gold-luxury px-7 py-3 rounded-lg text-xs font-bold tracking-[0.16em] uppercase shadow-lg inline-flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Meet Full Leadership</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </RevealSection>

          {/* Right Column: Carousel Track with Indicator Arrows (7 Cols) */}
          <RevealSection type="fade-left" delay={0.15} className="lg:col-span-7 relative">
            
            {/* Nav Arrows */}
            <div className="flex items-center justify-end gap-2 mb-4 pr-2">
              <button
                onClick={() => scrollTeam('left')}
                aria-label="Previous Team Member"
                className="w-9 h-9 rounded-full border border-gold-medium/40 bg-white text-gold-dark hover:bg-gold-medium hover:text-navy-dark transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTeam('right')}
                aria-label="Next Team Member"
                className="w-9 h-9 rounded-full border border-gold-medium/40 bg-white text-gold-dark hover:bg-gold-medium hover:text-navy-dark transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-105"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Carousel Container */}
            <div
              ref={teamCarouselRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {teamMembersData.map((member) => (
                <div
                  key={member.id}
                  className="w-[200px] sm:w-[230px] flex-shrink-0 snap-start"
                >
                  <div className="bg-white border border-gold-medium/25 hover:border-gold-medium rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer">
                    
                    {/* Headshot */}
                    <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#eee5d3]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] tracking-wider uppercase font-semibold text-gold-bright block truncate">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="p-3.5 sm:p-4 text-center space-y-1">
                      <h4 className="font-sans text-sm font-semibold text-navy-dark group-hover:text-gold-dark transition-colors truncate">
                        {member.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-light truncate">
                        {member.specialty}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </RevealSection>

        </div>
      </div>
    </section>
  );
};
