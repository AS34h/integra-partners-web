'use client';

import { motion } from 'framer-motion';

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInImmediate}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Informations légales et réglementaires concernant INTEGRA PARTNERS
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Dernière mise à jour : 11 janvier 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInImmediate} className="prose max-w-none space-y-12">
            
            {/* Éditeur du site */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                1. Éditeur du site
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Raison sociale</h3>
                  <p className="text-gray-700">INTEGRA PARTNERS SARL</p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Forme juridique</h3>
                  <p className="text-gray-700">Société à Responsabilité Limitée (SARL)</p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Capital social</h3>
                  <p className="text-gray-700">10 000 000 FCFA</p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Numéro d'immatriculation</h3>
                  <p className="text-gray-700">Registre du Commerce et du Crédit Mobilier (RCCM) : TG-LOM-01-2024-A12-12345</p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Numéro d'identification fiscale</h3>
                  <p className="text-gray-700">NIF : 0123456789</p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Siège social</h3>
                  <p className="text-gray-700">
                    Boulevard du 13 Janvier<br />
                    Quartier des Affaires<br />
                    BP 1234, Lomé, Togo
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Contact</h3>
                  <p className="text-gray-700">
                    Téléphone : +228 XX XX XX XX<br />
                    Email : <a href="mailto:contact@integrapartners.com" className="text-gold hover:text-gold-dark underline">contact@integrapartners.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Directeur de la publication</h3>
                  <p className="text-gray-700">Le Gérant de la société INTEGRA PARTNERS SARL</p>
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                2. Hébergement du site
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Hébergeur</h3>
                  <p className="text-gray-700">Vercel Inc.</p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Adresse</h3>
                  <p className="text-gray-700">
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789<br />
                    États-Unis
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-navy-dark mb-2">Site web</h3>
                  <p className="text-gray-700">
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">
                      https://vercel.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                3. Propriété intellectuelle
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, vidéos, sons, logiciels, 
                  mise en page, bases de données) est la propriété exclusive d'INTEGRA PARTNERS, à l'exception des marques, 
                  logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                </p>

                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
                  du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable 
                  d'INTEGRA PARTNERS.
                </p>

                <p>
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée 
                  comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions de la législation togolaise 
                  et des accords OHADA (Organisation pour l'Harmonisation en Afrique du Droit des Affaires), notamment l'Acte 
                  uniforme portant organisation des sûretés.
                </p>

                <div className="bg-gold-light/10 border-l-4 border-gold p-4 mt-4">
                  <h3 className="font-bold text-navy-dark mb-2">Marques et logos</h3>
                  <p>
                    Les marques et logos figurant sur le site sont des marques déposées. Toute reproduction totale ou partielle 
                    de ces marques ou de ces logos, effectuée à partir des éléments du site sans l'autorisation expresse 
                    d'INTEGRA PARTNERS est donc prohibée.
                  </p>
                </div>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                4. Limitation de responsabilité
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  INTEGRA PARTNERS s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des 
                  informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, 
                  le contenu.
                </p>

                <p>
                  Toutefois, INTEGRA PARTNERS ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
                  mises à disposition sur ce site. En conséquence, INTEGRA PARTNERS décline toute responsabilité :
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site ;</li>
                  <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des 
                    informations mises à disposition sur le site ;</li>
                  <li>Pour tous dommages directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences, 
                    provoqués à raison de l'accès de quiconque au site ou de l'impossibilité d'y accéder ;</li>
                  <li>Pour les dommages pouvant résulter de l'utilisation du site ou de sites qui lui sont liés, et notamment 
                    de préjudices matériels, pertes de données ou de programmes, préjudices financiers.</li>
                </ul>

                <div className="bg-gold-light/10 border-l-4 border-gold p-4 mt-4">
                  <h3 className="font-bold text-navy-dark mb-2">Liens hypertextes</h3>
                  <p>
                    Le site peut contenir des liens hypertextes vers d'autres sites. INTEGRA PARTNERS n'exerce aucun contrôle 
                    sur ces sites et décline toute responsabilité quant à leur contenu, leur fonctionnement ou leur accès. 
                    L'existence de ces liens ne saurait constituer une validation des sites concernés ni de leur contenu.
                  </p>
                </div>
              </div>
            </div>

            {/* Protection des données */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                5. Protection des données personnelles
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Les informations concernant la collecte et le traitement de vos données personnelles sont détaillées dans 
                  notre <a href="/fr/politique-confidentialite" className="text-gold hover:text-gold-dark underline font-semibold">
                    Politique de Confidentialité
                  </a>.
                </p>

                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois togolaises applicables, 
                  vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles, 
                  ainsi que d'un droit de limitation et d'opposition au traitement.
                </p>

                <p>
                  Pour exercer ces droits, vous pouvez contacter notre Délégué à la Protection des Données :
                </p>

                <div className="bg-navy-dark/5 rounded-lg p-4">
                  <p className="font-semibold">Email : <a href="mailto:dpo@integrapartners.com" className="text-gold hover:text-gold-dark underline">dpo@integrapartners.com</a></p>
                  <p className="font-semibold">Courrier : DPO INTEGRA PARTNERS, BP 1234, Lomé, Togo</p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                6. Cookies
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Ce site utilise des cookies pour améliorer votre expérience de navigation, réaliser des statistiques de 
                  visites et vous proposer des contenus adaptés.
                </p>

                <p>
                  Pour en savoir plus sur les cookies que nous utilisons et comment les gérer, veuillez consulter notre{' '}
                  <a href="/fr/cookies" className="text-gold hover:text-gold-dark underline font-semibold">
                    Politique de Cookies
                  </a>.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-navy-dark mb-6 border-b border-gray-200 pb-3">
                7. Droit applicable et juridiction compétente
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Les présentes mentions légales sont régies par le droit togolais et les actes uniformes de l'OHADA 
                  (Organisation pour l'Harmonisation en Afrique du Droit des Affaires).
                </p>

                <p>
                  En cas de litige relatif à l'utilisation du site ou à l'interprétation des présentes mentions légales, 
                  les parties s'efforceront de trouver une solution amiable. À défaut d'accord amiable dans un délai de 
                  30 jours, le litige sera porté devant les tribunaux compétents de Lomé, Togo.
                </p>

                <div className="bg-gold-light/10 border-l-4 border-gold p-4 mt-4">
                  <h3 className="font-bold text-navy-dark mb-2">Médiation</h3>
                  <p>
                    Conformément aux principes de résolution alternative des conflits promus par l'OHADA, les parties 
                    peuvent recourir à une médiation avant toute action judiciaire. Le médiateur sera désigné d'un commun 
                    accord ou, à défaut, par le Centre de Médiation et d'Arbitrage de Lomé.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-navy-dark text-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">
                8. Contact
              </h2>
              
              <div className="space-y-4">
                <p>
                  Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter :
                </p>

                <div className="bg-white/10 rounded-lg p-4">
                  <p className="mb-2">
                    <strong>Par email :</strong>{' '}
                    <a href="mailto:legal@integrapartners.com" className="text-gold hover:text-gold-light underline">
                      legal@integrapartners.com
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Par téléphone :</strong> +228 XX XX XX XX
                  </p>
                  <p>
                    <strong>Par courrier :</strong><br />
                    INTEGRA PARTNERS SARL<br />
                    Service Juridique<br />
                    BP 1234, Lomé, Togo
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
