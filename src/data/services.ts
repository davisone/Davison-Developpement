import { Globe, RefreshCw, Search, AppWindow, Smartphone } from 'lucide-react'

export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: typeof Globe
  features: string[]
}

export const services: Service[] = [
  {
    id: 'creation-site',
    title: 'Création de sites internet',
    shortDescription: 'Sites vitrines, e-commerce et sur-mesure, modernes et performants.',
    fullDescription: `Vous avez besoin d'un site vitrine, d'une boutique en ligne ou d'un site sur-mesure ?
    Je conçois des sites modernes, rapides et adaptés à tous les écrans, pensés pour valoriser
    votre activité et convertir vos visiteurs en clients.`,
    icon: Globe,
    features: [
      'Design moderne et responsive',
      'Optimisé pour la performance',
      'Interface intuitive',
      'Compatible tous navigateurs',
    ],
  },
  {
    id: 'refonte-site',
    title: 'Refonte de sites existants',
    shortDescription: 'Modernisez votre site avec un design actuel et de meilleures performances.',
    fullDescription: `Votre site actuel est vieillissant, lent ou peu adapté aux mobiles ?
    Je lui donne une seconde vie avec un design actuel, une meilleure expérience utilisateur
    et des performances optimisées.`,
    icon: RefreshCw,
    features: [
      'Audit de l\'existant',
      'Nouveau design moderne',
      'Migration des contenus',
      'Amélioration des performances',
    ],
  },
  {
    id: 'seo',
    title: 'Référencement SEO',
    shortDescription: 'Améliorez votre visibilité sur Google et attirez plus de clients.',
    fullDescription: `Être visible sur Google, c'est essentiel. J'optimise votre site pour les moteurs
    de recherche afin d'attirer un trafic qualifié et durable, sans dépendre uniquement de la publicité.`,
    icon: Search,
    features: [
      'Audit SEO complet',
      'Optimisation technique',
      'Stratégie de contenu',
      'Suivi des performances',
    ],
  },
  {
    id: 'application-web',
    title: 'Applications web',
    shortDescription: 'Solutions sur-mesure : tableaux de bord, outils internes, plateformes métier.',
    fullDescription: `Vous avez un besoin spécifique qui dépasse le site classique ?
    Je développe des applications web sur-mesure : tableaux de bord, outils internes, plateformes métier.`,
    icon: AppWindow,
    features: [
      'Développement sur-mesure',
      'Interface utilisateur intuitive',
      'API et intégrations',
      'Sécurité renforcée',
    ],
  },
  {
    id: 'application-mobile',
    title: 'Applications mobiles',
    shortDescription: 'Applications iOS et Android performantes et intuitives.',
    fullDescription: `Touchez vos utilisateurs directement sur leur smartphone avec une application
    iOS et Android performante, conçue pour offrir une expérience fluide.`,
    icon: Smartphone,
    features: [
      'iOS et Android',
      'Design natif',
      'Notifications push',
      'Mode hors-ligne',
    ],
  },
]
