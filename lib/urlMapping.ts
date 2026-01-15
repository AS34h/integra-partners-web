// lib/urlMapping.ts
export const URL_MAPPING = {
  // Institution
  'cabinet': 'firm',
  'methode-integra': 'integra-method',
  'diagnostic-ims': 'ims-diagnostic',
  'nos-standards': 'standards',
  'contact': 'contact',
  'mentions-legales': 'legal-notice',
  'politique-confidentialite': 'privacy-policy',

  // Services
  'services': 'services',
  'conseil-strategique': 'strategic-advisory',
  'structuration-juridico-fiscale': 'legal-tax-structuring',
  'gouvernance-et-pilotage': 'governance-steering',
  'securisation-institutionnelle': 'institutional-safeguarding',
  'diaspora-et-investisseurs': 'diaspora-investors',
  'creation-dentreprise': 'company-formation',
  'gestion-documentaire': 'document-management',

  // Togo
  'togo': 'togo',
  'creer-une-entreprise': 'start-a-business',
  'fiscalite-otr': 'taxation',
  'juridique-ohada': 'legal-ohada',
  'banques-et-transferts': 'banks-transfers',
  'conformite-et-risques': 'compliance-risks',

  // Diaspora
  'diaspora': 'diaspora',
  'france': 'france',
  'allemagne': 'germany',
  'suisse': 'switzerland',
  'canada': 'canada',
  'etats-unis': 'united-states',
  'creer-une-entreprise-au-togo': 'start-business-in-togo',
  'investir-au-togo': 'invest-in-togo',
  'transferts-bancaires-vers-le-togo': 'bank-transfers-to-togo',

  // Analyses
  'analyses': 'insights',
  'gouvernance': 'governance',
  'fiscalite': 'taxation',
  'investissement': 'investment',
  'conformite-et-risque': 'compliance-risk',

  // Études de cas
  'etudes-de-cas': 'case-studies',

  // Ressources
  'ressources': 'resources',
  'modeles': 'templates',
  'checklists': 'checklists',
  'glossaire': 'glossary',
}

// Helper function to translate URL segment
export function translateSegment(segment: string, locale: 'fr' | 'en'): string {
  if (locale === 'fr') {
    // Find the French key from English value
    const entry = Object.entries(URL_MAPPING).find(([_, en]) => en === segment)
    return entry ? entry[0] : segment
  }
  // Default to English
  return URL_MAPPING[segment as keyof typeof URL_MAPPING] || segment
}

// Helper function to translate entire path
export function translatePath(path: string, locale: 'fr' | 'en'): string {
  const segments = path.split('/').filter(Boolean)
  const translatedSegments = segments.map(segment => translateSegment(segment, locale))
  return '/' + translatedSegments.join('/')
}
