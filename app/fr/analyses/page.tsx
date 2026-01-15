'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lightbulb, TrendingUp, FileText } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const categories = [
  {
    titre: "Gouvernance",
    slug: "gouvernance",
    description: "Analyses sur gouvernance d'entreprise, conseils d'administration, contrôle interne en Afrique.",
    icon: Lightbulb,
    count: "À venir"
  },
  {
    titre: "Fiscalité",
    slug: "fiscalite",
    description: "Études fiscalité OHADA, optimisation IS/TVA, conventions fiscales internationales.",
    icon: FileText,
    count: "À venir"
  },
  {
    titre: "Investissement",
    slug: "investissement",
    description: "Analyses marchés africains, due diligence, structuration holdings, private equity.",
    icon: TrendingUp,
    count: "À venir"
  },
  {
    titre: "Diaspora",
    slug: "diaspora",
    description: "Analyses transferts diaspora, investissements, double nationalité, fiscalité internationale.",
    icon: Lightbulb,
    count: "À venir"
  },
  {
    titre: "Conformité & Risque",
    slug: "conformite-et-risque",
    description: "Études AML/KYC, cartographie risques, audit interne, contentieux OHADA.",
    icon: FileText,
    count: "À venir"
  }
]

export default function AnalysesHub() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Centre d'<span className="text-[#B8860B]">Analyses</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Analyses approfondies sur la gouvernance, la fiscalité et l'investissement en Afrique de l'Ouest.
              Think tank INTEGRA PARTNERS.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button variant="primary" className="bg-[#B8860B] hover:bg-[#9a6f09]">
                Discuter avec un Expert
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {categories.map((cat, index) => {
              const Icon = cat.icon
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/fr/analyses/${cat.slug}`}>
                    <Card variant="custom" className="p-8 text-center h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <div className="w-16 h-16 rounded-2xl bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-[#B8860B]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">{cat.titre}</h3>
                      <p className="text-gray-700 mb-4 text-sm">{cat.description}</p>
                      <span className="text-xs text-gray-600">{cat.count} analyses</span>
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
