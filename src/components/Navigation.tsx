import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export type PageId =
  | 'home'
  | 'about-overview'
  | 'about-story'
  | 'about-vision'
  | 'about-values'
  | 'about-advantage'
  | 'about-goals'
  | 'services'
  | 'portfolio'
  | 'team'
  | 'careers'
  | 'contact';

interface NavigationProps {
  activePage?: PageId;
  setActivePage?: (page: PageId) => void;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  // Monitor scroll to apply sticky navbar styles and track active on-page section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section based on scroll position (bottom to top)
      const sections = [
        { id: 'cta-section', name: 'contact' },
        { id: 'hotel-management', name: 'services' },
        { id: 'team-showcase', name: 'careers' },
        { id: 'portfolio-showcase', name: 'portfolio' },
        { id: 'why-choose-us', name: 'about' },
        { id: 'services-showcase', name: 'services' },
        { id: 'about-teaser', name: 'about' },
      ];

      const scrollPos = window.scrollY + 200;
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = section.name;
          break;
        }
      }

      if (window.scrollY < 200) {
        currentSection = 'home';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId | 'about') => {
    setIsMobileOpen(false);

    if (pageId === 'home') {
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

    const targetId = sectionMap[pageId];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const aboutSubpages = [
    { id: 'about-overview', label: 'Company Overview' },
    { id: 'about-story', label: 'Our Story' },
    { id: 'about-vision', label: 'Vision & Mission' },
    { id: 'about-values', label: 'Core Values' },
    { id: 'about-advantage', label: 'Our Advantage' },
    { id: 'about-goals', label: 'Future Goals' }
  ] as const;

  const isAboutActive = activeSection === 'about';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[#fbf8f2]/95 backdrop-blur-xl  border-b border-gold-medium/25 shadow-[0_10px_35px_-5px_rgba(161,125,26,0.07)]'
          : 'bg-[#fbf8f2]/85 backdrop-blur-md border-b border-gold-medium/15 shadow-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left filling header height */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex-shrink-0 cursor-pointer flex items-center justify-center group py-1"
          >
            <img
              src="/images/las-colinas-logo-dark.png"
              alt="Las Colinas Hospitality Management"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-sm"
            />
          </div>

          {/* Desktop Nav Items with Luxury Dropdown & Buttons */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer relative ${activeSection === 'home'
                  ? 'text-gold-dark font-bold'
                  : 'text-navy-dark/80 hover:text-gold-dark'
                }`}
            >
              <span>Home</span>
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-medium to-gold-bright rounded-full" />
              )}
            </button>

            {/* About (Shadcn DropdownMenu) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer outline-none relative ${isAboutActive
                      ? 'text-gold-dark font-bold'
                      : 'text-navy-dark/80 hover:text-gold-dark'
                    }`}
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 text-gold-dark" />
                  {isAboutActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-medium to-gold-bright rounded-full" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-60 bg-white/95 backdrop-blur-xl border border-gold-medium/30 p-2 shadow-2xl rounded-xl">
                {aboutSubpages.map((sub) => (
                  <DropdownMenuItem
                    key={sub.id}
                    onClick={() => handleNavClick(sub.id)}
                    className="cursor-pointer py-2.5 px-3 text-xs tracking-wider uppercase font-semibold text-navy-dark hover:bg-gold-medium/10 hover:text-gold-dark rounded-lg transition-colors"
                  >
                    {sub.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services */}
            <button
              onClick={() => handleNavClick('services')}
              className={`px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer relative ${activeSection === 'services'
                  ? 'text-gold-dark font-bold'
                  : 'text-navy-dark/80 hover:text-gold-dark'
                }`}
            >
              <span>Services</span>
              {activeSection === 'services' && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-medium to-gold-bright rounded-full" />
              )}
            </button>

            {/* Portfolio */}
            <button
              onClick={() => handleNavClick('portfolio')}
              className={`px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer relative ${activeSection === 'portfolio'
                  ? 'text-gold-dark font-bold'
                  : 'text-navy-dark/80 hover:text-gold-dark'
                }`}
            >
              <span>Portfolio</span>
              {activeSection === 'portfolio' && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-medium to-gold-bright rounded-full" />
              )}
            </button>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer relative ${activeSection === 'careers'
                  ? 'text-gold-dark font-bold'
                  : 'text-navy-dark/80 hover:text-gold-dark'
                }`}
            >
              <span>Careers</span>
              {activeSection === 'careers' && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-medium to-gold-bright rounded-full" />
              )}
            </button>

            {/* Partner With Us Button */}
            <div className="ml-5">
              <button
                onClick={() => handleNavClick('contact')}
                className="btn-gold-luxury px-6 py-2.5 rounded-lg text-xs cursor-pointer inline-flex items-center justify-center font-bold tracking-[0.15em]"
              >
                Partner With Us
              </button>
            </div>
          </div>

          {/* Mobile Sheet Drawer */}
          <div className="lg:hidden">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gold-dark hover:bg-gold-medium/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between bg-[#fbf8f2] border-gold-medium/30">
                <div>
                  <SheetHeader className="mb-6">
                    <SheetTitle className="text-left">
                      <img
                        src="/images/las-colinas-logo-dark.png"
                        alt="Las Colinas Hospitality Management"
                        className="h-10 w-auto object-contain"
                      />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="space-y-3">
                    <button
                      onClick={() => handleNavClick('home')}
                      className={`block w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/20 ${activeSection === 'home' ? 'text-gold-dark font-bold' : 'text-navy-dark'
                        }`}
                    >
                      Home
                    </button>

                    <div>
                      <button
                        onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                        className={`flex items-center justify-between w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/20 ${isAboutActive ? 'text-gold-dark font-bold' : 'text-navy-dark'
                          }`}
                      >
                        <span>About Us</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180 text-gold-dark' : 'text-navy-dark'}`} />
                      </button>

                      {isMobileAboutOpen && (
                        <div className="pl-4 py-2 space-y-2 bg-[#f4ede0] rounded-lg mt-1 border border-gold-medium/20">
                          {aboutSubpages.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleNavClick(sub.id)}
                              className="block w-full text-left py-1.5 text-xs font-medium tracking-wider text-navy-dark/80 hover:text-gold-dark"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handleNavClick('services')}
                      className={`block w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/20 ${activeSection === 'services' ? 'text-gold-dark font-bold' : 'text-navy-dark'
                        }`}
                    >
                      Services
                    </button>

                    <button
                      onClick={() => handleNavClick('portfolio')}
                      className={`block w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/20 ${activeSection === 'portfolio' ? 'text-gold-dark font-bold' : 'text-navy-dark'
                        }`}
                    >
                      Portfolio
                    </button>

                    <button
                      onClick={() => handleNavClick('careers')}
                      className={`block w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/20 ${activeSection === 'careers' ? 'text-gold-dark font-bold' : 'text-navy-dark'
                        }`}
                    >
                      Careers
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gold-medium/20">
                  <Button
                    variant="gold"
                    className="w-full font-bold tracking-wider text-navy-dark"
                    onClick={() => handleNavClick('contact')}
                  >
                    Partner With Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
