import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { RevealSection, StaggerContainer, StaggerItem, FloatingOrbs } from '../common/RevealSection';
import { hotelManagementServicesList, departmentPillars } from '../../data/servicesData';

interface HotelManagementProps {
  onLearnMore?: () => void;
}

export const HotelManagement: React.FC<HotelManagementProps> = ({ onLearnMore }) => {
  return (
    <section id="hotel-management" className="py-12 bg-[#f4ebe0] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden font-sans text-navy-dark">
      <div className="absolute top-1/2 left-0 right-0 h-56 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none" />
      <FloatingOrbs />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <RevealSection type="fade-up" className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-10 bg-gold-medium/60" />
            <span className="text-xs font-semibold tracking-widest text-gold-dark uppercase font-sans">
              CORE CAPABILITIES
            </span>
            <span className="h-[1px] w-10 bg-gold-medium/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-navy-dark tracking-wide leading-tight">
            Hotel Management Services
          </h2>

          <p className="font-sans text-slate-700 text-sm sm:text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
            Full-service management solutions tailored for branded, independent, and boutique hotels across all operational departments.
          </p>
        </RevealSection>

        {/* 2-Column Split: Services Matrix & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Management Checklist & Pillars */}
          <RevealSection type="fade-right" className="lg:col-span-6 space-y-6">
            
            {/* Department Pillars Badge Matrix */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-gold-dark uppercase tracking-wider block">
                Departments We Oversee:
              </span>
              <div className="flex flex-wrap gap-2">
                {departmentPillars.map((dept, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white border border-gold-medium/30 text-xs font-medium text-navy-dark shadow-sm"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </div>

            {/* 8-Point Service Matrix */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {hotelManagementServicesList.map((service, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gold-medium/20 shadow-sm hover:border-gold-medium/50 transition-all">
                    <div className="w-6 h-6 rounded-full bg-gold-medium/20 border border-gold-medium/40 flex items-center justify-center text-gold-dark flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-navy-dark">
                      {service}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="btn-gold-luxury px-8 py-3.5 rounded-lg text-xs font-bold tracking-[0.18em] uppercase shadow-lg inline-flex items-center gap-3 cursor-pointer group"
              >
                <span>Explore Management Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </RevealSection>

          {/* Right Column: Hotel Experience & Quality Assurance */}
          <RevealSection type="fade-left" delay={0.15} className="lg:col-span-6 space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="rounded-2xl overflow-hidden border border-gold-medium/30 shadow-xl relative group bg-[#f0e8db]"
            >
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Hotel Lobby and Front Desk Operations"
                className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quality Assurance Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gold-medium/30 shadow-lg flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-medium/20 border border-gold-medium/40 flex items-center justify-center text-gold-dark flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-semibold text-navy-dark">
                    Rigorous Quality Audits
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-light mt-0.5">
                    Unannounced inspections & continuous QA monitoring.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Executive Quote Box with Normal Font */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gold-medium/30 shadow-md">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-gold-medium/40" />
                <span className="text-[11px] font-sans tracking-widest uppercase text-gold-dark font-semibold">Executive Commitment</span>
                <span className="w-6 h-[1px] bg-gold-medium/40" />
              </div>
              <p className="font-sans text-sm sm:text-base text-navy-dark font-medium leading-relaxed text-center">
                "Delivering operational rigor, seamless guest satisfaction, and bottom-line owner returns across branded and independent assets."
              </p>
            </div>

          </RevealSection>

        </div>

      </div>
    </section>
  );
};
