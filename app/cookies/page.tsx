'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const cookiesData = [
  {
    category: 'Cookies Essentiels',
    description: 'Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés dans nos systèmes.',
    cookies: [
      {
        name: 'session_token',
        purpose: 'Gestion de la session utilisateur et authentification',
        duration: 'Session',
        type: 'First-party'
      },
      {
        name: 'cookie_consent',
        purpose: 'Enregistrement de vos préférences en matière de cookies',
        duration: '12 mois',
        type: 'First-party'
      },
      {
        name: 'csrf_token',
        purpose: 'Protection contre les attaques CSRF (Cross-Site Request Forgery)',
        duration: 'Session',
        type: 'First-party'
      }
    ]
  },
  {
    category: 'Cookies Fonctionnels',
    description: 'Ces cookies permettent d\'améliorer les fonctionnalités et la personnalisation du site.',
    cookies: [
      {
        name: 'language_preference',
        purpose: 'Mémorisation de votre préférence linguistique',
        duration: '12 mois',
        type: 'First-party'
      },
      {
        name: 'ui_preferences',
        purpose: 'Sauvegarde de vos préférences d\'interface (thème, affichage)',
        duration: '6 mois',
        type: 'First-party'
      }
    ]
  },
  {
    category: 'Cookies Analytiques',
    description: 'Ces cookies nous permettent de mesurer l\'audience et d\'analyser la performance du site.',
    cookies: [
      {
        name: '_ga',
        purpose: 'Google Analytics - Identification des visiteurs uniques',
        duration: '24 mois',
        type: 'Third-party (Google)'
      },
      {
        name: '_gid',
        purpose: 'Google Analytics - Distinction des utilisateurs',
        duration: '24 heures',
        type: 'Third-party (Google)'
      },
      {
        name: '_gat',
        purpose: 'Google Analytics - Limitation du taux de requêtes',
        duration: '1 minute',
        type: 'Third-party (Google)'
      }
    ]
  },
  {
    category: 'Cookies Marketing',
    description: 'Ces cookies sont utilisés pour suivre les visiteurs à travers les sites web et afficher des publicités pertinentes.',
    cookies: [
      {
        name: 'linkedin_analytics',
        purpose: 'LinkedIn Insight Tag - Mesure des conversions et remarketing',
        duration: '180 jours',
        type: 'Third-party (LinkedIn)'
      }
    ]
  }
];

const browsers = [
  {
    name: 'Google Chrome',
    links: [
      { text: 'Gérer les cookies sur Chrome', url: 'https://support.google.com/chrome/answer/95647' }
    ]
  },
  {
    name: 'Mozilla Firefox',
    links: [
      { text: 'Gérer les cookies sur Firefox', url: 'https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences' }
    ]
  },
  {
    name: 'Apple Safari',
    links: [
      { text: 'Gérer les cookies sur Safari', url: 'https://support.apple.com/fr-fr/guide/safari/sfri11471/mac' }
    ]
  },
  {
    name: 'Microsoft Edge',
    links: [
      { text: 'Gérer les cookies sur Edge', url: 'https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
    ]
  }
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Politique de Cookies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Transparence et contrôle sur l'utilisation des cookies sur notre site
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Dernière mise à jour : 11 janvier 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="prose max-w-none">
            <div className="bg-gold-light/10 border-l-4 border-gold p-6 mb-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-4">Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-700 leading-relaxed">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
                lors de la visite d'un site web. Il permet au site de mémoriser des informations sur votre visite, 
                comme votre langue préférée et d'autres paramètres, afin de faciliter votre prochaine visite et 
                de rendre le site plus utile.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy-dark mb-4">Notre engagement</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              INTEGRA PARTNERS s'engage à respecter votre vie privée et à vous offrir un contrôle total sur 
              l'utilisation des cookies. Nous utilisons les cookies uniquement dans le respect de la réglementation 
              applicable, notamment le Règlement Général sur la Protection des Données (RGPD) et les directives 
              de l'Union Africaine sur la protection des données personnelles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Types de cookies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-navy-dark mb-12">Types de cookies utilisés</h2>
            
            <div className="space-y-8">
              {cookiesData.map((category, idx) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="bg-navy-dark text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nom du cookie</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Finalité</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Durée</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {category.cookies.map((cookie, cookieIdx) => (
                          <tr key={cookieIdx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-mono text-navy-dark">{cookie.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{cookie.purpose}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{cookie.duration}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{cookie.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gestion des cookies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-navy-dark mb-8">Comment gérer vos préférences de cookies</h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h3 className="text-2xl font-bold text-navy-dark mb-4">1. Paramètres de notre site</h3>
              <p className="text-gray-700 mb-4">
                Vous pouvez à tout moment modifier vos préférences de cookies directement sur notre site en 
                cliquant sur le lien "Gérer les cookies" présent en bas de chaque page.
              </p>
              <button className="bg-navy-dark text-white px-6 py-3 rounded-lg hover:bg-navy-light transition-colors">
                Gérer mes préférences
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h3 className="text-2xl font-bold text-navy-dark mb-6">2. Paramètres de votre navigateur</h3>
              <p className="text-gray-700 mb-6">
                Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. Voici les liens 
                vers les pages d'aide des principaux navigateurs :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {browsers.map((browser) => (
                  <div key={browser.name} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-navy-dark mb-2">{browser.name}</h4>
                    {browser.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold-dark underline text-sm block"
                      >
                        {link.text} →
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold-light/10 border-l-4 border-gold p-6">
              <h3 className="text-xl font-bold text-navy-dark mb-3">⚠️ Important</h3>
              <p className="text-gray-700">
                Le refus des cookies essentiels peut empêcher l'accès à certaines parties du site et 
                dégrader votre expérience de navigation. Les cookies fonctionnels, analytiques et marketing 
                peuvent être désactivés sans impact sur les fonctionnalités de base.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookies tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-navy-dark mb-8">Cookies tiers et liens externes</h2>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                Notre site peut contenir des liens vers des sites tiers (réseaux sociaux, partenaires). 
                Ces sites ont leurs propres politiques de cookies que nous ne contrôlons pas. Nous vous 
                recommandons de consulter leurs politiques respectives :
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-3">Google Analytics</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Outil d'analyse d'audience utilisé pour comprendre comment les visiteurs utilisent notre site.
                  </p>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-dark text-sm underline"
                  >
                    Politique de confidentialité Google →
                  </a>
                  <br />
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-dark text-sm underline"
                  >
                    Module de désactivation Google Analytics →
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-3">LinkedIn</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Plateforme professionnelle utilisée pour le partage de contenu et l'analyse de conversion.
                  </p>
                  <a
                    href="https://www.linkedin.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-dark text-sm underline"
                  >
                    Politique de confidentialité LinkedIn →
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy-dark mb-3">Réseaux sociaux</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Boutons de partage qui peuvent déposer des cookies lors de votre visite.
                  </p>
                  <p className="text-xs text-gray-600">
                    Consultez les politiques de confidentialité de chaque plateforme sociale
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vos droits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-navy-dark mb-8">Vos droits</h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <p className="text-gray-700 mb-6">
                Conformément à la réglementation applicable, vous disposez des droits suivants :
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-navy-dark mb-2">✓ Droit d'accès</h3>
                  <p className="text-sm text-gray-700">
                    Vous pouvez demander quels cookies sont utilisés et quelles données sont collectées.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">✓ Droit d'opposition</h3>
                  <p className="text-sm text-gray-700">
                    Vous pouvez vous opposer au dépôt de cookies non essentiels à tout moment.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">✓ Droit de retrait du consentement</h3>
                  <p className="text-sm text-gray-700">
                    Vous pouvez retirer votre consentement aussi facilement que vous l'avez donné.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">✓ Droit à l'effacement</h3>
                  <p className="text-sm text-gray-700">
                    Vous pouvez demander la suppression des données collectées via les cookies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold mb-6">Questions sur notre politique de cookies ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant 
              l'utilisation des cookies sur notre site.
            </p>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="mb-2">
                <strong>Email :</strong>{' '}
                <a href="mailto:privacy@integrapartners.com" className="text-gold hover:text-gold-light underline">
                  privacy@integrapartners.com
                </a>
              </p>
              <p className="mb-2">
                <strong>Adresse :</strong> Lomé, Togo
              </p>
              <p>
                <strong>Délégué à la Protection des Données :</strong>{' '}
                <a href="mailto:dpo@integrapartners.com" className="text-gold hover:text-gold-light underline">
                  dpo@integrapartners.com
                </a>
              </p>
            </div>

            <p className="text-sm text-gray-400 mt-8">
              Cette politique peut être mise à jour périodiquement. La date de dernière mise à jour 
              est indiquée en haut de cette page.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
