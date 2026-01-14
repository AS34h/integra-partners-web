import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { 
  Building2, 
  Receipt, 
  FileText, 
  Scale,
  Shield,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function TogoGuidesHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1a2642]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 border border-[#B8860B]/30 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-[#B8860B]" />
              <span className="text-sm text-[#B8860B] font-semibold">Guides Entrepreneurs 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Guides Complets pour Créer et Gérer<br className="hidden md:block" />
              Votre Entreprise au Togo
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Guides pratiques et exhaustifs pour entrepreneurs togolais et diaspora : 
              <strong> création de SARL, fiscalité OTR, immatriculation RCCM, statuts OHADA, pacte d'associés</strong>. 
              Expertise INTEGRA au service de votre projet entrepreneurial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/diagnostic-ims">
                <Button 
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4 text-lg"
                >
                  Demander un Accompagnement
                </Button>
              </Link>
              <a href="#guides">
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Voir les Guides
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#0A1628] mb-1">5</p>
                <p className="text-sm text-gray-600">Catégories guides</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#0A1628] mb-1">16+</p>
                <p className="text-sm text-gray-600">Guides détaillés</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#0A1628] mb-1">11 600+</p>
                <p className="text-sm text-gray-600">Mots expertise</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#0A1628] mb-1">100%</p>
                <p className="text-sm text-gray-600">Conformité OHADA</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#0A1628] mb-1">2026</p>
                <p className="text-sm text-gray-600">À jour réglementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Sections */}
      <section id="guides" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">

            {/* Section 1: Création d'Entreprise */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-8 h-8 text-[#B8860B]" />
                <h2 className="text-3xl font-bold text-[#0A1628]">Création d'Entreprise</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Guide SARL */}
                <Link href="/fr/togo/creer-une-entreprise/sarl-sarlu" className="group">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 h-full hover:border-[#B8860B] hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center group-hover:bg-[#B8860B] transition-colors">
                          <Building2 className="w-6 h-6 text-[#B8860B] group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#B8860B] transition-colors">
                          Créer une SARL ou SARLU au Togo
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Guide complet : capital social 1M FCFA, avantages, démarches RCCM en 5 étapes, 
                          coûts détaillés 150-250K, délais réels 7-10 jours.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        1 900 mots
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Procédure détaillée
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#B8860B] font-semibold group-hover:gap-3 transition-all">
                      <span>Lire le guide</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>

                {/* Guide RCCM */}
                <Link href="/fr/togo/creer-une-entreprise/rccm-et-immatriculation" className="group">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 h-full hover:border-[#B8860B] hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center group-hover:bg-[#B8860B] transition-colors">
                          <FileText className="w-6 h-6 text-[#B8860B] group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#B8860B] transition-colors">
                          RCCM et Immatriculation au Togo
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Procédure guichet unique CFE, 8 documents requis, numéro IFU automatique, 
                          coûts 93K FCFA, délais 3-5 jours, 10 erreurs à éviter.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        2 200 mots
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        CFE étape par étape
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#B8860B] font-semibold group-hover:gap-3 transition-all">
                      <span>Lire le guide</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Section 2: Fiscalité & Conformité */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Receipt className="w-8 h-8 text-[#B8860B]" />
                <h2 className="text-3xl font-bold text-[#0A1628]">Fiscalité & Conformité</h2>
              </div>
              
              <div className="grid md:grid-cols-1 gap-6">
                {/* Guide TVA */}
                <Link href="/fr/togo/fiscalite-otr/tva" className="group">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#B8860B] hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#B8860B]/10 flex items-center justify-center group-hover:bg-[#B8860B] transition-colors">
                          <Receipt className="w-6 h-6 text-[#B8860B] group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#B8860B] transition-colors">
                          TVA au Togo : Taux, Déclarations & Optimisation OTR
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Guide exhaustif TVA : taux 18%, exonérations 0%, seuil 60M FCFA, déclarations e-Tax, 
                          crédits TVA, sanctions 25-100%, 4 stratégies d'optimisation fiscale.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        2 100 mots
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        e-Tax mode d'emploi
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Optimisation fiscale
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#B8860B] font-semibold group-hover:gap-3 transition-all">
                      <span>Lire le guide</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Section 3: Juridique Avancé */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Scale className="w-8 h-8 text-[#B8860B]" />
                <h2 className="text-3xl font-bold text-[#0A1628]">Juridique Avancé</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Guide Statuts */}
                <Link href="/fr/togo/juridique-ohada/statuts" className="group">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6 h-full hover:border-[#B8860B] hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center group-hover:bg-[#B8860B] transition-colors">
                          <Scale className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                          AUTHORITY
                        </div>
                        <h3 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#B8860B] transition-colors">
                          Rédaction Statuts SARL OHADA
                        </h3>
                        <p className="text-sm text-gray-700 mb-4">
                          Guide expert : 12 clauses obligatoires OHADA 2014, 8 clauses recommandées, 
                          10 erreurs fréquentes, SARL vs SAS, révision des statuts.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        2 800 mots
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        Conformité garantie
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#B8860B] font-semibold group-hover:gap-3 transition-all">
                      <span>Lire le guide</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>

                {/* Guide Pacte */}
                <Link href="/fr/togo/juridique-ohada/pacte-dassocies" className="group">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-6 h-full hover:border-[#B8860B] hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center group-hover:bg-[#B8860B] transition-colors">
                          <Shield className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="inline-block bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                          PREMIUM
                        </div>
                        <h3 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#B8860B] transition-colors">
                          Pacte d'Associés : Protection & Sortie
                        </h3>
                        <p className="text-sm text-gray-700 mb-4">
                          Guide premium : 10 clauses essentielles (Put/Call, Drag/Tag-Along), 
                          méthodes de valorisation, arbitrage CCJA, protection minoritaires.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        2 600 mots
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        Gouvernance sécurisée
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#B8860B] font-semibold group-hover:gap-3 transition-all">
                      <span>Lire le guide</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1a2642]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin d'un Accompagnement Personnalisé ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              INTEGRA vous accompagne de A à Z dans votre projet entrepreneurial au Togo : 
              <strong> création SARL, immatriculation RCCM, conformité fiscale, rédaction de statuts et pacte d'associés</strong>. 
              Expertise certifiée OHADA et connaissance approfondie du contexte togolais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/fr/diagnostic-ims">
                <Button 
                  variant="primary"
                  className="bg-[#B8860B] hover:bg-[#9a6f09] text-white px-8 py-4 text-lg"
                >
                  Demander un Diagnostic Gratuit
                </Button>
              </Link>
              <Link href="/fr/cabinet">
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Découvrir INTEGRA
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <p className="text-[#B8860B] font-bold text-2xl mb-2">250K FCFA</p>
                <p className="text-white text-sm mb-1">Création SARL complète</p>
                <p className="text-gray-400 text-xs">Statuts + RCCM + IFU + CNSS</p>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <p className="text-[#B8860B] font-bold text-2xl mb-2">200K FCFA</p>
                <p className="text-white text-sm mb-1">Rédaction statuts OHADA</p>
                <p className="text-gray-400 text-xs">Conformité garantie 2014</p>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <p className="text-[#B8860B] font-bold text-2xl mb-2">350K FCFA</p>
                <p className="text-white text-sm mb-1">Pacte d'associés premium</p>
                <p className="text-gray-400 text-xs">15-30 pages sur-mesure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
