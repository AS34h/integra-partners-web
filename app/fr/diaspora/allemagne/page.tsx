'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Building2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function DiasporaAllemagnePage() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#B8860B]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Diaspora <span className="text-[#B8860B]">Allemagne</span>
              </h1>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Créer votre entreprise au Togo depuis Berlin, Munich, Francfort.
              Accompagnement diaspora togolaise en Allemagne.
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
              Créer une Entreprise au Togo depuis l'Allemagne
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Contenu SEO à venir : création SARL distance, fiscalité Allemagne-Togo, transferts EUR.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Link href="/fr/diaspora/allemagne/creer-une-entreprise-au-togo">
              <Card variant="custom" className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <Building2 className="w-12 h-12 text-[#B8860B] mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Créer une Entreprise au Togo depuis l'Allemagne</h3>
                <p className="text-gray-700 mb-4">SARL/SA à distance, compte bancaire, gestion digitale depuis Berlin.</p>
                <p className="text-lg font-semibold text-[#B8860B]">À partir de 1 500 000 FCFA</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
