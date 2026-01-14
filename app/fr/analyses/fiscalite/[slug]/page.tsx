import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  }
}

interface PageProps {
  params: { slug: string }
}

export default function AnalyseFiscaliteSlugPage({ params }: PageProps) {
  // TODO: Fetch article data based on params.slug
  
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Analyse Fiscalité: {params.slug}</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Contenu de l'analyse à venir...
          </p>
        </div>
      </div>
    </div>
  )
}
