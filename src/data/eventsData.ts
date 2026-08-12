export interface EventItem {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  category: 'Academic' | 'Cultural' | 'APC Meeting' | 'No School' | 'Community';
  description: string;
  featured?: boolean;
}

export const schoolEvents: EventItem[] = [
  {
    id: 'subsistence-week-2026',
    title: 'Annual Fall Subsistence & Harvest Week',
    date: '2026-09-08',
    time: 'All Week (No Regular Classes)',
    location: 'Kenaitze Campus & Kenai River Fish Camp',
    category: 'Cultural',
    description: 'Students and families participate in traditional salmon smoking, berry gathering, fish processing, and environmental stewardship with Kenaitze Elders.',
    featured: true
  },
  {
    id: 'apc-regular-meeting-sept',
    title: 'Academic Policy Committee (APC) Monthly Meeting',
    date: '2026-09-15',
    time: '5:30 PM - 7:00 PM',
    location: 'Kahtnuht’ana Duhdeldiht Campus Library & Zoom',
    category: 'APC Meeting',
    description: 'Monthly public meeting of the Tułen Charter School APC Board. Public comments open at 5:35 PM. All parents and community members welcome.',
    featured: true
  },
  {
    id: 'open-house-enrollment',
    title: 'Fall Open House & Prospective Student Info Night',
    date: '2026-09-24',
    time: '6:00 PM - 7:30 PM',
    location: 'Tułen Campus Great Room',
    category: 'Community',
    description: 'Tour our classrooms, meet Principal Kimberly Daniels and teaching staff, view Dena\'ina cultural displays, and learn about K-4 enrollment for mid-year and upcoming terms.',
    featured: true
  },
  {
    id: 'elders-storytelling-circle',
    title: 'Kenaitze Elders Storytelling & Dena\'ina Word Gathering',
    date: '2026-10-02',
    time: '1:30 PM - 2:45 PM',
    location: 'Outdoor Cultural Pavilion',
    category: 'Cultural',
    description: 'Special afternoon session welcoming Tribal Elders to share traditional Dena\'ina oral histories, winter preparations, and songs with K-4 classes.',
    featured: false
  },
  {
    id: 'parent-teacher-conferences-fall',
    title: 'Parent-Teacher Conferences (No School for Students)',
    date: '2026-10-22',
    time: '8:00 AM - 6:00 PM (By Appointment)',
    location: 'Classrooms / Virtual Option',
    category: 'No School',
    description: 'Individual parent-teacher conferences to discuss student progress, literacy benchmarks, and personalized learning goals.',
    featured: false
  },
  {
    id: 'steam-salmon-expo',
    title: 'K-4 STEAM Salmon Ecology Science Expo',
    date: '2026-11-12',
    time: '1:00 PM - 3:00 PM',
    location: 'Campus Multi-Purpose Room',
    category: 'Academic',
    description: 'Interactive student presentations showcasing salmon anatomy, Kenai River watershed health studies, and data collection.',
    featured: true
  },
  {
    id: 'apc-regular-meeting-nov',
    title: 'Academic Policy Committee (APC) Monthly Meeting',
    date: '2026-11-17',
    time: '5:30 PM - 7:00 PM',
    location: 'Tułen Campus Library & Zoom',
    category: 'APC Meeting',
    description: 'Review of quarterly budget updates, charter evaluation metrics, and curriculum enrichment proposals.',
    featured: false
  },
  {
    id: 'winter-solstice-gathering',
    title: 'Winter Solstice Cultural Gathering & Student Performance',
    date: '2026-12-17',
    time: '5:30 PM - 7:30 PM',
    location: 'Kahtnuht’ana Duhdeldiht Campus Hall',
    category: 'Cultural',
    description: 'Community celebration featuring Dena\'ina songs, Native Youth Olympics demonstrations, student art showcase, and potluck feast.',
    featured: true
  }
];
