import type { Metadata } from 'next'
import { PricingPage } from './PricingPage'

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    'Découvrez mes tarifs pour la création de sites internet, refonte de sites, applications web et mobiles. Tarification transparente et devis personnalisé.',
}

export default function Page() {
  return <PricingPage />
}