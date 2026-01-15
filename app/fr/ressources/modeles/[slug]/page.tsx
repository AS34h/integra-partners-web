'use client'

import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export default function ModelesSlugPage({ params }: PageProps) {
  // TODO: Fetch model data based on params.slug

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Modèle: {params.slug}</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Modèle de document à télécharger...
          </p>
        </div>
      </div>
    </div>
  )
}
