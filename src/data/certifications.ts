export interface Certification {
  title: string
  issuer: string
  year: number
  image: string
}

/** Sorted newest first; the gallery preserves this order. */
export const certifications: readonly Certification[] = [
  {
    title: 'Google Analytics Certification',
    issuer: 'Google Analytics',
    year: 2026,
    image: '/certifications/Google Analytics Certification.png',
  },
  {
    title: 'Get Started Using Google Analytics',
    issuer: 'Google Analytics',
    year: 2026,
    image: '/certifications/Get started using Google Analytics.png',
  },
  {
    title: 'Dive Deeper into GA4 Data and Reports',
    issuer: 'Google Analytics',
    year: 2026,
    image: '/certifications/Dive-Deeper-into GA4-Data-and-Reports.png',
  },
  {
    title: 'Manage GA4 Data and Learn to Read Reports',
    issuer: 'Google Analytics',
    year: 2026,
    image: '/certifications/Manage GA4 Data and Learn to Read Reports.png',
  },
  {
    title: 'Use GA4 with Other Tools and Data Sources',
    issuer: 'Google Analytics',
    year: 2026,
    image: '/certifications/Use GA4 with other Tools and Data Sources.png',
  },
  {
    title: 'SEO Certified',
    issuer: 'HubSpot Academy',
    year: 2026,
    image: '/certifications/seo1.png',
  },
  {
    title: 'SEO II Certified',
    issuer: 'HubSpot Academy',
    year: 2026,
    image: '/certifications/seo2.png',
  },
  {
    title: 'Content Marketing Certified',
    issuer: 'HubSpot Academy',
    year: 2025,
    image: '/certifications/content-marketing.png',
  },
  {
    title: 'Digital Advertising Certified',
    issuer: 'HubSpot Academy',
    year: 2025,
    image: '/certifications/digital-advertising.png',
  },
  {
    title: 'Website UI/UX Designing using ChatGPT',
    issuer: 'Simplilearn | SkillUp',
    year: 2025,
    image: '/certifications/uiux-designing.png',
  },
  {
    title: 'Introduction to Graphic Design; Basics of UI/UX',
    issuer: 'Simplilearn | SkillUp',
    year: 2025,
    image: '/certifications/graphic-design.png',
  },
  {
    title: 'Design Thinking for Beginners',
    issuer: 'Simplilearn | SkillUp',
    year: 2025,
    image: '/certifications/design-thinking.png',
  },
  {
    title: 'Introduction to PHP',
    issuer: 'Simplilearn | SkillUp',
    year: 2025,
    image: '/certifications/introduction-php.png',
  },
  {
    title: 'Legacy JavaScript Algorithms and Data Structures V7',
    issuer: 'FreeCodeCamp',
    year: 2025,
    image: '/certifications/javascript-algorithms.png',
  },
  {
    title: 'Backend Development and APIs V8',
    issuer: 'FreeCodeCamp',
    year: 2025,
    image: '/certifications/backend-development.png',
  },
  {
    title: 'Legacy Responsive Web Design V8',
    issuer: 'FreeCodeCamp',
    year: 2025,
    image: '/certifications/responsive-web-design.png',
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    year: 2024,
    image: '/certifications/js-essential.png',
  },
  {
    title: 'Introduction to Figma',
    issuer: 'Simplilearn | SkillUp',
    year: 2024,
    image: '/certifications/introduction-figma.png',
  },
  {
    title: 'CompTIA ITF+',
    issuer: 'Coursera',
    year: 2023,
    image: '/certifications/comptia-itf+.png',
  },
]

export const certIssuers: readonly string[] = [...new Set(certifications.map(c => c.issuer))]
