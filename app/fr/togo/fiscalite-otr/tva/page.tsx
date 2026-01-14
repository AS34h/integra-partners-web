import { Metadata } from 'next'
import Link from 'next/link'
import { Receipt, TrendingUp, AlertTriangle, CheckCircle, Calculator, ChevronRight, FileText } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FAQSection } from '@/components/FAQ'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function GuideTVATogo() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-navy text-white py-12 md:py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="mb-4">
              <Breadcrumb paths={[
                { name: 'Togo', url: '/fr/togo' },
                { name: 'Fiscalité OTR', url: '/fr/togo/fiscalite-otr' },
                { name: 'TVA', url: '/fr/togo/fiscalite-otr/tva' }
              ]} />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              TVA au Togo : Taux, Déclarations OTR & Optimisation 2026
            </h1>
            <p className="text-lg text-gray-200">
              Maîtrisez la Taxe sur la Valeur Ajoutée au Togo : taux applicables, obligations déclaratives, 
              gestion des crédits de TVA et stratégies d'optimisation fiscale conformes.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 border-b border-gray-200 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">18%</div>
              <div className="text-sm text-gray-600">Taux normal TVA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">60M FCFA</div>
              <div className="text-sm text-gray-600">Seuil assujettissement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">15e du mois</div>
              <div className="text-sm text-gray-600">Date limite déclaration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">25-100%</div>
              <div className="text-sm text-gray-600">Pénalités retard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                <Receipt className="w-6 h-6 text-gold" />
                Comprendre la TVA au Togo
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La TVA (Taxe sur la Valeur Ajoutée) est un impôt indirect sur la consommation, 
                collecté par les entreprises pour le compte de l'<strong>Office Togolais des Recettes (OTR)</strong>. 
                Au Togo, elle constitue la principale source de recettes fiscales (plus de 40% des 
                recettes de l'État).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Instaurée en 1995 et réformée en 2019, la TVA togolaise s'applique aux opérations 
                économiques réalisées à titre onéreux sur le territoire national. Bien gérée, elle 
                représente un coût fiscal neutre pour les entreprises assujetties.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="font-bold text-lg text-blue-900 mb-3">🎯 Principe de Fonctionnement</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>TVA collectée :</strong> TVA facturée à vos clients sur vos ventes 
                    (chiffre d'affaires × 18%).
                  </p>
                  <p>
                    <strong>TVA déductible :</strong> TVA payée sur vos achats professionnels 
                    (matières premières, services, investissements).
                  </p>
                  <p className="bg-white border border-blue-200 p-4 rounded">
                    <strong>TVA à reverser à l'OTR =</strong> TVA collectée - TVA déductible<br />
                    <span className="text-sm text-gray-600">
                      Si TVA déductible {'>'} TVA collectée → Crédit de TVA (remboursable ou reportable)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Taux */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-gold" />
                Taux de TVA Applicables
              </h2>

              <div className="space-y-6">
                {/* Taux Normal */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-navy text-white p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">Taux Normal</h3>
                      <div className="text-3xl font-bold">18%</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Le taux normal de <strong>18%</strong> s'applique à la quasi-totalité des biens 
                      et services au Togo (hors exonérations spécifiques).
                    </p>
                    <div className="bg-gray-50 rounded p-4">
                      <p className="text-sm font-semibold text-navy mb-2">Exemples d'application :</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Vente de marchandises (commerce, import-export)</li>
                        <li>• Prestations de services (conseil, digital, BTP, transport)</li>
                        <li>• Restauration et hôtellerie</li>
                        <li>• Vente de véhicules et pièces détachées</li>
                        <li>• Location de biens meubles et immeubles à usage professionnel</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Exonérations */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">Opérations Exonérées (0%)</h3>
                      <div className="text-3xl font-bold">0%</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Certaines opérations sont exonérées de TVA par la loi togolaise :
                    </p>
                    <div className="space-y-3">
                      <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <p className="font-semibold text-green-900 mb-2">🏥 Santé & Éducation</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Prestations médicales et hospitalières</li>
                          <li>• Médicaments essentiels (liste OMS)</li>
                          <li>• Enseignement et formation professionnelle</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <p className="font-semibold text-green-900 mb-2">🌾 Agriculture & Alimentation de Base</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Produits agricoles non transformés</li>
                          <li>• Pain, farine, lait, huile de table</li>
                          <li>• Intrants agricoles (semences, engrais)</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <p className="font-semibold text-green-900 mb-2">🏦 Services Financiers</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Opérations bancaires (crédits, dépôts)</li>
                          <li>• Assurances vie et maladie</li>
                          <li>• Émission et gestion de titres</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <p className="font-semibold text-green-900 mb-2">🌍 Exportations</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Livraisons de biens expédiés hors du Togo</li>
                          <li>• Services utilisés hors du Togo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded-lg p-6">
                <h3 className="font-bold text-lg text-yellow-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Attention : Exonération ≠ Hors Champ
                </h3>
                <p className="text-gray-700 text-sm">
                  Une opération <strong>exonérée</strong> donne droit à déduction de la TVA sur achats. 
                  Une opération <strong>hors champ</strong> (ex: salaires) ne permet pas de récupérer 
                  la TVA payée en amont. Nuance critique pour votre trésorerie !
                </p>
              </div>
            </div>

            {/* Assujettissement */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-gold" />
                Conditions d'Assujettissement à la TVA
              </h2>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg text-navy mb-4">Seuil de Chiffre d'Affaires</h3>
                <div className="bg-gradient-to-r from-navy to-navy/90 text-white rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <div className="text-sm mb-2">Vous êtes obligatoirement assujetti si :</div>
                    <div className="text-4xl font-bold mb-2">CA ≥ 60 millions FCFA</div>
                    <div className="text-sm">(sur l'année civile précédente ou en cours)</div>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>
                    <strong>Exemple :</strong> Si votre CA 2025 atteint ou dépasse 60M FCFA, vous devez 
                    vous immatriculer à la TVA auprès de l'OTR dès le dépassement constaté.
                  </p>
                  <p className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
                    ⚠️ <strong>Pénalité :</strong> Non-déclaration volontaire = amende 500 000 FCFA 
                    + rappel de TVA non collectée + intérêts de retard.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-navy mb-4">Option Volontaire pour la TVA</h3>
                <p className="text-gray-700 mb-4">
                  Même si votre CA {'<'} 60M FCFA, vous pouvez <strong>opter volontairement</strong> 
                  pour l'assujettissement à la TVA. Avantages :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Récupération de la TVA :</strong> Vous déduisez la TVA payée sur vos achats (trésorerie positive si activité exportatrice).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Crédibilité commerciale :</strong> Vos clients B2B préfèrent travailler avec des fournisseurs assujettis (déduction de leur TVA).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Conformité :</strong> Anticipe votre passage au régime réel en cas de croissance.</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  📝 Demande à déposer à l'OTR avec justificatifs (RCCM, statuts, IFU).
                </p>
              </div>
            </div>

            {/* Déclarations */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-gold" />
                Déclarations et Paiement à l'OTR
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h3 className="font-bold text-lg text-red-900 mb-3">📅 Échéance Mensuelle Impérative</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-lg font-semibold">
                    Déclaration et paiement TVA : <strong>avant le 15 du mois suivant</strong>
                  </p>
                  <p className="text-sm">
                    <strong>Exemple :</strong> TVA de janvier 2026 → déclaration + paiement avant le 15 février 2026.
                  </p>
                  <p className="bg-white border border-red-200 p-3 rounded text-sm">
                    ⚠️ Si le 15 tombe un jour férié ou week-end, le délai est <strong>prorogé au jour ouvrable suivant</strong>.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Étapes déclaration */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-navy mb-4">Procédure de Déclaration (e-Tax)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-gold text-navy rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold text-navy">Connexion à e-Tax</p>
                        <p className="text-sm text-gray-700">
                          Connectez-vous sur <a href="https://etax.otr.tg" className="text-blue-600 underline">etax.otr.tg</a> avec 
                          vos identifiants IFU et mot de passe.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-gold text-navy rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold text-navy">Remplir le formulaire TVA</p>
                        <p className="text-sm text-gray-700">
                          Saisissez : TVA collectée (ventes TTC ÷ 1,18 × 0,18), TVA déductible (achats avec factures conformes), TVA nette à payer.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-gold text-navy rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <p className="font-semibold text-navy">Télépaiement</p>
                        <p className="text-sm text-gray-700">
                          Payez en ligne (Mobile Money, virement bancaire) ou imprimez l'avis de paiement pour règlement en banque.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-gold text-navy rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <p className="font-semibold text-navy">Conservation des justificatifs</p>
                        <p className="text-sm text-gray-700">
                          Téléchargez et archivez votre déclaration + quittance de paiement pendant 10 ans (obligation légale).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pièces justificatives */}
                <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-navy mb-4">Documents à Conserver</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Factures de ventes émises (avec mention TVA, numérotation continue)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Factures d'achats reçues (TVA déductible si fournisseur assujetti)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Relevés bancaires (preuves de paiement clients/fournisseurs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Déclarations TVA mensuelles + quittances OTR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Grand-livre comptable et balance mensuelle</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Crédits TVA */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-gold" />
                Gestion des Crédits de TVA
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg text-navy mb-3">Quand Suis-je en Crédit de TVA ?</h3>
                <p className="text-gray-700 mb-4">
                  Vous êtes en <strong>crédit de TVA</strong> lorsque la TVA déductible sur vos achats 
                  dépasse la TVA collectée sur vos ventes dans le mois.
                </p>
                <div className="bg-white border border-blue-300 p-4 rounded">
                  <p className="font-semibold text-navy mb-2">Situations fréquentes :</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Activité exportatrice :</strong> CA exportation (0% TVA) mais achats locaux (18% TVA déductible)</li>
                    <li>• <strong>Investissements importants :</strong> Achat équipements, véhicules, immobilier (TVA déductible élevée)</li>
                    <li>• <strong>Lancement d'activité :</strong> Achats de démarrage importants avant génération CA</li>
                    <li>• <strong>Saisonnalité :</strong> Achats massifs en anticipation de haute saison</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-navy mb-3">Option 1 : Report du Crédit</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Le crédit de TVA est <strong>automatiquement reportable</strong> sur les mois suivants. 
                    Il s'impute sur la TVA à payer des périodes ultérieures.
                  </p>
                  <div className="bg-green-50 border border-green-200 p-3 rounded">
                    <p className="text-xs text-gray-700">
                      ✅ <strong>Avantage :</strong> Pas de démarche administrative, report illimité dans le temps.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-navy mb-3">Option 2 : Remboursement OTR</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Vous pouvez demander le <strong>remboursement du crédit</strong> après 3 mois consécutifs 
                    de crédit de TVA (ou immédiatement si activité exportatrice).
                  </p>
                  <div className="bg-yellow-50 border border-yellow-300 p-3 rounded">
                    <p className="text-xs text-gray-700">
                      ⚠️ <strong>Procédure :</strong> Demande écrite à l'OTR + contrôle fiscal préalable 
                      (délai 3-6 mois).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sanctions */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-gold" />
                Sanctions en Cas de Non-Respect
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h3 className="font-bold text-lg text-red-900 mb-4">Pénalités de l'OTR</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-red-100">
                      <tr>
                        <th className="p-3 text-left text-red-900">Infraction</th>
                        <th className="p-3 text-left text-red-900">Sanction</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="p-3">Déclaration tardive (1-30 jours)</td>
                        <td className="p-3 font-semibold">25% de la TVA due</td>
                      </tr>
                      <tr>
                        <td className="p-3">Déclaration tardive ({'>'} 30 jours)</td>
                        <td className="p-3 font-semibold">50% de la TVA due</td>
                      </tr>
                      <tr>
                        <td className="p-3">Non-déclaration (omission volontaire)</td>
                        <td className="p-3 font-semibold">100% de la TVA + amende 500K FCFA</td>
                      </tr>
                      <tr>
                        <td className="p-3">Paiement tardif</td>
                        <td className="p-3 font-semibold">Intérêts 1% par mois</td>
                      </tr>
                      <tr>
                        <td className="p-3">Facturation sans mention TVA</td>
                        <td className="p-3 font-semibold">Amende 200K - 1M FCFA</td>
                      </tr>
                      <tr>
                        <td className="p-3">Déduction TVA sur factures non conformes</td>
                        <td className="p-3 font-semibold">Rejet + rappel TVA + 50% majoration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-300 rounded-lg p-6">
                <h3 className="font-bold text-lg text-orange-900 mb-3">Conséquences Opérationnelles</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Blocage des comptes bancaires (avis à tiers détenteur)</li>
                  <li>• Interdiction de participation aux marchés publics</li>
                  <li>• Inscription au fichier des débiteurs fiscaux (impact crédit)</li>
                  <li>• Poursuites pénales (jusqu'à 2 ans de prison pour fraude aggravée)</li>
                </ul>
              </div>
            </div>

            {/* Optimisation */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-gold" />
                Stratégies d'Optimisation Fiscale Légale
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-navy mb-3">1. Maximiser la TVA Déductible</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Exigez des factures conformes de tous vos fournisseurs (mentions légales, IFU)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Privilégiez les fournisseurs assujettis à la TVA (récupération possible)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Déduisez la TVA sur investissements (bureaux, véhicules pro, matériel)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-navy mb-3">2. Optimiser la Trésorerie</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Décalez vos achats importants pour équilibrer TVA collectée/déductible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Demandez remboursement crédit de TVA si activité exportatrice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Anticipez vos échéances pour éviter pénalités de retard</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-navy mb-3">3. Sécuriser la Déduction</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Vérifiez le numéro IFU de vos fournisseurs sur etax.otr.tg</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Conservez preuves de paiement (relevés bancaires, reçus)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Tenez un registre TVA détaillé (achats/ventes chronologiques)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-navy mb-3">4. Anticiper les Contrôles</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Effectuez un auto-audit TVA semestriel (cohérence déclarations/compta)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Régularisez rapidement toute erreur détectée (déclaration rectificative)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Formez votre équipe comptable aux règles TVA OTR</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-navy text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Besoin d'un Accompagnement Fiscal TVA au Togo ?
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                INTEGRA PARTNERS vous accompagne dans la gestion de votre fiscalité TVA : diagnostic 
                de conformité, optimisation des déclarations, récupération des crédits de TVA et 
                assistance en cas de contrôle OTR. <strong>Expertise fiscale certifiée</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fr/diagnostic-ims">
                  <Button 
                    variant="gold" 
                    size="lg" 
                    icon={<ChevronRight className="w-5 h-5" />} 
                    iconPosition="right"
                  >
                    Demander un Audit Fiscal
                  </Button>
                </Link>
                <Link href="/fr/togo/creer-une-entreprise/sarl-sarlu">
                  <Button variant="outline" size="lg">
                    Voir Guide Création SARL
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                Forfait audit fiscal TVA : 150 000 FCFA | Accompagnement annuel : à partir de 50 000 FCFA/mois
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl">
          <FAQSection 
            title="Questions Fréquentes sur la TVA au Togo"
            faqs={[
              {
                question: "Quel est le taux de TVA au Togo en 2026 ?",
                answer: `<p>Le taux de TVA standard au Togo est de <strong>18%</strong> depuis 2011 (loi de finances). Ce taux s'applique sur la <strong>valeur hors taxe (HT)</strong> des biens et services vendus sur le territoire togolais.</p>
                <p><strong>Calcul pratique :</strong></p>
                <ul>
                  <li><strong>Prix HT × 18% = TVA collectée</strong></li>
                  <li>Exemple : Prestation 500 000 FCFA HT → TVA = 90 000 FCFA → Prix TTC = 590 000 FCFA</li>
                </ul>
                <p><strong>Taux réduits et exonérations :</strong></p>
                <ul>
                  <li><strong>Taux 0%</strong> : Exportations de biens et services hors Togo</li>
                  <li><strong>Exonéré</strong> : Santé (médicaments essentiels), éducation, produits agricoles de base, certains services financiers</li>
                  <li><strong>Pas de TVA réduite 5,5% ou 10%</strong> comme en France (taux unique 18%)</li>
                </ul>
                <p><strong>Bon à savoir :</strong> La TVA à 18% est collectée pour le compte de l'<strong>OTR (Office Togolais des Recettes)</strong> et déclarée mensuellement via <strong>DIMANA</strong>. <a href="/fr/togo/fiscalite-otr/dimana" style="text-decoration: underline;">Voir guide DIMANA</a>.</p>`
              },
              {
                question: "À partir de quel chiffre d'affaires suis-je assujetti à la TVA au Togo ?",
                answer: `<p>Vous êtes obligatoirement <strong>redevable de la TVA</strong> si votre chiffre d'affaires annuel atteint ou dépasse <strong>60 000 000 FCFA HT</strong> (environ 91 500 €).</p>
                <p><strong>Conditions d'assujettissement :</strong></p>
                <ul>
                  <li><strong>CA annuel ≥ 60M FCFA</strong> : Immatriculation obligatoire à la TVA auprès de l'OTR</li>
                  <li><strong>CA < 60M FCFA</strong> : Pas d'obligation TVA (régime de franchise en base)</li>
                  <li><strong>Assujettissement volontaire</strong> : Possible même si CA < 60M (avantage : déduction TVA achats, crédibilité clients B2B)</li>
                </ul>
                <p><strong>Procédure d'assujettissement :</strong></p>
                <ol>
                  <li>Dépôt formulaire demande assujettissement TVA à l'OTR (service IFU)</li>
                  <li>Présentation documents : RCCM, statuts, dernière déclaration fiscale (IS ou régime synthétique)</li>
                  <li>Attribution <strong>numéro TVA</strong> (généralement = numéro IFU avec mention "Assujetti TVA")</li>
                  <li>Début facturation avec TVA 18% + déclarations mensuelles DIMANA</li>
                </ol>
                <p><strong>Délai :</strong> 3-7 jours ouvrables. <strong>INTEGRA vous accompagne</strong> dans l'assujettissement TVA (gratuit pour clients sous forfait fiscal). <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Nous contacter</a>.</p>`
              },
              {
                question: "Comment déclarer la TVA mensuellement avec DIMANA au Togo ?",
                answer: `<p>La déclaration de TVA se fait <strong>obligatoirement via la plateforme DIMANA</strong> (Déclaration et Impôts Mensuels Automatisés) de l'OTR, <strong>avant le 15 du mois suivant</strong>.</p>
                <p><strong>Procédure complète :</strong></p>
                <ol>
                  <li><strong>Collecter données comptables :</strong> Total CA HT du mois M-1, total achats/charges HT avec factures TVA conformes</li>
                  <li><strong>Calculer TVA collectée :</strong> CA HT × 18% (TVA facturée à vos clients)</li>
                  <li><strong>Calculer TVA déductible :</strong> Somme TVA sur achats professionnels (factures normalisées OTR uniquement)</li>
                  <li><strong>Connexion DIMANA :</strong> <a href="https://dimana.otr.tg" target="_blank" rel="noopener" style="text-decoration: underline;">dimana.otr.tg</a> ou <a href="https://eservices.otr.tg" target="_blank" rel="noopener" style="text-decoration: underline;">eservices.otr.tg</a> avec IFU + mot de passe</li>
                  <li><strong>Saisie rubriques TVA :</strong>
                    <ul>
                      <li>TVA collectée (montant FCFA)</li>
                      <li>TVA déductible (montant FCFA)</li>
                      <li>Crédit TVA mois précédent (si applicable)</li>
                    </ul>
                  </li>
                  <li><strong>Validation :</strong> DIMANA calcule automatiquement <strong>TVA nette à payer</strong> = TVA collectée - TVA déductible - Crédit antérieur</li>
                  <li><strong>Paiement :</strong> En ligne (mobile money, carte) OU bordereau bancaire. <strong>Deadline : 15 du mois</strong></li>
                  <li><strong>Archivage :</strong> Télécharger quittance OTR (preuve paiement), conserver 10 ans selon OHADA</li>
                </ol>
                <p><strong>Sanctions retard :</strong> Majoration 10% + intérêts 1%/mois. <a href="/fr/togo/fiscalite-otr/dimana" style="text-decoration: underline;">Voir détail déclaration DIMANA</a>.</p>`
              },
              {
                question: "Qu'est-ce qu'un crédit de TVA au Togo et comment le récupérer ?",
                answer: `<p>Un <strong>crédit de TVA</strong> se crée lorsque votre <strong>TVA déductible</strong> (TVA payée sur achats) est <strong>supérieure à votre TVA collectée</strong> (TVA facturée aux clients) sur un mois donné.</p>
                <p><strong>Exemple concret :</strong></p>
                <ul>
                  <li>Mois de janvier : CA = 10M FCFA HT → TVA collectée = 1,8M FCFA</li>
                  <li>Achats équipements = 15M FCFA HT → TVA déductible = 2,7M FCFA</li>
                  <li><strong>Crédit TVA = 2,7M - 1,8M = 900 000 FCFA</strong></li>
                </ul>
                <p><strong>Gestion du crédit de TVA :</strong></p>
                <ol>
                  <li><strong>Report automatique :</strong> Le crédit de 900k FCFA apparaît dans DIMANA de février (rubrique "Crédit TVA mois précédent"). Il sera déduit de la TVA à payer en février.</li>
                  <li><strong>Cumul sur plusieurs mois :</strong> Si crédit persiste (investissements lourds), il s'accumule et se reporte indéfiniment via DIMANA.</li>
                  <li><strong>Remboursement par l'OTR :</strong> Possible sous <strong>conditions strictes</strong> :
                    <ul>
                      <li>Exportateurs (taux 0% = crédit structurel)</li>
                      <li>Investissements ≥ 50M FCFA (nouvelles installations, équipements lourds)</li>
                      <li>Crédit ≥ 3 mois consécutifs</li>
                    </ul>
                  </li>
                </ol>
                <p><strong>Procédure remboursement :</strong></p>
                <ol>
                  <li>Demande formelle OTR (courrier + justificatifs : factures, contrats, preuve paiement TVA)</li>
                  <li>Audit fiscal OTR (contrôle déductibilité, conformité factures)</li>
                  <li>Décision OTR : <strong>Délai 6 à 12 mois</strong> (remboursement virement bancaire)</li>
                </ol>
                <p><strong>INTEGRA gère vos crédits TVA :</strong> Optimisation déductions, suivi reports, négociation remboursements OTR. <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Nous solliciter</a>.</p>`
              },
              {
                question: "Quelles factures sont valables pour déduire la TVA au Togo ?",
                answer: `<p>Pour déduire la TVA sur vos achats/charges, les factures doivent impérativement être <strong>conformes aux normes OTR</strong> (factures normalisées). <strong>Facture non conforme = TVA non déductible</strong> (perte sèche 18%).</p>
                <p><strong>Mentions obligatoires facture TVA (OTR) :</strong></p>
                <ol>
                  <li><strong>Numéro IFU du fournisseur</strong> (Identifiant Fiscal Unique, 13 chiffres)</li>
                  <li><strong>Mention "Assujetti à la TVA"</strong> ou numéro TVA fournisseur</li>
                  <li><strong>Numéro de facture unique</strong> (séquentiel : FA-2026-001, FA-2026-002...)</li>
                  <li><strong>Date d'émission</strong></li>
                  <li><strong>Identification complète fournisseur</strong> : Raison sociale, adresse, RCCM</li>
                  <li><strong>Identification complète client</strong> : Nom, adresse, IFU (si assujetti TVA)</li>
                  <li><strong>Désignation précise</strong> biens/services (quantité, prix unitaire HT)</li>
                  <li><strong>Montant HT</strong></li>
                  <li><strong>Taux TVA 18%</strong></li>
                  <li><strong>Montant TVA</strong> (séparé ligne distincte)</li>
                  <li><strong>Montant TTC</strong></li>
                  <li><strong>Signature et cachet fournisseur</strong></li>
                </ol>
                <p><strong>Factures NON déductibles :</strong></p>
                <ul>
                  <li>Factures informelles (reçus simples, tickets caisse sans IFU)</li>
                  <li>Fournisseurs non assujettis TVA (CA < 60M, pas de numéro TVA)</li>
                  <li>Factures sans mention TVA distincte (prix TTC global)</li>
                  <li>Dépenses personnelles non professionnelles (contrôle OTR strict)</li>
                </ul>
                <p><strong>Conservation :</strong> 10 ans minimum (OHADA + Code Général des Impôts Togo). <strong>INTEGRA audite vos factures</strong> pour maximiser TVA déductible légale.</p>`
              },
              {
                question: "Quelles sont les sanctions en cas de fraude ou non-déclaration de TVA ?",
                answer: `<p>La fraude à la TVA est sévèrement sanctionnée au Togo. L'OTR dispose de pouvoirs étendus : contrôles fiscaux, redressements, pénalités financières et poursuites pénales.</p>
                <p><strong>Pénalités fiscales (Code Général des Impôts Togo) :</strong></p>
                <ul>
                  <li><strong>Non-déclaration TVA :</strong> Amende jusqu'à <strong>500 000 FCFA</strong> par mois manquant</li>
                  <li><strong>Retard déclaration/paiement :</strong> Majoration <strong>10%</strong> du montant dû + intérêts <strong>1% par mois</strong></li>
                  <li><strong>Minoration TVA collectée :</strong> Redressement + majoration <strong>40% à 80%</strong> (selon intentionnalité fraude)</li>
                  <li><strong>Déduction TVA indue :</strong> Rejet déduction + majoration <strong>100%</strong> (si factures fictives/non conformes)</li>
                  <li><strong>Défaut facturation TVA :</strong> Régularisation TVA due + majoration <strong>25%</strong></li>
                </ul>
                <p><strong>Sanctions pénales (fraude aggravée) :</strong></p>
                <ul>
                  <li><strong>Prison :</strong> 1 mois à 2 ans (fraude organisée, récidive)</li>
                  <li><strong>Amendes pénales :</strong> 2 à 10 millions FCFA</li>
                  <li><strong>Interdiction gérer entreprise :</strong> 5 ans maximum</li>
                </ul>
                <p><strong>Contrôles OTR :</strong></p>
                <ul>
                  <li>Contrôles sur pièces (vérification comptabilité au siège OTR)</li>
                  <li>Vérifications de comptabilité (audit complet 3 ans rétroactifs)</li>
                  <li>Droit de communication (OTR peut demander documents à vos clients/fournisseurs/banques)</li>
                </ul>
                <p><strong>Protection INTEGRA :</strong> Conformité préventive (déclarations exactes, factures auditées, traçabilité totale) → <strong>0% risque redressement</strong>. En cas de contrôle, nous vous représentons auprès de l'OTR. <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Sécuriser ma conformité TVA</a>.</p>`
              },
              {
                question: "Comment optimiser légalement ma TVA pour réduire mes impôts au Togo ?",
                answer: `<p><strong>5 stratégies légales d'optimisation TVA :</strong></p>
                <ol>
                  <li><strong>Maximiser TVA déductible :</strong>
                    <ul>
                      <li>Exiger factures conformes OTR pour <strong>tous</strong> achats professionnels (même petits montants)</li>
                      <li>Privilégier fournisseurs assujettis TVA (vs auto-entrepreneurs régime franchise = 0 TVA récupérable)</li>
                      <li>Grouper investissements (équipements, véhicules) sur mois à faible CA → Créer crédit TVA reportable</li>
                    </ul>
                  </li>
                  <li><strong>Planification investissements :</strong>
                    <ul>
                      <li>Achats équipements lourds (≥ 50M FCFA) → Générer crédit TVA remboursable OTR</li>
                      <li>Timing : Réaliser investissements en début exercice fiscal (12 mois pour absorber crédit)</li>
                    </ul>
                  </li>
                  <li><strong>Structuration activités :</strong>
                    <ul>
                      <li>Séparer activités exonérées TVA (ex : formation) et taxables (conseil) → Optimisation déductions par activité</li>
                      <li>Prestations à l'export (taux 0%) → Crédit TVA structurel récupérable</li>
                    </ul>
                  </li>
                  <li><strong>Comptabilité rigoureuse :</strong>
                    <ul>
                      <li>Archivage méthodique factures (numérisation, cloud sécurisé)</li>
                      <li>Logiciel comptable connecté DIMANA (automatisation calculs TVA)</li>
                      <li>Rapprochements mensuels (vérifier cohérence comptabilité ↔ DIMANA)</li>
                    </ul>
                  </li>
                  <li><strong>Assujettissement volontaire (si CA < 60M) :</strong>
                    <ul>
                      <li>Déduire TVA achats même si CA < seuil</li>
                      <li>Crédibilité clients B2B (factures TVA = professionnalisme)</li>
                      <li>Préparation croissance (conformité anticipée)</li>
                    </ul>
                  </li>
                </ol>
                <p><strong>Gain potentiel :</strong> 10-20% réduction charge fiscale nette (optimisation légale vs gestion approximative).</p>
                <p><strong>INTEGRA : Audit TVA annuel</strong> (150 000 FCFA) → Identification gisements optimisation + mise en conformité préventive. <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Réserver audit TVA</a>.</p>`
              },
              {
                question: "INTEGRA PARTNERS peut-il gérer ma conformité TVA au Togo ?",
                answer: `<p><strong>Oui, nos forfaits de conformité fiscale incluent la gestion complète TVA :</strong></p>
                <ul>
                  <li>✅ <strong>Assujettissement TVA :</strong> Demande OTR, obtention numéro TVA (inclus gratuitement)</li>
                  <li>✅ <strong>Déclarations mensuelles DIMANA :</strong> Saisie TVA collectée/déductible, validation, paiement en ligne avant 15</li>
                  <li>✅ <strong>Audit factures :</strong> Vérification conformité OTR (IFU, mentions TVA), rejet factures non déductibles avant déclaration</li>
                  <li>✅ <strong>Gestion crédits TVA :</strong> Optimisation reports, demandes remboursement OTR (dossiers investissements lourds)</li>
                  <li>✅ <strong>Veille réglementaire :</strong> Suivi évolutions lois TVA, nouvelles exonérations/taux</li>
                  <li>✅ <strong>Représentation contrôles OTR :</strong> Accompagnement contrôles fiscaux, réponses OTR, négociation redressements</li>
                  <li>✅ <strong>Tableaux de bord :</strong> Suivi mensuel TVA collectée/déductible, évolution crédit, prévisions trésorerie</li>
                </ul>
                <p><strong>Avantages clients INTEGRA :</strong></p>
                <ul>
                  <li>✅ <strong>0% risque pénalités</strong> (déclarations dans les délais, montants exacts, factures auditées)</li>
                  <li>✅ <strong>Optimisation fiscale légale</strong> : Maximisation TVA déductible (gain 10-20% vs gestion interne)</li>
                  <li>✅ <strong>Gain de temps :</strong> 4-6h/mois économisées (traitement comptable + DIMANA externalisé)</li>
                </ul>
                <p><strong>Tarifs :</strong> À partir de <strong>50 000 FCFA/mois</strong> (forfait conformité TVA seule). Inclus dans <strong>forfait fiscal global 75 000 FCFA/mois</strong> (TVA + IS + DIMANA + déclarations sociales). <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Demander devis personnalisé</a>.</p>`
              }
            ]}
            pageUrl="https://integrapartners.com/fr/togo/fiscalite-otr/tva"
          />
        </div>
      </section>
    </div>
  )
}
