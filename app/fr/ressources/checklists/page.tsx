'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckSquare } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function ChecklistsPage() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto">
            <nav className="mb-6">
              <Link href="/fr/ressources" className="text-[#B8860B] hover:text-[#9a6f09] text-sm">
                ← Retour Ressources
              </Link>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#B8860B]">Checklists</span> Pratiques
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Listes de contrôle : création entreprise, conformité fiscale, clôture annuelle.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card variant="custom" className="p-12 text-center">
              <CheckSquare className="w-16 h-16 text-[#B8860B] mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#0B1A3E] mb-4">
                Checklists à Venir
              </h2>
              <p className="text-gray-700 mb-6">
                Nous préparons des checklists détaillées : création SARL (15 étapes),
                clôture fiscale (20 points), conformité OHADA (12 vérifications).
              </p>
              <p className="text-sm text-gray-600">
                Disponibilité prévue : Q2 2026
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
