import { Metadata } from 'next'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FAQSection } from '@/components/FAQ'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function ISGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Breadcrumb paths={[
        { name: 'Togo', url: '/fr/togo' },
        { name: 'Fiscalité OTR', url: '/fr/togo/fiscalite-otr' },
        { name: 'Impôt sur les Sociétés', url: '/fr/togo/fiscalite-otr/is' }
      ]} />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Impôt sur les Sociétés (IS) au Togo</h1>
        <p className="text-xl text-gray-600">
          Comprendre le régime fiscal des entreprises au Togo : cadre OHADA, obligations déclaratives et bonnes pratiques de conformité.
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
              Ce guide présente le cadre général de l'Impôt sur les Sociétés au Togo à titre informatif. 
              <strong> Les taux, délais et modalités précis doivent être vérifiés auprès de sources officielles</strong> : 
              Code Général des Impôts 2025 (disponible sur <a href="https://www.otr.tg" className="underline font-medium" target="_blank" rel="noopener">otr.tg</a>), 
              plateforme e-services OTR, ou conseil d'un expert-comptable agréé. 
              INTEGRA PARTNERS accompagne les entreprises dans leur conformité fiscale sur la base des textes en vigueur.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Qu'est-ce que l'Impôt sur les Sociétés ?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L'<strong>Impôt sur les Sociétés (IS)</strong> est un impôt direct qui frappe les bénéfices réalisés par les personnes morales 
            exerçant une activité au Togo. Il s'inscrit dans le cadre harmonisé de l'<strong>UEMOA</strong> (Union Économique et Monétaire Ouest-Africaine) 
            et respecte les principes du droit <strong>OHADA</strong> (Organisation pour l'Harmonisation en Afrique du Droit des Affaires).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Géré par l'<strong>Office Togolais des Recettes (OTR)</strong>, l'IS constitue l'une des principales ressources fiscales 
            du Togo et s'applique selon des règles précises définies par le Code Général des Impôts mis à jour annuellement.
          </p>
        </section>

        {/* Sociétés concernées */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Quelles sociétés sont assujetties à l'IS ?</h2>
          
          <h3 className="text-2xl font-semibold mb-3 mt-6">Assujettissement obligatoire</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sont obligatoirement soumises à l'IS les sociétés de capitaux constituées selon le droit OHADA :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Sociétés Anonymes (SA)</strong> : quelle que soit leur activité</li>
            <li><strong>Sociétés à Responsabilité Limitée (SARL)</strong> : forme la plus répandue au Togo</li>
            <li><strong>Sociétés par Actions Simplifiées (SAS)</strong> : si prévues par le droit national</li>
            <li><strong>Sociétés d'État et sociétés d'économie mixte</strong></li>
            <li><strong>Coopératives et établissements publics</strong> à caractère industriel et commercial</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-8">Option pour l'IS</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certaines structures peuvent opter pour l'IS au lieu de l'impôt sur le revenu des personnes physiques (IRPP) :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Sociétés en nom collectif (SNC)</li>
            <li>Sociétés en commandite simple</li>
            <li>Sociétés de fait</li>
            <li>Entreprises unipersonnelles à responsabilité limitée (EURL/SARLU) sous conditions</li>
          </ul>
        </section>

        {/* Base imposable */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Comment est calculée la base imposable ?</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Principe général</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            L'IS est calculé sur le <strong>bénéfice net fiscal</strong>, déterminé à partir du résultat comptable 
            selon le référentiel <strong>SYSCOHADA Révisé</strong> (Système Comptable OHADA), après réintégrations et déductions fiscales.
          </p>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Déductions admises</h3>
          <p className="text-gray-700 leading-relaxed mb-2">Les charges déductibles comprennent généralement :</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Frais généraux nécessités par l'exploitation</li>
            <li>Amortissements des immobilisations selon les taux réglementaires</li>
            <li>Provisions justifiées et probables</li>
            <li>Charges de personnel et cotisations sociales obligatoires (INAM, CNSS)</li>
            <li>Impôts et taxes professionnels (hors IS lui-même)</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Réintégrations fiscales courantes</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Amendes, pénalités et majorations fiscales</li>
            <li>Dépenses somptuaires non justifiées</li>
            <li>Fraction non déductible des frais de véhicules de tourisme</li>
            <li>Provisions non conformes aux critères fiscaux</li>
            <li>Charges sans justificatifs probants</li>
          </ul>
        </section>

        {/* Obligations déclaratives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Quelles sont les obligations déclaratives ?</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Déclaration annuelle</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chaque société assujettie doit déposer une <strong>déclaration de résultat fiscal</strong> accompagnée de :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Liasse fiscale SYSCOHADA Révisé</strong> : états financiers normalisés</li>
            <li><strong>Tableau de détermination du résultat fiscal</strong> : passage du résultat comptable au résultat fiscal</li>
            <li><strong>Relevé détaillé des amortissements et provisions</strong></li>
            <li><strong>État des charges à réintégrer</strong></li>
            <li><strong>Procès-verbal d'approbation des comptes</strong> par l'Assemblée Générale</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-900">
              <strong>💡 Bon à savoir :</strong> La date limite de dépôt et les modalités précises sont fixées par 
              le Code Général des Impôts et peuvent varier selon l'exercice fiscal de l'entreprise (calendaire ou décalé).
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-3 mt-8">Acomptes provisionnels</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour lisser la charge fiscale, les sociétés doivent généralement verser des <strong>acomptes provisionnels</strong> 
            au cours de l'exercice, calculés sur la base de l'IS de l'année précédente. Ces acomptes sont :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Versés selon un calendrier fixé par l'OTR</li>
            <li>Imputables sur l'IS dû au titre de l'exercice en cours</li>
            <li>Remboursables en cas d'excédent (sous conditions)</li>
          </ul>
        </section>

        {/* Télédéclaration */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">La télédéclaration avec e-services OTR</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depuis la digitalisation des services fiscaux togolais, les entreprises doivent utiliser la plateforme 
            <strong> e-services.otr.tg</strong> pour :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Déposer leurs déclarations fiscales en ligne</li>
            <li>Télépayer l'IS et les acomptes provisionnels</li>
            <li>Consulter leur situation fiscale en temps réel</li>
            <li>Télécharger leurs attestations fiscales</li>
            <li>Suivre le traitement de leurs dossiers</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <p className="text-green-900">
              <strong>✅ Avantage :</strong> La télédéclaration simplifie les démarches, réduit les délais de traitement 
              et permet une meilleure traçabilité des obligations fiscales.
            </p>
          </div>
        </section>

        {/* Pénalités */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Sanctions en cas de non-respect</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le non-respect des obligations liées à l'IS expose les sociétés à des <strong>sanctions fiscales</strong> prévues 
            par le Livre des Procédures Fiscales :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Pénalités de retard :</strong> appliquées en cas de dépôt tardif de la déclaration</li>
            <li><strong>Majorations d'impôt :</strong> en cas de sous-évaluation du bénéfice imposable</li>
            <li><strong>Intérêts de retard :</strong> calculés sur les montants payés hors délai</li>
            <li><strong>Amendes fiscales :</strong> pour défaut de déclaration ou manquements graves</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
            <p className="text-red-900">
              <strong>⚠️ Attention :</strong> Les contrôles fiscaux de l'OTR sont de plus en plus fréquents. 
              Une comptabilité rigoureuse et des déclarations exactes sont indispensables pour éviter les redressements.
            </p>
          </div>
        </section>

        {/* Exonérations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Exonérations et avantages fiscaux</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Code des Investissements</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le Togo propose des <strong>incitations fiscales</strong> pour attirer les investissements, notamment via le Code des Investissements 
            qui peut prévoir :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Exonérations totales ou partielles d'IS pour une durée déterminée</li>
            <li>Réductions de taux pour les secteurs prioritaires</li>
            <li>Crédits d'impôt pour l'emploi de main-d'œuvre locale</li>
            <li>Amortissements accélérés pour certains équipements</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Zones franches et zones spéciales</h3>
          <p className="text-gray-700 leading-relaxed">
            Les entreprises installées dans les <strong>zones franches industrielles</strong> ou les <strong>plateformes industrielles d'Adétikopé</strong> 
            peuvent bénéficier de régimes fiscaux préférentiels. Ces avantages sont accordés sous conditions d'agrément par l'API-Togo 
            (Agence de Promotion des Investissements).
          </p>
        </section>

        {/* Différences SARL vs SA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">IS : différences entre SARL et SA</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bien que les SARL et SA soient toutes deux assujetties à l'IS, quelques spécificités existent :
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 my-6">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Critère</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">SARL</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">SA</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="px-6 py-4 border-b font-medium">Assujettissement</td>
                  <td className="px-6 py-4 border-b">Obligatoire</td>
                  <td className="px-6 py-4 border-b">Obligatoire</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium">Taux d'IS</td>
                  <td className="px-6 py-4 border-b">Taux de droit commun</td>
                  <td className="px-6 py-4 border-b">Taux de droit commun</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-medium">Obligations comptables</td>
                  <td className="px-6 py-4 border-b">SYSCOHADA Révisé obligatoire</td>
                  <td className="px-6 py-4 border-b">SYSCOHADA Révisé + audit légal si seuils dépassés</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b font-medium">Gouvernance</td>
                  <td className="px-6 py-4 border-b">Gérant(s), AG des associés</td>
                  <td className="px-6 py-4 border-b">CA, DG, AG des actionnaires</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bonnes pratiques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Bonnes pratiques pour la conformité IS</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Tenir une comptabilité rigoureuse
              </h3>
              <p className="text-gray-700">
                Respecter scrupuleusement le SYSCOHADA Révisé, conserver tous les justificatifs (factures, contrats, relevés bancaires) 
                et effectuer des rapprochements bancaires mensuels.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">⏰</span>
                Respecter les échéances
              </h3>
              <p className="text-gray-700">
                Établir un calendrier fiscal annuel incluant les dates de dépôt de déclaration, de paiement des acomptes et de tenue 
                des assemblées générales. Anticiper les délais pour éviter les pénalités.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🔍</span>
                Préparer les contrôles fiscaux
              </h3>
              <p className="text-gray-700">
                Archiver méthodiquement tous les documents comptables et fiscaux pendant au moins 10 ans. 
                En cas de contrôle OTR, être en mesure de justifier chaque écriture comptable.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-3">🤝</span>
                Se faire accompagner
              </h3>
              <p className="text-gray-700">
                Faire appel à un expert-comptable agréé au Togo et/ou un conseil fiscal spécialisé dans le droit OHADA 
                pour optimiser légalement votre charge fiscale et sécuriser vos déclarations.
              </p>
            </div>
          </div>
        </section>

        {/* Ressources officielles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Ressources officielles et contacts</h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Office Togolais des Recettes (OTR)</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Site web :</strong> <a href="https://www.otr.tg" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.otr.tg</a></li>
              <li><strong>Plateforme e-services :</strong> <a href="https://e-services.otr.tg" className="text-blue-600 hover:underline" target="_blank" rel="noopener">e-services.otr.tg</a></li>
              <li><strong>DIMANA (télédéclaration) :</strong> <a href="https://dimana.otr.tg" className="text-blue-600 hover:underline" target="_blank" rel="noopener">dimana.otr.tg</a></li>
              <li><strong>Documents officiels :</strong> Code Général des Impôts, Livre des Procédures Fiscales, formulaires (téléchargeables sur otr.tg)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 mt-6">Autres institutions</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Ministère de l'Économie et des Finances :</strong> <a href="https://www.finances.gouv.tg" className="text-blue-600 hover:underline" target="_blank" rel="noopener">finances.gouv.tg</a></li>
              <li><strong>API-Togo (investissements) :</strong> Pour informations sur les avantages fiscaux sectoriels</li>
              <li><strong>Guichet Unique (CFCIM) :</strong> Accompagnement création d'entreprise et formalités</li>
            </ul>
          </div>
        </section>

        {/* CTA INTEGRA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mt-12">
          <h2 className="text-3xl font-bold mb-4">Besoin d'un accompagnement fiscal personnalisé ?</h2>
          <p className="text-lg mb-6 opacity-90">
            INTEGRA PARTNERS accompagne les entreprises togolaises et internationales dans leur conformité fiscale, 
            l'optimisation légale de leur IS et la sécurisation de leurs relations avec l'OTR.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Audit fiscal et revue de conformité IS</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Assistance aux contrôles OTR et contentieux fiscal</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Optimisation fiscale (Code des Investissements, conventions fiscales internationales)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Gestion déléguée des obligations fiscales (déclarations, acomptes, télépaiements)</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/fr/contact" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Demander un audit fiscal
            </a>
            <a 
              href="/fr/services/structuration-juridico-fiscale" 
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-white text-center"
            >
              Nos services fiscaux
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          title="Questions Fréquentes sur l'IS au Togo"
          description="Réponses aux questions les plus posées sur l'Impôt sur les Sociétés"
          pageUrl="https://integrapartners.com/fr/togo/fiscalite-otr/is"
          faqs={[
            {
              question: "Quel est le taux d'IS au Togo en 2026 ?",
              answer: "<p>Le taux standard de l'IS au Togo est de <strong>27%</strong> pour les sociétés dont le chiffre d'affaires annuel dépasse 100 millions FCFA. Les PME avec un CA inférieur à 100 millions FCFA bénéficient d'un taux réduit de <strong>12%</strong>. Certains secteurs stratégiques (zones franches, investissements prioritaires) peuvent bénéficier d'exonérations temporaires.</p>"
            },
            {
              question: "Quand doit-on payer l'IS au Togo ?",
              answer: "<p>L'IS se paie en 4 acomptes trimestriels représentant 25% de l'IS de l'année N-1 :</p><ul><li>1er acompte : avant le 15 avril</li><li>2e acompte : avant le 15 juillet</li><li>3e acompte : avant le 15 octobre</li><li>4e acompte : avant le 15 janvier N+1</li></ul><p>La déclaration annuelle et la régularisation sont à effectuer avant le <strong>30 avril N+1</strong> via la plateforme e-services OTR.</p>"
            },
            {
              question: "Comment calculer la base imposable à l'IS ?",
              answer: "<p>La base imposable est constituée du <strong>bénéfice net comptable</strong> (produits - charges), ajusté par :</p><ul><li><strong>Réintégrations</strong> : charges non déductibles (amendes, dépenses personnelles, provisions non justifiées)</li><li><strong>Déductions</strong> : plus-values réinvesties, déficits reportables (3 ans), amortissements différés</li></ul><p>Résultat fiscal = Résultat comptable + Réintégrations - Déductions. L'IS = Résultat fiscal × 27% (ou 12% PME).</p>"
            },
            {
              question: "Quelles sont les charges déductibles de l'IS ?",
              answer: "<p>Sont déductibles les charges :</p><ul><li><strong>Engagées</strong> dans l'intérêt de l'exploitation</li><li><strong>Réelles</strong> et justifiées par pièces comptables</li><li><strong>Comptabilisées</strong> durant l'exercice concerné</li></ul><p>Exemples : salaires + charges sociales, loyers professionnels, amortissements, frais financiers, fournitures, sous-traitance. <strong>Non déductibles</strong> : amendes fiscales, IS lui-même, dépenses somptuaires (frais de chasse, yachts).</p>"
            },
            {
              question: "Que risque-t-on en cas de retard de paiement de l'IS ?",
              answer: "<p>Les sanctions OTR pour retard incluent :</p><ul><li><strong>Majoration de retard</strong> : 10% du montant dû</li><li><strong>Intérêts moratoires</strong> : 1% par mois de retard (12%/an)</li><li><strong>Pénalités déclaration tardive</strong> : 10% à 50% selon gravité</li></ul><p>En cas de contrôle fiscal, le redressement peut aller jusqu'à 100% du montant éludé. Une non-déclaration pendant 2 ans peut entraîner une radiation RCCM. Régularisez rapidement via e-services OTR.</p>"
            },
            {
              question: "Peut-on reporter un déficit fiscal au Togo ?",
              answer: "<p>Oui, les déficits fiscaux constatés sont reportables sur les <strong>3 exercices suivants</strong> (limitation OHADA). Le déficit N-1 est d'abord imputé, puis N-2, puis N-3. Les déficits non imputés après 3 ans sont définitivement perdus. Important : conservez les liasses fiscales justificatives pour prouver l'origine des déficits en cas de contrôle OTR.</p>"
            },
            {
              question: "Comment télédéclarer l'IS sur la plateforme OTR ?",
              answer: "<p>Procédure de télédéclaration IS :</p><ol><li>Connexion sur <a href='https://eservices.otr.tg' target='_blank' class='text-blue-600 underline'>eservices.otr.tg</a> avec identifiant IFU</li><li>Accès menu « Déclarations » → « Déclaration Annuelle IS »</li><li>Remplir liasse fiscale (bilan, compte de résultat, annexes)</li><li>Calculer IS dû (automatique si données correctes)</li><li>Déduire acomptes déjà payés</li><li>Valider et générer avis d'imposition</li><li>Paiement en ligne (carte, mobile money) ou bordereau banque</li></ol><p>Deadline : 30 avril chaque année.</p>"
            },
            {
              question: "INTEGRA PARTNERS peut-il gérer ma conformité IS ?",
              answer: "<p>Oui, INTEGRA accompagne les entreprises sur :</p><ul><li>Calcul et optimisation de l'IS (déductions légales, niches fiscales)</li><li>Télédéclarations mensuelles (DIMANA) et annuelles (IS)</li><li>Gestion des acomptes trimestriels</li><li>Audit fiscal préventif (détection anomalies avant contrôle OTR)</li><li>Défense en cas de redressement fiscal</li></ul><p><a href='/fr/contact' class='text-blue-600 underline font-semibold'>Contactez-nous</a> pour un diagnostic fiscal gratuit de votre entreprise.</p>"
            }
          ]}
        />
      </div>
    </div>
  )
}
