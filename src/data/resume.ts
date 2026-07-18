export interface ResumeProject {
  /** Slug linking to the matching case study, if one exists */
  slug?: string
  title: string
  subtitle: string
  bullets: readonly string[]
  tools?: string
}

export interface SkillGroup {
  label: string
  skills: readonly string[]
}

export const CAREER_OBJECTIVE =
  'Motivated BSIT student specializing in web and mobile application development, seeking an internship or entry-level position where I can apply front-end development, UI design, and system analysis skills while gaining professional industry experience.'

export const academicProjects: readonly ResumeProject[] = [
  {
    slug: 'grabmeyaya',
    title: 'GrabMeYaya',
    subtitle: 'Service Hiring Web Application',
    bullets: [
      'Designed a user-friendly web interface connecting families with caregivers, focusing on clarity, accessibility, and responsive layout.',
      'Built structured page layouts using HTML, CSS, and JavaScript.',
    ],
  },
  {
    slug: 'iponly',
    title: 'IPONLY',
    subtitle: 'Personal Budget Tracker',
    bullets: [
      'Developed a clean front-end interface for tracking income and expenses with an emphasis on usability and visual hierarchy.',
      'Implemented responsive design using Vue.js, Express JS, and Tailwind CSS.',
    ],
  },
  {
    slug: 'mj-quality-cars',
    title: 'MJ Quality Cars',
    subtitle: 'Used Car Sales Website',
    bullets: [
      'Designed and built a responsive website for displaying used car listings with clear navigation and layout structure.',
      'Applied front-end design principles to enhance user browsing experience.',
    ],
    tools: 'HTML, CSS, TypeScript, Express JS, Angular',
  },
]

export const freelanceProjects: readonly ResumeProject[] = [
  {
    slug: 'gt-garage',
    title: 'GT Garage',
    subtitle: 'Auto Repair Shop Website & Booking System',
    bullets: [
      'Built and delivered a client website showcasing shop services and packages, backed by a real-time booking system.',
      'Implemented admin booking management with live accept/deny decisions and reference-number tracking for customers.',
      'Added an admin blog module to strengthen the shop’s SEO performance.',
    ],
    tools: 'Angular, Supabase, Node.js',
  },
]

export const education = {
  school: 'Holy Angel University',
  degree: 'Bachelor of Science in Information Technology',
  location: 'Angeles City, Pampanga',
  graduation: 'Expected Graduation: April 2027',
} as const

export const AWARDS: readonly string[] = [
  "President's / Dean's List Academic Achievement Award — 1st & 2nd Semester, 2023–2026",
]

export const skillGroups: readonly SkillGroup[] = [
  {
    label: 'Technical Skills',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Dart (Flutter)',
      'Vue.js',
      'Angular',
      'UI/UX Design',
      'Front-End Development',
      'Back-End Development',
      'QA Testing',
    ],
  },
  {
    label: 'Tools & Technologies',
    skills: ['Flutter', 'Android Studio', 'Visual Studio Code', 'GitHub', 'Figma', 'Canva'],
  },
  {
    label: 'Soft Skills',
    skills: ['Team Collaboration', 'Time Management', 'Problem Solving', 'Clear Communication'],
  },
]

export const LANGUAGES: readonly string[] = ['English', 'Filipino', 'Kapampangan']

export const RESUME_PDF = '/Julien-Michael-Punsalan-Resume.pdf'
