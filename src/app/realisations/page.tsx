import type { Metadata } from 'next'
import { RealisationsPage } from './RealisationsPage'

export const metadata: Metadata = {
  title: 'Réalisations',
  description:
    'Découvrez mes projets : sites internet, applications web et mobiles. Portfolio de réalisations avec les technologies utilisées.',
}

export default function Page() {
  return <RealisationsPage />
}
