import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Layers, Target } from 'lucide-react';
import { RevealSection, StaggerContainer, StaggerItem, Card3D } from '../common/RevealSection';

interface StatCounterProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  icon?: any;
  tag?: string;
  isLast?: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  end,
  start = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  label,
  sublabel,
  icon: Icon,
  tag,
  isLast = false,
}) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * (end - start) + start));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, start, duration, hasAnimated]);

  return (
    <div 
      ref={ref} 
      className={`p-6 sm:p-8 flex flex-col justify-between text-left group relative transition-all duration-400 hover:bg-gold-medium/5 ${
        !isLast ? 'border-b lg:border-b-0 lg:border-r border-gold-medium/20' : ''
      }`}
    >
      {/* Top Header inside cell */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-gold-medium/15">
        {tag ? (
          <span className="text-[10px] font-sans tracking-[0.2em] text-gold-dark uppercase font-semibold">
            {tag}
          </span>
        ) : <span />}

        {Icon && (
          <div className="w-9 h-9 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-400 shadow-sm flex-shrink-0">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Big Gleaming Number */}
      <div className="my-2 flex items-baseline overflow-visible">
        <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-none text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-gold-dark to-gold-medium tracking-tight py-1 pr-3 inline-block select-none drop-shadow-sm">
          {prefix}{count.toLocaleString()}{suffix}
        </span>
      </div>

      {/* Labels */}
      <div className="mt-3 space-y-1">
        <div className="text-navy-dark text-xs sm:text-[13px] tracking-[0.14em] uppercase font-semibold font-sans group-hover:text-gold-dark transition-colors">
          {label}
        </div>
        {sublabel && (
          <div className="text-slate-600 text-[11px] sm:text-xs tracking-wide font-light">
            {sublabel}
          </div>
        )}
      </div>

      {/* Bottom Gold Accent Bar */}
      <div className="mt-5 pt-2.5 border-t border-gold-medium/15 flex items-center justify-between">
        <div className="w-8 h-[1.5px] bg-gradient-to-r from-gold-medium to-transparent group-hover:w-16 transition-all duration-400" />
        <span className="text-[9px] font-sans text-gold-dark/80 tracking-[0.2em] uppercase font-semibold">Verified</span>
      </div>
    </div>
  );
};

export const StatCountersSection: React.FC = () => {
  return (
    <section id="stat-counters" className="py-10 bg-gradient-to-b from-[#fbf8f2] via-[#f5ede0] to-[#fbf8f2] border-y border-gold-medium/25 px-4 sm:px-6 lg:px-8 relative z-20 shadow-md overflow-hidden font-sans text-navy-dark">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealSection type="slide-up">
          <Card3D depth={6} className="w-full">
            <div className="w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ffffff] via-[#fdf8f1] to-[#f6ebd9] border border-gold-medium/35 hover:border-gold-medium/60 shadow-xl relative overflow-hidden transition-all duration-500 text-navy-dark">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold-medium/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-bright/10 rounded-full blur-3xl pointer-events-none" />

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                <StaggerItem>
                  <StatCounter 
                    start={1950}
                    end={2016}
                    duration={2200}
                    tag="Founding Milestone"
                    icon={Award}
                    label="Established"
                    sublabel="Hospitality Excellence"
                  />
                </StaggerItem>
                <StaggerItem>
                  <StatCounter 
                    start={0}
                    end={25}
                    suffix="+"
                    duration={2000}
                    tag="Executive Acumen"
                    icon={Users}
                    label="Years Leadership"
                    sublabel="Combined Industry Experience"
                  />
                </StaggerItem>
                <StaggerItem>
                  <StatCounter 
                    start={0}
                    end={17}
                    suffix="+"
                    duration={2000}
                    tag="Full Capabilities"
                    icon={Layers}
                    label="Service Modules"
                    sublabel="TX & Midwest Regional Reach"
                  />
                </StaggerItem>
                <StaggerItem>
                  <StatCounter 
                    start={0}
                    end={100}
                    suffix="%"
                    duration={2400}
                    tag="Fiduciary Alignment"
                    icon={Target}
                    label="Owner-Aligned Performance"
                    sublabel="IHG • Choice • Wyndham • Boutique"
                    isLast={true}
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </Card3D>
        </RevealSection>
      </div>
    </section>
  );
};
