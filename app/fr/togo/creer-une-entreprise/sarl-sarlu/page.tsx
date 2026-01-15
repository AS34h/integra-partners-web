import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle, Clock, Euro, FileText, AlertCircle, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FAQSection } from '@/components/FAQ'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function GuideCreerSARLTogo() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-700 text-white py-12 md:py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="mb-4">
              <Breadcrumb paths={[
                { name: 'Togo', url: '/fr/togo' },
                { name: 'Créer une Entreprise', url: '/fr/togo/creer-une-entreprise' },
                { name: 'SARL / SARLU', url: '/fr/togo/creer-une-entreprise/sarl-sarlu' }
              ]} />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Créer une SARL ou SARLU au Togo : Guide Complet 2026
            </h1>
            <p className="text-lg text-gray-200">
              Tout ce qu'il faut savoir pour créer votre Société à Responsabilité Limitée au Togo :
              capital minimum, démarches d'immatriculation, coûts et délais réels.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 border-b border-gray-200 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">1M FCFA</div>
              <div className="text-sm text-gray-600">Capital minimum</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">7-10 jours</div>
              <div className="text-sm text-gray-600">Délai d'immatriculation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">150-250K</div>
              <div className="text-sm text-gray-600">Frais totaux (FCFA)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">1 associé min</div>
              <div className="text-sm text-gray-600">Pour SARLU</div>
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
                <Building2 className="w-6 h-6 text-gold" />
                Pourquoi Choisir la SARL au Togo ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La SARL (Société à Responsabilité Limitée) est la forme juridique la plus populaire
                au Togo pour les PME. Elle offre un équilibre optimal entre flexibilité de gestion,
                protection du patrimoine personnel et crédibilité institutionnelle.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                La SARLU (SARL Unipersonnelle) permet à un entrepreneur individuel de bénéficier
                des mêmes avantages avec un seul associé. Conformes au droit OHADA, ces structures
                sont reconnues dans les 17 pays membres.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="font-bold text-lg text-green-900 mb-3">✅ Avantages de la SARL/SARLU</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Responsabilité limitée :</strong> Votre patrimoine personnel est protégé. Vous ne risquez que le montant de votre apport.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Capital accessible :</strong> 1 million FCFA minimum (environ 1 500 €), libérable en plusieurs fois.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Crédibilité commerciale :</strong> Statut reconnu par les banques, partenaires et donneurs d'ordres.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Flexibilité :</strong> Possibilité de transformer en SA si votre activité se développe.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Transmission facilitée :</strong> Parts sociales cessibles avec accord des associés.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Capital */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <Euro className="w-6 h-6 text-gold" />
                Capital Social : Montant et Libération
              </h2>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg text-navy mb-4">Capital Minimum Légal</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 rounded-lg p-3 flex-shrink-0">
                      <div className="font-bold text-2xl text-navy">1M</div>
                      <div className="text-xs text-gray-600">FCFA</div>
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        Le capital minimum d'une SARL ou SARLU au Togo est fixé à <strong>1 million de FCFA</strong>
                        (environ 1 525 €) par l'Acte Uniforme OHADA relatif au droit des sociétés commerciales.
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Ce montant peut sembler symbolique, mais il démontre un engagement minimum des associés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg text-navy mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Modalités de Libération du Capital
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>À la constitution :</strong> Vous devez libérer (verser effectivement)
                    au minimum <strong>20% du capital social</strong>, soit 200 000 FCFA pour le minimum légal.
                  </p>
                  <p>
                    <strong>Solde :</strong> Les 80% restants (800 000 FCFA) peuvent être libérés
                    progressivement dans un délai maximum de <strong>2 ans</strong> à compter de l'immatriculation.
                  </p>
                  <p className="text-sm bg-white border-l-4 border-blue-500 p-3 mt-4">
                    💡 <strong>Conseil :</strong> Pour faciliter l'accès au financement bancaire et
                    rassurer vos partenaires, il est recommandé de libérer 50% à 100% du capital dès la création.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-bold text-lg text-navy mb-4">Capital Recommandé Selon l'Activité</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-700 text-white">
                      <tr>
                        <th className="p-3">Type d'Activité</th>
                        <th className="p-3">Capital Conseillé</th>
                        <th className="p-3">Justification</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b">
                        <td className="p-3">Services (conseil, digital)</td>
                        <td className="p-3 font-semibold">1-3M FCFA</td>
                        <td className="p-3 text-sm">Peu de besoins en investissement</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Commerce (import-export)</td>
                        <td className="p-3 font-semibold">5-10M FCFA</td>
                        <td className="p-3 text-sm">Stock de démarrage, trésorerie BFR</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Industrie légère</td>
                        <td className="p-3 font-semibold">10-30M FCFA</td>
                        <td className="p-3 text-sm">Équipements, local, stocks</td>
                      </tr>
                      <tr>
                        <td className="p-3">BTP, transport</td>
                        <td className="p-3 font-semibold">15-50M FCFA</td>
                        <td className="p-3 text-sm">Matériel, véhicules, cautions marchés</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Démarches */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-gold" />
                Démarches d'Immatriculation au RCCM
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                L'immatriculation au Registre du Commerce et du Crédit Mobilier (RCCM) se fait auprès
                du <strong>Centre de Formalités des Entreprises (CFE)</strong> à Lomé. Depuis 2020,
                le Togo a digitalisé une partie du processus via le guichet unique.
              </p>

              <div className="space-y-6">
                {/* Étape 1 */}
                <div className="bg-white border-l-4 border-gold rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-navy mb-2">Rédaction et Signature des Statuts</h3>
                      <p className="text-gray-700 mb-3">
                        Les statuts doivent être rédigés par écrit et signés par tous les associés.
                        Pour une SARL, ils doivent obligatoirement être <strong>authentifiés par un notaire</strong>.
                      </p>
                      <div className="bg-gray-50 p-4 rounded">
                        <p className="text-sm font-semibold text-navy mb-2">Documents à préparer :</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Pièces d'identité des associés (CNI, passeport)</li>
                          <li>• Certificat de résidence ou quitus fiscal</li>
                          <li>• Projet de statuts (INTEGRA peut vous accompagner)</li>
                        </ul>
                        <p className="text-xs text-gray-600 mt-3">
                          ⏱️ Délai : 2-3 jours | 💰 Coût notaire : 30 000 - 50 000 FCFA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="bg-white border-l-4 border-gold rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-navy mb-2">Dépôt du Capital en Banque</h3>
                      <p className="text-gray-700 mb-3">
                        Ouvrez un compte bancaire professionnel et déposez le capital initial (minimum 20% libéré).
                        La banque vous remettra une <strong>attestation de blocage de capital</strong>.
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                        <p className="text-sm text-gray-700">
                          <strong>Important :</strong> Les fonds restent bloqués jusqu'à l'immatriculation.
                          Ils seront débloqués sur présentation de l'extrait RCCM.
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          ⏱️ Délai : 1-2 jours | 💰 Frais bancaires : 5 000 - 15 000 FCFA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="bg-white border-l-4 border-gold rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-navy mb-2">Dépôt du Dossier au CFE</h3>
                      <p className="text-gray-700 mb-3">
                        Déposez votre dossier complet au Centre de Formalités des Entreprises (CFE)
                        situé à la Chambre de Commerce et d'Industrie du Togo (CCIT) à Lomé.
                      </p>
                      <div className="bg-gray-50 p-4 rounded">
                        <p className="text-sm font-semibold text-navy mb-2">Pièces à fournir :</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Statuts authentifiés en 3 exemplaires originaux</li>
                          <li>• Attestation de dépôt de capital</li>
                          <li>• Déclaration de souscription et de versement (notaire)</li>
                          <li>• Formulaire M0 (déclaration de création)</li>
                          <li>• CNI du gérant + extrait de casier judiciaire</li>
                          <li>• Bail commercial ou attestation domiciliation</li>
                        </ul>
                        <p className="text-xs text-gray-600 mt-3">
                          ⏱️ Délai : 1 jour (dépôt) | 💰 Frais CFE : 25 000 FCFA environ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="bg-white border-l-4 border-gold rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-navy mb-2">Immatriculation RCCM & IFU</h3>
                      <p className="text-gray-700 mb-3">
                        Le CFE transmet votre dossier au greffe du tribunal de commerce pour l'immatriculation
                        au RCCM et à l'Office Togolais des Recettes (OTR) pour l'attribution de votre
                        <strong> Identifiant Fiscal Unique (IFU)</strong>.
                      </p>
                      <div className="bg-green-50 border border-green-200 p-4 rounded">
                        <p className="text-sm font-semibold text-green-900 mb-2">📄 Vous recevrez :</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>Extrait RCCM</strong> (preuve d'immatriculation)</li>
                          <li>• <strong>Numéro IFU</strong> (identifiant fiscal)</li>
                          <li>• Certificat d'immatriculation</li>
                        </ul>
                        <p className="text-xs text-gray-600 mt-3">
                          ⏱️ Délai : 3-5 jours ouvrés | 💰 Frais RCCM : 50 000 - 80 000 FCFA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 5 */}
                <div className="bg-white border-l-4 border-gold rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-navy mb-2">Publication au Journal Officiel</h3>
                      <p className="text-gray-700 mb-3">
                        Vous devez publier un avis de création dans le <strong>Journal Officiel
                          des Annonces Légales (JOAL)</strong> dans les 15 jours suivant l'immatriculation.
                      </p>
                      <p className="text-xs text-gray-600">
                        ⏱️ Délai : 1-2 semaines | 💰 Coût : 15 000 - 25 000 FCFA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coûts */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <Euro className="w-6 h-6 text-gold" />
                Coûts Détaillés de Création
              </h2>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-700 text-white">
                    <tr>
                      <th className="p-4 text-left">Poste de Dépense</th>
                      <th className="p-4 text-right">Montant (FCFA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4">Honoraires notaire (authentification statuts)</td>
                      <td className="p-4 text-right font-semibold">30 000 - 50 000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4">Frais CFE (guichet unique)</td>
                      <td className="p-4 text-right font-semibold">25 000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Immatriculation RCCM</td>
                      <td className="p-4 text-right font-semibold">50 000 - 80 000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4">Publication JOAL</td>
                      <td className="p-4 text-right font-semibold">15 000 - 25 000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Frais bancaires (ouverture compte + attestation)</td>
                      <td className="p-4 text-right font-semibold">10 000 - 20 000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4">Timbres fiscaux et divers</td>
                      <td className="p-4 text-right font-semibold">10 000 - 15 000</td>
                    </tr>
                    <tr className="bg-gold/10">
                      <td className="p-4 font-bold text-navy">TOTAL ESTIMÉ</td>
                      <td className="p-4 text-right font-bold text-xl text-navy">150 000 - 250 000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Budget à prévoir :</strong> Comptez entre 150 000 et 250 000 FCFA
                  pour l'ensemble des formalités, <strong>hors capital social</strong>. Si vous faites
                  appel à un prestataire (avocat, cabinet conseil), ajoutez 100 000 à 300 000 FCFA
                  d'honoraires d'accompagnement.
                </p>
              </div>
            </div>

            {/* Délais */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-gold" />
                Délais Réels d'Immatriculation
              </h2>

              <div className="bg-gradient-to-r from-navy to-navy/90 text-white rounded-lg p-8 mb-6">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold mb-2">7-10 jours</div>
                  <div className="text-lg">Délai moyen total (dossier complet)</div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-semibold mb-1">Scénario Optimiste</div>
                    <div>5-7 jours (dossier parfait, saison normale)</div>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-semibold mb-1">Scénario Moyen</div>
                    <div>7-10 jours (1-2 allers-retours)</div>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-semibold mb-1">Scénario Pessimiste</div>
                    <div>15-30 jours (dossier incomplet, erreurs)</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-lg text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Facteurs de Retard Fréquents
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Statuts non conformes aux exigences OHADA (clauses manquantes)</li>
                  <li>• Documents manquants ou non authentifiés</li>
                  <li>• Nom commercial déjà pris (vérifiez la disponibilité avant)</li>
                  <li>• Périodes de forte affluence (fin d'année fiscale)</li>
                  <li>• Erreurs dans la déclaration de souscription</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-700 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Besoin d'Aide pour Créer Votre SARL au Togo ?
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                INTEGRA PARTNERS vous accompagne de A à Z dans la création de votre entreprise :
                rédaction des statuts, démarches administratives, ouverture de compte bancaire et
                conseils fiscaux. <strong>Délai garanti 7 jours</strong>, dossier clé en main.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fr/diagnostic-ims">
                  <Button
                    variant="gold"
                    size="lg"
                    icon={<ChevronRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    Demander un Accompagnement
                  </Button>
                </Link>
                <Link href="/fr/togo/juridique-ohada/statuts">
                  <Button variant="outline" size="lg">
                    Voir Guide Rédaction Statuts
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                Tarif forfaitaire : 250 000 FCFA TTC (hors frais officiels)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl">
          <FAQSection
            title="Questions Fréquentes sur la SARL/SARLU au Togo"
            faqs={[
              {
                question: "Quel est le capital minimum pour créer une SARL au Togo en 2026 ?",
                answer: `<p>Le capital social minimum d'une SARL au Togo est de <strong>1 000 000 FCFA</strong> (environ 1 525 €) selon l'Acte Uniforme OHADA sur le droit des sociétés commerciales.</p>
                <p><strong>Points clés :</strong></p>
                <ul>
                  <li><strong>Libération :</strong> Au moins <strong>20% du capital</strong> doit être libéré à la constitution (minimum 200 000 FCFA versés en banque)</li>
                  <li><strong>Solde :</strong> Les 80% restants peuvent être libérés progressivement sur <strong>3 ans maximum</strong></li>
                  <li><strong>SARLU (associé unique) :</strong> Même règle, capital minimum 1M FCFA</li>
                  <li><strong>Capital supérieur :</strong> Vous pouvez fixer un capital plus élevé selon vos besoins (ex : 5M, 10M FCFA) pour crédibiliser l'entreprise</li>
                </ul>
                <p><strong>Bon à savoir :</strong> Un capital élevé facilite l'accès au crédit bancaire et rassure les partenaires commerciaux. INTEGRA vous conseille sur le montant optimal selon votre secteur.</p>`
              },
              {
                question: "Combien d'associés faut-il pour une SARL ou SARLU au Togo ?",
                answer: `<p><strong>SARL classique :</strong> De <strong>2 à 50 associés</strong> maximum (personnes physiques ou morales)</p>
                <p><strong>SARLU (Société à Responsabilité Limitée Unipersonnelle) :</strong> <strong>1 seul associé</strong> (personne physique ou morale)</p>
                <p><strong>Différences pratiques :</strong></p>
                <ul>
                  <li><strong>SARL à 2+ associés :</strong> Nécessite assemblée générale annuelle, PV décisions collégiales, répartition dividendes</li>
                  <li><strong>SARLU :</strong> L'associé unique prend toutes décisions seul (pas d'AG), plus simple administrativement</li>
                  <li><strong>Gérant :</strong> Dans les 2 cas, 1 ou plusieurs gérants peuvent être nommés (associés ou tiers)</li>
                </ul>
                <p><strong>Conseil INTEGRA :</strong> Si vous démarrez seul, optez pour la SARLU. Vous pourrez transformer en SARL classique plus tard en ouvrant le capital (cession parts, augmentation capital).</p>
                <p><strong>Au-delà de 50 associés :</strong> Vous devez transformer en <strong>Société Anonyme (SA)</strong> selon OHADA.</p>`
              },
              {
                question: "Quelle est la procédure complète pour créer une SARL au Togo ?",
                answer: `<p><strong>7 étapes clés (délai total : 7 à 15 jours ouvrables) :</strong></p>
                <ol>
                  <li><strong>Réservation dénomination sociale</strong> : Vérification disponibilité nom au CFE (Centre de Formalités des Entreprises). Certificat validité 3 mois. <em>Délai : 24-48h</em></li>
                  <li><strong>Rédaction statuts SARL</strong> : Statuts conformes OHADA (mentions obligatoires : dénomination, siège, objet, capital, durée, gérance). <em>INTEGRA fournit modèles personnalisés</em></li>
                  <li><strong>Blocage capital</strong> : Dépôt minimum 20% capital sur compte bancaire bloqué. Attestation de dépôt fournie par banque. <em>Délai : 1-3 jours</em></li>
                  <li><strong>Enregistrement statuts DGI</strong> : Droits d'enregistrement DGI (Direction Générale des Impôts) = 50 000 à 100 000 FCFA selon capital. <em>Délai : 2-3 jours</em></li>
                  <li><strong>Immatriculation RCCM</strong> : Dépôt dossier au CFE (formulaire M0, statuts enregistrés, pièces identité gérant, attestation bancaire). <em>Délai : 3-5 jours</em></li>
                  <li><strong>Obtention IFU et certificat RCCM</strong> : L'OTR délivre le numéro IFU (Identifiant Fiscal Unique). Le CFE délivre le certificat d'immatriculation RCCM. <em>Délai : 5-7 jours</em></li>
                  <li><strong>Déblocage capital</strong> : Présentation certificat RCCM à la banque → Déblocage fonds + ouverture compte pro définitif</li>
                </ol>
                <p><strong>Coût total :</strong> Entre <strong>400 000 et 600 000 FCFA</strong> (frais officiels + honoraires conseil). <a href="/fr/togo/creer-une-entreprise/rccm-et-immatriculation" style="text-decoration: underline;">Voir détail coûts RCCM</a>.</p>`
              },
              {
                question: "Combien coûte réellement la création d'une SARL au Togo (frais détaillés) ?",
                answer: `<p><strong>Budget global à prévoir : 500 000 à 800 000 FCFA</strong> (hors capital social)</p>
                <p><strong>Détail des coûts :</strong></p>
                <ul>
                  <li><strong>Réservation nom :</strong> 5 000 - 10 000 FCFA (CFE)</li>
                  <li><strong>Enregistrement statuts DGI :</strong> 50 000 - 100 000 FCFA (selon capital, taux 1% capital ou forfait)</li>
                  <li><strong>Immatriculation RCCM :</strong> 65 000 FCFA (frais CFE standard SARL)</li>
                  <li><strong>Obtention IFU :</strong> Inclus dans RCCM (pas de frais séparés)</li>
                  <li><strong>Publications légales :</strong> 50 000 - 80 000 FCFA (Journal Officiel Togo)</li>
                  <li><strong>Notaire (optionnel) :</strong> 100 000 - 200 000 FCFA si acte notarié requis (non obligatoire SARL selon montant capital)</li>
                  <li><strong>Accompagnement INTEGRA PARTNERS :</strong> 250 000 FCFA TTC forfait tout inclus (rédaction statuts + dépôt RCCM + suivi complet)</li>
                </ul>
                <p><strong>Total estimé :</strong></p>
                <ul>
                  <li><strong>Sans INTEGRA :</strong> 420 000 - 550 000 FCFA (démarches autonomes)</li>
                  <li><strong>Avec INTEGRA :</strong> 670 000 - 800 000 FCFA (zéro stress, conformité garantie, délai respecté)</li>
                </ul>
                <p><strong>Bon à savoir :</strong> Ces frais sont <strong>distincts du capital social</strong> (1M FCFA minimum) que vous devez déposer en banque.</p>`
              },
              {
                question: "Quels sont les délais réels pour obtenir le certificat RCCM d'une SARL ?",
                answer: `<p><strong>Délai officiel CFE :</strong> <strong>3 à 5 jours ouvrables</strong> après dépôt dossier complet</p>
                <p><strong>Délai global (réservation nom → certificat RCCM) :</strong> <strong>7 à 15 jours</strong> selon efficacité préparation dossier</p>
                <p><strong>Facteurs d'accélération :</strong></p>
                <ul>
                  <li><strong>Dossier complet et conforme</strong> dès 1er dépôt (aucun document manquant/rejeté)</li>
                  <li><strong>Statuts pré-validés</strong> par conseil juridique (INTEGRA vérifie avant dépôt)</li>
                  <li><strong>Paiement frais en ligne</strong> (CFE e-services : traitement plus rapide que guichet physique)</li>
                  <li><strong>Période creuse</strong> : Éviter fin trimestre/année (pic demandes)</li>
                </ul>
                <p><strong>Facteurs de ralentissement :</strong></p>
                <ul>
                  <li><strong>Dossier incomplet :</strong> +5-10 jours (rejets, demandes pièces complémentaires)</li>
                  <li><strong>Statuts non conformes OHADA :</strong> Retour correction → Nouvel enregistrement DGI</li>
                  <li><strong>Blocages bancaires :</strong> Retard attestation dépôt capital (certaines banques prennent 1 semaine)</li>
                </ul>
                <p><strong>Garantie INTEGRA :</strong> Avec notre forfait création, certificat RCCM obtenu en <strong>7 jours maximum</strong> (suivi quotidien CFE, dossier gold standard). <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Nous contacter</a>.</p>`
              },
              {
                question: "SARL ou SARLU : quel choix pour mon entreprise au Togo ?",
                answer: `<p><strong>Choisissez SARLU (1 associé) si :</strong></p>
                <ul>
                  <li>Vous démarrez <strong>seul(e)</strong> sans co-fondateur immédiat</li>
                  <li>Vous voulez garder <strong>100% contrôle</strong> sur décisions stratégiques</li>
                  <li>Simplicité administrative prioritaire (pas d'AG annuelles, décisions unilatérales)</li>
                  <li>Activité freelance, conseil, e-commerce structuré</li>
                </ul>
                <p><strong>Choisissez SARL (2-50 associés) si :</strong></p>
                <ul>
                  <li>Vous avez <strong>des partenaires/co-fondateurs</strong> investissant ensemble</li>
                  <li>Recherche de <strong>financements externes</strong> (investisseurs veulent entrer capital)</li>
                  <li>Projet à forte croissance nécessitant <strong>ouverture capital</strong> future</li>
                  <li>Famille/équipe souhaitant partager bénéfices (dividendes selon parts)</li>
                </ul>
                <p><strong>Transformation SARLU → SARL :</strong></p>
                <p>Très simple selon OHADA. Procédure : Cession de parts (nouvel associé entre), modification statuts, enregistrement CFE. <strong>Délai : 5-7 jours.</strong></p>
                <p><strong>Conseil stratégique INTEGRA :</strong> En cas de doute, démarrez en SARLU (plus simple). Vous transformerez en SARL classique quand besoin d'ouvrir capital (levée fonds, associés entrants). Nous gérons la transformation complète.</p>`
              },
              {
                question: "Comment rédiger des statuts SARL conformes OHADA au Togo ?",
                answer: `<p>Les statuts SARL doivent obligatoirement contenir <strong>15 mentions légales OHADA</strong> :</p>
                <ol>
                  <li><strong>Forme sociale :</strong> "Société à Responsabilité Limitée (SARL)" ou "SARLU"</li>
                  <li><strong>Dénomination sociale :</strong> Nom commercial de l'entreprise (réservé au CFE)</li>
                  <li><strong>Objet social :</strong> Description précise des activités (ex : "conseil en gestion, audit, formation")</li>
                  <li><strong>Siège social :</strong> Adresse physique complète au Togo (preuve : bail, attestation domiciliation)</li>
                  <li><strong>Durée de la société :</strong> Maximum 99 ans (souvent 99 ans par défaut)</li>
                  <li><strong>Montant du capital social :</strong> Minimum 1M FCFA, répartition entre associés</li>
                  <li><strong>Apports de chaque associé :</strong> Numéraire (espèces), nature (biens), industrie (interdit SARL OHADA)</li>
                  <li><strong>Nombre et valeur des parts sociales :</strong> Parts = capital ÷ nombre parts (ex : 1M FCFA = 1000 parts × 1000 FCFA)</li>
                  <li><strong>Répartition des parts :</strong> Qui détient combien (Associé A : 600 parts 60%, Associé B : 400 parts 40%)</li>
                  <li><strong>Gérance :</strong> Nom du/des gérant(s), pouvoirs, durée mandat</li>
                  <li><strong>Exercice social :</strong> Date début/fin (souvent 1er janvier - 31 décembre)</li>
                  <li><strong>Affectation résultats :</strong> Réserve légale (10% bénéfices jusqu'à 20% capital), dividendes</li>
                  <li><strong>Cession de parts :</strong> Conditions agrément associés (droit de préemption)</li>
                  <li><strong>Dissolution :</strong> Conditions et modalités liquidation</li>
                  <li><strong>Signatures :</strong> Tous associés fondateurs + paraphes pages</li>
                </ol>
                <p><strong>INTEGRA fournit :</strong> Modèles statuts SARL/SARLU personnalisés conformes OHADA + révision juridique avant dépôt CFE. <a href="/fr/togo/juridique-ohada/statuts" style="text-decoration: underline;">Voir guide complet rédaction statuts</a>.</p>`
              },
              {
                question: "INTEGRA PARTNERS peut-il créer ma SARL au Togo de A à Z ?",
                answer: `<p><strong>Oui, notre forfait "Création SARL Clé en Main" inclut :</strong></p>
                <ul>
                  <li>✅ <strong>Réservation dénomination</strong> au CFE (vérification disponibilité, certificat)</li>
                  <li>✅ <strong>Rédaction statuts personnalisés</strong> conformes OHADA (adaptés à votre activité, capital, associés)</li>
                  <li>✅ <strong>Domiciliation commerciale</strong> (si besoin : adresse siège social INTEGRA, bail professionnel)</li>
                  <li>✅ <strong>Coordination bancaire</strong> : Ouverture compte bloqué, attestation dépôt capital</li>
                  <li>✅ <strong>Enregistrement DGI</strong> : Paiement droits, obtention statuts timbrés</li>
                  <li>✅ <strong>Immatriculation RCCM</strong> : Dépôt dossier CFE, suivi quotidien, récupération certificat</li>
                  <li>✅ <strong>Obtention IFU</strong> (numéro fiscal OTR)</li>
                  <li>✅ <strong>Publications légales</strong> (Journal Officiel si requis)</li>
                  <li>✅ <strong>Remise kit entrepreneur</strong> : Certificat RCCM, statuts originaux, registres légaux, K-bis togolais</li>
                </ul>
                <p><strong>Tarif forfaitaire :</strong> <strong>250 000 FCFA TTC</strong> (hors frais officiels CFE/DGI estimés 300-400k FCFA)</p>
                <p><strong>Délai garanti :</strong> <strong>7 jours</strong> ouvrables (dossier complet → certificat RCCM)</p>
                <p><strong>Bonus :</strong> 1 consultation stratégique gratuite (choix régime fiscal, TVA, optimisation IS). <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Démarrer ma SARL avec INTEGRA</a>.</p>`
              }
            ]}
            pageUrl="https://integrapartners.com/fr/togo/creer-une-entreprise/sarl-sarlu"
          />
        </div>
      </section>
    </div>
  )
}
