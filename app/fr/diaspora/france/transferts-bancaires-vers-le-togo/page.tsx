'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Send, CheckCircle, Euro, Clock, Shield, DollarSign, Building2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}
const casUsage = [
  {
    icon: Building2,
    cas: 'Famille & Besoins Personnels',
    titre: 'Famille & Besoins Personnels',
    montant: '100-500€/mois',
    frequence: 'Mensuel',
    volumeAn: '1 200-6 000€/an',
    fraisActuels: '120-480€/an (8-10%)',
    optimisation: '36-180€/an (2-3% Wise)',
    economies: '84-300€/an économisés',
    description: 'Soutien familial, scolarité, santé, dépenses courantes',
    solutions: ['Wise (2-3%)', 'Western Union Digital', 'Compte XOF + carte internationale']
  },
  {
    icon: Building2,
    cas: 'Investissement Immobilier',
    titre: 'Investissement Immobilier',
    montant: '5-50K€ (ponctuels)',
    frequence: 'Unique ou phasé',
    volumeAn: '5 000-50 000€',
    fraisActuels: '150-1 500€ (SWIFT)',
    optimisation: '100-1 000€ (2%)',
    economies: '50-500€ économisés',
    description: 'Achat terrain, construction maison, acquisition appartement',
    solutions: ['Virement bancaire direct', 'Séquestre notaire', 'Compte pro SARL']
  },
  {
    icon: Building2,
    cas: 'Capital Social SARL',
    titre: 'Capital Social SARL',
    montant: '2-10K€',
    frequence: 'Unique',
    volumeAn: '2 000-10 000€',
    fraisActuels: '80-300€ (frais)',
    optimisation: '40-200€ (structuré)',
    economies: '40-100€ économisés',
    description: 'Versement capital création entreprise',
    solutions: ['Virement SWIFT justifié', 'Compte bloqué notaire', 'Structure holding']
  },
  {
    icon: Building2,
    cas: 'Revenus Activité Pro',
    titre: 'Revenus Activité Pro',
    montant: '1-5K€/mois',
    frequence: 'Récurrent',
    volumeAn: '12 000-60 000€/an',
    fraisActuels: '600-3 000€/an',
    optimisation: '240-1 200€/an',
    economies: '360-1 800€/an économisés',
    description: 'Salaires employés, paiement fournisseurs, gestion SARL',
    solutions: ['Compte pro local', 'Carte corporate', 'Domiciliation bancaire']
  }
]

const solutions = [
  {
    nom: 'Wise (ex-TransferWise)',
    frais: '2-3%',
    delai: '1-2 jours',
    limite: '1M€/an',
    avantages: 'Taux réel, transparent, rapide',
    note: '⭐ 9/10',
    recommande: true,
    pros: ['Meilleur taux EUR-XOF', 'App mobile intuitive', 'Traçabilité complète'],
    cons: ['Plafonds mensuels', 'Vérification KYC stricte']
  },
  {
    nom: 'Virement SWIFT Classique',
    frais: '15-40€ fixe',
    delai: '3-5 jours',
    limite: 'Illimité',
    avantages: 'Grandes sommes, banque traditionnelle',
    note: '7/10',
    recommande: false,
    pros: ['Pas de plafond', 'Accepté partout', 'Justificatif officiel'],
    cons: ['Frais fixes élevés (petits montants)', 'Délais variables']
  },
  {
    nom: 'Western Union Digital',
    frais: '5-8%',
    delai: '< 24h',
    limite: '5K€/transaction',
    avantages: 'Rapidité, retrait cash',
    note: '6/10',
    recommande: false,
    pros: ['Ultra-rapide', 'Réseau agences Togo', 'Cash disponible immédiat'],
    cons: ['Frais élevés', 'Limite transaction', 'Risque fraude']
  },
  {
    nom: 'Compte Pro SARL Togo',
    frais: '1-2% (gestion)',
    delai: 'Instantané (interne)',
    limite: 'Illimité',
    avantages: 'Gestion structurée, conformité',
    note: '8/10',
    recommande: false,
    pros: ['Traçabilité fiscale', 'Carte corporate', 'Multi-devises'],
    cons: ['Nécessite SARL', 'Frais tenue compte (150-300€/an)']
  }
]

const processusOptimisation = [
  {
    etape: '01',
    titre: 'Diagnostic Flux',
    description: 'Analyse fréquence, montants, finalité des transferts',
    livrable: 'Rapport diagnostic (24h)'
  },
  {
    etape: '02',
    titre: 'Structuration',
    description: 'Choix solution(s) adaptée(s) : Wise perso + compte pro SARL si besoin',
    livrable: 'Plan optimisation'
  },
  {
    etape: '03',
    titre: 'Mise en Place',
    description: 'Ouverture comptes, vérification KYC, tests transferts',
    livrable: 'Comptes opérationnels'
  },
  {
    etape: '04',
    titre: 'Optimisation Continue',
    description: 'Monitoring frais, ajustement selon évolution projet',
    livrable: 'Suivi mensuel'
  }
]

const compliance = [
  {
    regle: 'Déclaration TRACFIN (France)',
    description: 'Tout transfert > 10 000€ vers zone hors UE doit être déclaré aux douanes (formulaire Cerfa)',
    comment: 'Nous préparons les justificatifs (acte notarié, facture pro-forma, statuts SARL) + déclaration'
  },
  {
    regle: 'Justificatif OTR (Togo)',
    description: 'Les fonds reçus doivent être déclarés à l\'OTR togolaise si > 5M FCFA (7 600€)',
    comment: 'Liaison banque-OTR automatique, nous gérons la conformité côté Togo'
  },
  {
    regle: 'KYC Renforcé (Banques)',
    description: 'Origine des fonds + finalité doivent être prouvées (bulletins salaire, justif vente bien, etc.)',
    comment: 'Préparation dossier KYC complet avant transfert = pas de blocage'
  }
]

const formules = [
  {
    nom: 'Conseil Ponctuel',
    prix: '150€',
    description: 'Diagnostic + recommandations solutions',
    recommande: false,
    tarif: '150€',
    tarifEUR: 'Une fois',
    inclus: [
      'Analyse situation actuelle',
      'Recommandations solutions',
      'Comparatif frais',
      'Checklist conformité'
    ]
  },
  {
    nom: 'Pack Mise en Place',
    prix: '450€',
    description: 'Optimisation complète + mise en place',
    recommande: true,
    tarif: '450€',
    tarifEUR: 'Forfait unique',
    inclus: [
      'Diagnostic approfondi',
      'Ouverture compte(s)',
      'Configuration Wise/SWIFT',
      'Dossier TRACFIN/OTR',
      'Tests transferts',
      'Formation gestion'
    ]
  },
  {
    nom: 'Suivi Annuel',
    prix: '100€/mois',
    description: 'Gestion continue + optimisation',
    recommande: false,
    tarif: '100€/mois',
    tarifEUR: '1 200€/an',
    inclus: [
      'Monitoring frais mensuels',
      'Optimisation continue',
      'Alertes conformité',
      'Support prioritaire',
      'Déclarations TRACFIN/OTR'
    ]
  }
]
export default function TransfertsBancairesFranceTogoPage() {
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
              <span className="text-white">Transferts Bancaires</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <Send className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-blue-600/20 rounded-full border border-blue-500/30 mb-2">
                  <span className="text-blue-400 font-semibold text-xs uppercase">🇫🇷 → 🇹🇬 Transferts</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Transférer vers le Togo depuis la France : <span className="text-[#B8860B]">Optimisez Frais & Délais</span>
                </h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              <strong>Réduisez frais transferts EUR→FCFA de 5-8% à 1-2%</strong>. Comptes bidevise,
              virements optimisés, conformité TRACFIN/OTR. Pour aide familiale, gestion entreprise ou investissements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/fr/diagnostic-ims">
                <Button
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4"
                >
                  Audit Transferts Gratuit
                </Button>
              </Link>
              <a href="#solutions">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4"
                >
                  Comparer Solutions
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">60%</p>
                <p className="text-sm text-gray-400">Économies frais possibles</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">1-2%</p>
                <p className="text-sm text-gray-400">Frais optimisés (vs 5-8%)</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">100%</p>
                <p className="text-sm text-gray-400">Conformité TRACFIN</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#B8860B] mb-1">1-2j</p>
                <p className="text-sm text-gray-400">Délai virement optimisé</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cas d'Usage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              3 Cas d'Usage Diaspora France-Togo
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {casUsage.map((cas, index) => {
              const Icon = cas.icon
              return (
                <motion.div
                  key={cas.titre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="custom" className="p-8 h-full">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1A3E] mb-3">{cas.titre}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">{cas.description}</p>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Volume annuel :</span>
                        <span className="font-semibold text-gray-800">{cas.volumeAn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frais actuels :</span>
                        <span className="font-semibold text-red-600">{cas.fraisActuels}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frais optimisés :</span>
                        <span className="font-semibold text-green-600">{cas.optimisation}</span>
                      </div>
                      <div className="pt-3 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#0B1A3E]">Économies/an :</span>
                          <span className="text-xl font-bold text-[#B8860B]">{cas.economies}</span>
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

      {/* Solutions Comparées */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              4 Solutions Transfert France-Togo : Comparatif
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la banque classique au compte bidevise optimisé
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.nom}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="custom"
                  className={`p-6 h-full ${solution.recommande ? 'border-2 border-[#B8860B] shadow-xl' : ''}`}
                >
                  {solution.recommande && (
                    <div className="inline-block mb-4 px-2 py-1 bg-[#B8860B] rounded text-white text-xs font-semibold uppercase">
                      ⭐ Optimal
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-[#0B1A3E] mb-4">{solution.nom}</h3>

                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-[#B8860B]">{solution.frais}</span>
                      <span className="text-sm text-gray-600">frais</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">{solution.delai}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">✓ Avantages :</p>
                      {solution.pros.map((pro, idx) => (
                        <div key={idx} className="flex items-start gap-1 mb-1">
                          <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-700">{pro}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">✗ Inconvénients :</p>
                      {solution.cons.map((con, idx) => (
                        <div key={idx} className="flex items-start gap-1 mb-1">
                          <span className="text-red-600 text-xs mt-0.5">•</span>
                          <span className="text-xs text-gray-700">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Note :</span>
                      <span className="font-bold text-[#B8860B]">{solution.note}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus Optimisation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Processus Optimisation INTEGRA : 6 Étapes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {processusOptimisation.map((etape, index) => (
              <motion.div
                key={etape.etape}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="custom" className="p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{etape.etape}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0B1A3E] mb-2">{etape.titre}</h3>
                      <p className="text-sm text-gray-700 mb-3 leading-relaxed">{etape.description}</p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-600 italic">{etape.livrable}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conformité */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Conformité TRACFIN & OTR : On Gère Pour Vous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 règles légales France-Togo à respecter
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {compliance.map((item, index) => (
              <motion.div
                key={item.regle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="custom" className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#0B1A3E] mb-2">{item.regle}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-green-50 rounded-lg p-4">
                    <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-green-900 mb-1">INTEGRA vous accompagne :</p>
                      <p className="text-sm text-gray-700">{item.comment}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInImmediate} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1A3E] mb-4">
              Formules & Tarifs
            </h2>
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
                      <span className="text-white font-semibold text-xs uppercase">⭐ Populaire</span>
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
                      Choisir
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
              Économisez 60% sur Vos Transferts France-Togo
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Audit transferts gratuit 30 min : calcul économies possibles, solution optimale, plan mise en œuvre.
            </p>

            <Link href="/fr/diagnostic-ims">
              <Button
                variant="primary"
                className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-10 py-5 text-lg"
              >
                Optimiser Mes Transferts
              </Button>
            </Link>

            <p className="mt-6 text-sm text-gray-400">
              Horaires France • Réponse sous 24h • Économies garanties
            </p>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-4">Ressources complémentaires :</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/fr/services/gestion-documentaire" className="text-[#B8860B] hover:underline text-sm">
                  Gestion Administrative
                </Link>
                <Link href="/fr/services/structuration-juridico-fiscale" className="text-[#B8860B] hover:underline text-sm">
                  Optimisation Fiscale FR-TG
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
