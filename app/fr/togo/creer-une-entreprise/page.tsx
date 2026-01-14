'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const guides = [
  {
    titre: "SARL et SARLU au Togo",
    slug: "sarl-sarlu",
    description: "Guide complet création SARL/SARLU : capital, statuts, associés, gérance, délais et coûts.",
    difficulte: "Débutant"
  },
  {
    titre: "SA (Société Anonyme)",
    slug: "sa",
    description: "Création SA : capital minimum 10M FCFA, conseil d'administration, commissaire aux comptes.",
    difficulte: "Avancé"
  },
  {
    titre: "RCCM et Immatriculation",
    slug: "rccm-et-immatriculation",
    description: "Procédure RCCM Lomé : dossier complet, délais, coûts, certificat d'immatriculation.",
    difficulte: "Débutant"
  },
  {
    titre: "Statuts et Formalités",
    slug: "statuts-et-formalites",
    description: "Rédaction statuts OHADA conformes : clauses obligatoires, formalités post-création.",
    difficulte: "Intermédiaire"
  }
]

export default function CreerEntrepriseTogoHub() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-[#0B1A3E] via-[#0D2554] to-[#0B1A3E] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <Link href="/fr/togo" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Retour Guides Togo
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Créer une Entreprise au <span className="text-[#B8860B]">Togo</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Guides complets pour créer votre SARL, SA ou entreprise individuelle au Togo : 
              démarches RCCM, statuts OHADA, fiscalité OTR.
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
                <Link href={`/fr/togo/creer-une-entreprise/${guide.slug}`}>
                  <Card variant="custom" className="p-6 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">{guide.titre}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{guide.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                      {guide.difficulte}
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
