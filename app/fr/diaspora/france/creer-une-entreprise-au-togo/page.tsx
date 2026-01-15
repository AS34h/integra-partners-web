'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle, Clock, Euro, FileText, Users, Shield, AlertCircle, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const processus = [
  {
    numero: '01',
    etape: '01',
    titre: 'Diagnostic & Structuration',
    duree: '2-3 jours',
    description: 'Analyse projet, choix structure (SARL/SARLU), capital social, actionnariat',
    livrables: ['Note de cadrage', 'Simulation fiscale France-Togo', 'Structure juridique recommandée']
  },
  {
    numero: '02',
    etape: '02',
    titre: 'Rédaction Statuts & Procuration',
    duree: '3-5 jours',
    description: 'Statuts sur-mesure OHADA, procuration notaire France pour signature à distance',
    livrables: ['Statuts définitifs', 'Procuration notariée', 'Pacte d\'associés (si besoin)']
  },
  {
    numero: '03',
    etape: '03',
    titre: 'Dépôt & Immatriculation RCCM',
    duree: '5-7 jours',
    description: 'Dépôt dossier RCCM, obtention Kbis togolais, inscription OTR',
    livrables: ['RCCM + Kbis', 'Numéro IFU (OTR)', 'Certificat d\'immatriculation']
  },
  {
    numero: '04',
    etape: '04',
    titre: 'Compte Bancaire Pro',
    duree: '3-5 jours',
    description: 'Ouverture compte pro Ecobank/BSIC/BTCI avec RIB international',
    livrables: ['Compte pro actif', 'RIB XOF', 'Carte corporate (optionnel)']
  }
]

const obstacles = [
  {
    icon: Clock,
    titre: 'Délais Imprévisibles',
    probleme: 'Blocages administratifs RCCM (4-8 semaines parfois)',
    solution: 'Réseau prioritaire INTEGRA : délai garanti 15-20 jours ou remboursement partiel'
  },
  {
    icon: Shield,
    titre: 'Signature à Distance',
    probleme: 'Notaires togolais exigent présence physique',
    solution: 'Procuration notaire France avec apostille : signature 100% à distance légale'
  },
  {
    icon: Euro,
    titre: 'Transfert Capital Social',
    probleme: 'Frais bancaires élevés + justificatifs origine fonds',
    solution: 'Circuit bancaire optimisé : 2-3% frais, conformité anti-blanchiment automatique'
  },
  {
    icon: FileText,
    titre: 'Conformité Post-Création',
    probleme: 'Première déclaration OTR, AG constitutive, registre légal',
    solution: 'Pack conformité 1ère année : déclarations OTR, PV AG, tenue registres'
  }
]

const packs = [
  {
    nom: 'Pack Essentiel',
    prix: '1 200€',
    tarif: '1 200€',
    tarifEUR: 'Forfait unique',
    delai: '15-20 jours',
    duree: '15-20 jours',
    cible: 'SARL simple (1-2 associés)',
    ideal: 'SARL simple (1-2 associés)',
    recommande: false,
    livrables: [
      'Statuts OHADA personnalisés',
      'Procuration notaire France',
      'Dépôt RCCM + Kbis',
      'Immatriculation OTR (IFU)',
      'Ouverture compte pro'
    ]
  },
  {
    nom: 'Pack Premium',
    prix: '1 800€',
    tarif: '1 800€',
    tarifEUR: 'Forfait unique',
    delai: '15-20 jours',
    duree: '15-20 jours',
    cible: 'SARL complexe ou projet diaspora structuré',
    ideal: 'SARL complexe ou projet diaspora structuré',
    recommande: true,
    livrables: [
      'Tout Pack Essentiel',
      'Pacte d\'associés sur-mesure',
      'Simulation fiscale France-Togo',
      'Domiciliation commerciale 6 mois',
      'Support post-création 3 mois'
    ]
  },
  {
    nom: 'Pack Investisseur',
    prix: '2 500€',
    tarif: '2 500€',
    tarifEUR: 'Forfait unique',
    delai: '20-25 jours',
    duree: '20-25 jours',
    cible: 'Holding ou montage patrimonial',
    ideal: 'Holding ou montage patrimonial',
    recommande: false,
    livrables: [
      'Tout Pack Premium',
      'Structuration holding (si besoin)',
      'Optimisation fiscale avancée',
      'Accompagnement levée fonds',
      'Gestion administrative 6 mois'
    ]
  }
]

export default function CreerEntrepriseFranceTogoPage() {
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
              <span className="text-white">Créer une Entreprise</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-orange-600/20 rounded-full border border-orange-500/30 mb-2">
                  <span className="text-orange-400 font-semibold text-xs uppercase">🇫🇷 → 🇹🇬</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Créer une SARL au Togo <span className="text-[#B8860B]">depuis la France</span>
                </h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              SARL clé en main pour <strong>Togolais de France</strong> : statuts OHADA, RCCM, compte bancaire,
              fiscalité OTR. <strong>Signature à distance</strong> avec procuration notaire. <strong>2-3 semaines</strong> garanties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/fr/diagnostic-ims">
                <Button
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4"
                >
                  Diagnostic Création Gratuit
                </Button>
              </Link>
              <a href="#packs">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4"
                >
                  Voir les Packs & Tarifs
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">40+</p>
                <p className="text-sm text-gray-400">SARL créées depuis France</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">2-3 sem.</p>
                <p className="text-sm text-gray-400">Délai création garanti</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">100%</p>
                <p className="text-sm text-gray-400">Sans déplacement</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">1,5M</p>
                <p className="text-sm text-gray-400">FCFA all-inclusive</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 profils diaspora France qui créent au Togo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card variant="custom" className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1A3E] mb-4">Entrepreneurs Diaspora</h3>
              <p className="text-gray-700 leading-relaxed">
                Salarié ou auto-entrepreneur en France qui veut lancer activité au Togo (import-export, services, tech).
                Besoin structure légale sans se déplacer.
              </p>
            </Card>

            <Card variant="custom" className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1A3E] mb-4">Investisseurs Retour</h3>
              <p className="text-gray-700 leading-relaxed">
                Retraité ou proche retraite en France préparant retour définitif Togo.
                Veut structurer activité (immobilier, conseil) 5-10 ans avant.
              </p>
            </Card>

            <Card variant="custom" className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1A3E] mb-4">Projets Familiaux</h3>
              <p className="text-gray-700 leading-relaxed">
                Plusieurs membres famille diaspora (frères/sœurs France) veulent créer société commune Togo.
                Besoin pacte associés sécurisé.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus 7 Étapes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Processus Création : 7 Étapes Depuis la France
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout géré à distance. Vous restez en France, INTEGRA s'occupe du Togo.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processus.map((etape, index) => (
              <motion.div
                key={etape.etape}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="custom" className="p-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#B8860B] flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{etape.etape}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-[#0B1A3E]">{etape.titre}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-semibold">{etape.duree}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">{etape.description}</p>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-700">Livrables :</p>
                        {etape.livrables.map((livrable, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{livrable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Obstacles & Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Vos Questions, Nos Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les 6 obstacles les plus fréquents (et comment on les résout)
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {obstacles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card variant="custom" className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0B1A3E] mb-2">{item.probleme}</p>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="text-green-600 font-semibold">→</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs & Tarifs */}
      <section id="packs" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Packs & Tarifs Transparents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout inclus, zéro frais caché. Paiement sécurisé (virement SEPA France ou Western Union).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packs.map((pack, index) => (
              <motion.div
                key={pack.nom}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="custom"
                  className={`p-8 h-full ${pack.recommande ? 'border-2 border-[#B8860B] shadow-xl' : ''}`}
                >
                  {pack.recommande && (
                    <div className="inline-block mb-4 px-3 py-1 bg-[#B8860B] rounded-full">
                      <span className="text-white font-semibold text-xs uppercase">⭐ Recommandé</span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-[#0B1A3E] mb-2">{pack.nom}</h3>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-[#B8860B]">{pack.tarif}</p>
                    <p className="text-sm text-gray-600">{pack.tarifEUR}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Pour :</p>
                    <p className="font-semibold text-gray-800">{pack.cible}</p>
                    <p className="text-sm text-gray-600 mt-2">Durée : <span className="font-semibold">{pack.duree}</span></p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pack.livrables.map((livrable, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{livrable}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/fr/diagnostic-ims">
                    <Button
                      variant={pack.recommande ? "primary" : "outline"}
                      className={pack.recommande ? "w-full bg-[#B8860B] hover:bg-[#9a6f09]" : "w-full"}
                    >
                      Choisir ce Pack
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
              Créez Votre SARL Togo Depuis la France en 3 Semaines
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Diagnostic gratuit 30 min (visio Zoom/WhatsApp) : faisabilité, choix structure,
              budget détaillé et roadmap signature→RCCM.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Lancer Ma Création SARL
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Horaires France • Réponse sous 24h • Paiement sécurisé SEPA
            </p>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-4">Ressources complémentaires :</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/fr/togo/creer-une-entreprise/sarl-sarlu" className="text-[#B8860B] hover:underline text-sm">
                  Guide SARL Togo complet
                </Link>
                <Link href="/fr/services/creation-dentreprise" className="text-[#B8860B] hover:underline text-sm">
                  Service Création Entreprise
                </Link>
                <Link href="/fr/services/diaspora-et-investisseurs" className="text-[#B8860B] hover:underline text-sm">
                  Service Diaspora
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
