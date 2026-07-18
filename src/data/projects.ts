export type ProjectCategory = 'academic' | 'freelance'

export interface Project {
  slug: string
  name: string
  tagline: string
  category: ProjectCategory
  role: string
  goal: string
  features: readonly string[]
  tech: readonly string[]
  logo: string
  images: readonly string[]
  /** Order on the Home page featured list; undefined = not featured */
  featuredOrder?: number
}

export const projects: readonly Project[] = [
  {
    slug: 'gt-garage',
    name: 'GT Garage',
    tagline: 'Bookings, services and content for a real auto repair shop.',
    category: 'freelance',
    role: 'Full-Stack Developer (Client Project)',
    goal: 'A client website for an auto repair shop that showcases its services and packages, backed by a real-time booking system. The admin sees bookings live and can accept or deny them, while customers track their booking status by entering a reference number on the tracking page.',
    features: [
      'Real-time booking system with admin approval flow',
      'Booking tracking via reference number',
      'Service and package showcase',
      'Admin-authored blog for stronger SEO',
    ],
    tech: ['Angular', 'Supabase', 'Node.js'],
    logo: '/projects/gt-garage-logo.png',
    images: [
      '/projects/gtgarage1.png',
      '/projects/gtgarage2.png',
      '/projects/gtgarage3.png',
      '/projects/gtgarage4.png',
    ],
    featuredOrder: 1,
  },
  {
    slug: 'grabmeyaya',
    name: 'GrabMeYaya',
    tagline: 'A verified marketplace connecting families with trusted caregivers.',
    category: 'academic',
    role: 'Full-Stack Developer',
    goal: 'A high-performance, dual-access platform that streamlines domestic service recruitment — a secure, verified environment where service providers showcase their professional history and employers hire through an optimized, filter-driven experience.',
    features: [
      'Dual-role registration system',
      'User profile management system',
      'Advanced hiring interface with filters',
      'Simple dashboard layout',
      'Clean and intuitive user flow',
    ],
    tech: ['Angular', 'Node.js', 'PostgreSQL'],
    logo: '/projects/grab-me-yaya-logo.png',
    images: [
      '/projects/grabmeyaya1.png',
      '/projects/grabmeyaya2.png',
      '/projects/grabmeyaya3.png',
      '/projects/grabmeyaya4.png',
    ],
    featuredOrder: 2,
  },
  {
    slug: 'campass',
    name: 'CAMPASS',
    tagline: 'Real-time queue management for Holy Angel University.',
    category: 'academic',
    role: 'Full-Stack Developer',
    goal: 'A centralized, real-time queue management ecosystem for student services at Holy Angel University — a synchronized digital waiting room that eliminates physical congestion while giving administrators data-driven insights to optimize campus service efficiency.',
    features: [
      'Real-time queue tracking system',
      'Digital service appointment scheduling',
      'Student notification system',
      'Admin analytics dashboard',
      'Mobile-optimized interface',
    ],
    tech: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'PostgreSQL'],
    logo: '/projects/campass-logo.png',
    images: ['/projects/campass1.png', '/projects/campass2.png'],
    featuredOrder: 3,
  },
  {
    slug: 'mj-quality-cars',
    name: 'MJ Quality Cars',
    tagline: 'A showroom-grade marketplace for quality used cars.',
    category: 'academic',
    role: 'Full-Stack Developer',
    goal: 'A premium, visually-driven automotive marketplace that replicates the prestige of a physical showroom — a high-speed inventory system handling high-resolution media on a performance-first interface, from vehicle discovery to final inquiry.',
    features: [
      'Car listing grid with advanced filtering',
      'Detailed vehicle information pages',
      'Organized category navigation system',
      'Interactive image gallery for vehicles',
    ],
    tech: ['Angular', 'Node.js', 'MongoDB', 'TailwindCSS'],
    logo: '/projects/mjqualitycars-logo.png',
    images: [
      '/projects/mjqualitycars1.png',
      '/projects/mjqualitycars2.png',
      '/projects/mjqualitycars3.png',
    ],
  },
  {
    slug: 'iponly',
    name: 'IPONLY',
    tagline: 'Budget tracking made simple for students.',
    category: 'academic',
    role: 'Frontend Developer & Designer',
    goal: 'An intuitive financial management tool optimized for students — simplifying expense tracking into digestible visual insights through a minimalist yet powerful analytical dashboard that supports informed financial decisions.',
    features: [
      'Expense logging and categorization',
      'Real-time savings tracking system',
      'Interactive dashboard overview',
      'Clean financial summary UI',
      'Fully responsive layout design',
    ],
    tech: ['Vue.js', 'Express.js', 'MySQL'],
    logo: '/projects/iponly-logo.png',
    images: ['/projects/iponly1.png', '/projects/iponly2.png', '/projects/iponly3.png'],
  },
  {
    slug: 'lofu',
    name: 'LOFU',
    tagline: 'Lost and found, reunited around Angeles City.',
    category: 'academic',
    role: 'Full-Stack Developer',
    goal: 'A lost-and-found web application where people post lost or found items around Angeles City, Pampanga — with real-time chat and a poster-driven verification flow that confirms a claimer is the true owner before an item changes hands.',
    features: [
      'Post lost and found items with photos',
      'Real-time chatbox between poster and claimer',
      'Poster-verified claim confirmation flow',
      'Item category filtering and search',
    ],
    tech: ['Angular', 'MongoDB', 'Node.js'],
    logo: '/projects/lofu-logo.png',
    images: ['/projects/lofu1.png', '/projects/lofu2.png', '/projects/lofu3.png', '/projects/lofu4.png'],
  },
]

export const featuredProjects: readonly Project[] = projects
  .filter((p): p is Project & { featuredOrder: number } => p.featuredOrder !== undefined)
  .sort((a, b) => a.featuredOrder - b.featuredOrder)
