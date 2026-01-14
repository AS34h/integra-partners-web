import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://integrapartners.com'
  
  // Articles ressources
  const articles = [
    {
      slug: 'cas-transformation-digitale-institution-publique',
      lastModified: '2025-10-05',
    },
    {
      slug: 'etude-positionnement-marches-emergents',
      lastModified: '2025-11-20',
    },
    {
      slug: 'guide-conformite-ohada-2026',
      lastModified: '2025-12-15',
    },
  ]
  
  // Guides Togo
  const togoGuides = [
    {
      slug: '/fr/togo',
      lastModified: '2026-01-11',
      priority: 0.8,
    },
    // Sub-hubs Togo
    {
      slug: '/fr/togo/creer-une-entreprise',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/togo/fiscalite-otr',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/togo/juridique-ohada',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/togo/banques-et-transferts',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/togo/conformite-et-risques',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    // Guides Créer Entreprise
    {
      slug: '/fr/togo/creer-une-entreprise/sarl-sarlu',
      lastModified: '2026-01-11',
      priority: 0.8,
    },
    {
      slug: '/fr/togo/creer-une-entreprise/sa',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/togo/creer-une-entreprise/rccm-et-immatriculation',
      lastModified: '2026-01-11',
      priority: 0.8,
    },
    {
      slug: '/fr/togo/creer-une-entreprise/statuts-et-formalites',
      lastModified: '2026-01-12',
      priority: 0.7,
    },
    // Guides Fiscalité OTR
    {
      slug: '/fr/togo/fiscalite-otr/tva',
      lastModified: '2026-01-11',
      priority: 0.8,
    },
    {
      slug: '/fr/togo/fiscalite-otr/is',
      lastModified: '2026-01-12',
      priority: 0.85, // High traffic
    },
    {
      slug: '/fr/togo/fiscalite-otr/dimana',
      lastModified: '2026-01-12',
      priority: 0.85, // High volume
    },
    {
      slug: '/fr/togo/fiscalite-otr/penalites-et-controles',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    // Guides Juridique OHADA
    {
      slug: '/fr/togo/juridique-ohada/statuts',
      lastModified: '2026-01-11',
      priority: 0.8,
    },
    {
      slug: '/fr/togo/juridique-ohada/pacte-dassocies',
      lastModified: '2026-01-11',
      priority: 0.8,
    },
    {
      slug: '/fr/togo/juridique-ohada/gouvernance-et-pv',
      lastModified: '2026-01-12',
      priority: 0.7,
    },
    // Banques et Transferts
    {
      slug: '/fr/togo/banques-et-transferts/ouvrir-compte-bancaire-professionnel',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/togo/banques-et-transferts/transferts-internationaux',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/togo/banques-et-transferts/cartes-credit-paiements',
      lastModified: '2026-01-12',
      priority: 0.7,
    },
    {
      slug: '/fr/togo/banques-et-transferts/securite-bancaire-fraudes',
      lastModified: '2026-01-12',
      priority: 0.7,
    },
    // Conformité et Risques
    {
      slug: '/fr/togo/conformite-et-risques/conformite-reglementaire',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/togo/conformite-et-risques/gestion-risques-operationnels',
      lastModified: '2026-01-12',
      priority: 0.7,
    },
    {
      slug: '/fr/togo/conformite-et-risques/litiges-contentieux-ohada',
      lastModified: '2026-01-12',
      priority: 0.7,
    },
    {
      slug: '/fr/togo/conformite-et-risques/alertes-signaux-faibles',
      lastModified: '2026-01-12',
      priority: 0.7,
    },
  ]
  
  // Pages Diaspora
  const diasporaPages = [
    {
      slug: '/fr/diaspora',
      lastModified: '2026-01-11',
      priority: 0.85,
    },
    // France
    {
      slug: '/fr/diaspora/france',
      lastModified: '2026-01-11',
      priority: 0.8,
    },
    {
      slug: '/fr/diaspora/france/creer-une-entreprise-au-togo',
      lastModified: '2026-01-11',
      priority: 0.85,
    },
    {
      slug: '/fr/diaspora/france/investir-au-togo',
      lastModified: '2026-01-11',
      priority: 0.85,
    },
    {
      slug: '/fr/diaspora/france/transferts-bancaires-vers-le-togo',
      lastModified: '2026-01-11',
      priority: 0.85,
    },
    // Canada
    {
      slug: '/fr/diaspora/canada',
      lastModified: '2026-01-12',
      priority: 0.8,
    },
    {
      slug: '/fr/diaspora/canada/creer-une-entreprise-au-togo',
      lastModified: '2026-01-12',
      priority: 0.8,
    },
    {
      slug: '/fr/diaspora/canada/investir-au-togo',
      lastModified: '2026-01-12',
      priority: 0.8,
    },
    // États-Unis
    {
      slug: '/fr/diaspora/etats-unis',
      lastModified: '2026-01-12',
      priority: 0.8,
    },
    {
      slug: '/fr/diaspora/etats-unis/creer-une-entreprise-au-togo',
      lastModified: '2026-01-12',
      priority: 0.8,
    },
    {
      slug: '/fr/diaspora/etats-unis/investir-au-togo',
      lastModified: '2026-01-12',
      priority: 0.8,
    },
    // Allemagne
    {
      slug: '/fr/diaspora/allemagne',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/diaspora/allemagne/creer-une-entreprise-au-togo',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/diaspora/allemagne/investir-au-togo',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    // Suisse
    {
      slug: '/fr/diaspora/suisse',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/diaspora/suisse/creer-une-entreprise-au-togo',
      lastModified: '2026-01-12',
      priority: 0.75,
    },
    {
      slug: '/fr/diaspora/suisse/investir-au-togo',
      lastModified: '2026-01-12',
      priority: 0.8,
    },
  ]
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/fr/cabinet`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/methode-integra`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/nos-standards`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/services/conseil-strategique`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/services/structuration-juridico-fiscale`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/services/gouvernance-et-pilotage`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/services/securisation-institutionnelle`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/services/diaspora-et-investisseurs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/services/creation-dentreprise`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/services/gestion-documentaire`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/domaines`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/domaines/gouvernance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/domaines/strategie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/domaines/capital-humain`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/domaines/transformation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/ressources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Articles individuels
    ...articles.map(article => ({
      url: `${baseUrl}/fr/ressources/${article.slug}`,
      lastModified: new Date(article.lastModified),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Guides Togo (high priority - money pages)
    ...togoGuides.map(guide => ({
      url: `${baseUrl}${guide.slug}`,
      lastModified: new Date(guide.lastModified),
      changeFrequency: 'monthly' as const,
      priority: guide.priority,
    })),
    // Pages Diaspora (high conversion - international)
    ...diasporaPages.map(page => ({
      url: `${baseUrl}${page.slug}`,
      lastModified: new Date(page.lastModified),
      changeFrequency: 'monthly' as const,
      priority: page.priority,
    })),
    // Analyses (think tank)
    {
      url: `${baseUrl}/fr/analyses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/fr/analyses/gouvernance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/analyses/fiscalite`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/analyses/investissement`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/analyses/diaspora`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/analyses/conformite-et-risque`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Études de cas
    {
      url: `${baseUrl}/fr/etudes-de-cas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // Ressources sous-sections
    {
      url: `${baseUrl}/fr/ressources/modeles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/fr/ressources/checklists`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/fr/ressources/glossaire`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/fr/diagnostic-ims`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/fr/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/fr/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
