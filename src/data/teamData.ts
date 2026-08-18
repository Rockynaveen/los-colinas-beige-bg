import { Award, Users, DollarSign, ShieldCheck } from 'lucide-react';

export interface TeamMemberCard {
  id: string;
  name: string;
  role: string;
  specialty: string;
  icon: any;
  image: string;
}

export const teamMembersData: TeamMemberCard[] = [
  {
    id: 'team-1',
    name: 'Nandini Tiwari',
    role: 'President',
    specialty: 'Operations & Development',
    icon: Award,
    image: '/images/nandini-tiwari.jpg'
  },
  {
    id: 'team-2',
    name: 'Nitin Tiwari',
    role: 'Chief Executive Officer',
    specialty: 'Strategy & Growth',
    icon: Users,
    image: '/images/nitin tiwari.jpg'
  },
  {
    id: 'team-3',
    name: 'Manasa Sharma',
    role: 'Chief Financial Officer',
    specialty: 'Financial Strategy',
    icon: DollarSign,
    image: '/images/manasha sharma.jpg'
  },
  {
    id: 'team-4',
    name: 'Jignesh Patel',
    role: 'Accounting Manager',
    specialty: 'Financial Operations',
    icon: ShieldCheck,
    image: '/images/jignesh patel.jpg'
  },
  {
    id: 'team-5',
    name: 'Jimmy Munoz',
    role: 'Regional Operations Manager',
    specialty: 'Multi-Brand Operations',
    icon: Award,
    image: '/images/jimmy munoz.jpg'
  },
  {
    id: 'team-6',
    name: 'Daina Ortiz',
    role: 'General Manager',
    specialty: 'Operations & Guest Experience',
    icon: Users,
    image: '/images/daina ortiz.jpg'
  },
  {
    id: 'team-7',
    name: 'Laure Lewis',
    role: 'General Manager',
    specialty: 'Full-Service Hospitality',
    icon: Award,
    image: '/images/laure lewis.jpg'
  },
  {
    id: 'team-8',
    name: 'Christa Wjendran',
    role: 'General Manager',
    specialty: 'Sales & Revenue Leadership',
    icon: Award,
    image: '/images/christa wjendran.jpg'
  }
];
