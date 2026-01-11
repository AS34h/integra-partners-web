'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Shield, Users, TrendingUp, Target } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true }
}

const domains = [
  {
    icon: Shield,
    title: 'Gouvernance & Conformité',
    description: 'Structuration institutionnelle, conformité réglementaire (OHADA, RGPD) et gouvernance d\'entreprise souveraine.',
    href: '/domaines/gouvernance'
  },
  {
    icon: Target,
    title: 'Stratégie & Positionnement',
    description: 'Définition de trajectoires stratégiques à long terme, diagnostic de marché et élaboration de plans stratégiques.',
    href: '/domaines/strategie'
  },
  {
    icon: Users,
    title: 'Capital Humain & Leadership',
    description: 'Coaching de dirigeants, structuration RH, développement des compétences et alignement organisationnel.',
    href: '/domaines/capital-humain'
  },
  {
    icon: TrendingUp,
    title: 'Transformation Opérationnelle',
    description: 'Optimisation des processus, conduite du changement, digitalisation et amélioration de la performance.',
    href: '/domaines/transformation'
  }
]

const values = [
  {
    title: 'Souveraineté',
    description: 'Cabinet africain indépendant, méthodologie propriétaire adaptée aux réalités institutionnelles locales.'
  },
  {
    title: 'Excellence',
    description: 'Standards internationaux, rigueur analytique et livrables de niveau institutionnel.'
  },
  {
    title: 'Confidentialité',
    description: 'Protection absolue des données stratégiques, conformité RGPD et discrétion garantie.'
  }
]

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-navy text-white">
        <div className="container mx-auto py-24 md:py-32">
          <motion.div 
            className="max-w-3xl"
            {...fadeInUp}
          >
            <h1 className="font-heading text-h1 mb-6">
              Conseil Stratégique <br />
              pour Dirigeants Institutionnels
            </h1>
            <p className="text-body-l text-gray-200 mb-8">
              INTEGRA PARTNERS accompagne les dirigeants d'entreprises et d'institutions 
              dans leurs décisions stratégiques majeures : gouvernance, transformation, 
              capital humain et positionnement souverain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-navy hover:bg-gray-100"
              >
                Diagnostic stratégique
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:decoration-white"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Découvrir la Méthode INTEGRA
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cabinet Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-6">
              Cabinet Souverain d'Excellence Stratégique
            </h2>
            <p className="text-body-l text-anthracite">
              Fondé sur une expertise internationale et une connaissance approfondie 
              des environnements institutionnels africains, INTEGRA PARTNERS offre 
              un conseil de haut niveau, indépendant et adapté aux enjeux de souveraineté.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            {...fadeInUp}
          >
            {values.map((value, index) => (
              <Card 
                key={index}
                variant="custom"
                className="p-8 text-center"
              >
                <h3 className="font-heading text-h4 text-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-body-m text-gray-700">
                  {value.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Domaines d'Expertise
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Quatre piliers d'intervention pour accompagner les transformations 
              institutionnelles et stratégiques de votre organisation.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            {...fadeInUp}
          >
            {domains.map((domain, index) => {
              const Icon = domain.icon
              return (
                <Card 
                  key={index}
                  variant="custom"
                  hover="lift"
                  className="p-8 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy text-white flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-h4 text-navy mb-3">
                        {domain.title}
                      </h3>
                      <p className="text-body-m text-gray-700 mb-4">
                        {domain.description}
                      </p>
                      <Link 
                        href={domain.href}
                        className="inline-flex items-center gap-2 text-body-m text-navy font-medium group-hover:gap-3 transition-all"
                      >
                        En savoir plus
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Methodology CTA */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 mb-6">
              La Méthode INTEGRA
            </h2>
            <p className="text-body-l text-gray-200 mb-8">
              Une méthodologie propriétaire structurée en 6 phases pour garantir 
              l'excellence opérationnelle et l'alignement stratégique : Diagnostic, 
              Cadrage, Analyse, Recommandations, Implémentation, Suivi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-navy hover:bg-gray-100"
              >
                Découvrir la méthode
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:decoration-white"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Cas d'application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-6">
              Engageons la Transformation
            </h2>
            <p className="text-body-l text-anthracite mb-8">
              Bénéficiez d'un diagnostic stratégique préliminaire pour identifier 
              les leviers de performance et les axes de transformation prioritaires 
              pour votre organisation.
            </p>
            <Button 
              variant="primary" 
              size="lg"
            >
              Demander un diagnostic
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
  );
}
