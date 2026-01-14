# Analytics Configuration - INTEGRA PARTNERS

## Phase 1: Performance & SEO Priority (CURRENT)
**Status**: ✅ Active  
**Analytics**: None  
**Focus**: Performance, credibility, institutional standards

### Principles
- No third-party tracking
- No consent popups
- No cookies for analytics
- Pure institutional credibility

---

## Phase 2: Privacy-First Analytics (READY TO DEPLOY)
**Status**: 🟡 Ready for activation  
**Recommended**: Plausible Analytics  
**Alternative**: Matomo (self-hosted)

### Why Plausible?
- ✅ **No cookies**: GDPR-compliant by default
- ✅ **Privacy-first**: No personal data collection
- ✅ **Lightweight**: <1KB script, no performance impact
- ✅ **EU hosting**: All data stored in European Union
- ✅ **Open source**: Transparent and auditable
- ✅ **No consent banner needed**: GDPR-exempt analytics
- ✅ **Real-time**: Live visitor analytics
- ✅ **Simple**: Clean, executive-friendly dashboard

### Metrics Tracked (Anonymized)
- Page views and unique visitors
- Traffic sources (referrers)
- Geographic data (country/region only, no IP storage)
- Devices and browsers (aggregated)
- Top pages and entry/exit pages
- No user-level tracking
- No cross-site tracking
- No behavioral profiling

### Implementation (When Ready)

#### 1. Sign up for Plausible
- Go to https://plausible.io
- Choose plan: Starter (~€9/month) or Growth (~€19/month)
- Domain: integrapartners.com

#### 2. Add script to layout.tsx
```tsx
// In app/layout.tsx, add to <head>:
<Script
  defer
  data-domain="integrapartners.com"
  src="https://plausible.io/js/script.js"
  strategy="afterInteractive"
/>
```

#### 3. Configuration options
- **Goals**: Track form submissions, CTA clicks
- **Custom events**: Diagnostic requests, resource downloads
- **Exclusions**: /admin paths (if any)

#### 4. Privacy compliance
- Already GDPR-compliant by design
- No consent banner required
- Update cookies page to mention Plausible (already done)
- Mention in privacy policy (already done)

---

## Phase 3: Google Analytics (OPTIONAL, FUTURE)
**Status**: ⚠️ Not recommended unless strictly necessary  
**Implementation**: Google Tag Manager (GTM) only  
**Requirements**: Explicit consent, IP anonymization

### Only if Required By:
- Large institutional partners demanding GA
- Specific marketing campaigns requiring GA conversion tracking
- Board/investor requirements

### Strict Implementation Rules
1. **Via GTM only** (never direct GA script)
2. **Consent-based**: Cookie banner required
3. **IP anonymization**: Mandatory
4. **No ads personalization**: Disable all ad features
5. **Data retention**: Minimum (14 months max)
6. **GDPR mode**: All privacy features enabled
7. **Cookie prefix**: Use `_gac_` prefix for control

### GTM Setup (if needed)
```tsx
// Only add after explicit consent
<Script
  id="gtm"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXXX');
    `,
  }}
/>
```

---

## Current Status Summary

| Feature | Phase 1 (Now) | Phase 2 (Ready) | Phase 3 (Optional) |
|---------|---------------|-----------------|-------------------|
| **Analytics** | None | Plausible | Google Analytics |
| **Cookies** | Essential only | None (Plausible) | Yes (with consent) |
| **Consent banner** | No | No | Yes (required) |
| **Performance impact** | 0KB | <1KB | ~50KB+ |
| **Privacy** | ✅ Perfect | ✅ Excellent | ⚠️ Requires management |
| **GDPR compliance** | ✅ Native | ✅ Native | ⚠️ Requires config |
| **Institutional credibility** | ✅ High | ✅ High | ⚠️ Medium |

---

## Decision Matrix

### Activate Plausible (Phase 2) when:
- ✅ Site has enough traffic to analyze (>100 visitors/month)
- ✅ Need to understand traffic sources and geography
- ✅ Want to measure content effectiveness
- ✅ Need data for strategic decisions
- ✅ Want to maintain institutional credibility

### Consider Google Analytics (Phase 3) only if:
- ⚠️ Explicitly required by partners/investors
- ⚠️ Need integration with Google Ads
- ⚠️ Require specific GA-only features
- ⚠️ Accept trade-off on institutional perception

---

## Contact
For implementation questions:
- Technical: dev@integrapartners.com
- Privacy/DPO: dpo@integrapartners.com
- Strategy: contact@integrapartners.com

---

**Last updated**: 11 janvier 2026  
**Current phase**: Phase 1 (No analytics)  
**Next review**: When traffic justifies analytics (Phase 2)
