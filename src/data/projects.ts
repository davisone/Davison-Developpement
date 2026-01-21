export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: 'site' | 'app-web' | 'app-mobile' | 'refonte'
  link?: string
  year: number
}

export const projects: Project[] = [
  // Exemples de projets - à remplacer par tes vrais projets
  {
    id: 'projet-exemple-1',
    title: 'Site E-commerce Mode',
    description: 'Boutique en ligne complète avec système de paiement, gestion des stocks et interface d\'administration.',
    image: '/images/projects/placeholder.jpg',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    category: 'site',
    year: 2024,
  },
  {
    id: 'projet-exemple-2',
    title: 'Application de Gestion',
    description: 'Tableau de bord interne pour la gestion des ressources humaines et le suivi des projets.',
    image: '/images/projects/placeholder.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker'],
    category: 'app-web',
    year: 2024,
  },
  {
    id: 'projet-exemple-3',
    title: 'Application Mobile Santé',
    description: 'Application de suivi santé avec synchronisation des données et notifications personnalisées.',
    image: '/images/projects/placeholder.jpg',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    category: 'app-mobile',
    year: 2024,
  },
]

export const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'site', label: 'Sites web' },
  { id: 'app-web', label: 'Applications web' },
  { id: 'app-mobile', label: 'Applications mobiles' },
  { id: 'refonte', label: 'Refontes' },
]
