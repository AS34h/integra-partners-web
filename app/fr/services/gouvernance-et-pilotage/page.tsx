'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, CheckCircle, TrendingUp, Users, Award, Shield, ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function GouvernancePilotagePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl">
            <Link href="/fr/services" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Retour aux services</span>
            </Link>

            <div className="inline-block mb-6 px-4 py-2 bg-green-600/20 rounded-full border border-green-500/30">
              <span className="text-green-400 font-semibold text-sm">GOUVERNANCE & PILOTAGE</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gouvernance & <span className="text-[#B8860B]">Pilotage Institutionnel</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Conseils d'administration, comités spécialisés, dashboards stratégiques et contrôle interne
              pour renforcer la gouvernance et le pilotage des institutions et groupes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/fr/diagnostic-ims">
                <Button variant="gold" size="lg" icon={<ChevronRight />} iconPosition="right">
                  Diagnostic Gouvernance Gratuit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pour Qui */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-8">Pour Qui ?</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="custom" className="p-6">
                <Users className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Conseils d'Administration</h3>
                <p className="text-gray-700">Administrateurs et actionnaires souhaitant professionnaliser le fonctionnement de leurs instances de gouvernance.</p>
              </Card>

              <Card variant="custom" className="p-6">
                <Shield className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Directions Générales</h3>
                <p className="text-gray-700">DG et comités exécutifs cherchant à structurer le pilotage stratégique et le reporting institutionnel.</p>
              </Card>

              <Card variant="custom" className="p-6">
                <Award className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Institutions Publiques</h3>
                <p className="text-gray-700">Établissements publics, agences et organismes parapublics renforçant leur gouvernance institutionnelle.</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Interventions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-12">Nos Interventions Gouvernance</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Structuration Conseil d'Administration",
                  description: "Mise en place ou refonte du conseil d'administration : règlement intérieur, comités spécialisés, procédures de décision et calendar board.",
                  livrables: ['Règlement intérieur conseil validé', 'Charte comités spécialisés (audit, rémunérations)', 'Calendrier annuel des sessions', 'Kit gouvernance documentaire'],
                  duree: '2-3 mois',
                  ticket: '10M - 20M FCFA'
                },
                {
                  title: 'Dashboard Stratégique & KPIs',
                  description: 'Conception et déploiement de tableaux de bord stratégiques pour comité exécutif et conseil : indicateurs clés, suivi performance, alertes.',
                  livrables: ['Dashboard Power BI ou Excel interactif', 'Catalogue 20-30 KPIs stratégiques', 'Procédures collecte données', 'Formation équipe pilotage'],
                  duree: '2-4 mois',
                  ticket: '12M - 25M FCFA'
                },
                {
                  title: 'Audit Contrôle Interne & Risques',
                  description: 'Évaluation dispositif contrôle interne, cartographie des risques majeurs, recommandations conformité et plan de remédiation.',
                  livrables: ['Rapport audit contrôle interne 50+ pages', 'Cartographie risques 15-20 risques', 'Matrice contrôles clés', 'Plan action remédiation 12 mois'],
                  duree: '2-3 mois',
                  ticket: '15M - 30M FCFA'
                },
                {
                  title: 'Secrétariat Général Conseil',
                  description: 'Accompagnement continu du secrétariat général : préparation sessions conseil, procès-verbaux, suivi décisions, conformité légale.',
                  livrables: ['Templates ordre du jour & PV', 'Procédures convocation & documentation', 'Outil suivi décisions conseil', 'Formation secrétaire général'],
                  duree: '1-2 mois + accompagnement annuel',
                  ticket: '8M - 18M FCFA + forfait suivi'
                }
              ].map((intervention, index) => (
                <Card key={index} variant="custom" className="p-8 border-l-4 border-green-600">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold text-xl">{index + 1}</span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0B1A3E] mb-3">{intervention.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{intervention.description}</p>

                      <div className="mb-4">
                        <p className="font-semibold text-[#0B1A3E] mb-2">Livrables clés :</p>
                        <ul className="space-y-1">
                          {intervention.livrables.map((livrable, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{livrable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <TrendingUp className="w-4 h-4 text-[#B8860B]" />
                          <span><strong>Durée :</strong> {intervention.duree}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Award className="w-4 h-4 text-[#B8860B]" />
                          <span><strong>Budget :</strong> {intervention.ticket}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Méthode INTEGRA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-8">Méthode INTEGRA 6 Phases</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { phase: '1', titre: 'Cadrage', contenu: 'Enjeux, périmètre, livrables, planning' },
                { phase: '2', titre: 'Diagnostic', contenu: 'Analyse interne/externe, SWOT, interviews' },
                { phase: '3', titre: 'Scénarios', contenu: '3-4 options stratégiques chiffrées' },
                { phase: '4', titre: 'Choix', contenu: 'Validation comité stratégique' },
                { phase: '5', titre: 'Déploiement', contenu: 'Plans d\'action, KPIs, responsables' },
                { phase: '6', titre: 'Suivi', contenu: 'Comités mensuels 6-12 mois' }
              ].map((item) => (
                <div key={item.phase} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.phase}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm">{item.contenu}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-600 rounded-lg">
              <p className="text-gray-700">
                <strong className="text-green-600">Validation à chaque étape :</strong> Aucune phase ne démarre sans
                validation formelle de la précédente par le comité de pilotage client.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Renforcer Votre Gouvernance ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bénéficiez d'un diagnostic gouvernance gratuit de 30 minutes avec un expert institutionnel.
              Analyse de vos enjeux et recommandations immédiates.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Demander Mon Diagnostic Gratuit
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Réponse sous 24h • Confidentialité garantie • Sans engagement
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
