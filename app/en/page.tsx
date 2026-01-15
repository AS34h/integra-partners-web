import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Globe, ChevronRight } from 'lucide-react'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function EnPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Globe className="w-16 h-16 text-navy mx-auto mb-6" />

          <h1 className="font-heading text-h2 text-navy mb-4">
            English Version Coming Soon
          </h1>

          <p className="text-body-l text-gray-700 mb-6">
            We are currently working on the English version of our website.
            In the meantime, please visit our French version.
          </p>

          <div className="space-y-4">
            <Link href="/">
              <Button
                variant="primary"
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Visit French Version
              </Button>
            </Link>

            <div className="text-sm text-gray-600">
              <p>For immediate assistance in English:</p>
              <a
                href="mailto:contact@integrapartners.com"
                className="text-navy hover:underline font-medium"
              >
                contact@integrapartners.com
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-heading text-h4 text-navy mb-4">
              About INTEGRA PARTNERS
            </h2>
            <p className="text-body-m text-gray-700">
              Independent strategic consulting firm supporting institutional leaders
              in their major decisions. Expertise in governance, strategy, human capital,
              and operational transformation across Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
