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
import { Shield, AlertCircle, Scale, FileText, Building2, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function GuideConformiteOHADA() {
  return (
    <div className="space-y-12">
      <ArticleSection
        title="Guide Complet de Conformité OHADA"
      >
        <Paragraph>
          Le droit OHADA (Organisation pour l'Harmonisation en Afrique du Droit des Affaires) 
          constitue le cadre juridique unifié applicable dans 17 pays d'Afrique. Pour les 
          entreprises opérant dans l'espace OHADA, la conformité juridique n'est pas optionnelle : 
          elle conditionne la validité des actes, la protection des dirigeants et la pérennité 
          des activités.
        </Paragraph>

        <Blockquote>
          « Les Actes uniformes sont directement applicables et obligatoires dans les États Parties, 
          nonobstant toute disposition contraire de droit interne, antérieure ou postérieure. »
          <br />
          <strong>— Acte Uniforme OHADA</strong>
        </Blockquote>

        <Paragraph>
          Ce guide détaille les obligations légales essentielles, les démarches de mise en 
          conformité et les risques encourus en cas de non-respect. Il s'adresse aux dirigeants 
          d'entreprises, juristes d'entreprise, DAF et conseils externes intervenant dans 
          l'espace OHADA.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <StatCard
            value="17"
            label="États membres OHADA"
          />
          <StatCard
            value="10"
            label="Actes Uniformes"
          />
          <StatCard
            value="100%"
            label="Primauté sur droit national"
          />
        </div>
      </ArticleSection>

      <ArticleSection
        title="Obligations Légales Fondamentales"
      >
        <ArticleSubSection title="1. Immatriculation et Formalités Constitutives">
          <Paragraph>
            Toute société commerciale doit obligatoirement être immatriculée au Registre du 
            Commerce et du Crédit Mobilier (RCCM) conformément à l'Acte Uniforme sur le Droit 
            Commercial Général.
          </Paragraph>

          <div className="space-y-3 mt-6">
            <ChecklistItem checked>
              <strong>Dépôt des statuts authentifiés</strong> auprès du greffe du tribunal compétent 
              (notaire requis pour SARL, SA, SAS)
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Déclaration notariée de souscription et de versement</strong> certifiant la 
              libération du capital social minimum (SARL: 1M FCFA, SA: 10M FCFA)
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Publication au Journal Officiel des annonces légales</strong> (JOAL) dans les 
              15 jours suivant l'immatriculation
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Obtention du numéro IFU (Identifiant Fiscal Unique)</strong> auprès de la 
              Direction Générale des Impôts pour activation fiscale
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Déclaration CNSS/INAM</strong> pour l'affiliation des salariés à la sécurité 
              sociale (obligatoire dès le 1er salarié)
            </ChecklistItem>
          </div>

          <HighlightBox type="warning">
            <strong>Délai critique :</strong> L'immatriculation doit intervenir dans les 30 jours 
            suivant la signature des statuts. Au-delà, la société peut être considérée comme 
            société de fait avec responsabilité illimitée des associés.
          </HighlightBox>
        </ArticleSubSection>

        <ArticleSubSection title="2. Tenue de la Comptabilité SYSCOHADA Révisé">
          <Paragraph>
            L'Acte Uniforme relatif au Droit Comptable et à l'Information Financière (AUDCIF) 
            impose le Système Comptable OHADA (SYSCOHADA) Révisé à toutes les entités.
          </Paragraph>

          <div className="space-y-3 mt-6">
            <ChecklistItem checked>
              <strong>Tenue de livres comptables obligatoires</strong> : Livre-Journal, Grand-Livre, 
              Balance, Livre d'Inventaire (cotés et paraphés par le tribunal)
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Établissement des états financiers annuels</strong> : Bilan, Compte de 
              Résultat, Tableau de Flux de Trésorerie (TAFIRE), Notes annexes
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Conservation des pièces justificatives</strong> pendant 10 ans minimum 
              (factures, relevés bancaires, contrats)
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Dépôt des comptes annuels au RCCM</strong> dans les 6 mois de la clôture 
              (obligation pour SA et SCA, recommandée pour SARL)
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Certification des comptes par commissaire aux comptes</strong> (obligatoire 
              pour SA, SCA et SARL dépassant 2 des 3 seuils: CA 250M, total bilan 125M, 50 salariés)
            </ChecklistItem>
          </div>
        </ArticleSubSection>

        <ArticleSubSection title="3. Gouvernance Statutaire et Assemblées">
          <Paragraph>
            L'Acte Uniforme sur le Droit des Sociétés Commerciales impose des règles strictes 
            de gouvernance selon la forme juridique.
          </Paragraph>

          <div className="space-y-3 mt-6">
            <ChecklistItem checked>
              <strong>Assemblée Générale Ordinaire annuelle</strong> dans les 6 mois de la clôture 
              pour approuver les comptes et affecter le résultat
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Tenue de registres obligatoires</strong> : Registre des procès-verbaux 
              d'assemblées, Registre des mouvements de titres, Registre de présence
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Respect des quorums et majorités</strong> : AGO (1/4 puis 1/5 en 2e 
              convocation), AGE (1/2 puis 1/3)
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Publication des modifications statutaires</strong> au RCCM et au JOAL 
              (changement de gérance, transfert de siège, augmentation de capital)
            </ChecklistItem>
            <ChecklistItem checked>
              <strong>Convention réglementée</strong> : Autorisation préalable de l'AG pour 
              tout contrat entre la société et un dirigeant/associé
            </ChecklistItem>
          </div>
        </ArticleSubSection>
      </ArticleSection>

      <ArticleSection
        title="Méthodologie de Mise en Conformité"
      >
        <Paragraph>
          La mise en conformité OHADA nécessite une approche structurée en 4 phases pour 
          identifier les écarts, prioriser les actions et sécuriser juridiquement l'entreprise.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <StepCard
            number={1}
            title="Audit de Conformité Initial"
            duration="1-2 semaines"
          >
            <p className="mb-4">Diagnostic juridique complet couvrant les 10 Actes Uniformes applicables</p>
            <div className="space-y-2">
              <p className="font-semibold text-sm">Livrables :</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Grille de conformité OHADA (120+ points de contrôle)</li>
                <li>Cartographie des écarts par niveau de risque</li>
                <li>Estimation des sanctions potentielles (amendes, nullité actes)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Durée :</strong> 1-2 semaines</p>
            </div>
          </StepCard>
          <StepCard
            number={2}
            title="Plan d'Action Correctif"
            duration="1 semaine"
          >
            <p className="mb-4">Priorisation des actions selon criticité (légale, opérationnelle, réputationnelle)</p>
            <div className="space-y-2">
              <p className="font-semibold text-sm">Livrables :</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Roadmap de mise en conformité par priorité (P0/P1/P2)</li>
                <li>Budget prévisionnel (honoraires notaires, avocat, CAC)</li>
                <li>Rétroplanning avec dates limites réglementaires</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Durée :</strong> 1 semaine</p>
            </div>
          </StepCard>
          <StepCard
            number={3}
            title="Exécution et Régularisation"
            duration="2-6 mois"
          >
            <p className="mb-4">Mise en œuvre des actions correctrices avec accompagnement juridique</p>
            <div className="space-y-2">
              <p className="font-semibold text-sm">Livrables :</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Mise à jour des statuts et PV d'AG manquants</li>
                <li>Régularisation RCCM et formalités de publicité</li>
                <li>Mise en place processus comptables SYSCOHADA</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Durée :</strong> 2-6 mois</p>
            </div>
          </StepCard>
          <StepCard
            number={4}
            title="Maintien en Conformité"
            duration="Continu"
          >
            <p className="mb-4">Processus et outils pour garantir la conformité continue</p>
            <div className="space-y-2">
              <p className="font-semibold text-sm">Livrables :</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Calendrier des obligations récurrentes (AGO, dépôts, déclarations)</li>
                <li>Procédures internes de contrôle juridique</li>
                <li>Formations équipes (DAF, RH, Direction Générale)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Durée :</strong> Continu</p>
            </div>
          </StepCard>
        </div>
      </ArticleSection>

      <ArticleSection
        title="Sanctions et Risques Encourus"
      >
        <Paragraph>
          Le non-respect des obligations OHADA expose l'entreprise et ses dirigeants à des 
          sanctions civiles, pénales et commerciales graves.
        </Paragraph>

        <div className="space-y-6 mt-8">
          <HighlightBox type="warning">
            <h4 className="font-bold text-lg mb-3">Sanctions Civiles</h4>
            <BulletList>
              <li>Nullité des actes juridiques non conformes (contrats, statuts, assemblées)</li>
              <li>Inopposabilité aux tiers des actes non publiés au RCCM</li>
              <li>Responsabilité civile des dirigeants pour faute de gestion</li>
              <li>Impossibilité d'agir en justice (défaut d'immatriculation)</li>
            </BulletList>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold text-lg mb-3">Sanctions Pénales</h4>
            <BulletList>
              <li>Abus de biens sociaux : 1 à 5 ans de prison + amende 1M à 10M FCFA</li>
              <li>Présentation de comptes inexacts : 6 mois à 2 ans + amende 500K à 5M FCFA</li>
              <li>Défaut de tenue de comptabilité régulière : amende fiscale 5% du CA</li>
              <li>Distribution de dividendes fictifs : 2 à 5 ans + amende</li>
            </BulletList>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold text-lg mb-3">Sanctions Commerciales</h4>
            <BulletList>
              <li>Radiation d'office du RCCM après mise en demeure</li>
              <li>Interdiction de gérer pendant 3 à 10 ans (faillite personnelle)</li>
              <li>Cessation de paiement précipitée (procédure collective)</li>
              <li>Perte de marchés publics et d'agréments professionnels</li>
            </BulletList>
          </HighlightBox>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Type de Non-Conformité</th>
                  <th className="border p-3 text-left">Risque Juridique</th>
                  <th className="border p-3 text-left">Impact Business</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Statuts non conformes</td>
                  <td className="border p-3">Nullité de la société</td>
                  <td className="border p-3">Perte des protections société (responsabilité illimitée des associés)</td>
                </tr>
                <tr>
                  <td className="border p-3">Comptabilité irrégulière</td>
                  <td className="border p-3">Redressement fiscal + pénalités 40-100%</td>
                  <td className="border p-3">Refus de financement bancaire, impossibilité de cession</td>
                </tr>
                <tr>
                  <td className="border p-3">AGO non tenues</td>
                  <td className="border p-3">Nullité des décisions + responsabilité dirigeants</td>
                  <td className="border p-3">Blocage opérationnel (pas de budget, pas d'investissement)</td>
                </tr>
                <tr>
                  <td className="border p-3">Défaut de publication RCCM</td>
                  <td className="border p-3">Inopposabilité aux tiers des actes juridiques</td>
                  <td className="border p-3">Insécurité contractuelle (contrats non opposables)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection
        title="Points Clés de Vigilance"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KeyPoint
            icon={<Shield className="w-6 h-6" />}
            title="Priorité Absolue : RCCM"
          >
            L'immatriculation au RCCM conditionne l'existence légale de la société. Sans elle, aucune protection de responsabilité limitée.
          </KeyPoint>
          <KeyPoint
            icon={<FileText className="w-6 h-6" />}
            title="SYSCOHADA Obligatoire"
          >
            Seul référentiel comptable autorisé dans l'espace OHADA. Les normes IFRS ne sont admises qu'en consolidation pour groupes côtés.
          </KeyPoint>
          <KeyPoint
            icon={<Users className="w-6 h-6" />}
            title="Commissaire aux Comptes"
          >
            Nomination obligatoire pour SA et grandes SARL. Défaut de nomination = nullité de l'approbation des comptes.
          </KeyPoint>
          <KeyPoint
            icon={<Scale className="w-6 h-6" />}
            title="Conventions Réglementées"
          >
            Tout contrat avec un dirigeant ou associé doit être autorisé par l'AG. Défaut = nullité du contrat + sanctions.
          </KeyPoint>
        </div>
      </ArticleSection>

      <ArticleSection
        title="Difficultés Pratiques et Solutions"
      >
        <div className="space-y-4">
          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">Complexité Administrative Multi-Juridictions</h4>
            <p className="mb-3">
              Les entreprises opérant dans plusieurs pays OHADA sont confrontées à des 
              interprétations divergentes des Actes Uniformes par les autorités locales.
            </p>
            <p className="text-sm">
              <strong>Solution :</strong> Audit juridique pays par pays avec conseil local. 
              Privilégier l'approche la plus conservatrice en cas de doute interprétatif. 
              Documenter les consultations juridiques obtenues.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">Coûts de Régularisation Élevés</h4>
            <p className="mb-3">
              La mise en conformité d'une société en situation irrégulière depuis plusieurs 
              années peut coûter entre 2M et 10M FCFA (honoraires + formalités + pénalités).
            </p>
            <p className="text-sm">
              <strong>Solution :</strong> Prioriser les actions critiques (RCCM, AGO, comptabilité) 
              avant les formalités secondaires. Négocier avec l'administration des délais de 
              régularisation progressive. Provisionner le budget sur 2-3 exercices si nécessaire.
            </p>
          </HighlightBox>

          <HighlightBox type="warning">
            <h4 className="font-bold mb-2">Absence de Culture de Conformité</h4>
            <p className="mb-3">
              Les PME africaines perçoivent souvent la conformité OHADA comme une contrainte 
              bureaucratique sans valeur ajoutée immédiate.
            </p>
            <p className="text-sm">
              <strong>Solution :</strong> Former les dirigeants aux bénéfices concrets : 
              sécurisation juridique des contrats, accès au financement bancaire, attractivité 
              pour investisseurs, protection personnelle des dirigeants. Démontrer le ROI de 
              la conformité (levée de blocages opérationnels, crédibilité commerciale).
            </p>
          </HighlightBox>
        </div>
      </ArticleSection>

      <ArticleSection title="Conclusion et Recommandations">
        <Paragraph>
          La conformité OHADA n'est pas une option : c'est une condition de survie juridique 
          pour toute entreprise opérant dans l'espace OHADA. Les sanctions encourues en cas 
          de non-respect peuvent aller jusqu'à la nullité de la société et la responsabilité 
          personnelle illimitée des dirigeants.
        </Paragraph>

        <Paragraph>
          <strong>Recommandations prioritaires :</strong>
        </Paragraph>

        <NumberedList>
          <li>Réaliser un audit de conformité OHADA si aucun diagnostic n'a été effectué depuis 2 ans</li>
          <li>Prioriser les obligations légales critiques : RCCM à jour, AGO annuelles tenues, comptabilité SYSCOHADA conforme</li>
          <li>Nommer un commissaire aux comptes si seuils atteints (obligatoire SA, recommandé SARL)</li>
          <li>Mettre en place un calendrier des obligations récurrentes (échéances AGO, dépôts RCCM, déclarations fiscales)</li>
          <li>Former les équipes dirigeantes et opérationnelles (DAF, RH, juriste interne) aux fondamentaux OHADA</li>
        </NumberedList>

        <div className="mt-12 p-8 bg-navy text-white rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            Besoin d'un Audit de Conformité OHADA ?
          </h3>
          <p className="mb-6 text-gray-200">
            INTEGRA PARTNERS accompagne les entreprises dans leur mise en conformité juridique 
            OHADA avec une approche pragmatique et budgétée. Diagnostic initial offert pour 
            toute demande qualifiée.
          </p>
          <Button variant="primary" size="lg" className="bg-gold hover:bg-gold/90 text-navy">
            Demander un diagnostic juridique
          </Button>
        </div>
      </ArticleSection>
    </div>
  );
}
