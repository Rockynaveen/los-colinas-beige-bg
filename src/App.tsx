import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, type PageId } from './components/Navigation';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (target: PageId | string) => {
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const sectionMap: Record<string, string> = {
      'about': 'about-teaser',
      'about-overview': 'about-teaser',
      'about-story': 'about-teaser',
      'about-vision': 'about-teaser',
      'about-values': 'why-choose-us',
      'about-advantage': 'why-choose-us',
      'about-goals': 'why-choose-us',
      'services': 'services-showcase',
      'portfolio': 'portfolio-showcase',
      'team': 'team-showcase',
      'careers': 'team-showcase',
      'contact': 'cta-section',
    };
    const targetId = sectionMap[target] || target;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf8f2] text-navy-dark antialiased font-sans select-text">
      {/* Sticky Header Navigation */}
      <Navigation />

      {/* Main Page Area */}
      <main className="flex-grow">
        <Home setActivePage={handleNavigation} />
      </main>

      {/* Reusable Luxury Beige Footer */}
      <Footer onNavigate={handleNavigation} onScrollToTop={scrollToTop} />

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3.5 rounded-full bg-gold-medium text-navy-dark shadow-xl z-50 focus:outline-none cursor-pointer flex items-center justify-center border border-gold-bright"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
