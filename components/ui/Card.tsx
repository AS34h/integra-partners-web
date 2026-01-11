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
    const WrapperTag = href ? Link : 'article'
    const wrapperProps = href ? { href } : {}
    
    return (
      <WrapperTag 
        className={`${baseClasses} overflow-hidden group block ${className}`.replace(/\s+/g, ' ').trim()}
        {...wrapperProps}
      >
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
        
        <div className="p-6">
          {meta && (
            <div className="mb-3 flex items-center gap-3 text-caption text-gray-600">
              {meta.category && <span className="text-label uppercase">{meta.category}</span>}
              {meta.date && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={meta.date}>{meta.date}</time>
                </>
              )}
              {meta.readTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{meta.readTime}</span>
                </>
              )}
            </div>
          )}
          
          {title && (
            <h3 className="
              mb-3
              font-heading text-h4 text-navy
              group-hover:text-anthracite
              transition-colors
            ">
              {title}
            </h3>
          )}
          
          {description && (
            <p className="text-body-m text-gray-700 line-clamp-3">
              {description}
            </p>
          )}
          
          {children}
        </div>
      </WrapperTag>
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
