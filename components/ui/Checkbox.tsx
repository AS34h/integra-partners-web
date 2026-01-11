import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label du checkbox
   */
  label: ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  className = '',
  disabled,
  ...props
}, ref) => {
  return (
    <label className={`flex items-start gap-3 cursor-pointer group ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <input
        ref={ref}
        type="checkbox"
        className={`
          mt-1 w-5 h-5 flex-shrink-0
          border-2 border-gray-400
          rounded
          text-navy
          cursor-pointer
          transition-colors duration-150
          focus:ring-2 focus:ring-navy focus:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50
          ${className}
        `.replace(/\s+/g, ' ').trim()}
        disabled={disabled}
        {...props}
      />
      <span className="text-body-m text-gray-700 group-hover:text-gray-900">
        {label}
      </span>
    </label>
  )
})

Checkbox.displayName = 'Checkbox'
