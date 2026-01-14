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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1A3E] via-[#0D2554] to-[#0B1A3E] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-[#B8860B]/20 rounded-full border border-[#B8860B]/30">
              <span className="text-[#B8860B] font-semibold text-sm uppercase tracking-wider">
                Services Premium
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Conseil Stratégique & Structuration <span className="text-[#B8860B]">sur Mesure</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              INTEGRA accompagne les <strong>dirigeants et institutions en Afrique</strong> dans leurs décisions 
              stratégiques majeures : gouvernance, croissance, restructuration, conformité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/fr/diagnostic-ims">
                <Button 
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4 text-lg"
                >
                  Diagnostic Gratuit 30 min
                </Button>
              </Link>
              <a href="#services">
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Voir Nos Services
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">25+</p>
                <p className="text-sm text-gray-400">Missions institutionnelles réalisées</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">8</p>
                <p className="text-sm text-gray-400">Pays d'intervention (Afrique)</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">100%</p>
                <p className="text-sm text-gray-400">Clients satisfaits (NPS 85+)</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">15 ans</p>
                <p className="text-sm text-gray-400">Expérience moyenne consultants</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              7 Services Experts pour Vos Enjeux Stratégiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Du conseil stratégique institutionnel à la création d'entreprise clé en main, 
              nous couvrons l'ensemble de vos besoins de structuration et pilotage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/fr/services/${service.slug}`}>
                    <Card 
                      variant="custom"
                      className="h-full p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-[#B8860B]"
                    >
                      <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#0B1A3E] mb-3 group-hover:text-[#B8860B] transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4 text-[#B8860B]" />
                          <span><strong>Cible :</strong> {service.cible}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <TrendingUp className="w-4 h-4 text-[#B8860B]" />
                          <span><strong>Durée :</strong> {service.duree}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Award className="w-4 h-4 text-[#B8860B]" />
                          <span><strong>Ticket :</strong> {service.ticket}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[#B8860B] font-semibold group-hover:gap-3 transition-all">
                        <span>En savoir plus</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Garanties INTEGRA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Les Garanties INTEGRA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence, confidentialité et engagement résultats sur chaque mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {garanties.map((garantie, index) => {
              const Icon = garantie.icon
              return (
                <motion.div
                  key={garantie.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#B8860B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">
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

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#0B1A3E] via-[#0D2554] to-[#0B1A3E] text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Transformer Votre Organisation ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Bénéficiez d'un <strong>diagnostic stratégique gratuit de 30 minutes</strong> avec un consultant senior 
              pour identifier vos priorités et définir une feuille de route sur-mesure.
            </p>
            
            <Link href="/fr/diagnostic-ims">
              <Button 
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Demander Mon Diagnostic Gratuit
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Aucun engagement • Confidentialité garantie • Réponse sous 24h
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
