'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, CheckCircle, TrendingUp, Users, Award, Plane, ArrowRight, ChevronRight, Building2, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function DiasporaInvestisseursPage() {
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

            <div className="inline-block mb-6 px-4 py-2 bg-orange-600/20 rounded-full border border-orange-500/30">
              <span className="text-orange-400 font-semibold text-sm">DIASPORA & INVESTISSEURS</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accompagnement Diaspora & <span className="text-[#B8860B]">Investisseurs Étrangers</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Structuration investissement diaspora (France, Canada, USA vers Togo), création entreprise à distance,
              gestion déléguée et pilotage à distance pour entrepreneurs non-résidents.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/fr/diagnostic-ims">
                <Button variant="gold" size="lg" icon={<ChevronRight />} iconPosition="right">
                  Étude de Projet Gratuite
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
                <Plane className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Diaspora (France/Canada/USA)</h3>
                <p className="text-gray-700">Togolais et Africains à l'étranger souhaitant investir ou créer leur entreprise au pays sans s'y installer.</p>
              </Card>

              <Card variant="custom" className="p-6">
                <Globe className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Investisseurs Étrangers</h3>
                <p className="text-gray-700">Entrepreneurs internationaux cherchant opportunités Afrique de l'Ouest avec structuration sécurisée.</p>
              </Card>

              <Card variant="custom" className="p-6">
                <Building2 className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Entrepreneurs Non-Résidents</h3>
                <p className="text-gray-700">Dirigeants gérant plusieurs activités nécessitant une gestion déléguée locale fiable au Togo.</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Interventions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-12">Nos Interventions Diaspora</h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Structuration Investissement Diaspora Clé-en-Main',
                  description: 'Création société à distance (depuis France/Canada/USA), domiciliation, obtention NIF/RCCM, ouverture compte bancaire, mise en conformité totale sans déplacement.',
                  livrables: ['Société créée 100% conforme OHADA', 'Dossier bancaire complet + RIB', 'Kit gouvernance (statuts, PV, registres)', 'Procédure gestion à distance'],
                  duree: '4-8 semaines',
                  ticket: '3M - 8M FCFA'
                },
                {
                  title: 'Étude de Faisabilité & Business Plan Diaspora',
                  description: 'Validation opportunité d\'investissement Togo/Afrique Ouest : étude marché local, modèle économique adapté, prévisionnel financier, analyse risques pays.',
                  livrables: ['Étude marché secteur 30-40 pages', 'Business plan 3-5 ans chiffré', 'Analyse risques pays/secteur', 'Stratégie Go-to-Market locale'],
                  duree: '6-10 semaines',
                  ticket: '5M - 12M FCFA'
                },
                {
                  title: 'Gestion Déléguée & Direction Opérationnelle',
                  description: 'Pilotage opérationnel délégué : supervision équipe locale, reporting mensuel détaillé, gestion administrative/comptable/RH, contrôle performance KPIs.',
                  livrables: ['Reporting mensuel standardisé', 'Dashboard temps réel (15 KPIs)', 'Gestion admin/compta externalisée', 'Visio-conférence bimensuelle'],
                  duree: 'Contrat 6-12 mois renouvelable',
                  ticket: '800K - 2M FCFA/mois'
                },
                {
                  title: 'Accompagnement Installation Diaspora & Implantation',
                  description: 'Support complet retour/implantation : recherche locaux commerciaux, recrutement équipe locale, mise en place process opérationnels, networking institutionnel.',
                  livrables: ['Locaux identifiés + bail négocié', '3-5 profils recrutés et formés', 'Process opérationnels documentés', 'Carnet adresses partenaires'],
                  duree: '2-4 mois',
                  ticket: '6M - 15M FCFA'
                }
              ].map((intervention, index) => (
                <Card key={index} variant="custom" className="p-8 border-l-4 border-orange-600">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xl">{index + 1}</span>
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
                { phase: '1', titre: 'Cadrage', contenu: 'Projet diaspora, budget, timeline, livrables' },
                { phase: '2', titre: 'Diagnostic', contenu: 'Opportunité marché, faisabilité locale' },
                { phase: '3', titre: 'Scénarios', contenu: 'Options structuration juridique/fiscale' },
                { phase: '4', titre: 'Choix', contenu: 'Validation structure et plan action' },
                { phase: '5', titre: 'Déploiement', contenu: 'Création société, implantation locale' },
                { phase: '6', titre: 'Suivi', contenu: 'Reporting mensuel, ajustements' }
              ].map((item) => (
                <div key={item.phase} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-orange-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.phase}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm">{item.contenu}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-600 rounded-lg">
              <p className="text-gray-700">
                <strong className="text-orange-600">Zéro déplacement nécessaire :</strong> Toutes les démarches
                administratives et légales sont gérées localement par nos équipes. Vous pilotez à distance.
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
              Concrétisez Votre Projet Diaspora
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bénéficiez d'une étude de faisabilité gratuite de 30 minutes. Analyse opportunité, validation
              projet et recommandations structuration adaptées.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Demander Mon Étude Gratuite
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
