import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit } from '@/lib/ratelimit-simple'
import { validateOrigin, getCSRFConfig } from '@/lib/csrf'

// Schéma de validation avec Zod
const diagnosticSchema = z.object({
  organization: z.string().min(2, 'Nom organisation requis (min 2 caractères)'),
  sector: z.string().min(1, 'Secteur requis'),
  size: z.string().min(1, 'Taille requise'),
  firstName: z.string().min(2, 'Prénom requis (min 2 caractères)'),
  lastName: z.string().min(2, 'Nom requis (min 2 caractères)'),
  position: z.string().min(2, 'Fonction requise (min 2 caractères)'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(8, 'Téléphone invalide (min 8 caractères)'),
  domain: z.string().min(1, 'Domaine requis'),
  challenges: z.string().min(20, 'Description trop courte (min 20 caractères)').max(2000, 'Description trop longue (max 2000 caractères)'),
  timeline: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'Consentement requis')
})

/**
 * Anonymise une adresse email pour les logs (conformité RGPD)
 * Exemple: "john.doe@example.com" → "jo***@example.com"
 */
function anonymizeEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!local || !domain) return '***@***'
  const visibleChars = Math.min(2, local.length)
  return `${local.slice(0, visibleChars)}***@${domain}`
}

/**
 * Tronque une chaîne pour les logs
 */
function truncate(str: string, maxLength: number = 20): string {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str
}

export async function POST(request: NextRequest) {
  try {
    // 🔒 PROTECTION CSRF - Validation de l'origine
    const csrfConfig = getCSRFConfig()
    const isValidOrigin = validateOrigin(request, csrfConfig.allowedOrigins)
    
    if (!isValidOrigin && process.env.NODE_ENV === 'production') {
      console.warn('🚫 CSRF: Invalid origin detected')
      return NextResponse.json({
        success: false,
        message: 'Requête non autorisée'
      }, { status: 403 })
    }
    
    // 🔒 PROTECTION RATE LIMITING
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() 
      || request.headers.get('x-real-ip') 
      || 'unknown'
    
    const rateLimitResult = rateLimit(ip, 5, 600000) // 5 requêtes / 10 minutes
    
    if (!rateLimitResult.allowed) {
      const resetDate = new Date(rateLimitResult.resetTime)
      console.warn(`🚫 Rate limit exceeded for IP: ${ip}`)
      
      return NextResponse.json({
        success: false,
        message: 'Trop de requêtes. Veuillez réessayer dans quelques minutes.',
        rateLimit: {
          limit: rateLimitResult.limit,
          remaining: 0,
          resetAt: resetDate.toISOString()
        }
      }, { 
        status: 429,
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
          'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString()
        }
      })
    }

    // Parse & validate
    const body = await request.json()
    const data = diagnosticSchema.parse(body)

    // 🔒 LOGS CONFORMES RGPD (anonymisés en production)
    if (process.env.NODE_ENV === 'production') {
      console.log('📋 Diagnostic request received:', {
        organization: truncate(data.organization, 15),
        email: anonymizeEmail(data.email),
        domain: data.domain,
        ip: ip.includes(':') ? ip.split(':').slice(0, 3).join(':') + ':***' : ip.split('.').slice(0, 2).join('.') + '.*.*',
        timestamp: new Date().toISOString()
      })
    } else {
      // Logs complets en développement
      console.log('📋 Diagnostic request received (DEV):', {
        organization: data.organization,
        email: data.email,
        domain: data.domain,
        ip,
        timestamp: new Date().toISOString()
      })
    }

    // TODO: Implémenter l'envoi d'email
    // Option 1: Resend (recommandé)
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'diagnostic@integrapartners.com',
    //   to: 'contact@integrapartners.com',
    //   subject: `Nouvelle demande diagnostic - ${data.organization}`,
    //   html: `
    //     <h2>Nouvelle demande de diagnostic</h2>
    //     <p><strong>Organisation:</strong> ${data.organization}</p>
    //     <p><strong>Secteur:</strong> ${data.sector}</p>
    //     <p><strong>Contact:</strong> ${data.firstName} ${data.lastName}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Téléphone:</strong> ${data.phone}</p>
    //     <p><strong>Fonction:</strong> ${data.position}</p>
    //     <p><strong>Domaine:</strong> ${data.domain}</p>
    //     <p><strong>Enjeux:</strong> ${data.challenges}</p>
    //     <p><strong>Timeline:</strong> ${data.timeline || 'Non spécifié'}</p>
    //   `
    // })

    // Option 2: Nodemailer SMTP
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   secure: process.env.SMTP_SECURE === 'true',
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASSWORD
    //   }
    // })
    // await transporter.sendMail({...})

    return NextResponse.json({
      success: true,
      message: 'Demande reçue avec succès. Nous vous contacterons sous 48h.',
      rateLimit: {
        limit: rateLimitResult.limit,
        remaining: rateLimitResult.remaining
      }
    }, { 
      status: 201,
      headers: {
        'X-RateLimit-Limit': rateLimitResult.limit.toString(),
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString()
      }
    })

  } catch (error) {
    // Gestion des erreurs de validation Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        errors: error.issues.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }))
      }, { status: 400 })
    }

    // Erreur serveur générique (log anonymisé en production)
    if (process.env.NODE_ENV === 'production') {
      console.error('❌ Diagnostic API error:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      })
    } else {
      console.error('❌ Diagnostic API error:', error)
    }
    
    return NextResponse.json({
      success: false,
      message: 'Erreur serveur. Veuillez réessayer plus tard.'
    }, { status: 500 })
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'diagnostic-api',
    timestamp: new Date().toISOString()
  })
}
