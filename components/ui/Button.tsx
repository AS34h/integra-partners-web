import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variante du bouton
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold' | 'outline'

  /**
   * Taille du bouton
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * État de chargement
   */
  loading?: boolean

  /**
   * Icône (optionnelle)
   */
  icon?: ReactNode

  /**
   * Position de l'icône
   * @default 'left'
   */
  iconPosition?: 'left' | 'right'

  /**
   * Contenu du bouton
   */
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-medium rounded transition-all duration-200 inline-flex items-center justify-center gap-2'

  const variantClasses = {
    primary: `
      bg-navy text-white border-none
      hover:brightness-110 hover:shadow-md
      active:brightness-90
      disabled:bg-gray-400 disabled:cursor-not-allowed
      transition-all duration-200
    `,
    secondary: `
      bg-transparent text-navy border-2 border-navy
      hover:bg-navy hover:text-white hover:shadow-sm
      active:bg-opacity-90
      disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed
      transition-all duration-200
    `,
    ghost: `
      bg-transparent text-navy border-none
      hover:bg-gray-100
      active:bg-gray-200
      disabled:text-gray-400 disabled:cursor-not-allowed
      transition-all duration-150
    `,
    gold: `
      bg-gold text-navy border-none font-semibold
      hover:brightness-105 hover:shadow-md
      active:brightness-95
      disabled:bg-gray-400 disabled:cursor-not-allowed
      transition-all duration-200
    `,
    outline: `
      bg-transparent text-white border-2 border-white
      hover:bg-white hover:text-navy hover:shadow-md
      active:bg-gray-100 active:text-navy
      disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed
      transition-all duration-200
    `
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-body-m',
    lg: 'px-10 py-5 text-lg',
  }

  const isDisabled = disabled || loading

  return (
    <button
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {!loading && icon && iconPosition === 'left' && icon}

      <span>{children}</span>

      {!loading && icon && iconPosition === 'right' && icon}
    </button>
  )
}

// Export de variantes pré-configurées pour usage rapide
export const PrimaryButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="primary" {...props} />
)

export const SecondaryButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="secondary" {...props} />
)

export const GhostButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="ghost" {...props} />
)
