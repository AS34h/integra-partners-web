'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Lock, FileCheck, Eye, CheckCircle, Award, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const standards = [
  {
    icon: Lock,
    titre: 'Confidentialité Absolue',
    description: 'Protection totale des données stratégiques, signature NDA systématique, serveurs sécurisés conformes RGPD.',
    engagements: ['NDA signé avant tout échange', 'Serveurs hébergés Europe', 'Accès restreint par mission', 'Destruction sécurisée fin mission'],
    certifications: ['ISO 27001 (en cours)', 'RGPD conforme', 'Protocole bancaire']
  },
  {
    icon: FileCheck,
    titre: 'Traçabilité Documentaire',
    description: 'Tous les livrables horodatés, versionnés, archivés 10 ans. Historique complet des décisions et recommandations.',
    engagements: ['Versioning Git systématique', 'Export PDF horodaté', 'Archivage cloud sécurisé', 'Restitution accessible 10 ans'],
    certifications: ['Norme ISO 9001 (qualité)', 'Archivage certifié']
  },
  {
    icon: Shield,
    titre: 'Conformité Réglementaire',
    description: 'Respect strict OHADA, RGPD, conventions fiscales internationales. Veille juridique permanente.',
    engagements: ['Audit conformité pré-mission', 'Veille réglementaire', 'Références juridiques citées', 'Mise à jour annuelle'],
    certifications: ['Conformité OHADA', 'RGPD', 'Conventions fiscales']
  },
  {
    icon: Eye,
    titre: 'Transparence Tarifaire',
    description: 'Devis détaillé avant intervention, pas de frais cachés, engagement ferme sur délais et livrables.',
    engagements: ['Devis ligne par ligne', 'Forfait ou régie clarifié', 'Pas de dépassement sans accord', 'Facturation détaillée'],
    certifications: ['Charte tarifaire', 'Conditions générales publiques']
  }
]

const processusQualite = [
  {
    numero: '01',
    titre: 'Audit Initial',
    description: 'Diagnostic confidentialité, conformité, traçabilité existante',
    controles: ['NDA signé', 'Périmètre défini', 'Risques identifiés']
  },
  {
    numero: '02',
    titre: 'Exécution Contrôlée',
    description: 'Livrables versionnés, points de contrôle hebdomadaires',
    controles: ['Versioning actif', 'Validation intermédiaire', 'Conformité vérifiée']
  },
  {
    numero: '03',
    titre: 'Validation & Archivage',
    description: 'Restitution complète, signature livrables, archivage 10 ans',
    controles: ['Signature électronique', 'Export PDF/A', 'Backup cloud']
  },
  {
    numero: '04',
    titre: 'Suivi Post-Mission',
    description: 'Support 3 mois, mise à jour si évolution réglementaire',
    controles: ['Support email', 'Hotline prioritaire', 'Veille réglementaire']
  }
]

const certifications = [
  {
    nom: 'ISO 27001',
    statut: 'En cours de certification',
    domaine: 'Sécurité de l\'information',
    echeance: '2026 Q2'
  },
  {
    nom: 'ISO 9001',
    statut: 'Visé 2026',
    domaine: 'Management qualité',
    echeance: '2026 Q4'
  },
  {
    nom: 'RGPD Conforme',
    statut: 'Actif',
    domaine: 'Protection données',
    echeance: 'Permanent'
  },
  {
    nom: 'OHADA Certifié',
    statut: 'Actif',
    domaine: 'Droit des affaires',
    echeance: 'Permanent'
  }
]

const garanties = [
  {
    icon: Shield,
    titre: 'Garantie Confidentialité',
    description: 'Remboursement intégral en cas de fuite de données imputables à INTEGRA.'
  },
  {
    icon: Clock,
    titre: 'Garantie Délais',
    description: 'Remise 10% si dépassement délai contractuel sans accord écrit préalable.'
  },
  {
    icon: Award,
    titre: 'Garantie Conformité',
    description: 'Correction gratuite si non-conformité réglementaire identifiée dans les 6 mois.'
  },
  {
    icon: CheckCircle,
    titre: 'Garantie Satisfaction',
    description: 'Point validation intermédiaire : ajustement sans frais si écart majeur avec cahier des charges.'
  }
]

export default function NosStandardsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-[#B8860B]/20 rounded-full border border-[#B8860B]/30">
              <span className="text-[#B8860B] font-semibold text-sm uppercase tracking-wider">
                🛡️ Garanties & Conformité
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nos Standards de <span className="text-[#B8860B]">Confidentialité, Traçabilité & Conformité</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              INTEGRA s'engage sur <strong>4 piliers non négociables</strong> : confidentialité absolue,
              traçabilité documentaire, conformité réglementaire et transparence tarifaire.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4 text-lg"
              >
                Demander un Diagnostic Confidentiel
              </Button>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">100%</p>
                <p className="text-sm text-gray-400">Missions sous NDA</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">10 ans</p>
                <p className="text-sm text-gray-400">Archivage sécurisé</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">0</p>
                <p className="text-sm text-gray-400">Litige conformité</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-2">4</p>
                <p className="text-sm text-gray-400">Certifications actives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Les 4 Piliers de Notre Exigence
            </h2>
          </motion.div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {standards.map((standard, index) => {
              const Icon = standard.icon
              return (
                <motion.div
                  key={standard.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="custom" className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-[#B8860B]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#0B1A3E] mb-3">{standard.titre}</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">{standard.description}</p>

                        <div className="mb-6">
                          <p className="text-sm font-semibold text-gray-700 mb-3">Nos engagements contractuels :</p>
                          <div className="space-y-2">
                            {standard.engagements.map((engagement, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{engagement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {standard.certifications.map((cert, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold"
                            >
                              ✓ {cert}
                            </span>
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

      {/* Processus Qualité */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Processus Qualité : 5 Étapes de Contrôle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque mission suit un processus rigoureux de validation entrée → exécution → livraison
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {processusQualite.map((etape, index) => (
              <motion.div
                key={etape.numero}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="custom" className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{etape.numero}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{etape.titre}</h3>
                      <p className="text-sm text-gray-700 mb-3">{etape.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {etape.controles.map((controle, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                          >
                            {controle}
                          </span>
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

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Certifications & Agréments
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card variant="custom" className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Certification</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Organisme</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Statut</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Validité</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {certifications.map((cert, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-800">{cert.nom}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{cert.domaine}</td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                            {cert.statut}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cert.echeance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              4 Garanties Contractuelles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {garanties.map((garantie, index) => {
              const Icon = garantie.icon
              return (
                <motion.div
                  key={garantie.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="custom" className="p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#B8860B]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1A3E] mb-3">{garantie.titre}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{garantie.description}</p>
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
              Travaillez avec un Partenaire de Confiance
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Diagnostic gratuit 30 minutes : confidentialité garantie dès premier échange.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Demander un Diagnostic Confidentiel
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              NDA signé avant tout échange sensible • Réponse sous 24h
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
