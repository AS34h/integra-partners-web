import { SelectHTMLAttributes, forwardRef } from 'react'
import { AlertCircle } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Label du champ
   */
  label?: string
  
  /**
   * Message d'erreur
   */
  error?: string
  
  /**
   * Texte d'aide
   */
  helper?: string
  
  /**
   * Options du select
   */
  options: SelectOption[]
  
  /**
   * Texte du placeholder
   * @default 'Sélectionner...'
   */
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  helper,
  options,
  placeholder = 'Sélectionner...',
  className = '',
  id,
  required,
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`
  const errorId = `${selectId}-error`
  const helperId = `${selectId}-helper`
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={selectId}
          className="block text-label text-gray-700 font-medium"
        >
          {label}
          {required && <span className="text-error ml-1" aria-label="requis">*</span>}
        </label>
      )}
      
      <select
        ref={ref}
        id={selectId}
        className={`
          w-full h-12 px-4
          bg-white
          border-2 rounded
          text-body-m text-gray-900
          cursor-pointer
          transition-colors duration-150
          focus:outline-none
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
          ${error 
            ? 'border-error focus:border-error focus:ring-1 focus:ring-error' 
            : 'border-gray-400 focus:border-navy focus:ring-1 focus:ring-navy'
          }
          ${className}
        `.replace(/\s+/g, ' ').trim()}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : helper ? helperId : undefined}
        required={required}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {error && (
        <p id={errorId} className="text-sm text-error flex items-center gap-2" role="alert">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </p>
      )}
      
      {helper && !error && (
        <p id={helperId} className="text-sm text-gray-600">
          {helper}
        </p>
      )}
    </div>
  )
})

Select.displayName = 'Select'
