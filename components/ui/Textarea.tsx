import { TextareaHTMLAttributes, forwardRef, useId } from 'react'
import { AlertCircle } from 'lucide-react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helper,
  className = '',
  id,
  required,
  rows = 4,
  ...props
}, ref) => {
  const generatedId = useId()
  const textareaId = id || `textarea-${generatedId}`
  const errorId = `${textareaId}-error`
  const helperId = `${textareaId}-helper`

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-label text-gray-700 font-medium"
        >
          {label}
          {required && <span className="text-error ml-1" aria-label="requis">*</span>}
        </label>
      )}

      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={`
          w-full px-4 py-3
          bg-white
          border-2 rounded
          text-body-m text-gray-900
          placeholder:text-gray-500
          resize-none
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
      />

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

Textarea.displayName = 'Textarea'
