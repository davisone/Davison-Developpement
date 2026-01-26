'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@dvs-web.fr',
    href: 'mailto:contact@dvs-web.fr',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '06 51 01 95 06',
    href: 'tel:+33651019506',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Rennes et alentours, France',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'DVS Web',
    href: 'https://linkedin.com/in/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/',
    href: 'https://github.com/',
  },
]

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      setIsSubmitted(true)
      setFormState({ name: '', email: '', subject: '', message: '' })
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const inputClasses = cn(
    'w-full px-4 py-3 bg-secondary border border-neutral-800 rounded-lg',
    'text-white placeholder:text-neutral-500',
    'focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent',
    'transition-colors'
  )

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Contact
              </span>
              <h1 className="heading-1 mt-3 mb-6">Parlons de votre projet</h1>
              <p className="text-body">
                Une idée, une question, un besoin ? Je vous réponds sous 24h.
                Décrivez-moi votre projet et voyons ensemble comment lui donner vie.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {isSubmitted ? (
                  <div className="card text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-500" size={32} />
                    </div>
                    <h2 className="heading-3 mb-2">Message envoyé !</h2>
                    <p className="text-neutral-400">
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-accent hover:text-accent-light transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-300 mb-2"
                        >
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-300 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-neutral-300 mb-2"
                      >
                        Sujet
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="creation-site">Création de site internet</option>
                        <option value="refonte-site">Refonte de site existant</option>
                        <option value="application-web">Application web</option>
                        <option value="application-mobile">Application mobile</option>
                        <option value="seo">Référencement SEO</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className={cn(inputClasses, 'resize-none')}
                        placeholder="Décrivez votre projet, vos besoins, vos questions..."
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          Envoyer le message
                          <Send size={18} />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="card">
                  <h2 className="text-white font-semibold text-lg mb-6">
                    Coordonnées
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <item.icon className="text-accent" size={20} />
                        </div>
                        <div>
                          <p className="text-neutral-500 text-sm">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith('http') ? '_blank' : undefined}
                              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-white hover:text-accent transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="border-neutral-800 my-6" />

                  <div>
                    <h3 className="text-white font-medium mb-2">Disponibilité</h3>
                    <p className="text-neutral-400 text-sm">
                      Je suis généralement disponible du lundi au vendredi,
                      de 9h à 18h. Je réponds à tous les messages sous 24h.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
