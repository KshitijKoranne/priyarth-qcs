export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Priyarth QCS",
    "description": "Pharmaceutical Quality & Compliance Services - Your Partner in Pharmaceutical Excellence",
    "url": "https://priyarthqcs.com",
    "email": "info@priyarthqcs.com",
    "areaServed": "Worldwide",
    "serviceType": [
      "Pharmaceutical Quality Consulting",
      "GMP Compliance Services",
      "Quality Audits",
      "Pharmaceutical Training",
      "Computer System Validation",
      "Regulatory Filings",
      "IT Services"
    ],
    "knowsAbout": [
      "Good Manufacturing Practices (GMP)",
      "Quality Management Systems",
      "Regulatory Compliance",
      "FDA Regulations",
      "MHRA Guidelines",
      "ANVISA Compliance",
      "EDQM Standards"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
