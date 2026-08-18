import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Check, Send, Phone, Mail, MapPin } from 'lucide-react';
import { RevealSection, FloatingOrbs } from '../common/RevealSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const CtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hotelName: '',
    location: '',
    roomCount: '',
    serviceInterest: '',
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
      email: '',
      phone: '',
      hotelName: '',
      location: '',
      roomCount: '',
      serviceInterest: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="cta-section" className="py-12 bg-[#faf4ea] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden font-sans text-navy-dark">
      <div className="absolute top-1/2 left-0 right-0 h-56 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none" />
      <FloatingOrbs />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <RevealSection type="fade-up" className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-10 bg-gold-medium/60" />
            <span className="text-xs font-semibold tracking-widest text-gold-dark uppercase font-sans">
              LET'S COLLABORATE
            </span>
            <span className="h-[1px] w-10 bg-gold-medium/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-navy-dark tracking-wide leading-tight">
            Partner With Las Colinas Hospitality
          </h2>

          <p className="font-sans text-slate-700 text-sm sm:text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your property's performance? Schedule a confidential management consultation or property evaluation with our executive team.
          </p>
        </RevealSection>

        {/* Form and Contact Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Advisory Checkpoints (5 Cols) */}
          <RevealSection type="fade-right" className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-white border border-gold-medium/30 shadow-md space-y-6">
              <h3 className="font-serif text-xl font-light text-navy-dark">
                Why Property Owners Choose Us:
              </h3>

              <div className="space-y-3.5">
                {[
                  'Direct principal-to-principal communication without corporate bureaucracy.',
                  'Transparent financial accounting with 24/7 owner portal reporting.',
                  'Deep regional vendor network driving 12-18% procurement cost savings.',
                  'Proven track record across select-service, extended-stay, and boutique hotels.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-gold-medium/20 border border-gold-medium/40 flex items-center justify-center text-gold-dark flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gold-medium/20 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Phone className="w-4 h-4 text-gold-dark flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-dark">Direct Phone: </span>
                    <a href="tel:214-729-9676" className="hover:text-gold-dark transition-colors font-mono">214-729-9676</a>
                    <span className="mx-1 text-slate-400">/</span>
                    <a href="tel:214-709-4231" className="hover:text-gold-dark transition-colors font-mono">214-709-4231</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Mail className="w-4 h-4 text-gold-dark flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-dark">Email: </span>
                    <a href="mailto:info@lascolinashospitality.com" className="hover:text-gold-dark transition-colors font-sans">
                      info@lascolinashospitality.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <MapPin className="w-4 h-4 text-gold-dark flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-dark">Corporate HQ: </span>
                    <span>Irving, Texas (Dallas-Fort Worth Metroplex)</span>
                  </div>
                </div>
              </div>
            </div>

          </RevealSection>

          {/* Right Column: Confidential Evaluation Request Form (7 Cols) */}
          <RevealSection type="fade-left" delay={0.15} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gold-medium/30 shadow-md">
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-gold-medium/20 border border-gold-medium/40 flex items-center justify-center text-gold-dark mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-light text-navy-dark">
                    Consultation Request Received
                  </h3>
                  
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A Las Colinas managing partner will review your asset details and respond within 24 business hours.
                  </p>

                  <Button
                    variant="gold"
                    onClick={handleReset}
                    className="mt-4 font-semibold text-xs tracking-wider"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="cta-name" className="text-xs font-semibold text-navy-dark uppercase tracking-wider">
                        Full Name *
                      </Label>
                      <Input
                        id="cta-name"
                        placeholder="e.g. John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#faf5eb] border-gold-medium/30 text-navy-dark text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="cta-email" className="text-xs font-semibold text-navy-dark uppercase tracking-wider">
                        Email Address *
                      </Label>
                      <Input
                        id="cta-email"
                        type="email"
                        placeholder="e.g. john@hotelgroup.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-[#faf5eb] border-gold-medium/30 text-navy-dark text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="cta-phone" className="text-xs font-semibold text-navy-dark uppercase tracking-wider">
                        Phone Number
                      </Label>
                      <Input
                        id="cta-phone"
                        placeholder="e.g. (214) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-[#faf5eb] border-gold-medium/30 text-navy-dark text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="cta-hotel" className="text-xs font-semibold text-navy-dark uppercase tracking-wider">
                        Hotel / Property Name
                      </Label>
                      <Input
                        id="cta-hotel"
                        placeholder="e.g. Comfort Suites or Independent"
                        value={formData.hotelName}
                        onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                        className="bg-[#faf5eb] border-gold-medium/30 text-navy-dark text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="cta-location" className="text-xs font-semibold text-navy-dark uppercase tracking-wider">
                        Property Location (City, State)
                      </Label>
                      <Input
                        id="cta-location"
                        placeholder="e.g. Dallas, TX"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-[#faf5eb] border-gold-medium/30 text-navy-dark text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="cta-rooms" className="text-xs font-semibold text-navy-dark uppercase tracking-wider">
                        Approximate Key Count (Rooms)
                      </Label>
                      <Input
                        id="cta-rooms"
                        placeholder="e.g. 110 keys"
                        value={formData.roomCount}
                        onChange={(e) => setFormData({ ...formData, roomCount: e.target.value })}
                        className="bg-[#faf5eb] border-gold-medium/30 text-navy-dark text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="cta-message" className="text-xs font-semibold text-navy-dark uppercase tracking-wider">
                      Management Requirements / Objectives
                    </Label>
                    <Textarea
                      id="cta-message"
                      rows={3}
                      placeholder="Tell us about your property, current challenges, brand affiliation, or transition timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-[#faf5eb] border-gold-medium/30 text-navy-dark text-xs sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold-luxury w-full py-4 rounded-lg text-xs font-bold tracking-[0.2em] uppercase shadow-lg inline-flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Request Confidential Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </RevealSection>

        </div>

      </div>
    </section>
  );
};
