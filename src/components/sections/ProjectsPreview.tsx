'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { projects } from '@/data/projects'

export function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Réalisations
            </span>
            <h2 className="heading-2 mt-3 mb-4">
              Quelques projets récents
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Découvrez une sélection de mes dernières réalisations
              et les technologies utilisées.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <article className="card group overflow-hidden p-0">
                {/* Image placeholder */}
                <div className="relative aspect-video bg-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                    <span className="text-sm">Image du projet</span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <ExternalLink className="text-white" size={24} />
                    </a>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-neutral-800 text-neutral-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium"
            >
              Voir toutes les réalisations
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
