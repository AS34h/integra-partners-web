'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, CheckCircle, Building, Briefcase, PieChart, Shield, AlertTriangle, Award, AlertCircle, Euro } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const typesInvestissement = [
  {
    icon: Building,
    titre: 'Immobilier Locatif',
    ticketEUR: '30 000-150 000€',
    duree: '10-15 ans',
    roi: '8-12%/an',
    rendement: '8-12% brut/an',
    ticket: '30-150K€',
    risque: 'Moyen',
    description: 'Appartements Lomé, villas Aného, terrains constructibles',
    exemples: ['Appartement F3 Lomé : 45K€ → 400€/mois', 'Villa Aného : 85K€ → 700€/mois', 'Terrain 500m² : 15-25K€']
  },
  {
    icon: Briefcase,
    titre: 'PME Locale',
    ticketEUR: '50 000-200 000€',
    duree: '5-10 ans',
    roi: '15-25%/an',
    rendement: '15-25% ROI',
    ticket: '50-200K€',
    risque: 'Élevé',
    description: 'Participation capital PME togolaises (BTP, agroalimentaire, services)',
    exemples: ['PME BTP (30% capital)', 'Restaurant/Hôtel (franchise)', 'Import-export (commerce)']
  },
  {
    icon: PieChart,
    titre: 'Foncier Stratégique',
    ticketEUR: '20 000-100 000€',
    duree: '10-20 ans',
    roi: '5-8%/an',
    rendement: '5-8%/an (valorisation)',
    ticket: '20-100K€',
    risque: 'Faible-Moyen',
    description: 'Terrains périphérie Lomé, zones en développement',
    exemples: ['1000m² périphérie Lomé', 'Parcelles lotissement', 'Terrain agricole (palmier, cacao)']
  },
  {
    icon: Shield,
    titre: 'SARL Holding Patrimoniale',
    ticketEUR: '10 000-50 000€',
    duree: 'Long terme',
    roi: 'Variable',
    rendement: 'Variable',
    ticket: '10-50K€',
    risque: 'Structuré',
    description: 'Création SARL pour détenir actifs (immobilier, participations)',
    exemples: ['Holding familiale', 'Véhicule d\'investissement', 'Structure de gestion']
  }
]

const risques = [
  {
    icon: AlertCircle,
    titre: 'Risque Juridique',
    risque: 'Risque Juridique',
    description: 'Titres fonciers contestés, vices cachés immobilier',
    probleme: 'Titres fonciers contestés, vices cachés immobilier',
    mitigation: 'Audit juridique INTEGRA : vérification titre, bornage, historique propriété'
  },
  {
    icon: TrendingUp,
    titre: 'Risque Opérationnel',
    risque: 'Risque Opérationnel',
    description: 'Gestion à distance difficile, partenaires locaux peu fiables',
    probleme: 'Gestion à distance difficile, partenaires locaux peu fiables',
    mitigation: 'Mandataire INTEGRA sur place : reporting mensuel, contrôle dépenses, supervision travaux'
  },
  {
    icon: Euro,
    titre: 'Risque de Change',
    risque: 'Risque de Change',
    description: 'Dépréciation XOF vs EUR (rare mais possible)',
    probleme: 'Dépréciation XOF vs EUR (rare mais possible)',
    mitigation: 'Diversification devise : actifs XOF + revenus rapatriables EUR'
  },
  {
    icon: Shield,
    titre: 'Risque Fiscal',
    risque: 'Risque Fiscal',
    description: 'Double imposition France-Togo, non-déclaration revenus',
    probleme: 'Double imposition France-Togo, non-déclaration revenus',
    mitigation: 'Structuration fiscale conforme : convention fiscale, déclarations coordonnées'
  }
]

const processus = [
  {
    etape: '01',
    titre: 'Diagnostic Projet',
    duree: '1-2 jours',
    description: 'Analyse profil investisseur, objectifs patrimoniaux, budget disponible'
  },
  {
    etape: '02',
    titre: 'Sourcing & Due Diligence',
    duree: '7-15 jours',
    description: 'Identification opportunités, audit juridique, visite virtuelle (photos/vidéos)'
  },
  {
    etape: '03',
    titre: 'Structuration & Financement',
    duree: '5-10 jours',
    description: 'Montage juridique (SARL ou direct), plan financement, simulation fiscale'
  },
  {
    etape: '04',
    titre: 'Acquisition & Suivi',
    duree: '10-20 jours',
    description: 'Signature acte (procuration si nécessaire), transfert fonds, gestion post-acquisition'
  }
]

const formules = [
  {
    nom: 'Pack Audit',
    prix: '800€',
    tarif: '800€',
    tarifEUR: 'Forfait unique',
    recommande: false,
    description: 'Due diligence complète sur une opportunité ciblée',
    inclus: [
      'Vérification titre foncier/statuts société',
      'Évaluation marché & rentabilité',
      'Rapport d\'audit détaillé',
      'Recommandation Go/No-Go'
    ]
  },
  {
    nom: 'Pack Investissement',
    prix: '2 500€',
    tarif: '2 500€',
    tarifEUR: 'Forfait unique',
    recommande: true,
    description: 'Accompagnement A à Z (sourcing → acquisition)',
    inclus: [
      'Tout Pack Audit',
      'Sourcing multi-opportunités',
      'Structuration juridique optimale',
      'Gestion signature à distance',
      'Support 6 mois post-acquisition'
    ]
  },
  {
    nom: 'Pack Gestion Déléguée',
    prix: '350€/mois',
    tarif: '350€/mois',
    tarifEUR: '4 200€/an',
    recommande: false,
    description: 'Gestion opérationnelle continue (locatif, PME)',
    inclus: [
      'Mandataire sur place',
      'Reporting mensuel détaillé',
      'Gestion locataires/fournisseurs',
      'Suivi fiscal & déclarations',
      'Rapatriement revenus'
    ]
  }
]

export default function InvestirTogoFrancePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
              <Link href="/fr/diaspora" className="hover:text-white transition-colors">Diaspora</Link>
              <span>/</span>
              <Link href="/fr/diaspora/france" className="hover:text-white transition-colors">France</Link>
              <span>/</span>
              <span className="text-white">Investir au Togo</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-green-600/20 border border-green-500/30 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-green-600/20 rounded-full border border-green-500/30 mb-2">
                  <span className="text-green-400 font-semibold text-xs uppercase">🇫🇷 → 🇹🇬 Investissement</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Investir au Togo depuis la France : <span className="text-[#B8860B]">Sécurisation & ROI</span>
                </h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              <strong>Immobilier, PME, startups</strong> au Togo pour Togolais de France.
              Due diligence 360°, structuration juridico-fiscale France-Togo, gestion déléguée.
              <strong>ROI 8-25%/an</strong> selon actif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/fr/diagnostic-ims">
                <Button
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4"
                >
                  Diagnostic Investissement Gratuit
                </Button>
              </Link>
              <a href="#types">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4"
                >
                  Voir les Opportunités
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">25+</p>
                <p className="text-sm text-gray-400">Investissements structurés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">8-25%</p>
                <p className="text-sm text-gray-400">ROI moyen annuel</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">100%</p>
                <p className="text-sm text-gray-400">Due diligence systématique</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">3-6 mois</p>
                <p className="text-sm text-gray-400">Délai structuration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pour Qui */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Pour Qui ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card variant="custom" className="p-8 text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-[#0B1A3E] mb-4">Investisseurs Diaspora</h3>
              <p className="text-gray-700 leading-relaxed">
                Togolais France 40-60 ans, épargne 20-100K EUR, cherchent diversification patrimoine hors Europe.
                ROI attractif + préparation retour.
              </p>
            </Card>

            <Card variant="custom" className="p-8 text-center">
              <div className="text-5xl mb-4">🏖️</div>
              <h3 className="text-xl font-bold text-[#0B1A3E] mb-4">Retraités Préparant Retour</h3>
              <p className="text-gray-700 leading-relaxed">
                Retraite France proche (5-10 ans), veulent sécuriser revenus Togo (loyers immobilier, dividendes PME).
                Patrimoine transmissible.
              </p>
            </Card>

            <Card variant="custom" className="p-8 text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-[#0B1A3E] mb-4">Family Offices Togolais-Français</h3>
              <p className="text-gray-700 leading-relaxed">
                Familles diaspora fortunées (200K+ EUR patrimoine), cherchent structuration holdings France-Togo +
                gestion professionnelle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Types Investissement */}
      <section id="types" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              4 Types d'Investissement au Togo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selon objectif (rentabilité, croissance, diversification) et appétit risque
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            {typesInvestissement.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="custom" className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#0B1A3E] mb-3">{type.titre}</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">{type.description}</p>

                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Ticket :</p>
                            <p className="text-sm font-bold text-[#B8860B]">{type.ticket}</p>
                            <p className="text-xs text-gray-600">{type.ticketEUR}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Durée :</p>
                            <p className="text-sm font-semibold text-gray-800">{type.duree}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">ROI attendu :</p>
                            <p className="text-sm font-semibold text-green-600">{type.roi}</p>
                          </div>
                          <div>
                            <Link href="/fr/diagnostic-ims">
                              <Button variant="outline" className="w-full text-sm py-2">
                                En savoir plus
                              </Button>
                            </Link>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Exemples concrets :</p>
                          {type.exemples.map((ex, idx) => (
                            <div key={idx} className="flex items-start gap-2 mb-1">
                              <span className="text-green-600 mt-0.5">•</span>
                              <p className="text-sm text-gray-700">{ex}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Risques & Mitigation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Risques Investissement Togo (et Comment On Les Gère)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 risques majeurs + stratégies mitigation INTEGRA
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {risques.map((item, index) => (
              <motion.div
                key={item.risque}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="custom" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#0B1A3E] mb-2">{item.risque}</h3>
                      <p className="text-gray-700 mb-4">{item.probleme}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-green-50 rounded-lg p-4">
                    <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-green-900 mb-1">Mitigation INTEGRA :</p>
                      <p className="text-sm text-gray-700">{item.mitigation}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Processus Investissement : 7 Étapes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {processus.map((etape, index) => (
                <motion.div
                  key={etape.etape}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="custom" className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#B8860B] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{etape.etape}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{etape.titre}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{etape.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Formules & Tarifs Accompagnement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la due diligence seule à la gestion déléguée complète 12 mois
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formules.map((formule, index) => (
              <motion.div
                key={formule.nom}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="custom"
                  className={`p-8 h-full ${formule.recommande ? 'border-2 border-[#B8860B] shadow-xl' : ''}`}
                >
                  {formule.recommande && (
                    <div className="inline-block mb-4 px-3 py-1 bg-[#B8860B] rounded-full">
                      <span className="text-white font-semibold text-xs uppercase">⭐ Recommandé</span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-[#0B1A3E] mb-2">{formule.nom}</h3>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-[#B8860B]">{formule.tarif}</p>
                    <p className="text-sm text-gray-600">{formule.tarifEUR}</p>
                  </div>

                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">{formule.description}</p>

                  <div className="space-y-3 mb-8">
                    {formule.inclus.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/fr/diagnostic-ims">
                    <Button
                      variant={formule.recommande ? "primary" : "outline"}
                      className={formule.recommande ? "w-full bg-[#B8860B] hover:bg-[#9a6f09]" : "w-full"}
                    >
                      Choisir cette Formule
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investissez au Togo en Toute Sécurité depuis la France
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Diagnostic investissement gratuit 30 min : opportunités, ROI attendu, structuration optimale France-Togo.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Structurer Mon Investissement Togo
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Horaires France • Réponse sous 24h • Confidentialité NDA
            </p>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-4">Ressources complémentaires :</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/fr/services/diaspora-et-investisseurs" className="text-[#B8860B] hover:underline text-sm">
                  Service Diaspora & Investisseurs
                </Link>
                <Link href="/fr/services/securisation-institutionnelle" className="text-[#B8860B] hover:underline text-sm">
                  Due Diligence 360°
                </Link>
                <Link href="/fr/services/structuration-juridico-fiscale" className="text-[#B8860B] hover:underline text-sm">
                  Structuration Juridico-Fiscale
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
