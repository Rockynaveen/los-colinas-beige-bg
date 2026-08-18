import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Handshake, ArrowRight } from 'lucide-react';
import { RevealSection, StaggerContainer, StaggerItem, FloatingOrbs } from '../common/RevealSection';

interface AboutTeaserProps {
  onLearnMore?: () => void;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ onLearnMore }) => {
  return (
    <section id="about-teaser" className="py-12 bg-[#faf4ea] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_0%_0%,rgba(212,175,55,0.08)_0%,transparent_65%)] pointer-events-none" />
      <FloatingOrbs />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Narrative & 2x2 Feature Grid */}
          <RevealSection type="fade-right" className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase font-sans">
                ABOUT LAS COLINAS HOSPITALITY
              </span>
              <span className="h-[1px] w-12 bg-gold-medium/60 inline-block" />
            </div>

            {/* Main Headline */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-navy-dark tracking-wide leading-tight">
                Elevating Hospitality.<br />
                <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-medium to-gold-bright">
                  Enhancing Experiences.
                </span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-gold-medium to-gold-bright rounded-full mt-4" />
            </div>

            {/* Narrative Text */}
            <div className="space-y-3.5 text-slate-700 font-normal text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Founded in 2016, Las Colinas Hospitality Management has earned a reputation for operational excellence, financial discipline, and strategic hotel management. Our experienced leadership team combines deep hospitality expertise with a hands-on approach to delivering measurable results for owners and investors.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm font-sans font-light">
                Whether developing a new hotel, repositioning an existing asset, or managing daily operations, we focus on maximizing profitability while delivering exceptional guest experiences.
              </p>
            </div>

            {/* 2x2 Features Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans">
              <StaggerItem>
                <motion.div whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl bg-white/80 border border-gold-medium/25 hover:border-gold-medium flex items-start gap-3.5 group cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center flex-shrink-0 text-gold-dark shadow-sm group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-navy-dark group-hover:text-gold-dark transition-colors tracking-wide">
                      Expertise
                    </h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5 leading-snug">
                      Decades of combined industry experience.
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl bg-white/80 border border-gold-medium/25 hover:border-gold-medium flex items-start gap-3.5 group cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center flex-shrink-0 text-gold-dark shadow-sm group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-navy-dark group-hover:text-gold-dark transition-colors tracking-wide">
                      Results Driven
                    </h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5 leading-snug">
                      Focused on performance and growth.
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl bg-white/80 border border-gold-medium/25 hover:border-gold-medium flex items-start gap-3.5 group cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center flex-shrink-0 text-gold-dark shadow-sm group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-navy-dark group-hover:text-gold-dark transition-colors tracking-wide">
                      Client Focused
                    </h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5 leading-snug">
                      Tailored solutions aligned with your goals.
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ y: -4, scale: 1.02 }} className="p-4 rounded-2xl bg-white/80 border border-gold-medium/25 hover:border-gold-medium flex items-start gap-3.5 group cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center flex-shrink-0 text-gold-dark shadow-sm group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-navy-dark group-hover:text-gold-dark transition-colors tracking-wide">
                      Integrity
                    </h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5 leading-snug">
                      Built on trust and long-term partnerships.
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>

            {/* Action Button: LEARN MORE */}
            <div className="pt-3 flex items-center gap-3">
              <button
                onClick={onLearnMore}
                className="btn-gold-luxury px-8 py-3.5 rounded-lg text-xs font-bold tracking-[0.18em] uppercase shadow-lg inline-flex items-center gap-3 cursor-pointer group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </RevealSection>

          {/* Right Column: 4-Image Collage Gallery */}
          <RevealSection type="scale-up" delay={0.15} className="lg:col-span-6 space-y-3.5">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="rounded-2xl overflow-hidden border border-gold-medium/30 shadow-xl relative group bg-[#f0e8db]"
            >
              <img
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2070&auto=format&fit=crop"
                alt="Grand Luxury Hotel Architecture and Excellence"
                className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <StaggerContainer className="grid grid-cols-3 gap-3.5">
              <StaggerItem>
                <motion.div 
                  whileHover={{ scale: 1.06, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="rounded-xl overflow-hidden border border-gold-medium/25 shadow-md group cursor-pointer bg-[#f0e8db]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
                    alt="Luxury Hotel King Suite"
                    className="w-full h-[105px] sm:h-[135px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  whileHover={{ scale: 1.06, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="rounded-xl overflow-hidden border border-gold-medium/25 shadow-md group cursor-pointer bg-[#f0e8db]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1970&auto=format&fit=crop"
                    alt="Executive Hotel Management & Strategic Partnerships"
                    className="w-full h-[105px] sm:h-[135px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  whileHover={{ scale: 1.06, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="rounded-xl overflow-hidden border border-gold-medium/25 shadow-md group cursor-pointer bg-[#f0e8db]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop"
                    alt="Luxury Sunset Resort & Infinity Pool"
                    className="w-full h-[105px] sm:h-[135px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </RevealSection>

        </div>
      </div>
    </section>
  );
};
