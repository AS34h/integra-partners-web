'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import DOMPurify from 'dompurify'
import { motion } from 'framer-motion'
import { Building2, User, Mail, Phone, MessageSquare, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'

// Schéma de validation Zod
const formSchema = z.object({
  organization: z.string().min(2, 'Nom requis (min 2 caractères)'),
  sector: z.string().min(1, 'Sélectionnez un secteur'),
  size: z.string().min(1, 'Sélectionnez une taille'),
  firstName: z.string().min(2, 'Prénom requis'),
  lastName: z.string().min(2, 'Nom requis'),
  position: z.string().min(2, 'Fonction requise'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(8, 'Téléphone invalide'),
  domain: z.string().min(1, 'Sélectionnez un domaine'),
  challenges: z.string()
    .min(20, 'Trop court (min 20 caractères)')
    .max(2000, 'Trop long (max 2000 caractères)'),
  timeline: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: 'Vous devez accepter pour continuer'
  })
})

type FormData = z.infer<typeof formSchema>

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
}

const benefits = [
  {
    title: 'Diagnostic Confidentiel',
    description: 'Échange sécurisé sur vos enjeux stratégiques sans engagement'
  },
  {
    title: 'Analyse Préliminaire',
    description: 'Identification des leviers prioritaires de transformation'
  },
  {
    title: 'Recommandations Initiales',
    description: 'Axes d\'intervention suggérés avec méthodologie adaptée'
  },
  {
    title: 'Proposition Sur-Mesure',
    description: 'Plan de mission personnalisé avec budget et calendrier'
  }
]

export default function DiagnosticPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // 🔒 Sanitize ALL text inputs (XSS protection)
      const sanitizedData = {
        ...data,
        organization: DOMPurify.sanitize(data.organization),
        sector: DOMPurify.sanitize(data.sector),
        size: DOMPurify.sanitize(data.size),
        firstName: DOMPurify.sanitize(data.firstName),
        lastName: DOMPurify.sanitize(data.lastName),
        position: DOMPurify.sanitize(data.position),
        domain: DOMPurify.sanitize(data.domain),
        challenges: DOMPurify.sanitize(data.challenges),
        timeline: data.timeline ? DOMPurify.sanitize(data.timeline) : undefined,
        // Email et phone: déjà validés par Zod, pas besoin de sanitize HTML
        email: data.email,
        phone: data.phone,
        consent: data.consent
      }

      const response = await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest' // CSRF protection header
        },
        body: JSON.stringify(sanitizedData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Erreur lors de l\'envoi')
      }

      setSubmitStatus('success')
      reset()

      // Redirect after 3s
      setTimeout(() => {
        window.location.href = '/fr/cabinet?diagnostic=sent'
      }, 3000)

    } catch (error: any) {
      setSubmitStatus('error')
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
          >
            <h1 className="font-heading text-h1 mb-6">
              Diagnostic Stratégique
            </h1>
            <p className="text-body-l text-gray-200">
              Bénéficiez d'un premier échange confidentiel pour identifier vos
              enjeux stratégiques prioritaires et découvrir comment INTEGRA PARTNERS
              peut accompagner votre organisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Le Processus
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Un parcours structuré en 4 étapes pour analyser vos besoins et
              proposer un accompagnement adapté.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            {...fadeInUp}
          >
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                variant="custom"
                className="p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-body font-semibold text-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-body-m text-gray-700">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeInUp}>
              <Card variant="custom" className="p-8 md:p-12">
                <h2 className="font-heading text-h2 text-navy mb-2 text-center">
                  Demande de Diagnostic
                </h2>
                <p className="text-body-m text-gray-700 mb-8 text-center">
                  Complétez ce formulaire. Un consultant vous contactera sous 48h.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Organization Info */}
                  <div className="space-y-4">
                    <h3 className="font-body font-semibold text-anthracite flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Informations Organisation
                    </h3>

                    <Input
                      label="Nom de l'organisation *"
                      placeholder="Entreprise / Institution"
                      {...register('organization')}
                      error={errors.organization?.message}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Select
                        label="Secteur d'activité *"
                        {...register('sector')}
                        error={errors.sector?.message}
                        options={[
                          { value: '', label: 'Sélectionnez un secteur' },
                          { value: 'finance', label: 'Finance & Banque' },
                          { value: 'telecom', label: 'Télécommunications' },
                          { value: 'energie', label: 'Énergie & Utilities' },
                          { value: 'industrie', label: 'Industrie' },
                          { value: 'public', label: 'Secteur Public' },
                          { value: 'services', label: 'Services' },
                          { value: 'autre', label: 'Autre' }
                        ]}
                      />

                      <Select
                        label="Taille de l'organisation *"
                        {...register('size')}
                        error={errors.size?.message}
                        options={[
                          { value: '', label: 'Sélectionnez une taille' },
                          { value: 'tpe', label: '1-10 employés' },
                          { value: 'pme', label: '11-50 employés' },
                          { value: 'eti', label: '51-250 employés' },
                          { value: 'ge', label: '250+ employés' }
                        ]}
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h3 className="font-body font-semibold text-anthracite flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Vos Coordonnées
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Prénom *"
                        placeholder="Jean"
                        {...register('firstName')}
                        error={errors.firstName?.message}
                      />
                      <Input
                        label="Nom *"
                        placeholder="Dupont"
                        {...register('lastName')}
                        error={errors.lastName?.message}
                      />
                    </div>

                    <Input
                      label="Fonction *"
                      placeholder="Directeur Général, DRH, etc."
                      {...register('position')}
                      error={errors.position?.message}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        label="Email professionnel *"
                        placeholder="jean.dupont@entreprise.com"
                        {...register('email')}
                        error={errors.email?.message}
                      />
                      <Input
                        type="tel"
                        label="Téléphone *"
                        placeholder="+228 XX XX XX XX"
                        {...register('phone')}
                        error={errors.phone?.message}
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h3 className="font-body font-semibold text-anthracite flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Votre Projet
                    </h3>

                    <Select
                      label="Domaine d'intervention prioritaire *"
                      {...register('domain')}
                      error={errors.domain?.message}
                      options={[
                        { value: '', label: 'Sélectionnez un domaine' },
                        { value: 'gouvernance', label: 'Gouvernance & Conformité' },
                        { value: 'strategie', label: 'Stratégie & Positionnement' },
                        { value: 'capital-humain', label: 'Capital Humain & Leadership' },
                        { value: 'transformation', label: 'Transformation Opérationnelle' },
                        { value: 'multiple', label: 'Plusieurs domaines' }
                      ]}
                    />

                    <Textarea
                      label="Décrivez vos enjeux stratégiques *"
                      placeholder="Expliquez brièvement les défis ou opportunités que vous souhaitez adresser..."
                      rows={6}
                      {...register('challenges')}
                      error={errors.challenges?.message}
                    />

                    <Select
                      label="Horizon de démarrage souhaité"
                      {...register('timeline')}
                      error={errors.timeline?.message}
                      options={[
                        { value: '', label: 'Sélectionnez un horizon' },
                        { value: 'urgent', label: 'Urgent (< 1 mois)' },
                        { value: 'court', label: 'Court terme (1-3 mois)' },
                        { value: 'moyen', label: 'Moyen terme (3-6 mois)' },
                        { value: 'explore', label: 'Exploration (pas d\'urgence)' }
                      ]}
                    />
                  </div>

                  {/* Consent */}
                  <div className="pt-6 border-t border-gray-200">
                    <Checkbox
                      label="J'accepte que mes données soient utilisées pour me recontacter concernant ma demande. *"
                      {...register('consent')}
                    />
                    {errors.consent && (
                      <p className="text-sm text-red-600 mt-2">{errors.consent.message}</p>
                    )}
                    <p className="text-caption text-gray-600 mt-4">
                      Vos données sont protégées et traitées conformément au RGPD.
                      Consultez notre <a href="/confidentialite" className="underline text-navy">politique de confidentialité</a>.
                    </p>
                  </div>

                  {/* Messages de statut */}
                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-900">Erreur d'envoi</p>
                        <p className="text-sm text-red-700">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-900">✓ Demande envoyée avec succès !</p>
                        <p className="text-sm text-green-700">Nous vous contacterons sous 48h. Redirection en cours...</p>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : <ChevronRight className="w-5 h-5" />}
                      iconPosition="right"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Alternatives */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="font-heading text-h3 text-navy mb-6">
              Autres Moyens de Contact
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="custom" className="p-6">
                <Mail className="w-8 h-8 text-navy mx-auto mb-3" />
                <h3 className="font-body font-semibold text-navy mb-2">Email</h3>
                <a href="mailto:contact@integrapartners.com" className="text-body-m text-gray-700 hover:text-navy">
                  contact@integrapartners.com
                </a>
              </Card>
              <Card variant="custom" className="p-6">
                <Phone className="w-8 h-8 text-navy mx-auto mb-3" />
                <h3 className="font-body font-semibold text-navy mb-2">Téléphone</h3>
                <a href="tel:+22890000000" className="text-body-m text-gray-700 hover:text-navy">
                  +228 90 00 00 00
                </a>
              </Card>
              <Card variant="custom" className="p-6">
                <Building2 className="w-8 h-8 text-navy mx-auto mb-3" />
                <h3 className="font-body font-semibold text-navy mb-2">Bureaux</h3>
                <p className="text-body-m text-gray-700">
                  Lomé, Togo
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
