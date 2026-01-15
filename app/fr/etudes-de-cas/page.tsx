'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function EtudesDeCasHub() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Études de <span className="text-[#B8860B]">Cas</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Retours d'expérience réels (anonymisés) : transformations, restructurations,
              due diligence, acquisitions accompagnées par INTEGRA.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button variant="primary" className="bg-[#B8860B] hover:bg-[#9a6f09]">
                Votre Projet Peut Être le Prochain
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Card variant="custom" className="p-12">
              <Award className="w-16 h-16 text-[#B8860B] mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#0B1A3E] mb-4">
                Études de Cas à Venir
              </h2>
              <p className="text-gray-700 mb-6">
                Nous publierons prochainement des retours d'expérience détaillés sur nos missions :
                transformation DG, acquisition PME, structuration diaspora, gouvernance CA.
              </p>
              <p className="text-sm text-gray-600">
                Confidentialité garantie : toutes les études de cas sont anonymisées.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
