// Script pour générer metadata complètes pour toutes les pages manquantes
// Ce fichier liste toutes les pages nécessitant metadata + templates optimisés

export const PAGES_SANS_METADATA = {
  // ULTRA PRIORITÉ (High traffic attendu)
  critiques: [
    {
      path: '/fr/togo/fiscalite-otr/is/page.tsx',
      title: 'Impôt sur les Sociétés (IS) au Togo : Guide Complet 2026 | INTEGRA',
      description: 'Guide complet IS Togo : taux d\'imposition, base imposable, obligations déclaratives, télédéclaration OTR, sanctions et exonérations. Framework OHADA/UEMOA.',
      keywords: ['is togo', 'impôt sociétés togo', 'fiscalité togo', 'otr togo', 'déclaration is', 'ohada fiscal', 'taux is togo'],
      traffic: 'HIGH'
    },
    {
      path: '/fr/togo/fiscalite-otr/dimana/page.tsx',
      title: 'DIMANA Togo : Déclaration Mensuelle Fiscale (TVA, RAS, INAM) 2026',
      description: 'Tout sur DIMANA : déclaration mensuelle TVA, retenues salaires (INAM, CNSS, IRPP), RAS, procédure télédéclaration, échéances et sanctions OTR.',
      keywords: ['dimana togo', 'déclaration mensuelle togo', 'tva togo', 'dimana otr', 'retenues salaires togo', 'télédéclaration fiscale'],
      traffic: 'HIGH'
    },
    {
      path: '/fr/cabinet/page.tsx',
      title: 'INTEGRA PARTNERS : Cabinet de Conseil Stratégique Africain | À propos',
      description: 'Cabinet de conseil indépendant spécialisé en stratégie, gouvernance et transformation institutionnelle en Afrique. Expertise OHADA, méthode propriétaire 6 phases.',
      keywords: ['cabinet conseil afrique', 'conseil stratégique togo', 'gouvernance ohada', 'transformation institutionnelle', 'consulting afrique francophone'],
      traffic: 'MEDIUM'
    }
  ],
  
  // HAUTE PRIORITÉ (Pages institutionnelles + Togo sub-hubs)
  hautePriorite: [
    {
      path: '/fr/diagnostic-ims/page.tsx',
      title: 'Diagnostic IMS INTEGRA : Évaluation Stratégique 360° | Gratuit',
      description: 'Diagnostic institutionnel gratuit en 45 min : évaluation gouvernance, maturité stratégique, risques opérationnels. Rapport synthèse + recommandations personnalisées.',
      keywords: ['diagnostic entreprise', 'audit stratégique', 'évaluation gouvernance', 'diagnostic gratuit togo', 'analyse institutionnelle'],
      traffic: 'MEDIUM'
    },
    {
      path: '/fr/nos-standards/page.tsx',
      title: 'Standards EEAT INTEGRA : Expertise, Autorité, Fiabilité | Méthodologie',
      description: 'Nos standards institutionnels : équipe experts certifiés, méthodologie 6 phases éprouvée, déontologie conseil, confidentialité RGPD. Garantie qualité.',
      keywords: ['standards conseil', 'eeat', 'méthodologie consulting', 'déontologie cabinet conseil', 'expertise institutionnelle'],
      traffic: 'LOW'
    },
    {
      path: '/fr/togo/creer-une-entreprise/page.tsx',
      title: 'Créer une Entreprise au Togo : Guide Complet SARL, SA, RCCM | 2026',
      description: 'Hub création entreprise Togo : SARL/SARLU, SA, immatriculation RCCM, statuts OHADA, formalités juridiques. Délais, coûts, procédures complètes.',
      keywords: ['créer entreprise togo', 'sarl togo', 'rccm togo', 'création société togo', 'immatriculation togo', 'statuts ohada'],
      traffic: 'HIGH'
    },
    {
      path: '/fr/togo/fiscalite-otr/page.tsx',
      title: 'Fiscalité OTR Togo : TVA, IS, DIMANA, Pénalités | Guide Complet 2026',
      description: 'Hub fiscalité Togo : TVA, Impôt sur les Sociétés (IS), déclarations DIMANA, pénalités et contrôles OTR. Conformité fiscale complète.',
      keywords: ['fiscalité togo', 'otr togo', 'tva togo', 'is togo', 'dimana', 'contrôles fiscaux togo', 'conformité fiscale'],
      traffic: 'HIGH'
    },
    {
      path: '/fr/togo/juridique-ohada/page.tsx',
      title: 'Droit OHADA Togo : Statuts, Pactes, Gouvernance | Guide Juridique 2026',
      description: 'Hub juridique OHADA : rédaction statuts, pactes d\'associés, gouvernance entreprise, PV assemblées. Conformité droit des sociétés Togo.',
      keywords: ['ohada togo', 'droit sociétés togo', 'statuts sarl', 'pacte associés', 'gouvernance ohada', 'juridique togo'],
      traffic: 'MEDIUM'
    },
    {
      path: '/fr/togo/banques-et-transferts/page.tsx',
      title: 'Banques Togo : Comptes Pro, Transferts Internationaux | Guide 2026',
      description: 'Guide bancaire Togo : ouvrir compte professionnel (Ecobank, UBA, Orabank), transferts internationaux, cartes crédit, sécurité bancaire.',
      keywords: ['banque togo', 'compte bancaire togo', 'transfert international togo', 'ecobank togo', 'uba togo', 'services bancaires'],
      traffic: 'MEDIUM'
    },
    {
      path: '/fr/togo/conformite-et-risques/page.tsx',
      title: 'Conformité & Risques au Togo : Réglementaire, Opérationnel | Guide 2026',
      description: 'Hub conformité Togo : conformité réglementaire OHADA/UEMOA, gestion risques opérationnels, litiges contentieux, alertes signaux faibles.',
      keywords: ['conformité togo', 'gestion risques togo', 'réglementation ohada', 'contentieux togo', 'audit conformité'],
      traffic: 'LOW'
    }
  ],
  
  // MOYENNE PRIORITÉ (Pages services)
  services: [
    {
      path: '/fr/services/conseil-strategique/page.tsx',
      title: 'Conseil Stratégique : Diagnostic, Positionnement, Plans Stratégiques | INTEGRA',
      description: 'Conseil stratégique sur-mesure : diagnostic 360°, définition trajectoires long terme, plans stratégiques actionnables. Méthode INTEGRA 6 phases.',
      keywords: ['conseil stratégique', 'diagnostic stratégique', 'plan stratégique', 'positionnement marché', 'stratégie entreprise afrique'],
      traffic: 'MEDIUM'
    },
    {
      path: '/fr/services/structuration-juridico-fiscale/page.tsx',
      title: 'Structuration Juridico-Fiscale : Optimisation, Conformité OHADA | INTEGRA',
      description: 'Structuration juridique et fiscale : optimisation holdings, conformité OHADA/UEMOA, due diligence acquisitions. Expertise réglementaire.',
      keywords: ['structuration juridique', 'optimisation fiscale', 'conformité ohada', 'due diligence', 'holding afrique'],
      traffic: 'LOW'
    },
    {
      path: '/fr/services/gouvernance-et-pilotage/page.tsx',
      title: 'Gouvernance & Pilotage : Conseils d\'Administration, Organes | INTEGRA',
      description: 'Renforcement gouvernance : structuration CA/CODIR, règlements intérieurs, tableaux de bord décisionnels. Standards institutionnels.',
      keywords: ['gouvernance entreprise', 'conseil administration', 'pilotage stratégique', 'tableaux bord', 'gouvernance ohada'],
      traffic: 'LOW'
    },
    {
      path: '/fr/services/securisation-institutionnelle/page.tsx',
      title: 'Sécurisation Institutionnelle : Conformité, Risques, Contrôles | INTEGRA',
      description: 'Sécurisation institutions : conformité réglementaire, gestion risques, contrôles internes, préparation audits. Protection patrimoine.',
      keywords: ['sécurisation institutionnelle', 'conformité réglementaire', 'gestion risques', 'contrôles internes', 'audit préparation'],
      traffic: 'LOW'
    },
    {
      path: '/fr/services/diaspora-et-investisseurs/page.tsx',
      title: 'Services Diaspora : Investir, Créer Entreprise Togo | INTEGRA',
      description: 'Accompagnement diaspora : création entreprise à distance, investissements sécurisés, transferts bancaires, gestion déléguée patrimoine.',
      keywords: ['diaspora togo', 'investir togo diaspora', 'créer entreprise distance', 'investissement afrique', 'transfert diaspora'],
      traffic: 'MEDIUM'
    },
    {
      path: '/fr/services/creation-dentreprise/page.tsx',
      title: 'Création d\'Entreprise Togo : Pack Complet SARL, SA | INTEGRA',
      description: 'Packs création entreprise clé en main : SARL/SA, statuts, RCCM, fiscalité, comptes bancaires. Création en 7-10 jours.',
      keywords: ['création entreprise togo', 'pack création sarl', 'immatriculation express', 'statuts entreprise', 'création société'],
      traffic: 'MEDIUM'
    },
    {
      path: '/fr/services/gestion-documentaire/page.tsx',
      title: 'Gestion Documentaire : Archivage, Conformité, PV | INTEGRA',
      description: 'Gestion documentaire entreprise : archivage légal, PV assemblées, registres légaux, conformité OHADA. Conservation sécurisée.',
      keywords: ['gestion documentaire', 'archivage légal', 'pv assemblées', 'registres légaux', 'conformité documentaire'],
      traffic: 'LOW'
    }
  ],
  
  // PLACEHOLDERS TOGO (À metadata AVANT content)
  placeholdersTogo: [
    {
      path: '/fr/togo/creer-une-entreprise/sa/page.tsx',
      title: 'Créer une SA (Société Anonyme) au Togo : Capital, Gouvernance | 2026',
      description: 'Guide création SA Togo : capital minimum, organes (CA, DG, AG), différences vs SARL, actionnaires. Gouvernance OHADA. [Placeholder - contenu à venir]',
      keywords: ['sa togo', 'société anonyme togo', 'créer sa', 'capital sa togo', 'actionnaires', 'conseil administration'],
      traffic: 'MEDIUM'
    },
    {
      path: '/fr/togo/creer-une-entreprise/statuts-et-formalites/page.tsx',
      title: 'Statuts et Formalités Création Entreprise Togo | Guide OHADA 2026',
      description: 'Rédaction statuts et formalités création : mentions obligatoires, signature actes, enregistrement, publicité. Modèles OHADA. [À venir]',
      keywords: ['statuts entreprise togo', 'formalités création', 'modèle statuts', 'enregistrement société', 'publicité légale'],
      traffic: 'LOW'
    },
    {
      path: '/fr/togo/fiscalite-otr/penalites-et-controles/page.tsx',
      title: 'Pénalités Fiscales et Contrôles OTR Togo : Sanctions, Recours | 2026',
      description: 'Pénalités fiscales Togo : types contrôles OTR, sanctions retard, majorations, recours contentieux. Droits contribuable. [À venir]',
      keywords: ['pénalités fiscales togo', 'contrôles otr', 'sanctions fiscales', 'recours fiscal', 'contentieux fiscal'],
      traffic: 'MEDIUM'
    },
    {
      path: '/fr/togo/juridique-ohada/gouvernance-et-pv/page.tsx',
      title: 'Gouvernance et PV d\'Assemblées OHADA : AG, CA, Registres | Togo 2026',
      description: 'Gouvernance OHADA : convocation AG/CA, rédaction PV, registres légaux, quorum. Conformité droit des sociétés. [À venir]',
      keywords: ['gouvernance ohada', 'pv assemblées', 'conseil administration', 'ag extraordinaire', 'registres légaux'],
      traffic: 'LOW'
    }
  ],
  
  // DIASPORA (Toutes pages manquantes)
  diaspora: [
    {
      path: '/fr/diaspora/page.tsx',
      title: 'Diaspora Africaine : Investir, Créer Entreprise en Afrique | INTEGRA',
      description: 'Services diaspora : création entreprise à distance, investissements sécurisés, transferts, gestion patrimoine. France, Canada, USA, Allemagne, Suisse.',
      keywords: ['diaspora africaine', 'investir afrique diaspora', 'créer entreprise distance', 'diaspora togo', 'services diaspora'],
      traffic: 'MEDIUM'
    },
    // ... (continuer pour toutes pages Diaspora Canada, USA, Allemagne, Suisse)
  ]
}

// Template pour générer metadata optimisée SEO
export const generateMetadataTemplate = (pageData: typeof PAGES_SANS_METADATA.critiques[0]) => {
  return `
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${pageData.title}',
  description: '${pageData.description}',
  keywords: ${JSON.stringify(pageData.keywords)},
  openGraph: {
    title: '${pageData.title}',
    description: '${pageData.description}',
    type: 'article',
    locale: 'fr_FR',
    url: 'https://integrapartners.com${pageData.path.replace('/page.tsx', '')}',
    siteName: 'INTEGRA PARTNERS',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${pageData.title}',
    description: '${pageData.description}',
  },
  alternates: {
    canonical: 'https://integrapartners.com${pageData.path.replace('/page.tsx', '')}',
  },
}
`
}
