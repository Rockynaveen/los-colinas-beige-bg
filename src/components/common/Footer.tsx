import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { type PageId } from '../Navigation';

interface FooterProps {
  onNavigate: (pageId: PageId) => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollToTop }) => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#fbf8f2] via-[#faf4ea] to-[#f4ede0] border-t border-gold-medium/30 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-navy-dark relative overflow-hidden font-sans">
      
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.10)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto space-y-12 relative z-10"
      >
        
        {/* Main 3-Column Open Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Column 1: Brand (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={() => onNavigate('home')} 
              className="cursor-pointer inline-block"
            >
              <img
                src="/images/las-colinas-logo-dark.png"
                alt="Las Colinas Hospitality Management"
                className="h-16 sm:h-20 w-auto object-contain select-none"
              />
            </motion.div>

            <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed max-w-md">
              We provide personalized service over corporate bureaucracy with disciplined financial and operational acumen. Dedicated to owner ROI and asset appreciation across branded and boutique properties.
            </p>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase pb-2 border-b border-gold-medium/30">
              Quick Links
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about-overview', label: 'About Us' },
                { id: 'services', label: 'Our Services' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'team', label: 'Leadership & Team' },
                { id: 'careers', label: 'Careers' },
                { id: 'contact', label: 'Contact Ownership' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate(link.id as PageId)} 
                    className="hover:text-gold-dark transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <span className="text-gold-medium group-hover:text-gold-dark font-bold">·</span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Headquarters & Contact (4 Cols) */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-xs font-bold tracking-[0.25em] text-gold-dark uppercase pb-2 border-b border-gold-medium/30">
              Corporate Office
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-normal">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                <span>
                  545 E John Carpenter Fwy, Suite 300<br />
                  Irving, TX 75062
                </span>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1 font-semibold text-navy-dark">
                  <a href="tel:214-729-9676" className="hover:text-gold-dark transition-colors font-mono">214-729-9676</a>
                  <a href="tel:214-709-4231" className="hover:text-gold-dark transition-colors font-mono">214-709-4231</a>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold-dark flex-shrink-0" />
                <a 
                  href="mailto:info@lascolinasmanagement.com" 
                  className="hover:text-gold-dark transition-colors underline decoration-gold-medium/60 underline-offset-4 font-semibold text-navy-dark"
                >
                  info@lascolinasmanagement.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-gold-medium/25 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-normal gap-3 text-center sm:text-left">
          <span>&copy; 2026 Las Colinas Hospitality Management LLC. All Rights Reserved.</span>
          <div className="flex items-center gap-4 text-[11px] text-slate-600">
            <a href="#" className="hover:text-gold-dark transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-dark transition-colors">Terms of Service</a>
            <span>•</span>
            <button onClick={onScrollToTop} className="hover:text-gold-dark transition-colors cursor-pointer font-semibold">
              Back to Top ↑
            </button>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};
