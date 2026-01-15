'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, Building2, TrendingUp, Send, MapPin, CheckCircle, ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const defis = [
  {
    icon: Building2,
    title: 'Fiabilité des Intermédiaires',
    probleme: 'Risque d\'arnaque, prestataires peu scrupuleux',
    solution: 'INTEGRA = interlocuteur unique certifié, responsabilité contractuelle'
  },
  {
    icon: MapPin,
    title: 'Gestion à Distance',
    probleme: 'Impossibilité de superviser les démarches sur place',
    solution: 'Reporting hebdomadaire, vidéos de vérification, mandataire de confiance'
  },
  {
    icon: TrendingUp,
    title: 'Conformité Fiscale',
    probleme: 'Double imposition, non-conformité OTR/OHADA',
    solution: 'Structuration fiscale optimisée France-Togo, déclarations à jour'
  },
  {
    icon: Send,
    title: 'Transferts d\'Argent',
    probleme: 'Frais élevés (8-12%), traçabilité bancaire',
    solution: 'Solutions de transfert à 2-4%, compte pro sécurisé au Togo'
  }
]

const pays = [
  {
    nom: 'France',
    slug: 'france',
    drapeau: '🇫🇷',
    diaspora: '~100 000',
    color: 'border-blue-200 hover:border-blue-400',
    intentions: [
      'Créer une SARL/SARLU au Togo',
      'Investir dans l\'immobilier locatif',
      'Rapatrier des revenus en France'
    ],
    stats: 'Délai moyen création : 10-15 jours • Ticket moyen : 15-40K€'
  },
  {
    nom: 'Canada',
    slug: 'canada',
    drapeau: '🇨🇦',
    diaspora: '~35 000',
    color: 'border-red-200 hover:border-red-400',
    intentions: [
      'Import-Export Canada-Togo',
      'Projet immobilier mixte',
      'Gestion patrimoine familial'
    ],
    stats: 'Fiscalité : Convention fiscale Canada-Togo • Transferts CAD sécurisés'
  },
  {
    nom: 'États-Unis',
    slug: 'etats-unis',
    drapeau: '🇺🇸',
    diaspora: '~30 000',
    color: 'border-indigo-200 hover:border-indigo-400',
    intentions: [
      'Diversification patrimoine USD',
      'Projet entrepreneurial Togo',
      'Investissement foncier stratégique'
    ],
    stats: 'FATCA compliant • Structuration US-Togo optimisée'
  },
  {
    nom: 'Allemagne',
    slug: 'allemagne',
    drapeau: '🇩🇪',
    diaspora: '~25 000',
    color: 'border-red-200 hover:border-red-400',
    intentions: [
      'Commerce Allemagne-Togo',
      'Investissement locatif Lomé',
      'Gestion société à distance'
    ],
    stats: 'Hub logistique Berlin-Lomé • Partenariats franco-allemands'
  },
  {
    nom: 'Suisse',
    slug: 'suisse',
    drapeau: '🇨🇭',
    diaspora: '~12 000',
    color: 'border-red-300 hover:border-red-500',
    intentions: [
      'Structuration holding Suisse-Togo',
      'Investissement haut de gamme',
      'Gestion patrimoine offshore'
    ],
    stats: 'Clients premium • Solutions banking CHF-XOF'
  }
]

export default function DiasporaHubPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-orange-600/20 rounded-full border border-orange-500/30">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                🌍 Diaspora Afrique-Europe-Amériques
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Investissez et Entrepreneuriez au Togo <span className="text-[#B8860B]">Depuis l'Étranger</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              INTEGRA accompagne la <strong>diaspora togolaise et africaine</strong> (France, Canada, USA, Allemagne, Suisse)
              dans leurs projets entrepreneuriaux et d'investissement au Togo : création d'entreprise, immobilier, gestion à distance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/fr/diagnostic-ims">
                <Button
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4 text-lg"
                >
                  Diagnostic Projet Gratuit
                </Button>
              </Link>
              <a href="#pays">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Choisir Mon Pays
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">190K+</p>
                <p className="text-sm text-gray-400">Diaspora togolaise (5 pays)</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">75+</p>
                <p className="text-sm text-gray-400">Projets diaspora accompagnés</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">100%</p>
                <p className="text-sm text-gray-400">Gestion à distance sécurisée</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">7-10j</p>
                <p className="text-sm text-gray-400">Délai moyen création SARL</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Défis & Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Les Défis de la Diaspora (et Nos Solutions)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créer ou investir depuis l'étranger comporte des risques spécifiques.
              INTEGRA sécurise votre projet de A à Z.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {defis.map((defi, index) => {
              const Icon = defi.icon
              return (
                <motion.div
                  key={defi.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="custom" className="p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{defi.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 font-semibold text-xs mt-1">❌</span>
                        <p className="text-sm text-gray-600">{defi.probleme}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 font-medium">{defi.solution}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pays Grid */}
      <section id="pays" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Choisissez Votre Pays de Résidence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guides et accompagnement sur-mesure selon votre situation géographique et fiscale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pays.map((p, index) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/fr/diaspora/${p.slug}`}>
                  <Card
                    variant="custom"
                    className={`p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 ${p.color}`}
                  >
                    <div className="text-6xl mb-6 text-center">{p.drapeau}</div>

                    <h3 className="text-2xl font-bold text-[#0B1A3E] mb-3 text-center group-hover:text-[#B8860B] transition-colors">
                      {p.nom}
                    </h3>

                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-center justify-center gap-2 text-gray-600">
                        <Users className="w-5 h-5 text-[#B8860B]" />
                        <span className="font-semibold">{p.diaspora} diaspora</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Intentions principales :</p>
                      {p.intentions.map((intention, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{intention}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-xs text-gray-600 italic mb-4">📊 {p.stats}</p>
                      <div className="flex items-center gap-2 text-[#B8860B] font-semibold group-hover:gap-3 transition-all">
                        <span>Voir les guides {p.nom}</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Diaspora */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-12 text-center">
              Nos Services Diaspora
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card variant="custom" className="p-6 text-center">
                <Building2 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Création Entreprise</h3>
                <p className="text-gray-700 mb-4">SARL clé en main : statuts, RCCM, banque, fiscalité. Tout géré depuis votre pays.</p>
                <p className="text-2xl font-bold text-[#B8860B]">1M - 2M FCFA</p>
                <p className="text-sm text-gray-600">Délai 2-3 semaines</p>
              </Card>

              <Card variant="custom" className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Investissement Immobilier</h3>
                <p className="text-gray-700 mb-4">Due diligence foncier, structuration juridique, suivi chantier, gestion locative.</p>
                <p className="text-2xl font-bold text-[#B8860B]">3M - 8M FCFA</p>
                <p className="text-sm text-gray-600">Selon projet</p>
              </Card>

              <Card variant="custom" className="p-6 text-center">
                <Send className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Gestion Déléguée</h3>
                <p className="text-gray-700 mb-4">Mandataire local : comptabilité, fiscalité, RH, relation banque. Reporting mensuel.</p>
                <p className="text-2xl font-bold text-[#B8860B]">2M - 6M FCFA/an</p>
                <p className="text-sm text-gray-600">Forfait annuel</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Concrétisez Votre Projet au Togo Depuis l'Étranger
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Diagnostic gratuit 30 minutes avec un expert diaspora : analyse faisabilité,
              structuration optimale, budget prévisionnel et roadmap.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Demander Mon Diagnostic Diaspora
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Disponible par visio (Zoom, WhatsApp, Google Meet) • Confidentialité garantie
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
