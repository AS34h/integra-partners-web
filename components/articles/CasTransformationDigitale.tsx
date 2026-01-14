import React from 'react'
import { 
  ArticleSection, 
  ArticleSubSection, 
  Paragraph, 
  Blockquote,
  ChecklistItem,
  BulletList,
  ComparisonTable,
  StepCard,
  HighlightBox,
  KeyPoint
} from './ArticleComponents'
import { Target, Users, Rocket, Shield, TrendingUp, AlertCircle } from 'lucide-react'

export const CasTransformationDigitale: React.FC = () => (
  <div className="article-content">
    {/* Contexte */}
    <ArticleSection title="Contexte Client">
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-caption text-gray-600 mb-1">Secteur</p>
          <p className="font-semibold text-navy">Administration publique</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-caption text-gray-600 mb-1">Taille</p>
          <p className="font-semibold text-navy">500+ agents</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-caption text-gray-600 mb-1">Géographie</p>
          <p className="font-semibold text-navy">Afrique de l'Ouest</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-caption text-gray-600 mb-1">Durée mission</p>
          <p className="font-semibold text-navy">18 mois</p>
        </div>
      </div>
      <p className="text-caption text-gray-500 italic">Nom de l'institution anonymisé pour raisons de confidentialité.</p>
    </ArticleSection>

    {/* Situation Initiale */}
    <ArticleSection title="1. Situation Initiale">
      <ArticleSubSection title="Enjeux Identifiés">
        <Paragraph>L'institution faisait face à plusieurs défis majeurs :</Paragraph>
        
        <BulletList>
          <ChecklistItem checked={false}>
            <strong>Processus 100% papier</strong> : Workflows manuels, archivage physique
          </ChecklistItem>
          <ChecklistItem checked={false}>
            <strong>Délais excessifs</strong> : 4-6 semaines pour traiter un dossier standard
          </ChecklistItem>
          <ChecklistItem checked={false}>
            <strong>Satisfaction usagers</strong> : Score 3.2/10 (enquête interne)
          </ChecklistItem>
          <ChecklistItem checked={false}>
            <strong>Coûts opérationnels</strong> : Budget papier/archivage : 15% du budget total
          </ChecklistItem>
          <ChecklistItem checked={false}>
            <strong>Risques</strong> : Pertes de documents, erreurs de saisie fréquentes
          </ChecklistItem>
        </BulletList>
      </ArticleSubSection>

      <ArticleSubSection title="Demande Initiale">
        <Blockquote>
          "Nous voulons digitaliser nos processus pour gagner en efficacité et améliorer l'expérience de nos usagers."
        </Blockquote>
      </ArticleSubSection>
    </ArticleSection>

    {/* Méthodologie */}
    <ArticleSection title="2. Méthodologie INTEGRA">
      <StepCard number={1} title="Diagnostic" duration="6 semaines">
        <Paragraph><strong>Cartographie des processus</strong></Paragraph>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
          <li>42 processus métier identifiés</li>
          <li>8 processus critiques priorisés</li>
          <li>150+ points de contact usagers</li>
        </ul>

        <Paragraph><strong>Analyse d'impact</strong></Paragraph>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
          <li>Entretiens : 80 agents (tous niveaux)</li>
          <li>Ateliers : 12 sessions (5-10 participants)</li>
          <li>Observations terrain : 2 semaines</li>
        </ul>

        <Paragraph><strong>Benchmark</strong></Paragraph>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>5 institutions similaires étudiées</li>
          <li>Best practices internationales</li>
          <li>Solutions digitales évaluées (15 éditeurs)</li>
        </ul>
      </StepCard>

      <StepCard number={2} title="Conception" duration="8 semaines">
        <Paragraph><strong>Architecture cible</strong></Paragraph>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
          <li>Portail usagers (web + mobile)</li>
          <li>Back-office agents (GED, workflow)</li>
          <li>Interconnexions systèmes existants</li>
          <li>Sécurité & conformité (RGPD)</li>
        </ul>

        <Paragraph><strong>Change management</strong></Paragraph>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
          <li>Plan de communication (10 supports)</li>
          <li>Programme de formation (5 modules)</li>
          <li>Réseau d'ambassadeurs (25 agents)</li>
        </ul>

        <Paragraph><strong>Pilote</strong></Paragraph>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>2 processus testés</li>
          <li>50 agents formés</li>
          <li>200 usagers pilotes</li>
          <li>3 mois d'expérimentation</li>
        </ul>
      </StepCard>

      <StepCard number={3} title="Déploiement" duration="12 mois">
        <Paragraph><strong>Vagues progressives</strong></Paragraph>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
          <li><strong>Vague 1 (M1-M3)</strong> : Siège, processus simples</li>
          <li><strong>Vague 2 (M4-M6)</strong> : Agences régionales (3)</li>
          <li><strong>Vague 3 (M7-M9)</strong> : Agences locales (12)</li>
          <li><strong>Vague 4 (M10-M12)</strong> : Généralisation</li>
        </ul>

        <Paragraph><strong>Formation</strong></Paragraph>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
          <li>500 agents formés</li>
          <li>40 super-utilisateurs certifiés</li>
          <li>Support dédié (hotline, FAQ, vidéos)</li>
        </ul>

        <Paragraph><strong>Communication</strong></Paragraph>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Campagne médias (radio, TV, réseaux sociaux)</li>
          <li>Tutoriels usagers</li>
          <li>Signalétique dans les locaux</li>
        </ul>
      </StepCard>
    </ArticleSection>

    {/* Résultats */}
    <ArticleSection title="3. Résultats Obtenus">
      <ArticleSubSection title="KPIs Quantitatifs">
        <ComparisonTable
          headers={['Indicateur', 'Avant', 'Après', 'Amélioration']}
          rows={[
            { label: 'Délai moyen traitement', before: '28 jours', after: '5 jours', improvement: '-82%' },
            { label: 'Coûts papier/archivage', before: '150M FCFA/an', after: '35M FCFA/an', improvement: '-77%' },
            { label: 'Dossiers traités/mois', before: '2,500', after: '8,500', improvement: '+240%' },
            { label: 'Taux d\'erreurs', before: '12%', after: '2%', improvement: '-83%' },
          ]}
        />
      </ArticleSubSection>

      <ArticleSubSection title="KPIs Qualitatifs">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <p className="text-caption text-gray-600 mb-2">Satisfaction usagers</p>
            <p className="font-heading text-h2 text-navy mb-2">
              <span className="text-gray-400 line-through text-h4">3.2/10</span> → 8.1/10 ⭐⭐⭐⭐
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• "Plus besoin de se déplacer 3 fois !"</li>
              <li>• "Suivi en temps réel de mon dossier"</li>
              <li>• "Paiement en ligne sécurisé"</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-caption text-gray-600 mb-2">Satisfaction agents</p>
            <p className="font-heading text-h2 text-navy mb-2">
              <span className="text-gray-400 line-through text-h4">5.5/10</span> → 7.8/10
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• "Moins de paperasse, plus de temps pour conseiller"</li>
              <li>• "Recherche instantanée des dossiers"</li>
              <li>• "Moins d'erreurs de saisie"</li>
            </ul>
          </div>
        </div>

        <HighlightBox type="success">
          <Paragraph className="mb-2"><strong>Bénéfices Non Mesurés</strong></Paragraph>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Amélioration de l'image institutionnelle</li>
            <li>Réduction de la corruption (traçabilité)</li>
            <li>Attractivité renforcée pour talents tech</li>
            <li>Données exploitables pour pilotage</li>
          </ul>
        </HighlightBox>
      </ArticleSubSection>
    </ArticleSection>

    {/* Facteurs Clés */}
    <ArticleSection title="4. Facteurs Clés de Succès">
      <KeyPoint icon={<Target className="w-5 h-5" />} title="Sponsorship Direction Générale">
        <p>Le Directeur Général a personnellement :</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Lancé le projet (kick-off avec 200 cadres)</li>
          <li>Participé aux comités de pilotage mensuels</li>
          <li>Communiqué régulièrement (messagerie interne)</li>
        </ul>
      </KeyPoint>

      <KeyPoint icon={<Rocket className="w-5 h-5" />} title="Approche Progressive">
        <p>Déploiement par vagues pour :</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Limiter les risques</li>
          <li>Capitaliser sur les retours</li>
          <li>Ajuster la stratégie en temps réel</li>
        </ul>
      </KeyPoint>

      <KeyPoint icon={<Users className="w-5 h-5" />} title="Formation Intensive">
        <p>500 agents formés avec :</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Formation présentielle (2 jours)</li>
          <li>E-learning (5 modules)</li>
          <li>Coaching terrain (2 semaines)</li>
          <li>Support permanent</li>
        </ul>
      </KeyPoint>

      <KeyPoint icon={<TrendingUp className="w-5 h-5" />} title="Conduite du Changement">
        <ul className="list-disc list-inside space-y-1">
          <li>Communication 360° (interne + externe)</li>
          <li>Réseau d'ambassadeurs (early adopters)</li>
          <li>Incentives (prime digitale)</li>
          <li>Célébration des succès (rituels mensuels)</li>
        </ul>
      </KeyPoint>
    </ArticleSection>

    {/* Difficultés */}
    <ArticleSection title="5. Difficultés Rencontrées">
      <ArticleSubSection title="Résistance au Changement">
        <HighlightBox type="warning">
          <Paragraph className="mb-2"><strong>Manifestations</strong></Paragraph>
          <ul className="list-disc list-inside space-y-1 text-sm mb-4">
            <li>Peur de perdre son emploi</li>
            <li>"On a toujours fait comme ça"</li>
            <li>Fracture générationnelle (senior vs junior)</li>
          </ul>

          <Paragraph className="mb-2"><strong>Solutions</strong></Paragraph>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Rassurer sur maintien des emplois</li>
            <li>Valoriser les gains (moins de tâches répétitives)</li>
            <li>Coaching individuel des seniors</li>
          </ul>
        </HighlightBox>
      </ArticleSubSection>

      <ArticleSubSection title="Contraintes Techniques">
        <HighlightBox type="warning">
          <Paragraph className="mb-2"><strong>Infrastructures</strong></Paragraph>
          <ul className="list-disc list-inside space-y-1 text-sm mb-4">
            <li>Électricité instable (coupures fréquentes)</li>
            <li>Connexion internet limitée (débit &lt; 1 Mbps)</li>
          </ul>

          <Paragraph className="mb-2"><strong>Solutions</strong></Paragraph>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Installation onduleurs + groupes électrogènes</li>
            <li>Optimisation application (fonctionnement offline)</li>
            <li>Hébergement hybride (cloud + local)</li>
          </ul>
        </HighlightBox>
      </ArticleSubSection>
    </ArticleSection>

    {/* Leçons */}
    <ArticleSection title="6. Leçons Apprises">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            À Faire
          </h4>
          <BulletList>
            <ChecklistItem>Impliquer les métiers dès le début</ChecklistItem>
            <ChecklistItem>Former massivement (ne pas sous-estimer)</ChecklistItem>
            <ChecklistItem>Communiquer en continu (transparence)</ChecklistItem>
            <ChecklistItem>Déployer progressivement (par vagues)</ChecklistItem>
            <ChecklistItem>Prévoir support post-déploiement (6-12 mois)</ChecklistItem>
          </BulletList>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            À Éviter
          </h4>
          <BulletList>
            <ChecklistItem checked={false}>Négliger le change management</ChecklistItem>
            <ChecklistItem checked={false}>Sous-dimensionner les infrastructures</ChecklistItem>
            <ChecklistItem checked={false}>Vouloir tout digitaliser d'un coup</ChecklistItem>
            <ChecklistItem checked={false}>Imposer sans co-construire</ChecklistItem>
            <ChecklistItem checked={false}>Arrêter après le déploiement</ChecklistItem>
          </BulletList>
        </div>
      </div>
    </ArticleSection>

    {/* Conclusion */}
    <ArticleSection title="Conclusion">
      <Paragraph>
        Cette transformation digitale démontre qu'il est possible de moderniser une institution publique 
        en Afrique avec des résultats mesurables et durables. Les clés du succès : <strong>sponsorship fort</strong>, 
        <strong> approche progressive</strong>, <strong> formation intensive</strong>, et <strong> change management rigoureux</strong>.
      </Paragraph>

      <HighlightBox type="info">
        <Paragraph className="font-semibold mb-0">
          INTEGRA PARTNERS maîtrise l'accompagnement de transformations digitales complexes, 
          de la vision stratégique à l'exécution opérationnelle.
        </Paragraph>
      </HighlightBox>
    </ArticleSection>
  </div>
)
