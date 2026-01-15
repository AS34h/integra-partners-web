'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, ArrowRightLeft, CreditCard, Shield } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const guides = [
  {
    titre: "Ouvrir un Compte Bancaire Pro au Togo",
    slug: "ouvrir-compte-bancaire-professionnel",
    description: "Guide complet : banques comparées, documents requis, délais, frais.",
    icon: Building2,
    badge: "Essentiel"
  },
  {
    titre: "Transferts Internationaux vers le Togo",
    slug: "transferts-internationaux",
    description: "Solutions SWIFT, Western Union, Mobile Money, frais et délais.",
    icon: ArrowRightLeft,
    badge: "Diaspora"
  },
  {
    titre: "Cartes de Crédit et Moyens de Paiement",
    slug: "cartes-credit-paiements",
    description: "Visa, Mastercard, Mobile Money, POS, solutions entreprises.",
    icon: CreditCard,
    badge: "Pratique"
  },
  {
    titre: "Sécurité Bancaire et Fraudes",
    slug: "securite-bancaire-fraudes",
    description: "Protections, alertes, recours, bonnes pratiques anti-fraude.",
    icon: Shield,
    badge: "Protection"
  }
]

export default function BanquesTransfertsHub() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto">
            <nav className="mb-6">
              <Link href="/fr/togo" className="text-[#B8860B] hover:text-[#9a6f09] text-sm">
                ← Retour Guides Togo
              </Link>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-dark">
              Banques et <span className="text-[#B8860B]">Transferts</span> au Togo
            </h1>

            <p className="text-xl text-gray-700 mb-8">
              Guides pratiques sur le système bancaire togolais : ouverture compte pro,
              transferts internationaux, moyens de paiement, sécurité.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button variant="primary" className="bg-[#B8860B] hover:bg-[#9a6f09]">
                Besoin d'Aide Bancaire ?
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guides.map((guide, index) => {
              const Icon = guide.icon
              return (
                <motion.div
                  key={guide.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/fr/togo/banques-et-transferts/${guide.slug}`}>
                    <Card variant="custom" className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="w-12 h-12 text-[#B8860B]" />
                        <span className="text-xs px-3 py-1 rounded-full bg-[#B8860B]/10 text-[#B8860B] font-medium">
                          {guide.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">{guide.titre}</h3>
                      <p className="text-gray-700 text-sm">{guide.description}</p>
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
