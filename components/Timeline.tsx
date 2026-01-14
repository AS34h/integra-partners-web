import React from 'react';
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent" />
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index} className="relative pl-12">
            {/* Timeline dot */}
            <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-gold text-navy">
              <div className="w-3 h-3 rounded-full bg-navy" />
            </div>
            
            {/* Content */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-gold font-bold text-sm mb-2">{event.year}</div>
              <h3 className="text-xl font-bold text-navy mb-2">{event.title}</h3>
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gold transition-all duration-300 group">
      <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-300">
        <div className="text-navy group-hover:text-gold transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

export function ValuesSection() {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque mission, en combinant expertise technique et compréhension profonde des enjeux de nos clients."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Éthique & Intégrité",
      description: "Notre approche est fondée sur la transparence, la confidentialité et le respect des normes professionnelles les plus élevées."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Impact Durable",
      description: "Nous mesurons notre succès à l'impact concret et durable de nos interventions sur la performance de vos organisations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partenariat",
      description: "Nous construisons des relations de long terme basées sur la confiance mutuelle et la co-création de solutions."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {values.map((value, index) => (
        <ValueCard
          key={index}
          icon={value.icon}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
  );
}

interface CertificationItemProps {
  title: string;
  description: string;
  year?: string;
}

export function CertificationItem({ title, description, year }: CertificationItemProps) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gold/5 transition-colors duration-200">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
          <Award className="w-5 h-5 text-gold" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-bold text-navy">{title}</h4>
          {year && <span className="text-sm text-gold font-semibold">{year}</span>}
        </div>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}
