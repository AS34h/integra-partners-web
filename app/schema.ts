export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "INTEGRA PARTNERS",
  "description": "Cabinet de conseil en stratégie et transformation accompagnant les dirigeants dans leurs décisions majeures",
  "url": "https://integrapartners.com",
  "logo": "https://integrapartners.com/logo.png",
  "image": "https://integrapartners.com/og-image.jpg",
  "telephone": "+228-90-00-00-00",
  "email": "contact@integrapartners.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lomé",
    "addressCountry": "TG"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Togo"
    },
    {
      "@type": "Country",
      "name": "Afrique francophone"
    }
  ],
  "serviceType": [
    "Conseil stratégique",
    "Gouvernance d'entreprise",
    "Transformation organisationnelle",
    "Capital humain"
  ],
  "knowsAbout": [
    "Stratégie d'entreprise",
    "Gouvernance",
    "Conformité OHADA",
    "Transformation digitale",
    "Leadership",
    "Management"
  ],
  "founder": {
    "@type": "Organization",
    "name": "INTEGRA PARTNERS"
  },
  "slogan": "Conseil Stratégique pour Dirigeants Institutionnels"
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "INTEGRA PARTNERS",
  "url": "https://integrapartners.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://integrapartners.com/ressources?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const serviceSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "url": url,
  "provider": {
    "@type": "Organization",
    "name": "INTEGRA PARTNERS"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Afrique francophone"
  },
  "serviceType": "Conseil stratégique"
})
