import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Scale,
  Shield,
  BookOpen,
  ChevronRight,
  XCircle,
  Award
} from 'lucide-react';

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function StatutsSARLTogoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Breadcrumb paths={[
            { name: 'Togo', url: '/fr/togo' },
            { name: 'Juridique OHADA', url: '/fr/togo/juridique-ohada' },
            { name: 'Rédaction Statuts', url: '/fr/togo/juridique-ohada/statuts' }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1a2642]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B8860B]/10 mb-6">
              <Scale className="w-8 h-8 text-[#B8860B]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rédaction Statuts SARL Togo 2026 :<br className="hidden md:block" />
              Guide OHADA Complet & Modèles
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Guide expert pour rédiger des statuts de SARL conformes à l'<strong>Acte Uniforme OHADA 2014</strong> :
              clauses obligatoires, clauses recommandées, pièges juridiques à éviter, différences SARL/SAS et modèles types commentés.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <FileText className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">12 clauses</p>
                <p className="text-sm text-gray-600">Obligatoires OHADA</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <Shield className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">8 clauses</p>
                <p className="text-sm text-gray-600">Recommandées</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <BookOpen className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">15-25 pages</p>
                <p className="text-sm text-gray-600">Longueur moyenne</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <Award className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">Notaire</p>
                <p className="text-sm text-gray-600">Obligatoire SARL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* Pourquoi les Statuts sont Cruciaux */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Pourquoi les Statuts sont-ils Cruciaux ?
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p>
                  Les <strong>statuts</strong> sont la <strong>constitution juridique de votre entreprise</strong>. Ils définissent les règles
                  du jeu entre associés, organisent le fonctionnement de la société, et encadrent les pouvoirs des dirigeants.
                  Des statuts mal rédigés = conflits, blocages, et risques juridiques.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <Shield className="w-8 h-8 text-[#B8860B] mb-4" />
                  <h3 className="text-lg font-bold text-[#0A1628] mb-3">Protection Juridique</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Statuts conformes OHADA = <strong>protection maximale</strong> en cas de litige, contrôle fiscal,
                    ou conflit entre associés. Le juge applique d'abord les statuts.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <Scale className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold text-[#0A1628] mb-3">Prévention Conflits</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>80% des conflits entre associés</strong> viennent de statuts flous ou incomplets.
                    Clauses claires = relations saines et décisions fluides.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-[#0A1628] mb-3">Crédibilité Externe</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Banques, investisseurs et partenaires <strong>scrutent vos statuts</strong>.
                    Statuts professionnels = crédibilité et confiance immédiate.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">⚠️ Risque des Modèles Gratuits en Ligne</h3>
                    <p className="text-red-800 text-sm leading-relaxed mb-3">
                      Les modèles téléchargés sur internet sont souvent <strong>obsolètes (pré-2014), incomplets, ou inadaptés au contexte togolais</strong>.
                      Résultat : rejet RCCM, nullité de clauses, ou conflits futurs coûteux.
                    </p>
                    <p className="text-red-700 text-xs font-semibold">
                      💡 Recommandation : Faites rédiger ou valider vos statuts par un notaire ou avocat spécialisé OHADA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clauses Obligatoires OHADA */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  12 Clauses Obligatoires OHADA pour SARL
                </h2>
              </div>

              <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2642] rounded-xl p-6 text-white mb-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-[#B8860B] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Acte Uniforme OHADA 2014</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      L'<strong>Acte Uniforme relatif au Droit des Sociétés Commerciales</strong> (AU DSC) impose 12 mentions obligatoires.
                      Leur absence = <strong>nullité potentielle des statuts</strong> ou rejet RCCM.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Clause 1 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Dénomination Sociale</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        Nom officiel de la société, suivi obligatoirement de la mention <strong>"SARL"</strong> ou <strong>"Société à Responsabilité Limitée"</strong>.
                      </p>
                      <div className="bg-gray-50 rounded p-3 text-sm">
                        <p className="text-gray-600 mb-1"><strong>Exemple :</strong></p>
                        <p className="font-mono text-[#0A1628]">"INTEGRA CONSEIL SARL"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 2 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Forme Juridique</h3>
                      <p className="text-sm text-gray-700">
                        Préciser explicitement <strong>"Société à Responsabilité Limitée"</strong> (SARL) ou <strong>"Société par Actions Simplifiée"</strong> (SAS).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause 3 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Objet Social</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        Description <strong>précise et exhaustive</strong> des activités de l'entreprise. Toute activité hors objet social est ultra vires (illégale).
                      </p>
                      <div className="bg-yellow-50 border-l-2 border-yellow-500 p-3 rounded text-sm">
                        <p className="text-yellow-800">
                          ⚠️ Trop restrictif = blocage futur. Trop vague = risque fiscal. <strong>Équilibre crucial</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 4 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Siège Social</h3>
                      <p className="text-sm text-gray-700">
                        Adresse complète et précise (rue, quartier, ville, BP si applicable). Doit correspondre au justificatif de domiciliation RCCM.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause 5 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        5
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Durée de la Société</h3>
                      <p className="text-sm text-gray-700">
                        <strong>99 ans maximum</strong> à compter de l'immatriculation RCCM (art. 29 AU DSC).
                        Standard : <strong>99 ans</strong> (renouvellement automatique possible).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause 6 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        6
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Montant du Capital Social</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Minimum 1 000 000 FCFA pour SARL</strong>. Préciser le montant total et la libération (20% minimum à la constitution).
                      </p>
                      <div className="bg-gray-50 rounded p-3 text-sm">
                        <p className="font-mono text-[#0A1628]">
                          "Le capital social est fixé à CINQ MILLIONS (5 000 000) de francs CFA, divisé en CINQUANTE (50) parts sociales de CENT MILLE (100 000) francs CFA chacune,
                          intégralement souscrites et libérées à hauteur de UN MILLION (1 000 000) de francs CFA."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 7 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        7
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Apports de Chaque Associé</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        Tableau détaillé : nom/prénom de chaque associé, nature de l'apport (numéraire, nature, industrie), montant, nombre de parts sociales attribuées.
                      </p>
                      <div className="bg-blue-50 border-l-2 border-blue-600 p-3 rounded text-sm">
                        <p className="text-blue-900">
                          💡 <strong>Apports en nature :</strong> obligatoirement évalués par un <strong>Commissaire aux Apports</strong> (CAA) si valeur &gt; 5M FCFA ou si total apports nature &gt; 50% capital.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 8 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        8
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Gérance (Direction)</h3>
                      <p className="text-sm text-gray-700">
                        Nom, prénoms, nationalité, domicile et pouvoirs du <strong>Gérant</strong> (ou co-gérants).
                        Préciser si gérant associé ou tiers, durée du mandat (illimitée ou limitée), et modalités de révocation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause 9 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        9
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Modalités de Fonctionnement</h3>
                      <p className="text-sm text-gray-700">
                        Règles de convocation, tenue et décisions des <strong>Assemblées Générales</strong> (AG Ordinaire et AG Extraordinaire).
                        Quorum et majorités requis (par défaut OHADA : majorité simple AGO, 2/3 AGE).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause 10 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        10
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Exercice Social (Année Fiscale)</h3>
                      <p className="text-sm text-gray-700">
                        Date de début et de fin de l'exercice comptable. Standard : <strong>1er janvier au 31 décembre</strong>.
                        Peut être différent (ex: 1er juillet-30 juin) pour raisons sectorielles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause 11 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        11
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Répartition des Bénéfices</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        Affectation du résultat net : <strong>réserve légale (10% jusqu'à 20% du capital), réserves facultatives, dividendes</strong>.
                        Modalités de distribution aux associés proportionnellement aux parts.
                      </p>
                      <div className="bg-green-50 border-l-2 border-green-600 p-3 rounded text-sm">
                        <p className="text-green-900">
                          💡 Possibilité de prévoir des <strong>clauses d'affectation prioritaire</strong> (ex: réinvestissement obligatoire 3 premières années).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 12 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        12
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">Dissolution et Liquidation</h3>
                      <p className="text-sm text-gray-700">
                        Causes de dissolution (terme, décision associés, perte 50%+ capital, etc.), modalités de liquidation,
                        désignation du liquidateur, répartition du boni/mali de liquidation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-red-50 border-l-4 border-red-600 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Conséquence de l'Absence d'une Clause Obligatoire</h3>
                    <p className="text-red-800 text-sm">
                      <strong>Nullité des statuts</strong> (art. 243 AU DSC) ou <strong>rejet du dossier RCCM</strong>.
                      Si découvert après immatriculation : exposition à des sanctions fiscales et responsabilité personnelle des dirigeants.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clauses Recommandées */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  8 Clauses Recommandées (Non Obligatoires mais Essentielles)
                </h2>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-blue-900 text-sm leading-relaxed">
                      Ces clauses ne sont pas exigées par l'OHADA mais sont <strong>fortement recommandées</strong> pour sécuriser les relations entre associés,
                      prévenir les conflits, et protéger les intérêts minoritaires. <strong>80% des litiges auraient pu être évités</strong> avec ces clauses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Clause Recommandée 1 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">1. Clause d'Agrément (Cession de Parts)</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Oblige tout associé souhaitant céder ses parts à <strong>obtenir l'agrément préalable de la majorité des associés</strong> (ou des 2/3).
                        Protège contre l'entrée d'associés indésirables.
                      </p>
                      <div className="bg-gray-50 rounded p-3 text-sm">
                        <p className="text-gray-600 mb-1"><strong>Exemple de rédaction :</strong></p>
                        <p className="text-gray-700 italic">
                          "Toute cession de parts sociales à des tiers est soumise à l'agrément préalable des associés représentant au moins les deux tiers (2/3) du capital social,
                          réunis en Assemblée Générale Extraordinaire."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause Recommandée 2 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">2. Clause de Préemption</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Donne aux associés existants un <strong>droit de priorité d'achat</strong> des parts d'un associé sortant, avant qu'elles ne soient proposées à un tiers.
                        Maintient le contrôle entre associés historiques.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause Recommandée 3 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">3. Clause d'Inaliénabilité (Temporaire)</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Interdit la cession de parts pendant une durée déterminée (ex: <strong>3 à 5 ans</strong> après constitution).
                        Assure la stabilité de l'actionnariat dans les premières années critiques.
                      </p>
                      <div className="bg-yellow-50 border-l-2 border-yellow-500 p-3 rounded text-sm">
                        <p className="text-yellow-800">
                          ⚠️ <strong>Durée maximale OHADA : 10 ans</strong>. Au-delà = nullité de la clause.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause Recommandée 4 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">4. Clause d'Exclusion d'un Associé</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Permet d'exclure un associé en cas de <strong>manquement grave</strong> (violation pacte associés, concurrence déloyale, comportement nuisible, etc.).
                        Préciser les motifs légitimes et la procédure (AGE à majorité renforcée).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause Recommandée 5 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">5. Clause de Rachat Obligatoire (Put/Call)</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Put :</strong> Droit pour un minoritaire d'obliger la majorité à racheter ses parts (ex: désaccord stratégique, blocage).<br />
                        <strong>Call :</strong> Droit pour la majorité d'obliger un minoritaire à vendre ses parts (ex: sortie forcée, restructuration).
                      </p>
                      <div className="bg-blue-50 border-l-2 border-blue-600 p-3 rounded text-sm">
                        <p className="text-blue-900">
                          💡 Prévoir la <strong>méthode de valorisation</strong> (actif net comptable, multiple EBITDA, expertise indépendante).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause Recommandée 6 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">6. Clause de Non-Concurrence des Associés</h3>
                      <p className="text-sm text-gray-700">
                        Interdit aux associés d'exercer une <strong>activité concurrente</strong> pendant la durée de leur participation et X années après leur sortie (2-3 ans standard).
                        Protège le savoir-faire et la clientèle.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause Recommandée 7 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">7. Droits des Minoritaires</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Clauses protectrices : <strong>droit de veto sur décisions stratégiques</strong> (ex: cession d'actifs majeurs, changement d'activité, fusion),
                        droit d'information renforcé, représentation au conseil de gérance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause Recommandée 8 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">8. Clause de Médiation/Arbitrage</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Oblige les associés à tenter une <strong>médiation amiable</strong> (30-60 jours) avant tout recours judiciaire.
                        Si échec, soumettre le litige à un <strong>arbitrage CCJA (Cour Commune de Justice et d'Arbitrage OHADA)</strong> plutôt qu'aux tribunaux nationaux (plus rapide, plus expert).
                      </p>
                      <div className="bg-green-50 border-l-2 border-green-600 p-3 rounded text-sm">
                        <p className="text-green-900">
                          💡 <strong>Gain de temps :</strong> Arbitrage CCJA = 6-12 mois vs 3-5 ans en justice togolaise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Erreurs Fréquentes */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  10 Erreurs Fréquentes dans les Statuts
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Objet social trop restrictif',
                    description: 'Limite les activités futures. Solution : Prévoir une clause "et plus généralement toutes opérations commerciales, financières, mobilières ou immobilières se rattachant directement ou indirectement à l\'objet ci-dessus".',
                  },
                  {
                    title: 'Absence de clause d\'agrément',
                    description: 'Permet à un associé de vendre à n\'importe qui sans accord des autres. Conséquence : entrée d\'associés toxiques, blocage, conflits.',
                  },
                  {
                    title: 'Majorités trop élevées (unanimité)',
                    description: 'Exiger l\'unanimité pour toute décision = paralysie assurée. Standard : majorité simple AGO (50%+1), 2/3 AGE. Réserver unanimité aux décisions ultra-stratégiques (cession société, dissolution).',
                  },
                  {
                    title: 'Capital social sous-dimensionné (1M FCFA)',
                    description: 'Capital minimum légal 1M FCFA = manque de crédibilité bancaire. Recommandation : 3-5M minimum pour activité de services, 10-30M pour commerce/industrie.',
                  },
                  {
                    title: 'Pouvoirs du gérant mal définis',
                    description: 'Flou = source de litiges. Préciser les actes soumis à autorisation préalable de l\'AG (ex: emprunt &gt; 10M, caution, aval, investissement &gt; 5M).',
                  },
                  {
                    title: 'Durée du mandat du gérant non précisée',
                    description: 'Silence = mandat illimité (révocation ad nutum difficile). Recommandation : mandat 3-5 ans renouvelable pour équilibrer stabilité et contrôle.',
                  },
                  {
                    title: 'Pas de clause de valorisation des parts',
                    description: 'En cas de cession ou exclusion, absence de méthode = conflit sur le prix. Prévoir : actif net comptable, ou multiple EBITDA, ou expertise indépendante.',
                  },
                  {
                    title: 'Répartition capital déséquilibrée (ex: 95%-5%)',
                    description: 'Minoritaire à 5% = aucun pouvoir, aucune protection. Risque : démotivation, départ, contentieux. Équilibre recommandé : 51%-30%-19% ou 60%-40% (2 associés).',
                  },
                  {
                    title: 'Absence de clause de non-concurrence',
                    description: 'Associés sortants peuvent créer société concurrente immédiatement et détourner clientèle/équipe. Clause 2-3 ans post-sortie = protection essentielle.',
                  },
                  {
                    title: 'Utiliser un modèle pré-2014 (ancienne OHADA)',
                    description: 'Refonte OHADA 2014 = modifications majeures (ex: SARL unipersonnelle possible, suppression Commissaire aux Comptes si &lt; seuils, etc.). Modèle obsolète = risque rejet RCCM.',
                  },
                ].map((error, index) => (
                  <div key={index} className="bg-white rounded-xl border-l-4 border-red-600 p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0">
                        <XCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="font-bold text-[#0A1628] flex-1">{error.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 ml-9">{error.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Différences SARL vs SAS */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Statuts SARL vs SAS : Quelle Différence ?
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-[#0A1628] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Critère</th>
                      <th className="px-6 py-4 text-left">SARL</th>
                      <th className="px-6 py-4 text-left">SAS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Capital social minimum</td>
                      <td className="px-6 py-4 text-gray-700">1 000 000 FCFA</td>
                      <td className="px-6 py-4 text-gray-700">10 000 000 FCFA</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Nombre d'associés</td>
                      <td className="px-6 py-4 text-gray-700">1 à 50 associés max</td>
                      <td className="px-6 py-4 text-gray-700">Minimum 2 actionnaires (pas de max)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Direction</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Gérant(s)</strong> (personne physique obligatoirement)</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Président</strong> (personne physique ou morale)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Flexibilité statutaire</td>
                      <td className="px-6 py-4 text-gray-700">Encadrement OHADA strict</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Très grande liberté</strong> (statuts sur-mesure)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cession de parts/actions</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Agrément obligatoire</strong> par défaut</td>
                      <td className="px-6 py-4 text-gray-700">Libre sauf clause contraire</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Commissaire aux Comptes</td>
                      <td className="px-6 py-4 text-gray-700">Obligatoire si CA &gt; 250M ou effectif &gt; 50</td>
                      <td className="px-6 py-4 text-gray-700">Obligatoire si CA &gt; 250M ou effectif &gt; 50</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Fiscalité</td>
                      <td className="px-6 py-4 text-gray-700">IS (Impôt sur les Sociétés) 27%</td>
                      <td className="px-6 py-4 text-gray-700">IS 27%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Levée de fonds</td>
                      <td className="px-6 py-4 text-gray-700">Difficile (parts sociales peu attractives)</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Facilitée</strong> (actions + clauses investisseurs)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Coût de création</td>
                      <td className="px-6 py-4 text-gray-700"><strong>350-500K FCFA</strong></td>
                      <td className="px-6 py-4 text-gray-700">800K-1.5M FCFA (capital + CAC + notaire)</td>
                    </tr>
                    <tr className="bg-[#B8860B]/10">
                      <td className="px-6 py-4 font-bold text-[#0A1628]">Recommandation</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-green-700 font-semibold">✓ PME familiales, activité locale/régionale</span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-blue-700 font-semibold">✓ Startups, levée de fonds, croissance forte</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Notre Recommandation
                </h3>
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong>SARL :</strong> 90% des PME togolaises. Capital accessible (1M), structure simple, adapté aux activités commerciales/services classiques.<br />
                  <strong>SAS :</strong> Si vous prévoyez une levée de fonds (investisseurs), croissance rapide, ou besoin de statuts très flexibles (clauses investisseurs, actions préférentielles, etc.).
                </p>
              </div>
            </div>

            {/* Révision des Statuts */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Quand et Comment Réviser vos Statuts ?
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p>
                  Les statuts ne sont <strong>pas figés</strong>. Vous pouvez (et devez) les réviser en cas de changement majeur de votre activité,
                  structure ou stratégie. <strong>Modification = Assemblée Générale Extraordinaire (AGE)</strong> + Enregistrement RCCM.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    Cas nécessitant une révision
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Augmentation ou réduction du capital social',
                      'Changement de dénomination sociale',
                      'Modification de l\'objet social (nouvelle activité)',
                      'Transfert du siège social (nouvelle adresse)',
                      'Changement de forme juridique (SARL → SAS)',
                      'Entrée/sortie d\'un associé (si capital change)',
                      'Modification de la répartition du capital',
                      'Changement de gérant ou modalités de gérance',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#B8860B]" />
                    Procédure de modification
                  </h3>
                  <ol className="space-y-3">
                    {[
                      { step: 'Convoquer une AGE', detail: 'Quorum 2/3 du capital, majorité 2/3 des présents' },
                      { step: 'Voter la modification', detail: 'Rédiger PV AGE avec décision précise' },
                      { step: 'Rédiger statuts mis à jour', detail: 'Version consolidée avec modifications' },
                      { step: 'Enregistrer chez notaire', detail: '30-50K FCFA (si changement capital/gérant)' },
                      { step: 'Déposer au RCCM (CFE)', detail: 'Modification RCCM 25-40K FCFA, délai 3-5 jours' },
                      { step: 'Publier au JOAL (si requis)', detail: 'Publicité légale 15-25K FCFA' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-[#B8860B] flex items-center justify-center text-white text-xs font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0A1628]">{item.step}</p>
                          <p className="text-xs text-gray-600">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-yellow-900 mb-2">⏱️ Délai et Coût Total d'une Modification</h3>
                    <p className="text-sm text-yellow-800 mb-2">
                      <strong>Délai :</strong> 1-2 semaines (AGE + notaire + RCCM + JOAL)<br />
                      <strong>Coût :</strong> 80-150K FCFA (notaire 30-50K + RCCM 25-40K + JOAL 15-25K + divers 10-30K)
                    </p>
                    <p className="text-xs text-yellow-700">
                      💡 Astuce : Groupez plusieurs modifications en une seule AGE pour économiser temps et coûts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1a2642]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'une Expertise Juridique pour Vos Statuts ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              INTEGRA vous accompagne dans la <strong>rédaction ou révision de statuts conformes OHADA 2014</strong> :
              analyse de votre situation, rédaction sur-mesure avec clauses protectrices, validation juridique,
              et coordination avec notaire. <strong>Statuts sécurisés et pérennes garantis</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/fr/diagnostic-ims">
                <Button
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4 text-lg"
                >
                  Demander Expertise Juridique
                </Button>
              </Link>
              <Link href="/fr/togo/juridique-ohada/pacte-dassocies">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Voir Guide Pacte d'Associés
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              Tarif forfaitaire statuts SARL : <span className="text-white font-semibold">200 000 FCFA TTC</span> (rédaction complète + validation OHADA + coordination notaire).
              Révision statuts existants : <span className="text-white font-semibold">100 000 FCFA TTC</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
