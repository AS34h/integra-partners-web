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

export default function AnalysesConformiteRisquePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <ArticleSchema
        headline="Conformité et Gestion des Risques en Afrique : AML, KYC et Audit 2026"
        description="Analyses conformité réglementaire et gestion des risques : AML/KYC, cartographie des risques, audit interne, contentieux OHADA et prévention de la fraude en entreprise africaine."
        datePublished="2026-01-12"
        dateModified="2026-01-12"
        pageUrl="https://integrapartners.com/fr/analyses/conformite-et-risque"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Analyses Conformité & Risque</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Catégorie analyses conformité & risque : articles à venir sur AML/KYC, 
            cartographie risques, audit interne, contentieux OHADA.
          </p>
          {/* Liste articles avec [slug] dynamique */}
        </div>
      </div>
    </div>
  )
}
