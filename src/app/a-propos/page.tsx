import type { Metadata } from 'next'
import { AboutPage } from './AboutPage'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Découvrez mon parcours de développeur web freelance. Evan Davison, basé près de Rennes, je crée des sites et applications sur-mesure pour les entreprises locales.',
}

export default function Page() {
  return <AboutPage />
}