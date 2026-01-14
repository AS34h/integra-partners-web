import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirections /fr/ structure
      {
        source: '/cabinet',
        destination: '/fr/cabinet',
        permanent: true,
      },
      {
        source: '/methode-integra',
        destination: '/fr/methode-integra',
        permanent: true,
      },
      {
        source: '/diagnostic',
        destination: '/fr/diagnostic-ims',
        permanent: true,
      },
      // Redirections obsolètes /domaines vers Services
      {
        source: '/domaines',
        destination: '/fr/services',
        permanent: true,
      },
      {
        source: '/fr/domaines',
        destination: '/fr/services',
        permanent: true,
      },
      {
        source: '/domaines/strategie',
        destination: '/fr/services/conseil-strategique',
        permanent: true,
      },
      {
        source: '/fr/domaines/strategie',
        destination: '/fr/services/conseil-strategique',
        permanent: true,
      },
      {
        source: '/domaines/gouvernance',
        destination: '/fr/services/gouvernance-et-pilotage',
        permanent: true,
      },
      {
        source: '/fr/domaines/gouvernance',
        destination: '/fr/services/gouvernance-et-pilotage',
        permanent: true,
      },
      {
        source: '/domaines/capital-humain',
        destination: '/fr/services',
        permanent: true,
      },
      {
        source: '/fr/domaines/capital-humain',
        destination: '/fr/services',
        permanent: true,
      },
      {
        source: '/domaines/transformation',
        destination: '/fr/services',
        permanent: true,
      },
      {
        source: '/fr/domaines/transformation',
        destination: '/fr/services',
        permanent: true,
      },
      {
        source: '/domaines/:path*',
        destination: '/fr/services',
        permanent: true,
      },
      {
        source: '/fr/domaines/:path*',
        destination: '/fr/services',
        permanent: true,
      },
      {
        source: '/ressources',
        destination: '/fr/ressources',
        permanent: true,
      },
      {
        source: '/ressources/:path*',
        destination: '/fr/ressources/:path*',
        permanent: true,
      },
      {
        source: '/mentions-legales',
        destination: '/fr/mentions-legales',
        permanent: true,
      },
      {
        source: '/confidentialite',
        destination: '/fr/politique-confidentialite',
        permanent: true,
      },
      {
        source: '/cookies',
        destination: '/fr/cookies',
        permanent: true,
      },
    ]
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self'",
              "frame-ancestors 'none'"
            ].join('; ')
          }
        ]
      }
    ]
  }
};

export default nextConfig;
