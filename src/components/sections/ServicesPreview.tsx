'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { services } from '@/data/services'

export function ServicesPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Services
            </span>
            <h2 className="heading-2 mt-3 mb-4">
              Ce que je peux faire pour vous
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Des solutions adaptées à vos besoins, de la création de site vitrine
              au développement d&apos;applications complexes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <Link href={`/services#${service.id}`} className="card group block h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {service.shortDescription}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium"
            >
              Voir tous les services
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
