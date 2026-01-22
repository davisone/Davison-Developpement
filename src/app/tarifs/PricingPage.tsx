'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Check, ArrowRight, Globe, RefreshCw, Code, Smartphone, Settings } from 'lucide-react'

const pricingCategories = [
  {
    id: 'sites-vitrine',
    title: 'Sites Vitrine',
    icon: Globe,
    description: 'Votre présence en ligne professionnelle',
    plans: [
      {
        name: 'Essentiel',
        price: '990',
        popular: true,
        description: 'Idéal pour démarrer votre présence en ligne',
        features: [
          '1 à 5 pages',
          'Design responsive (mobile, tablette, desktop)',
          'Formulaire de contact',
          'Optimisation SEO de base',
          'Hébergement 1ère année inclus',
          'Formation à la prise en main',
        ],
      },
      {
        name: 'Professionnel',
        price: '1 790',
        description: 'Pour une image de marque renforcée',
        features: [
          '5 à 10 pages',
          'Design sur-mesure premium',
          'Animations et effets visuels',
          'Blog intégré',
          'SEO avancé',
          'Intégration réseaux sociaux',
          'Google Analytics',
          'Support 3 mois inclus',
        ],
      },
    ],
  },
  {
    id: 'refonte',
    title: 'Refonte de site',
    icon: RefreshCw,
    description: 'Donnez un nouveau souffle à votre site existant',
    plans: [
      {
        name: 'Refonte légère',
        price: '790',
        description: 'Modernisation visuelle de votre site',
        features: [
          'Nouveau design moderne',
          'Conservation de la structure existante',
          'Optimisation mobile',
          'Amélioration des performances',
          'Mise à jour du contenu',
        ],
      },
      {
        name: 'Refonte complète',
        price: '1 490',
        popular: true,
        description: 'Transformation totale de votre présence web',
        features: [
          'Audit complet de l\'existant',
          'Nouvelle architecture',
          'Design entièrement repensé',
          'Migration des contenus',
          'Redirections SEO',
          'Optimisation des performances',
          'Formation utilisateur',
        ],
      },
    ],
  },
  {
    id: 'applications',
    title: 'Applications',
    icon: Code,
    description: 'Solutions sur-mesure pour vos besoins spécifiques',
    plans: [
      {
        name: 'Application Web',
        price: '2 990',
        popular: false,
        icon: Code,
        description: 'Outil métier ou plateforme web',
        features: [
          'Analyse des besoins approfondie',
          'Conception UX/UI personnalisée',
          'Développement sur-mesure',
          'Base de données',
          'Espace administration',
          'Tests et déploiement',
          'Documentation technique',
        ],
      },
      {
        name: 'Application Mobile',
        price: '4 990',
        popular: false,
        icon: Smartphone,
        description: 'Application iOS et Android',
        features: [
          'Application hybride (iOS + Android)',
          'Design adapté mobile natif',
          'Fonctionnalités sur-mesure',
          'Notifications push',
          'Publication stores',
          'Maintenance 3 mois incluse',
        ],
      },
    ],
  },
]

const maintenancePlans = [
  {
    name: 'Sérénité',
    price: '59',
    description: 'L\'essentiel pour garder votre site à jour',
    features: [
      'Mises à jour de sécurité',
      'Sauvegardes hebdomadaires',
      'Monitoring disponibilité',
      'Support par email',
    ],
  },
  {
    name: 'Confort',
    price: '99',
    popular: true,
    description: 'Pour un site toujours performant',
    features: [
      'Tout le pack Sérénité',
      'Modifications mineures (2h/mois)',
      'Rapport mensuel',
      'Support prioritaire',
      'Optimisation performances',
    ],
  },
  {
    name: 'Performance',
    price: '199',
    description: 'Accompagnement complet',
    features: [
      'Tout le pack Confort',
      'Évolutions mensuelles (4h/mois)',
      'Conseils stratégiques',
      'Veille technologique',
      'Interlocuteur dédié',
    ],
  },
]

export function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Tarifs
              </span>
              <h1 className="heading-1 mt-3 mb-6">
                Des solutions pour chaque ambition
              </h1>
              <p className="text-body">
                Des tarifs indicatifs pour vous donner une première idée.
                Chaque projet étant unique, je vous propose une estimation
                personnalisée après avoir échangé sur vos besoins.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Categories */}
      {pricingCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${categoryIndex % 2 === 1 ? 'bg-secondary' : ''}`}
        >
          <div className="container-custom">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <category.icon className="text-accent" size={32} />
                </div>
                <h2 className="heading-2 mb-4">{category.title}</h2>
                <p className="text-body max-w-2xl mx-auto">{category.description}</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {category.plans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 0.1}>
                  <div
                    className={`card relative h-full flex flex-col ${
                      plan.popular ? 'border-accent/50' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                          Le plus demandé
                        </span>
                      </div>
                    )}
                    <div className="mb-6">
                      <h3 className="text-white font-semibold text-xl mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-neutral-400 text-sm">{plan.description}</p>
                    </div>
                    <div className="mb-6">
                      <span className="text-sm text-neutral-400">À partir de</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-accent">
                          {plan.price}
                        </span>
                        <span className="text-neutral-400">€</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                            <Check className="text-accent" size={12} />
                          </div>
                          <span className="text-neutral-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      href="/contact"
                      variant={plan.popular ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      Demander une estimation
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Maintenance */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Settings className="text-accent" size={32} />
              </div>
              <h2 className="heading-2 mb-4">Maintenance & Évolution</h2>
              <p className="text-body max-w-2xl mx-auto">
                Gardez votre site performant et sécurisé avec un accompagnement continu.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 0.1}>
                <div
                  className={`card relative h-full flex flex-col ${
                    plan.popular ? 'border-accent/50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        Recommandé
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-white font-semibold text-xl mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-neutral-400 text-sm">{plan.description}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-sm text-neutral-400">À partir de</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-accent">
                        {plan.price}
                      </span>
                      <span className="text-neutral-400">€/mois</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                          <Check className="text-accent" size={12} />
                        </div>
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Souscrire
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-3 mb-6">Chaque projet est unique</h2>
              <p className="text-body mb-4">
                Les tarifs affichés sont des points de départ indicatifs.
                Après un premier échange pour comprendre vos besoins,
                je vous fournis une estimation personnalisée détaillée,
                sans engagement.
              </p>
              <p className="text-neutral-400 text-sm mb-8">
                Paiement en 2 ou 3 fois sans frais possible • Acompte de 30% au démarrage
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
              <h2 className="heading-2 mb-4">Prêt à concrétiser votre projet ?</h2>
              <p className="text-body max-w-xl mx-auto mb-8">
                Discutons de vos besoins et trouvons ensemble la solution
                la plus adaptée à votre budget.
              </p>
              <Button href="/contact" size="lg">
                Demander mon estimation personnalisée
                <ArrowRight size={20} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}