import { z } from 'zod'

/** Shared by the client form and the /api/contact serverless function. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please tell me your name (at least 2 characters).')
    .max(100, 'Name is too long (100 characters max).'),
  email: z
    .string()
    .trim()
    .email('That email address doesn’t look right.')
    .max(200, 'Email is too long (200 characters max).'),
  subject: z
    .string()
    .trim()
    .min(2, 'A short subject helps me reply faster.')
    .max(150, 'Subject is too long (150 characters max).'),
  message: z
    .string()
    .trim()
    .min(10, 'Tell me a little more — at least 10 characters.')
    .max(5000, 'Message is too long (5,000 characters max).'),
})

export type ContactInput = z.infer<typeof contactSchema>

export type ContactField = keyof ContactInput

export const CONTACT_FIELDS: readonly ContactField[] = ['name', 'email', 'subject', 'message']
