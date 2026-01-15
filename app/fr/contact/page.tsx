'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, MessageSquare, Briefcase, Globe } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const coordonnees = [
  {
    icon: MapPin,
    titre: 'Adresse',
    details: ['Lomé, Togo', 'Cotonou, Bénin']
  },
  {
    icon: Phone,
    titre: 'Téléphone',
    details: ['+228 XX XX XX XX', '+229 XX XX XX XX']
  },
  {
    icon: Mail,
    titre: 'Email',
    details: ['contact@integrapartners.com']
  },
  {
    icon: Clock,
    titre: 'Horaires',
    details: ['Lun-Ven: 8h-18h', 'Sam: 9h-13h']
  }
]

const motifs = [
  {
    icon: Briefcase,
    titre: 'Conseil Stratégique',
    description: 'Diagnostic, structuration, gouvernance',
    lien: '/fr/services/conseil-strategique'
  },
  {
    icon: Globe,
    titre: 'Diaspora',
    description: 'Investissement, création entreprise',
    lien: '/fr/diaspora'
  },
  {
    icon: MessageSquare,
    titre: 'Autre Demande',
    description: 'Partenariat, formation, étude',
    lien: '/fr/contact'
  }
]

const bureaux = [
  {
    ville: 'Lomé',
    pays: 'Togo',
    adresse: 'Quartier des affaires, Lomé',
    telephone: '+228 XX XX XX XX',
    email: 'lome@integrapartners.com',
    horaires: 'Lun-Ven: 8h-18h',
    equipe: '8 consultants'
  },
  {
    ville: 'Cotonou',
    pays: 'Bénin',
    adresse: 'Zone des ambassades, Cotonou',
    telephone: '+229 XX XX XX XX',
    email: 'cotonou@integrapartners.com',
    horaires: 'Lun-Ven: 8h-18h',
    equipe: '5 consultants'
  },
  {
    ville: 'Abidjan',
    pays: 'Côte d\'Ivoire',
    adresse: 'Plateau, Abidjan',
    telephone: '+225 XX XX XX XX',
    email: 'abidjan@integrapartners.com',
    horaires: 'Lun-Ven: 9h-17h',
    equipe: '3 consultants'
  }
]

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-[#B8860B]/20 rounded-full border border-[#B8860B]/30">
              <span className="text-[#B8860B] font-semibold text-sm uppercase tracking-wider">
                📞 Parlons de Votre Projet
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-navy-dark">
              Contactez <span className="text-[#B8860B]">INTEGRA PARTNERS</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Lomé (Togo) • Cotonou (Bénin) • Diaspora France/Canada/USA
            </p>

            <p className="text-lg text-gray-600">
              Premier échange gratuit et confidentiel (30 min visio ou téléphone)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coordonnees.map((coord, index) => {
              const Icon = coord.icon
              return (
                <motion.div
                  key={coord.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="custom" className="p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#B8860B]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1A3E] mb-3">{coord.titre}</h3>
                    <div className="space-y-1">
                      {coord.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-700">{detail}</p>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Motifs de Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Pourquoi Nous Contacter ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {motifs.map((motif, index) => {
              const Icon = motif.icon
              return (
                <motion.div
                  key={motif.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={motif.lien}>
                    <Card variant="custom" className="p-8 text-center h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0B1A3E] mb-3 group-hover:text-[#B8860B] transition-colors">
                        {motif.titre}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{motif.description}</p>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bureaux */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Nos Bureaux en Afrique de l'Ouest
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bureaux.map((bureau, index) => (
              <motion.div
                key={bureau.ville}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="custom" className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#B8860B]" />
                    <div>
                      <h3 className="text-lg font-bold text-[#0B1A3E]">{bureau.ville}</h3>
                      <p className="text-sm text-gray-600">{bureau.pays}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">Adresse :</p>
                      <p className="text-gray-800 font-medium">{bureau.adresse}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Horaires :</p>
                      <p className="text-gray-800">{bureau.horaires}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Équipe :</p>
                      <p className="text-gray-800">{bureau.equipe}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-3xl mx-auto">
            <Card variant="custom" className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#0B1A3E] mb-6 text-center">
                Formulaire de Contact Rapide
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Remplissez ce formulaire, nous vous recontactons sous 24h ouvrées.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      placeholder="+228 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pays de résidence
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent">
                      <option>Togo</option>
                      <option>France</option>
                      <option>Canada</option>
                      <option>Allemagne</option>
                      <option>Suisse</option>
                      <option>USA</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type de demande <span className="text-red-600">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                  >
                    <option value="">-- Choisir --</option>
                    <option>Diagnostic gratuit</option>
                    <option>Création entreprise</option>
                    <option>Conseil stratégique</option>
                    <option>Due diligence</option>
                    <option>Structuration juridico-fiscale</option>
                    <option>Projet diaspora</option>
                    <option>Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Décrivez votre projet / besoin <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                    placeholder="Décrivez brièvement votre projet, vos objectifs et vos contraintes..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                    id="nda"
                  />
                  <label htmlFor="nda" className="text-sm text-gray-700">
                    J'accepte que mes données soient traitées de manière confidentielle (NDA signé avant tout échange sensible).
                    <Link href="/fr/politique-confidentialite" className="text-[#B8860B] hover:underline ml-1">
                      Politique de confidentialité
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B8860B] hover:bg-[#9a6f09] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
                >
                  Envoyer ma demande
                </button>

                <p className="text-xs text-gray-600 text-center">
                  Réponse sous 24h ouvrées • Premier échange gratuit et sans engagement
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Alternatif */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'un Rendez-vous Rapide ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Diagnostic gratuit 30 minutes (visio ou téléphone) disponible sous 48h.
            </p>

            <Link href="/fr/diagnostic-ims">
              <button className="bg-[#B8860B] hover:bg-[#9a6f09] text-white font-bold py-5 px-10 rounded-lg text-lg transition-colors duration-300">
                Réserver Mon Diagnostic Gratuit
              </button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Confidentialité garantie • Sans engagement
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
