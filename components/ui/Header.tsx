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
  { label: 'Cabinet', href: '/fr/cabinet' },
  { label: 'Méthode', href: '/fr/methode-integra' },
  { label: 'Services', href: '/fr/services' },
  { label: 'Togo', href: '/fr/togo' },
  { label: 'Diaspora', href: '/fr/diaspora' },
  { label: 'Ressources', href: '/fr/ressources' },
]

const defaultLanguages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
]

export function Header({
  navLinks = defaultNavLinks,
  ctaText = 'Diagnostic',
  ctaHref = '/fr/diagnostic-ims',
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
          bg-gray-950 backdrop-blur-sm
          border-b border-gray-800
          transition-all duration-300
          ${isScrolled ? 'shadow-xl border-gray-700' : ''}
          ${className}
        `.replace(/\s+/g, ' ').trim()}
      >
        <div className="container mx-auto px-6">
          <nav
            className="flex items-center justify-between h-20"
            aria-label="Navigation principale"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              {typeof logo === 'string' ? (
                <span className="
                  font-heading text-4xl text-white
                  tracking-tight font-bold
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
                      text-base text-gray-400
                      font-medium
                      transition-all duration-200
                      hover:text-white
                      relative
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                      after:bg-white after:transition-all after:duration-300
                      hover:after:w-full
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
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors font-medium"
                      hrefLang={lang.code}
                    >
                      {lang.label}
                    </Link>
                    {index < languages.length - 1 && (
                      <span className="text-gray-700">|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* CTA Diagnostic - Version institutionnelle */}
              <Link href={ctaHref}>
                <Button variant="primary" size="md" className="bg-white text-gray-950 hover:bg-gray-100 shadow-md hover:shadow-lg font-semibold">
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
              <Menu className="w-6 h-6 text-white" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-50
          bg-gray-950
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
          border-b border-gray-800
        ">
          <span className="font-heading text-4xl text-white font-bold">
            {typeof logo === 'string' ? logo : 'INTEGRA PARTNERS'}
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fermer le menu"
            className="p-2 -mr-2"
          >
            <X className="w-6 h-6 text-white" />
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
                    text-lg text-gray-300
                    font-medium
                    rounded
                    hover:bg-gray-900 hover:text-white
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
                className="w-full bg-white text-gray-950 hover:bg-gray-100"
              >
                {ctaText}
              </Button>
            </Link>
          </div>

          {/* Languages Mobile */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500 mb-3">Langue</p>
            <div className="flex items-center gap-4">
              {languages.map((lang, index) => (
                <span key={lang.code} className="flex items-center gap-4">
                  <Link
                    href={`/${lang.code}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
                    hrefLang={lang.code}
                  >
                    {lang.label}
                  </Link>
                  {index < languages.length - 1 && (
                    <span className="text-gray-700">|</span>
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
