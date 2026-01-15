import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbPath {
  name: string
  url: string
}

interface BreadcrumbProps {
  paths: BreadcrumbPath[]
  showHome?: boolean
}

/**
 * Composant Breadcrumb avec Schema.org BreadcrumbList
 * Génère automatiquement le fil d'Ariane UI + structured data JSON-LD
 * 
 * @example
 * <Breadcrumb paths={[
 *   { name: 'Togo', url: '/fr/togo' },
 *   { name: 'Fiscalité OTR', url: '/fr/togo/fiscalite-otr' },
 *   { name: 'IS', url: '/fr/togo/fiscalite-otr/is' }
 * ]} />
 */
export function Breadcrumb({ paths, showHome = true }: BreadcrumbProps) {
  const baseUrl = 'https://integrapartners.com'

  // Construire le schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      // Ajouter Home si demandé
      ...(showHome ? [{
        '@type': 'ListItem',
        'position': 1,
        'name': 'Accueil',
        'item': baseUrl
      }] : []),
      // Ajouter tous les paths
      ...paths.map((path, index) => ({
        '@type': 'ListItem',
        'position': showHome ? index + 2 : index + 1,
        'name': path.name,
        'item': `${baseUrl}${path.url}`
      }))
    ]
  }

  const allPaths = showHome
    ? [{ name: 'Accueil', url: '/' }, ...paths]
    : paths

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* UI Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {allPaths.map((path, index) => {
            const isLast = index === allPaths.length - 1

            return (
              <li key={path.url} className="flex items-center gap-2">
                {index === 0 && showHome ? (
                  <Link
                    href={path.url}
                    className="flex items-center gap-1 hover:text-primary-600 transition-colors"
                  >
                    <Home className="w-4 h-4" />
                    <span className="sr-only sm:not-sr-only">{path.name}</span>
                  </Link>
                ) : (
                  <>
                    {!isLast ? (
                      <Link
                        href={path.url}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {path.name}
                      </Link>
                    ) : (
                      <span className="font-medium text-gray-900" aria-current="page">
                        {path.name}
                      </span>
                    )}
                  </>
                )}

                {!isLast && (
                  <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

/**
 * Hook pour générer automatiquement les paths breadcrumb depuis pathname
 * 
 * @example
 * const paths = useBreadcrumbPaths('/fr/togo/fiscalite-otr/is')
 * // Returns: [
 * //   { name: 'Togo', url: '/fr/togo' },
 * //   { name: 'Fiscalité OTR', url: '/fr/togo/fiscalite-otr' },
 * //   { name: 'IS', url: '/fr/togo/fiscalite-otr/is' }
 * // ]
 */
export function useBreadcrumbPaths(pathname: string): BreadcrumbPath[] {
  const segments = pathname.split('/').filter(Boolean)

  // Mapping des slugs vers noms lisibles
  const nameMap: Record<string, string> = {
    'fr': 'Français',
    'togo': 'Togo',
    'fiscalite-otr': 'Fiscalité OTR',
    'is': 'Impôt sur les Sociétés',
    'dimana': 'DIMANA',
    'tva': 'TVA',
    'creer-une-entreprise': 'Créer une Entreprise',
    'sarl-sarlu': 'SARL / SARLU',
    'rccm-et-immatriculation': 'RCCM & Immatriculation',
    'sa': 'Société Anonyme',
    'statuts-et-formalites': 'Statuts & Formalités',
    'juridique-ohada': 'Juridique OHADA',
    'statuts': 'Statuts',
    'pacte-dassocies': 'Pacte d\'Associés',
    'gouvernance-et-pv': 'Gouvernance & PV',
    'banques-et-transferts': 'Banques & Transferts',
    'conformite-et-risques': 'Conformité & Risques',
    'services': 'Services',
    'diaspora': 'Diaspora',
    'analyses': 'Analyses',
    'cabinet': 'Cabinet',
    'diagnostic-ims': 'Diagnostic IMS',
    'nos-standards': 'Nos Standards',
  }

  const paths: BreadcrumbPath[] = []
  let currentPath = ''

  segments.forEach((segment, index) => {
    // Skip 'fr' dans les paths
    if (segment === 'fr') return

    currentPath += `/${segment}`
    const name = nameMap[segment] || segment.split('-').map(w =>
      w.charAt(0).toUpperCase() + w.slice(1)
    ).join(' ')

    paths.push({
      name,
      url: `/fr${currentPath}`
    })
  })

  return paths
}
