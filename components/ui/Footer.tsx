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
      <div className="container mx-auto pt-64 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* BLOC 1 — IDENTITÉ INSTITUTIONNELLE */}
          <div className="lg:pr-8 lg:border-r lg:border-gray-800 text-center">
            <h3 className="font-heading text-lg text-white mb-6 tracking-tight whitespace-nowrap">
              INTEGRA PARTNERS
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-300">
              Cabinet de conseil stratégique souverain
            </p>
            <p className="text-xs mb-3 text-gray-500 leading-relaxed">
              Togo · Afrique de l'Ouest · International
            </p>
            <p className="text-xs mb-6 text-gray-500 italic leading-relaxed">
              Structuration • Gouvernance • Sécurisation • Pilotage
            </p>
            <div className="text-sm text-gray-400 space-y-2">
              <p className="text-xs leading-relaxed">Lomé, Togo</p>
              <p className="text-xs leading-relaxed">Intervention internationale (Europe · Canada · États-Unis)</p>
            </div>
          </div>
          
          {/* COLONNE 2 — CABINET & MÉTHODE */}
          <div className="lg:pl-8 text-center">
            <h4 className="text-sm font-bold uppercase text-gray-200 mb-6 tracking-wide">
              Cabinet & Méthode
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/fr/cabinet" className="text-sm hover:text-white transition-colors text-gray-400">
                  Cabinet
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
            </ul>
          </div>
          
          {/* COLONNE 3 — SERVICES */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-8 text-center">
            <h4 className="text-sm font-bold uppercase text-gray-200 mb-6 tracking-wide">
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
          
          {/* COLONNE 4 — ANALYSES & RESSOURCES */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-8 text-center">
            <h4 className="text-sm font-bold uppercase text-gray-200 mb-6 tracking-wide">
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
        </div>
        
        {/* BANDE INFÉRIEURE */}
        <div className="
          pt-12
          border-t border-gray-800
          flex flex-col md:flex-row
          justify-between
          items-center
          gap-2
          text-[10px]
        ">
          {/* Mentions légales & conformité */}
          <div className="flex flex-wrap items-center gap-2 text-gray-600">
            <Link href="/fr/mentions-legales" className="hover:text-gray-400 transition-colors">
              Mentions légales
            </Link>
            <span className="text-gray-800">·</span>
            <Link href="/fr/politique-confidentialite" className="hover:text-gray-400 transition-colors">
              Confidentialité
            </Link>
            <span className="text-gray-800">·</span>
            <Link href="/fr/protection-donnees" className="hover:text-gray-400 transition-colors">
              Données
            </Link>
            <span className="text-gray-800">·</span>
            <Link href="/fr/cookies" className="hover:text-gray-400 transition-colors">
              Cookies
            </Link>
          </div>
          
          {/* Langues */}
          <div className="flex items-center gap-2 text-gray-600">
            <Link href="/fr" className="hover:text-gray-400 transition-colors" hrefLang="fr">
              FR
            </Link>
            <span className="text-gray-800">|</span>
            <Link href="/en" className="hover:text-gray-400 transition-colors" hrefLang="en">
              EN
            </Link>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-600">
            © {currentYear} INTEGRA PARTNERS
          </p>
        </div>
      </div>
    </footer>
  )
}
