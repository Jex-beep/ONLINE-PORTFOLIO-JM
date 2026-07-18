export interface SocialLink {
  label: string
  href: string
}

export const EMAIL = 'jmppunsalan@gmail.com'
export const PHONE_DISPLAY = '(+63) 921 603 0791'
export const PHONE_HREF = 'tel:+639216030791'
export const LOCATION = 'San Francisco, Mabalacat, Pampanga, PH'

export const socials: readonly SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Jex-beep' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/julien-michael-punsalan/' },
  { label: 'Facebook', href: 'https://www.facebook.com/jm.punsalan.2024' },
]
