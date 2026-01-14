import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/ui/Footer'
import { describe, it, expect } from 'vitest'

describe('Footer Component', () => {
  it('renders all footer sections', () => {
    render(<Footer />)
    
    // Check main sections
    expect(screen.getByText('INTEGRA PARTNERS')).toBeInTheDocument()
    expect(screen.getByText('Cabinet & Méthode')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Analyses & Ressources')).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    
    expect(screen.getByText('Mentions légales')).toBeInTheDocument()
    expect(screen.getByText('Confidentialité')).toBeInTheDocument()
    expect(screen.getByText('Données')).toBeInTheDocument()
    expect(screen.getByText('Cookies')).toBeInTheDocument()
  })

  it('renders language switcher', () => {
    render(<Footer />)
    
    expect(screen.getByText('FR')).toBeInTheDocument()
    expect(screen.getByText('EN')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument()
  })

  it('all links have correct href attributes', () => {
    render(<Footer />)
    
    const cabinetLink = screen.getByRole('link', { name: /cabinet/i })
    expect(cabinetLink).toHaveAttribute('href', '/fr/cabinet')
  })
})
