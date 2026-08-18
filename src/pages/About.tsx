import React from 'react';
import { type PageId } from '../components/Navigation';
import { 
  Building, Heart, Award, 
  TrendingUp, DollarSign, Users, Eye, Target,
  Sparkles, ShieldCheck, HeartHandshake, Briefcase,
  Check, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AboutProps {
  activeSubTab: PageId;
  setActivePage: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ activeSubTab, setActivePage }) => {
  const tabs = [
    { id: 'about-overview', label: 'Company Overview' },
    { id: 'about-story', label: 'Our Story' },
    { id: 'about-vision', label: 'Vision & Mission' },
    { id: 'about-values', label: 'Core Values' },
    { id: 'about-advantage', label: 'Competitive Advantage' },
    { id: 'about-goals', label: 'Future Goals' }
  ] as const;

  const currentTab = tabs.find(t => t.id === activeSubTab) ? activeSubTab : 'about-overview';

  return (
    <div className="w-full py-28 bg-[#fbf8f2] min-h-screen px-4 sm:px-6 lg:px-8 text-navy-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center mb-12 space-y-3">
          <Badge variant="gold">
            About Our Company
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-navy-dark tracking-wide">
            Las Colinas Hospitality
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-medium mx-auto" />
        </div>

        {/* Tab Buttons with Shadcn Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 border-b border-gold-medium/20 pb-4 max-w-5xl mx-auto">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={currentTab === tab.id ? 'gold' : 'ghost'}
              size="sm"
              onClick={() => {
                setActivePage(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Dynamic Content Panel */}
        <div className="max-w-5xl mx-auto animate-fade-in">
          {currentTab === 'about-overview' && (
            <div className="space-y-12">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-6 text-left">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-navy-dark tracking-wide border-l-2 border-gold-medium pl-4">
                    Company Overview
                  </h3>
                  <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                    Founded in 2016, Las Colinas Hospitality Management has earned a reputation for operational excellence, financial discipline, and strategic hotel management. Our experienced leadership team combines deep hospitality expertise with a hands-on approach to delivering measurable results for owners and investors.
                  </p>
                  <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                    Whether developing a new hotel, repositioning an existing asset, or managing daily operations, we focus on maximizing profitability while delivering exceptional guest experiences.
                  </p>
                  
                  <div className="border border-gold-medium/25 p-6 rounded-xl bg-white shadow-md text-left mt-6">
                    <span className="text-gold-dark font-serif text-[10px] tracking-widest uppercase block mb-2 font-bold">Our Guiding Principle</span>
                    <blockquote className="font-serif text-base italic text-navy-dark font-normal leading-relaxed">
                      "Creating exceptional hospitality experiences, maximizing asset value, and building lasting partnerships through excellence, integrity, and innovation."
                    </blockquote>
                  </div>
                </div>
                
                <div className="lg:col-span-6">
                  <div className="border border-gold-medium/25 p-8 rounded-xl bg-white text-left relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold-medium via-gold-bright to-gold-dark" />
                    <h4 className="font-serif text-lg font-semibold text-navy-dark tracking-wide mb-4">
                      Executive Summary
                    </h4>
                    <div className="text-slate-700 font-normal text-xs sm:text-sm leading-relaxed space-y-4">
                      <p>
                        Las Colinas Hospitality Management (LCHM) is a leading hospitality development and management company dedicated to creating exceptional value through strategic hotel investments, development expertise, and operational excellence. With a strong reputation for delivering premium branded and independent hospitality assets, LCHM combines industry knowledge, market intelligence, and disciplined execution to maximize returns for investors while providing outstanding guest experiences.
                      </p>
                      <p>
                        Our success is built on a foundation of strategic advantages that differentiate us within the highly competitive hospitality sector. Through a meticulous approach to hotel development, asset management, and operational oversight, we identify and capitalize on opportunities that drive long-term growth and profitability.
                      </p>
                      <p>
                        Driven by a commitment to excellence, innovation, and financial stewardship, Las Colinas Hospitality Management remains focused on unlocking strategic advantages, creating sustainable growth, and building hospitality assets that generate lasting success for our partners, clients, and stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Services List */}
              <div className="pt-10 border-t border-gold-medium/15">
                <h4 className="font-serif text-xl text-navy-dark mb-6 text-center tracking-wide">
                  Our Core Services Focus
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Hotel Management',
                    'Hotel Development',
                    'Asset Management',
                    'Hotel Investments',
                    'Revenue Management',
                    'Financial & Accounting Services',
                    'Hotel Renovations',
                    'Pre-Opening Services',
                    'Hospitality Consulting'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white border border-gold-medium/20 hover:border-gold-medium rounded-lg transition-all duration-300 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-gold-medium" />
                      <span className="text-xs sm:text-sm text-navy-dark font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentTab === 'about-story' && (
            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-navy-dark tracking-wide border-l-2 border-gold-medium pl-4">
                  Our Story
                </h3>
                <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                  Las Colinas Hospitality Management was established with a clear vision: to become a trusted hospitality partner delivering exceptional operational performance and long-term investment value.
                </p>
                <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                  Since our founding, we have partnered with hotel owners, investors, lenders, and leading hospitality brands to develop, manage, and reposition hotels that consistently outperform their competitive markets.
                </p>
                <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                  Our success is built on integrity, innovation, operational excellence, and a commitment to creating lasting partnerships.
                </p>
              </div>
              <div className="h-64 sm:h-80 bg-cover bg-center rounded-xl border border-gold-medium/25 shadow-lg bg-[#ede3d2]"
                   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop')" }} />
            </div>
          )}

          {currentTab === 'about-vision' && (
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Vision Card */}
              <div className="relative rounded-2xl bg-white border border-gold-medium/25 hover:border-gold-medium p-8 sm:p-10 shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-medium/5 rounded-full blur-2xl group-hover:bg-gold-medium/15 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark shadow-sm group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gold-dark uppercase px-3 py-1 rounded-full bg-[#fbf8f2] border border-gold-medium/30">
                      Future & Outlook
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-navy-dark mb-4 tracking-wide group-hover:text-gold-dark transition-colors">
                    Our Vision
                  </h3>

                  <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                    To be the hospitality partner of choice, recognized for developing, managing, and elevating exceptional hotel assets that create lasting value for investors, unforgettable guest experiences, and sustainable growth for the communities we serve.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold-medium/15 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#f4ede0] border border-gold-medium/25 text-navy-dark">
                    • Lasting Investor Value
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#f4ede0] border border-gold-medium/25 text-navy-dark">
                    • Unforgettable Guest Journeys
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#f4ede0] border border-gold-medium/25 text-navy-dark">
                    • Sustainable Community Growth
                  </span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="relative rounded-2xl bg-white border border-gold-medium/25 hover:border-gold-medium p-8 sm:p-10 shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-medium/5 rounded-full blur-2xl group-hover:bg-gold-medium/15 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold-medium/15 border border-gold-medium/35 flex items-center justify-center text-gold-dark shadow-sm group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gold-dark uppercase px-3 py-1 rounded-full bg-[#fbf8f2] border border-gold-medium/30">
                      Fiduciary Mandate
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-navy-dark mb-4 tracking-wide group-hover:text-gold-dark transition-colors">
                    Our Mission
                  </h3>

                  <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                    Our mission is to maximize hospitality asset performance through strategic development, disciplined management, operational excellence, and innovative solutions that deliver measurable financial results while exceeding guest expectations.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold-medium/15 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#f4ede0] border border-gold-medium/25 text-navy-dark">
                    • Strategic Development
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#f4ede0] border border-gold-medium/25 text-navy-dark">
                    • Disciplined Management
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#f4ede0] border border-gold-medium/25 text-navy-dark">
                    • Measurable Financial ROI
                  </span>
                </div>
              </div>
            </div>
          )}

          {currentTab === 'about-values' && (
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-center text-navy-dark mb-10 tracking-wide">
                Our Core Values
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {[
                  {
                    title: 'Excellence',
                    desc: 'We pursue excellence in every aspect of our business, operations, and returns.',
                    icon: Award
                  },
                  {
                    title: 'Integrity',
                    desc: 'We build relationships through honesty, transparency, and accountability.',
                    icon: ShieldCheck
                  },
                  {
                    title: 'Innovation',
                    desc: 'We embrace forward-thinking strategies and continuous improvement.',
                    icon: Sparkles
                  },
                  {
                    title: 'Stewardship',
                    desc: 'We protect and enhance every asset entrusted to our management.',
                    icon: Building
                  },
                  {
                    title: 'Guest-Centered',
                    desc: 'Exceptional hospitality begins with exceeding guest expectations.',
                    icon: Heart
                  },
                  {
                    title: 'Collaboration',
                    desc: 'Strong partnerships and collaborative actions drive long-term success.',
                    icon: Users
                  },
                  {
                    title: 'Growth & Performance',
                    desc: 'We create sustainable growth through disciplined and rigorous execution.',
                    icon: TrendingUp
                  },
                  {
                    title: 'Community Impact',
                    desc: 'We operate responsibly and contribute positively to the communities we serve.',
                    icon: HeartHandshake
                  }
                ].map((val, i) => {
                  const Icon = val.icon;
                  return (
                    <div key={i} className="bg-white border border-gold-medium/20 p-6 rounded-xl hover:border-gold-medium transition-all duration-300 hover:-translate-y-0.5 shadow-md">
                      <Icon className="w-5 h-5 text-gold-dark mb-4" />
                      <h4 className="text-sm font-bold tracking-widest text-navy-dark uppercase mb-2">{val.title}</h4>
                      <p className="text-slate-600 text-xs font-normal leading-relaxed">{val.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {currentTab === 'about-advantage' && (
            <div className="space-y-16 text-left">
              {/* Executive Header Banner */}
              <div className="relative rounded-2xl bg-gradient-to-r from-white via-[#fcf8f0] to-[#f6efe0] border border-gold-medium/30 p-8 sm:p-12 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gold-medium/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-medium/15 border border-gold-medium/35 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold-dark uppercase">
                      The Strategic Edge
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-navy-dark tracking-wide leading-tight mb-4">
                    We Deliver More Than <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-medium to-gold-bright font-bold">
                      Hotel Management
                    </span>
                  </h3>
                  <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                    At Las Colinas Hospitality Management, we become an authentic extension of your ownership team. We align operational rigor, revenue intelligence, and financial stewardship directly with your capital return goals.
                  </p>
                </div>
              </div>

              {/* 5 Core Strategic Objectives */}
              <div className="space-y-6">
                <div className="text-center sm:text-left">
                  <span className="text-gold-dark uppercase tracking-[0.25em] text-xs font-semibold block mb-1">
                    Value Realization Pillars
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-navy-dark font-light tracking-wide">
                    Our Core Commitment to Owners
                  </h4>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { label: 'Increase Revenue', sub: 'Dynamic Rate & Mix', icon: TrendingUp },
                    { label: 'Improve Profitability', sub: 'Flow-Through Discipline', icon: DollarSign },
                    { label: 'Protect Investment', sub: 'CapEx & Asset Health', icon: ShieldCheck },
                    { label: 'Elevate Satisfaction', sub: 'Guest QA & Brand Score', icon: Award },
                    { label: 'Compound Value', sub: 'Long-Term Valuation', icon: Building }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="p-5 bg-white rounded-xl border border-gold-medium/25 hover:border-gold-medium transition-all duration-300 group hover:-translate-y-1 shadow-md text-center flex flex-col items-center justify-between"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gold-medium/15 border border-gold-medium/30 flex items-center justify-center mb-3 group-hover:bg-gold-medium transition-colors duration-300">
                          <Icon className="w-5 h-5 text-gold-dark group-hover:text-navy-dark transition-colors" />
                        </div>
                        <div>
                          <span className="text-xs font-bold tracking-wider text-navy-dark uppercase block mb-1">
                            {item.label}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium block">
                            {item.sub}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 6 Comprehensive Advantage Cards */}
              <div className="space-y-8">
                <div className="text-center sm:text-left">
                  <span className="text-gold-dark uppercase tracking-[0.25em] text-xs font-semibold block mb-1">
                    Operational & Strategic Mastery
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-navy-dark font-light tracking-wide">
                    Proven Hospitality Performance
                  </h4>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      num: '01',
                      title: 'Proven Hospitality Expertise',
                      desc: 'Our leadership team brings decades of experience managing premium branded and independent hotels across multiple regional markets.',
                      icon: Award,
                      points: ['25+ years combined executive leadership', 'Comprehensive brand compliance track record', 'Deep understanding of Texas & Midwest markets']
                    },
                    {
                      num: '02',
                      title: 'Owner-Focused Management',
                      desc: 'Every strategic initiative is calibrated to maximize return on equity, optimize operational cash flows, and protect asset longevity.',
                      icon: DollarSign,
                      points: ['Complete alignment with ownership investment thesis', 'Transparent fee structures without hidden costs', 'Proactive capital expenditure planning']
                    },
                    {
                      num: '03',
                      title: 'Revenue Optimization',
                      desc: 'We deploy advanced revenue management platforms, dynamic rate modeling, direct marketing, and channels optimization to outperform the comp set.',
                      icon: TrendingUp,
                      points: ['Real-time market intelligence & rate flexing', 'OTA & GDS distribution channel maximization', 'Aggressive local corporate & group sales pipeline']
                    },
                    {
                      num: '04',
                      title: 'Operational Excellence',
                      desc: 'We implement disciplined SOPs across housekeeping, engineering, front desk, and safety to elevate quality scores and guest satisfaction.',
                      icon: ShieldCheck,
                      points: ['Strict adherence to global franchise QA standards', 'Comprehensive staff development & retention programs', 'Preventative maintenance for property protection']
                    },
                    {
                      num: '05',
                      title: 'Financial Stewardship',
                      desc: 'Our rigorous accounting infrastructure delivers transparent reporting, detailed forecasts, and tight cost controls for maximum margin realization.',
                      icon: Briefcase,
                      points: ['Timely monthly P&L and balance sheet packages', 'Strict labor flow-through and procurement controls', 'Audit-ready compliance & internal controls']
                    },
                    {
                      num: '06',
                      title: 'Personalized Partnership',
                      desc: 'Unlike bureaucratic conglomerates, we provide responsive leadership, agile decision-making, and direct access to our executive team.',
                      icon: HeartHandshake,
                      points: ['Direct mobile and email access to C-suite leaders', 'Tailored property strategies—not cookie-cutter models', 'Fast turnaround on capital decisions & approvals']
                    }
                  ].map((adv, idx) => {
                    const Icon = adv.icon;
                    return (
                      <div 
                        key={idx} 
                        className="bg-white border border-gold-medium/25 p-8 rounded-xl hover:border-gold-medium transition-all duration-300 shadow-lg group hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
                      >
                        {/* Number Watermark */}
                        <span className="absolute top-4 right-5 font-mono text-3xl font-bold text-gold-medium/15 select-none group-hover:text-gold-medium/25 transition-colors">
                          {adv.num}
                        </span>

                        <div>
                          <div className="flex items-center gap-3.5 mb-5">
                            <div className="w-11 h-11 rounded-lg bg-gold-medium/15 border border-gold-medium/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-gold-medium group-hover:to-gold-dark group-hover:border-transparent transition-all duration-300">
                              <Icon className="w-5 h-5 text-gold-dark group-hover:text-navy-dark transition-colors" />
                            </div>
                            <h5 className="font-serif text-lg font-medium text-navy-dark tracking-wide group-hover:text-gold-dark transition-colors">
                              {adv.title}
                            </h5>
                          </div>

                          <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                            {adv.desc}
                          </p>

                          <div className="space-y-2 pt-4 border-t border-gold-medium/15 mb-2">
                            {adv.points.map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                                <Check className="w-3.5 h-3.5 text-gold-dark flex-shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Comparison Matrix: Conventional vs Las Colinas */}
              <div className="rounded-2xl bg-white border border-gold-medium/30 p-8 sm:p-10 shadow-xl space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-gold-dark uppercase tracking-[0.25em] text-xs font-semibold block mb-1">
                    The Competitive Difference
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl text-navy-dark font-light tracking-wide">
                    Why Owners Choose Las Colinas
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal mt-2">
                    How our agile, owner-centric model contrasts with conventional large-scale management companies.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  {/* Traditional Operators */}
                  <div className="bg-[#fcf8f8] rounded-xl p-6 sm:p-8 border border-red-500/20 space-y-5">
                    <div className="flex items-center gap-3 border-b border-red-500/20 pb-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold tracking-wider text-red-600 uppercase">
                          Conventional Management
                        </h5>
                        <span className="text-[11px] text-slate-500">Corporate Bureaucracy & Rigid Systems</span>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-normal">
                      {[
                        'Standardized, cookie-cutter playbooks applied to every hotel',
                        'Layers of regional bureaucracy slowing vital operational decisions',
                        'Delayed quarterly reporting with limited real-time owner transparency',
                        'High regional manager turnover with impersonal contact',
                        'Focus on corporate management fees over bottom-line NOI'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Las Colinas Advantage */}
                  <div className="bg-[#faf6ee] rounded-xl p-6 sm:p-8 border border-gold-medium/40 shadow-md space-y-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-medium/10 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex items-center gap-3 border-b border-gold-medium/20 pb-4">
                      <div className="w-8 h-8 rounded-full bg-gold-medium/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gold-dark" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold tracking-wider text-gold-dark uppercase">
                          The Las Colinas Advantage
                        </h5>
                        <span className="text-[11px] text-slate-600">Agile, Customized & Owner-Aligned</span>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-navy-dark font-medium">
                      {[
                        'Bespoke operational and revenue strategies tailored to your asset and market',
                        'Fast, agile C-level decision-making to seize revenue opportunities immediately',
                        'Real-time financial visibility and detailed monthly accounting packages',
                        'Direct, dedicated executive relationship with property-level accountability',
                        'Unwavering focus on net operating income and long-term asset valuation'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-gold-dark flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Consultation CTA */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gold-medium/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl text-navy-dark font-light tracking-wide mb-2">
                    Ready to Elevate Your Hotel’s Performance?
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl">
                    Connect with our executive team for an initial property evaluation and confidential discussion.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.location.hash = 'contact';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 bg-gradient-to-r from-gold-medium via-gold-bright to-gold-medium hover:from-gold-bright hover:to-gold-medium text-navy-dark font-bold tracking-widest text-xs uppercase rounded shadow-xl hover:shadow-gold-medium/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap cursor-pointer flex-shrink-0"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          )}

          {currentTab === 'about-goals' && (
            <div className="space-y-12 text-left">
              <div className="bg-white border-l-4 border-gold-medium p-8 rounded-xl shadow-md border border-gold-medium/15">
                <h3 className="font-serif text-2xl font-light text-navy-dark tracking-wide mb-3">
                  Our Long-Term Vision (5–10 Years)
                </h3>
                <p className="text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                  Our vision is to become one of the most respected hospitality management companies in the United States, known for transforming hotel assets into high-performing investments through exceptional leadership, innovative strategies, financial discipline, and an unwavering commitment to guest satisfaction.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="font-serif text-xl text-navy-dark mb-6 tracking-wide text-center">
                  Our Commitments to Achieve Long-Term Goals
                </h4>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      num: '1',
                      title: 'Strategic Portfolio Growth',
                      desc: 'Expand our portfolio by partnering with hotel owners across key U.S. markets, focusing on branded and independent properties that align with our commitment to operational excellence and long-term value creation.'
                    },
                    {
                      num: '2',
                      title: 'Become a Trusted Hospitality Partner',
                      desc: 'Establish Las Colinas Hospitality Management as a preferred management company recognized for integrity, transparency, and measurable financial results.'
                    },
                    {
                      num: '3',
                      title: 'Maximize Owner Returns',
                      desc: 'Consistently improve profitability through revenue optimization, cost management, operational efficiencies, and data-driven decision-making while protecting each owner\'s investment.'
                    },
                    {
                      num: '4',
                      title: 'Build High-Performing Teams',
                      desc: 'Develop a culture of excellence by investing in employee training, leadership development, and career advancement, creating engaged teams that deliver exceptional guest experiences.'
                    },
                    {
                      num: '5',
                      title: 'Deliver Industry-Leading Guest Experiences',
                      desc: 'Continuously improve guest satisfaction scores, online reputation, and brand loyalty by maintaining the highest standards of hospitality and service.'
                    },
                    {
                      num: '6',
                      title: 'Expand Service Offerings',
                      desc: 'Broaden our capabilities beyond hotel management to include Asset Management, Hotel Development Consulting, Renovation planning, Pre-Opening services, Revenue/Sales consulting, and HR compliance support.'
                    },
                    {
                      num: '7',
                      title: 'Embrace Technology and Innovation',
                      desc: 'Leverage emerging hospitality technologies, automation, and business intelligence tools to enhance operational efficiency, improve decision-making, and elevate the guest experience.'
                    },
                    {
                      num: '8',
                      title: 'Strengthen Brand Partnerships',
                      desc: 'Build strong relationships with leading hotel brands while also supporting independent hotels with customized management strategies that meet their unique market needs.'
                    },
                    {
                      num: '9',
                      title: 'Foster Sustainable Hospitality',
                      desc: 'Promote environmentally responsible practices by implementing energy-efficient initiatives, reducing waste, and encouraging sustainable operations that benefit both owners and communities.'
                    },
                    {
                      num: '10',
                      title: 'Create Long-Term Value',
                      desc: 'Create lasting value for owners, associates, guests, and communities by operating hotels that are financially successful, operationally efficient, and recognized for outstanding hospitality.'
                    }
                  ].map((goal, idx) => (
                    <div key={idx} className="bg-white border border-gold-medium/20 p-6 rounded-xl hover:border-gold-medium transition-all duration-300 flex gap-4 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-gold-medium/15 text-gold-dark font-bold flex items-center justify-center flex-shrink-0 select-none">
                        {goal.num}
                      </div>
                      <div>
                        <h5 className="font-serif text-base font-semibold text-navy-dark tracking-wide mb-1">
                          {goal.title}
                        </h5>
                        <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                          {goal.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
