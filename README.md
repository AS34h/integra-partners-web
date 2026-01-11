# INTEGRA PARTNERS - Site Web Institutionnel

Site web officiel du cabinet de conseil stratégique INTEGRA PARTNERS, construit avec Next.js 16, React 19, TypeScript et Tailwind CSS 4.

## 📋 Description du Projet

INTEGRA PARTNERS est un cabinet de conseil indépendant spécialisé dans l'accompagnement stratégique des dirigeants institutionnels en Afrique. Le site présente :

- **Page d'Accueil** : Hero section, présentation du cabinet, domaines d'expertise
- **Cabinet** : Expertise, valeurs, mission du cabinet
- **Méthode INTEGRA** : Framework propriétaire en 6 phases
- **Domaines** : Gouvernance, Stratégie, Capital Humain, Transformation
- **Ressources** : Publications, études, guides pratiques
- **Diagnostic** : Formulaire de contact et demande de diagnostic stratégique

## 🛠️ Stack Technique

- **Framework** : Next.js 16.1.1 (App Router, Turbopack)
- **React** : 19.2.3
- **TypeScript** : 5.x
- **Styling** : Tailwind CSS 4
- **Animations** : Framer Motion 12.25.0
- **Icônes** : Lucide React 0.562.0
- **Linting** : ESLint 9

## 🎨 Design System

Le projet utilise un design system institutionnel strict basé sur :

### Couleurs Principales
- **Navy** (#0A1628) : Couleur institutionnelle dominante (titres, CTA)
- **Anthracite** (#2D3748) : Structure et hiérarchie
- **Gold** (#B8860B) : Accents souverains (<5% d'utilisation)
- **Grayscale** : Base du design (95% du site)

### Typographie
- **Tiempos Headline** : Titres H1-H3 (serif institutionnel)
- **Inter** : Corps de texte, UI (sans-serif moderne)

### Composants UI

Tous les composants sont dans `/components/ui/` :
- **Button** : Variantes primary, secondary, ghost
- **Card** : Variantes bordered, elevated, avec hover effects
- **Header** : Navigation sticky avec shadow on scroll
- **Footer** : Footer institutionnel complet
- **Input** : Champs de formulaire avec validation
- **Textarea** : Zone de texte multi-lignes
- **Select** : Sélecteur dropdown
- **Checkbox** : Cases à cocher
- **Quote** : Citations institutionnelles
- **Icon** : Wrapper d'icônes
- **Link** : Liens stylisés
- **Table** : Tableaux de données
- **Callout** : Messages d'information

## 📂 Structure du Projet

```
/app
  /cabinet           # Page Cabinet
  /diagnostic        # Page Diagnostic/Contact
  /domaines          # Page Domaines d'Expertise
  /methode-integra   # Page Méthode INTEGRA
  /ressources        # Page Ressources/Publications
  globals.css        # Styles globaux
  layout.tsx         # Layout principal (Header/Footer)
  page.tsx           # Page d'accueil

/components/ui       # Composants réutilisables

/web-design-system   # Documentation du design system
  /design-system
    *.md             # Docs (COLORS, TYPOGRAPHY, BUTTONS, etc.)
    *.tsx            # Composants de référence

design-tokens.json   # Tokens de design complets
tailwind.config.js   # Configuration Tailwind
```

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 20+
- npm, yarn, pnpm ou bun

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site est accessible sur http://localhost:3000
```

### Autres Commandes

```bash
# Build de production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

## 📖 Documentation du Design System

La documentation complète du design system est disponible dans `/web-design-system/design-system/` :

- **STANDARDS-INSTITUTIONNELS.md** : Animations acceptées et interdites
- **COLORS.md** : Palette de couleurs et règles d'usage
- **TYPOGRAPHY.md** : Hiérarchie typographique
- **BUTTONS.md** : Variantes et états des boutons
- **CARDS.md** : Composants Card
- **FORMS.md** : Composants de formulaire
- **GRID.md** : Système de grille
- **SPACING.md** : Échelle d'espacement
- **ANIMATIONS.md** : Principes d'animation

## 🎯 Principes de Design

### Animations Acceptées
- Button hover (transition-colors)
- Link underline (transition-all)
- Card hover (border + shadow)
- Icon shift (chevron)
- Fade-in on scroll (Framer Motion)
- Header shadow on scroll

### ❌ Animations Interdites
- Slides agressifs
- Rotations
- Bounces
- Parallax
- Effets "wow" marketing
- Autoplay vidéo

**Philosophie** : Cabinet de conseil institutionnel = Crédibilité > Créativité

## 🌍 Pages et Fonctionnalités

### Page d'Accueil (`/`)
- Hero section avec CTA principal
- Présentation des valeurs (Souveraineté, Excellence, Confidentialité)
- Grille des 4 domaines d'expertise
- Section Méthode INTEGRA
- CTA final vers diagnostic

### Page Cabinet (`/cabinet`)
- Mission et expertise du cabinet
- 4 piliers (Indépendance, Excellence, Expertise Réglementaire, Réseau)
- Valeurs opérationnelles
- CTA contact

### Page Méthode (`/methode-integra`)
- Présentation du framework propriétaire
- 6 phases détaillées avec livrables
- Principes méthodologiques
- Adaptabilité de la méthode

### Page Domaines (`/domaines`)
- 4 domaines d'intervention détaillés
- Services et résultats attendus
- Navigation rapide entre domaines

### Page Ressources (`/ressources`)
- Publications et études de cas
- Filtres par thématique
- Newsletter stratégique
- CTA diagnostic personnalisé

### Page Diagnostic (`/diagnostic`)
- Formulaire structuré (organisation, contact, projet)
- Validation et conformité RGPD
- Moyens de contact alternatifs

## 🔒 Conformité & Sécurité

- **RGPD** : Consentement explicite, politique de confidentialité
- **Confidentialité** : Protection des données stratégiques
- **Accessibilité** : Navigation au clavier, contraste WCAG AA
- **Performance** : Optimisation images, lazy loading

## 📱 Responsive Design

Breakpoints Tailwind CSS :
- **sm** : 640px
- **md** : 768px
- **lg** : 1024px
- **xl** : 1280px (max container)
- **2xl** : 1536px

Mobile-first approach avec composants adaptatifs.

## 🤝 Standards de Code

- TypeScript strict mode
- ESLint avec règles Next.js
- Composants fonctionnels React
- Props typées avec interfaces
- Comments JSDoc pour props complexes
- Animations subtiles avec Framer Motion

## 📄 License

© 2026 INTEGRA PARTNERS. Tous droits réservés.

---

**Contact** : contact@integrapartners.com  
**Localisation** : Lomé, Togo

