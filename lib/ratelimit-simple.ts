/**
 * Rate Limiting Simple - In-Memory Implementation
 * Protection contre le spam et les attaques DDoS sur les API endpoints
 * 
 * Usage:
 *   const result = rateLimit(ip, maxRequests, windowMs)
 *   if (!result.allowed) return 429 Too Many Requests
 */

interface RateLimitRecord {
    count: number
    resetTime: number
}

// Stockage en mémoire des requêtes par IP
const requests = new Map<string, RateLimitRecord>()

// Nettoyage périodique des entrées expirées (toutes les 10 minutes)
setInterval(() => {
    const now = Date.now()
    for (const [ip, record] of requests.entries()) {
        if (now > record.resetTime) {
            requests.delete(ip)
        }
    }
}, 600000) // 10 minutes

/**
 * Vérifie si une IP a dépassé la limite de requêtes
 * 
 * @param ip - Adresse IP du client
 * @param maxRequests - Nombre maximum de requêtes autorisées (défaut: 5)
 * @param windowMs - Fenêtre de temps en millisecondes (défaut: 10 min)
 * @returns Objet avec allowed (boolean), remaining (number), resetTime (number)
 */
export function rateLimit(
    ip: string,
    maxRequests: number = 5,
    windowMs: number = 600000 // 10 minutes par défaut
): {
    allowed: boolean
    remaining: number
    resetTime: number
    limit: number
} {
    const now = Date.now()
    const record = requests.get(ip)

    // Première requête ou fenêtre expirée
    if (!record || now > record.resetTime) {
        const resetTime = now + windowMs
        requests.set(ip, { count: 1, resetTime })
        return {
            allowed: true,
            remaining: maxRequests - 1,
            resetTime,
            limit: maxRequests
        }
    }

    // Limite atteinte
    if (record.count >= maxRequests) {
        return {
            allowed: false,
            remaining: 0,
            resetTime: record.resetTime,
            limit: maxRequests
        }
    }

    // Incrémenter le compteur
    record.count++
    return {
        allowed: true,
        remaining: maxRequests - record.count,
        resetTime: record.resetTime,
        limit: maxRequests
    }
}

/**
 * Réinitialise le rate limit pour une IP (utile pour les tests)
 */
export function resetRateLimit(ip: string): void {
    requests.delete(ip)
}

/**
 * Obtient les statistiques du rate limiter
 */
export function getRateLimitStats(): {
    totalIPs: number
    activeRecords: number
} {
    const now = Date.now()
    let activeRecords = 0

    for (const record of requests.values()) {
        if (now <= record.resetTime) {
            activeRecords++
        }
    }

    return {
        totalIPs: requests.size,
        activeRecords
    }
}
