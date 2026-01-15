import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Shield,
  Scale,
  Users,
  ChevronRight,
  Target,
  TrendingUp,
  Lock
} from 'lucide-react';

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function PacteAssociesTogoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Breadcrumb paths={[
            { name: 'Togo', url: '/fr/togo' },
            { name: 'Juridique OHADA', url: '/fr/togo/juridique-ohada' },
            { name: 'Pacte d\'Associés', url: '/fr/togo/juridique-ohada/pacte-dassocies' }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1a2642]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B8860B]/10 mb-6">
              <Shield className="w-8 h-8 text-[#B8860B]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pacte d'Associés Togo 2026 :<br className="hidden md:block" />
              Protection, Sortie & Gouvernance OHADA
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Guide complet du <strong>pacte d'associés (shareholders' agreement)</strong> au Togo :
              différence avec statuts, clauses de protection, stratégies de sortie, valorisation des parts,
              résolution de conflits et modèle type commenté. <strong>Sécurisez votre gouvernance d'entreprise</strong>.
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
                  <Lock className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">Confidentiel</p>
                <p className="text-sm text-gray-600">Non publié RCCM</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <Scale className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">15-30 pages</p>
                <p className="text-sm text-gray-600">Longueur moyenne</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <Users className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">2+ associés</p>
                <p className="text-sm text-gray-600">Recommandé dès 2</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <Target className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">7-10 clauses</p>
                <p className="text-sm text-gray-600">Clauses essentielles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* Qu'est-ce qu'un Pacte d'Associés ? */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Qu'est-ce qu'un Pacte d'Associés ?
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p>
                  Le <strong>pacte d'associés</strong> (ou <em>shareholders' agreement</em>) est un <strong>contrat privé et confidentiel</strong> signé
                  entre les associés d'une société, <strong>en complément des statuts</strong>. Il organise les relations entre associés,
                  fixe les règles de gouvernance non publiques, et protège les intérêts de chacun (notamment des minoritaires).
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2642] rounded-xl p-6 text-white">
                  <Lock className="w-8 h-8 text-[#B8860B] mb-4" />
                  <h3 className="text-lg font-bold mb-3">Confidentiel</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Contrairement aux statuts (publics au RCCM), le pacte reste <strong>strictement confidentiel</strong> entre associés.
                    Protège votre stratégie et vos accords sensibles.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <Shield className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold text-[#0A1628] mb-3">Flexible</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Liberté contractuelle totale</strong> : clauses sur-mesure adaptées à votre situation (OHADA n'impose rien).
                    Modifiable par simple avenant signé.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <Scale className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-[#0A1628] mb-3">Opposable</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Force juridique entre signataires</strong>. En cas de non-respect, recours possible en justice
                    (dommages-intérêts, exécution forcée, arbitrage CCJA).
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-900 mb-2">📊 Statistique Clé</h3>
                    <p className="text-yellow-800 text-sm leading-relaxed">
                      <strong>75% des conflits entre associés</strong> (blocage décisions, sortie conflictuelle, désaccord stratégique) auraient pu être
                      évités avec un <strong>pacte d'associés bien rédigé</strong>. C'est une police d'assurance relationnelle indispensable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Différence Statuts vs Pacte */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Différence entre Statuts et Pacte d'Associés
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-[#0A1628] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Critère</th>
                      <th className="px-6 py-4 text-left">Statuts</th>
                      <th className="px-6 py-4 text-left">Pacte d'Associés</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Caractère</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Public</strong> (déposé au RCCM, consultable par tiers)</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Confidentiel</strong> (entre associés uniquement)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Obligatoire ?</td>
                      <td className="px-6 py-4 text-gray-700"><strong>OUI</strong> (condition d'immatriculation RCCM)</td>
                      <td className="px-6 py-4 text-gray-700"><strong>NON</strong> (fortement recommandé dès 2+ associés)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Encadrement légal</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Strict OHADA</strong> (12 clauses obligatoires minimum)</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Liberté totale</strong> (droit commun des contrats)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Modification</td>
                      <td className="px-6 py-4 text-gray-700"><strong>AGE (2/3) + RCCM + Notaire</strong> (lourd, coûteux, public)</td>
                      <td className="px-6 py-4 text-gray-700"><strong>Avenant signé</strong> (simple, rapide, discret)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Portée</td>
                      <td className="px-6 py-4 text-gray-700">Opposable à la société ET aux tiers</td>
                      <td className="px-6 py-4 text-gray-700">Opposable UNIQUEMENT entre signataires</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Contenu</td>
                      <td className="px-6 py-4 text-gray-700">
                        Constitution juridique (capital, objet, gérance, AG, etc.)
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        Gouvernance détaillée, protections, stratégie sortie, confidentialité
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Clauses typiques</td>
                      <td className="px-6 py-4 text-gray-700">
                        Capital, objet social, gérant, AG, répartition bénéfices
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        <strong>Agrément renforcé, Put/Call, anti-dilution, non-concurrence, méthode valorisation, arbitrage</strong>
                      </td>
                    </tr>
                    <tr className="bg-[#B8860B]/10">
                      <td className="px-6 py-4 font-bold text-[#0A1628]">Priorité en cas de conflit</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-blue-700 font-semibold">✓ Statuts priment sur pacte si contradiction</span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-green-700 font-semibold">✓ Complète statuts si compatible</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Règle d'Or : Complémentarité
                </h3>
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong>Statuts = Constitution publique</strong> (clauses légales obligatoires, structure formelle, opposable aux tiers).<br />
                  <strong>Pacte = Règlement intérieur privé</strong> (clauses sensibles, gouvernance détaillée, protections sur-mesure).<br /><br />
                  💡 <strong>Stratégie gagnante :</strong> Statuts minimalistes (obligatoire OHADA) + Pacte exhaustif (tout le reste).
                </p>
              </div>
            </div>

            {/* Pourquoi un Pacte ? */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Pourquoi Signer un Pacte d'Associés au Togo ?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Raison 1 */}
                <div className="bg-white rounded-xl border-l-4 border-green-600 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">1. Protéger les Minoritaires</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Minoritaires à 20-30% = vulnérables face à un majoritaire à 50%+.
                        Le pacte leur donne des <strong>droits de veto</strong> sur décisions stratégiques, droit d'information renforcé,
                        et protection contre la dilution. <strong>Rééquilibre le pouvoir</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Raison 2 */}
                <div className="bg-white rounded-xl border-l-4 border-blue-600 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">2. Sécuriser la Sortie (Exit Strategy)</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Comment sortir si désaccord stratégique, mésentente, ou opportunité externe ?
                        Pacte prévoit <strong>clauses Put (vendre de force), Call (racheter de force), drag-along, tag-along</strong>.
                        Évite les blocages et litiges coûteux.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Raison 3 */}
                <div className="bg-white rounded-xl border-l-4 border-[#B8860B] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-[#B8860B]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">3. Faciliter l'Investissement</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Investisseurs professionnels (fonds, business angels)</strong> exigent TOUJOURS un pacte d'associés avec :
                        clauses anti-dilution, préférence liquidation, représentation au conseil, droit de veto sur budget/recrutements clés.
                        Sans pacte = pas d'investissement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Raison 4 */}
                <div className="bg-white rounded-xl border-l-4 border-purple-600 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Scale className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">4. Prévenir et Résoudre les Conflits</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Pacte = <strong>mode d'emploi des relations entre associés</strong>.
                        Clauses claires sur : prise de décision, répartition tâches, confidentialité, non-concurrence, médiation obligatoire avant justice.
                        <strong>Prévention &gt; guérison</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Raison 5 */}
                <div className="bg-white rounded-xl border-l-4 border-orange-600 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Lock className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">5. Garder la Confidentialité</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Certaines règles sont <strong>trop sensibles pour être publiques</strong> (répartition réelle du pouvoir, accords d'exclusivité,
                        clauses pénales, valorisation cible pour exit). Le pacte reste privé = <strong>protection stratégique</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Raison 6 */}
                <div className="bg-white rounded-xl border-l-4 border-red-600 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">6. Éviter l'Immobilisme (Deadlock)</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Structure 50-50 ou 33-33-34 = <strong>risque de blocage total</strong> (aucune majorité).
                        Pacte prévoit <strong>mécanismes de déblocage</strong> : expert arbitre, achat-vente (shotgun), médiation obligatoire,
                        liquidation ordonnée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10 Clauses Essentielles */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  10 Clauses Essentielles du Pacte d'Associés
                </h2>
              </div>

              <div className="space-y-6">
                {/* Clause 1 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Agrément Renforcé des Cessions</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Rendre <strong>obligatoire l'accord UNANIME</strong> (ou majorité qualifiée 75-80%) pour toute cession de parts à un tiers.
                        Droit de veto des associés existants. <strong>Protège contre l'entrée d'associés indésirables</strong>.
                      </p>
                      <div className="bg-gray-50 rounded p-4 text-sm">
                        <p className="text-gray-600 mb-2"><strong>Exemple de rédaction :</strong></p>
                        <p className="text-gray-700 italic leading-relaxed">
                          "Toute cession de parts sociales, à titre onéreux ou gratuit, au profit d'un tiers à la présente convention,
                          est soumise à l'agrément préalable et unanime de l'ensemble des parties. L'associé cédant devra notifier son intention
                          par lettre recommandée avec accusé de réception. À défaut d'accord unanime dans les 30 jours,
                          la cession sera réputée refusée et les autres associés disposeront d'un droit de préemption proportionnel à leur participation."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 2 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Clause Put (Option de Vente)</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Donne au <strong>minoritaire le droit d'obliger le majoritaire à racheter ses parts</strong> dans certains cas :
                        désaccord stratégique majeur, non-distribution dividendes 3 ans, changement de contrôle, mésentente grave.
                        <strong>Sortie de secours pour le minoritaire</strong>.
                      </p>
                      <div className="bg-blue-50 border-l-2 border-blue-600 p-4 rounded text-sm">
                        <p className="text-blue-900 leading-relaxed">
                          <strong>💡 Prix de rachat :</strong> Prévoir la méthode de valorisation (ex: moyenne actif net comptable 3 derniers exercices,
                          ou expertise indépendante par cabinet OHADA, ou multiple EBITDA sectoriel). Délai de paiement : 6-18 mois échelonné.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 3 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Clause Call (Option d'Achat)</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Donne au <strong>majoritaire le droit d'obliger un minoritaire à vendre ses parts</strong> dans certains cas :
                        manquement grave aux obligations (non-concurrence, confidentialité), blocage répété des décisions, opportunité de vente globale
                        (offre externe rachat 100%). <strong>Sortie forcée du minoritaire toxique</strong>.
                      </p>
                      <div className="bg-yellow-50 border-l-2 border-yellow-500 p-4 rounded text-sm">
                        <p className="text-yellow-800">
                          ⚠️ <strong>Équilibre délicat :</strong> Call trop facile = abus du majoritaire.
                          Recommandation : limiter les cas de Call à des manquements graves objectifs + juste valorisation (pas de prix punitif).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 4 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Drag-Along (Cession Conjointe Forcée)</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Si un acheteur externe propose de racheter <strong>100% de la société</strong> à un prix attractif,
                        le(s) majoritaire(s) peut obliger TOUS les associés à vendre leurs parts aux mêmes conditions.
                        Évite qu'un minoritaire bloque une opportunité de sortie globale.
                      </p>
                      <div className="bg-green-50 border-l-2 border-green-600 p-4 rounded text-sm">
                        <p className="text-green-900">
                          💡 <strong>Protection minoritaires :</strong> Drag-along valable uniquement si :
                          (1) Offre écrite ferme d'achat 100%, (2) Prix ≥ valorisation minimale convenue (ex: 5x EBITDA),
                          (3) Paiement cash ou garanties bancaires, (4) Conditions identiques pour tous (pas de discrimination).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 5 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        5
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Tag-Along (Droit de Sortie Conjointe)</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Si un majoritaire vend ses parts à un tiers, les <strong>minoritaires ont le droit de vendre leurs parts au même acheteur,
                          aux mêmes conditions</strong> (prix, modalités, garanties). Évite qu'un minoritaire reste prisonnier avec un nouvel actionnaire inconnu.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause 6 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        6
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Méthode de Valorisation des Parts</h3>
                      <p className="text-sm text-gray-700 mb-4">
                        Clause <strong>CRITIQUE</strong> : comment valoriser les parts en cas de Put, Call, exclusion, ou succession ?
                        Sans méthode claire = conflit garanti. <strong>Fixer la règle du jeu maintenant</strong> (quand relations sont bonnes).
                      </p>
                      <div className="bg-gray-50 rounded p-4">
                        <h4 className="font-bold text-[#0A1628] mb-3 text-sm">3 Méthodes Courantes :</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-[#0A1628] text-sm">1. Actif Net Comptable (ANC)</p>
                              <p className="text-xs text-gray-600">
                                Moyenne ANC des 2-3 derniers exercices certifiés. <strong>Simple, objectif</strong>, mais ne reflète pas la rentabilité.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-[#0A1628] text-sm">2. Multiple EBITDA</p>
                              <p className="text-xs text-gray-600">
                                Valorisation = [EBITDA moyen 2 derniers exercices] × [Multiple sectoriel 4-7x].
                                <strong>Reflète rentabilité</strong>, mais nécessite EBITDA positif et stable.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-[#0A1628] text-sm">3. Expertise Indépendante</p>
                              <p className="text-xs text-gray-600">
                                Cabinet d'audit reconnu (Big 4, ou cabinet régional OHADA agréé). <strong>Le plus fiable</strong>, mais coûteux (1-3M FCFA).
                                Recommandé si valorisation &gt; 50M FCFA.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 7 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        7
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Clauses Anti-Dilution</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Protègent les associés existants contre une <strong>dilution excessive</strong> en cas d'augmentation de capital.
                        Types : droit de préemption proportionnel (souscrire à hauteur de sa %), clause de ratchet (ajustement du prix si augmentation à prix inférieur).
                      </p>
                      <div className="bg-blue-50 border-l-2 border-blue-600 p-4 rounded text-sm">
                        <p className="text-blue-900">
                          💡 <strong>Cas pratique :</strong> Vous détenez 30%. Augmentation de capital ouvre 20% nouveaux à un investisseur.
                          Sans protection : vous passez à 24%. Avec droit de préemption : vous pouvez souscrire 30% des nouveaux titres pour maintenir 30%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 8 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        8
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Non-Concurrence et Confidentialité</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Non-concurrence :</strong> Interdit aux associés d'exercer une activité concurrente pendant leur participation
                        ET 2-3 ans après leur sortie (périmètre géographique et sectoriel précis).<br />
                        <strong>Confidentialité :</strong> Secret absolu sur données stratégiques (business plan, clients, marges, process, savoir-faire)
                        pendant et après (10 ans post-sortie).
                      </p>
                      <div className="bg-red-50 border-l-2 border-red-600 p-4 rounded text-sm">
                        <p className="text-red-900">
                          ⚠️ <strong>Clause pénale :</strong> Prévoir une pénalité financière dissuasive en cas de violation.
                          Ex: 50% de la valorisation des parts, ou 500 000 - 2 000 000 FCFA + dommages-intérêts + interdiction de concurrence par injonction judiciaire.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clause 9 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        9
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Gouvernance et Prise de Décision</h3>
                      <p className="text-sm text-gray-700 mb-4">
                        Définir les <strong>décisions stratégiques nécessitant accord unanime ou majorité qualifiée</strong> (au-delà des règles statutaires AGO/AGE) :
                      </p>
                      <div className="bg-gray-50 rounded p-4">
                        <ul className="space-y-2">
                          {[
                            'Cession d\'actifs majeurs (&gt; 20% actif total)',
                            'Investissements &gt; seuil (ex: 10M FCFA)',
                            'Emprunts &gt; seuil (ex: 20M FCFA)',
                            'Changement de gérant ou dirigeants clés',
                            'Modification de l\'objet social',
                            'Fusion, acquisition, ou dissolution anticipée',
                            'Modification de la politique de dividendes (réserves vs distribution)',
                            'Recrutement cadres C-level (salaire &gt; 2M/mois)',
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-[#B8860B] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-xs text-gray-600 mt-3">
                        💡 <strong>Droit de veto minoritaires :</strong> Même à 20%, un minoritaire peut bloquer ces décisions si accord unanime requis.
                        Protège contre décisions unilatérales du majoritaire.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clause 10 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold">
                        10
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Médiation et Arbitrage CCJA</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        En cas de litige entre associés : <strong>médiation amiable obligatoire (30-60 jours)</strong> avant tout recours judiciaire.
                        Médiateur : expert OHADA indépendant agréé.<br />
                        Si échec médiation : <strong>arbitrage obligatoire devant la CCJA (Cour Commune de Justice et d'Arbitrage OHADA)</strong> plutôt que tribunaux togolais.
                      </p>
                      <div className="bg-green-50 border-l-2 border-green-600 p-4 rounded text-sm">
                        <p className="text-green-900 leading-relaxed">
                          💡 <strong>Avantages CCJA :</strong> Sentence arbitrale 6-12 mois (vs 3-5 ans justice nationale), confidentialité totale,
                          arbitres experts OHADA, sentence exécutoire dans les 17 États OHADA sans exequatur. <strong>Référence pour litiges commerciaux régionaux</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quand Signer ? */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Quand Signer un Pacte d'Associés ?
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Timing 1 */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-lg font-bold text-green-900">Idéal : À la Création</h3>
                  </div>
                  <p className="text-sm text-green-800 leading-relaxed mb-3">
                    <strong>Meilleur moment :</strong> Signature simultanée avec les statuts, AVANT l'immatriculation RCCM.
                    Relations encore saines, intérêts alignés, négociation sereine. <strong>Prévention maximale</strong>.
                  </p>
                  <p className="text-xs text-green-700">
                    💡 Timing : Statuts signés → Pacte signé le même jour → Dépôt RCCM.
                  </p>
                </div>

                {/* Timing 2 */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-8 h-8 text-blue-600" />
                    <h3 className="text-lg font-bold text-blue-900">Acceptable : Après Création</h3>
                  </div>
                  <p className="text-sm text-blue-800 leading-relaxed mb-3">
                    Vous avez créé sans pacte ? <strong>Pas trop tard</strong> : signez-en un maintenant, surtout si :
                    entrée d'un nouvel associé, levée de fonds, croissance forte, ou premiers désaccords naissants.
                  </p>
                  <p className="text-xs text-blue-700">
                    💡 Trigger : Dès qu'une tension apparaît, réagissez VITE (avant que positions se durcissent).
                  </p>
                </div>

                {/* Timing 3 */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-600 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-8 h-8 text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-900">Tardif : En Conflit</h3>
                  </div>
                  <p className="text-sm text-orange-800 leading-relaxed mb-3">
                    Conflit déjà ouvert = <strong>très difficile de négocier un pacte</strong>. Positions tranchées, méfiance,
                    exigences maximalistes. Nécessite médiation tierce pour débloquer.
                  </p>
                  <p className="text-xs text-orange-700">
                    ⚠️ Si blocage total : contentieux judiciaire inévitable (sauf miracle médiation).
                  </p>
                </div>
              </div>

              <div className="bg-[#B8860B]/10 border-l-4 border-[#B8860B] rounded-xl p-6">
                <h3 className="font-bold text-[#0A1628] mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#B8860B]" />
                  Recommandation INTEGRA
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Signez TOUJOURS un pacte d'associés dès qu'il y a 2+ associés</strong>, même (surtout !) si vous êtes amis ou en famille.
                  Les plus gros conflits viennent de sociétés entre proches (confiance excessive = négligence contractuelle).
                  <strong>Un bon pacte protège l'amitié, pas l'inverse</strong>. Coût : 300-500K FCFA. Coût d'un conflit sans pacte : 5-20M FCFA + 3-5 ans de procédure.
                </p>
              </div>
            </div>

            {/* Erreurs à Éviter */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  7 Erreurs Fatales dans un Pacte d'Associés
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Pas de méthode de valorisation',
                    description: 'Sans formule claire, chacun propose son prix en cas de Put/Call/sortie → blocage garanti. Fixer maintenant (ANC, EBITDA, ou expertise).',
                  },
                  {
                    title: 'Clause Put sans financement réaliste',
                    description: 'Minoritaire exerce son Put, mais majoritaire n\'a pas les moyens de racheter cash → défaut → contentieux. Solution : échelonnement 12-24 mois + garantie bancaire.',
                  },
                  {
                    title: 'Drag-along sans protection prix',
                    description: 'Majoritaire vend à prix bradé et force les minoritaires à suivre. Protection : prix minimum = multiple EBITDA plancher (ex: ≥ 5x), ou valorisation minimale absolue.',
                  },
                  {
                    title: 'Oublier la clause de non-concurrence',
                    description: 'Associé sort, crée société concurrente le lendemain, détourne clients/équipe. Clause 2-3 ans post-sortie + clause pénale 500K-2M FCFA = dissuasion efficace.',
                  },
                  {
                    title: 'Gouvernance floue (pas de liste décisions unanimes)',
                    description: 'Majoritaire prend toutes les décisions seul, minoritaires subissent. Solution : liste exhaustive décisions stratégiques nécessitant accord unanime ou 75%.',
                  },
                  {
                    title: 'Pas de clause de déblocage (deadlock)',
                    description: 'Structure 50-50 sans mécanisme de sortie = paralysie totale si désaccord. Solutions : expert arbitre, shotgun (achat-vente forcé), liquidation ordonnée.',
                  },
                  {
                    title: 'Arbitrage mal rédigé',
                    description: 'Clause "les parties tenteront un arbitrage amiable" = non contraignante → retour justice classique. Rédaction correcte : "Tout litige SERA SOUMIS à l\'arbitrage CCJA, selon règlement CCJA, siège Abidjan".',
                  },
                ].map((error, index) => (
                  <div key={index} className="bg-white rounded-xl border-l-4 border-red-600 p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A1628] mb-2">{error.title}</h3>
                        <p className="text-sm text-gray-700">{error.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
              Besoin d'un Pacte d'Associés sur Mesure au Togo ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              INTEGRA rédige des <strong>pactes d'associés blindés juridiquement</strong> adaptés à votre structure et vos enjeux :
              analyse de gouvernance, identification des risques, rédaction de clauses protectrices (Put/Call, anti-dilution, valorisation, arbitrage),
              et négociation entre associés. <strong>Sécurisez votre aventure entrepreneuriale</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/fr/diagnostic-ims">
                <Button
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4 text-lg"
                >
                  Demander Rédaction Pacte Premium
                </Button>
              </Link>
              <Link href="/fr/togo/juridique-ohada/statuts">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Voir Guide Statuts SARL
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              Tarif forfaitaire pacte d'associés : <span className="text-white font-semibold">350 000 FCFA TTC</span> (analyse + rédaction complète 15-30 pages + 2 réunions négociation).
              Révision pacte existant : <span className="text-white font-semibold">150 000 FCFA TTC</span>.
              Médiation conflit associés : <span className="text-white font-semibold">200 000 FCFA/jour</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
