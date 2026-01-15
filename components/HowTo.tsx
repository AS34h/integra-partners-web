'use client'

import { useEffect } from 'react'

interface HowToStep {
  position: number
  name: string
  text: string
  url?: string
}

interface HowToProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string
  pageUrl: string
}

export function HowTo({ name, description, steps, totalTime, pageUrl }: HowToProps) {
  useEffect(() => {
    // Générer le schema.org HowTo JSON-LD
    const howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name,
      description,
      step: steps.map(step => ({
        '@type': 'HowToStep',
        position: step.position,
        name: step.name,
        text: step.text,
        ...(step.url && { url: step.url })
      })),
      ...(totalTime && { totalTime })
    }

    // Injecter le script JSON-LD dans le head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(howToSchema)
    script.id = `howto-schema-${pageUrl.replace(/[^a-zA-Z0-9]/g, '-')}`

    // Vérifier si le script existe déjà
    const existingScript = document.getElementById(script.id)
    if (existingScript) {
      existingScript.remove()
    }

    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById(script.id)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [name, description, steps, totalTime, pageUrl])

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
      <p className="text-gray-600 mb-6">{description}</p>

      {totalTime && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-900 font-medium">
              Durée estimée : {formatDuration(totalTime)}
            </span>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.position}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.name}</h3>
              <p className="text-gray-700 leading-relaxed">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Helper pour formater la durée ISO 8601 en format lisible
function formatDuration(duration: string): string {
  // Format ISO 8601: PT7D = 7 jours, PT30M = 30 minutes, PT2H = 2 heures
  const dayMatch = duration.match(/(\d+)D/)
  const hourMatch = duration.match(/(\d+)H/)
  const minuteMatch = duration.match(/(\d+)M/)

  const parts = []

  if (dayMatch) {
    const days = parseInt(dayMatch[1])
    parts.push(`${days} jour${days > 1 ? 's' : ''}`)
  }

  if (hourMatch) {
    const hours = parseInt(hourMatch[1])
    parts.push(`${hours} heure${hours > 1 ? 's' : ''}`)
  }

  if (minuteMatch && !dayMatch && !hourMatch) {
    const minutes = parseInt(minuteMatch[1])
    parts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`)
  }

  return parts.join(' ')
}
