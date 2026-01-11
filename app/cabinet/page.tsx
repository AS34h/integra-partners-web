'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Globe, Users } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Quote } from '@/components/ui/Quote'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true }
}

const expertise = [
  {
    icon: Shield,
    title: 'Indépendance & Souveraineté',
    description: 'Cabinet africain 100% indépendant, sans liens capitalistiques avec des grands groupes internationaux. Notre modèle garantit une totale objectivité et une approche souveraine adaptée aux contextes institutionnels locaux.'
  },
  {
    icon: Award,
    title: 'Excellence Méthodologique',
    description: 'Standards internationaux de consulting combinés à la Méthode INTEGRA, notre framework propriétaire structuré en 6 phases, éprouvé auprès de dirigeants institutionnels en Afrique francophone.'
  },
  {
    icon: Globe,
    title: 'Expertise Réglementaire',
    description: 'Maîtrise approfondie des cadres juridiques africains (OHADA, CEMAC, UEMOA), des normes internationales (ISO, RGPD) et des exigences de conformité institutionnelle.'
  },
  {
    icon: Users,
    title: 'Réseau Institutionnel',
    description: 'Relations établies avec les décideurs publics et privés, les institutions régionales et les partenaires techniques internationaux pour un accompagnement stratégique ancré dans l\'écosystème.'
  }
]

const values = [
  {
    title: 'Confidentialité Absolue',
    description: 'Protection stricte des données stratégiques clients. Conformité RGPD. Séparation physique et logique des dossiers. Accords de non-divulgation systématiques.',
    icon: '🔒'
  },
  {
    title: 'Rigueur Analytique',
    description: 'Méthodes quantitatives robustes. Validation croisée des sources. Livrables structurés selon standards institutionnels. Traçabilité complète des recommandations.',
    icon: '📊'
  },
  {
    title: 'Pragmatisme Opérationnel',
    description: 'Recommandations actionnables adaptées aux contraintes de ressources. Plans de mise en œuvre détaillés. Accompagnement post-mission si souhaité.',
    icon: '⚙️'
  },
  {
    title: 'Éthique Déontologique',
    description: 'Refus des conflits d\'intérêts. Transparence sur les limitations méthodologiques. Code de déontologie aligné sur les normes du conseil institutionnel.',
    icon: '⚖️'
  }
]

export default function CabinetPage() {
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
              Cabinet de Conseil Stratégique Souverain
            </h1>
            <p className="text-body-l text-gray-200">
              INTEGRA PARTNERS est un cabinet de conseil indépendant spécialisé 
              dans l'accompagnement stratégique des dirigeants institutionnels 
              en Afrique. Notre expertise couvre la gouvernance, la transformation 
              organisationnelle et le positionnement stratégique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-8 text-center">
              Notre Mission
            </h2>
            <Quote
              author="Mission INTEGRA PARTNERS"
              variant="standard"
            >
              Accompagner les dirigeants d'entreprises et d'institutions africaines dans leurs décisions stratégiques majeures, en combinant excellence méthodologique internationale et compréhension approfondie des réalités institutionnelles locales.
            </Quote>
          </motion.div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Notre Expertise
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Quatre piliers fondamentaux qui définissent notre approche et 
              garantissent la qualité de nos interventions.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            {...fadeInUp}
          >
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <Card 
                  key={index}
                  variant="custom"
                  className="p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy text-white flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-h4 text-navy mb-3">
                        {item.title}
                      </h3>
                      <p className="text-body-m text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Nos Valeurs Opérationnelles
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Des principes non négociables qui guident chaque mission et 
              garantissent l'excellence de nos livrables.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            {...fadeInUp}
          >
            {values.map((value, index) => (
              <Card 
                key={index}
                variant="custom"
                className="p-8"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-heading text-h4 text-navy mb-3">
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

      {/* CTA Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 mb-6">
              Discutons de Votre Projet
            </h2>
            <p className="text-body-l text-gray-200 mb-8">
              Contactez-nous pour un premier échange confidentiel sur vos 
              enjeux stratégiques et découvrir comment INTEGRA PARTNERS peut 
              accompagner votre organisation.
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
