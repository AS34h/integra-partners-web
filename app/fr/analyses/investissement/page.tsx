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

export default function AnalysesInvestissementPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <ArticleSchema
        headline="Investissement en Afrique : Marchés, M&A et Private Equity 2026"
        description="Guide complet investissement en Afrique : analyse des marchés émergents, due diligence, fusions-acquisitions, private equity, structuration de holdings et opportunités sectorielles."
        datePublished="2026-01-12"
        dateModified="2026-01-12"
        pageUrl="https://integrapartners.com/fr/analyses/investissement"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Analyses Investissement en Afrique</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Catégorie analyses investissement : articles à venir sur marchés africains, 
            due diligence, M&A, private equity, structuration holdings.
          </p>
          {/* Liste articles avec [slug] dynamique */}
        </div>
      </div>
    </div>
  )
}
