import type { Metadata } from 'next'
import { ContactPage } from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez-moi pour discuter de votre projet web. Développeur freelance disponible pour la création de sites internet et applications à Rennes et alentours.',
}

export default function Page() {
  return <ContactPage />
}
