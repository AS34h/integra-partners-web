'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, CheckCircle, TrendingUp, Users, Award, Building, ArrowRight, ChevronRight, FileCheck, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function SecurisationInstitutionnellePage() {
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
            
            <div className="inline-block mb-6 px-4 py-2 bg-red-600/20 rounded-full border border-red-500/30">
              <span className="text-red-400 font-semibold text-sm">SÉCURISATION INSTITUTIONNELLE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sécurisation & <span className="text-[#B8860B]">Due Diligence Institutionnelle</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Audit conformité, due diligence pré-acquisition, sécurisation documentaire et risk management 
              pour sécuriser vos opérations, acquisitions et partenariats institutionnels.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/fr/diagnostic-ims">
                <Button variant="gold" size="lg" icon={<ChevronRight />} iconPosition="right">
                  Audit de Conformité Gratuit
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
                <Building className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Acquéreurs</h3>
                <p className="text-gray-700">Entreprises et groupes évaluant une acquisition ou fusion nécessitant une due diligence approfondie.</p>
              </Card>
              
              <Card variant="custom" className="p-6">
                <Award className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Investisseurs et Fonds</h3>
                <p className="text-gray-700">Fonds d'investissement, family offices nécessitant une validation institutionnelle avant engagement.</p>
              </Card>
              
              <Card variant="custom" className="p-6">
                <Shield className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Bailleurs Internationaux</h3>
                <p className="text-gray-700">Organisations internationales exigeant conformité OHADA, gouvernance et traçabilité documentaire.</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Interventions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-12">Nos Interventions de Sécurisation</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Due Diligence Pré-Acquisition Complète',
                  description: 'Audit juridique, financier, social et opérationnel d\'une cible d\'acquisition : analyse risques, validation conformité OHADA, évaluation passifs cachés.',
                  livrables: ['Rapport due diligence 80-100 pages', 'Matrice risques critiques (15-25 items)', 'Liste ajustements prix/garanties', 'Recommandations post-acquisition'],
                  duree: '1-2 mois',
                  ticket: '18M - 35M FCFA'
                },
                {
                  title: 'Audit de Conformité Institutionnelle OHADA',
                  description: 'Vérification conformité statuts, registres légaux, PV assemblées, documents sociaux, fiscaux et parafiscaux selon normes OHADA et législations locales.',
                  livrables: ['Rapport conformité 40-60 pages', 'Check-list 200+ points de contrôle', 'Plan action correctif priorisé', 'Modèles documents manquants'],
                  duree: '3-6 semaines',
                  ticket: '8M - 18M FCFA'
                },
                {
                  title: 'Sécurisation Documentaire & Archivage Institutionnel',
                  description: 'Organisation, numérisation et sécurisation archives légales (statuts, PV, contrats, propriété intellectuelle) avec système de gestion documentaire.',
                  livrables: ['Archives numérisées classifiées', 'Procédure gestion documentaire', 'Registre traçabilité certifié', 'Coffre-fort numérique configuré'],
                  duree: '2-4 mois',
                  ticket: '12M - 25M FCFA'
                },
                {
                  title: 'Risk Management & Plan de Mitigation',
                  description: 'Identification risques juridiques, réglementaires, contractuels et opérationnels ; élaboration plan mitigation et système alertes précoces.',
                  livrables: ['Cartographie risques 50+ items', 'Matrice impact/probabilité', 'Plan mitigation 12-24 mois', 'Dashboard monitoring risques'],
                  duree: '1-2 mois',
                  ticket: '10M - 22M FCFA'
                }
              ].map((intervention, index) => (
                <Card key={index} variant="custom" className="p-8 border-l-4 border-red-600">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-xl">{index + 1}</span>
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
                { phase: '1', titre: 'Cadrage', contenu: 'Périmètre audit, risques prioritaires, accès' },
                { phase: '2', titre: 'Diagnostic', contenu: 'Revue documentaire, interviews, contrôles' },
                { phase: '3', titre: 'Scénarios', contenu: 'Classification risques : critiques/majeurs/mineurs' },
                { phase: '4', titre: 'Choix', contenu: 'Validation plan action correctif' },
                { phase: '5', titre: 'Déploiement', contenu: 'Mise en conformité, sécurisation docs' },
                { phase: '6', titre: 'Suivi', contenu: 'Audits périodiques 6-12 mois' }
              ].map((item) => (
                <div key={item.phase} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.phase}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm">{item.contenu}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <p className="text-gray-700">
                <strong className="text-red-600">Confidentialité absolue :</strong> Tous nos consultants sont liés par un NDA 
                renforcé. Aucune information sensible ne sort du périmètre client.
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
              Sécurisez Vos Opérations Institutionnelles
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bénéficiez d'un pré-audit conformité gratuit de 30 minutes. Identification rapide des risques 
              critiques et recommandations immédiates.
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
              Réponse sous 24h • Confidentialité garantie • Sans engagement
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
