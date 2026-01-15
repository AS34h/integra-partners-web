import { Metadata } from 'next'
import { ArticleSchema } from '@/components/ArticleSchema'

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  }
}

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function AnalysesFiscalitePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <ArticleSchema
        headline="Fiscalité Africaine : Optimisation IS, TVA et Conventions Fiscales 2026"
        description="Analyses fiscales approfondies pour entreprises opérant en Afrique : optimisation Impôt sur les Sociétés et TVA, conventions fiscales internationales, prix de transfert et fiscalité transfrontalière."
        datePublished="2026-01-12"
        dateModified="2026-01-12"
        pageUrl="https://integrapartners.com/fr/analyses/fiscalite"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Analyses Fiscalité Africaine</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Catégorie analyses fiscalité : articles à venir sur optimisation IS/TVA,
            conventions fiscales, prix de transfert, fiscalité internationale.
          </p>
          {/* Liste articles avec [slug] dynamique */}
        </div>
      </div>
    </div>
  )
}
