import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'

interface IconProps extends Omit<ComponentProps<LucideIcon>, 'ref'> {
  /**
   * Composant d'icône Lucide
   */
  icon: LucideIcon
  
  /**
   * Taille de l'icône
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  
  /**
   * Classes CSS additionnelles
   */
  className?: string
}

const sizeClasses = {
  sm: 'w-5 h-5',   // 20px
  md: 'w-6 h-6',   // 24px
  lg: 'w-8 h-8',   // 32px
  xl: 'w-12 h-12', // 48px
}

export function Icon({
  icon: IconComponent,
  size = 'md',
  className = '',
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <IconComponent
      className={`${sizeClasses[size]} ${className}`.trim()}
      strokeWidth={strokeWidth}
      {...props}
    />
  )
}
