import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'INTEGRA PARTNERS - Cabinet de conseil institutionnel',
    short_name: 'INTEGRA PARTNERS',
    description: 'Cabinet de conseil en stratégie et transformation accompagnant les dirigeants dans leurs décisions majeures.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A1628',
    theme_color: '#0A1628',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
