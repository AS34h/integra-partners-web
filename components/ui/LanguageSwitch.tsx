'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export interface Language {
  code: string
  label: string
  flag: string
}

export interface LanguageSwitchProps {
  /**
   * Langue actuellement sélectionnée
   * @default 'fr'
   */
  currentLanguage?: string

  /**
   * Langues disponibles
   */
  languages?: Language[]

  /**
   * Callback lors du changement de langue
   */
  onChange?: (languageCode: string) => void

  /**
   * Variante d'affichage
   * @default 'default'
   */
  variant?: 'default' | 'compact'

  /**
   * Classes CSS additionnelles
   */
  className?: string
}

const defaultLanguages: Language[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
]

export function LanguageSwitch({
  currentLanguage = 'fr',
  languages = defaultLanguages,
  onChange,
  variant = 'default',
  className = ''
}: LanguageSwitchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (languageCode: string) => {
    setIsOpen(false)

    // Call custom onChange if provided
    if (onChange) {
      onChange(languageCode)
      return
    }

    // Default behavior: Navigate to same page with new locale
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const pathSegments = currentPath.split('/').filter(Boolean)

      // Remove current locale if present
      const locales = languages.map(l => l.code)
      if (locales.includes(pathSegments[0])) {
        pathSegments.shift()
      }

      // Build new path with selected locale
      const newPath = `/${languageCode}/${pathSegments.join('/')}`
      window.location.href = newPath
    }
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2
          px-3 py-2
          text-gray-700
          hover:text-navy
          hover:bg-gray-50
          rounded-lg
          transition-colors
          ${variant === 'compact' ? 'text-sm' : 'text-body-m'}
        `}
        aria-label="Sélectionner une langue"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-xl">{currentLang.flag}</span>
        {variant === 'default' && (
          <span className="font-medium hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        )}
        <ChevronDown
          className={`
            w-4 h-4
            transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="
          absolute top-full right-0 mt-2
          w-48
          bg-white
          border border-gray-200
          rounded-lg
          shadow-lg
          overflow-hidden
          z-50
        ">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`
                w-full
                flex items-center gap-3
                px-4 py-3
                text-left
                transition-colors
                hover:bg-gray-50
                ${language.code === currentLanguage ? 'bg-navy-light/5' : ''}
              `}
            >
              <span className="text-2xl">{language.flag}</span>
              <div className="flex-1">
                <div className={`
                  text-sm font-medium
                  ${language.code === currentLanguage ? 'text-navy' : 'text-gray-900'}
                `}>
                  {language.label}
                </div>
                <div className="text-xs text-gray-500 uppercase">
                  {language.code}
                </div>
              </div>
              {language.code === currentLanguage && (
                <div className="w-2 h-2 bg-gold rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
