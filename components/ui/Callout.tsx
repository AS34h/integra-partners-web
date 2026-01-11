import { ReactNode } from 'react'
import { 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  AlertCircle,
  Lightbulb
} from 'lucide-react'

export interface CalloutProps {
  /**
   * Titre du callout
   */
  title?: string
  
  /**
   * Contenu du callout
   */
  children: ReactNode
  
  /**
   * Variante de style
   * @default 'info'
   */
  variant?: 'info' | 'warning' | 'success' | 'error' | 'neutral'
  
  /**
   * Afficher l'icône
   * @default true
   */
  showIcon?: boolean
  
  /**
   * Classes CSS additionnelles
   */
  className?: string
}

const variantConfig = {
  info: {
    icon: Info,
    container: 'bg-blue-50 border-blue-500',
    title: 'text-blue-900',
    text: 'text-blue-800',
    iconColor: 'text-blue-500'
  },
  warning: {
    icon: AlertTriangle,
    container: 'bg-warning-light border-warning',
    title: 'text-warning-dark',
    text: 'text-gray-900',
    iconColor: 'text-warning'
  },
  success: {
    icon: CheckCircle,
    container: 'bg-success-light border-success',
    title: 'text-success-dark',
    text: 'text-gray-900',
    iconColor: 'text-success'
  },
  error: {
    icon: AlertCircle,
    container: 'bg-error-light border-error',
    title: 'text-error-dark',
    text: 'text-gray-900',
    iconColor: 'text-error'
  },
  neutral: {
    icon: Lightbulb,
    container: 'bg-gray-100 border-navy',
    title: 'text-navy',
    text: 'text-gray-700',
    iconColor: 'text-navy'
  }
}

export function Callout({
  title,
  children,
  variant = 'info',
  showIcon = true,
  className = ''
}: CalloutProps) {
  const config = variantConfig[variant]
  const Icon = config.icon
  
  return (
    <aside className={`
      p-6
      ${config.container}
      border-l-4
      rounded-r
      my-6
      ${showIcon ? 'flex gap-4' : ''}
      ${className}
    `.replace(/\s+/g, ' ').trim()}>
      {showIcon && (
        <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
      )}
      
      <div className="flex-1">
        {title && (
          <h4 className={`
            mb-2
            text-h4 font-semibold
            ${config.title}
          `.replace(/\s+/g, ' ').trim()}>
            {title}
          </h4>
        )}
        
        <div className={`text-body-m ${config.text}`}>
          {children}
        </div>
      </div>
    </aside>
  )
}

// Helpers
export function InfoCallout(props: Omit<CalloutProps, 'variant'>) {
  return <Callout {...props} variant="info" />
}

export function WarningCallout(props: Omit<CalloutProps, 'variant'>) {
  return <Callout {...props} variant="warning" />
}

export function SuccessCallout(props: Omit<CalloutProps, 'variant'>) {
  return <Callout {...props} variant="success" />
}

export function ErrorCallout(props: Omit<CalloutProps, 'variant'>) {
  return <Callout {...props} variant="error" />
}

export function NeutralCallout(props: Omit<CalloutProps, 'variant'>) {
  return <Callout {...props} variant="neutral" />
}
