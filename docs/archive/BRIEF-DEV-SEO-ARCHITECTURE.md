# 📋 BRIEF DÉVELOPPEUR - ARCHITECTURE SEO & ANTI-CANNIBALISATION

## SECTION CRITIQUE : ARCHITECTURE URL & ANTI-CANNIBALISATION

### **Règles absolues à implémenter**

#### 1. Structure URL stricte

**Français (FR)** - Slugs français
```
/fr/togo/creer-une-entreprise/sarl-sarlu/
/fr/services/conseil-strategique/
/fr/diaspora/france/investir-au-togo/
/fr/analyses/gouvernance/conseil-administration-ohada/
```

**Anglais (EN)** - Slugs anglais
```
/en/togo/start-a-business/sarl-sarlu/
/en/services/strategic-advisory/
/en/diaspora/france/invest-in-togo/
/en/insights/governance/board-of-directors-ohada/
```

**Mapping 1:1 via `lib/urlMapping.ts`**
- Toutes les traductions de segments d'URL centralisées
- Fonction `translatePath()` pour conversion automatique
- Utilisation obligatoire du composant `InternalLink`

#### 2. Canonical + Hreflang systématique

**Chaque page DOIT inclure dans `<head>` :**

```tsx
// app/[locale]/layout.tsx ou page.tsx
export function generateMetadata({ params }): Metadata {
  const { locale } = params
  const canonicalUrl = `https://integrapartners.org/${locale}${pathname}`
  
  return {
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'fr-FR': `https://integrapartners.org/fr${frPath}`,
        'en': `https://integrapartners.org/en${enPath}`,
        'x-default': `https://integrapartners.org/fr${frPath}`,
      }
    }
  }
}
```

**Règle x-default** : Toujours pointer vers la version française

#### 3. Indexation contrôlée

**Pages principales** (`index: true, follow: true`)
```tsx
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  }
}
```
- Toutes les pages de contenu
- Pages services
- Pages analyses (hub + articles)
- Pages diaspora
- Pages Togo

**Pagination** (`index: false, follow: true`)
```tsx
// app/[locale]/analyses/[category]/page/[page]/page.tsx
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  }
}
```
- Toutes les pages paginées
- Évite le duplicate content

**Jamais indexable**
- Pages de tags
- Pages d'aperçu/preview
- API routes
- Pages admin/Sanity

#### 4. Validation anti-cannibalisation

**Fonction `validateNoCannibalisation()` dans Sanity Studio**

```typescript
// Appelée avant publication
const validation = await validateNoCannibalisation(
  targetKeyword: "créer une SARL au Togo",
  currentSlug: "creer-sarl-togo-2026",
  category: "togo"
)

if (!validation.valid) {
  // Bloquer la publication
  throw new Error(validation.error)
}
```

**Dashboard de suivi des KW ciblés**
```typescript
// Route: /admin/seo-dashboard
const duplicates = await getDuplicateKeywords()
// Affiche tous les mots-clés ciblés par plusieurs articles
```

**Règles de cannibalisation**
- 1 mot-clé = 1 article par catégorie
- Alert si KW déjà utilisé dans même catégorie
- Suggestion de mots-clés alternatifs

#### 5. Internal Linking

**Composant `InternalLink` obligatoire**
```tsx
import { InternalLink } from '@/components/InternalLink'

// ✅ Bon
<InternalLink href="/cabinet">Notre cabinet</InternalLink>
// → /fr/cabinet (si locale = fr)
// → /en/firm (si locale = en)

// ❌ Mauvais
<Link href="/fr/cabinet">Notre cabinet</Link>
// → Ne s'adapte pas à la locale
```

**Tracking des liens internes**
- Logger tous les liens internes pour audit
- Identifier les pages orphelines
- Optimiser le maillage interne

#### 6. Sitemap multi-sections

**Structure de sitemap indexé**
```xml
<!-- /sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex>
  <sitemap>
    <loc>https://integrapartners.org/sitemap-pages.xml</loc>
    <lastmod>2026-01-12</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://integrapartners.org/sitemap-services.xml</loc>
    <lastmod>2026-01-12</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://integrapartners.org/sitemap-togo.xml</loc>
    <lastmod>2026-01-12</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://integrapartners.org/sitemap-diaspora.xml</loc>
    <lastmod>2026-01-12</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://integrapartners.org/sitemap-analyses.xml</loc>
    <lastmod>2026-01-12</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://integrapartners.org/sitemap-resources.xml</loc>
    <lastmod>2026-01-12</lastmod>
  </sitemap>
</sitemapindex>
```

**Implémentation Next.js**
```typescript
// app/sitemap.xml/route.ts
export async function GET() {
  const sitemaps = [
    { url: '/sitemap-pages.xml', lastmod: new Date() },
    { url: '/sitemap-services.xml', lastmod: new Date() },
    { url: '/sitemap-togo.xml', lastmod: new Date() },
    { url: '/sitemap-diaspora.xml', lastmod: new Date() },
    { url: '/sitemap-analyses.xml', lastmod: new Date() },
    { url: '/sitemap-resources.xml', lastmod: new Date() },
  ]
  
  return new Response(generateSitemapIndex(sitemaps), {
    headers: { 'Content-Type': 'application/xml' }
  })
}
```

#### 7. Robots.txt strict

**Fichier `/public/robots.txt`**
```
User-agent: *
Allow: /

# Bloquer les routes API et admin
Disallow: /api/
Disallow: /sanity/
Disallow: /_next/
Disallow: /admin/

# Bloquer la pagination (éviter duplicate content)
Disallow: /fr/analyses/*/page/
Disallow: /en/insights/*/page/
Disallow: /fr/ressources/*/page/
Disallow: /en/resources/*/page/

# Bloquer les pages de tags
Disallow: /fr/tags/
Disallow: /en/tags/

# Bloquer les previews
Disallow: /preview/

# Sitemaps
Sitemap: https://integrapartners.org/sitemap.xml
Sitemap: https://integrapartners.org/sitemap-pages.xml
Sitemap: https://integrapartners.org/sitemap-services.xml
Sitemap: https://integrapartners.org/sitemap-togo.xml
Sitemap: https://integrapartners.org/sitemap-diaspora.xml
Sitemap: https://integrapartners.org/sitemap-analyses.xml
Sitemap: https://integrapartners.org/sitemap-resources.xml

# Crawl-delay for good measure
Crawl-delay: 1
```

---

## CHECKLIST DÉVELOPPEUR

### Avant toute publication

- [ ] Canonical URL défini
- [ ] Hreflang FR + EN + x-default configuré
- [ ] X-default pointe vers version FR
- [ ] Metadata robots approprié (`index: true/false`)
- [ ] Validation anti-cannibalisation passée
- [ ] Slug respecte les conventions (pas d'accents pour EN)
- [ ] Tous les liens internes utilisent `InternalLink`
- [ ] Meta title ≤ 60 caractères
- [ ] Meta description ≤ 160 caractères
- [ ] Image featured avec alt text
- [ ] Sitemap mis à jour automatiquement
- [ ] Robots.txt à jour

### Maintenance continue

- [ ] Audit mensuel des KW dupliqués
- [ ] Vérification des pages orphelines
- [ ] Analyse du maillage interne
- [ ] Monitoring des erreurs 404
- [ ] Vérification des redirections
- [ ] Test des hreflang tags
- [ ] Validation des canonical URLs
- [ ] Performance des sitemaps

---

## OUTILS & MONITORING

### Dashboard SEO Admin
```
/admin/seo-dashboard
├─ Vue d'ensemble des KW ciblés
├─ Détection des cannibalisations
├─ Pages sans meta description
├─ Pages orphelines (0 liens internes)
├─ Liens cassés
└─ Performance globale
```

### API Endpoints
```
/api/seo/validate-keyword?keyword=xxx&category=xxx
/api/seo/duplicate-keywords
/api/seo/report?articleId=xxx
/api/seo/orphan-pages
```

### Tests automatisés
```bash
npm run seo:validate        # Valider tous les articles
npm run seo:duplicates      # Détecter les KW dupliqués
npm run seo:orphans         # Trouver les pages orphelines
npm run seo:meta            # Vérifier les meta tags
```

---

**Version** : 1.0  
**Date** : 12 janvier 2026  
**Statut** : En production
