import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, BarChart3, LineChart, KeyRound, Wrench, 
  UserCheck, ShieldCheck, Users, TrendingUp, 
  DollarSign, Globe, Sparkles, Check, ChevronRight, ChevronLeft, ArrowRight, 
  Layers, Sliders, Activity, Search, Clock, Compass, Megaphone
} from 'lucide-react';
import { type PageId } from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface ServicesProps {
  setActivePage?: (page: PageId) => void;
}

interface AlacarteService {
  id: string;
  num: string;
  category: 'Operations' | 'Revenue' | 'Asset' | 'Strategy';
  categoryLabel: string;
  title: string;
  desc: string;
  icon: any;
}

export const Services: React.FC<ServicesProps> = ({ setActivePage }) => {
  const alacarteCarouselRef = useRef<HTMLDivElement>(null);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  const handleNavContact = () => {
    if (setActivePage) {
      setActivePage('contact');
    }
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hotelManagementServicesList = [
    'Hotel operations management',
    'Staff training',
    'Recruitment support',
    'Financial controls',
    'Budgeting',
    'SOP implementation',
    'Vendor management',
    'Quality audits'
  ];

  const departmentPillars = [
    'Front Office',
    'Housekeeping',
    'Food & Beverage',
    'Maintenance',
    'Guest Services'
  ];

  const alacarteServices: AlacarteService[] = [
    {
      id: 'renovation-development',
      num: '01',
      category: 'Asset',
      categoryLabel: 'Asset & Development',
      title: 'Renovation & Development',
      desc: 'Enhancing properties through renovations, upgrades, and development initiatives.',
      icon: Wrench
    },
    {
      id: 'ota-management',
      num: '02',
      category: 'Revenue',
      categoryLabel: 'Revenue & Distribution',
      title: 'OTA Management & Distribution Strategy',
      desc: 'Optimizing OTA performance, channels, and digital distribution to maximize revenue.',
      icon: Globe
    },
    {
      id: 'investment-asset-management',
      num: '03',
      category: 'Asset',
      categoryLabel: 'Asset & Investment',
      title: 'Hospitality Investment & Asset Management',
      desc: 'Driving ROI and long-term value through smart investment and asset strategies.',
      icon: DollarSign
    },
    {
      id: 'staff-training-leadership',
      num: '04',
      category: 'Operations',
      categoryLabel: 'Operations & Team',
      title: 'Staff Training & Leadership Development',
      desc: 'Developing teams through training, coaching, and leadership programs.',
      icon: Users
    },
    {
      id: 'financial-accounting',
      num: '05',
      category: 'Strategy',
      categoryLabel: 'Finance & Strategy',
      title: 'Financial & Accounting Management',
      desc: 'Managing budgets, forecasts, costs, payroll, and financial performance.',
      icon: LineChart
    },
    {
      id: 'revenue-management-optimization',
      num: '06',
      category: 'Revenue',
      categoryLabel: 'Revenue & Yield',
      title: 'Revenue Management & Optimization',
      desc: 'Maximizing revenue through demand forecasting, rate strategies, and inventory.',
      icon: TrendingUp
    },
    {
      id: 'qa-readiness',
      num: '07',
      category: 'Operations',
      categoryLabel: 'Operations & QA',
      title: 'Quality Assurance (QA) Readiness',
      desc: 'Ensuring brand compliance, operational excellence, and inspection readiness.',
      icon: ShieldCheck
    },
    {
      id: 'ffe-procurement',
      num: '08',
      category: 'Asset',
      categoryLabel: 'Asset Planning',
      title: 'FF&E Procurement & Asset Planning',
      desc: 'Managing FF&E selection, purchasing, budgeting, and installations.',
      icon: Layers
    },
    {
      id: 'brand-selection-planning',
      num: '09',
      category: 'Asset',
      categoryLabel: 'Brand Advisory',
      title: 'Brand Selection, Planning & Review',
      desc: 'Evaluating brands and aligning hotel concepts with market and ownership goals.',
      icon: Compass
    },
    {
      id: 'pre-opening-services',
      num: '10',
      category: 'Operations',
      categoryLabel: 'Operations & Launch',
      title: 'Hotel Pre-Opening Services',
      desc: 'Managing pre-opening activities for smooth, successful hotel launches.',
      icon: KeyRound
    },
    {
      id: 'project-management',
      num: '11',
      category: 'Asset',
      categoryLabel: 'Project Management',
      title: 'Hospitality Project Management',
      desc: 'Leading projects for renovations, transitions, and operational improvements.',
      icon: Clock
    },
    {
      id: 'daily-rate-strategy',
      num: '12',
      category: 'Revenue',
      categoryLabel: 'Rate Strategy',
      title: 'Daily Rate Strategy & Yield Management',
      desc: 'Implementing dynamic pricing based on demand, trends, and market conditions.',
      icon: BarChart3
    },
    {
      id: 'price-optimization',
      num: '13',
      category: 'Revenue',
      categoryLabel: 'Pricing Analytics',
      title: 'Price Optimization',
      desc: 'Using market insights and data to maximize ADR, RevPAR, and overall performance.',
      icon: Sliders
    },
    {
      id: 'daily-sales-monitoring',
      num: '14',
      category: 'Revenue',
      categoryLabel: 'Sales Performance',
      title: 'Daily Sales Performance Monitoring',
      desc: 'Tracking sales, pace, goals, and revenue opportunities for continuous growth.',
      icon: Activity
    },
    {
      id: 'sales-marketing-strategy',
      num: '15',
      category: 'Strategy',
      categoryLabel: 'Sales & Marketing',
      title: 'Sales & Marketing Strategy',
      desc: 'Building strategies to grow corporate, group, leisure, and local market segments.',
      icon: Megaphone
    },
    {
      id: 'task-force-management',
      num: '16',
      category: 'Operations',
      categoryLabel: 'Task Force',
      title: 'Task Force Management',
      desc: 'Providing leadership and turnaround solutions during transitions and performance improvements.',
      icon: UserCheck
    },
    {
      id: 'competitive-benchmarking',
      num: '17',
      category: 'Strategy',
      categoryLabel: 'Market Intelligence',
      title: 'Competitive Benchmarking & Market Analysis',
      desc: 'Analyzing competitors, market trends, and opportunities to drive revenue growth.',
      icon: Search
    }
  ];

  const filteredAlacarte = alacarteServices;

  useEffect(() => {
    if (isAutoPlayPaused) return;

    const interval = setInterval(() => {
      if (alacarteCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = alacarteCarouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          alacarteCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          alacarteCarouselRef.current.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isAutoPlayPaused]);

  const scrollAlacarte = (direction: 'left' | 'right') => {
    if (alacarteCarouselRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      alacarteCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-28 bg-[#fbf8f2] min-h-screen px-4 sm:px-6 lg:px-8 relative overflow-hidden text-left text-navy-dark">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-medium/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-gold-dark/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="gold">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Full-Spectrum Hospitality Solutions</span>
          </Badge>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-navy-dark tracking-wide leading-tight">
            Our Hospitality Services
          </h1>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-medium" />
            <span className="w-1.5 h-1.5 rotate-45 border border-gold-bright bg-gold-medium" />
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-medium" />
          </div>
          
          <p className="text-slate-700 text-sm sm:text-base font-normal mt-6 leading-relaxed">
            Las Colinas Hospitality Management provides end-to-end hotel operations, development, renovations, and financial management services tailored to branded and independent hotels across all market tiers.
          </p>

          {/* Quick Jump Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href="#hotel-management">Hotel Management Services</a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href="#alacarte-services">À la Carte Services (17)</a>
            </Button>
          </div>
        </div>

        {/* FLAGSHIP HERO SPOTLIGHT: Hotel Management Services */}
        <section id="hotel-management" className="scroll-mt-32">
          <Card className="p-8 sm:p-12 lg:p-14 shadow-xl overflow-hidden border-gold-medium/30 bg-gradient-to-br from-white via-[#fdf9f2] to-[#f6efe1]">
            <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Description, Pillars & Checklist */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark shadow-sm">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-gold-dark uppercase font-semibold block">
                        Core Operational Stewardship
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-navy-dark font-light tracking-wide">
                        Hotel Management Services
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed">
                    We provide hands-on operational support across all departments, including front office, housekeeping, food and beverage, maintenance, and guest services, ensuring efficient and seamless hotel operations.
                  </p>
                </div>

                {/* Departments Strip */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono tracking-widest text-gold-dark uppercase font-semibold block">
                    Supported Departments:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {departmentPillars.map((dept, dIdx) => (
                      <span
                        key={dIdx}
                        className="py-1 px-3 rounded-lg bg-[#f8f3e9] border border-gold-medium/30 text-xs font-medium text-navy-dark shadow-sm"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services May Include Checklist */}
                <div className="space-y-4 pt-4 border-t border-gold-medium/15">
                  <span className="text-xs font-mono font-bold tracking-widest text-gold-dark uppercase block">
                    Services May Include:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {hotelManagementServicesList.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#f8f3e9] border border-gold-medium/20 hover:border-gold-medium transition-all duration-300 flex items-center gap-3 shadow-sm"
                      >
                        <div className="w-6 h-6 rounded-full bg-gold-medium/20 border border-gold-medium/40 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-gold-dark" />
                        </div>
                        <span className="text-xs sm:text-sm text-navy-dark font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button
                    variant="gold"
                    size="lg"
                    onClick={handleNavContact}
                    className="font-bold text-navy-dark"
                  >
                    <span>Request Management Proposal</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Showcase & Performance Stats */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-xl overflow-hidden border border-gold-medium/30 shadow-2xl bg-[#ede3d2]">
                  <div
                    className="h-80 sm:h-96 w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 via-transparent to-transparent" />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-lg border border-gold-medium/35 shadow-xl">
                    <div className="grid grid-cols-2 gap-4 text-center divide-x divide-gold-medium/20">
                      <div>
                        <div className="font-serif text-2xl font-bold text-gold-dark">100%</div>
                        <div className="text-[10px] text-navy-dark font-semibold tracking-wider uppercase mt-0.5">Brand QA Compliance</div>
                      </div>
                      <div className="pl-4">
                        <div className="font-serif text-2xl font-bold text-gold-dark">Turnkey</div>
                        <div className="text-[10px] text-navy-dark font-semibold tracking-wider uppercase mt-0.5">Operational Support</div>
                      </div>
                    </div>
                  </div>
                </div>

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
              </div>

            </div>
          </Card>
        </section>

        {/* COMPREHENSIVE HOSPITALITY MANAGEMENT SOLUTIONS (SINGLE LINE CAROUSEL) */}
        <section id="alacarte-services" className="scroll-mt-28 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="gold">
              OUR SERVICES
            </Badge>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-navy-dark tracking-wide leading-tight">
              Comprehensive Hospitality Management Solutions
            </h2>
            
            <p className="text-slate-700 text-xs sm:text-sm font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
              End-to-end services designed to optimize operations, maximize revenue, and enhance the overall guest experience.
            </p>
          </div>

          {/* Single-Line Carousel Viewport with Left & Right Indicator Controls */}
          <div 
            className="relative px-2 sm:px-6"
            onMouseEnter={() => setIsAutoPlayPaused(true)}
            onMouseLeave={() => setIsAutoPlayPaused(false)}
          >
            {/* Left Indicator Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollAlacarte('left')}
              aria-label="Previous Slide"
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 rounded-full border-gold-medium/40 bg-white text-gold-dark hover:bg-gold-medium hover:text-navy-dark shadow-lg cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Right Indicator Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollAlacarte('right')}
              aria-label="Next Slide"
              className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 rounded-full border-gold-medium/40 bg-white text-gold-dark hover:bg-gold-medium hover:text-navy-dark shadow-lg cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Single Line Carousel Track */}
            <div
              ref={alacarteCarouselRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredAlacarte.map((ala) => {
                const Icon = ala.icon;
                return (
                  <Card
                    key={ala.id}
                    className="w-[195px] sm:w-[215px] flex-shrink-0 snap-start bg-white border-gold-medium/25 hover:border-gold-medium rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center text-center justify-center h-[190px] sm:h-[200px] relative overflow-hidden group shadow-md"
                  >
                    {/* Icon Badge */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gold-medium/15 border-2 border-gold-medium/35 flex items-center justify-center mx-auto mb-2.5 text-gold-dark shadow-sm group-hover:bg-gold-medium group-hover:text-navy-dark group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold-dark group-hover:text-navy-dark transition-colors" />
                    </div>

                    {/* Compact Title */}
                    <h3 className="font-serif text-xs sm:text-[13px] font-semibold text-navy-dark mb-1 tracking-wide group-hover:text-gold-dark transition-colors leading-snug line-clamp-2">
                      {ala.title}
                    </h3>

                    {/* Concise Description */}
                    <p className="text-slate-600 text-[10px] font-normal leading-snug line-clamp-2 px-1">
                      {ala.desc}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

        </section>

        {/* Bottom Call to Action Section */}
        <Card className="relative rounded-2xl bg-gradient-to-r from-white via-[#fdf8f0] to-[#f6efe1] border-gold-medium/30 p-8 sm:p-12 text-center shadow-xl overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Badge variant="gold">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>Custom Scope & Contracts</span>
            </Badge>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-navy-dark tracking-wide leading-tight">
              Tailored Hospitality Solutions for Your Portfolio
            </h3>

            <p className="text-slate-700 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
              Whether you need turnkey full-service hotel management or a targeted tactical intervention in revenue, QA, pre-opening, or renovations, Las Colinas is ready to deliver exceptional results.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                onClick={handleNavContact}
                className="font-bold text-navy-dark"
              >
                Schedule Private Consultation
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};
