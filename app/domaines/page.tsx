'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Users, TrendingUp, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true }
}

const domains = [
  {
    id: 'gouvernance',
    icon: Shield,
    title: 'Gouvernance & Conformité',
    tagline: 'Structuration institutionnelle et conformité réglementaire',
    description: 'Accompagnement des dirigeants dans la structuration de la gouvernance, la mise en conformité réglementaire (OHADA, CEMAC, UEMOA, RGPD) et le renforcement des dispositifs de contrôle interne.',
    services: [
      'Structuration des organes de gouvernance (CA, comités)',
      'Mise en conformité OHADA et réglementations sectorielles',
      'Élaboration de chartes et règlements intérieurs',
      'Cartographie des risques et contrôle interne',
      'Gouvernance d\'entreprise familiale',
      'Conformité RGPD et protection des données'
    ],
    outcomes: [
      'Gouvernance conforme aux standards institutionnels',
      'Réduction des risques réglementaires',
      'Clarification des rôles et responsabilités',
      'Renforcement de la crédibilité institutionnelle'
    ]
  },
  {
    id: 'strategie',
    icon: Target,
    title: 'Stratégie & Positionnement',
    tagline: 'Définition de trajectoires stratégiques à long terme',
    description: 'Élaboration de stratégies corporate, analyse de positionnement concurrentiel, identification d\'opportunités de croissance et construction de plans stratégiques à 3-5 ans.',
    services: [
      'Diagnostic stratégique et analyse de marché',
      'Élaboration de plans stratégiques pluriannuels',
      'Positionnement concurrentiel et différenciation',
      'Stratégies d\'expansion géographique ou sectorielle',
      'Modèles économiques et business plans',
      'Due diligence stratégique pour acquisitions'
    ],
    outcomes: [
      'Vision stratégique claire et partagée',
      'Positionnement différenciant validé',
      'Roadmap de croissance chiffrée',
      'Alignement des ressources sur les priorités'
    ]
  },
  {
    id: 'capital-humain',
    icon: Users,
    title: 'Capital Humain & Leadership',
    tagline: 'Développement du leadership et optimisation RH',
    description: 'Coaching de dirigeants, structuration des fonctions RH, développement des talents, accompagnement au changement culturel et renforcement des compétences managériales.',
    services: [
      'Coaching exécutif de dirigeants et comités',
      'Structuration et optimisation de la fonction RH',
      'Élaboration de politiques RH (rémunération, évaluation)',
      'Plans de développement des compétences',
      'Gestion des talents et succession planning',
      'Conduite du changement culturel'
    ],
    outcomes: [
      'Leadership renforcé et aligné',
      'Organisation RH structurée et performante',
      'Engagement et rétention des talents',
      'Culture organisationnelle adaptée aux ambitions'
    ]
  },
  {
    id: 'transformation',
    icon: TrendingUp,
    title: 'Transformation Opérationnelle',
    tagline: 'Optimisation des processus et amélioration de la performance',
    description: 'Refonte des processus métiers, digitalisation, optimisation de la performance opérationnelle, structuration de projets complexes et accompagnement des transformations majeures.',
    services: [
      'Diagnostic et refonte des processus métiers',
      'Stratégies de digitalisation et transformation numérique',
      'Optimisation de la performance opérationnelle',
      'Gestion de projets de transformation complexes',
      'Lean management et amélioration continue',
      'Conduite du changement et accompagnement des équipes'
    ],
    outcomes: [
      'Gains d\'efficacité mesurables (15-30%)',
      'Processus rationalisés et digitalisés',
      'Transformation réussie avec adhésion des équipes',
      'Culture de performance installée'
    ]
  }
]

export default function DomainesPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl"
            {...fadeInUp}
          >
            <h1 className="font-heading text-h1 mb-6">
              Domaines d'Expertise
            </h1>
            <p className="text-body-l text-gray-200">
              Quatre piliers d'intervention couvrant l'ensemble des enjeux stratégiques, 
              organisationnels et opérationnels des dirigeants institutionnels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <div className="space-y-24">
            {domains.map((domain, index) => {
              const Icon = domain.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div 
                  key={domain.id}
                  id={domain.id}
                  className="scroll-mt-24"
                  {...fadeInUp}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    {/* Icon & Title Column */}
                    <div className="lg:w-2/5">
                      <div className="w-16 h-16 rounded-lg bg-navy text-white flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="font-heading text-h2 text-navy mb-4">
                        {domain.title}
                      </h2>
                      <p className="text-body-l text-gold font-medium mb-6">
                        {domain.tagline}
                      </p>
                      <p className="text-body-m text-gray-700">
                        {domain.description}
                      </p>
                    </div>

                    {/* Content Column */}
                    <div className="lg:w-3/5 space-y-6">
                      {/* Services Card */}
                      <Card variant="custom" className="p-8">
                        <h3 className="font-heading text-h4 text-navy mb-4">
                          Nos Interventions
                        </h3>
                        <ul className="space-y-3">
                          {domain.services.map((service, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-3 text-body-m text-gray-700"
                            >
                              <ChevronRight className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>

                      {/* Outcomes Card */}
                      <Card variant="custom" className="p-8 border-gold bg-gold/5">
                        <h3 className="font-heading text-h4 text-navy mb-4">
                          Résultats Attendus
                        </h3>
                        <ul className="space-y-3">
                          {domain.outcomes.map((outcome, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-3 text-body-m text-gray-700"
                            >
                              <ChevronRight className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < domains.length - 1 && (
                    <div className="border-t border-gray-200 mt-24" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Nav Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-h3 text-navy mb-8 text-center">
              Navigation Rapide
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {domains.map((domain) => {
                const Icon = domain.icon
                return (
                  <Link 
                    key={domain.id}
                    href={`#${domain.id}`}
                    className="group"
                  >
                    <Card 
                      variant="custom" 
                      
                      className="p-6 text-center"
                    >
                      <Icon className="w-8 h-8 text-navy mx-auto mb-3" />
                      <h3 className="font-body font-semibold text-navy group-hover:text-gold transition-colors">
                        {domain.title}
                      </h3>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 mb-6">
              Quel Domaine Vous Concerne ?
            </h2>
            <p className="text-body-l text-gray-200 mb-8">
              Échangeons sur vos enjeux spécifiques et identifions ensemble 
              les leviers de transformation prioritaires pour votre organisation.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white text-navy hover:bg-gray-100"
            >
              Demander un diagnostic
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
