import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Davison Développement | Développeur Web Freelance à Rennes',
    template: '%s | Davison Développement',
  },
  description:
    'Développeur web freelance basé près de Rennes. Création de sites internet, applications web et mobiles sur-mesure. Design moderne, performance et qualité.',
  keywords: [
    'développeur web',
    'freelance',
    'Rennes',
    'création site internet',
    'application web',
    'application mobile',
    'SEO',
    'refonte site',
  ],
  authors: [{ name: 'Davison Développement' }],
  creator: 'Davison Développement',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://davison-developpement.fr',
    siteName: 'Davison Développement',
    title: 'Davison Développement | Développeur Web Freelance à Rennes',
    description:
      'Développeur web freelance basé près de Rennes. Création de sites internet, applications web et mobiles sur-mesure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davison Développement | Développeur Web Freelance à Rennes',
    description:
      'Développeur web freelance basé près de Rennes. Création de sites internet, applications web et mobiles sur-mesure.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-primary text-neutral-200 antialiased">
        {children}
      </body>
    </html>
  )
}
