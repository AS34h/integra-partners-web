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

export default function AnalysesDiasporaPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <ArticleSchema
        headline="Diaspora Africaine : Investissements, Transferts et Fiscalité Internationale 2026"
        description="Analyses dédiées à la diaspora africaine : stratégies d'investissement au pays, optimisation des transferts, double nationalité, fiscalité internationale diaspora-Togo et retour au pays."
        datePublished="2026-01-12"
        dateModified="2026-01-12"
        pageUrl="https://integrapartners.com/fr/analyses/diaspora"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Analyses Diaspora</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Catégorie analyses diaspora : articles à venir sur transferts, investissements,
            double nationalité, fiscalité internationale diaspora-Togo.
          </p>
          {/* Liste articles avec [slug] dynamique */}
        </div>
      </div>
    </div>
  )
}
