import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, Phone, Mail, ArrowRight } from 'lucide-react';
import { RevealSection, FloatingOrbs } from '../common/RevealSection';

export const CtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    property: '',
    scope: 'Full Hotel Operations Management',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      property: '',
      scope: 'Full Hotel Operations Management',
      message: ''
    });
    setIsSubmitted(false);
  };

  const keyPoints = [
    'Fiduciary & Owner-First Alignment',
    'Dynamic Yield & RevPAR Growth',
    'Brand QA & Turnaround Execution',
    'Strategic Renovation & PIP Oversight'
  ];

  return (
    <section id="cta-section" className="py-16 sm:py-20 bg-[#faf4ea] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden font-sans text-navy-dark">
      {/* Subtle Radial Glow in background */}
      <div className="absolute top-1/2 left-0 right-0 h-64 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none" />
      <FloatingOrbs />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Partnership Advisory Narrative & Key Highlights (6 Cols) */}
          <RevealSection type="fade-right" className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold-medium/60" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase font-sans">
                PARTNERSHIP ADVISORY
              </span>
              <span className="h-[1px] w-8 bg-gold-medium/60" />
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-navy-dark tracking-tight leading-[1.18]">
                Transforming Hotel<br />
                Assets<br />
                <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-medium to-gold-bright">
                  Into Outperforming<br />
                  Investments.
                </span>
              </h2>
            </div>

            {/* Paragraph Text */}
            <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
              Whether acquiring a property, repositioning an existing asset, or seeking high-impact management, our leadership team delivers disciplined operational oversight, transparent financial reporting, and sustainable ROI.
            </p>

            {/* 4 Feature Checkpoints in 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-gold-medium/20 border border-gold-medium/45 flex items-center justify-center text-gold-dark flex-shrink-0 shadow-xs">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-[13px] text-navy-dark font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 border-t border-gold-medium/20 flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-navy-dark font-medium">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold-dark" />
                <a href="tel:2149520198" className="hover:text-gold-dark transition-colors font-mono">
                  +1 (214) 952-0198
                </a>
              </div>
              <span className="text-gold-medium font-bold">•</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gold-dark" />
                <a href="mailto:info@lchm.com" className="hover:text-gold-dark transition-colors">
                  info@lchm.com
                </a>
              </div>
              <span className="text-gold-medium font-bold">•</span>
              <span className="text-slate-600 font-normal">
                Dallas, Texas
              </span>
            </div>

          </RevealSection>

          {/* Right Column: White Card Form (6 Cols) */}
          <RevealSection type="fade-left" delay={0.12} className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gold-medium/25 shadow-xl relative">
              
              {/* Card Header with Shield Icon */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-gold-medium/15">
                <div className="w-10 h-10 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark flex-shrink-0 shadow-xs">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-navy-dark leading-tight">
                    Request a Management Consultation
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gold-dark font-medium mt-0.5 tracking-wide">
                    Confidential property evaluation &amp; tailored roadmap
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4 font-sans"
                >
                  <div className="w-12 h-12 rounded-full bg-gold-medium/20 border border-gold-medium/40 flex items-center justify-center text-gold-dark mx-auto">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  
                  <h4 className="font-serif text-xl font-medium text-navy-dark">
                    Consultation Request Received
                  </h4>
                  
                  <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you. Our executive team will review your property details and contact you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-gold-luxury px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider mt-2 cursor-pointer shadow-sm"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider text-navy-dark font-bold">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl bg-[#fbf8f2] border border-gold-medium/30 text-navy-dark text-xs placeholder:text-slate-400 focus:outline-none focus:border-gold-dark transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider text-navy-dark font-bold">
                        COMPANY / HOTEL GROUP
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Hospitality LLC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl bg-[#fbf8f2] border border-gold-medium/30 text-navy-dark text-xs placeholder:text-slate-400 focus:outline-none focus:border-gold-dark transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider text-navy-dark font-bold">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contact@ownership.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl bg-[#fbf8f2] border border-gold-medium/30 text-navy-dark text-xs placeholder:text-slate-400 focus:outline-none focus:border-gold-dark transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider text-navy-dark font-bold">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        placeholder="(214) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl bg-[#fbf8f2] border border-gold-medium/30 text-navy-dark text-xs placeholder:text-slate-400 focus:outline-none focus:border-gold-dark transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Property Name & Primary Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider text-navy-dark font-bold">
                        PROPERTY NAME / LOCATION
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Austin Boutique Hotel"
                        value={formData.property}
                        onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl bg-[#fbf8f2] border border-gold-medium/30 text-navy-dark text-xs placeholder:text-slate-400 focus:outline-none focus:border-gold-dark transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-wider text-navy-dark font-bold">
                        PRIMARY MANAGEMENT SCOPE
                      </label>
                      <select
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl bg-[#fbf8f2] border border-gold-medium/30 text-navy-dark text-xs focus:outline-none focus:border-gold-dark transition-colors cursor-pointer"
                      >
                        <option value="Full Hotel Operations Management">Full Hotel Operations Management</option>
                        <option value="Turnaround & Asset Repositioning">Turnaround & Asset Repositioning</option>
                        <option value="Revenue Optimization & OTA Yield">Revenue Optimization & OTA Yield</option>
                        <option value="Development & Brand PIP Oversight">Development & Brand PIP Oversight</option>
                        <option value="Custom Advisory Consulting">Custom Advisory Consulting</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Additional Notes */}
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider text-navy-dark font-bold">
                      ADDITIONAL NOTES / OBJECTIVES (OPTIONAL)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your property and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-[75px] px-3.5 py-2.5 rounded-xl bg-[#fbf8f2] border border-gold-medium/30 text-navy-dark text-xs placeholder:text-slate-400 focus:outline-none focus:border-gold-dark transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold-luxury w-full h-12 rounded-xl text-xs font-bold uppercase tracking-[0.16em] inline-flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50 transition-all"
                    >
                      {isSubmitting ? (
                        <span>Processing Consultation Request...</span>
                      ) : (
                        <>
                          <span>REQUEST PRIVATE CONSULTATION</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </RevealSection>

        </div>
      </div>
    </section>
  );
};
