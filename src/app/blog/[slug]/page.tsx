import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPostBySlug, getPostContent } from '@/lib/blog'
import { BlogPostPage } from './BlogPostPage'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug)
    return {
      title: `${post.title} | DVS Web`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://dvs-web.fr/blog/${post.slug}`,
        type: 'article',
        publishedTime: post.date,
      },
    }
  } catch {
    return {
      title: 'Article non trouvé | DVS Web',
    }
  }
}

export default async function Page({ params }: PageProps) {
  let post
  try {
    post = getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  const contentHtml = await getPostContent(post.content)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Evan Davison',
      url: 'https://dvs-web.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DVS Web',
      url: 'https://dvs-web.fr',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dvs-web.fr/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostPage post={post} contentHtml={contentHtml} />
    </>
  )
}
