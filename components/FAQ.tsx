'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items?: FAQItem[]
  faqs?: FAQItem[]
  title?: string
  description?: string
  pageUrl?: string
}

export function FAQSection({ items, faqs, title = "Questions fréquentes", description, pageUrl }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = items || faqs || []

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 my-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-4 text-left hover:text-primary-600 transition-colors"
            >
              <span className="text-lg font-semibold text-gray-900 pr-8">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {openIndex === index && (
              <div className="pb-4 pr-8">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
