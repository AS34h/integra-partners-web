import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'INTEGRA PARTNERS | Cabinet de conseil institutionnel',
  description: 'Cabinet de conseil en stratégie et transformation accompagnant les dirigeants dans leurs décisions majeures.',
}

export default function FrenchHomePage() {
  // Redirect /fr to homepage
  redirect('/')
}
