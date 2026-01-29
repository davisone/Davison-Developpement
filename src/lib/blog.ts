import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { BlogPost, BlogCategory } from '@/data/blog'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      return getPostBySlug(slug)
    })

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    readTime: data.readTime,
    category: data.category as BlogCategory,
    tags: data.tags || [],
    image: data.image,
    content,
  }
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export async function getPostContent(content: string): Promise<string> {
  const result = await remark().use(html).process(content)
  return result.toString()
}
