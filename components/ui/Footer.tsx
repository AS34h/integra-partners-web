import Link from 'next/link'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links?: FooterLink[]
  content?: React.ReactNode
}

export interface FooterProps {
  /**
   * Colonnes du footer
   */
  columns?: FooterColumn[]
  
  /**
   * Texte du copyright
   */
  copyright?: string
  
  /**
   * Langues disponibles
   */
  languages?: { code: string; label: string }[]
  
  /**
   * Variante de style
   * @default 'full'
   */
  variant?: 'full' | 'simple'
  
  /**
   * Classes CSS additionnelles
   */
  className?: string
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'INTEGRA PARTNERS',
    content: (
      <>
        <p className="text-body-m mb-4">
          Cabinet de conseil stratégique souverain
        </p>
        <p className="text-caption">
          Lomé, Togo<br />
          contact@integrapartners.com
        </p>
      </>
    )
  },
  {
    title: 'Navigation',
    links: [
      { label: 'Cabinet', href: '/cabinet' },
      { label: 'Méthode', href: '/methode-integra' },
      { label: 'Domaines', href: '/domaines' },
      { label: 'Ressources', href: '/ressources' },
    ]
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Confidentialité', href: '/confidentialite' },
      { label: 'Cookies', href: '/cookies' },
    ]
  },
  {
    title: 'Standards',
    content: (
      <ul className="space-y-2 text-caption">
        <li>Conformité OHADA</li>
        <li>Déontologie conseil</li>
        <li>Certifications ISO</li>
      </ul>
    )
  },
]

const defaultLanguages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

export function Footer({
  columns = defaultColumns,
  copyright = `© ${new Date().getFullYear()} INTEGRA PARTNERS. Tous droits réservés.`,
  languages = defaultLanguages,
  variant = 'full',
  className = ''
}: FooterProps) {
  if (variant === 'simple') {
    return (
      <footer className={`
        bg-gray-950
        text-gray-400
        py-12
        ${className}
      `.replace(/\s+/g, ' ').trim()}>
        <div className="container mx-auto">
          <div className="
            flex flex-col md:flex-row
            justify-between
            items-center
            gap-6
          ">
            <div>
              <h3 className="font-heading text-h4 text-white mb-2">
                INTEGRA PARTNERS
              </h3>
              <p className="text-caption">
                Cabinet de conseil stratégique souverain
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="text-caption hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-caption hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link href="/contact" className="text-caption hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            
            <p className="text-caption">{copyright}</p>
          </div>
        </div>
      </footer>
    )
  }
  
  return (
    <footer className={`
      bg-gray-950
      text-gray-400
      py-16
      ${className}
    `.replace(/\s+/g, ' ').trim()}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className={`
                ${index === 0 ? 'font-heading text-h4' : 'text-label uppercase'}
                text-white
                mb-4
              `.replace(/\s+/g, ' ').trim()}>
                {column.title}
              </h3>
              
              {column.links ? (
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-body-m hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                column.content
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="
          pt-8
          border-t border-gray-800
          flex flex-col md:flex-row
          justify-between
          items-center
          gap-4
        ">
          <p className="text-caption">{copyright}</p>
          
          <div className="flex items-center gap-4">
            {languages.map((lang, index) => (
              <span key={lang.code} className="flex items-center gap-4">
                <Link
                  href={`/${lang.code}`}
                  className="text-caption hover:text-white transition-colors"
                  hrefLang={lang.code}
                >
                  {lang.label}
                </Link>
                {index < languages.length - 1 && (
                  <span className="text-gray-700">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
