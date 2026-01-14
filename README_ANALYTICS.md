# INTEGRA PARTNERS - Analytics Strategy

## Overview
This project follows a **3-phase privacy-first analytics strategy** aligned with international institutional standards.

## 🎯 Current Phase: Phase 1 (No Analytics)

### Why No Analytics at Launch?
1. **Institutional Credibility**: No dependency on Google or data-harvesting tools
2. **Performance**: Zero tracking overhead, maximum speed
3. **Privacy**: No consent banners, no cookies, no third-party requests
4. **Simplicity**: Focus on core business value first

### What's Tracked?
- Nothing. Pure institutional website.
- Server logs only (standard web server analytics)

---

## 📊 Phase 2: Privacy-First Analytics (Ready to Deploy)

### When to Activate?
- When traffic justifies analytics (>100 monthly visitors)
- When you need to understand:
  - Which pages are most viewed
  - Geographic distribution of visitors
  - Traffic sources (direct, referral, search)
  - Content performance

### Recommended: Plausible Analytics

**Why Plausible?**
- ✅ No cookies (GDPR-exempt)
- ✅ No consent banner required
- ✅ EU data hosting
- ✅ Open source & transparent
- ✅ Lightweight (<1KB)
- ✅ Privacy-first by design
- ✅ Simple, executive-friendly dashboard

**Cost**: €9-19/month (Starter/Growth plan)

### How to Activate Phase 2

1. **Sign up for Plausible**
   ```bash
   Visit: https://plausible.io
   Domain: integrapartners.com
   ```

2. **Enable in code**
   ```tsx
   // In app/layout.tsx, change:
   <Analytics enabled={false} />
   // To:
   <Analytics enabled={true} />
   ```

3. **Deploy**
   ```bash
   npm run build
   git add .
   git commit -m "Analytics: Activate Phase 2 (Plausible)"
   git push
   ```

4. **Verify**
   - Visit your site
   - Check Plausible dashboard
   - No console errors
   - No impact on Lighthouse score

### Metrics Available (Anonymized)
- Page views & unique visitors
- Top pages
- Traffic sources (referrers)
- Countries & regions
- Devices & browsers
- Entry/exit pages

### Privacy Guarantees
- ❌ No personal data
- ❌ No cookies
- ❌ No IP addresses stored
- ❌ No cross-site tracking
- ❌ No behavioral profiling
- ❌ No data selling
- ✅ 100% GDPR compliant
- ✅ No consent required

---

## ⚠️ Phase 3: Google Analytics (Optional, Not Recommended)

### Only Consider If:
- Explicitly required by major partners/investors
- Need specific GA-only integrations
- Marketing campaigns demand GA conversion tracking

### Strict Requirements
1. **Must use Google Tag Manager (GTM)** - never direct GA
2. **Explicit consent required** - cookie banner mandatory
3. **IP anonymization** - must be enabled
4. **No ads signals** - disable all advertising features
5. **Minimal data retention** - 14 months maximum
6. **GDPR mode** - all privacy features active

### Implementation (Only If Absolutely Needed)
See [docs/ANALYTICS_STRATEGY.md](./docs/ANALYTICS_STRATEGY.md) for GTM setup.

**Trade-offs:**
- ⚠️ Reduces institutional credibility
- ⚠️ Requires consent management
- ⚠️ Performance impact (~50KB+)
- ⚠️ Complex privacy compliance
- ⚠️ Perception as "big tech dependent"

---

## 📁 File Structure

```
/
├── components/
│   └── Analytics.tsx           # Analytics component (Phase 2 ready)
├── app/
│   ├── layout.tsx              # Analytics integration point
│   ├── cookies/page.tsx        # Updated for Plausible
│   └── confidentialite/page.tsx # Updated privacy policy
├── docs/
│   └── ANALYTICS_STRATEGY.md   # Detailed strategy & implementation
└── README_ANALYTICS.md         # This file
```

---

## 🔧 Configuration

### Environment Variables (Phase 2+)
```env
# Optional: Custom Plausible domain
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=integrapartners.com

# Optional: Self-hosted Plausible
NEXT_PUBLIC_PLAUSIBLE_SRC=https://analytics.yourdomain.com/js/script.js
```

### Track Custom Events (Phase 2)
```tsx
import { trackEvent } from '@/components/Analytics'

// Track form submission
trackEvent('Diagnostic Request')

// Track with properties
trackEvent('Resource Download', {
  props: { resource: 'White Paper 2024' }
})
```

---

## 📈 Migration Path

### From Phase 1 to Phase 2
1. Sign up for Plausible
2. Set `enabled={true}` in layout.tsx
3. Deploy
4. Done ✅

### From Phase 2 to Phase 3 (If Required)
1. Set up Google Tag Manager account
2. Implement consent management (e.g., Cookiebot, OneTrust)
3. Update cookies page with detailed GA cookie info
4. Add GTM container to layout
5. Configure GA4 in GTM with privacy settings
6. Test extensively
7. Update all legal pages

---

## 🎯 Success Metrics

### Phase 1 (Current)
- ✅ Lighthouse Performance: 100
- ✅ No third-party requests
- ✅ No consent banners
- ✅ Institutional credibility maintained

### Phase 2 (When Activated)
- ✅ Lighthouse Performance: 95-100
- ✅ Analytics data available
- ✅ Still no consent banners
- ✅ GDPR-compliant by design
- ✅ Institutional credibility preserved

### Phase 3 (Only If Needed)
- ⚠️ Lighthouse Performance: 85-95
- ⚠️ Consent management required
- ⚠️ Complex privacy setup
- ⚠️ Institutional perception impact

---

## 🔒 Privacy Commitments

### What We NEVER Do
- ❌ Sell or share visitor data
- ❌ Track users across websites
- ❌ Use advertising networks
- ❌ Store personal information
- ❌ Create user profiles
- ❌ Use cookies for tracking (Phase 1 & 2)

### What We Do (Phase 2+)
- ✅ Collect anonymous aggregate statistics
- ✅ Understand which content is valuable
- ✅ Measure site performance
- ✅ Respect user privacy
- ✅ Comply with all regulations
- ✅ Use privacy-first tools only

---

## 📞 Support

### Questions?
- **Technical**: dev@integrapartners.com
- **Privacy/DPO**: dpo@integrapartners.com
- **Strategy**: contact@integrapartners.com

### Resources
- [Plausible Docs](https://plausible.io/docs)
- [GDPR Compliance](https://gdpr.eu)
- [Analytics Strategy Doc](./docs/ANALYTICS_STRATEGY.md)

---

**Last Updated**: 11 janvier 2026  
**Current Phase**: Phase 1 (No analytics)  
**Status**: ✅ Production-ready, privacy-first
