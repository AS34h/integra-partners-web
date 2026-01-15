'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, TrendingUp, Send, CheckCircle, Clock, Euro, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const intentions = [
  {
    icon: Building2,
    slug: 'creer-une-entreprise-au-togo',
    title: 'Créer une SARL au Togo depuis la France',
    description: 'Création d\'entreprise 100% à distance (signature notaire France, procuration). Délai garanti 15-20 jours.',
    cible: 'Entrepreneurs, freelances, porteurs de projet',
    duree: '15-20 jours',
    tarif: 'dès 1 200€',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    livrables: ['Statuts OHADA', 'RCCM + Kbis', 'Compte bancaire pro', 'Immatriculation OTR']
  },
  {
    icon: TrendingUp,
    slug: 'investir-au-togo',
    title: 'Investir au Togo (Immobilier, PME, Foncier)',
    description: 'Accompagnement investissement : audit juridique, structuration fiscale, gestion déléguée sur place.',
    cible: 'Investisseurs diaspora (30K€+)',
    duree: '1-3 mois',
    tarif: 'dès 800€',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    livrables: ['Due diligence', 'Structuration fiscale', 'Montage juridique', 'Suivi post-acquisition']
  },
  {
    icon: Send,
    slug: 'transferts-bancaires-vers-le-togo',
    title: 'Optimiser vos Transferts France→Togo',
    description: 'Réduction des frais (2-3% vs 8-10%), conformité TRACFIN/OTR, structuration flux financiers.',
    cible: 'Diaspora avec flux réguliers',
    duree: '1-2 semaines',
    tarif: 'dès 150€',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    livrables: ['Diagnostic flux', 'Solutions optimisées', 'Conformité TRACFIN', 'Mise en place']
  }
]

const avantages = [
  {
    icon: Shield,
    titre: 'Sécurité Juridique',
    description: 'Conformité OHADA + droit français, protection des investissements, traçabilité fiscale France-Togo.',
    exemples: ['Audit juridique systématique', 'Vérification titres fonciers', 'Structuration conformité']
  },
  {
    icon: Clock,
    titre: 'Gain de Temps',
    description: 'Pas de déplacement requis, procédures à distance maîtrisées, réseau local opérationnel.',
    exemples: ['Signature notaire France', 'Gestion 100% distanciel', 'Réseau Lomé/Cotonou']
  },
  {
    icon: Euro,
    titre: 'Optimisation Fiscale',
    description: 'Convention fiscale France-Togo appliquée, éviter double imposition, structuration holding si pertinent.',
    exemples: ['Structuration patrimoniale', 'Déclarations coordonnées', 'Optimisation charges']
  },
  {
    icon: CheckCircle,
    titre: 'Accompagnement Local',
    description: 'Mandataire INTEGRA sur place (Lomé), suivi post-création, gestion administrative déléguée.',
    exemples: ['Reporting mensuel', 'Gestion documentaire', 'Support opérationnel']
  }
]

export default function DiasporaFrancePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link href="/fr/diaspora" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2">
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span>Retour Diaspora</span>
              </Link>
            </div>

            <div className="text-center">
              <div className="text-7xl mb-6">🇫🇷</div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Togolais de France : <span className="text-[#B8860B]">Créez, Investissez ou Gérez</span> au Togo en Toute Sécurité
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                INTEGRA accompagne la <strong>diaspora togolaise en France</strong> (Paris, Lyon, Marseille, Bordeaux)
                dans leurs projets entrepreneuriaux et d'investissement au Togo : SARL à distance, immobilier, transferts optimisés.
              </p>

              <Link href="/fr/diagnostic-ims">
                <Button
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4 text-lg"
                >
                  Diagnostic France-Togo Gratuit
                </Button>
              </Link>

              {/* Stats France */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">150K+</p>
                  <p className="text-sm text-gray-400">Togolais en France</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">45+</p>
                  <p className="text-sm text-gray-400">Projets France-Togo accompagnés</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">2-3 sem.</p>
                  <p className="text-sm text-gray-400">Délai création SARL</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">100%</p>
                  <p className="text-sm text-gray-400">Sans déplacement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi France→Togo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Pourquoi Investir au Togo depuis la France ?
            </h2>
            <p className="text-xl text-gray-600">
              150 000+ Togolais en France cherchent à concrétiser projets entrepreneuriaux,
              préparer retour au pays ou aider la famille.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card variant="custom" className="p-8">
              <h3 className="text-2xl font-bold text-[#0B1A3E] mb-4">💰 Pouvoir d'Achat EUR</h3>
              <p className="text-gray-700 leading-relaxed">
                Avec <strong>1€ = 655 FCFA</strong>, votre salaire français permet d'investir significativement au Togo :
                <strong> 10K EUR = 6,5M FCFA</strong> (terrain, SARL, petit immeuble).
                Les retraites françaises (€€€) financent projets ambitieux.
              </p>
            </Card>

            <Card variant="custom" className="p-8">
              <h3 className="text-2xl font-bold text-[#0B1A3E] mb-4">🏠 Préparer le Retour</h3>
              <p className="text-gray-700 leading-relaxed">
                Beaucoup de Togolais en France préparent leur retour définitif (retraite, rapprochement familial).
                <strong> Structurer activité et patrimoine 5-10 ans avant</strong> garantit sérénité financière.
              </p>
            </Card>

            <Card variant="custom" className="p-8">
              <h3 className="text-2xl font-bold text-[#0B1A3E] mb-4">👨‍👩‍👧 Soutien Famille</h3>
              <p className="text-gray-700 leading-relaxed">
                Transferts réguliers vers famille au Togo : <strong>200-500 EUR/mois en moyenne</strong>.
                Optimiser ces flux + structurer entreprise familiale = autonomie durable.
              </p>
            </Card>

            <Card variant="custom" className="p-8">
              <h3 className="text-2xl font-bold text-[#0B1A3E] mb-4">📈 ROI Attractifs</h3>
              <p className="text-gray-700 leading-relaxed">
                Immobilier Lomé : <strong>8-12% rendement/an</strong>. PME Togo : 15-25% ROE.
                Marchés africains croissance &gt;5%/an (vs &lt;2% Europe stagnation).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3 Intentions Clés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Votre Projet France-Togo : 3 Intentions Clés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guides détaillés, processus étape par étape et accompagnement sur-mesure.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {intentions.map((intention, index) => {
              const Icon = intention.icon
              return (
                <motion.div
                  key={intention.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/fr/diaspora/france/${intention.slug}`}>
                    <Card
                      variant="custom"
                      className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className={`w-16 h-16 rounded-2xl ${intention.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-8 h-8 ${intention.color}`} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#0B1A3E] mb-3 group-hover:text-[#B8860B] transition-colors">
                            {intention.title}
                          </h3>

                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {intention.description}
                          </p>

                          <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Pour qui :</p>
                              <p className="text-sm font-semibold text-gray-800">{intention.cible}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Durée :</p>
                              <p className="text-sm font-semibold text-gray-800">{intention.duree}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Tarif :</p>
                              <p className="text-sm font-semibold text-[#B8860B]">{intention.tarif}</p>
                            </div>
                          </div>

                          <div className="space-y-2 mb-6">
                            <p className="text-sm font-semibold text-gray-700">Livrables clés :</p>
                            <div className="grid md:grid-cols-2 gap-2">
                              {intention.livrables.map((livrable, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">{livrable}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-[#B8860B] font-semibold group-hover:gap-3 transition-all">
                            <span>Voir le guide détaillé</span>
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Avantages INTEGRA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Pourquoi INTEGRA pour Vos Projets France-Togo ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {avantages.map((avantage, index) => {
              const Icon = avantage.icon
              return (
                <motion.div
                  key={avantage.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="custom" className="p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1A3E] mb-3">{avantage.titre}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{avantage.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Concrétisez Votre Projet Togo Depuis la France
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Diagnostic gratuit 30 minutes (visio Zoom/WhatsApp) : faisabilité, structuration,
              budget prévisionnel et roadmap France-Togo.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Demander Mon Diagnostic France-Togo
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Horaires France (Paris UTC+1/2) • Confidentialité garantie • Réponse sous 24h
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
