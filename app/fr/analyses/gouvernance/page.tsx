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

export default function AnalysesGouvernancePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <ArticleSchema
        headline="Gouvernance d'Entreprise en Afrique : Analyse OHADA 2026"
        description="Analyse approfondie de la gouvernance des entreprises africaines sous le cadre OHADA : structures décisionnelles, Conseils d'Administration, compliance, audit interne et gestion des risques."
        datePublished="2026-01-12"
        dateModified="2026-01-12"
        pageUrl="https://integrapartners.com/fr/analyses/gouvernance"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Analyses Gouvernance d'Entreprise</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Catégorie analyses gouvernance : articles à venir sur conseils d'administration,
            contrôle interne, audit, risques, conformité OHADA.
          </p>
          {/* Liste articles avec [slug] dynamique */}
        </div>
      </div>
    </div>
  )
}
