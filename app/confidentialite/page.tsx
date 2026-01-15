'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-700-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Protection et traitement de vos données personnelles
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Dernière mise à jour : 11 janvier 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="prose max-w-none">
            <div className="bg-gold-light/10 border-l-4 border-gold p-6 mb-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-4">Notre engagement</h2>
              <p className="text-gray-700 leading-relaxed">
                INTEGRA PARTNERS accorde la plus grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et 
                protégeons vos informations personnelles conformément au Règlement Général sur la Protection des 
                Données (RGPD) et aux législations nationales applicables en Afrique.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-navy-dark mb-4">Principes fondamentaux</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="text-gold text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-navy-dark mb-1">Transparence</h4>
                    <p className="text-sm text-gray-700">Clarté sur l'utilisation de vos données</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-gold text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-navy-dark mb-1">Minimisation</h4>
                    <p className="text-sm text-gray-700">Collecte limitée au strict nécessaire</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-gold text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-navy-dark mb-1">Sécurité</h4>
                    <p className="text-sm text-gray-700">Protection maximale de vos informations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-gold text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-navy-dark mb-1">Contrôle</h4>
                    <p className="text-sm text-gray-700">Maîtrise totale sur vos données</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsable du traitement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                1. Responsable du traitement des données
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Le responsable du traitement de vos données personnelles est :
                </p>

                <div className="bg-slate-700-dark/5 rounded-lg p-6">
                  <p className="mb-2"><strong>Société :</strong> INTEGRA PARTNERS SARL</p>
                  <p className="mb-2"><strong>Adresse :</strong> Boulevard du 13 Janvier, BP 1234, Lomé, Togo</p>
                  <p className="mb-2">
                    <strong>Email :</strong>{' '}
                    <a href="mailto:privacy@integrapartners.com" className="text-gold hover:text-gold-dark underline">
                      privacy@integrapartners.com
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Délégué à la Protection des Données (DPO) :</strong>{' '}
                    <a href="mailto:dpo@integrapartners.com" className="text-gold hover:text-gold-dark underline">
                      dpo@integrapartners.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Données collectées */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                2. Données personnelles collectées
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-navy-dark mb-4">2.1. Données d'identification</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Nom et prénom</li>
                    <li>Adresse email professionnelle</li>
                    <li>Numéro de téléphone professionnel</li>
                    <li>Fonction et organisation</li>
                    <li>Pays et ville</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy-dark mb-4">2.2. Données de connexion</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Adresse IP</li>
                    <li>Type et version du navigateur</li>
                    <li>Système d'exploitation</li>
                    <li>Pages visitées et durée de visite</li>
                    <li>Date et heure de connexion</li>
                    <li>Données de localisation approximative</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy-dark mb-4">2.3. Données professionnelles</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Informations sur votre organisation</li>
                    <li>Secteur d'activité</li>
                    <li>Taille de l'organisation</li>
                    <li>Projets et besoins exprimés</li>
                    <li>Documents échangés dans le cadre de nos missions</li>
                  </ul>
                </div>

                <div className="bg-gold-light/10 border-l-4 border-gold p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Note :</strong> Nous ne collectons jamais de données sensibles (origine raciale ou ethnique, 
                    opinions politiques, convictions religieuses, données de santé) sans votre consentement explicite 
                    et seulement si cela est strictement nécessaire.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Finalités */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                3. Finalités et bases légales du traitement
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-navy-dark pl-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-2">Gestion des demandes de contact</h3>
                  <p className="text-gray-700 mb-2">
                    Traiter et répondre à vos demandes de diagnostic, d'information ou de contact.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Base légale :</strong> Consentement / Exécution de mesures précontractuelles
                  </p>
                </div>

                <div className="border-l-4 border-navy-dark pl-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-2">Exécution de nos missions</h3>
                  <p className="text-gray-700 mb-2">
                    Réaliser les prestations de conseil et d'accompagnement commandées par nos clients.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Base légale :</strong> Exécution du contrat
                  </p>
                </div>

                <div className="border-l-4 border-navy-dark pl-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-2">Communication et marketing</h3>
                  <p className="text-gray-700 mb-2">
                    Vous envoyer notre newsletter, nos publications et informations sur nos services (avec votre consentement).
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Base légale :</strong> Consentement
                  </p>
                </div>

                <div className="border-l-4 border-navy-dark pl-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-2">Analyse et amélioration</h3>
                  <p className="text-gray-700 mb-2">
                    Analyser l'utilisation de notre site pour améliorer nos services et votre expérience.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Base légale :</strong> Intérêt légitime
                  </p>
                </div>

                <div className="border-l-4 border-navy-dark pl-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-2">Obligations légales</h3>
                  <p className="text-gray-700 mb-2">
                    Respecter nos obligations comptables, fiscales et réglementaires.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Base légale :</strong> Obligation légale
                  </p>
                </div>

                <div className="border-l-4 border-navy-dark pl-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-2">Sécurité</h3>
                  <p className="text-gray-700 mb-2">
                    Prévenir la fraude, protéger nos systèmes et garantir la sécurité de nos services.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Base légale :</strong> Intérêt légitime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partage des données */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                4. Destinataires des données
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Vos données personnelles sont destinées exclusivement aux services internes d'INTEGRA PARTNERS 
                  et peuvent être communiquées aux catégories de destinataires suivants :
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold text-navy-dark mb-2">• Personnel autorisé</h3>
                    <p className="text-sm">
                      Nos collaborateurs habilités dans le cadre de leurs fonctions (consultants, équipe commerciale, 
                      service administratif).
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold text-navy-dark mb-2">• Prestataires techniques</h3>
                    <p className="text-sm">
                      Hébergement web (Vercel), outils d'analyse (Google Analytics), service d'emailing (sous-traitants), 
                      agissant en qualité de sous-traitants et soumis à nos instructions.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold text-navy-dark mb-2">• Partenaires commerciaux</h3>
                    <p className="text-sm">
                      Uniquement avec votre consentement préalable et pour des finalités spécifiques.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold text-navy-dark mb-2">• Autorités publiques</h3>
                    <p className="text-sm">
                      En cas d'obligation légale ou de réquisition judiciaire.
                    </p>
                  </div>
                </div>

                <div className="bg-gold-light/10 border-l-4 border-gold p-4 mt-6">
                  <p className="text-sm font-semibold text-navy-dark">
                    Nous ne vendons jamais vos données personnelles à des tiers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transferts internationaux */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                5. Transferts internationaux de données
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Certaines de vos données personnelles peuvent être transférées vers des pays situés en dehors 
                  de l'Union Africaine ou de l'Espace Économique Européen, notamment :
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>États-Unis :</strong> Pour l'hébergement web (Vercel) et l'analyse (Google Analytics)
                  </li>
                  <li>
                    <strong>Autres pays :</strong> Selon les outils utilisés pour nos missions
                  </li>
                </ul>

                <div className="bg-slate-700-dark/5 rounded-lg p-6 mt-6">
                  <h3 className="font-bold text-navy-dark mb-3">Garanties mises en place</h3>
                  <p className="mb-4">
                    Ces transferts sont encadrés par les garanties suivantes :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Clauses Contractuelles Types approuvées par la Commission Européenne</li>
                    <li>Mécanismes de certification (Privacy Shield successeur, certifications ISO)</li>
                    <li>Codes de conduite et certification des sous-traitants</li>
                    <li>Évaluation des risques pays par pays</li>
                  </ul>
                </div>

                <p className="text-sm italic mt-4">
                  Vous pouvez obtenir une copie des garanties mises en place en contactant notre DPO à{' '}
                  <a href="mailto:dpo@integrapartners.com" className="text-gold hover:text-gold-dark underline">
                    dpo@integrapartners.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Durée de conservation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                6. Durée de conservation
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Vos données personnelles sont conservées pendant la durée strictement nécessaire aux finalités 
                  pour lesquelles elles ont été collectées :
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-700-dark text-white">
                        <th className="px-4 py-3 text-left">Type de données</th>
                        <th className="px-4 py-3 text-left">Durée de conservation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-gray-700">Prospects (non-clients)</td>
                        <td className="px-4 py-3 text-gray-700">3 ans à compter du dernier contact</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Clients actifs</td>
                        <td className="px-4 py-3 text-gray-700">Durée de la relation contractuelle + 5 ans</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-gray-700">Documents comptables et fiscaux</td>
                        <td className="px-4 py-3 text-gray-700">10 ans (obligation légale)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Cookies analytiques</td>
                        <td className="px-4 py-3 text-gray-700">13 à 25 mois maximum</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-gray-700">Newsletter</td>
                        <td className="px-4 py-3 text-gray-700">Jusqu'à désinscription</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-gray-700">Logs de connexion</td>
                        <td className="px-4 py-3 text-gray-700">12 mois maximum</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-600 italic mt-4">
                  À l'issue de ces durées, vos données sont supprimées ou anonymisées de façon irréversible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sécurité */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                7. Sécurité des données
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  INTEGRA PARTNERS met en œuvre toutes les mesures techniques et organisationnelles appropriées 
                  pour garantir la sécurité et la confidentialité de vos données personnelles :
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-slate-700-dark/5 rounded-lg p-4">
                    <h3 className="font-bold text-navy-dark mb-2">🔒 Mesures techniques</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Chiffrement SSL/TLS (HTTPS)</li>
                      <li>• Chiffrement des données sensibles</li>
                      <li>• Pare-feu et systèmes anti-intrusion</li>
                      <li>• Sauvegardes régulières et sécurisées</li>
                      <li>• Mises à jour de sécurité régulières</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700-dark/5 rounded-lg p-4">
                    <h3 className="font-bold text-navy-dark mb-2">👥 Mesures organisationnelles</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Politique de sécurité stricte</li>
                      <li>• Formation du personnel</li>
                      <li>• Accès limités et tracés</li>
                      <li>• Clauses de confidentialité</li>
                      <li>• Audits de sécurité réguliers</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gold-light/10 border-l-4 border-gold p-4 mt-6">
                  <h3 className="font-bold text-navy-dark mb-2">En cas de violation de données</h3>
                  <p className="text-sm">
                    En cas de violation de données personnelles susceptible d'engendrer un risque élevé pour vos droits 
                    et libertés, nous nous engageons à vous en informer dans les meilleurs délais (72 heures maximum) 
                    et à notifier l'autorité de contrôle compétente conformément au RGPD.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vos droits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                8. Vos droits sur vos données
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold mb-6">
                  Conformément au RGPD et aux législations applicables, vous disposez des droits suivants :
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="font-bold text-navy-dark mb-2">✓ Droit d'accès</h3>
                    <p className="text-sm">
                      Obtenir la confirmation que vos données sont traitées et accéder à ces données.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="font-bold text-navy-dark mb-2">✓ Droit de rectification</h3>
                    <p className="text-sm">
                      Corriger vos données inexactes ou incomplètes.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="font-bold text-navy-dark mb-2">✓ Droit à l'effacement ("droit à l'oubli")</h3>
                    <p className="text-sm">
                      Demander la suppression de vos données dans certaines conditions (retrait du consentement, 
                      opposition au traitement, données non nécessaires).
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="font-bold text-navy-dark mb-2">✓ Droit à la limitation du traitement</h3>
                    <p className="text-sm">
                      Demander le gel temporaire du traitement de vos données dans certains cas.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="font-bold text-navy-dark mb-2">✓ Droit à la portabilité</h3>
                    <p className="text-sm">
                      Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine, 
                      et les transmettre à un autre responsable de traitement.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="font-bold text-navy-dark mb-2">✓ Droit d'opposition</h3>
                    <p className="text-sm">
                      Vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière 
                      ou pour le marketing direct.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="font-bold text-navy-dark mb-2">✓ Droit de retirer votre consentement</h3>
                    <p className="text-sm">
                      Retirer à tout moment votre consentement lorsque le traitement est fondé sur celui-ci.
                    </p>
                  </div>

                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="font-bold text-navy-dark mb-2">✓ Droit de définir des directives post-mortem</h3>
                    <p className="text-sm">
                      Définir des directives relatives au sort de vos données après votre décès.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-700-dark text-white rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">Comment exercer vos droits ?</h3>
                  <p className="mb-4">
                    Pour exercer l'un de ces droits, contactez notre Délégué à la Protection des Données :
                  </p>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="mb-2">
                      <strong>Par email :</strong>{' '}
                      <a href="mailto:dpo@integrapartners.com" className="text-gold hover:text-gold-light underline">
                        dpo@integrapartners.com
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Par courrier :</strong><br />
                      DPO INTEGRA PARTNERS<br />
                      BP 1234, Lomé, Togo
                    </p>
                    <p className="text-sm text-gray-300 mt-4">
                      Nous vous répondrons dans un délai maximum d'un mois à compter de la réception de votre demande.
                    </p>
                  </div>
                </div>

                <div className="bg-gold-light/10 border-l-4 border-gold p-4 mt-6">
                  <h3 className="font-bold text-navy-dark mb-2">Droit d'introduire une réclamation</h3>
                  <p className="text-sm">
                    Si vous estimez que le traitement de vos données personnelles constitue une violation de la 
                    réglementation, vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle 
                    compétente :
                  </p>
                  <p className="text-sm font-semibold mt-2">
                    Commission Nationale Informatique et Libertés (CNIL) ou autorité locale compétente
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                9. Cookies et technologies similaires
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Notre site utilise des cookies et des technologies similaires. Pour en savoir plus sur les cookies 
                  que nous utilisons, leurs finalités et comment les gérer, veuillez consulter notre{' '}
                  <Link href="/cookies" className="text-gold hover:text-gold-dark underline font-semibold">
                    Politique de Cookies
                  </Link>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modifications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                10. Modifications de la politique de confidentialité
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment, 
                  notamment pour l'adapter aux évolutions législatives, réglementaires ou jurisprudentielles, 
                  ou aux évolutions de nos services.
                </p>

                <p>
                  Toute modification substantielle vous sera notifiée par email ou par un avis visible sur notre 
                  site au moins 30 jours avant son entrée en vigueur. La date de dernière mise à jour est indiquée 
                  en haut de cette page.
                </p>

                <p className="text-sm italic">
                  Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la 
                  manière dont nous protégeons vos données.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-slate-700-dark text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold mb-6">Questions sur la protection de vos données ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant 
              la protection et le traitement de vos données personnelles.
            </p>
            
            <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-bold mb-3">Contact général</h3>
                  <p className="text-sm mb-2">
                    <a href="mailto:privacy@integrapartners.com" className="text-gold hover:text-gold-light underline">
                      privacy@integrapartners.com
                    </a>
                  </p>
                  <p className="text-sm">+228 XX XX XX XX</p>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Délégué à la Protection des Données</h3>
                  <p className="text-sm mb-2">
                    <a href="mailto:dpo@integrapartners.com" className="text-gold hover:text-gold-light underline">
                      dpo@integrapartners.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-300">Réponse sous 48h</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-gray-300">
                  <strong>Adresse postale :</strong><br />
                  INTEGRA PARTNERS - Service Protection des Données<br />
                  BP 1234, Lomé, Togo
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Link href="/mentions-legales">
                <span className="text-gold hover:text-gold-light underline text-sm">Mentions légales</span>
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/cookies">
                <span className="text-gold hover:text-gold-light underline text-sm">Politique de cookies</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
