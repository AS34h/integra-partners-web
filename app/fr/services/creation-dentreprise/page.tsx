'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Rocket, CheckCircle, Clock, Users, Award, TrendingUp, ArrowRight, ChevronRight, Building2, FileText, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function CreationEntreprisePage() {
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
            
            <div className="inline-block mb-6 px-4 py-2 bg-amber-600/20 rounded-full border border-amber-500/30">
              <span className="text-[#B8860B] font-semibold text-sm">CRÉATION D'ENTREPRISE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Création d'Entreprise Clé en Main - <span className="text-[#B8860B]">Délai Garanti 7 Jours</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              SARL/SA clé en main : statuts, RCCM, IFU, banque, CNSS - Tout inclus, délai 7 jours ouvrés. 
              Accompagnement complet de la conception à l'immatriculation de votre entreprise au Togo.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/fr/diagnostic-ims">
                <Button variant="gold" size="lg" icon={<ChevronRight />} iconPosition="right">
                  Démarrer Ma Création Gratuite
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
                <Building2 className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Entrepreneurs Locaux</h3>
                <p className="text-gray-700">Porteurs de projets locaux cherchant à formaliser leur activité et démarrer rapidement.</p>
              </Card>
              
              <Card variant="custom" className="p-6">
                <Rocket className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Porteurs de Projet</h3>
                <p className="text-gray-700">Innovateurs et créateurs souhaitant lancer leur startup avec un cadre juridique solide.</p>
              </Card>
              
              <Card variant="custom" className="p-6">
                <TrendingUp className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">Startups et TPE</h3>
                <p className="text-gray-700">Jeunes entreprises nécessitant une structure légale adaptée à leur croissance.</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Packs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-12">Nos Packs de Création</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Pack SARLU Solo',
                  description: 'Création SARLU unipersonnelle pour entrepreneur solo. Statuts simplifiés, immatriculation RCCM, obtention IFU et ouverture compte bancaire.',
                  livrables: ['Statuts SARLU signés', 'Immatriculation RCCM', 'Numéro IFU fiscal', 'Ouverture compte bancaire', 'Kit conformité starter'],
                  duree: '5-7 jours',
                  ticket: '250 000 FCFA'
                },
                {
                  title: 'Pack SARL Classique',
                  description: 'SARL 2+ associés avec répartition capital, gouvernance structurée et mise en conformité OHADA complète.',
                  livrables: ['Statuts SARL multi-associés', 'Pacte d\'associés optionnel', 'RCCM + IFU + compte bancaire', 'Déclaration CNSS employeur', 'Registres légaux (PV, délibérations)'],
                  duree: '7-10 jours',
                  ticket: '500 000 - 800 000 FCFA'
                },
                {
                  title: 'Pack SA',
                  description: 'Création Société Anonyme avec conseil d\'administration, nomination commissaire aux comptes et conformité renforcée.',
                  livrables: ['Statuts SA conformes OHADA', 'Nomination CA et commissaire', 'RCCM + IFU + CNSS', 'Compte bancaire bloqué capital', 'Registre actions et décisions CA'],
                  duree: '10-15 jours',
                  ticket: '1 000 000 - 1 500 000 FCFA'
                },
                {
                  title: 'Pack Premium',
                  description: 'Création sur-mesure avec accompagnement stratégique : choix forme juridique, optimisation fiscale, conseil gouvernance et formation dirigeants.',
                  livrables: ['Étude comparative formes juridiques', 'Statuts sur-mesure', 'Full immatriculation (RCCM/IFU/CNSS/banque)', 'Pacte associés renforcé', 'Formation 2h dirigeants', 'Suivi post-création 3 mois'],
                  duree: '12-18 jours',
                  ticket: '1 200 000 - 2 000 000 FCFA'
                }
              ].map((pack, index) => (
                <Card key={index} variant="custom" className="p-8 border-l-4 border-amber-600">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-600 font-bold text-xl">{index + 1}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0B1A3E] mb-3">{pack.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{pack.description}</p>
                      
                      <div className="mb-4">
                        <p className="font-semibold text-[#0B1A3E] mb-2">Livrables inclus :</p>
                        <ul className="space-y-1">
                          {pack.livrables.map((livrable, idx) => (
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
                          <span><strong>Délai :</strong> {pack.duree}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Award className="w-4 h-4 text-[#B8860B]" />
                          <span><strong>Tarif :</strong> {pack.ticket}</span>
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
            <h2 className="text-3xl font-bold text-[#0B1A3E] mb-8">Processus de Création en 6 Étapes</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { phase: '1', titre: 'Consultation', contenu: 'Choix forme juridique, capital, associés' },
                { phase: '2', titre: 'Rédaction', contenu: 'Statuts, pacte, documents légaux' },
                { phase: '3', titre: 'Signature', contenu: 'Validation et signature des statuts' },
                { phase: '4', titre: 'Dépôt', contenu: 'RCCM, IFU, CNSS - démarches complètes' },
                { phase: '5', titre: 'Banque', contenu: 'Ouverture compte et dépôt capital' },
                { phase: '6', titre: 'Livraison', contenu: 'Dossier complet + formation dirigeants' }
              ].map((item) => (
                <div key={item.phase} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-amber-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.phase}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{item.titre}</h3>
                  <p className="text-gray-600 text-sm">{item.contenu}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-600 rounded-lg">
              <p className="text-gray-700">
                <strong className="text-amber-600">Garantie délai :</strong> Si votre entreprise n'est pas immatriculée 
                dans le délai annoncé (hors cas de force majeure), nous vous remboursons 50% des honoraires.
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
              Prêt à Lancer Votre Entreprise ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Consultation gratuite de 30 minutes pour déterminer la forme juridique adaptée à votre projet. 
              Devis personnalisé et planning détaillé immédiat.
            </p>
            
            <Link href="/fr/diagnostic-ims">
              <Button 
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Démarrer Ma Création Maintenant
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Réponse sous 24h • Délai garanti • Remboursement si retard
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
