'use client'

/**
 * Analytics Component - INTEGRA PARTNERS
 * 
 * Privacy-first analytics integration
 * Phase 2: Plausible Analytics (when activated)
 * 
 * Features:
 * - No cookies
 * - GDPR-compliant by design
 * - No consent banner required
 * - EU-hosted data
 * - Lightweight (<1KB)
 */

import Script from 'next/script'

interface AnalyticsProps {
  /**
   * Enable Plausible Analytics
   * Set to true when ready to activate Phase 2
   */
  enabled?: boolean
  
  /**
   * Domain for Plausible tracking
   * @default 'integrapartners.com'
   */
  domain?: string
  
  /**
   * Plausible script source
   * Use custom domain for even better privacy
   */
  src?: string
}

export function Analytics({ 
  enabled = false, // Set to true to activate Phase 2
  domain = 'integrapartners.com',
  src = 'https://plausible.io/js/script.js'
}: AnalyticsProps) {
  // Phase 1: No analytics
  if (!enabled) {
    return null
  }
  
  // Phase 2: Plausible Analytics (privacy-first)
  return (
    <>
      {/* Plausible Analytics - Privacy-first, GDPR-compliant */}
      <Script
        defer
        data-domain={domain}
        src={src}
        strategy="afterInteractive"
      />
    </>
  )
}

/**
 * Track custom events (when Plausible is enabled)
 * 
 * @example
 * trackEvent('Diagnostic Request')
 * trackEvent('Resource Download', { props: { resource: 'Publication 2024' } })
 */
export function trackEvent(
  eventName: string,
  options?: { props?: Record<string, string | number> }
) {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(eventName, options)
  }
}

/**
 * Track pageviews manually (usually not needed, auto-tracked)
 */
export function trackPageview(url?: string) {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('pageview', { u: url || window.location.href })
  }
}
