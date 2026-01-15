import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CardMeta {
  category?: string
  date?: string
  readTime?: string
}

interface CardProps {
  /**
   * Variante de la card
   * @default 'service'
   */
  variant?: 'service' | 'article' | 'stat' | 'custom'

  /**
   * Titre de la card
   */
  title?: string

  /**
   * Description/contenu
   */
  description?: string

  /**
   * Icône (optionnelle, pour service)
   */
  icon?: ReactNode

  /**
   * Image (optionnelle, pour article)
   */
  image?: string

  /**
   * Alt de l'image
   */
  imageAlt?: string

  /**
   * URL de destination
   */
  href?: string

  /**
   * Label du CTA
   * @default 'En savoir plus'
   */
  ctaLabel?: string

  /**
   * Meta info (pour article)
   */
  meta?: CardMeta

  /**
   * Contenu personnalisé
   */
  children?: ReactNode

  /**
   * Classes CSS additionnelles
   */
  className?: string
}

export function Card({
  variant = 'service',
  title,
  description,
  icon,
  image,
  imageAlt = '',
  href,
  ctaLabel = 'En savoir plus',
  meta,
  children,
  className = ''
}: CardProps) {
  const baseClasses = `
    bg-white
    border border-gray-300
    rounded
    transition-all duration-200
    hover:border-anthracite
    hover:shadow-sm
  `

  // Service Card
  if (variant === 'service') {
    return (
      <article className={`${baseClasses} p-8 ${className}`.replace(/\s+/g, ' ').trim()}>
        {icon && (
          <div className="
            w-12 h-12 mb-6
            flex items-center justify-center
            bg-gray-100 rounded
          ">
            <div className="text-navy [&>svg]:w-6 [&>svg]:h-6">
              {icon}
            </div>
          </div>
        )}

        {title && (
          <h3 className="mb-3 font-heading text-h4 text-navy">
            {title}
          </h3>
        )}

        {description && (
          <p className="mb-6 text-body-m text-gray-700 leading-relaxed">
            {description}
          </p>
        )}

        {children}

        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-navy font-medium group"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </article>
    )
  }

  // Article Card
  if (variant === 'article') {
    const content = (
      <>
        {image && (
          <div className="aspect-video bg-gray-200 overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="
                w-full h-full object-cover
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </div>
        )}

        <div className="p-8">
          {meta && (
            <div className="flex items-center gap-2 mb-4 text-caption text-gray-600">
              {meta.category && <span>{meta.category}</span>}
              {meta.date && (
                <>
                  <span>•</span>
                  <span>{meta.date}</span>
                </>
              )}
              {meta.readTime && (
                <>
                  <span>•</span>
                  <span>{meta.readTime}</span>
                </>
              )}
            </div>
          )}

          {title && (
            <h3 className="font-heading text-h4 text-navy mb-3">
              {title}
            </h3>
          )}

          {description && (
            <p className="text-body-m text-gray-700 mb-4">
              {description}
            </p>
          )}

          {href && (
            <div className="
              inline-flex items-center gap-2 
              text-body-m text-navy font-medium
              group-hover:gap-3 transition-all
            ">
              <span>{ctaLabel}</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          )}
        </div>
      </>
    )

    if (href) {
      return (
        <Link
          href={href}
          className={`${baseClasses} overflow-hidden group block ${className}`.replace(/\s+/g, ' ').trim()}
        >
          {content}
        </Link>
      )
    }

    return (
      <article className={`${baseClasses} overflow-hidden ${className}`.replace(/\s+/g, ' ').trim()}>
        {content}
      </article>
    )
  }

  // Stat Card
  if (variant === 'stat') {
    return (
      <article className={`${baseClasses} p-8 text-center ${className}`.replace(/\s+/g, ' ').trim()}>
        {children}
      </article>
    )
  }

  // Custom/Default
  return (
    <article className={`${baseClasses} p-8 ${className}`.replace(/\s+/g, ' ').trim()}>
      {children}
    </article>
  )
}

// Export de variantes pré-configurées
export const ServiceCard = (props: Omit<CardProps, 'variant'>) => (
  <Card variant="service" {...props} />
)

export const ArticleCard = (props: Omit<CardProps, 'variant'>) => (
  <Card variant="article" {...props} />
)

export const StatCard = (props: Omit<CardProps, 'variant'>) => (
  <Card variant="stat" {...props} />
)
