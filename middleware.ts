import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware de sécurité global
 * Applique les protections de sécurité sur toutes les routes
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // 🔒 Protection API - Validation d'origine stricte
  if (request.nextUrl.pathname.startsWith('/api')) {
    const origin = request.headers.get('origin')
    const isDev = process.env.NODE_ENV === 'development'
    
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_SITE_URL || 'https://integrapartners.com',
      ...(isDev ? ['http://localhost:3000'] : [])
    ]
    
    // Vérifier l'origine pour les requêtes POST/PUT/DELETE
    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
      if (origin && !allowedOrigins.some(allowed => origin.startsWith(allowed))) {
        console.warn(`🚫 Blocked API request from unauthorized origin: ${origin}`)
        return new NextResponse('Forbidden', { status: 403 })
      }
    }
  }
  
  // 🔒 Headers de sécurité additionnels (au cas où next.config.ts ne suffit pas)
  if (!response.headers.has('X-Frame-Options')) {
    response.headers.set('X-Frame-Options', 'DENY')
  }
  if (!response.headers.has('X-Content-Type-Options')) {
    response.headers.set('X-Content-Type-Options', 'nosniff')
  }
  
  return response
}

/**
 * Configuration du matcher
 * Applique le middleware sur toutes les routes sauf les assets statiques
 */
export const config = {
  matcher: [
    /*
     * Match toutes les routes sauf:
     * - _next/static (fichiers statiques)
     * - _next/image (optimisation images)
     * - favicon.ico, robots.txt, sitemap.xml
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)',
  ],
}
