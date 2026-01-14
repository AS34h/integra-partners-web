import React from 'react';
import { 
  ArticleSection, 
  ArticleSubSection, 
  Paragraph, 
  Blockquote, 
  ChecklistItem, 
  BulletList, 
  NumberedList, 
  HighlightBox, 
  StatCard, 
  ComparisonTable, 
  StepCard, 
  KeyPoint 
} from './ArticleComponents';
import { Target, TrendingUp, Users, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function EtudePositionnementMarches() {
  return (
    <div className="space-y-12">
      <ArticleSection
        title="Étude de Positionnement Stratégique sur les Marchés Africains"
      >
        <Paragraph>
          Le positionnement stratégique détermine la place qu'occupe une entreprise dans l'esprit 
          de ses clients cibles, par rapport à ses concurrents. Sur les marchés africains, où la 
          concurrence s'intensifie et les attentes clients évoluent rapidement, un positionnement 
          clair et différenciant n'est plus optionnel : c'est une condition de survie.
        </Paragraph>

        <Blockquote>
          <strong>Michael Porter, Harvard Business School :</strong><br />
          « L'essence de la stratégie est de choisir ce que l'on ne fera pas. Le positionnement 
          consiste à créer une position unique et valorisable en effectuant des choix différents 
          de ceux de ses concurrents. »
        </Blockquote>

        <Paragraph>
          Cette étude de cas présente la méthodologie INTEGRA de positionnement stratégique, 
          appliquée avec succès auprès de 25+ entreprises en Afrique francophone (services 
          financiers, télécoms, distribution, industrie). Nous détaillons les 5 phases de 
          l'analyse, les KPIs de succès et les pièges à éviter.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <StatCard
            value="78%"
            label="Entreprises mal positionnées (étude INTEGRA 2023, 120 PME Afrique Ouest)"
          />
          <StatCard
            value="3-5 ans"
            label="Durée repositionnement (délai moyen ancrage perception)"
          />
          <StatCard
            value="+35%"
            label="Gain pricing power (augmentation prix accepté après repositionnement)"
          />
        </div>
      </ArticleSection>

      <ArticleSection
        title="Méthodologie d'Analyse de Positionnement"
      >
        <Paragraph>
          Notre méthodologie structurée en 5 phases permet d'identifier le positionnement optimal 
          en combinant analyse concurrentielle, insights clients et capacités internes. Durée 
          totale : 6 à 10 semaines.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <StepCard
            number={1}
            title="Analyse du Marché et de la Concurrence"
            duration="2-3 semaines"
          >
            <p className="mb-4">Cartographie exhaustive de l'écosystème concurrentiel et des dynamiques de marché</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Segmentation du marché (critères géographiques, démographiques, comportementaux)</li>
              <li>Mapping concurrentiel (positionnement prix/qualité de 10-15 acteurs clés)</li>
              <li>Analyse des stratégies concurrentes (pricing, communication, distribution)</li>
              <li>Identification des espaces vides (opportunités de différenciation)</li>
            </ul>
          </StepCard>
          <StepCard
            number={2}
            title="Étude des Perceptions Clients"
            duration="3-4 semaines"
          >
            <p className="mb-4">Compréhension approfondie de la perception actuelle et des attentes clients</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Enquêtes quantitatives (200-500 répondants selon taille marché)</li>
              <li>Entretiens qualitatifs (15-25 clients et prospects)</li>
              <li>Analyse de la notoriété assistée et spontanée</li>
              <li>Carte perceptuelle (axes de différenciation perçus)</li>
              <li>Analyse des verbatims clients (associations spontanées à la marque)</li>
            </ul>
          </StepCard>
          <StepCard
            number={3}
            title="Audit des Capacités Internes"
            duration="1-2 semaines"
          >
            <p className="mb-4">Évaluation réaliste des forces, faiblesses et actifs mobilisables</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Matrice SWOT détaillée (forces/faiblesses vs opportunités/menaces)</li>
              <li>Analyse de la chaîne de valeur (où créons-nous réellement de la valeur ?)</li>
              <li>Évaluation des ressources critiques (technologie, talents, réseau, capital)</li>
              <li>Benchmark interne (écart entre perception client et réalité opérationnelle)</li>
            </ul>
          </StepCard>
          <StepCard
            number={4}
            title="Définition du Positionnement Cible"
            duration="1 semaine"
          >
            <p className="mb-4">Formulation de la proposition de valeur unique et du territoire de marque</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Énoncé de positionnement (For [cible], who [besoin], our [catégorie] is [différenciation] because [raison de croire])</li>
              <li>Proposition de valeur unique (bénéfice fonctionnel + émotionnel)</li>
              <li>Territoire de marque et piliers d'identité (valeurs, personnalité, ton)</li>
              <li>Plateforme de preuve (éléments tangibles qui crédibilisent le positionnement)</li>
            </ul>
          </StepCard>
          <StepCard
            number={5}
            title="Roadmap d'Activation"
            duration="1 semaine"
          >
            <p className="mb-4">Plan d'action concret pour déployer et ancrer le nouveau positionnement</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stratégie de communication (messages clés, canaux, budget)</li>
              <li>Évolution de l'offre produit/service (alignement avec positionnement)</li>
              <li>Formation des équipes (commercial, customer care, marketing)</li>
              <li>KPIs de suivi (notoriété, considération, préférence, part de marché)</li>
              <li>Planning de déploiement sur 18-24 mois</li>
            </ul>
          </StepCard>
        </div>
      </ArticleSection>

      <ArticleSection
        title="Cas Pratique : Repositionnement d'une Banque Régionale"
      >
        <ArticleSubSection title="Contexte et Enjeux">
          <Paragraph>
            <strong>Client :</strong> Banque régionale présente dans 5 pays d'Afrique de l'Ouest, 
            80 agences, 350K clients, CA 45M€. Position de challenger (4e acteur) sur un marché 
            dominé par 3 grands groupes panafricains.
          </Paragraph>

          <Paragraph>
            <strong>Problématique :</strong> Perception de marque floue ("banque comme les autres"), 
            taux d'attrition clients élevé (18%/an), difficultés à recruter clientèle premium, 
            guerre des prix sur les comptes courants et crédits.
          </Paragraph>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600">23%</div>
              <div className="text-sm text-gray-700">Notoriété spontanée</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600">18%</div>
              <div className="text-sm text-gray-700">Taux d'attrition/an</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600">7%</div>
              <div className="text-sm text-gray-700">Clients premium</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600">-3%</div>
              <div className="text-sm text-gray-700">Croissance PNB/an</div>
            </div>
          </div>
        </ArticleSubSection>

        <ArticleSubSection title="Analyse et Insights">
          <Paragraph>
            L'analyse concurrentielle a révélé un marché structuré en 3 positionnements dominants :
          </Paragraph>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Acteur</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Positionnement</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Forces</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Faiblesses</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Leader 1 (35% PDM)</td>
                  <td className="border border-gray-300 px-4 py-3">Banque panafricaine de référence</td>
                  <td className="border border-gray-300 px-4 py-3">Réseau étendu, capacité de bilan, prestige international</td>
                  <td className="border border-gray-300 px-4 py-3">Service impersonnel, lenteur décision</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Leader 2 (28% PDM)</td>
                  <td className="border border-gray-300 px-4 py-3">Banque digitale innovante</td>
                  <td className="border border-gray-300 px-4 py-3">Application mobile primée, rapidité, 100% sans agence</td>
                  <td className="border border-gray-300 px-4 py-3">Absence accompagnement humain</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Leader 3 (22% PDM)</td>
                  <td className="border border-gray-300 px-4 py-3">Banque de proximité locale</td>
                  <td className="border border-gray-300 px-4 py-3">Conseillers dédiés, connaissance terrain, ancrage communautaire</td>
                  <td className="border border-gray-300 px-4 py-3">Capacité limitée, offre basique</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Notre client (8% PDM)</td>
                  <td className="border border-gray-300 px-4 py-3">Aucun positionnement clair</td>
                  <td className="border border-gray-300 px-4 py-3">-</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">Pas de différenciation perçue, me-too positioning</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Paragraph className="mt-6">
            <strong>Insight clé des enquêtes clients :</strong> Les PME et entrepreneurs (segment 
            représentant 40% du PNB) se plaignent du manque de conseil personnalisé et de 
            compréhension de leurs enjeux business. Les grandes banques les traitent "comme des 
            numéros", et les banques digitales n'offrent pas le support humain nécessaire.
          </Paragraph>

          <HighlightBox type="success">
            <strong>Opportunité identifiée :</strong> Espace vide sur le positionnement "Banque 
            partenaire de la croissance des PME", combinant expertise conseil + solutions 
            financières adaptées + accompagnement humain rapproché.
          </HighlightBox>
        </ArticleSubSection>

        <ArticleSubSection title="Positionnement Cible Défini">
          <div className="bg-navy text-white p-8 rounded-lg my-6">
            <h4 className="text-xl font-bold mb-4">Énoncé de Positionnement</h4>
            <p className="text-lg leading-relaxed">
              « Pour les <strong>dirigeants de PME ambitieuses</strong> en Afrique de l'Ouest qui 
              cherchent un <strong>partenaire financier qui comprend leurs défis</strong>, 
              [Banque X] est la <strong>banque de croissance</strong> qui combine 
              <strong> expertise conseil business</strong> et <strong>solutions financières 
              sur-mesure</strong>, parce que nous avons fait le choix stratégique de 
              <strong> spécialiser nos équipes par secteur</strong> et de limiter notre portefeuille 
              à 50 clients par chargé d'affaires (vs 120-200 dans les grandes banques). »
            </p>
          </div>

          <div className="space-y-3">
            <ChecklistItem checked>
              <strong>Cible prioritaire :</strong> PME 10-200 salariés, CA 500M-10Mds FCFA, 
              secteurs commerce/distribution/services/industrie légère
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Bénéfice fonctionnel :</strong> Accès à un conseiller expert sectoriel + 
              solutions crédit sur-mesure + délais de réponse garantis (48h étude crédit)
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Bénéfice émotionnel :</strong> Sentiment d'être compris, valorisé, soutenu 
              dans son projet entrepreneurial
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Raisons de croire :</strong> Équipes formées à l'analyse sectorielle, 
              partenariats avec cabinets conseil, fonds de garantie 50M FCFA pour PME innovantes
            </ChecklistItem>
          </div>
        </ArticleSubSection>

        <ArticleSubSection title="Résultats après 18 Mois">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">+52%</div>
              <div className="text-sm text-gray-700">Notoriété spontanée</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">-11%</div>
              <div className="text-sm text-gray-700">Taux d'attrition/an</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">+18%</div>
              <div className="text-sm text-gray-700">Clients PME</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">+12%</div>
              <div className="text-sm text-gray-700">Croissance PNB/an</div>
            </div>
          </div>

          <Paragraph className="mt-6">
            <strong>Impact business :</strong> Acquisition de 2 400 nouveaux clients PME (vs 
            objectif 2 000), hausse du PNB moyen par client PME de +28%, réduction du coût 
            d'acquisition client de -34%, amélioration du Net Promoter Score de 18 à 42.
          </Paragraph>
        </ArticleSubSection>
      </ArticleSection>

      <ArticleSection
        title="KPIs de Succès d'un Positionnement"
      >
        <Paragraph>
          Le succès d'un positionnement stratégique se mesure à travers 3 niveaux de KPIs, 
          de la perception (court terme) à la performance business (moyen/long terme).
        </Paragraph>

        <div className="space-y-8 mt-8">
          <div>
            <h4 className="font-bold text-lg text-navy mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gold" />
              Niveau 1 : KPIs de Notoriété et Perception (3-6 mois)
            </h4>
            <BulletList>
              <li>Taux de notoriété assistée et spontanée (mesure trimestrielle)</li>
              <li>Taux de considération (% de la cible qui envisagerait d'acheter)</li>
              <li>Scores d'attributs de marque (innovation, qualité, proximité, etc.)</li>
              <li>Net Promoter Score (NPS) : % promoteurs - % détracteurs</li>
              <li>Part de voix publicitaire (SOV) vs part de marché (SOM)</li>
            </BulletList>
          </div>

          <div>
            <h4 className="font-bold text-lg text-navy mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gold" />
              Niveau 2 : KPIs Commerciaux (6-12 mois)
            </h4>
            <BulletList>
              <li>Taux de conversion prospects → clients (par canal d'acquisition)</li>
              <li>Coût d'acquisition client (CAC) par segment</li>
              <li>Panier moyen et taux d'up-sell/cross-sell</li>
              <li>Taux de rétention et durée de vie client (CLV)</li>
              <li>Part de marché sur segment cible prioritaire</li>
            </BulletList>
          </div>

          <div>
            <h4 className="font-bold text-lg text-navy mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-gold" />
              Niveau 3 : KPIs Business et Rentabilité (12-24 mois)
            </h4>
            <BulletList>
              <li>Croissance du chiffre d'affaires (global et par segment)</li>
              <li>Évolution de la marge opérationnelle (pricing power)</li>
              <li>Retour sur investissement marketing (ROMI)</li>
              <li>Part de marché globale et évolution vs concurrents</li>
              <li>Valorisation de l'entreprise (multiple de CA ou EBITDA)</li>
            </BulletList>
          </div>
        </div>

        <HighlightBox type="info">
          <strong>Délai de maturité :</strong> Un positionnement stratégique met en moyenne 
          18 à 36 mois pour produire son plein effet sur la performance business. La patience 
          et la constance sont critiques : 60% des échecs de repositionnement sont dus à un 
          abandon prématuré avant que les bénéfices ne se matérialisent.
        </HighlightBox>
      </ArticleSection>

      <ArticleSection
        title="10 Pièges à Éviter Absolument"
      >
        <div className="space-y-4">
          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">1. Positionnement Non-Différenciant (Me-Too)</h4>
            <p>
              Se positionner comme "leader qualité" ou "service client excellence" sans preuve 
              tangible ni différence observable. <strong>Résultat :</strong> Invisibilité et 
              guerre des prix.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">2. Décalage Capacités Internes vs Promesse Externe</h4>
            <p>
              Promettre une "expérience premium" sans avoir les processus, outils ou talents 
              pour la délivrer. <strong>Résultat :</strong> Insatisfaction client et bouche-à-oreille négatif.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">3. Segmentation Trop Large (Vouloir Plaire à Tout le Monde)</h4>
            <p>
              Cibler "toutes les entreprises" ou "tous les consommateurs" par peur de renoncer 
              à des clients. <strong>Résultat :</strong> Message dilué, aucune cible ne se sent concernée.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">4. Changement de Positionnement Trop Fréquent</h4>
            <p>
              Modifier le message tous les 6-12 mois en fonction des modes ou de la pression 
              concurrentielle. <strong>Résultat :</strong> Confusion du marché, perte de crédibilité.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">5. Ignorer la Concurrence et les Espaces Déjà Occupés</h4>
            <p>
              Se positionner sur un attribut déjà détenu par un concurrent dominant sans avoir 
              de légitimité supérieure. <strong>Résultat :</strong> Combat perdu d'avance, ressources gaspillées.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">6. Positionnement Basé sur une Innovation Non-Durable</h4>
            <p>
              Se différencier sur une fonctionnalité facilement copiable (ex: "première banque 
              mobile"). <strong>Résultat :</strong> Avantage temporaire, obsolescence rapide du positionnement.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">7. Absence d'Implication de la Direction Générale</h4>
            <p>
              Déléguer le positionnement au département marketing sans validation stratégique 
              top management. <strong>Résultat :</strong> Manque d'alignement opérationnel, sabotage involontaire.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">8. Sous-Investissement en Communication</h4>
            <p>
              Définir un positionnement mais ne pas allouer le budget publicitaire nécessaire 
              pour l'ancrer dans les esprits. <strong>Résultat :</strong> Positionnement qui reste dans les slides PowerPoint.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">9. Négliger l'Expérience Client Réelle</h4>
            <p>
              Communiquer un positionnement sans ajuster les processus opérationnels (accueil, 
              SAV, produit). <strong>Résultat :</strong> Gap perception vs réalité, désillusion client.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">10. Absence de Mesure et d'Ajustement</h4>
            <p>
              Lancer un positionnement sans tracking rigoureux des KPIs de perception et business. 
              <strong>Résultat :</strong> Impossible de savoir si ça fonctionne, décisions en aveugle.
            </p>
          </HighlightBox>
        </div>
      </ArticleSection>

      <ArticleSection title="Recommandations Finales">
        <Paragraph>
          Le positionnement stratégique est un investissement de long terme qui structure toute 
          votre stratégie marketing et commerciale. Il ne s'agit pas d'un exercice créatif 
          ponctuel, mais d'une décision stratégique qui engage l'entreprise sur 3 à 5 ans minimum.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <KeyPoint
            icon={<Target className="w-6 h-6" />}
            title="Choisir c'est Renoncer"
          >
            Un bon positionnement implique de renoncer consciemment à certains segments pour mieux servir d'autres. L'acceptation de ce renoncement par la direction est critique.
          </KeyPoint>
          <KeyPoint
            icon={<TrendingUp className="w-6 h-6" />}
            title="Preuves Tangibles Obligatoires"
          >
            Chaque élément du positionnement doit être supporté par des preuves concrètes (processus, certifications, références, garanties) pour être crédible.
          </KeyPoint>
          <KeyPoint
            icon={<Users className="w-6 h-6" />}
            title="Implication des Équipes"
          >
            Le positionnement doit être co-construit avec les équipes opérationnelles (ventes, production, support) qui devront le délivrer au quotidien.
          </KeyPoint>
          <KeyPoint
            icon={<Zap className="w-6 h-6" />}
            title="Cohérence Totale 360°"
          >
            Tous les points de contact client (site web, packaging, SAV, facture, agences) doivent refléter de manière cohérente le positionnement choisi.
          </KeyPoint>
        </div>

        <div className="mt-12 p-8 bg-navy text-white rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            Besoin d'une Étude de Positionnement pour Votre Entreprise ?
          </h3>
          <p className="mb-6 text-gray-200">
            INTEGRA PARTNERS a accompagné 25+ entreprises africaines dans la définition et 
            l'activation de leur positionnement stratégique. Méthodologie éprouvée, insights 
            actionnables, résultats mesurables. Diagnostic stratégique offert.
          </p>
          <Button variant="primary" size="lg" className="bg-gold hover:bg-gold/90 text-navy">
            Demander une étude de positionnement
          </Button>
        </div>
      </ArticleSection>
    </div>
  );
}
