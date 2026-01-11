import { ReactNode } from 'react'

export interface QuoteProps {
  /**
   * Contenu de la citation
   */
  children: ReactNode
  
  /**
   * Auteur de la citation
   */
  author?: string
  
  /**
   * Titre/fonction de l'auteur
   */
  authorTitle?: string
  
  /**
   * Type de présentation
   * @default 'standard'
   */
  variant?: 'standard' | 'pull' | 'inline'
  
  /**
   * Classes CSS additionnelles
   */
  className?: string
}

export function Quote({
  children,
  author,
  authorTitle,
  variant = 'standard',
  className = ''
}: QuoteProps) {
  if (variant === 'pull') {
    return (
      <figure className={`my-12 text-center ${className}`.trim()}>
        <blockquote>
          <p className="
            font-heading text-h3 text-anthracite
            italic
            leading-relaxed
          ">
            {children}
          </p>
        </blockquote>
        {(author || authorTitle) && (
          <figcaption className="mt-6 text-label text-gray-600">
            {author && <span>— {author}</span>}
            {authorTitle && <span className="block mt-1">{authorTitle}</span>}
          </figcaption>
        )}
      </figure>
    )
  }
  
  if (variant === 'inline') {
    return (
      <q className="font-heading italic text-anthracite">
        {children}
      </q>
    )
  }
  
  // Variant 'standard'
  return (
    <blockquote className={`
      pl-6
      border-l-2 border-gold
      bg-gray-50
      py-6 pr-6
      my-8
      ${className}
    `.replace(/\s+/g, ' ').trim()}>
      <p className="
        font-heading text-h4 text-anthracite
        italic
        mb-4
      ">
        {children}
      </p>
      {(author || authorTitle) && (
        <footer className="space-y-1">
          {author && (
            <cite className="
              not-italic
              text-body-m font-medium text-gray-900
            ">
              {author}
            </cite>
          )}
          {authorTitle && (
            <p className="text-label text-gray-600">
              {authorTitle}
            </p>
          )}
        </footer>
      )}
    </blockquote>
  )
}
