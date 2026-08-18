import { 
  Building, TrendingUp, Handshake, Users, DollarSign, 
  Activity, Shield, Sliders, Star, Award 
} from 'lucide-react';

export interface WhyChooseItem {
  number: string;
  title: string;
  tag: string;
  icon: any;
  highlight: string;
  subtext: string;
}

export const whyChooseHeadingsList: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Proven Track Record',
    tag: 'Demonstrated Execution',
    icon: Award,
    highlight: 'Proven Track Record',
    subtext: 'Demonstrated history of turning underperforming properties into market leaders through disciplined operational execution.'
  },
  {
    number: '02',
    title: 'Comprehensive Management',
    tag: 'Full Lifecycle',
    icon: Building,
    highlight: 'Comprehensive Management',
    subtext: 'Full-service management spanning operations, sales, marketing, revenue optimization, and long-term asset maintenance.'
  },
  {
    number: '03',
    title: 'Revenue Optimization',
    tag: 'Yield Management',
    icon: TrendingUp,
    highlight: 'Revenue Optimization',
    subtext: 'Advanced revenue management strategies with multi-channel distribution to maximize RevPAR and gross operating profit.'
  },
  {
    number: '04',
    title: 'Owner-Centric Philosophy',
    tag: 'Fiduciary Alignment',
    icon: Handshake,
    highlight: 'Owner-Centric Philosophy',
    subtext: 'We operate with full financial transparency and fiduciary alignment, treating each asset as if it were our own.'
  },
  {
    number: '05',
    title: 'Financial Management',
    tag: 'Fiscal Discipline',
    icon: DollarSign,
    highlight: 'Financial Management',
    subtext: 'Comprehensive budget forecasting, expense control, payroll oversight, and vendor cost negotiations.'
  },
  {
    number: '06',
    title: 'Human Resources & Talent Development',
    tag: 'Culture & Talent',
    icon: Users,
    highlight: 'Talent Development',
    subtext: 'Recruitment of top hospitality talent, structured leadership training, and labor compliance.'
  },
  {
    number: '07',
    title: 'Technology & Innovation',
    tag: 'Modern Tech Stack',
    icon: Activity,
    highlight: 'Technology & Innovation',
    subtext: 'Modern hotel management systems (PMS/POS), data-driven decision making, and automated operations.'
  },
  {
    number: '08',
    title: 'Asset Protection',
    tag: 'Equity Preservation',
    icon: Shield,
    highlight: 'Asset Protection',
    subtext: 'Preventive maintenance programs, capital PIP planning, brand compliance, and property value protection.'
  },
  {
    number: '09',
    title: 'Personalized Management',
    tag: 'No Bureaucracy',
    icon: Sliders,
    highlight: 'Personalized Management',
    subtext: 'No one-size-fits-all approach. Customized business plans with direct, regular executive communication.'
  },
  {
    number: '10',
    title: 'Guest Experience Focus',
    tag: 'Reputation & Loyalty',
    icon: Star,
    highlight: 'Guest Experience',
    subtext: 'Delivering exceptional guest service, elevating online ratings, and cultivating repeat customer loyalty.'
  }
];
