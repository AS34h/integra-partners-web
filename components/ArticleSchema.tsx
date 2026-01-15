'use client'

import { useEffect } from 'react'

interface ArticleSchemaProps {
  headline: string
  description: string
  datePublished: string
  dateModified: string
  pageUrl: string
  author?: {
    name: string
    url: string
  }
  imageUrl?: string
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  pageUrl,
  author = {
    name: 'INTEGRA PARTNERS',
    url: 'https://integrapartners.com'
  },
  imageUrl = 'https://integrapartners.com/logo.png'
}: ArticleSchemaProps) {
  useEffect(() => {
    // Générer le schema.org Article JSON-LD
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline,
      description,
      author: {
        '@type': 'Organization',
        name: author.name,
        url: author.url
      },
      publisher: {
        '@type': 'Organization',
        name: 'INTEGRA PARTNERS',
        url: 'https://integrapartners.com',
        logo: {
          '@type': 'ImageObject',
          url: imageUrl
        }
      },
      datePublished,
      dateModified,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl
      }
    }

    // Injecter le script JSON-LD dans le head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(articleSchema)
    script.id = `article-schema-${pageUrl.replace(/[^a-zA-Z0-9]/g, '-')}`

    // Vérifier si le script existe déjà
    const existingScript = document.getElementById(script.id)
    if (existingScript) {
      existingScript.remove()
    }

    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById(script.id)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [headline, description, datePublished, dateModified, pageUrl, author, imageUrl])

  // Ce component n'affiche rien visuellement
  return null
}
