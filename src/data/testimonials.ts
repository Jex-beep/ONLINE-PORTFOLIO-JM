export interface Testimonial {
  quote: string
  name: string
  role: string
  photo: string
}

/**
 * TODO(Julien): Replace placeholder quotes/names/roles with the real
 * testimonials. Photos already exist in /public/testimonials/.
 */
export const testimonials: readonly Testimonial[] = [
  {
    quote:
      'Working with Julien was smooth from kickoff to handoff — he communicates clearly, designs with intent, and ships what he promises.',
    name: 'KC',
    role: 'Project Teammate',
    photo: '/testimonials/kc.png',
  },
  {
    quote:
      'Julien turned our messy requirements into a clean, working product. His attention to UI detail stands out.',
    name: 'Ed',
    role: 'Project Teammate',
    photo: '/testimonials/ed.jpg',
  },
  {
    quote:
      'Reliable under deadline pressure and always willing to help debug. The kind of developer every team needs.',
    name: 'Jem',
    role: 'Project Teammate',
    photo: '/testimonials/jem.jpg',
  },
  {
    quote:
      'From database to interface, Julien handled our capstone stack end to end without missing a beat.',
    name: 'Micko',
    role: 'Project Teammate',
    photo: '/testimonials/micko.jpg',
  },
  {
    quote:
      'He balances aesthetics and function better than anyone in our batch. His Figma-to-code accuracy is unreal.',
    name: 'Shan',
    role: 'Project Teammate',
    photo: '/testimonials/shan.jpg',
  },
]
