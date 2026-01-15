'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, BookOpen, Award, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
}

const publications = [
  {
    category: 'Gouvernance',
    title: 'Guide Pratique : Mise en Conformité OHADA pour PME',
    description: 'Méthodologie complète pour structurer la gouvernance et assurer la conformité réglementaire dans l\'espace OHADA.',
    date: 'Décembre 2025',
    readTime: '45 min',
    type: 'Guide',
    icon: FileText,
    slug: 'guide-conformite-ohada-2026'
  },
  {
    category: 'Stratégie',
    title: 'Étude : Positionnement Stratégique en Marchés Émergents',
    description: 'Analyse des facteurs clés de succès pour le développement stratégique en Afrique francophone.',
    date: 'Novembre 2025',
    readTime: '30 min',
    type: 'Étude',
    icon: BookOpen,
    slug: 'etude-positionnement-marches-emergents'
  },
  {
    category: 'Transformation',
    title: 'Cas d\'Application : Transformation Digitale d\'une Institution Publique',
    description: 'Retour d\'expérience sur un projet de digitalisation réussi avec la Méthode INTEGRA.',
    date: 'Octobre 2025',
    readTime: '20 min',
    type: 'Cas pratique',
    icon: Award,
    slug: 'cas-transformation-digitale-institution-publique'
  },
  {
    category: 'Capital Humain',
    title: 'White Paper : Leadership Institutionnel en Afrique',
    description: 'Analyse des styles de leadership efficaces dans les contextes institutionnels africains.',
    date: 'Septembre 2025',
    readTime: '35 min',
    type: 'White Paper',
    icon: FileText
  }
]

const topics = [
  'Gouvernance & Conformité',
  'Stratégie Corporate',
  'Capital Humain',
  'Transformation Digitale',
  'Performance Opérationnelle',
  'Conduite du Changement'
]

export default function RessourcesPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl"
            {...fadeInImmediate}
          >
            <h1 className="font-heading text-h1 mb-6">
              Ressources & Publications
            </h1>
            <p className="text-body-l text-gray-200">
              Accédez à notre bibliothèque d'études, guides pratiques, cas
              d'application et analyses sectorielles pour approfondir votre
              réflexion stratégique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topics Filter */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            {...fadeInImmediate}
          >
            <button className="px-6 py-2 rounded-full bg-slate-700 text-white font-medium text-sm">
              Tous
            </button>
            {topics.map((topic, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-gray-300 text-anthracite hover:border-navy hover:text-navy font-medium text-sm transition-colors"
              >
                {topic}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            {...fadeInImmediate}
          >
            {publications.map((pub, index) => {
              const Icon = pub.icon
              return (
                <Card
                  key={index}
                  variant="custom"

                  className="p-8 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-700 text-white flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-caption text-gold font-medium uppercase">
                          {pub.category}
                        </span>
                        <span className="text-caption text-gray-500">•</span>
                        <span className="text-caption text-gray-500">
                          {pub.type}
                        </span>
                      </div>
                      <h3 className="font-heading text-h4 text-navy mb-3">
                        {pub.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-body-m text-gray-700 mb-6">
                    {pub.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-caption text-gray-500">
                      <span>{pub.date}</span>
                      <span>•</span>
                      <span>{pub.readTime}</span>
                    </div>
                    <Link
                      href={pub.slug ? `/ressources/${pub.slug}` : "#"}
                      className="inline-flex items-center gap-2 text-body-m text-navy font-medium group-hover:gap-3 transition-all"
                    >
                      Lire
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              )
            })}
          </motion.div>

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            {...fadeInImmediate}
          >
            <Button variant="secondary" size="md">
              Charger plus de ressources
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            {...fadeInImmediate}
          >
            <h2 className="font-heading text-h2 mb-6">
              Besoin d'une Analyse Personnalisée ?
            </h2>
            <p className="text-body-l text-gray-200 mb-8">
              Au-delà de nos publications, bénéficiez d'un diagnostic stratégique
              spécifique à votre contexte et vos enjeux.
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
