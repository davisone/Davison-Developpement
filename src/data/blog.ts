export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: BlogCategory
  tags: string[]
  image?: string
  content: string
}

export type BlogCategory = 'prix' | 'conseils' | 'seo' | 'tendances'

export interface CategoryInfo {
  label: string
  description: string
}

export const categories: Record<BlogCategory, CategoryInfo> = {
  prix: {
    label: 'Prix & Budget',
    description: 'Guides tarifaires et budgets pour vos projets web',
  },
  conseils: {
    label: 'Conseils',
    description: 'Conseils pratiques pour votre présence en ligne',
  },
  seo: {
    label: 'SEO',
    description: 'Référencement naturel et visibilité sur Google',
  },
  tendances: {
    label: 'Tendances',
    description: 'Les dernières tendances du développement web',
  },
}
