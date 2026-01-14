'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, CheckCircle, Clock, Users, Award, Building2, ArrowRight, ChevronRight, Shield, FolderOpen, Scale } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function GestionDocumentairePage() {
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
            
            <div className="inline-block mb-6 px-4 py-2 bg-indigo-600/20 rounded-full border border-indigo-500/30">
              <span className="text-indigo-400 font-semibold text-sm">GESTION DOCUMENTAIRE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gestion Documentaire & <span className="text-[#B8860B]">Conformité Registres OHADA</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Rédaction actes juridiques (statuts, PV, pacte d'associés), mise en conformité des registres légaux, 
              archivage sécurisé et tenue à jour de toute votre documentation d'entreprise OHADA.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/fr/diagnostic-ims">
                <Button variant="gold" size="lg" icon={<ChevronRight />} iconPosition="right">
                  Audit Documentaire Gratuit
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
                <Building2 className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">PME et Associations</h3>
                <p className="text-gray-700">Entreprises cherchant à mettre à jour leurs registres et se conformer aux obligations OHADA.</p>
              </Card>
              
              <Card variant="custom" className="p-6">
                <FolderOpen className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Sociétés Multi-Filiales</h3>
                <p className="text-gray-700">Groupes nécessitant une gestion centralisée et homogène de leurs actes juridiques.</p>
              </Card>
              
              <Card variant="custom" className="p-6">
                <Shield className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Entreprises Pré-Levée</h3>
                <p className="text-gray-700">Startups préparant une levée de fonds ou due diligence investisseurs exigeant conformité totale.</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Interventions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-12">Nos Interventions Documentaires</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Rédaction Statuts Sur-Mesure',
                  description: 'Rédaction ou refonte complète de statuts SARL/SA adaptés à votre activité, gouvernance et objectifs stratégiques. Conformité OHADA garantie.',
                  livrables: ['Statuts personnalisés 15-25 pages', 'Pacte d\'associés (optionnel)', 'Checklist conformité OHADA', 'Note explicative gouvernance'],
                  duree: '2-3 semaines',
                  ticket: '300 000 - 600 000 FCFA'
                },
                {
                  title: 'Pack PV Annuels',
                  description: 'Rédaction procès-verbaux assemblées générales annuelles : approbation comptes, affectation résultats, nominations, décisions courantes.',
                  livrables: ['PV AGO/AGE conformes', 'Résolutions types validées', 'Dépôt greffe si requis', 'Mise à jour registres internes'],
                  duree: '1-2 semaines',
                  ticket: '150 000 - 350 000 FCFA'
                },
                {
                  title: 'Mise en Conformité Registres',
                  description: 'Audit et restructuration complète de vos registres légaux : registre de commerce, PV, décisions, actions, présences - conformité OHADA totale.',
                  livrables: ['Audit état registres existants', 'Reconstitution documents manquants', 'Registres légaux à jour', 'Manuel gestion documentaire'],
                  duree: '3-5 semaines',
                  ticket: '500 000 - 1 000 000 FCFA'
                },
                {
                  title: 'Archivage Sécurisé',
                  description: 'Solution d\'archivage physique et numérique de vos documents légaux avec système de gestion électronique sécurisé (GED) et accès 24/7.',
                  livrables: ['Numérisation tous documents', 'Plateforme GED sécurisée', 'Classification et indexation', 'Stockage redondant 5 ans', 'Formation équipe 2h'],
                  duree: '2-4 semaines',
                  ticket: '400 000 - 800 000 FCFA'
                }
              ].map((intervention, index) => (
                <Card key={index} variant="custom" className="p-8 border-l-4 border-indigo-600">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-xl">{index + 1}</span>
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
                          <Clock className="w-4 h-4 text-[#B8860B]" />
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
                { phase: '1', titre: 'Audit', contenu: 'État des lieux documents et registres' },
                { phase: '2', titre: 'Planification', contenu: 'Plan action, priorisation, calendrier' },
                { phase: '3', titre: 'Rédaction', contenu: 'Production actes juridiques conformes' },
                { phase: '4', titre: 'Validation', contenu: 'Revue juridique et approbation client' },
                { phase: '5', titre: 'Formalités', contenu: 'Dépôts greffes, publications légales' },
                { phase: '6', titre: 'Archivage', contenu: 'Classement sécurisé et formation' }
              ].map((item) => (
                <div key={item.phase} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.phase}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm">{item.contenu}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-indigo-50 border-l-4 border-indigo-600 rounded-lg">
              <p className="text-gray-700">
                <strong className="text-indigo-600">Conformité OHADA garantie :</strong> Tous nos actes sont validés 
                par un juriste spécialisé droit des sociétés OHADA. Garantie révision gratuite si non-conformité.
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
              Besoin de Mettre à Jour Vos Documents Légaux ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Audit documentaire gratuit de 30 minutes : état des lieux de vos registres et recommandations 
              immédiates pour vous mettre en conformité totale OHADA.
            </p>
            
            <Link href="/fr/diagnostic-ims">
              <Button 
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Demander Mon Audit Gratuit
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Réponse sous 24h • Confidentialité totale • Devis personnalisé
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
