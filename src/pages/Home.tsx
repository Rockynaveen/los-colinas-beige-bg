import React from 'react';
import { Carousel } from '../components/Carousel';
import { StatCountersSection } from '../components/home/StatCounters';
import { AboutTeaser } from '../components/home/AboutTeaser';
import { ServicesShowcase } from '../components/home/ServicesShowcase';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { PortfolioShowcase } from '../components/home/PortfolioShowcase';
import { TeamShowcase } from '../components/home/TeamShowcase';
import { HotelManagement } from '../components/home/HotelManagement';
import { CtaSection } from '../components/home/CtaSection';
import { type PageId } from '../components/Navigation';

interface HomeProps {
  setActivePage?: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  const navigateTo = (page: PageId) => {
    if (setActivePage) {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#fbf8f2] text-navy-dark overflow-x-clip select-none font-sans">
      
      {/* 1. HERO SLIDER */}
      <Carousel />

      {/* 2. STAT COUNTERS PAVILION */}
      <StatCountersSection />

      {/* 3. ABOUT US TEASER */}
      <AboutTeaser onLearnMore={() => navigateTo('about-overview')} />

      {/* 4. SERVICES SHOWCASE CAROUSEL */}
      <ServicesShowcase />

      {/* 5. WHY CHOOSE LAS COLINAS: ON-SCROLL SEQUENCER */}
      <WhyChooseUs />

      {/* 6. PORTFOLIO SHOWCASE CAROUSEL */}
      <PortfolioShowcase onViewAll={() => navigateTo('portfolio')} />

      {/* 7. LEADERSHIP & TEAM SHOWCASE */}
      <TeamShowcase onMeetTeam={() => navigateTo('team')} />

      {/* 8. HOTEL MANAGEMENT CAPABILITIES */}
      <HotelManagement onLearnMore={() => navigateTo('services')} />

      {/* 9. PARTNERSHIP & CONSULTATION FORM */}
      <CtaSection />

    </div>
  );
};
