import { AnchorHTMLAttributes, ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import NextLink from 'next/link'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Variante du lien
   * @default 'inline'
   */
  variant?: 'inline' | 'standalone' | 'navigation'
  
  /**
   * URL de destination
   */
  href: string
  
  /**
   * Afficher l'icône flèche (standalone uniquement)
   * @default true
   */
  showIcon?: boolean
  
  /**
   * Lien externe (ouvre nouvel onglet)
   * @default false
   */
  external?: boolean
  
  /**
   * Contenu du lien
   */
  children: ReactNode
}

export function Link({ 
  variant = 'inline',
  href,
  showIcon = true,
  external = false,
  children, 
  className = '',
  ...props 
}: LinkProps) {
  const baseClasses = 'transition-colors duration-150'
  
  const variantClasses = {
    inline: `
      text-navy
      underline underline-offset-2 decoration-1
      hover:text-anthracite
      focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 focus:rounded
    `,
    standalone: `
      inline-flex items-center gap-2
      text-navy font-medium
      hover:text-anthracite
      focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 focus:rounded
      group
    `,
    navigation: `
      text-gray-700 font-medium
      hover:text-navy
      aria-[current=page]:text-navy aria-[current=page]:font-semibold
      focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 focus:rounded
    `
  }
  
  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}
  
  const linkClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.replace(/\s+/g, ' ').trim()
  
  // Next.js Link pour navigation interne
  if (!external && href.startsWith('/')) {
    return (
      <NextLink 
        href={href}
        className={linkClasses}
        {...props}
      >
        {variant === 'standalone' && showIcon ? (
          <>
            <span>{children}</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
          </>
        ) : (
          children
        )}
      </NextLink>
    )
  }
  
  // Lien standard pour externe ou ancre
  return (
    <a
      href={href}
      className={linkClasses}
      {...externalProps}
      {...props}
    >
      {variant === 'standalone' && showIcon ? (
        <>
          <span>{children}</span>
          <ChevronRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
        </>
      ) : (
        children
      )}
      {external && (
        <span className="sr-only">(ouvre dans un nouvel onglet)</span>
      )}
    </a>
  )
}

// Export de variantes pré-configurées pour usage rapide
export const InlineLink = (props: Omit<LinkProps, 'variant'>) => (
  <Link variant="inline" {...props} />
)

export const StandaloneLink = (props: Omit<LinkProps, 'variant'>) => (
  <Link variant="standalone" {...props} />
)

export const NavigationLink = (props: Omit<LinkProps, 'variant'>) => (
  <Link variant="navigation" {...props} />
)
