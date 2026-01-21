import type { Metadata } from 'next'
import { ServicesPage } from './ServicesPage'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Découvrez mes services : création de sites internet, refonte, référencement SEO, développement d\'applications web et mobiles. Solutions sur-mesure pour votre entreprise.',
}

export default function Page() {
  return <ServicesPage />
}
