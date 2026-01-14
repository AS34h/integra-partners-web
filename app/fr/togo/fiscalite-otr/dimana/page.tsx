import { Metadata } from 'next'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FAQSection } from '@/components/FAQ'
import { HowTo } from '@/components/HowTo'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function DIMANAGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Breadcrumb paths={[
        { name: 'Togo', url: '/fr/togo' },
        { name: 'Fiscalité OTR', url: '/fr/togo/fiscalite-otr' },
        { name: 'DIMANA', url: '/fr/togo/fiscalite-otr/dimana' }
      ]} />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">DIMANA : Déclaration Mensuelle Fiscale au Togo</h1>
        <p className="text-xl text-gray-600">
          Tout comprendre sur la déclaration mensuelle obligatoire (DIMANA) : TVA, retenues à la source, procédure de télédéclaration et conformité OTR.
        </p>
      </div>

      {/* Disclaimer officiel */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
        <div className="flex items-start">
          <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="font-semibold text-amber-900 mb-2">Information importante</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              Ce guide présente le cadre général de la déclaration DIMANA à titre informatif. 
              <strong> Les dates d'échéance, taux de pénalités et modalités précises doivent être vérifiés sur les plateformes officielles</strong> : 
              DIMANA (<a href="https://dimana.otr.tg" className="underline font-medium" target="_blank" rel="noopener">dimana.otr.tg</a>), 
              e-services OTR, ou auprès de l'Office Togolais des Recettes. 
              INTEGRA PARTNERS assure le suivi complet des déclarations mensuelles pour ses clients.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Qu'est-ce que la déclaration DIMANA ?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>DIMANA</strong> est l'acronyme de <strong>« Déclaration et Impôts Mensuels Automatisés »</strong>, 
            la plateforme de télédéclaration mensuelle mise en place par l'<strong>Office Togolais des Recettes (OTR)</strong> 
            pour simplifier et dématérialiser les obligations fiscales récurrentes des entreprises.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Contrairement à la déclaration annuelle de résultat (IS), DIMANA concerne les <strong>impôts et taxes à déclarer mensuellement</strong>, 
            notamment la TVA collectée et les retenues à la source sur salaires et prestataires.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-900">
              <strong>💡 Bon à savoir :</strong> DIMANA est obligatoire pour toutes les entreprises assujetties aux régimes réels d'imposition 
              (RSI - Régime Simplifié d'Imposition et RNI - Régime Normal d'Imposition). Les micro-entreprises sous régime synthétique 
              ont des obligations simplifiées différentes.
            </p>
          </div>
        </section>

        {/* Entreprises concernées */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Quelles entreprises doivent déclarer via DIMANA ?</h2>
          
          <h3 className="text-2xl font-semibold mb-3 mt-6">Obligation systématique</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sont obligatoirement soumises à DIMANA toutes les entreprises :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Assujetties à la TVA</strong> (collecte et déduction)</li>
            <li><strong>Employant du personnel salarié</strong> (retenues INAM, CNSS, IRPP)</li>
            <li><strong>Effectuant des retenues à la source</strong> (prestataires, honoraires, loyers)</li>
            <li><strong>Relevant du régime réel d'imposition</strong> (RSI ou RNI)</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-8">Cas particuliers</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Entreprises en exonération de TVA :</strong> Doivent quand même déclarer (déclaration "néant" si aucune retenue)</li>
            <li><strong>Nouveaux contribuables :</strong> Obligation dès le premier mois d'activité après immatriculation OTR</li>
            <li><strong>Activités saisonnières :</strong> Obligation mensuelle même en période d'inactivité (déclaration à zéro)</li>
          </ul>
        </section>

        {/* Taxes couvertes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Quelles taxes sont déclarées via DIMANA ?</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Taxe sur la Valeur Ajoutée (TVA)
              </h3>
              <p className="text-gray-700 mb-3">
                Déclaration de la <strong>TVA collectée</strong> (sur ventes et prestations) et de la <strong>TVA déductible</strong> 
                (sur achats et charges). Le solde (TVA collectée - TVA déductible) détermine le montant à payer ou le crédit de TVA.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                <li>TVA sur ventes de biens</li>
                <li>TVA sur prestations de services</li>
                <li>TVA intracommunautaire (UEMOA)</li>
                <li>TVA sur importations (régularisation)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">👥</span>
                Retenues sur salaires
              </h3>
              <p className="text-gray-700 mb-3">
                Déclaration et reversement des <strong>cotisations sociales</strong> et <strong>impôts sur salaires</strong> :
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                <li>INAM (assurance maladie) - part patronale et salariale</li>
                <li>CNSS (sécurité sociale) - part patronale et salariale</li>
                <li>IRPP (impôt sur le revenu) - retenue à la source sur salaires</li>
                <li>Contribution au Fonds National d'Apprentissage (FNA)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🏢</span>
                Retenues à la source (RAS) diverses
              </h3>
              <p className="text-gray-700 mb-3">
                Retenues obligatoires sur paiements à des tiers :
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                <li>RAS sur honoraires et vacations (prestataires indépendants)</li>
                <li>RAS sur loyers (propriétaires immobiliers)</li>
                <li>RAS sur prestations de services (non-résidents sous conditions)</li>
                <li>Acompte sur marché public (si applicable)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">💼</span>
                Autres taxes mensuelles
              </h3>
              <p className="text-gray-700 mb-3">
                Selon l'activité, d'autres taxes peuvent être déclarées mensuellement :
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                <li>Taxe sur les activités financières (TAF) - secteur bancaire/assurance</li>
                <li>Prélèvement Communautaire de Solidarité (PCS) - importations</li>
                <li>Contribution au développement local (selon communes)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Procédure de déclaration */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Comment effectuer sa déclaration DIMANA ?</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Étape 1 : Accès à la plateforme</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Se connecter à la plateforme DIMANA avec ses identifiants OTR :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>URL officielle :</strong> <a href="https://dimana.otr.tg" className="text-blue-600 hover:underline" target="_blank" rel="noopener">dimana.otr.tg</a></li>
            <li><strong>Identifiant :</strong> Numéro IFU (Identifiant Fiscal Unique) de l'entreprise</li>
            <li><strong>Mot de passe :</strong> Fourni lors de l'immatriculation OTR (modifiable)</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-8">Étape 2 : Saisie des données</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Remplir les formulaires électroniques avec les montants du mois concerné :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Chiffre d'affaires TTC et hors taxes (distinction biens/services)</li>
            <li>TVA collectée par taux (taux normal, taux réduit si applicable)</li>
            <li>TVA déductible sur achats et charges (avec justificatifs)</li>
            <li>Montant brut des salaires et détail des retenues</li>
            <li>Paiements aux prestataires soumis à retenue à la source</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-900">
              <strong>✅ Astuce :</strong> Préparer un tableau récapitulatif mensuel (Excel/comptabilité) avant de saisir sur DIMANA 
              pour éviter les erreurs et gagner du temps. Vérifier systématiquement la cohérence entre comptabilité et déclaration.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-3 mt-8">Étape 3 : Validation et transmission</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Vérifier l'ensemble des montants saisis</li>
            <li>Valider la déclaration électroniquement</li>
            <li>Recevoir un accusé de réception avec numéro de déclaration</li>
            <li>Télécharger et archiver l'avis d'imposition généré</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-8">Étape 4 : Télépaiement</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Procéder au paiement des impôts et taxes déclarés via :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Paiement en ligne :</strong> Carte bancaire, mobile money (T-Money, Flooz) sur e-services.otr.tg</li>
            <li><strong>Banques partenaires :</strong> Dépôt à la banque avec référence OTR</li>
            <li><strong>Guichets OTR :</strong> Paiement direct aux centres de recettes</li>
          </ul>
        </section>

        {/* Échéances */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Échéances et délais à respecter</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Calendrier mensuel</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La déclaration DIMANA suit un <strong>calendrier mensuel strict</strong> dont les dates limites sont fixées 
            par le Code Général des Impôts. Généralement :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Période déclarative : opérations du mois M (1er au dernier jour du mois)</li>
            <li>Date limite de déclaration : à vérifier sur le portail DIMANA (souvent mi-mois M+1)</li>
            <li>Date limite de paiement : simultanée ou peu après la déclaration</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
            <p className="text-red-900">
              <strong>⚠️ Échéances critiques :</strong> Le non-respect des dates limites entraîne automatiquement des pénalités de retard 
              et majorations. En cas de difficulté, contacter l'OTR AVANT l'échéance pour solliciter un éventuel délai de grâce.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-3 mt-8">Déclarations rectificatives</h3>
          <p className="text-gray-700 leading-relaxed">
            En cas d'erreur, il est possible de déposer une <strong>déclaration rectificative</strong> via DIMANA, 
            mais les corrections doivent être justifiées et peuvent faire l'objet d'un contrôle OTR. 
            Privilégier toujours l'exactitude dès la première déclaration.
          </p>
        </section>

        {/* Pénalités */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Sanctions en cas de retard ou d'omission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le Code Général des Impôts et le Livre des Procédures Fiscales prévoient des <strong>sanctions automatiques</strong> 
            en cas de manquement aux obligations DIMANA :
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 my-6">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Type de manquement</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Sanctions applicables</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="px-6 py-4 border-b font-medium">Déclaration tardive</td>
                  <td className="px-6 py-4 border-b">Pénalités de retard + intérêts calculés par jour de retard</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium">Défaut de déclaration</td>
                  <td className="px-6 py-4 border-b">Taxation d'office + majorations (taux fixé par CGI)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-medium">Paiement tardif</td>
                  <td className="px-6 py-4 border-b">Intérêts de retard sur montants dus</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium">Sous-évaluation volontaire</td>
                  <td className="px-6 py-4 border-b">Redressement + majorations pour mauvaise foi</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-medium">Retards répétitifs</td>
                  <td className="px-6 py-4 border-b">Inscription au fichier des mauvais payeurs + blocage attestations fiscales</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            <strong>Conséquence grave :</strong> L'absence d'attestation fiscale à jour bloque l'accès aux marchés publics, 
            les appels d'offres, et peut entraîner la suspension de l'agrément pour certaines activités réglementées.
          </p>
        </section>

        {/* Bonnes pratiques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Bonnes pratiques pour une conformité DIMANA optimale</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">📅</span>
                Établir un calendrier fiscal mensuel
              </h3>
              <p className="text-gray-700">
                Programmer des rappels automatiques 5 jours avant chaque échéance DIMANA. Désigner un responsable fiscal 
                en charge de la préparation et validation des déclarations. Ne jamais attendre le dernier jour.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🧮</span>
                Réconcilier comptabilité et déclarations
              </h3>
              <p className="text-gray-700">
                Chaque mois, effectuer un rapprochement entre les écritures comptables (TVA, salaires) et les montants déclarés via DIMANA. 
                Tout écart doit être identifié et justifié. Conserver systématiquement les pièces justificatives (factures, bulletins de paie).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">💾</span>
                Archiver les preuves de déclaration
              </h3>
              <p className="text-gray-700">
                Télécharger et archiver chaque mois : l'accusé de réception DIMANA, l'avis d'imposition, les preuves de paiement (reçus bancaires, 
                confirmations e-payment). Ces documents sont indispensables en cas de contrôle OTR.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🔐</span>
                Sécuriser l'accès DIMANA
              </h3>
              <p className="text-gray-700">
                Modifier régulièrement le mot de passe DIMANA. Limiter l'accès aux personnes autorisées. 
                En cas de départ d'un collaborateur ayant accès à DIMANA, changer immédiatement les identifiants.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🤝</span>
                Se faire accompagner par un professionnel
              </h3>
              <p className="text-gray-700">
                Pour les entreprises avec un volume important d'opérations, externaliser la gestion DIMANA auprès d'un cabinet comptable 
                ou d'un conseil fiscal garantit la conformité et libère du temps pour les activités core business.
              </p>
            </div>
          </div>
        </section>

        {/* Crédit de TVA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Gestion du crédit de TVA</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorsque la <strong>TVA déductible</strong> (sur achats et charges) est supérieure à la <strong>TVA collectée</strong> (sur ventes), 
            l'entreprise se trouve en situation de <strong>crédit de TVA</strong>.
          </p>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Options de traitement du crédit</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Report sur mois suivant :</strong> Le crédit est automatiquement imputé sur les déclarations DIMANA ultérieures</li>
            <li><strong>Remboursement :</strong> Possible sous conditions (exportations, investissements importants, secteurs prioritaires)</li>
            <li><strong>Imputation sur autres impôts :</strong> Sous réserve d'accord OTR</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-900">
              <strong>💡 Conseil :</strong> Les demandes de remboursement de crédit de TVA font systématiquement l'objet d'un contrôle OTR approfondi. 
              S'assurer que tous les justificatifs (factures, documents douaniers, contrats) sont irréprochables avant toute demande.
            </p>
          </div>
        </section>

        {/* Contrôles OTR */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contrôles OTR et vérifications DIMANA</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L'OTR effectue des <strong>contrôles réguliers</strong> de cohérence entre les déclarations DIMANA et la comptabilité des entreprises :
          </p>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Types de contrôles</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Contrôle automatisé :</strong> Algorithmes détectant les anomalies (variations brutales de CA, TVA incohérente)</li>
            <li><strong>Contrôle sur pièces :</strong> Demande de justificatifs sans visite en entreprise</li>
            <li><strong>Vérification de comptabilité :</strong> Contrôle approfondi sur site avec examen de tous les documents</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-8">Points d'attention des contrôleurs</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Cohérence entre CA déclaré (DIMANA) et CA comptabilisé</li>
            <li>Justification de la TVA déductible (factures conformes, achats professionnels)</li>
            <li>Exactitude des retenues à la source (salaires, honoraires)</li>
            <li>Respect des seuils d'assujettissement et des régimes fiscaux</li>
          </ul>
        </section>

        {/* Ressources officielles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Ressources officielles et assistance</h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Plateformes OTR</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li><strong>DIMANA (déclarations) :</strong> <a href="https://dimana.otr.tg" className="text-blue-600 hover:underline" target="_blank" rel="noopener">dimana.otr.tg</a></li>
              <li><strong>e-services (paiements) :</strong> <a href="https://e-services.otr.tg" className="text-blue-600 hover:underline" target="_blank" rel="noopener">e-services.otr.tg</a></li>
              <li><strong>Site principal OTR :</strong> <a href="https://www.otr.tg" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.otr.tg</a></li>
              <li><strong>Service assistance :</strong> Hotline OTR disponible du lundi au vendredi</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Guides et tutoriels</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Manuels utilisateur DIMANA (téléchargeables sur otr.tg)</li>
              <li>Vidéos de formation à la télédéclaration</li>
              <li>FAQ DIMANA (questions fréquentes)</li>
              <li>Code Général des Impôts 2025 (section TVA et retenues à la source)</li>
            </ul>
          </div>
        </section>

        {/* CTA INTEGRA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mt-12">
          <h2 className="text-3xl font-bold mb-4">Besoin d'une gestion déléguée de vos déclarations DIMANA ?</h2>
          <p className="text-lg mb-6 opacity-90">
            INTEGRA PARTNERS prend en charge l'intégralité de vos obligations DIMANA : préparation, saisie, validation, 
            télépaiement et suivi de conformité. Zéro risque de retard, zéro pénalité.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Déclarations DIMANA mensuelles toujours à temps</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Réconciliation comptabilité/déclarations pour éviter les redressements</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Gestion optimisée du crédit de TVA et demandes de remboursement</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Assistance lors des contrôles OTR (préparation, représentation, négociation)</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/fr/contact" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Externaliser mes déclarations
            </a>
            <a 
              href="/fr/services/structuration-juridico-fiscale" 
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-white text-center"
            >
              Nos forfaits conformité
            </a>
          </div>
        </section>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <HowTo
            name="Comment télédéclarer DIMANA sur e-services OTR Togo"
            description="Procédure complète de télédéclaration mensuelle DIMANA : TVA, retenues à la source et salaires sur la plateforme e-services OTR en 4 étapes simples"
            totalTime="PT30M"
            pageUrl="https://integrapartners.com/fr/togo/fiscalite-otr/dimana"
            steps={[
              {
                position: 1,
                name: "Connexion à la plateforme e-services OTR",
                text: "Accéder à eservices.otr.tg ou dimana.otr.tg. Se connecter avec votre numéro IFU (identifiant) et votre mot de passe. Dans le menu principal, sélectionner 'Déclarations' puis 'DIMANA'.",
                url: "https://integrapartners.com/fr/togo/fiscalite-otr/dimana#teledeclaration-etape-1"
              },
              {
                position: 2,
                name: "Remplir les rubriques DIMANA",
                text: "Saisir les montants du mois précédent (M-1) : TVA collectée, TVA déductible, retenues sur salaires (INAM 2%, CNSS 16,5%, IRPP progressif), retenues à la source (RAS) sur prestations de services fournisseurs. Tous les montants doivent être en FCFA.",
                url: "https://integrapartners.com/fr/togo/fiscalite-otr/dimana#teledeclaration-etape-2"
              },
              {
                position: 3,
                name: "Valider et générer le bordereau de paiement",
                text: "Vérifier attentivement les montants calculés automatiquement par la plateforme (TVA nette à payer, total retenues). Valider la déclaration. Télécharger le bordereau de paiement au format PDF (imprimable si besoin).",
                url: "https://integrapartners.com/fr/togo/fiscalite-otr/dimana#teledeclaration-etape-3"
              },
              {
                position: 4,
                name: "Effectuer le paiement en ligne ou à la banque",
                text: "Payer en ligne via mobile money (FLOOZ, TMONEY) ou carte bancaire OU présenter le bordereau papier à votre banque. Deadline impérative : 15 du mois. Conserver la quittance OTR (preuve de paiement) pour vos archives (10 ans).",
                url: "https://integrapartners.com/fr/togo/fiscalite-otr/dimana#teledeclaration-etape-4"
              }
            ]}
          />
        </div>
      </div>

      <FAQSection 
        title="Questions Fréquentes sur DIMANA"
        faqs={[
          {
            question: "Qu'est-ce que DIMANA au Togo et qui doit la déposer ?",
            answer: `<p><strong>DIMANA (Déclaration et Impôts Mensuels Automatisés)</strong> est la plateforme de télédéclaration mensuelle de l'OTR permettant aux entreprises de déclarer et payer leurs impôts récurrents.</p>
            <p><strong>Sont concernés :</strong></p>
            <ul>
              <li><strong>Toutes les entreprises assujetties à la TVA</strong> (CA ≥ 60M FCFA)</li>
              <li><strong>Tous les employeurs</strong> déclarant des salaires et retenues sociales</li>
              <li><strong>Tous les clients payant des fournisseurs/prestataires</strong> soumis à retenues à la source (RAS)</li>
            </ul>
            <p>Même si votre activité est en pause, vous devez déposer une <strong>DIMANA à zéro</strong> pour rester en conformité.</p>`
          },
          {
            question: "Quelle est la date limite de déclaration DIMANA chaque mois ?",
            answer: `<p>La déclaration DIMANA doit être déposée <strong>au plus tard le 15 du mois suivant</strong> la période concernée :</p>
            <ul>
              <li><strong>Mois de janvier</strong> → Déclaration avant le <strong>15 février</strong></li>
              <li><strong>Mois de février</strong> → Déclaration avant le <strong>15 mars</strong></li>
              <li><strong>Mois de mars</strong> → Déclaration avant le <strong>15 avril</strong>, etc.</li>
            </ul>
            <p><strong>⚠️ Attention :</strong> Si le 15 tombe un week-end ou jour férié, la date limite peut être prorogée au jour ouvrable suivant. <strong>Vérifiez toujours sur <a href="https://dimana.otr.tg" target="_blank" rel="noopener" style="text-decoration: underline;">dimana.otr.tg</a></strong> ou e-services OTR.</p>
            <p><strong>Paiement :</strong> Doit également être effectué avant le 15 du mois (en ligne ou bordereau bancaire).</p>`
          },
          {
            question: "Que dois-je déclarer dans DIMANA : TVA, retenues salaires, RAS ?",
            answer: `<p>DIMANA regroupe <strong>5 rubriques fiscales principales</strong> :</p>
            <ol>
              <li><strong>TVA collectée</strong> : TVA facturée à vos clients (taux 18% sur CA HT)</li>
              <li><strong>TVA déductible</strong> : TVA payée sur achats/charges professionnels avec factures conformes</li>
              <li><strong>Retenues salaires</strong> : IRPP (impôt sur le revenu du personnel), INAM (2% salaire brut), CNSS (16,5% employeur)</li>
              <li><strong>RAS fournisseurs</strong> : Retenues à la source sur prestations (1% à 20% selon nature prestation)</li>
              <li><strong>Autres impôts mensuels</strong> : Taxe sur véhicules, redevances spécifiques selon secteur</li>
            </ol>
            <p><strong>Important :</strong> Si une rubrique ne vous concerne pas le mois M (ex : pas de salaires), vous laissez à <strong>0 FCFA</strong>.</p>`
          },
          {
            question: "Comment télédéclarer DIMANA sur la plateforme e-services OTR ?",
            answer: `<p><strong>Procédure en 4 étapes :</strong></p>
            <ol>
              <li><strong>Connexion :</strong> Accédez à <strong><a href="https://eservices.otr.tg" target="_blank" rel="noopener" style="text-decoration: underline;">eservices.otr.tg</a></strong> avec votre numéro IFU (identifiant) et mot de passe. Menu <em>Déclarations → DIMANA</em>.</li>
              <li><strong>Saisie :</strong> Remplissez chaque rubrique (TVA collectée, TVA déductible, retenues salaires INAM/CNSS/IRPP, RAS). Montants en FCFA pour le mois M-1 (exemple : en janvier, déclarez décembre).</li>
              <li><strong>Validation :</strong> Vérifiez les montants calculés automatiquement (TVA nette à payer, total retenues). Validez la déclaration → Téléchargez le <strong>bordereau de paiement</strong> (PDF imprimable).</li>
              <li><strong>Paiement :</strong> Réglez en ligne (mobile money FLOOZ/TMONEY, carte bancaire) OU présentez le bordereau papier à votre banque. <strong>Conservez la quittance OTR</strong> (preuve paiement).</li>
            </ol>
            <p><strong>Délai :</strong> Comptez 20-30 minutes pour une DIMANA complète si données comptables prêtes.</p>`
          },
          {
            question: "Quelles sont les sanctions en cas de retard de déclaration DIMANA ?",
            answer: `<p>Le non-respect de l'échéance DIMANA entraîne des <strong>pénalités automatiques</strong> calculées par l'OTR :</p>
            <ul>
              <li><strong>Majoration de retard :</strong> <strong>10% du montant dû</strong> (appliquée dès le 1er jour de retard après le 15)</li>
              <li><strong>Intérêts de retard :</strong> <strong>1% par mois</strong> ou fraction de mois (calculés sur le montant principal + majoration)</li>
              <li><strong>Pénalité défaut déclaration :</strong> Jusqu'à <strong>500 000 FCFA</strong> d'amende si DIMANA non déposée pendant plusieurs mois</li>
            </ul>
            <p><strong>Exemple :</strong> TVA de 500 000 FCFA due le 15 février, payée le 28 mars (1,5 mois retard) :</p>
            <ul>
              <li>Majoration 10% = 50 000 FCFA</li>
              <li>Intérêts 1% × 2 mois = 11 000 FCFA</li>
              <li><strong>Total à payer : 561 000 FCFA</strong></li>
            </ul>
            <p><strong>Conseil INTEGRA :</strong> Anticipez vos déclarations avec un calendrier fiscal automatisé pour éviter ces surcoûts.</p>`
          },
          {
            question: "Peut-on corriger une DIMANA après validation ou récupérer un crédit de TVA ?",
            answer: `<p><strong>Correction DIMANA :</strong></p>
            <ul>
              <li><strong>Avant validation finale :</strong> Vous pouvez modifier librement sur e-services (tant que non payée)</li>
              <li><strong>Après validation/paiement :</strong> Impossible de modifier en ligne. Vous devez déposer une <strong>déclaration rectificative</strong> à l'OTR (formulaire papier + justificatifs). Délai traitement : 2-4 semaines.</li>
            </ul>
            <p><strong>Crédit de TVA :</strong></p>
            <p>Si votre <strong>TVA déductible > TVA collectée</strong> (ex : investissements lourds), vous générez un <strong>crédit de TVA</strong> reportable sur les mois suivants via DIMANA.</p>
            <ul>
              <li><strong>Report automatique :</strong> Le crédit M apparaît dans DIMANA M+1 (rubrique "Crédit TVA mois précédent")</li>
              <li><strong>Remboursement :</strong> Possible sous conditions strictes (exportateurs, investissements ≥ 50M FCFA). Demande formelle OTR + audit fiscal (délai 6-12 mois).</li>
            </ul>
            <p><strong>Astuce :</strong> INTEGRA gère vos crédits TVA et négocie les remboursements avec l'OTR.</p>`
          },
          {
            question: "Dois-je déclarer DIMANA si mon entreprise n'a aucune activité ce mois ?",
            answer: `<p><strong>Oui, absolument !</strong> Même en l'absence totale d'activité ou de CA, vous devez déposer une <strong>DIMANA à zéro</strong> ("déclaration néant") avant le 15 du mois.</p>
            <p><strong>Pourquoi ?</strong></p>
            <ul>
              <li>L'OTR considère le <strong>défaut de déclaration = infraction fiscale</strong>, même si montants = 0 FCFA</li>
              <li>Risque de <strong>pénalités pour non-déclaration</strong> (jusqu'à 500 000 FCFA) + contentieux fiscal</li>
              <li>Maintien de votre <strong>historique de conformité</strong> (scoring OTR pour futurs contrôles)</li>
            </ul>
            <p><strong>Procédure DIMANA néant :</strong></p>
            <ol>
              <li>Connexion e-services OTR</li>
              <li>Toutes rubriques à <strong>0 FCFA</strong></li>
              <li>Validation → Pas de paiement à effectuer (bordereau montant nul)</li>
            </ol>
            <p><strong>Temps requis :</strong> 5 minutes maximum. <strong>INTEGRA automatise ces déclarations néant</strong> pour ses clients.</p>`
          },
          {
            question: "INTEGRA PARTNERS peut-il gérer mes déclarations DIMANA mensuelles ?",
            answer: `<p><strong>Oui, nos forfaits de conformité fiscale incluent :</strong></p>
            <ul>
              <li><strong>Gestion complète DIMANA</strong> : Saisie, validation, paiement en ligne chaque mois (respect deadline 15)</li>
              <li><strong>Tenue comptable mensuelle</strong> : Centralisation factures, calcul TVA collectée/déductible, retenues salaires</li>
              <li><strong>Calendrier fiscal automatisé</strong> : Rappels 5 jours avant échéances, 0 risque oubli</li>
              <li><strong>Veille réglementaire</strong> : Suivi évolutions taux, nouvelles obligations OTR</li>
              <li><strong>Gestion contentieux</strong> : Régularisation retards, négociation pénalités, recours OTR</li>
            </ul>
            <p><strong>Avantages :</strong></p>
            <ul>
              <li>✅ <strong>0% risque pénalités</strong> (traçabilité complète, conformité garantie)</li>
              <li>✅ <strong>Gain de temps</strong> : 3-5h/mois économisées (vs gestion interne)</li>
              <li>✅ <strong>Optimisation fiscale</strong> : Maximisation TVA déductible, gestion crédits</li>
            </ul>
            <p><strong>Tarifs :</strong> À partir de <strong>75 000 FCFA/mois</strong> (forfait PME - DIMANA + déclarations sociales). <a href="/fr/contact" style="text-decoration: underline; font-weight: 600;">Demandez un devis personnalisé</a>.</p>`
          }
        ]}
        pageUrl="https://integrapartners.com/fr/togo/fiscalite-otr/dimana"
      />
    </div>
  )
}
