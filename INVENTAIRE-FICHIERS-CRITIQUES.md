# 📋 INVENTAIRE COMPLET - FICHIERS CRITIQUES DU PROJET

**Date:** 14 janvier 2026  
**Mode:** ANALYSE UNIQUEMENT - AUCUNE MODIFICATION AUTOMATIQUE  
**Objectif:** Identifier les fichiers critiques pour le visuel avant tout audit de sécurité/performance

---

## ⚠️ FICHIERS VISUELS CRITIQUES - NE PAS MODIFIER AUTOMATIQUEMENT

### 🎨 **Configuration Design System (INTOUCHABLES)**

| Fichier | Rôle | Statut | Raison |
|---------|------|--------|--------|
| `/app/globals.css` | CSS global, variables CSS, styles de base | 🔴 **CRITIQUE** | Définit l'apparence globale (navy, anthracite, gold) |
| `/tailwind.config.js` | Configuration Tailwind avec tokens design | 🔴 **CRITIQUE** | Toutes les couleurs, spacing, typography du site |
| `/design-tokens.json` | Référence complète du design system | 🔴 **CRITIQUE** | Source de vérité pour le design (916 lignes) |
| `/postcss.config.mjs` | Configuration PostCSS | 🟡 **SENSIBLE** | Transformation CSS, ne pas modifier sans tests |

**Couleurs institutionnelles définies:**
- Navy: `#0A1628` (Titres, CTA primaires)
- Anthracite: `#2D3748` (Texte secondaire)
- Gold: `#B8860B` (Accents <5%)

**Polices:**
- Headings: `Playfair Display` (Georgia fallback)
- Body: `Inter` (system fonts fallback)

---

### 🧩 **Composants UI (INTOUCHABLES - Visuel Stable)**

**Localisation:** `/components/ui/`

| Composant | Fichier | Lignes | Status | Usage |
|-----------|---------|--------|--------|-------|
| Button | `Button.tsx` | ~150 | 🔴 **CRITIQUE** | CTA primaires/secondaires avec variants |
| Card | `Card.tsx` | ~100 | 🔴 **CRITIQUE** | Cards de contenu avec styles navy/gold |
| Header | `Header.tsx` | ~200 | 🔴 **CRITIQUE** | Navigation principale avec logo/menu |
| Footer | `Footer.tsx` | ~250 | 🔴 **CRITIQUE** | Footer avec liens structurés |
| Input | `Input.tsx` | ~80 | 🔴 **CRITIQUE** | Champs de formulaire stylés |
| Textarea | `Textarea.tsx` | ~80 | 🔴 **CRITIQUE** | Zone texte avec border/focus states |
| Select | `Select.tsx` | ~90 | 🔴 **CRITIQUE** | Dropdown avec styles customisés |
| Checkbox | `Checkbox.tsx` | ~70 | 🔴 **CRITIQUE** | Cases à cocher (gold accent) |
| Callout | `Callout.tsx` | ~60 | 🔴 **CRITIQUE** | Encadrés info/warning/success |
| Quote | `Quote.tsx` | ~50 | 🔴 **CRITIQUE** | Citations avec bordure gold |
| Table | `Table.tsx` | ~100 | 🔴 **CRITIQUE** | Tableaux avec striping |
| Link | `Link.tsx` | ~40 | 🔴 **CRITIQUE** | Liens avec underline hover |
| Icon | `Icon.tsx` | ~30 | 🟡 **SENSIBLE** | Wrapper icons Lucide |
| LanguageSwitch | `LanguageSwitch.tsx` | ~80 | 🔴 **CRITIQUE** | Sélecteur langue FR/EN/DE |

**⚠️ Note:** Ces composants définissent l'identité visuelle du site. Toute modification peut casser l'apparence.

---

### 📄 **Pages avec Sections Visuelles Critiques**

**Localisation:** `/app/` et `/app/fr/`

| Page | Fichier | Sections Critiques | Status |
|------|---------|-------------------|--------|
| Homepage FR | `/app/fr/page.tsx` | Hero, Services, CTA | 🔴 **CRITIQUE** |
| Diagnostic | `/app/diagnostic/page.tsx` | Formulaire multi-steps, validations | 🟡 **SENSIBLE** |
| Ressources | `/app/fr/ressources/page.tsx` | Liste articles, filtres topics | 🔴 **CRITIQUE** |
| Articles | `/app/fr/ressources/[slug]/page.tsx` | Header article, content, CTA | 🔴 **CRITIQUE** |
| Cookies | `/app/fr/cookies/page.tsx` | Tableaux cookies, browsers links | 🟡 **SENSIBLE** |
| Cabinet | `/app/cabinet/page.tsx` | Présentation équipe/expertise | 🔴 **CRITIQUE** |
| Méthode Integra | `/app/methode-integra/page.tsx` | Timeline méthodologie | 🔴 **CRITIQUE** |
| Layout principal | `/app/layout.tsx` | Structure HTML, metadata, fonts | 🔴 **CRITIQUE** |

---

### 🎭 **Composants Fonctionnels avec Animations**

**Localisation:** `/components/`

| Composant | Fichier | Rôle | Status |
|-----------|---------|------|--------|
| Timeline | `Timeline.tsx` | Affichage chronologie avec Framer Motion | 🔴 **CRITIQUE** |
| Breadcrumb | `Breadcrumb.tsx` | Fil d'Ariane navigation | 🟡 **SENSIBLE** |
| FAQ | `FAQ.tsx` | Accordéons questions/réponses | 🔴 **CRITIQUE** |
| HowTo | `HowTo.tsx` | Guide étape par étape | 🟡 **SENSIBLE** |

---

## ✅ FICHIERS ANALYSABLES - MODIFICATIONS POSSIBLES

### 🔒 **Sécurité & Validation (PEUT ÊTRE MODIFIÉ)**

| Fichier | Rôle | Status | Priorité Audit |
|---------|------|--------|----------------|
| `/app/api/diagnostic/route.ts` | API endpoint avec validation Zod | 🟢 **SAFE** | 🔴 **HAUTE** |
| `/lib/seoValidation.ts` | Validation SEO metadata | 🟢 **SAFE** | 🟡 **MOYENNE** |
| `/lib/urlMapping.ts` | Mapping URLs pour redirections | 🟢 **SAFE** | 🟡 **MOYENNE** |

**Actions sécurisées possibles:**
- Ajouter sanitization supplémentaire
- Renforcer validation Zod
- Ajouter rate limiting
- Améliorer gestion erreurs

---

### 📊 **Analytics & SEO (PEUT ÊTRE MODIFIÉ)**

| Fichier | Rôle | Status | Priorité Audit |
|---------|------|--------|----------------|
| `/components/Analytics.tsx` | Google Analytics 4 | 🟢 **SAFE** | 🟡 **MOYENNE** |
| `/components/ArticleSchema.tsx` | Schema.org JSON-LD | 🟢 **SAFE** | 🟢 **BASSE** |
| `/app/sitemap.ts` | Génération sitemap XML | 🟢 **SAFE** | 🟡 **MOYENNE** |
| `/app/robots.ts` | Génération robots.txt | 🟢 **SAFE** | 🟢 **BASSE** |
| `/app/manifest.ts` | PWA manifest | 🟢 **SAFE** | 🟢 **BASSE** |

---

### 🛠️ **Configuration Projet (ATTENTION - Tests Requis)**

| Fichier | Rôle | Status | Notes |
|---------|------|--------|-------|
| `/next.config.ts` | Config Next.js | 🟡 **SENSIBLE** | Peut affecter le build |
| `/tsconfig.json` | Config TypeScript | 🟡 **SENSIBLE** | Upgrade ES2022 prévu |
| `/eslint.config.mjs` | Linting rules | 🟢 **SAFE** | Modifications OK |
| `/package.json` | Dépendances | 🟡 **SENSIBLE** | Tests après updates |

---

## 🔍 AUDIT PRÉCÉDENT - RÉFÉRENCE

**Fichier existant:** `/AUDIT-CODE-COMPLET.md` (1661 lignes)

**Statut actuel:**
- ✅ Sprint 1 - Tâches 1-3 complétées (API validation, form react-hook-form, build fixes)
- ⏳ Sprint 1 - Tâches 4-6 en attente (homepage, redirects, TSConfig, fonts)

**Fichiers déjà audités:**
- Problèmes de sécurité identifiés: Validation inputs, XSS, CSRF
- Performance: Lazy loading, images, fonts CDN → next/font
- Qualité code: TypeScript strict, composants dupliqués

---

## 📁 STRUCTURE COMPLÈTE DU PROJET

```
/home/gregory/DEV/web/
│
├── 🔴 VISUELS CRITIQUES (NE PAS MODIFIER AUTO)
│   ├── app/globals.css                    # CSS global avec variables
│   ├── tailwind.config.js                 # Config Tailwind + tokens
│   ├── design-tokens.json                 # Design system référence
│   ├── components/ui/                     # 14 composants UI
│   │   ├── Button.tsx                     # CTA primaires/secondaires
│   │   ├── Card.tsx                       # Cards contenu
│   │   ├── Header.tsx                     # Navigation
│   │   ├── Footer.tsx                     # Footer
│   │   └── ... (10 autres)
│   └── components/
│       ├── Timeline.tsx                   # Animations Framer Motion
│       ├── FAQ.tsx                        # Accordéons
│       └── ...
│
├── 🟢 LOGIQUE MODIFIABLE (SAFE)
│   ├── app/api/diagnostic/route.ts        # API validation Zod ✅
│   ├── lib/seoValidation.ts               # SEO utils
│   ├── lib/urlMapping.ts                  # URL mapping
│   └── components/Analytics.tsx           # GA4
│
├── 🟡 PAGES (STRUCTURE OK - CONTENU CRITIQUE)
│   ├── app/layout.tsx                     # Layout principal
│   ├── app/page.tsx                       # Root redirect
│   ├── app/fr/page.tsx                    # Homepage FR
│   ├── app/diagnostic/page.tsx            # Form diagnostic ✅
│   └── app/fr/ressources/                 # Articles
│
├── 📚 DOCUMENTATION
│   ├── AUDIT-CODE-COMPLET.md              # Audit détaillé existant
│   ├── ARCHITECTURE-CONFORMITE.md         # Architecture
│   ├── ROUTES-STRUCTURE.md                # Routes SEO
│   └── docs/                              # Archives audits
│
└── ⚙️ CONFIG
    ├── next.config.ts                     # Config Next.js
    ├── tsconfig.json                      # TypeScript (ES2017 → ES2022)
    ├── package.json                       # Dependencies
    └── eslint.config.mjs                  # Linting
```

---

## 🎯 ZONES D'AUDIT RECOMMANDÉES (Sans Impact Visuel)

### 🔴 **PRIORITÉ HAUTE - Sécurité**

1. **API Route Diagnostic** (`/app/api/diagnostic/route.ts`)
   - ✅ Validation Zod: Implémentée
   - ⚠️ Rate limiting: Non implémenté
   - ⚠️ CORS: À vérifier
   - ⚠️ Email service: Commenté (Resend/SMTP)
   - ⚠️ Logs sensibles: À anonymiser

2. **Validation Inputs Globale**
   - ⚠️ XSS protection: DOMPurify intégré mais pas partout
   - ⚠️ SQL Injection: Pas de DB direct (Sanity CMS)
   - ⚠️ CSRF tokens: Non implémenté

3. **Gestion Secrets**
   - ✅ `.env.local` exclu de Git
   - ⚠️ Vérifier rotation API keys

### 🟡 **PRIORITÉ MOYENNE - Performance**

1. **Optimisation Images**
   - ⚠️ next/image: À auditer usage
   - ⚠️ Lazy loading: Pas systématique
   - ⚠️ Formats modernes: WebP/AVIF

2. **Fonts Loading**
   - ⚠️ Google Fonts CDN: Migration next/font planifiée
   - Impact SEO/performance CLS

3. **Bundle Size**
   - ⚠️ Framer Motion: Optimisation imports
   - ⚠️ Lucide icons: Tree-shaking OK ?

### 🟢 **PRIORITÉ BASSE - Qualité Code**

1. **TypeScript Strict Mode**
   - ⚠️ TSConfig target ES2017 → ES2022
   - ⚠️ jsx: "preserve" recommandé

2. **Tests**
   - ⚠️ Coverage: 1 seul test (Footer.test.tsx)
   - ⚠️ Tests E2E: Absents

3. **Documentation Code**
   - ⚠️ JSDoc manquant sur composants
   - ⚠️ Props types comments

---

## 📋 CHECKLIST AVANT MODIFICATION

Avant TOUTE modification de fichier, vérifier:

- [ ] Le fichier n'est PAS dans la liste "VISUELS CRITIQUES" ci-dessus
- [ ] La modification ne touche PAS aux styles CSS/Tailwind
- [ ] Aucun impact sur les composants UI existants
- [ ] Pas de changement de structure HTML/JSX visuelle
- [ ] Pas de modification des animations Framer Motion
- [ ] Tests visuels possibles après changement

**Si doute:** Demander validation AVANT modification.

---

## 🚨 FICHIERS À NE JAMAIS TOUCHER SANS VALIDATION

1. `/app/globals.css` - CSS global
2. `/tailwind.config.js` - Tokens design
3. `/design-tokens.json` - Source de vérité
4. Tous les fichiers dans `/components/ui/` (14 composants)
5. `/components/Timeline.tsx` - Animations critiques
6. `/app/layout.tsx` - Structure HTML principale
7. Pages principales: Homepage, Cabinet, Méthode, Ressources

---

## ✅ VALIDATION PROPRIÉTAIRE REQUISE

**Avant d'implémenter TOUTE suggestion d'audit:**

1. **Présenter** la modification proposée avec code exact
2. **Expliquer** l'impact potentiel (sécurité/performance/visuel)
3. **Attendre** validation explicite: "OUI, applique cette modification"
4. **Tester** visuellement après changement
5. **Commit Git** pour rollback facile si problème

**Format de proposition:**
```markdown
## Modification Proposée: [Titre]

**Fichier:** [chemin]
**Type:** [Sécurité/Performance/Qualité]
**Impact Visuel:** [OUI/NON]

**Problème identifié:**
[Description]

**Solution recommandée:**
```typescript
// Code exact de la modification
```

**Validation requise:** ⏳ En attente
```

---

**Date création:** 14 janvier 2026  
**Auteur:** Audit Copilot  
**Version:** 1.0  
**Status:** ✅ Inventaire complet - Prêt pour audit sécurisé
