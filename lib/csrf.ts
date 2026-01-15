/**
 * CSRF Protection Utility
 * Simple CSRF token generation and validation for API routes
 * 
 * Usage in API Route:
 *   const token = generateCSRFToken(sessionId)
 *   const isValid = validateCSRFToken(token, request)
 */

import crypto from 'crypto'

// Secret clé (doit être en .env en production)
const CSRF_SECRET = process.env.CSRF_SECRET || 'change-me-in-production-use-random-32-chars'

/**
 * Génère un token CSRF sécurisé
 * @param sessionId - Identifiant de session unique (peut être l'IP)
 * @returns Token CSRF hexadécimal
 */
export function generateCSRFToken(sessionId: string): string {
    const timestamp = Date.now().toString()
    const data = `${sessionId}:${timestamp}`

    const hmac = crypto.createHmac('sha256', CSRF_SECRET)
    hmac.update(data)
    const signature = hmac.digest('hex')

    // Encoder le timestamp + signature pour validation
    const tokenData = Buffer.from(`${timestamp}:${signature}`).toString('base64')
    return tokenData
}

/**
 * Valide un token CSRF
 * @param token - Token CSRF à valider
 * @param sessionId - Identifiant de session (IP ou autre)
 * @param maxAge - Durée de validité en ms (défaut: 1 heure)
 * @returns true si le token est valide
 */
export function validateCSRFToken(
    token: string,
    sessionId: string,
    maxAge: number = 3600000 // 1 heure
): boolean {
    try {
        // Décoder le token
        const decoded = Buffer.from(token, 'base64').toString('utf-8')
        const [timestamp, receivedSignature] = decoded.split(':')

        if (!timestamp || !receivedSignature) {
            return false
        }

        // Vérifier l'expiration
        const tokenTime = parseInt(timestamp, 10)
        if (Date.now() - tokenTime > maxAge) {
            return false
        }

        // Recalculer la signature
        const data = `${sessionId}:${timestamp}`
        const hmac = crypto.createHmac('sha256', CSRF_SECRET)
        hmac.update(data)
        const expectedSignature = hmac.digest('hex')

        // Comparaison timing-safe
        return crypto.timingSafeEqual(
            Buffer.from(receivedSignature),
            Buffer.from(expectedSignature)
        )
    } catch (error) {
        return false
    }
}

/**
 * Extrait le token CSRF depuis les headers de la requête
 */
export function getCSRFTokenFromRequest(request: Request): string | null {
    // Chercher dans le header X-CSRF-Token
    const headerToken = request.headers.get('X-CSRF-Token')
    if (headerToken) return headerToken

    // Chercher dans le header personnalisé
    const customToken = request.headers.get('X-Requested-With')
    if (customToken === 'XMLHttpRequest') {
        // Pour les requêtes AJAX, accepter sans token si même origine
        return 'ajax-request'
    }

    return null
}

/**
 * Middleware pour vérifier l'origine de la requête (protection CSRF basique)
 */
export function validateOrigin(request: Request, allowedOrigins: string[]): boolean {
    const origin = request.headers.get('origin')
    const referer = request.headers.get('referer')

    // Si pas d'origine, vérifier le referer
    const source = origin || referer

    if (!source) {
        // Requêtes sans origine (peut être légitime pour certaines API)
        return false
    }

    // Vérifier si l'origine est dans la liste autorisée
    return allowedOrigins.some(allowed => {
        try {
            const sourceUrl = new URL(source)
            const allowedUrl = new URL(allowed)
            return sourceUrl.origin === allowedUrl.origin
        } catch {
            return false
        }
    })
}

/**
 * Configuration CSRF pour l'environnement
 */
export function getCSRFConfig() {
    const isDev = process.env.NODE_ENV === 'development'

    return {
        allowedOrigins: [
            process.env.NEXT_PUBLIC_SITE_URL || 'https://integrapartners.com',
            ...(isDev ? ['http://localhost:3000'] : [])
        ],
        tokenMaxAge: 3600000, // 1 heure
        requireToken: !isDev // En dev, on peut être plus permissif
    }
}
