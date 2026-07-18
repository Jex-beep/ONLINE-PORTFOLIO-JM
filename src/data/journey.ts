export interface JourneyChapter {
  num: string
  years: string
  title: string
  story: string
  milestones: readonly string[]
}

/**
 * TODO(Julien): Adjust stories/milestones if any year details are off —
 * this timeline was drafted from the resume and certification dates.
 */
export const journey: readonly JourneyChapter[] = [
  {
    num: '01',
    years: '2023 — 2024',
    title: 'Foundations',
    story:
      'Year one started with the building blocks — HTML, CSS and JavaScript — and the realization that a blank editor can become anything. I earned my first certification and learned how the web actually works, one static page at a time.',
    milestones: ['CompTIA ITF+ certified', 'First static websites', 'Core programming logic'],
  },
  {
    num: '02',
    years: '2024 — 2025',
    title: 'Design Meets Code',
    story:
      'Second year is where design entered the picture. I picked up Figma and UI/UX fundamentals, went deeper into JavaScript with Cisco, and shipped IPONLY — a budget tracker for students — as my first real product with Vue.',
    milestones: [
      'Introduction to Figma',
      'JavaScript Essentials 1 (Cisco)',
      'IPONLY — frontend & design',
    ],
  },
  {
    num: '03',
    years: '2025 — 2026',
    title: 'Going Full-Stack',
    story:
      'Third year turned me into a full-stack developer. Angular, Node.js and real databases powered GrabMeYaya, MJ Quality Cars and LOFU — while FreeCodeCamp and HubSpot certifications sharpened both my backend and marketing instincts.',
    milestones: [
      'GrabMeYaya · MJ Quality Cars · LOFU',
      'FreeCodeCamp — JS Algorithms, Backend & APIs',
      'HubSpot — Content Marketing & Digital Advertising',
    ],
  },
  {
    num: '04',
    years: '2026 — 2027',
    title: 'Client-Ready',
    story:
      'Fourth year is about proving it in the real world: GT Garage shipped as my first freelance client project, CAMPASS brings real-time queueing to my own university, and GA4 + SEO certifications round out the product skillset. Next stop — internship and graduation, April 2027.',
    milestones: [
      'GT Garage — freelance client delivery',
      'CAMPASS — real-time campus queueing',
      'Google Analytics & SEO certifications',
    ],
  },
]
