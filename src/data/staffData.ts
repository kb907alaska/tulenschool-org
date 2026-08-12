export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: 'Administration' | 'Teaching Staff' | 'Cultural & Language' | 'Support Staff';
  email: string;
  phoneExtension?: string;
  bio: string;
  image: string;
  denainaRole?: string;
  education?: string;
  isFeatured?: boolean;
}

export const staffMembers: StaffMember[] = [
  {
    id: 'kimberly-daniels',
    name: 'Kimberly Daniels',
    role: 'Principal / Head of School',
    department: 'Administration',
    email: 'kdaniels@kpbsd.k12.ak.us',
    phoneExtension: 'x2829',
    bio: 'Kimberly Daniels brings over 20 years of educational leadership and community partnership experience to Tułen Charter School. Dedicated to cultivating an environment where Dena\'ina heritage and rigorous academic standards empower every student.',
    image: '/images/kimberly-daniels.jpg',
    denainaRole: 'Leadership & Community Liaison',
    education: 'M.Ed. Educational Leadership, University of Alaska Anchorage',
    isFeatured: true
  },
  {
    id: 'helena-titus',
    name: 'Helena Titus',
    role: 'Dena\'ina Language & Culture Specialist',
    department: 'Cultural & Language',
    email: 'htitus@kpbsd.k12.ak.us',
    phoneExtension: 'x2831',
    bio: 'Helena Titus works closely with Kenaitze Tribal Elders to integrate Outer Inlet Dena\'ina language, storytelling, traditional crafts, and subsistence ecology into the daily K-4 curriculum.',
    image: '/images/culture-classroom.png',
    denainaRole: 'Nuch\'uhq\'u (Our Heritage Teacher)',
    education: 'B.A. Native Studies & Linguistics, UAF',
    isFeatured: true
  },
  {
    id: 'marcus-alaska',
    name: 'Marcus K. Johnson',
    role: 'Lead Kindergarten Teacher',
    department: 'Teaching Staff',
    email: 'mjohnson@kpbsd.k12.ak.us',
    phoneExtension: 'x2832',
    bio: 'Passionate about early literacy, hands-on outdoor exploration, and play-based learning that connects young learners with the natural world surrounding our Kenai campus.',
    image: '/images/school-exterior.png',
    education: 'B.S. Elementary Education, UAA',
    isFeatured: false
  },
  {
    id: 'sarah-monroe',
    name: 'Sarah Monroe',
    role: 'Grade 1-2 Multi-Age Lead Teacher',
    department: 'Teaching Staff',
    email: 'smonroe@kpbsd.k12.ak.us',
    phoneExtension: 'x2833',
    bio: 'Focuses on place-based STEM, salmon life cycle investigations, and foundational mathematics through hands-on project discovery.',
    image: '/images/hero-river.png',
    education: 'M.A. Teaching, Alaska Pacific University',
    isFeatured: false
  },
  {
    id: 'david-mccarter',
    name: 'David McCarter',
    role: 'Grade 3-4 Lead Teacher & NYO Coach',
    department: 'Teaching Staff',
    email: 'dmccarter@kpbsd.k12.ak.us',
    phoneExtension: 'x2834',
    bio: 'Leads our 3rd & 4th grade academic team and coaches the Tułen Native Youth Olympics (NYO) team, emphasizing physical resilience, team spirit, and cultural athletic traditions.',
    image: '/images/culture-classroom.png',
    education: 'B.A. Elementary Education & Physical Ed, UAA',
    isFeatured: false
  },
  {
    id: 'tanya-osteroff',
    name: 'Tanya Osteroff',
    role: 'Student Support & Special Education Coordinator',
    department: 'Support Staff',
    email: 'tosteroff@kpbsd.k12.ak.us',
    phoneExtension: 'x2835',
    bio: 'Dedicated to ensuring individualized learning plans, speech and reading interventions, and inclusive classroom environments for all Tułen learners.',
    image: '/images/kimberly-daniels.jpg',
    education: 'M.Ed. Special Education, UAA',
    isFeatured: false
  },
  {
    id: 'corinna-chickalusion',
    name: 'Corinna Chickalusion',
    role: 'Tribal Cultural Liaison & Elder-in-Residence Liaison',
    department: 'Cultural & Language',
    email: 'cchickalusion@kenaitze.org',
    phoneExtension: 'x2836',
    bio: 'Coordinates monthly Elders Circles, seasonal subsistence trips (salmon fishing, berry picking, moose ecology), and family cultural nights in collaboration with Kenaitze Indian Tribe.',
    image: '/images/hero-river.png',
    denainaRole: 'K’echan (Gratitude & Connection Leader)',
    education: 'Kenaitze Cultural Educator Certification',
    isFeatured: true
  },
  {
    id: 'robert-lindgren',
    name: 'Robert Lindgren',
    role: 'Administrative Assistant & Registrar',
    department: 'Administration',
    email: 'rlindgren@kpbsd.k12.ak.us',
    phoneExtension: 'x2829',
    bio: 'Manages student enrollment, attendance records, school communications, and parent inquiries. Always ready to greet families at the front counter with a warm smile.',
    image: '/images/school-exterior.png',
    education: 'A.A. Business Administration, Kenai Peninsula College',
    isFeatured: false
  }
];
