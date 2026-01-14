'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Globe, Users } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Quote } from '@/components/ui/Quote'
import { Timeline, ValuesSection, CertificationItem } from '@/components/Timeline'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

const expertise = [
  {
    icon: Shield,
    title: 'Gouvernance & Conformité',
    description: 'Structuration institutionnelle, audit de gouvernance, conformité réglementaire (OHADA, RGPD), sécurisation juridique et fiscale.'
  },
  {
    icon: Award,
    title: 'Stratégie & Performance',
    description: 'Diagnostic stratégique, élaboration de plans directeurs, définition de KPIs institutionnels, pilotage de la performance.'
  },
  {
    icon: Globe,
    title: 'Transformation Organisationnelle',
    description: 'Conduite du changement, optimisation des processus, digitalisation, restructuration organisationnelle.'
  },
  {
    icon: Users,
    title: 'Capital Humain',
    description: 'Coaching de dirigeants, développement du leadership, structuration RH, plans de succession.'
  }
]

const values = [
  {
    title: 'Confidentialité Absolue',
    description: 'Protection stricte des données stratégiques clients. Conformité RGPD. Séparation physique et logique des dossiers. Accords de non-divulgation systématiques.',
    icon: '🔒'
  },
  {
    title: 'Rigueur Analytique',
    description: 'Méthodes quantitatives robustes. Validation croisée des sources. Livrables structurés selon standards institutionnels. Traçabilité complète des recommandations.',
    icon: '📊'
  },
  {
    title: 'Pragmatisme Opérationnel',
    description: 'Recommandations actionnables adaptées aux contraintes de ressources. Plans de mise en œuvre détaillés. Accompagnement post-mission si souhaité.',
    icon: '⚙️'
  },
  {
    title: 'Éthique Déontologique',
    description: 'Refus des conflits d\'intérêts. Transparence sur les limitations méthodologiques. Code de déontologie aligné sur les normes du conseil institutionnel.',
    icon: '⚖️'
  }
]

export default function CabinetPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl"
            {...fadeInImmediate}
          >
            <h1 className="font-heading text-h1 mb-6">
              Cabinet de Conseil Stratégique Souverain
            </h1>
            <p className="text-body-l text-gray-200">
              INTEGRA PARTNERS est un cabinet de conseil indépendant spécialisé 
              dans l'accompagnement stratégique des dirigeants institutionnels 
              en Afrique. Notre expertise couvre la gouvernance, la transformation 
              organisationnelle et le positionnement stratégique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInImmediate}
          >
            <h2 className="font-heading text-h2 text-navy mb-8 text-center">
              Notre Mission
            </h2>
            <Quote
              author="Mission INTEGRA PARTNERS"
              variant="standard"
            >
              Accompagner les dirigeants d'entreprises et d'institutions africaines dans leurs décisions stratégiques majeures, en combinant excellence méthodologique internationale et compréhension approfondie des réalités institutionnelles locales.
            </Quote>
          </motion.div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInImmediate}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Notre Expertise
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Quatre piliers fondamentaux qui définissent notre approche et 
              garantissent la qualité de nos interventions.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            {...fadeInImmediate}
          >
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <Card 
                  key={index}
                  variant="custom"
                  className="p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy text-white flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-h4 text-navy mb-3">
                        {item.title}
                      </h3>
                      <p className="text-body-m text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInImmediate}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Nos Valeurs
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien et définissent notre relation avec nos clients.
            </p>
          </motion.div>

          <motion.div {...fadeInImmediate}>
            <ValuesSection />
          </motion.div>
        </div>
      </section>

      {/* Histoire & Timeline Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInImmediate}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Notre Histoire
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Un parcours d'excellence au service des institutions africaines depuis 2018.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInImmediate}
          >
            <Timeline events={[
              {
                year: "2018",
                title: "Création d'INTEGRA PARTNERS",
                description: "Fondation du cabinet à Lomé (Togo) avec une vision claire : offrir un conseil stratégique souverain aux institutions africaines, sans dépendance aux grands groupes internationaux."
              },
              {
                year: "2019-2020",
                title: "Premières Missions Structurantes",
                description: "Accompagnement de 12 entreprises et institutions dans leur gouvernance et leur structuration. Développement de la Méthode INTEGRA, notre framework propriétaire en 6 phases."
              },
              {
                year: "2021",
                title: "Expansion Régionale",
                description: "Extension de nos activités en Afrique de l'Ouest (Bénin, Côte d'Ivoire, Sénégal) et Centrale (Cameroun, Gabon). Certification ISO 9001 pour nos processus de conseil."
              },
              {
                year: "2022",
                title: "Expertise Sectorielle",
                description: "Spécialisation dans les secteurs critiques : services financiers, télécommunications, énergie, administration publique. Plus de 40 missions réalisées avec un taux de satisfaction client de 96%."
              },
              {
                year: "2023",
                title: "Transformation Digitale",
                description: "Lancement de notre pôle Transformation Digitale et accompagnement de 15 organisations dans leur migration vers des solutions cloud souveraines et conformes RGPD."
              },
              {
                year: "2024-2026",
                title: "Leadership Régional",
                description: "Reconnaissance comme référence en conseil stratégique indépendant en Afrique francophone. Partenariats avec les institutions régionales (CEDEAO, CEMAC, UEMOA) et développement de notre offre diaspora."
              }
            ]} />
          </motion.div>
        </div>
      </section>

      {/* Certifications & Accréditations Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInImmediate}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Certifications & Accréditations
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Des certifications professionnelles qui garantissent la qualité et la conformité de nos interventions.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-4"
            {...fadeInImmediate}
          >
            <CertificationItem 
              title="Certification ISO 9001:2015"
              description="Système de management de la qualité certifié pour nos processus de conseil stratégique et d'accompagnement institutionnel."
              year="2021"
            />
            <CertificationItem 
              title="Conformité RGPD"
              description="Processus de traitement des données clients conformes au Règlement Général sur la Protection des Données. Audits annuels par cabinet tiers."
              year="2022"
            />
            <CertificationItem 
              title="Membre UEMOA - Réseau Conseil"
              description="Accréditation auprès de l'Union Économique et Monétaire Ouest-Africaine comme cabinet de conseil référencé pour les institutions régionales."
              year="2023"
            />
            <CertificationItem 
              title="Adhésion OHADA Business Institute"
              description="Participation active aux travaux de l'institut de formation OHADA pour la promotion du droit des affaires harmonisé en Afrique."
              year="2023"
            />
            <CertificationItem 
              title="Code de Déontologie Conseil"
              description="Respect strict du code de déontologie des métiers du conseil (confidentialité, indépendance, absence de conflit d'intérêts, transparence méthodologique)."
            />
          </motion.div>
        </div>
      </section>

      {/* Valeurs Opérationnelles Legacy */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInImmediate}
          >
            <h2 className="font-heading text-h2 text-navy mb-4">
              Nos Engagements Opérationnels
            </h2>
            <p className="text-body-l text-anthracite max-w-3xl mx-auto">
              Des principes non négociables qui guident chaque mission et 
              garantissent l'excellence de nos livrables.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            {...fadeInImmediate}
          >
            {values.map((value, index) => (
              <Card 
                key={index}
                variant="custom"
                className="p-8"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-heading text-h4 text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-body-m text-gray-700">
                  {value.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            {...fadeInImmediate}
          >
            <h2 className="font-heading text-h2 mb-6">
              Discutons de Votre Projet
            </h2>
            <p className="text-body-l text-gray-200 mb-8">
              Contactez-nous pour un premier échange confidentiel sur vos 
              enjeux stratégiques et découvrir comment INTEGRA PARTNERS peut 
              accompagner votre organisation.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white text-navy hover:bg-gray-100"
            >
              Demander un diagnostic
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
