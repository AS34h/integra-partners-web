'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Target, Scale, Shield, Users, Building2, FileText, TrendingUp,
  CheckCircle, ArrowRight, Award, Globe
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const services = [
  {
    title: 'Conseil Stratégique',
    slug: 'conseil-strategique',
    description: 'Diagnostic institutionnel, élaboration de plans stratégiques, définition de trajectoires de croissance et pilotage de performance.',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    cible: 'Dirigeants PME/ETI, DG institutions',
    duree: '3-6 mois',
    ticket: '15-50K€'
  },
  {
    title: 'Structuration Juridico-Fiscale',
    slug: 'structuration-juridico-fiscale',
    description: 'Optimisation fiscale OHADA, restructuration holdings, conformité OTR, sécurisation patrimoniale dirigeants.',
    icon: Scale,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    cible: 'Entrepreneurs, groupes familiaux',
    duree: '2-4 mois',
    ticket: '8-30K€'
  },
  {
    title: 'Gouvernance & Pilotage',
    slug: 'gouvernance-et-pilotage',
    description: 'Mise en place de conseils d\'administration, élaboration de chartes de gouvernance, définition de KPIs stratégiques.',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    cible: 'Conseils d\'administration, comités exécutifs',
    duree: '4-8 mois',
    ticket: '20-60K€'
  },
  {
    title: 'Sécurisation Institutionnelle',
    slug: 'securisation-institutionnelle',
    description: 'Audit de conformité RGPD/OHADA, sécurisation documentaire, mise en conformité réglementaire, gestion des risques.',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    cible: 'Institutions financières, administrations',
    duree: '3-6 mois',
    ticket: '12-40K€'
  },
  {
    title: 'Diaspora & Investisseurs',
    slug: 'diaspora-et-investisseurs',
    description: 'Accompagnement projets diaspora (France, Canada, USA), structuration investissements, gestion à distance.',
    icon: Globe,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    cible: 'Diaspora africaine, investisseurs étrangers',
    duree: '1-3 mois',
    ticket: '3-15K€'
  },
  {
    title: 'Création d\'Entreprise',
    slug: 'creation-dentreprise',
    description: 'SARL/SA clé en main au Togo : statuts OHADA, RCCM, compte bancaire, fiscalité, domiciliation. Délai garanti.',
    icon: Building2,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    cible: 'Entrepreneurs, startups, diaspora',
    duree: '2-4 semaines',
    ticket: '1.2-2.5K€'
  },
  {
    title: 'Gestion Documentaire',
    slug: 'gestion-documentaire',
    description: 'Tenue registres légaux, PV AG/CA, archivage sécurisé, conformité documentaire OHADA, traçabilité décisions.',
    icon: FileText,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
    cible: 'PME, sociétés holdings, groupes',
    duree: 'Forfait annuel',
    ticket: '150-500€/mois'
  }
]
const garanties = [
  {
    icon: Shield,
    title: 'Confidentialité Absolue',
    description: 'Protection totale des données stratégiques, conformité RGPD'
  },
  {
    icon: Award,
    title: 'Excellence Méthodologique',
    description: 'Standards internationaux, rigueur analytique institutionnelle'
  },
  {
    icon: CheckCircle,
    title: 'Engagement Résultats',
    description: 'Livrables mesurables, objectifs contractualisés'
  },
  {
    icon: Users,
    title: 'Accompagnement Continu',
    description: 'Suivi post-mission, support sur la durée'
  }
]
export default function ServicesHubPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Version épurée */}
      <section className="bg-gray-100 py-24 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <div className="inline-block mb-8 px-5 py-2 bg-white rounded border border-gray-200">
              <span className="text-gray-600 font-medium text-sm uppercase tracking-widest">
                Nos Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-gray-950">
              Conseil Stratégique
              <br />
              <span className="text-gray-600">& Structuration</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl">
              Accompagnement des dirigeants et institutions en Afrique dans leurs décisions stratégiques majeures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/fr/diagnostic-ims">
                <Button
                  variant="primary"
                  className="bg-gray-950 text-white hover:bg-gray-900 px-10 py-5 text-base font-semibold"
                >
                  Diagnostic gratuit
                </Button>
              </Link>
              <a href="#services">
                <Button
                  variant="outline"
                  className="border-gray-950 text-gray-950 hover:bg-gray-950 hover:text-white px-10 py-5 text-base"
                >
                  Découvrir nos services
                </Button>
              </a>
            </div>

            {/* Stats épurés */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-300">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gray-950 mb-2">25+</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Missions réalisées</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gray-950 mb-2">8</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Pays (Afrique)</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gray-950 mb-2">100%</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gray-950 mb-2">15 ans</p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">Expérience moyenne</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Version aérée et institutionnelle */}
      <section id="services" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInImmediate} className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 leading-tight">
              Sept domaines d'expertise
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Du conseil stratégique institutionnel à la création d'entreprise, nous couvrons l'ensemble de vos besoins de structuration et de pilotage.
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/fr/services/${service.slug}`}>
                    <Card
                      variant="custom"
                      className="p-8 md:p-10 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-gray-950 bg-white"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-8">
                        {/* Icône et numéro */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-lg bg-gray-950 flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                        </div>

                        {/* Contenu */}
                        <div className="flex-grow">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mb-4 group-hover:text-gray-700 transition-colors">
                            {service.title}
                          </h3>

                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Métadonnées */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                            <div className="flex items-start gap-3">
                              <Users className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Cible</p>
                                <p className="text-gray-950 font-medium">{service.cible}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <TrendingUp className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Durée</p>
                                <p className="text-gray-950 font-medium">{service.duree}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Award className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Investissement</p>
                                <p className="text-gray-950 font-medium">{service.ticket}</p>
                              </div>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex items-center gap-2 text-gray-950 font-semibold group-hover:gap-3 transition-all">
                            <span>En savoir plus</span>
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Garanties - Version minimaliste */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInImmediate} className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 leading-tight">
              Notre engagement
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Excellence, confidentialité et résultats mesurables sur chaque mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {garanties.map((garantie, index) => {
              const Icon = garantie.icon
              return (
                <motion.div
                  key={garantie.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-8 h-8 text-gray-950 mb-6" />
                  <h3 className="text-xl font-bold text-gray-950 mb-3">
                    {garantie.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {garantie.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Final - Version épurée */}
      <section className="py-24 md:py-32 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-950">
              Démarrez votre projet
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Diagnostic stratégique gratuit de 30 minutes pour identifier vos priorités et définir une feuille de route sur-mesure.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-gray-950 text-white hover:bg-gray-900 px-10 py-5 text-lg font-semibold"
              >
                Demander mon diagnostic
              </Button>
            </Link>

            <p className="mt-8 text-sm text-gray-600 uppercase tracking-wider">
              Sans engagement • Confidentialité garantie • Réponse sous 24h
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
