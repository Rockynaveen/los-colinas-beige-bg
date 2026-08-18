import { 
  Wrench, Globe, DollarSign, Users, LineChart, TrendingUp, 
  ShieldCheck, Layers, Compass, KeyRound, Clock, BarChart3, 
  Sliders, Activity, Megaphone, UserCheck, Search 
} from 'lucide-react';

export interface AlacarteService {
  id: string;
  num: string;
  category: 'Operations' | 'Revenue' | 'Asset' | 'Strategy';
  categoryLabel: string;
  title: string;
  desc: string;
  icon: any;
}

export const alacarteServices: AlacarteService[] = [
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

export const hotelManagementServicesList = [
  'Hotel operations management',
  'Staff training',
  'Recruitment support',
  'Financial controls',
  'Budgeting',
  'SOP implementation',
  'Vendor management',
  'Quality audits'
];

export const departmentPillars = [
  'Front Office',
  'Housekeeping',
  'Food & Beverage',
  'Maintenance',
  'Guest Services'
];
