'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from './Button'

interface NavLink {
  label: string
  href: string
}

export interface HeaderProps {
  /**
   * Liens de navigation
   */
  navLinks?: NavLink[]
  
  /**
   * Texte du bouton CTA
   * @default 'Diagnostic'
   */
  ctaText?: string
  
  /**
   * Lien du bouton CTA
   * @default '/diagnostic'
   */
  ctaHref?: string
  
  /**
   * Logo texte (ou composant)
   */
  logo?: string | React.ReactNode
  
  /**
   * Langues disponibles
   */
  languages?: { code: string; label: string }[]
  
  /**
   * Classes CSS additionnelles
   */
  className?: string
}

const defaultNavLinks: NavLink[] = [
  { label: 'Cabinet', href: '/cabinet' },
  { label: 'Méthode', href: '/methode-integra' },
  { label: 'Domaines', href: '/domaines' },
  { label: 'Ressources', href: '/ressources' },
]

const defaultLanguages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

export function Header({
  navLinks = defaultNavLinks,
  ctaText = 'Diagnostic',
  ctaHref = '/diagnostic',
  logo = 'INTEGRA PARTNERS',
  languages = defaultLanguages,
  className = ''
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])
  
  return (
    <>
      <header
        className={`
          sticky top-0 z-50
          bg-white
          border-b border-gray-200
          transition-shadow duration-200
          ${isScrolled ? 'shadow-sm' : ''}
          ${className}
        `.replace(/\s+/g, ' ').trim()}
      >
        <div className="container mx-auto">
          <nav 
            className="flex items-center justify-between h-20"
            aria-label="Navigation principale"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              {typeof logo === 'string' ? (
                <span className="
                  font-heading text-h3 text-navy
                  tracking-tight
                ">
                  {logo}
                </span>
              ) : (
                logo
              )}
            </Link>
            
            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-body-m text-gray-700
                      font-medium
                      transition-colors
                      hover:text-navy
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Languages & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Languages */}
              <div className="flex items-center gap-3">
                {languages.map((lang, index) => (
                  <span key={lang.code} className="flex items-center gap-3">
                    <Link
                      href={`/${lang.code}`}
                      className="text-sm text-gray-600 hover:text-navy transition-colors font-medium"
                      hrefLang={lang.code}
                    >
                      {lang.label}
                    </Link>
                    {index < languages.length - 1 && (
                      <span className="text-gray-300">|</span>
                    )}
                  </span>
                ))}
              </div>
              
              {/* CTA */}
              <Link href={ctaHref}>
                <Button variant="primary" size="md">
                  {ctaText}
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6 text-navy" />
            </button>
          </nav>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-50
          bg-white
          lg:hidden
          transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `.replace(/\s+/g, ' ').trim()}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Header */}
        <div className="
          flex items-center justify-between
          h-20 px-6
          border-b border-gray-200
        ">
          <span className="font-heading text-h3 text-navy">
            {typeof logo === 'string' ? logo : 'INTEGRA PARTNERS'}
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fermer le menu"
            className="p-2 -mr-2"
          >
            <X className="w-6 h-6 text-navy" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    block py-3 px-4
                    text-h4 text-gray-900
                    font-medium
                    rounded
                    hover:bg-gray-100
                    transition-colors
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* CTA Mobile */}
          <div className="mt-8">
            <Link href={ctaHref} className="block">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
              >
                {ctaText}
              </Button>
            </Link>
          </div>
          
          {/* Languages Mobile */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Langue</p>
            <div className="flex items-center gap-4">
              {languages.map((lang, index) => (
                <span key={lang.code} className="flex items-center gap-4">
                  <Link
                    href={`/${lang.code}`}
                    className="text-sm text-gray-700 hover:text-navy transition-colors font-medium"
                    hrefLang={lang.code}
                  >
                    {lang.label}
                  </Link>
                  {index < languages.length - 1 && (
                    <span className="text-gray-300">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
