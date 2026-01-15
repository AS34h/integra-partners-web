'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface InternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function InternalLink({ href, children, className }: InternalLinkProps) {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr' // Extract locale, default to 'fr'

  // Ensure href starts with locale
  const localizedHref = href.startsWith(`/${locale}`)
    ? href
    : `/${locale}${href}`

  return (
    <Link href={localizedHref} className={className}>
      {children}
    </Link>
  )
}
