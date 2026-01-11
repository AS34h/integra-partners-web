'use client'

import { motion } from 'framer-motion'
import { Building2, User, Mail, Phone, MessageSquare, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
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

                <form className="space-y-6">
                  {/* Organization Info */}
                  <div className="space-y-4">
                    <h3 className="font-body font-semibold text-anthracite flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Informations Organisation
                    </h3>
                    
                    <Input
                      label="Nom de l'organisation *"
                      placeholder="Entreprise / Institution"
                      required
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Select
                        label="Secteur d'activité *"
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
                        required
                      />

                      <Select
                        label="Taille de l'organisation *"
                        options={[
                          { value: '', label: 'Sélectionnez une taille' },
                          { value: 'tpe', label: '1-10 employés' },
                          { value: 'pme', label: '11-50 employés' },
                          { value: 'eti', label: '51-250 employés' },
                          { value: 'ge', label: '250+ employés' }
                        ]}
                        required
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
                        required
                      />
                      <Input
                        label="Nom *"
                        placeholder="Dupont"
                        required
                      />
                    </div>

                    <Input
                      label="Fonction *"
                      placeholder="Directeur Général, DRH, etc."
                      required
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        label="Email professionnel *"
                        placeholder="jean.dupont@entreprise.com"
                        required
                      />
                      <Input
                        type="tel"
                        label="Téléphone *"
                        placeholder="+228 XX XX XX XX"
                        required
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
                      options={[
                        { value: '', label: 'Sélectionnez un domaine' },
                        { value: 'gouvernance', label: 'Gouvernance & Conformité' },
                        { value: 'strategie', label: 'Stratégie & Positionnement' },
                        { value: 'capital-humain', label: 'Capital Humain & Leadership' },
                        { value: 'transformation', label: 'Transformation Opérationnelle' },
                        { value: 'multiple', label: 'Plusieurs domaines' }
                      ]}
                      required
                    />

                    <Textarea
                      label="Décrivez vos enjeux stratégiques *"
                      placeholder="Expliquez brièvement les défis ou opportunités que vous souhaitez adresser..."
                      rows={6}
                      required
                    />

                    <Select
                      label="Horizon de démarrage souhaité"
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
                      required
                    />
                    <Checkbox
                      label="Je souhaite recevoir la newsletter stratégique mensuelle d'INTEGRA PARTNERS."
                      className="mt-3"
                    />
                    <p className="text-caption text-gray-600 mt-4">
                      Vos données sont protégées et traitées conformément au RGPD. 
                      Consultez notre <a href="/confidentialite" className="underline text-navy">politique de confidentialité</a>.
                    </p>
                  </div>

                  {/* Submit */}
                  <div className="pt-6">
                    <Button 
                      variant="primary" 
                      size="lg"
                      className="w-full"
                      icon={<ChevronRight className="w-5 h-5" />}
                      iconPosition="right"
                    >
                      Envoyer la demande
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
