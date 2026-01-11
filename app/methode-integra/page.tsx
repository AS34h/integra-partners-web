'use client'

import { motion } from 'framer-motion'
import { Search, FileText, LineChart, Lightbulb, Cog, BarChart3, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true }
}

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnostic Initial',
    duration: '2-3 semaines',
    description: 'Analyse de situation, cartographie des enjeux stratégiques, identification des points de blocage organisationnels et des opportunités de transformation.',
    deliverables: [
      'Rapport de diagnostic stratégique',
      'Cartographie des parties prenantes',
      'Matrice SWOT institutionnelle',
      'Identification des quick wins'
    ]
  },
  {
    number: '02',
    icon: FileText,
    title: 'Cadrage & Périmètre',
    duration: '1 semaine',
    description: 'Définition précise du périmètre d\'intervention, validation des hypothèses de travail, élaboration du plan de mission et des métriques de succès.',
    deliverables: [
      'Note de cadrage validée',
      'Plan de mission détaillé',
      'Matrice de priorisation',
      'Indicateurs de performance'
    ]
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Analyse Approfondie',
    duration: '4-6 semaines',
    description: 'Recherche documentaire, interviews terrain, analyse quantitative des données, benchmarking sectoriel et étude des meilleures pratiques institutionnelles.',
    deliverables: [
      'Rapport d\'analyse détaillé',
      'Base de données consolidée',
      'Benchmark sectoriel',
      'Synthèse des entretiens'
    ]
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Recommandations Stratégiques',
    duration: '2-3 semaines',
    description: 'Élaboration de scénarios stratégiques, évaluation des options, modélisation financière et formulation de recommandations actionnables adaptées au contexte.',
    deliverables: [
      'Rapport de recommandations',
      'Scénarios stratégiques comparés',
      'Modèles financiers',
      'Roadmap de transformation'
    ]
  },
  {
    number: '05',
    icon: Cog,
    title: 'Plan d\'Implémentation',
    duration: '2 semaines',
    description: 'Élaboration du plan de mise en œuvre détaillé, définition des responsabilités, structuration des workstreams et anticipation des risques d\'implémentation.',
    deliverables: [
      'Plan de mise en œuvre',
      'Matrice RACI',
      'Calendrier d\'implémentation',
      'Stratégie de gestion du changement'
    ]
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Suivi & Ajustements',
    duration: '3-6 mois',
    description: 'Accompagnement post-mission, suivi des indicateurs de performance, ajustements tactiques, support méthodologique et capitalisation des apprentissages.',
    deliverables: [
      'Rapports de suivi mensuels',
      'Tableaux de bord KPI',
      'Notes d\'ajustement',
      'Bilan de mission final'
    ]
  }
]

const principles = [
  {
    title: 'Rigueur Méthodologique',
    description: 'Processus structuré basé sur des frameworks éprouvés (McKinsey, BCG) adaptés aux contraintes institutionnelles africaines.',
    icon: '📐'
  },
  {
    title: 'Approche Data-Driven',
    description: 'Décisions fondées sur des données vérifiables, analyses quantitatives robustes et validation croisée des sources.',
    icon: '📊'
  },
  {
    title: 'Co-construction',
    description: 'Implication des équipes clients à chaque phase pour garantir l\'appropriation et la pérennité des recommandations.',
    icon: '🤝'
  },
  {
    title: 'Pragmatisme',
    description: 'Solutions actionnables tenant compte des ressources disponibles, du contexte réglementaire et des capacités organisationnelles.',
    icon: '⚡'
  }
]

export default function MethodePage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl"
            {...fadeInUp}
          >
            <div className="inline-block px-4 py-2 bg-gold text-navy font-medium text-sm rounded-full mb-6">
              MÉTHODE PROPRIÉTAIRE
            </div>
            <h1 className="font-heading text-h1 mb-6">
              La Méthode INTEGRA
            </h1>
            <p className="text-body-l text-gray-200">
              Un framework structuré en 6 phases pour accompagner les transformations 
              institutionnelles avec rigueur, pragmatisme et excellence opérationnelle. 
              Éprouvée auprès de dirigeants en Afrique francophone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Principes Fondamentaux
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Quatre piliers méthodologiques qui garantissent la qualité et 
              la pertinence de nos interventions.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...fadeInUp}
          >
            {principles.map((principle, index) => (
              <Card 
                key={index}
                variant="custom"
                className="p-6 text-center"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="font-body text-h4 text-navy mb-3">
                  {principle.title}
                </h3>
                <p className="text-body-m text-gray-700">
                  {principle.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Les 6 Phases de la Méthode
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Un processus itératif et structuré qui s'adapte aux spécificités 
              de chaque mission tout en garantissant des standards d'excellence.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                >
                  <Card 
                    variant="custom"
                    className="p-8"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Phase Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-lg bg-navy text-white flex flex-col items-center justify-center">
                          <div className="text-2xl font-bold">{phase.number}</div>
                        </div>
                        <div className="mt-4 flex justify-center">
                          <Icon className="w-8 h-8 text-navy" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                          <h3 className="font-heading text-h3 text-navy mb-2 md:mb-0">
                            {phase.title}
                          </h3>
                          <span className="text-sm font-medium text-gold px-3 py-1 bg-gold/10 rounded-full inline-block">
                            {phase.duration}
                          </span>
                        </div>
                        
                        <p className="text-body-m text-gray-700 mb-6">
                          {phase.description}
                        </p>

                        <div>
                          <h4 className="font-body font-semibold text-anthracite mb-3">
                            Livrables clés :
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li 
                                key={idx}
                                className="flex items-start gap-2 text-body-m text-gray-700"
                              >
                                <ChevronRight className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Adaptability Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-6 text-center">
              Adaptabilité & Flexibilité
            </h2>
            <Card variant="custom" className="p-8 border-gold">
              <p className="text-body-l text-anthracite mb-4">
                La Méthode INTEGRA n'est pas un processus rigide. Chaque phase 
                s'adapte aux contraintes spécifiques de la mission :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-body-m text-gray-700">
                  <ChevronRight className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Missions express</strong> : Diagnostic + Recommandations en 4 semaines pour des enjeux ciblés</span>
                </li>
                <li className="flex items-start gap-3 text-body-m text-gray-700">
                  <ChevronRight className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Missions longues</strong> : Accompagnement complet sur 6-12 mois pour des transformations structurelles</span>
                </li>
                <li className="flex items-start gap-3 text-body-m text-gray-700">
                  <ChevronRight className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Support ponctuel</strong> : Intervention sur une phase spécifique selon les besoins</span>
                </li>
              </ul>
            </Card>
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
              Appliquons la Méthode à Votre Contexte
            </h2>
            <p className="text-body-l text-gray-200 mb-8">
              Discutons de vos enjeux stratégiques et définissons ensemble 
              le parcours d'accompagnement le plus adapté à votre organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-navy hover:bg-gray-100"
              >
                Demander un diagnostic
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:decoration-white"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Voir des cas d'application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
