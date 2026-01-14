'use client'

import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export default function EtudeDeCasSlugPage({ params }: PageProps) {
  // TODO: Fetch case study data based on params.slug
  
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Étude de cas: {params.slug}</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Contenu de l'étude de cas à venir...
          </p>
          {/* TODO: Add case study content */}
        </div>
      </div>
    </div>
  )
}
