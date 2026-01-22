'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { ArrowRight, GraduationCap, Rocket, MapPin, Target } from 'lucide-react'

const parcours = [
  {
    periode: '2020 - 2022',
    titre: 'Bac STMG',
    description: 'Première approche de la gestion et du numérique.',
  },
  {
    periode: '2022 - 2024',
    titre: 'BTS SIO option SLAM',
    description: 'Formation aux fondamentaux du développement : programmation, bases de données, projets en équipe.',
  },
  {
    periode: '2024 - 2025',
    titre: 'Bachelor Développement Web',
    description: 'Approfondissement des compétences techniques et première expérience entrepreneuriale.',
  },
]

const valeurs = [
  {
    icon: Target,
    titre: 'Solutions concrètes',
    description: 'Je ne vends pas de la technique, je résous vos problèmes. Un site doit vous apporter des clients, pas des maux de tête.',
  },
  {
    icon: Rocket,
    titre: 'Passion du métier',
    description: "J'ai créé cette entreprise pour travailler sur des projets qui me passionnent et vous faire bénéficier de cette énergie.",
  },
  {
    icon: MapPin,
    titre: 'Proximité',
    description: 'Basé à Mordelles près de Rennes, je privilégie les échanges directs et une relation de confiance.',
  },
]

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                À propos
              </span>
              <h1 className="heading-1 mt-3 mb-6">
                Evan Davison, développeur web freelance
              </h1>
              <p className="text-body text-lg">
                Jeune développeur passionné basé près de Rennes, j&apos;accompagne
                les entreprises locales dans leur présence digitale avec des solutions
                modernes et accessibles.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro personnelle */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl font-bold text-accent">
                    ED
                  </div>
                  <div>
                    <h2 className="text-white font-semibold text-lg">Evan Davison</h2>
                    <p className="text-neutral-400">Développeur Web Freelance</p>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  Actuellement en Bachelor Développement Web (Bac+3), j&apos;ai lancé
                  Davison Développement pour mettre mes compétences au service de
                  projets concrets. Mon objectif : créer des sites et applications
                  qui apportent une vraie valeur à mes clients, tout en continuant
                  à progresser sur des projets stimulants.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <h2 className="heading-3 mb-6">Pourquoi j&apos;ai créé cette entreprise</h2>
                <div className="space-y-4 text-neutral-300">
                  <p>
                    Après plusieurs années de formation en développement, j&apos;avais
                    envie de passer à l&apos;action sur de vrais projets. Pas seulement
                    des exercices scolaires, mais des sites qui vont vraiment être
                    utilisés, qui vont aider des entreprises à se développer.
                  </p>
                  <p>
                    Créer cette entreprise, c&apos;est aussi une façon de me challenger,
                    d&apos;apprendre plus vite et de construire un portfolio solide
                    projet après projet.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Parcours
              </span>
              <h2 className="heading-2 mt-3">Mon chemin vers le développement</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {parcours.map((etape, index) => (
              <ScrollReveal key={etape.titre} delay={index * 0.1}>
                <div className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <GraduationCap className="text-accent" size={20} />
                    </div>
                    {index < parcours.length - 1 && (
                      <div className="w-px h-full bg-neutral-700 mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-accent text-sm font-medium">
                      {etape.periode}
                    </span>
                    <h3 className="text-white font-semibold text-lg mt-1 mb-2">
                      {etape.titre}
                    </h3>
                    <p className="text-neutral-400">{etape.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Mon approche
              </span>
              <h2 className="heading-2 mt-3">Ce qui compte pour moi</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {valeurs.map((valeur, index) => (
              <ScrollReveal key={valeur.titre} delay={index * 0.1}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <valeur.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {valeur.titre}
                  </h3>
                  <p className="text-neutral-400">{valeur.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* En dehors du code */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="card max-w-2xl mx-auto text-center">
              <h2 className="text-white font-semibold text-lg mb-4">
                En dehors du code
              </h2>
              <p className="text-neutral-300">
                Quand je ne suis pas devant mon écran, vous me trouverez probablement
                à la salle de sport ou en train d&apos;écouter de la musique. J&apos;ai
                aussi pratiqué le football pendant plusieurs années, ce qui m&apos;a
                appris l&apos;importance du travail d&apos;équipe et de la persévérance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="heading-2 mb-4">Envie de travailler ensemble ?</h2>
              <p className="text-body max-w-xl mx-auto mb-8">
                Que vous ayez un projet précis ou juste une idée, je serais ravi
                d&apos;en discuter avec vous. Premier échange sans engagement.
              </p>
              <Button href="/contact" size="lg">
                Me contacter
                <ArrowRight size={20} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}