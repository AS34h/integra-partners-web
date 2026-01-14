# 🎯 TODO PRIORITAIRE - INTEGRA PARTNERS

**Date** : 11 janvier 2026  
**Objectif** : Production-ready dans 1-2 semaines

---

## 🔴 PHASE 1 : BLOQUANTS CRITIQUES (1 jour)

### 1. Fonts Tiempos Headline ⏱️ 30 min
**Statut** : ❌ Manquant (404 errors)  
**Impact** : Brand identity compromise

**Actions** :
```bash
# Option 1 : Acheter licence Commercial Type
# https://commercialtype.com/catalog/tiempos_headline

# Option 2 : Alternative gratuite
# Playfair Display (Google Fonts, proche serif institutionnel)
# Crimson Pro (Google Fonts, serif élégant)

# Télécharger et placer :
public/fonts/tiempos-headline-regular.woff2
public/fonts/tiempos-headline-medium.woff2

# Ou alternative :
public/fonts/playfair-display-regular.woff2
public/fonts/playfair-display-bold.woff2
```

**Validation** :
- [ ] Fonts téléchargées
- [ ] Placées dans `/public/fonts/`
- [ ] Build réussi sans 404
- [ ] Visual check sur toutes les pages

---

### 2. Backend API Diagnostic ⏱️ 3h
**Statut** : ❌ Formulaire non fonctionnel  
**Impact** : Leads perdus

**Fichier à créer** : `/app/api/diagnostic/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'

// Option 1 : Email avec Resend (recommandé)
// npm install resend
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validation
    if (!data.email || !data.organization || !data.domain) {
      return NextResponse.json(
        { error: 'Champs requis manquants' }, 
        { status: 400 }
      )
    }
    
    // Envoi email
    await resend.emails.send({
      from: 'diagnostic@integrapartners.com',
      to: 'contact@integrapartners.com',
      subject: `Nouveau diagnostic : ${data.organization}`,
      html: `
        <h2>Nouvelle demande de diagnostic</h2>
        <p><strong>Organisation :</strong> ${data.organization}</p>
        <p><strong>Contact :</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.phone || 'Non fourni'}</p>
        <p><strong>Domaine :</strong> ${data.domain}</p>
        <p><strong>Message :</strong></p>
        <p>${data.message}</p>
      `
    })
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' }, 
      { status: 500 }
    )
  }
}
```

**Installation** :
```bash
npm install resend
```

**Configuration `.env.local`** :
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

**Validation** :
- [ ] API route créée
- [ ] Resend account créé (ou SMTP configuré)
- [ ] `.env.local` avec API key
- [ ] Test formulaire → email reçu
- [ ] Error handling testé

---

### 3. Variables d'Environnement ⏱️ 15 min
**Statut** : ❌ Aucun fichier .env  
**Impact** : Configuration production impossible

**Fichier à créer** : `.env.local`

```env
# === PRODUCTION ===
NEXT_PUBLIC_SITE_URL=https://integrapartners.com

# === EMAIL API ===
# Option 1 : Resend (recommandé)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Option 2 : SMTP traditionnel
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@integrapartners.com
SMTP_PASSWORD=xxxxxxxxxxxxx

# === ANALYTICS (Phase 2) ===
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=integrapartners.com
# NEXT_PUBLIC_PLAUSIBLE_SRC=https://plausible.io/js/script.js

# === SEO ===
NEXT_PUBLIC_GOOGLE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxx
```

**Fichier à créer** : `.env.example` (pour Git)

```env
# === PRODUCTION ===
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# === EMAIL API ===
RESEND_API_KEY=your_resend_api_key_here

# === ANALYTICS ===
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# === SEO ===
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
```

**Validation** :
- [ ] `.env.local` créé
- [ ] `.env.example` créé
- [ ] `.gitignore` contient `.env*.local`
- [ ] Variables utilisées dans code

---

### 4. Images Critiques ⏱️ 2h
**Statut** : ❌ Images manquantes  
**Impact** : SEO, partages sociaux

**Fichiers à créer** :

```
public/
├── og-image.jpg          (1200x630px, <200KB)
├── logo.png              (500x500px, transparent)
├── favicon.ico           (32x32px)
├── apple-touch-icon.png  (180x180px)
├── favicon-16x16.png
└── favicon-32x32.png
```

**Contenu og-image.jpg** :
- Navy (#0A1628) background
- Logo INTEGRA PARTNERS (white)
- Tagline : "Cabinet de conseil stratégique souverain"
- 1200x630px (ratio Facebook/LinkedIn)

**Tools** :
- Figma / Canva pour og-image
- Favicon Generator : https://realfavicongenerator.net/

**Validation** :
- [ ] og-image.jpg créé
- [ ] logo.png créé
- [ ] Favicons générés
- [ ] Test partage Facebook/LinkedIn
- [ ] Test Google search preview

---

### 5. Infos Légales Réelles ⏱️ 30 min
**Statut** : ⚠️ Placeholders  
**Impact** : Non-conformité légale

**Fichier à modifier** : `/app/mentions-legales/page.tsx`

**Remplacer** :
```tsx
// AVANT (placeholders)
<p>RCCM : TG-XXX-XXXX-X-XXXX</p>
<p>NIF : XXXXXXXXX</p>
<p>Tél : XX XX XX XX XX</p>

// APRÈS (vraies infos)
<p>RCCM : TG-LOM-2024-X-12345</p>  // Obtenir du Registre du Commerce
<p>NIF : 123456789</p>             // Obtenir du Ministère
<p>Tél : +228 22 XXX XXX</p>       // Vraie ligne
<p>Email : contact@integrapartners.com</p>
```

**Informations à obtenir** :
- [ ] Numéro RCCM (Registre Commerce Togo)
- [ ] NIF (Numéro Identification Fiscale)
- [ ] Adresse physique complète à Lomé
- [ ] Téléphone fixe + mobile
- [ ] Capital social (si SA/SARL)
- [ ] Directeur de publication (nom légal)

**Validation** :
- [ ] Toutes les infos réelles
- [ ] Conforme OHADA
- [ ] Email contact valide
- [ ] Adresse vérifiable

---

## 🟠 PHASE 2 : IMPORTANT (Semaine 1)

### 6. Language Routes (Temporaire) ⏱️ 1h
**Solution rapide** : Rediriger vers home

**Fichiers à créer** :
```typescript
// app/fr/page.tsx
import { redirect } from 'next/navigation'
export default function FrPage() {
  redirect('/')
}

// app/en/page.tsx
export default function EnPage() {
  return <div>English version coming soon...</div>
}

// app/de/page.tsx
export default function DePage() {
  return <div>Deutsche Version in Kürze...</div>
}
```

**Validation** :
- [ ] Clic FR → reste sur page actuelle
- [ ] Clic EN → page placeholder
- [ ] Clic DE → page placeholder
- [ ] Pas de 404 errors

---

### 7. Contenu Réel (3 publications minimum) ⏱️ 4h
**Fichiers à créer** :

```
app/ressources/
├── [slug]/
│   └── page.tsx
└── publications/
    ├── guide-ohada-2026.md
    ├── etude-marches-emergents.md
    └── cas-transformation-digitale.md
```

**Template article** :
```typescript
// app/ressources/[slug]/page.tsx
import { notFound } from 'next/navigation'

export default function ArticlePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()
  
  return (
    <article className="container mx-auto py-16">
      <h1 className="font-heading text-h1 mb-6">
        {article.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  )
}
```

**Validation** :
- [ ] 3 articles minimum rédigés
- [ ] Pages /ressources/[slug] créées
- [ ] Images articles ajoutées
- [ ] Links depuis /ressources fonctionnent

---

### 8. Photos Équipe ⏱️ 2h
**Fichiers à ajouter** :

```
public/team/
├── directeur-associe.jpg  (400x400px)
├── expert-1.jpg
├── expert-2.jpg
└── expert-3.jpg
```

**Modifier** : `/app/cabinet/page.tsx`

```tsx
// Ajouter vraies photos
import Image from 'next/image'

<Image 
  src="/team/directeur-associe.jpg" 
  alt="Directeur Associé" 
  width={400} 
  height={400}
  className="rounded"
/>
```

**Validation** :
- [ ] Photos professionnelles ajoutées
- [ ] Optimisées (<100KB chacune)
- [ ] Next/Image utilisé
- [ ] Alt text descriptifs

---

## 🟡 PHASE 3 : OPTIMISATIONS (Post-launch)

### 9. Analytics Phase 2 ⏱️ 15 min
1. Créer compte Plausible : https://plausible.io
2. Ajouter domain: `integrapartners.com`
3. Modifier `/app/layout.tsx` :
   ```tsx
   <Analytics enabled={true} />
   ```
4. Ajouter `.env.local` :
   ```env
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=integrapartners.com
   ```
5. Deploy + vérifier dashboard Plausible

---

### 10. Pages Domaines Détaillées ⏱️ 6h
Créer 4 pages :
- `/app/domaines/gouvernance/page.tsx`
- `/app/domaines/strategie/page.tsx`
- `/app/domaines/capital-humain/page.tsx`
- `/app/domaines/transformation/page.tsx`

Chaque page : 
- Hero avec icon + titre
- Description détaillée
- Services listés
- Méthodologie
- Cas clients (anonymisés)
- CTA diagnostic

---

### 11. i18n Complet ⏱️ 10h
**Option recommandée** : next-intl

```bash
npm install next-intl
```

Configuration complète avec :
- Middleware i18n
- Translations files (fr/en/de)
- Language switcher fonctionnel
- URL structure `/[locale]/...`

---

## 📋 CHECKLIST FINALE PRE-PRODUCTION

### Technique
- [ ] Build production réussi (`npm run build`)
- [ ] Aucune erreur TypeScript
- [ ] Aucun warning console
- [ ] Tests locaux OK (dev mode)
- [ ] Fonts chargées (pas de 404)
- [ ] API backend testée

### Contenu
- [ ] Toutes les images présentes
- [ ] Infos légales complètes
- [ ] Au moins 3 articles ressources
- [ ] Photos équipe professionnelles
- [ ] Textes relus (typos, grammaire)

### SEO
- [ ] Metadata complètes (toutes pages)
- [ ] og-image présent
- [ ] Sitemap vérifié
- [ ] Robots.txt vérifié
- [ ] Google Search Console configuré

### Performance
- [ ] Lighthouse > 90 (toutes catégories)
- [ ] Images optimisées
- [ ] Fonts preload
- [ ] No console errors

### Legal
- [ ] Pages légales complètes
- [ ] RCCM/NIF réels
- [ ] Contact valide
- [ ] Cookie policy à jour

### Deploy
- [ ] `.env.production` configuré
- [ ] Domain configuré (DNS)
- [ ] SSL actif
- [ ] Email notifications ON
- [ ] Monitoring actif

---

## 🚀 PRÊT POUR LE LANCEMENT

**Durée totale estimée** : 1-2 semaines

**Phase 1 (critique)** : 1 jour  
**Phase 2 (important)** : 1 semaine  
**Phase 3 (optimisations)** : Post-launch progressif

**Next step** : Commencer par Phase 1, tâche par tâche.
