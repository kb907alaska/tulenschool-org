export interface BoardMember {
  name: string;
  role: string;
  affiliation: string;
  termEnds: string;
  email?: string;
}

export interface MeetingDocument {
  date: string; // YYYY-MM-DD
  title: string;
  agendaUrl: string;
  minutesUrl: string;
  packetUrl?: string;
  status: 'Upcoming' | 'Approved' | 'Draft';
}

export const boardMembers: BoardMember[] = [
  {
    name: 'Bernadette Chickalusion',
    role: 'APC Board Chair',
    affiliation: 'Kenaitze Tribal Council Representative',
    termEnds: 'May 2028',
    email: 'bchickalusion@kenaitze.org'
  },
  {
    name: 'Dr. Michael Vance',
    role: 'Vice Chair & Academic Lead',
    affiliation: 'KPBSD Higher Education Liaison',
    termEnds: 'May 2027',
    email: 'mvance@kpbsd.k12.ak.us'
  },
  {
    name: 'Jessica O\'Connor',
    role: 'Secretary / Parent Representative',
    affiliation: 'Parent of Grade 1 & Grade 3 Students',
    termEnds: 'May 2027',
    email: 'joconnor.apc@tulenschool.org'
  },
  {
    name: 'Kimberly Daniels',
    role: 'Ex-Officio Member / Principal',
    affiliation: 'Tułen Charter School Head of School',
    termEnds: 'Ex-Officio',
    email: 'kdaniels@kpbsd.k12.ak.us'
  },
  {
    name: 'Marcus K. Johnson',
    role: 'Teacher Representative',
    affiliation: 'Tułen Faculty Representative',
    termEnds: 'May 2027',
    email: 'mjohnson@kpbsd.k12.ak.us'
  },
  {
    name: 'Chief Wayne Ross',
    role: 'Community & Cultural Advisor',
    affiliation: 'Elder & Cultural Council Member',
    termEnds: 'May 2028'
  }
];

export const apcMeetingArchive: MeetingDocument[] = [
  {
    date: '2026-09-15',
    title: 'APC Regular Board Meeting - September 2026',
    agendaUrl: '/pdfs/apc-agenda-2026-09-15.pdf',
    minutesUrl: '/pdfs/apc-minutes-2026-09-15.pdf',
    packetUrl: '/pdfs/apc-packet-2026-09-15.pdf',
    status: 'Upcoming'
  },
  {
    date: '2026-08-18',
    title: 'APC Regular Board Meeting - August 2026',
    agendaUrl: '/pdfs/apc-agenda-2026-08-18.pdf',
    minutesUrl: '/pdfs/apc-minutes-2026-08-18.pdf',
    packetUrl: '/pdfs/apc-packet-2026-08-18.pdf',
    status: 'Approved'
  },
  {
    date: '2026-06-16',
    title: 'APC Annual Strategic Planning Meeting - June 2026',
    agendaUrl: '/pdfs/apc-agenda-2026-06-16.pdf',
    minutesUrl: '/pdfs/apc-minutes-2026-06-16.pdf',
    status: 'Approved'
  },
  {
    date: '2026-05-19',
    title: 'APC Regular Board Meeting & Budget Approval - May 2026',
    agendaUrl: '/pdfs/apc-agenda-2026-05-19.pdf',
    minutesUrl: '/pdfs/apc-minutes-2026-05-19.pdf',
    status: 'Approved'
  }
];

export const apcGovernanceDocs = [
  {
    title: 'Tułen Charter School Approved Bylaws',
    description: 'Governance charter, board duties, election procedures, and school policies.',
    fileUrl: '/pdfs/tulen-apc-bylaws-2025.pdf'
  },
  {
    title: 'KPBSD & Kenaitze Tribal Partnership Contract',
    description: 'State of Alaska approved charter agreement and district memorandum of understanding.',
    fileUrl: '/pdfs/tulen-charter-contract-kpbsd.pdf'
  },
  {
    title: 'Public Comment Guidelines & Form',
    description: 'Information for community members wishing to submit public feedback to the APC board.',
    fileUrl: '/pdfs/apc-public-comment-form.pdf'
  }
];
