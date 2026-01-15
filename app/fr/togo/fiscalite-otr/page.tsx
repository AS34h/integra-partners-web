'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calculator, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const guides = [
  {
    titre: "TVA au Togo",
    slug: "tva",
    description: "Tout sur la TVA togolaise : taux 18%, déclaration, paiement, exonérations.",
    importance: "Essentiel"
  },
  {
    titre: "IS (Impôt sur les Sociétés)",
    slug: "is",
    description: "Impôt sur les Sociétés 27% : calcul, déclaration annuelle, acomptes provisionnels.",
    importance: "Essentiel"
  },
  {
    titre: "DIMANA (Déclaration Mensuelle)",
    slug: "dimana",
    description: "Déclaration mensuelle DIMANA : TVA, retenues salaires, échéances et sanctions.",
    importance: "Mensuel"
  },
  {
    titre: "Pénalités et Contrôles OTR",
    slug: "penalites-et-controles",
    description: "Pénalités fiscales, contrôles OTR, recours et contentieux fiscal au Togo.",
    importance: "Risque"
  }
]

export default function FiscaliteOTRHub() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <Link href="/fr/togo" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Retour Guides Togo
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fiscalité <span className="text-[#B8860B]">OTR Togo</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Guides fiscalité togolaise : TVA, IS, DIMANA, pénalités. Optimisez votre conformité OTR.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/fr/togo/fiscalite-otr/${guide.slug}`}>
                  <Card variant="custom" className="p-6 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">{guide.titre}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{guide.description}</p>
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-semibold">
                      {guide.importance}
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
