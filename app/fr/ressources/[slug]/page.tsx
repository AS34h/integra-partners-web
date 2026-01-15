import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Download, Share2, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CasTransformationDigitale } from '@/components/articles/CasTransformationDigitale'
import { GuideConformiteOHADA } from '@/components/articles/GuideConformiteOHADA'
import { EtudePositionnementMarches } from '@/components/articles/EtudePositionnementMarches'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const articlesMetadata: Record<string, {
  title: string
  category: string
  date: string
  readTime: string
  author: string
  component: React.ComponentType
}> = {
  'transformation-digitale': {
    title: 'Cas de Transformation Digitale',
    category: 'Étude de Cas',
    date: '15 décembre 2025',
    readTime: '10 min',
    author: 'Integra Management Solutions',
    component: CasTransformationDigitale
  },
  'conformite-ohada': {
    title: 'Guide de Conformité OHADA',
    category: 'Guide',
    date: '10 décembre 2025',
    readTime: '15 min',
    author: 'Integra Management Solutions',
    component: GuideConformiteOHADA
  },
  'positionnement-marches': {
    title: 'Étude de Positionnement sur les Marchés',
    category: 'Étude',
    date: '5 décembre 2025',
    readTime: '12 min',
    author: 'Integra Management Solutions',
    component: EtudePositionnementMarches
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articlesMetadata[slug]

  if (!article) {
    notFound()
  }

  const ArticleContent = article.component

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <section className="bg-slate-700 text-white py-12 md:py-16">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux ressources
          </Link>

          <div className="inline-block px-3 py-1 bg-gold text-navy text-sm font-medium rounded mb-4">
            {article.category}
          </div>

          <h1 className="font-heading text-h1 mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} de lecture</span>
            </div>
            <div>
              <span>Par {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            {/* Actions */}
            <div className="flex gap-3 mb-8 pb-8 border-b border-gray-200">
              <Button variant="ghost" size="sm" icon={<Download className="w-4 h-4" />}>
                Télécharger PDF
              </Button>
              <Button variant="ghost" size="sm" icon={<Share2 className="w-4 h-4" />}>
                Partager
              </Button>
            </div>

            {/* Article Content */}
            <ArticleContent />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 md:py-16 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-h3 text-navy mb-4">
            Besoin d'un Accompagnement Sur-Mesure ?
          </h2>
          <p className="text-body-l text-gray-700 mb-8 max-w-2xl mx-auto">
            Nos experts vous proposent un diagnostic stratégique gratuit pour identifier
            les leviers de transformation de votre organisation.
          </p>
          <Link href="/diagnostic">
            <Button
              variant="primary"
              size="lg"
              icon={<ChevronRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Demander un Diagnostic
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
