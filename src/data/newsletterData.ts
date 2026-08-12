export interface NewsletterEdition {
  id: string;
  title: string;
  issueNumber: string;
  publishDate: string;
  summary: string;
  pdfLink: string;
  denainaWord: {
    word: string;
    phonetic: string;
    englishMeaning: string;
    culturalNote: string;
  };
  highlights: string[];
}

export const newsletterArchive: NewsletterEdition[] = [
  {
    id: 'issue-12-august-2026',
    title: 'Tułen Flow: Welcoming a New School Year!',
    issueNumber: 'Vol. 2, Issue 1',
    publishDate: 'August 2026',
    summary: 'Welcoming new and returning K-4 families, preparing for Subsistence Week, introducing new faculty, and annual orientation highlights.',
    pdfLink: '/pdfs/tulen-newsletter-aug-2026.pdf',
    denainaWord: {
      word: 'Tułen',
      phonetic: 'too-LEN',
      englishMeaning: 'The river will flow / The current is flowing',
      culturalNote: 'Reflects continuous learning, movement, and life along the Kenai (Kahtnu) waters.'
    },
    highlights: [
      'Message from Principal Kimberly Daniels',
      'Subsistence Week Logistics & Gear Checklist',
      'Meet Our New Dena\'ina Language Specialist',
      'Parent Volunteer & APC Nominations'
    ]
  },
  {
    id: 'issue-11-may-2026',
    title: 'Spring Harvest & NYO Championship Issue',
    issueNumber: 'Vol. 1, Issue 10',
    publishDate: 'May 2026',
    summary: 'Celebrating our inaugural school year achievements, NYO student records, salmon fry release day at Kenai Lake, and summer reading lists.',
    pdfLink: '/pdfs/tulen-newsletter-may-2026.pdf',
    denainaWord: {
      word: 'Yaghali',
      phonetic: 'yah-gah-LEE',
      englishMeaning: 'Good / Well / Good day',
      culturalNote: 'A foundational greeting expressed to honor guests, relatives, and neighbors.'
    },
    highlights: [
      'First Annual NYO Demonstration Recap',
      'Salmon Tank Fry Release in Kenai Lake',
      'Summer Reading & Cultural Explorer Bingo',
      'APC Year-End Strategic Report Summary'
    ]
  },
  {
    id: 'issue-10-april-2026',
    title: 'Earth Day & Outdoor Ecology Exploration',
    issueNumber: 'Vol. 1, Issue 9',
    publishDate: 'April 2026',
    summary: 'Spring snow melt studies, bird migration counts on campus grounds, and preparation for Alaska Statewide Testing.',
    pdfLink: '/pdfs/tulen-newsletter-apr-2026.pdf',
    denainaWord: {
      word: 'Nuk’ele',
      phonetic: 'nook-EH-leh',
      englishMeaning: 'Robin / Spring Songbird',
      culturalNote: 'Signals the return of warmth, green shoots, and daylight to the Kenai Peninsula.'
    },
    highlights: [
      'Field Trip to Kenai National Wildlife Refuge',
      'Student Poetry & Nature Journaling Showcase',
      'Nutritional Guidelines for School Lunches'
    ]
  }
];
