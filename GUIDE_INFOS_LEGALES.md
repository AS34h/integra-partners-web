# 🔍 GUIDE - Infos Légales à Compléter

**Fichier concerné** : `/app/mentions-legales/page.tsx`

---

## ⚠️ PLACEHOLDERS À REMPLACER

### 1. **RCCM (Registre du Commerce)**
**Ligne actuelle** : `RCCM : TG-XXX-XXXX-X-XXXX`

**À obtenir auprès de** : 
- Registre du Commerce et du Crédit Mobilier (Lomé, Togo)
- Chambre de Commerce et d'Industrie du Togo (CCIT)

**Format attendu** : 
- `TG-LOM-AAAA-B-XXXXX`
- Exemple : `TG-LOM-2024-A-12345`

**Où le trouver** :
- Certificat d'immatriculation au RCCM
- Extrait K-bis (si applicable)

---

### 2. **NIF (Numéro d'Identification Fiscale)**
**Ligne actuelle** : `NIF : XXXXXXXXX`

**À obtenir auprès de** :
- Office Togolais des Recettes (OTR)
- Direction Générale des Impôts

**Format attendu** : 
- 9 chiffres généralement
- Exemple : `123456789`

**Où le trouver** :
- Carte NIF
- Attestation fiscale
- Déclarations d'impôts

---

### 3. **Capital Social**
**Ligne actuelle** : `Capital social : [À COMPLÉTER]`

**Information requise** :
- Montant exact en FCFA
- Exemple : `10 000 000 FCFA`

**Où le trouver** :
- Statuts de la société
- Extrait RCCM
- PV d'assemblée générale (si augmentation)

---

### 4. **Téléphone**
**Ligne actuelle** : `Tél : XX XX XX XX XX`

**Format requis** :
- International : `+228 XX XX XX XX` (Togo)
- Local : `XX XX XX XX XX`
- Exemple : `+228 22 123 456` ou `90 12 34 56`

**Conseils** :
- Utiliser un numéro fixe professionnel si possible
- Vérifier que le numéro est joignable
- Ajouter un numéro mobile si pertinent

---

### 5. **Adresse Physique**
**Ligne actuelle** : `Lomé, Togo`

**Format complet requis** :
```
[Numéro et rue]
[Quartier]
[Code postal] Lomé
Togo
```

**Exemple** :
```
123 Avenue de la Paix
Quartier administratif
BP 1234 Lomé
Togo
```

**Conseils** :
- Utiliser l'adresse du siège social (comme dans RCCM)
- Vérifier cohérence avec Google Maps
- Ajouter BP (Boîte Postale) si applicable

---

### 6. **Directeur de Publication**
**Ligne actuelle** : `Directeur de la publication : [NOM]`

**Information requise** :
- Nom complet du dirigeant légal
- Titre exact (Directeur Général, Gérant, Président, etc.)
- Exemple : `Jean DUPONT, Directeur Général`

**Où le trouver** :
- Extrait RCCM (représentants légaux)
- Statuts de la société
- PV de nomination

---

### 7. **Email Contact**
**Ligne actuelle** : `contact@integrapartners.com`

**Vérifications** :
- [ ] Adresse email configurée et active
- [ ] Redirection vers boîte surveillée
- [ ] Réponse automatique configurée (optionnel)
- [ ] Mention dans signature email

---

### 8. **Hébergeur**
**Ligne actuelle** : Vercel Inc. (déjà correct si déployé sur Vercel)

**Si hébergement différent, préciser** :
- Nom de l'hébergeur
- Adresse complète
- Contact hébergeur

**Pour Vercel (par défaut)** :
```
Vercel Inc.
440 N Barranca Avenue #4133
Covina, CA 91723
États-Unis
```

---

## 📝 CHECKLIST DE VÉRIFICATION

### Documents à rassembler
- [ ] Certificat RCCM ou Extrait K-bis
- [ ] Carte NIF ou Attestation fiscale
- [ ] Statuts de la société (capital social)
- [ ] PV de nomination du directeur
- [ ] Justificatif d'adresse du siège
- [ ] Configuration email contact@integrapartners.com

### Vérifications légales
- [ ] RCCM valide et non expiré
- [ ] NIF actif auprès de l'OTR
- [ ] Capital social correspond aux statuts
- [ ] Directeur légalement habilité
- [ ] Adresse correspond au RCCM

### Cohérence inter-pages
- [ ] Adresse identique sur `/contact` (si existe)
- [ ] Email identique sur toutes les pages
- [ ] Téléphone identique sur Footer
- [ ] Raison sociale cohérente partout

---

## 🔧 COMMENT METTRE À JOUR

### Étape 1 : Ouvrir le fichier
```bash
code /app/mentions-legales/page.tsx
```

### Étape 2 : Rechercher et remplacer
Utiliser Ctrl+F (ou Cmd+F sur Mac) pour trouver :
- `TG-XXX-XXXX-X-XXXX` → Remplacer par RCCM réel
- `XXXXXXXXX` → Remplacer par NIF réel
- `XX XX XX XX XX` → Remplacer par téléphone
- `[À COMPLÉTER]` → Remplacer par capital social
- `[NOM]` → Remplacer par nom du directeur

### Étape 3 : Vérifier le build
```bash
npm run build
```

### Étape 4 : Vérifier visuellement
```bash
npm run dev
```
Visiter : http://localhost:3000/mentions-legales

---

## ⚖️ CONFORMITÉ OHADA

### Mentions obligatoires (art. 263 AUDSCGIE)
- ✅ Dénomination sociale
- ✅ Forme juridique (SA, SARL, SAS...)
- ✅ Montant du capital social
- ✅ Adresse du siège social
- ✅ Numéro RCCM
- ✅ NIF

### Mentions recommandées
- ✅ Directeur de publication
- ✅ Hébergeur du site
- ✅ Contact (email/téléphone)
- ✅ Politique de confidentialité (lien)
- ✅ Cookies (lien)

---

## 📞 CONTACTS UTILES

### Registre du Commerce (RCCM)
- **Lomé** : Chambre de Commerce et d'Industrie du Togo
- **Tel** : +228 22 21 20 65
- **Adresse** : Angle Boulevard du 13 Janvier et rue du Commerce, Lomé

### Office Togolais des Recettes (NIF)
- **Site** : www.otr.tg
- **Tel** : +228 22 23 38 00
- **Adresse** : Rue Pelletier Caventou, Lomé

### Support Technique
- **Email** : dev@integrapartners.com
- **Documentation** : Voir README.md

---

## ✅ TEMPLATE COMPLET

Une fois tous les éléments rassemblés, voici un exemple complété :

```tsx
<p>RCCM : TG-LOM-2024-A-12345</p>
<p>NIF : 123456789</p>
<p>Capital social : 10 000 000 FCFA</p>
<p>Siège social : 123 Avenue de la Paix, Quartier administratif, BP 1234 Lomé, Togo</p>
<p>Tél : +228 22 123 456</p>
<p>Email : contact@integrapartners.com</p>
<p>Directeur de la publication : Jean DUPONT, Directeur Général</p>
```

---

**Date de création** : 11 janvier 2026  
**Dernière mise à jour** : À compléter après obtention des documents officiels
