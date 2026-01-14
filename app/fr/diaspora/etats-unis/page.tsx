'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Building2, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const intentions = [
  {
    icon: Building2,
    slug: 'creer-entreprise',
    titre: 'Créer une SARL au Togo',
    description: 'Création d\'entreprise 100% à distance depuis les USA. Signature notaire, procuration, délai 15-20 jours.',
    prix: '1 500 USD'
  },
  {
    icon: TrendingUp,
    slug: 'investir',
    titre: 'Investir au Togo',
    description: 'Immobilier, PME, foncier. Audit juridique, structuration fiscale USA-Togo, gestion déléguée.',
    prix: '1 000 USD'
  }
]

export default function DiasporaUSAPage() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-[#0B1A3E] via-[#0D2554] to-[#0B1A3E] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#B8860B]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Diaspora <span className="text-[#B8860B]">États-Unis</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-8">
              Créer votre entreprise ou investir au Togo depuis New York, Washington, Chicago. 
              Accompagnement diaspora togolaise aux USA.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button variant="primary" className="bg-[#B8860B] hover:bg-[#9a6f09]">
                Diagnostic Gratuit 30 min
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-4">
              Vos Projets au Togo depuis les USA
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Contenu SEO à venir : diaspora USA-Togo, transferts USD, opportunités investissement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {intentions.map((intention, index) => {
              const Icon = intention.icon
              return (
                <motion.div
                  key={intention.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/fr/diaspora/etats-unis/${intention.slug}`}>
                    <Card variant="custom" className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <Icon className="w-12 h-12 text-[#B8860B] mb-4" />
                      <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">{intention.titre}</h3>
                      <p className="text-gray-700 mb-4">{intention.description}</p>
                      <p className="text-lg font-semibold text-[#B8860B]">À partir de {intention.prix}</p>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
