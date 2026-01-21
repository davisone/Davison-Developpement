'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Code2, Users, Zap } from 'lucide-react'

const values = [
  {
    icon: Code2,
    title: 'Expertise technique',
    description:
      'Maîtrise des technologies modernes pour des solutions performantes et pérennes.',
  },
  {
    icon: Users,
    title: 'Proximité',
    description:
      'Un interlocuteur unique, disponible et à l\'écoute tout au long de votre projet.',
  },
  {
    icon: Zap,
    title: 'Qualité',
    description:
      'Un code propre, des performances optimisées et une attention au détail.',
  },
]

export function AboutSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                À propos
              </span>
              <h2 className="heading-2 mt-3 mb-6">
                Votre partenaire pour un web de qualité
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-body mb-6">
                Je suis développeur web freelance, passionné par la création
                de solutions digitales qui font la différence. Basé près de Rennes,
                j&apos;accompagne les entreprises et entrepreneurs dans leurs projets web,
                de la conception à la mise en ligne.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-body">
                Mon objectif : vous proposer un site ou une application
                qui reflète votre professionnalisme, attire vos clients
                et vous aide à atteindre vos objectifs.
              </p>
            </ScrollReveal>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1} direction="left">
                <div className="card flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <value.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                    <p className="text-neutral-400 text-sm">{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
