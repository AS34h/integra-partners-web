import Link from 'next/link'

export interface FooterProps {
  /**
   * Classes CSS additionnelles
   */
  className?: string
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`
      bg-gray-950
      text-gray-400
      ${className}
    `.replace(/\s+/g, ' ').trim()}>
      <div className="container mx-auto px-6 py-16">

        {/* EN-TÊTE DU FOOTER */}
        <div className="border-b border-gray-800 pb-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-heading text-3xl text-white mb-4 tracking-tight">
                INTEGRA PARTNERS
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-300 max-w-2xl">
                Cabinet de conseil stratégique souverain dédié à la structuration,
                la gouvernance et la sécurisation des organisations en Afrique et à l'international.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Togo · Afrique de l'Ouest · Europe · Amérique du Nord
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gray-900 text-gray-400 text-xs rounded-full">Structuration</span>
                <span className="px-4 py-2 bg-gray-900 text-gray-400 text-xs rounded-full">Gouvernance</span>
                <span className="px-4 py-2 bg-gray-900 text-gray-400 text-xs rounded-full">Sécurisation</span>
                <span className="px-4 py-2 bg-gray-900 text-gray-400 text-xs rounded-full">Pilotage</span>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Siège social</p>
                  <p className="text-sm text-gray-300">Lomé, République Togolaise</p>
                  <p className="text-xs text-gray-500">Intervention internationale</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contact</p>
                  <Link href="/fr/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Nous contacter
                  </Link>
                </div>
                <div>
                  <Link
                    href="/fr/diagnostic-ims"
                    className="inline-block px-6 py-3 bg-white text-gray-950 text-sm font-semibold rounded hover:bg-gray-200 transition-colors"
                  >
                    Démarrer votre diagnostic IMS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* BLOC 1 — À PROPOS */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white mb-6 tracking-wide">
              À propos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/fr/cabinet" className="text-sm hover:text-white transition-colors text-gray-400">
                  Notre cabinet
                </Link>
              </li>
              <li>
                <Link href="/fr/methode-integra" className="text-sm hover:text-white transition-colors text-gray-400">
                  Méthode INTEGRA
                </Link>
              </li>
              <li>
                <Link href="/fr/diagnostic-ims" className="text-sm hover:text-white transition-colors text-gray-400">
                  Diagnostic IMS
                </Link>
              </li>
              <li>
                <Link href="/fr/standards" className="text-sm hover:text-white transition-colors text-gray-400">
                  Nos standards
                </Link>
              </li>
              <li>
                <Link href="/fr/etudes-de-cas" className="text-sm hover:text-white transition-colors text-gray-400">
                  Études de cas
                </Link>
              </li>
              <li>
                <Link href="/fr/contact" className="text-sm hover:text-white transition-colors text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOC 2 — SERVICES */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white mb-6 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/fr/services/conseil-strategique" className="text-sm hover:text-white transition-colors text-gray-400">
                  Conseil stratégique
                </Link>
              </li>
              <li>
                <Link href="/fr/services/structuration-juridico-fiscale" className="text-sm hover:text-white transition-colors text-gray-400">
                  Structuration juridico-fiscale
                </Link>
              </li>
              <li>
                <Link href="/fr/services/gouvernance-pilotage" className="text-sm hover:text-white transition-colors text-gray-400">
                  Gouvernance & pilotage
                </Link>
              </li>
              <li>
                <Link href="/fr/services/securisation-institutionnelle" className="text-sm hover:text-white transition-colors text-gray-400">
                  Sécurisation institutionnelle
                </Link>
              </li>
              <li>
                <Link href="/fr/services/diaspora-investisseurs" className="text-sm hover:text-white transition-colors text-gray-400">
                  Diaspora & investisseurs
                </Link>
              </li>
              <li>
                <Link href="/fr/services/creation-entreprise" className="text-sm hover:text-white transition-colors text-gray-400">
                  Création d'entreprise
                </Link>
              </li>
              <li>
                <Link href="/fr/services/gestion-documentaire" className="text-sm hover:text-white transition-colors text-gray-400">
                  Gestion documentaire
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOC 3 — ANALYSES & RESSOURCES */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white mb-6 tracking-wide">
              Analyses & Ressources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/fr/analyses" className="text-sm hover:text-white transition-colors text-gray-400">
                  Centre d'analyses stratégiques
                </Link>
              </li>
              <li>
                <Link href="/fr/analyses/gouvernance-conformite" className="text-sm hover:text-white transition-colors text-gray-400">
                  Gouvernance & conformité
                </Link>
              </li>
              <li>
                <Link href="/fr/analyses/fiscalite-investissement" className="text-sm hover:text-white transition-colors text-gray-400">
                  Fiscalité & investissement
                </Link>
              </li>
              <li>
                <Link href="/fr/ressources" className="text-sm hover:text-white transition-colors text-gray-400">
                  Ressources & checklists
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOC 4 — SECTEURS D'ACTIVITÉ */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white mb-6 tracking-wide">
              Secteurs d'activité
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/fr/domaines" className="text-sm hover:text-white transition-colors text-gray-400">
                  Tous nos domaines
                </Link>
              </li>
              <li>
                <Link href="/fr/togo" className="text-sm hover:text-white transition-colors text-gray-400">
                  Expertise Togo
                </Link>
              </li>
              <li>
                <Link href="/fr/diaspora" className="text-sm hover:text-white transition-colors text-gray-400">
                  Accompagnement diaspora
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-500">
                  PME & ETI
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-500">
                  Investisseurs internationaux
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-500">
                  Organisations publiques
                </span>
              </li>
            </ul>
          </div>

          {/* BLOC 5 — INFORMATIONS LÉGALES */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white mb-6 tracking-wide">
              Informations légales
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/fr/mentions-legales" className="text-sm hover:text-white transition-colors text-gray-400">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/fr/politique-confidentialite" className="text-sm hover:text-white transition-colors text-gray-400">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/fr/protection-donnees" className="text-sm hover:text-white transition-colors text-gray-400">
                  Protection des données
                </Link>
              </li>
              <li>
                <Link href="/fr/cookies" className="text-sm hover:text-white transition-colors text-gray-400">
                  Gestion des cookies
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-500">
                  Conditions générales
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-500">
                  Code de déontologie
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BANDE INFÉRIEURE - COPYRIGHT & LANGUES */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-600">
              <p>© {currentYear} INTEGRA PARTNERS. Tous droits réservés.</p>
              <span className="hidden md:inline text-gray-800">|</span>
              <p className="text-gray-600">Cabinet de conseil stratégique — Lomé, Togo</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>Langues :</span>
                <Link href="/fr" className="hover:text-gray-400 transition-colors font-semibold" hrefLang="fr">
                  FR
                </Link>
                <span className="text-gray-800">|</span>
                <Link href="/en" className="hover:text-gray-400 transition-colors" hrefLang="en">
                  EN
                </Link>
                <span className="text-gray-800">|</span>
                <Link href="/de" className="hover:text-gray-400 transition-colors" hrefLang="de">
                  DE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
