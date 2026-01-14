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

export default function StructurationJuridicoFiscalePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B1A3E] via-[#0D2554] to-[#0B1A3E] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-4xl">
            <Link href="/fr/services" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Retour aux services</span>
            </Link>
            
            <div className="inline-block mb-6 px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30">
              <span className="text-purple-400 font-semibold text-sm">STRUCTURATION JURIDICO-FISCALE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Structuration Juridico-Fiscale OHADA & <span className="text-[#B8860B]">Optimisation Fiscale</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Optimisation structures OHADA, conformité fiscale OTR, restructuration groupe et holdings 
              pour maximiser l'efficacité juridique et fiscale de vos opérations en Afrique de l'Ouest.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/fr/diagnostic-ims">
                <Button variant="gold" size="lg" icon={<ChevronRight />} iconPosition="right">
                  Diagnostic Structuration Gratuit
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
                <Users className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">PME et Groupes</h3>
                <p className="text-gray-700">Entreprises OHADA cherchant à optimiser leur structure juridique et fiscale pour la croissance.</p>
              </Card>
              
              <Card variant="custom" className="p-6">
                <Shield className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Investisseurs Étrangers</h3>
                <p className="text-gray-700">Fonds et groupes internationaux cherchant la meilleure structure d'entrée en zone OHADA.</p>
              </Card>
              
              <Card variant="custom" className="p-6">
                <Award className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Diaspora Entrepreneurs</h3>
                <p className="text-gray-700">Entrepreneurs diaspora souhaitant structurer juridiquement leurs projets d'investissement en Afrique.</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Interventions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-12">Nos Interventions Structuration</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Audit Juridico-Fiscal Complet',
                  description: 'Diagnostic exhaustif de la structure juridique, conformité OHADA, optimisations fiscales OTR et identification des risques légaux/fiscaux.',
                  livrables: ['Rapport audit 40-50 pages', 'Matrice risques juridiques/fiscaux', 'Cartographie entités et flux', 'Recommandations optimisation'],
                  duree: '1-2 mois',
                  ticket: '8M - 18M FCFA'
                },
                {
                  title: 'Restructuration Groupe & Holdings',
                  description: 'Réorganisation juridique de groupes, création de holdings OHADA, optimisation des flux intra-groupe et planification fiscale internationale.',
                  livrables: ['Schéma cible organigramme juridique', 'Statuts et actes juridiques complets', 'Convention intra-groupe', 'Plan transition 6-12 mois'],
                  duree: '2-4 mois',
                  ticket: '15M - 35M FCFA'
                },
                {
                  title: 'Conformité Fiscale OTR & BCEAO',
                  description: 'Mise en conformité avec l\'Office Togolais des Recettes, déclarations fiscales optimisées, gestion des contrôles fiscaux et contentieux.',
                  livrables: ['Dossier conformité OTR complet', 'Procédures déclaratives standardisées', 'Simulation fiscale 3 ans', 'Kit défense contrôle fiscal'],
                  duree: '1-3 mois',
                  ticket: '6M - 15M FCFA'
                },
                {
                  title: 'Optimisation Fiscale Internationale',
                  description: 'Structuration fiscale multi-pays CEDEAO/OHADA, conventions fiscales internationales, prix de transfert et rapatriement de dividendes.',
                  livrables: ['Schéma optimisation fiscale', 'Documentation prix de transfert', 'Analyse conventions fiscales', 'Stratégie rapatriement fonds'],
                  duree: '2-3 mois',
                  ticket: '12M - 28M FCFA'
                }
              ].map((intervention, index) => (
                <Card key={index} variant="custom" className="p-8 border-l-4 border-purple-600">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-xl">{index + 1}</span>
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
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.phase}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm">{item.contenu}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-purple-50 border-l-4 border-purple-600 rounded-lg">
              <p className="text-gray-700">
                <strong className="text-purple-600">Validation à chaque étape :</strong> Aucune phase ne démarre sans 
                validation formelle de la précédente par le comité de pilotage client.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1A3E] via-[#0D2554] to-[#0B1A3E] text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Optimiser Votre Structure Juridico-Fiscale ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bénéficiez d'un diagnostic structuration gratuit de 30 minutes avec un expert juridico-fiscal. 
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
