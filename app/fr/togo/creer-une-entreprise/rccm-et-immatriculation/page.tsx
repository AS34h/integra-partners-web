import { Metadata } from 'next'
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FAQSection } from '@/components/FAQ';
import { HowTo } from '@/components/HowTo';
import {
  FileText,
  CheckCircle,
  Clock,
  Euro,
  Building2,
  AlertCircle,
  ChevronRight,
  CreditCard,
  Shield,
  FileCheck
} from 'lucide-react';

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function RCCMImmatriculationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Breadcrumb paths={[
            { name: 'Togo', url: '/fr/togo' },
            { name: 'Créer une Entreprise', url: '/fr/togo/creer-une-entreprise' },
            { name: 'RCCM & Immatriculation', url: '/fr/togo/creer-une-entreprise/rccm-et-immatriculation' }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1a2642]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B8860B]/10 mb-6">
              <FileText className="w-8 h-8 text-[#B8860B]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              RCCM Togo 2026 : Immatriculation <br className="hidden md:block" />
              Entreprise, IFU & Certificat
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Guide complet pour immatriculer votre entreprise au Registre du Commerce et du Crédit Mobilier (RCCM) du Togo :
              procédure guichet unique CFE, documents requis, délais réels, coûts détaillés et obtention du numéro IFU.
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
                  <Clock className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">3-5 jours</p>
                <p className="text-sm text-gray-600">Délai moyen</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <Euro className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">75-100K</p>
                <p className="text-sm text-gray-600">Frais RCCM + IFU</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <FileCheck className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">8-10 pièces</p>
                <p className="text-sm text-gray-600">Documents requis</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 mb-3">
                  <CreditCard className="w-6 h-6 text-[#B8860B]" />
                </div>
                <p className="text-3xl font-bold text-[#0A1628] mb-1">1 guichet</p>
                <p className="text-sm text-gray-600">CFE unique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* Qu'est-ce que le RCCM ? */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Qu'est-ce que le RCCM au Togo ?
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p>
                  Le <strong>Registre du Commerce et du Crédit Mobilier (RCCM)</strong> est le registre officiel dans lequel toutes les entreprises
                  commerciales du Togo doivent obligatoirement s'immatriculer. C'est la pierre angulaire de l'existence juridique de votre entreprise.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2642] rounded-xl p-6 text-white">
                  <Shield className="w-8 h-8 text-[#B8860B] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Conformité OHADA</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Le RCCM togolais est conforme aux <strong>Actes Uniformes OHADA</strong>, garantissant une reconnaissance dans les 17 États membres
                    et facilitant vos transactions transfrontalières.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
                  <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3">Numéro IFU Automatique</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    L'immatriculation au RCCM déclenche <strong>automatiquement l'attribution de votre Identifiant Fiscal Unique (IFU)</strong>,
                    nécessaire pour toutes vos opérations fiscales avec l'OTR.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Ce que contient votre certificat RCCM
                </h3>
                <ul className="space-y-3">
                  {[
                    'Numéro RCCM unique (format : TG-LOM-2026-X-XXXXX)',
                    'Numéro IFU (Identifiant Fiscal Unique)',
                    'Dénomination sociale et sigle éventuel',
                    'Forme juridique (SARL, SA, SAS, etc.)',
                    'Capital social et montant libéré',
                    'Siège social et adresse',
                    'Activité principale et code NAF',
                    'Nom du gérant ou représentant légal',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Procédure Guichet Unique CFE */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Procédure d'Immatriculation au CFE (Guichet Unique)
                </h2>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-900 mb-2">Guichet Unique depuis 2014</h3>
                    <p className="text-green-800 text-sm leading-relaxed">
                      Depuis la réforme de 2014, le Togo dispose d'un <strong>Centre de Formalités des Entreprises (CFE)</strong> qui centralise
                      toutes les démarches : RCCM, IFU, CNSS, INAM. <strong>Un seul dépôt de dossier suffit</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p>
                  Le CFE est situé à <strong>Lomé, Quartier Administratif (près de l'Assemblée Nationale)</strong>.
                  Horaires : Lundi-Vendredi 7h30-12h30 et 14h-17h.
                </p>
              </div>

              {/* Étapes */}
              <div className="space-y-6">
                {/* Étape 1 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 relative">
                  <div className="absolute -left-3 top-6 w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                      Préparer le Dossier Complet
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Rassemblez tous les documents listés dans la section suivante. <strong>Un dossier incomplet sera rejeté</strong> et
                      entraînera un retard de 3-7 jours supplémentaires.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Durée : 1-2 jours de préparation</span>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 relative">
                  <div className="absolute -left-3 top-6 w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                      Dépôt au CFE et Paiement des Frais
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Rendez-vous au guichet du CFE avec votre dossier. Un agent vérifiera la complétude et vous remettra un <strong>bordereau de paiement</strong>
                      pour régler les frais (environ <strong>75-100K FCFA</strong>).
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-yellow-800">
                          <strong>Modes de paiement acceptés :</strong> Espèces (FCFA uniquement), virement bancaire vers le compte du CFE,
                          ou Mobile Money (TMoney, Flooz) dans certains cas.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
                      <Clock className="w-4 h-4" />
                      <span>Durée : 1 journée (attente au guichet 1-3h)</span>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 relative">
                  <div className="absolute -left-3 top-6 w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold shadow-lg">
                    3
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                      Instruction et Validation du Dossier
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Le CFE transmet votre dossier aux services compétents (RCCM, OTR, CNSS, INAM) pour instruction.
                      <strong> Délai légal : 72 heures</strong>, mais en pratique comptez <strong>3-5 jours ouvrables</strong>.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Durée : 3-5 jours ouvrables</span>
                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 relative">
                  <div className="absolute -left-3 top-6 w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center text-white font-bold shadow-lg">
                    4
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                      Retrait des Documents Officiels
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Une fois l'instruction terminée, vous recevez un SMS/appel du CFE. Revenez retirer vos documents officiels contre présentation
                      du reçu de dépôt.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                      <h4 className="font-bold text-green-900 mb-2">Documents remis :</h4>
                      <ul className="space-y-2">
                        {[
                          'Certificat d\'immatriculation RCCM original',
                          'Attestation d\'attribution IFU (OTR)',
                          'Attestation d\'affiliation CNSS',
                          'Attestation d\'affiliation INAM',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-green-800">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
                      <Clock className="w-4 h-4" />
                      <span>Durée : Immédiat (retrait sur place)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Requis */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Documents Requis pour l'Immatriculation RCCM
                </h2>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">Liste exhaustive - Aucun document ne peut manquer</h3>
                    <p className="text-red-800 text-sm">
                      Le CFE est très strict sur la complétude du dossier. <strong>Préparez tous les documents en 3 exemplaires originaux + 3 copies certifiées conformes</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Document 1 */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#B8860B]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">1. Statuts de la société signés et enregistrés</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        Acte notarié pour les SARL/SA (obligatoire OHADA). Pour les EI/SUARL, acte sous seing privé accepté mais notaire recommandé.
                      </p>
                      <p className="text-xs text-gray-600">
                        💡 <Link href="/fr/togo/juridique-ohada/statuts" className="text-[#B8860B] hover:underline">Voir notre guide de rédaction des statuts</Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document 2 */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#B8860B]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">2. Certificat de dépôt de capital bancaire</h3>
                      <p className="text-sm text-gray-700">
                        Attestation de la banque certifiant le dépôt d'au moins 20% du capital social (1M FCFA minimum pour SARL).
                        <strong> Banque togolaise obligatoire</strong> (BOAD, Ecobank, UTB, BTCI, etc.).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document 3 */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#B8860B]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">3. Procès-verbal de nomination du gérant</h3>
                      <p className="text-sm text-gray-700">
                        PV de l'Assemblée Générale Constitutive (AGC) nommant le gérant ou directeur général, avec signature de tous les associés.
                        Peut être inclus dans les statuts ou être un document séparé.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document 4 */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#B8860B]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">4. Déclaration de régularité et de conformité</h3>
                      <p className="text-sm text-gray-700">
                        Formulaire CFE déclarant que les statuts sont conformes à l'OHADA et que le capital est régulièrement déposé.
                        Signé par le gérant et un notaire/avocat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document 5 */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#B8860B]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">5. Justificatif de siège social</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Option A (propriétaire) :</strong> Titre de propriété + Quittance taxe foncière récente (3 mois)<br />
                        <strong>Option B (locataire) :</strong> Bail commercial enregistré aux Impôts + Autorisation écrite du propriétaire pour domiciliation
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document 6 */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#B8860B]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">6. Pièces d'identité des dirigeants et associés</h3>
                      <p className="text-sm text-gray-700">
                        <strong>Togolais :</strong> CNI ou Passeport en cours de validité<br />
                        <strong>Étrangers :</strong> Passeport + Carte de séjour ou visa long séjour + Extrait casier judiciaire (moins de 3 mois)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document 7 */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#B8860B]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">7. Formulaire M0 (Déclaration de création)</h3>
                      <p className="text-sm text-gray-700">
                        Formulaire CFE pré-rempli avec les informations de l'entreprise (dénomination, capital, activité, adresse, gérant).
                        <strong> Disponible au CFE ou téléchargeable</strong> sur le site du Ministère du Commerce.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document 8 */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#B8860B]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1628] mb-2">8. Certificat de réservation de dénomination (optionnel mais recommandé)</h3>
                      <p className="text-sm text-gray-700">
                        Preuve que le nom de votre société n'est pas déjà pris. Obtenu gratuitement au CFE en 1-2 jours.
                        <strong> Évite les rejets pour homonymie</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mt-8">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Checklist finale avant dépôt
                </h3>
                <ul className="space-y-2">
                  {[
                    'Tous les documents sont en 3 exemplaires originaux + 3 copies certifiées',
                    'Les statuts sont signés par tous les associés ET enregistrés chez un notaire',
                    'Le certificat de dépôt de capital mentionne au moins 200 000 FCFA (20% de 1M)',
                    'Le justificatif de siège est récent (moins de 3 mois)',
                    'Les pièces d\'identité sont en cours de validité',
                    'Le formulaire M0 est complété sans ratures ni erreurs',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-blue-900">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coûts Détaillés */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Coûts de l'Immatriculation RCCM au Togo
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-[#0A1628] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Poste de dépense</th>
                      <th className="px-6 py-4 text-center">Montant (FCFA)</th>
                      <th className="px-6 py-4 text-left">Détails</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Frais RCCM</td>
                      <td className="px-6 py-4 text-center font-bold text-[#0A1628]">50 000</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Immatriculation au registre</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Frais IFU (OTR)</td>
                      <td className="px-6 py-4 text-center font-bold text-[#0A1628]">15 000</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Attribution numéro fiscal</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Affiliation CNSS</td>
                      <td className="px-6 py-4 text-center font-bold text-[#0A1628]">5 000</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Sécurité sociale</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Affiliation INAM</td>
                      <td className="px-6 py-4 text-center font-bold text-[#0A1628]">5 000</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Assurance maladie</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Frais CFE (guichet unique)</td>
                      <td className="px-6 py-4 text-center font-bold text-[#0A1628]">10 000</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Service guichet unique</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Timbres fiscaux</td>
                      <td className="px-6 py-4 text-center font-bold text-[#0A1628]">8 000</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Divers documents officiels</td>
                    </tr>
                    <tr className="bg-[#B8860B]/10 font-bold">
                      <td className="px-6 py-4 text-[#0A1628]">TOTAL FRAIS OFFICIELS</td>
                      <td className="px-6 py-4 text-center text-xl text-[#B8860B]">93 000</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Payable au CFE</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong>💡 Budget à prévoir :</strong> Comptez environ <strong>100 000 FCFA</strong> pour l'immatriculation RCCM + IFU.
                  Ce montant n'inclut PAS les frais de notaire (30-50K) ni le dépôt de capital bancaire (200K minimum pour SARL).
                </p>
              </div>
            </div>

            {/* Délais Réels */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Délais Réels d'Obtention du RCCM
                </h2>
              </div>

              <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2642] rounded-xl p-8 text-white mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-12 h-12 text-[#B8860B]" />
                  <div>
                    <p className="text-gray-300 text-sm">Délai moyen constaté</p>
                    <p className="text-4xl font-bold">3-5 jours ouvrables</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  À compter du dépôt du dossier complet au CFE jusqu'au retrait des documents officiels (RCCM + IFU).
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="font-bold text-green-900">Optimiste</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-700 mb-2">2-3 jours</p>
                  <p className="text-sm text-green-800">
                    Dossier parfait, période calme, aucun contrôle supplémentaire.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-blue-900">Moyen</h3>
                  </div>
                  <p className="text-3xl font-bold text-blue-700 mb-2">3-5 jours</p>
                  <p className="text-sm text-blue-800">
                    Scénario le plus fréquent, dossier standard bien préparé.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-6 h-6 text-orange-600" />
                    <h3 className="font-bold text-orange-900">Pessimiste</h3>
                  </div>
                  <p className="text-3xl font-bold text-orange-700 mb-2">7-14 jours</p>
                  <p className="text-sm text-orange-800">
                    Dossier incomplet, pic d'activité, ou contrôles supplémentaires.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Facteurs de retard fréquents
                </h3>
                <ul className="space-y-3">
                  {[
                    'Dossier incomplet (document manquant ou non conforme)',
                    'Statuts non conformes aux standards OHADA (clause irrégulière)',
                    'Justificatif de siège social non valide ou périmé',
                    'Périodes de forte affluence (début d\'année, fin de trimestre)',
                    'Contrôles OTR supplémentaires sur l\'activité déclarée',
                    'Homonymie avec une société existante (même nom)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-red-900 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Numéro IFU */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  Le Numéro IFU (Identifiant Fiscal Unique)
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p>
                  L'<strong>IFU</strong> est votre identifiant fiscal unique attribué automatiquement par l'Office Togolais des Recettes (OTR)
                  lors de votre immatriculation RCCM. C'est le numéro que vous utiliserez pour <strong>toutes vos déclarations fiscales</strong>
                  (TVA, IS, IR, patente, etc.).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#B8860B]" />
                    Format du numéro IFU
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-center text-lg mb-4">
                    <span className="text-[#0A1628] font-bold">01234567890123</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    L'IFU est un numéro à <strong>14 chiffres</strong> unique et définitif. Il ne change jamais, même en cas de modification
                    de votre activité, adresse, ou forme juridique.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Utilisations de l'IFU
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Déclarations fiscales mensuelles (TVA, IR)',
                      'Facturation clients (obligatoire sur factures)',
                      'Déclarations annuelles (IS, BIC, patente)',
                      'Opérations bancaires professionnelles',
                      'Appels d\'offres et marchés publics',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-yellow-900 mb-2">Vérification de la validité de votre IFU</h3>
                    <p className="text-sm text-yellow-800 mb-3">
                      Vous pouvez vérifier la validité de votre IFU sur la plateforme <strong>e-Tax OTR</strong> :
                      <a href="https://etax.otr.tg" target="_blank" rel="noopener noreferrer" className="text-[#B8860B] hover:underline ml-1">
                        etax.otr.tg
                      </a>
                    </p>
                    <p className="text-xs text-yellow-700">
                      💡 Important : Votre IFU doit être actif et en règle pour pouvoir émettre des factures valides.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Erreurs à Éviter */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#B8860B] rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#0A1628]">
                  10 Erreurs à Éviter lors de l'Immatriculation RCCM
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Ne pas vérifier la disponibilité du nom',
                    description: 'Déposez un dossier avec un nom déjà pris → rejet automatique et perte de temps. Faites une recherche d\'antériorité au CFE (gratuit).',
                  },
                  {
                    title: 'Statuts non conformes à l\'OHADA',
                    description: 'Utiliser un modèle obsolète ou incomplet. Les statuts doivent respecter l\'Acte Uniforme OHADA 2014. Faites-vous accompagner par un notaire ou avocat.',
                  },
                  {
                    title: 'Capital social insuffisant',
                    description: 'Déposer moins de 200 000 FCFA (20% de 1M minimum pour SARL). Le certificat bancaire doit mentionner au moins 20% du capital statutaire.',
                  },
                  {
                    title: 'Justificatif de siège non valide',
                    description: 'Utiliser un bail non enregistré ou sans autorisation de domiciliation. Le propriétaire doit autoriser explicitement la domiciliation commerciale.',
                  },
                  {
                    title: 'Documents non certifiés conformes',
                    description: 'Fournir des photocopies simples au lieu de copies certifiées. Le CFE exige 3 exemplaires originaux + 3 copies certifiées conformes.',
                  },
                  {
                    title: 'Oublier les timbres fiscaux',
                    description: 'Ne pas acheter les timbres nécessaires (8 000 FCFA). Achetez-les directement au CFE avant le dépôt du dossier.',
                  },
                  {
                    title: 'Formulaire M0 incomplet ou avec ratures',
                    description: 'Le formulaire doit être rempli au stylo bleu ou noir, sans ratures. En cas d\'erreur, recommencez sur un nouveau formulaire.',
                  },
                  {
                    title: 'Pièces d\'identité périmées',
                    description: 'CNI ou passeport expiré = rejet. Vérifiez la validité de toutes les pièces d\'identité (dirigeants et associés) avant le dépôt.',
                  },
                  {
                    title: 'Ne pas prévoir de budget suffisant',
                    description: 'Budget total création SARL : ~400-500K FCFA (notaire 30-50K + capital 200K + CFE 100K + divers 50-100K). Prévoyez large.',
                  },
                  {
                    title: 'Déposer le dossier en période d\'affluence',
                    description: 'Évitez janvier-février (déclarations annuelles) et fin de trimestre. Les délais peuvent doubler. Privilégiez mars-mai ou septembre-novembre.',
                  },
                ].map((error, index) => (
                  <div key={index} className="bg-white rounded-xl border-l-4 border-red-600 p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-[#0A1628] flex-1">{error.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 ml-11">{error.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Procédure HowTo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <HowTo
              name="Comment immatriculer une entreprise au RCCM Togo"
              description="Procédure complète d'immatriculation au Registre du Commerce et du Crédit Mobilier au Centre de Formalités des Entreprises (CFE) Togo en 7 étapes"
              totalTime="PT7D"
              pageUrl="https://integrapartners.com/fr/togo/creer-une-entreprise/rccm-et-immatriculation"
              steps={[
                {
                  position: 1,
                  name: "Réserver la dénomination sociale",
                  text: "Vérifier la disponibilité du nom de votre entreprise sur la plateforme CFE ou au guichet physique. Obtenir le certificat de réservation (validité 3 mois).",
                  url: "https://integrapartners.com/fr/togo/creer-une-entreprise/rccm-et-immatriculation#etape-1"
                },
                {
                  position: 2,
                  name: "Rédiger et faire enregistrer les statuts",
                  text: "Rédaction des statuts conformes OHADA avec toutes les mentions obligatoires (dénomination, siège, objet, capital, durée, gérance). Enregistrement à la DGI avec paiement des droits d'enregistrement (50 000 - 100 000 FCFA selon le capital).",
                  url: "https://integrapartners.com/fr/togo/creer-une-entreprise/rccm-et-immatriculation#etape-2"
                },
                {
                  position: 3,
                  name: "Bloquer le capital social en banque",
                  text: "Déposer le capital minimum (1M FCFA pour SARL, soit au moins 20% libéré) sur un compte bloqué. Obtenir l'attestation de blocage bancaire qui sera jointe au dossier CFE.",
                  url: "https://integrapartners.com/fr/togo/creer-une-entreprise/rccm-et-immatriculation#etape-3"
                },
                {
                  position: 4,
                  name: "Déposer le dossier au CFE",
                  text: "Dépôt des formulaires M0 + statuts enregistrés + attestations bancaires + pièces d'identité du gérant. Paiement des frais CFE (environ 65 000 FCFA). Dépôt en ligne sur e-CFE ou guichet physique.",
                  url: "https://integrapartners.com/fr/togo/creer-une-entreprise/rccm-et-immatriculation#etape-4"
                },
                {
                  position: 5,
                  name: "Obtenir le numéro IFU",
                  text: "L'OTR (Office Togolais des Recettes) attribue automatiquement le numéro IFU (Identifiant Fiscal Unique) lors du traitement de l'immatriculation RCCM. Délai d'obtention : 5-7 jours.",
                  url: "https://integrapartners.com/fr/togo/creer-une-entreprise/rccm-et-immatriculation#etape-5"
                },
                {
                  position: 6,
                  name: "Retirer le certificat RCCM",
                  text: "Récupération du certificat d'immatriculation RCCM au CFE (original + copies certifiées conformes). Ce document est l'équivalent du K-bis français et prouve l'existence légale de votre entreprise.",
                  url: "https://integrapartners.com/fr/togo/creer-une-entreprise/rccm-et-immatriculation#etape-6"
                },
                {
                  position: 7,
                  name: "Déblocage du capital et ouverture compte professionnel",
                  text: "Présenter le certificat RCCM à votre banque pour débloquer les fonds du capital social. Ouvrir le compte bancaire professionnel définitif pour les opérations de l'entreprise.",
                  url: "https://integrapartners.com/fr/togo/creer-une-entreprise/rccm-et-immatriculation#etape-7"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1a2642]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'Aide pour Votre Immatriculation RCCM au Togo ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              INTEGRA vous accompagne de A à Z dans vos démarches d'immatriculation RCCM :
              <strong className="text-white"> constitution du dossier, dépôt au CFE, suivi en temps réel et retrait des documents officiels</strong>.
              Délai garanti <strong className="text-[#B8860B]">3-5 jours</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/fr/diagnostic-ims">
                <Button
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4 text-lg"
                >
                  Demander Accompagnement RCCM
                </Button>
              </Link>
              <Link href="/fr/togo/creer-une-entreprise/sarl-sarlu">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Voir Guide SARL Complet
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              Tarif forfaitaire : <span className="text-white font-semibold">150 000 FCFA TTC</span> (hors frais officiels CFE).
              Inclut : vérification dossier, dépôt CFE, suivi quotidien, retrait documents.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl px-6">
          <FAQSection
            title="Questions Fréquentes sur le RCCM et l'Immatriculation au Togo"
            faqs={[
              {
                question: "Qu'est-ce que le RCCM au Togo et pourquoi est-il obligatoire ?",
                answer: `<p>Le <strong>RCCM (Registre du Commerce et du Crédit Mobilier)</strong> est le registre officiel dans lequel doivent s'immatriculer <strong>toutes les entreprises commerciales</strong> au Togo, conformément à l'Acte Uniforme OHADA relatif au droit commercial général.</p>
                <p><strong>Qui doit s'immatriculer au RCCM ?</strong></p>
                <ul>
                  <li><strong>Personnes morales :</strong> SARL, SARLU, SA, SAS, SNC, sociétés coopératives</li>
                  <li><strong>Personnes physiques :</strong> Commerçants, artisans, professions libérales réglementées (si CA ≥ seuil légal)</li>
                  <li><strong>Succursales étrangères :</strong> Filiales sociétés étrangères opérant au Togo</li>
                </ul>
                <p><strong>Pourquoi obligatoire ?</strong></p>
                <ul>
                  <li>✅ <strong>Personnalité juridique :</strong> La société n'existe légalement qu'après immatriculation RCCM (capacité contracter, ouvrir compte bancaire, embaucher)</li>
                  <li>✅ <strong>Opposabilité aux tiers :</strong> Statuts, gérants, capital social = informations publiques consultables</li>
                  <li>✅ <strong>Numéro IFU automatique :</strong> Identifiant fiscal OTR attribué lors immatriculation RCCM</li>
                  <li>✅ <strong>Accès marchés publics :</strong> RCCM requis pour répondre appels d'offres</li>
                </ul>
                <p><strong>Sanction défaut immatriculation :</strong> Activité commerciale sans RCCM = infraction pénale (amende 500 000 à 2M FCFA + fermeture administrative). <a href="/fr/togo/creer-une-entreprise/sarl-sarlu" style="text-decoration: underline;">Voir guide création SARL</a>.</p>`
              },
              {
                question: "Combien coûte réellement l'immatriculation RCCM au Togo (tous frais inclus) ?",
                answer: `<p><strong>Budget total à prévoir : 400 000 à 600 000 FCFA</strong> (hors capital social à déposer en banque)</p>
                <p><strong>Détail des coûts officiels (CFE + DGI) :</strong></p>
                <ul>
                  <li><strong>Réservation dénomination sociale :</strong> 5 000 - 10 000 FCFA (vérification disponibilité nom au CFE)</li>
                  <li><strong>Enregistrement statuts DGI :</strong> 50 000 - 100 000 FCFA (droits d'enregistrement, taux 1% capital social ou forfait selon type société)</li>
                  <li><strong>Frais immatriculation CFE :</strong> 65 000 FCFA (tarif standard SARL/SARLU au Centre de Formalités des Entreprises)</li>
                  <li><strong>Attribution IFU :</strong> Gratuit (inclus dans processus RCCM, délivré automatiquement par OTR)</li>
                  <li><strong>Publications légales :</strong> 50 000 - 80 000 FCFA (avis création au Journal Officiel Togo, si requis selon forme sociale)</li>
                  <li><strong>Copies certifiées RCCM :</strong> 5 000 FCFA par extrait (prévoir 3-5 exemplaires pour banques/partenaires)</li>
                </ul>
                <p><strong>Frais bancaires :</strong></p>
                <ul>
                  <li><strong>Attestation blocage capital :</strong> 10 000 - 25 000 FCFA (document bancaire prouvant dépôt 20% capital minimum)</li>
                  <li><strong>Ouverture compte professionnel :</strong> 15 000 - 50 000 FCFA (frais dossier + dotation compte selon banque)</li>
                </ul>
                <p><strong>Honoraires professionnels (optionnels) :</strong></p>
                <ul>
                  <li><strong>Notaire :</strong> 100 000 - 200 000 FCFA (acte notarié statuts, non obligatoire SARL capital < 10M FCFA)</li>
                  <li><strong>INTEGRA PARTNERS :</strong> 150 000 - 250 000 FCFA TTC (forfait accompagnement complet : rédaction statuts, dépôt CFE, suivi quotidien, retrait certificat)</li>
                </ul>
                <p><strong>Total estimé :</strong></p>
                <ul>
                  <li><strong>Démarches autonomes :</strong> 420 000 - 550 000 FCFA</li>
                  <li><strong>Avec accompagnement INTEGRA :</strong> 670 000 - 800 000 FCFA (conformité garantie, certificat obtenu 7 jours max)</li>
                </ul>`
              },
              {
                question: "Quels documents sont requis pour l'immatriculation RCCM au Togo ?",
                answer: `<p><strong>Dossier complet à déposer au CFE (Centre de Formalités des Entreprises) :</strong></p>
                <p><strong>1. Documents de la société :</strong></p>
                <ul>
                  <li><strong>Statuts en 4 exemplaires originaux</strong> (signés, paraphés chaque page par tous associés, <strong>enregistrés à la DGI</strong> avec timbre fiscal)</li>
                  <li><strong>Certificat de réservation dénomination</strong> (validité 3 mois, délivré CFE après vérification disponibilité nom)</li>
                  <li><strong>Procès-verbal Assemblée Générale Constitutive</strong> (désignation gérant, approbation statuts, constatation souscription capital)</li>
                  <li><strong>Attestation de blocage du capital social</strong> (banque certifiant dépôt minimum 20% capital sur compte bloqué au nom de la société en formation)</li>
                </ul>
                <p><strong>2. Documents du/des gérant(s) :</strong></p>
                <ul>
                  <li><strong>Photocopie CNI ou passeport</strong> (légalisée ou certifiée conforme)</li>
                  <li><strong>Extrait casier judiciaire (bulletin n°3)</strong> datant de moins de 3 mois (prouve absence condamnation incompatible fonction gérant)</li>
                  <li><strong>Déclaration de non-condamnation</strong> (formulaire CFE signé)</li>
                  <li><strong>Photo d'identité</strong> récente (2 exemplaires)</li>
                </ul>
                <p><strong>3. Documents du siège social :</strong></p>
                <ul>
                  <li><strong>Bail commercial</strong> (contrat location local professionnel, enregistré DGI) OU</li>
                  <li><strong>Attestation domiciliation</strong> (si siège chez société domiciliation commerciale, convention domiciliation enregistrée) OU</li>
                  <li><strong>Acte de propriété</strong> (si local appartient à associé/gérant, plus attestation mise à disposition gratuite société)</li>
                </ul>
                <p><strong>4. Formulaires CFE :</strong></p>
                <ul>
                  <li><strong>Formulaire M0</strong> (déclaration création entreprise, fourni par CFE, rempli intégralement)</li>
                  <li><strong>Déclaration fiscale d'existence</strong> (demande attribution IFU auprès OTR)</li>
                </ul>
                <p><strong>5. Justificatif paiement frais CFE</strong> (bordereau 65 000 FCFA, payable en ligne ou banque)</p>
                <p><strong>Bon à savoir :</strong> Tout document non conforme = rejet dossier + délai rallongé. <strong>INTEGRA vérifie et prépare votre dossier gold standard</strong> avant dépôt CFE (0% risque rejet). <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Constituer mon dossier avec INTEGRA</a>.</p>`
              },
              {
                question: "Combien de temps pour obtenir le certificat RCCM après dépôt CFE ?",
                answer: `<p><strong>Délai officiel CFE :</strong> <strong>3 à 5 jours ouvrables</strong> après dépôt d'un dossier complet et conforme</p>
                <p><strong>Délai global (réservation nom → certificat en main) :</strong> <strong>7 à 15 jours</strong> selon qualité préparation et période</p>
                <p><strong>Chronologie détaillée :</strong></p>
                <ol>
                  <li><strong>Réservation dénomination</strong> : 24-48h (vérification disponibilité nom CFE, certificat réservation)</li>
                  <li><strong>Rédaction statuts</strong> : 2-5 jours (dépend complexité, accompagnement conseil juridique)</li>
                  <li><strong>Enregistrement statuts DGI</strong> : 1-3 jours (paiement droits d'enregistrement, apposition timbres fiscaux)</li>
                  <li><strong>Blocage capital banque</strong> : 1-3 jours (ouverture compte bloqué, dépôt fonds, attestation délivrée)</li>
                  <li><strong>Dépôt dossier CFE</strong> : Immédiat (en ligne ou guichet physique)</li>
                  <li><strong>Traitement CFE</strong> : 3-5 jours (vérification conformité, validation services DGI/OTR/CNSS)</li>
                  <li><strong>Attribution IFU</strong> : Simultané étape 6 (OTR attribue numéro fiscal durant traitement CFE)</li>
                  <li><strong>Retrait certificat RCCM</strong> : Immédiat dès notification CFE (original + copies certifiées)</li>
                </ol>
                <p><strong>Facteurs d'accélération :</strong></p>
                <ul>
                  <li>✅ Dossier 100% conforme dès 1er dépôt (statuts conformes OHADA, documents légalisés, frais payés)</li>
                  <li>✅ Utilisation plateforme e-CFE (guichet en ligne : traitement plus rapide que physique)</li>
                  <li>✅ Accompagnement professionnel (INTEGRA = dossier gold standard, <strong>certificat garanti 7 jours</strong>)</li>
                </ul>
                <p><strong>Facteurs de ralentissement :</strong></p>
                <ul>
                  <li>❌ Documents manquants/non conformes : +5-10 jours (rejets, demandes compléments)</li>
                  <li>❌ Statuts non conformes OHADA : Retour correction → Nouvel enregistrement DGI</li>
                  <li>❌ Périodes de pointe : Fin trimestre, fin année (pic demandes CFE, délais allongés)</li>
                </ul>
                <p><strong>Record INTEGRA :</strong> Certificat RCCM obtenu en <strong>5 jours</strong> (dossier express, suivi prioritaire CFE). <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Obtenir mon RCCM en 7 jours max</a>.</p>`
              },
              {
                question: "Qu'est-ce que le numéro IFU et comment l'obtenir au Togo ?",
                answer: `<p>Le <strong>numéro IFU (Identifiant Fiscal Unique)</strong> est l'identifiant fiscal attribué par l'<strong>Office Togolais des Recettes (OTR)</strong> à toute personne physique ou morale exerçant une activité économique au Togo.</p>
                <p><strong>Caractéristiques IFU :</strong></p>
                <ul>
                  <li><strong>Format :</strong> 13 chiffres (exemple : 01234567890AB)</li>
                  <li><strong>Unicité :</strong> 1 entreprise = 1 IFU à vie (même en cas changement nom, adresse, activité)</li>
                  <li><strong>Utilisations :</strong> Toutes déclarations fiscales (IS, TVA, DIMANA), factures clients/fournisseurs, marchés publics, opérations bancaires professionnelles</li>
                </ul>
                <p><strong>Obtention automatique :</strong></p>
                <p>Le numéro IFU est <strong>attribué automatiquement lors de l'immatriculation RCCM</strong> au CFE. Le processus est intégré :</p>
                <ol>
                  <li>Dépôt dossier RCCM au CFE (formulaire M0 + statuts + pièces)</li>
                  <li>CFE transmet données à l'OTR (déclaration fiscale d'existence)</li>
                  <li>OTR génère IFU et le communique au CFE (délai : 3-5 jours)</li>
                  <li>CFE délivre certificat RCCM avec mention IFU sur le document</li>
                </ol>
                <p><strong>Pas de démarche séparée :</strong> Contrairement à certains pays, au Togo <strong>l'IFU n'est PAS demandé séparément</strong>. Il est inclus dans le processus RCCM (guichet unique).</p>
                <p><strong>IFU pour personnes physiques (auto-entrepreneurs) :</strong></p>
                <p>Si vous êtes commerçant/artisan personne physique (non société), vous pouvez obtenir un IFU sans RCCM :</p>
                <ul>
                  <li>Demande directe OTR (service immatriculation fiscale)</li>
                  <li>Documents : CNI, attestation activité (patente), justificatif domicile</li>
                  <li>Délai : 3-7 jours</li>
                </ul>
                <p><strong>INTEGRA gère :</strong> Attribution IFU incluse dans forfait création société (suivi CFE + OTR, obtention certificat avec IFU). <a href="/fr/togo/creer-une-entreprise/sarl-sarlu" style="text-decoration: underline;">Voir forfait création SARL</a>.</p>`
              },
              {
                question: "Peut-on immatriculer une SARL au RCCM sans passer par un notaire ?",
                answer: `<p><strong>Oui, le notaire n'est PAS obligatoire</strong> pour créer une SARL au Togo, sous certaines conditions.</p>
                <p><strong>Règles OHADA (Acte Uniforme Sociétés Commerciales) :</strong></p>
                <ul>
                  <li><strong>Acte notarié OBLIGATOIRE si :</strong>
                    <ul>
                      <li>Capital social ≥ <strong>10 000 000 FCFA</strong> (SARL de taille importante)</li>
                      <li>Apports en nature (immobilier, véhicules, équipements) dans le capital social (évaluation par commissaire aux apports + acte notarié)</li>
                      <li>Associés étrangers non-résidents (authentification signatures, légalisations consulaires)</li>
                    </ul>
                  </li>
                  <li><strong>Acte sous seing privé autorisé si :</strong>
                    <ul>
                      <li>Capital < 10M FCFA</li>
                      <li>Apports en numéraire uniquement (espèces versées en banque)</li>
                      <li>Associés tous résidents Togo</li>
                    </ul>
                  </li>
                </ul>
                <p><strong>Procédure sans notaire :</strong></p>
                <ol>
                  <li><strong>Rédaction statuts</strong> par conseil juridique (avocat, expert-comptable, INTEGRA PARTNERS) OU modèle personnalisé</li>
                  <li><strong>Signature statuts</strong> par tous associés (originaux × 4 exemplaires, paraphes chaque page)</li>
                  <li><strong>Enregistrement DGI</strong> : Dépôt statuts signés + paiement droits d'enregistrement → Timbres fiscaux apposés</li>
                  <li><strong>Dépôt CFE</strong> : Statuts enregistrés + dossier complet → Immatriculation RCCM</li>
                </ol>
                <p><strong>Avantages sans notaire :</strong></p>
                <ul>
                  <li>✅ <strong>Économie :</strong> 100 000 - 200 000 FCFA (honoraires notaire évités)</li>
                  <li>✅ <strong>Rapidité :</strong> Pas de rendez-vous notaire, signatures immédiates</li>
                  <li>✅ <strong>Simplicité :</strong> Process direct CFE (moins d'intermédiaires)</li>
                </ul>
                <p><strong>Quand privilégier notaire :</strong></p>
                <ul>
                  <li>Capital élevé (≥ 10M FCFA) = obligation légale</li>
                  <li>Apports nature (immobilier, fonds de commerce) = évaluation + authentification</li>
                  <li>Associés étrangers = sécurisation juridique internationale</li>
                  <li>Contentieux famille/succession = prévention litiges futurs</li>
                </ul>
                <p><strong>INTEGRA propose :</strong> Rédaction statuts conformes OHADA <strong>sans notaire</strong> (capital < 10M, apports numéraire) → Économie 150k FCFA + délai réduit. Si notaire requis, coordination complète. <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Créer ma SARL sans notaire</a>.</p>`
              },
              {
                question: "Comment modifier ou radier une immatriculation RCCM au Togo ?",
                answer: `<p><strong>Toute modification de la situation juridique</strong> de l'entreprise doit être déclarée au RCCM (principe de publicité légale OHADA).</p>
                <p><strong>Modifications RCCM courantes :</strong></p>
                <ul>
                  <li><strong>Changement dénomination sociale :</strong> Nouvelle réservation nom + modification statuts + dépôt CFE (délai 5-7 jours)</li>
                  <li><strong>Changement siège social :</strong> Nouveau bail enregistré + modification statuts + déclaration CFE (3-5 jours)</li>
                  <li><strong>Changement gérant :</strong> PV AG désignation nouveau gérant + pièces identité + dépôt CFE (3-5 jours)</li>
                  <li><strong>Augmentation capital :</strong> PV AG augmentation + attestation libération (apports nouveaux) + modification statuts + enregistrement DGI + CFE (7-10 jours)</li>
                  <li><strong>Cession de parts sociales :</strong> Acte cession enregistré DGI + modification répartition capital dans statuts + CFE (5-7 jours)</li>
                  <li><strong>Changement activité/objet social :</strong> PV AG extraordinaire + modification statuts article objet + CFE (5-7 jours)</li>
                </ul>
                <p><strong>Procédure modification standard :</strong></p>
                <ol>
                  <li>Tenue AG extraordinaire (décision modification, PV signé tous associés)</li>
                  <li>Modification statuts (mise à jour articles concernés)</li>
                  <li>Enregistrement DGI nouveaux statuts (si changements = droits d'enregistrement 50-100k FCFA)</li>
                  <li>Dépôt formulaire M2 au CFE + documents modificatifs (PV AG, statuts modifiés, pièces justificatives)</li>
                  <li>Paiement frais modification CFE : <strong>30 000 - 50 000 FCFA</strong> selon nature modification</li>
                  <li>Délivrance nouveau certificat RCCM ou mention modificative (3-5 jours)</li>
                </ol>
                <p><strong>Radiation RCCM (cessation activité) :</strong></p>
                <ol>
                  <li><strong>Dissolution société :</strong> AG extraordinaire (PV dissolution, désignation liquidateur)</li>
                  <li><strong>Liquidation :</strong> Apurement dettes, réalisation actifs, partage boni entre associés (durée 3-12 mois)</li>
                  <li><strong>Clôture liquidation :</strong> PV AG approbation comptes liquidation</li>
                  <li><strong>Dépôt CFE :</strong> Formulaire M4 radiation + PV dissolution + PV clôture + attestations OTR/CNSS (quitus fiscal/social)</li>
                  <li><strong>Radiation RCCM :</strong> CFE radie entreprise (5-7 jours) + publication Journal Officiel</li>
                  <li><strong>Clôture IFU :</strong> OTR clôture dossier fiscal entreprise</li>
                </ol>
                <p><strong>Coût radiation :</strong> 50 000 - 100 000 FCFA (frais CFE + publications).</p>
                <p><strong>INTEGRA gère modifications et radiations :</strong> PV réglementaires, dépôt CFE, obtention quitus fiscal OTR, suivi complet. <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Nous confier modification/radiation RCCM</a>.</p>`
              },
              {
                question: "INTEGRA PARTNERS peut-il gérer mon immatriculation RCCM de A à Z ?",
                answer: `<p><strong>Oui, notre forfait "Immatriculation RCCM Clé en Main" inclut :</strong></p>
                <ul>
                  <li>✅ <strong>Réservation dénomination sociale</strong> au CFE (vérification disponibilité, certificat réservation 3 mois)</li>
                  <li>✅ <strong>Rédaction statuts personnalisés</strong> conformes OHADA (adaptés activité, capital, associés, clauses sur-mesure)</li>
                  <li>✅ <strong>Domiciliation commerciale</strong> (si besoin : adresse siège social INTEGRA, bail professionnel enregistré)</li>
                  <li>✅ <strong>Coordination bancaire complète</strong> : Ouverture compte bloqué, suivi dépôt capital, obtention attestation bancaire</li>
                  <li>✅ <strong>Enregistrement statuts DGI</strong> : Paiement droits d'enregistrement (50-100k FCFA), obtention timbres fiscaux</li>
                  <li>✅ <strong>Constitution dossier CFE gold standard</strong> : Vérification 100% documents (0 risque rejet), formulaires M0 remplis</li>
                  <li>✅ <strong>Dépôt CFE + suivi quotidien</strong> : Dépôt en ligne ou physique, tracking avancement dossier, relances CFE si besoin</li>
                  <li>✅ <strong>Obtention IFU</strong> (numéro fiscal OTR, délivré automatiquement durant process RCCM)</li>
                  <li>✅ <strong>Retrait certificat RCCM</strong> : Récupération original + 5 copies certifiées pour vos démarches (banques, partenaires)</li>
                  <li>✅ <strong>Publications légales</strong> (Journal Officiel Togo si requis selon forme sociale)</li>
                  <li>✅ <strong>Remise kit entrepreneur</strong> : Certificat RCCM, statuts originaux timbrés, registres légaux obligatoires (AG, PV, transferts parts), K-bis togolais</li>
                </ul>
                <p><strong>Tarif forfaitaire :</strong> <strong>150 000 FCFA TTC</strong> (hors frais officiels CFE/DGI estimés 300-400k FCFA)</p>
                <p><strong>Délai garanti :</strong> <strong>7 jours ouvrables</strong> (dossier complet → certificat RCCM en main)</p>
                <p><strong>Bonus :</strong></p>
                <ul>
                  <li>✅ 1 consultation stratégique gratuite (choix régime fiscal, TVA, optimisation IS)</li>
                  <li>✅ Connexion réseau partenaires (banques, assurances, experts-comptables)</li>
                  <li>✅ Suivi post-immatriculation 30 jours (assistance démarches complémentaires : CNSS, INAM, patente)</li>
                </ul>
                <p><strong>Formule Express (délai 5 jours) :</strong> +50 000 FCFA (traitement prioritaire CFE, coordination accélérée DGI/banques).</p>
                <p><a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Démarrer mon immatriculation RCCM avec INTEGRA</a> | <a href="/fr/togo/creer-une-entreprise/sarl-sarlu" style="text-decoration: underline;">Voir forfait création SARL complète</a>.</p>`
              }
            ]}
            pageUrl="https://integrapartners.com/fr/togo/creer-une-entreprise/rccm-et-immatriculation"
          />
        </div>
      </section>
    </div>
  );
}
