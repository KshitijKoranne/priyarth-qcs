"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  GraduationCap,
  Server,
  FileText,
  Settings,
  CheckCircle
} from "lucide-react";

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  services: string[];
}

const services: Service[] = [
  {
    id: "quality-compliance",
    icon: ShieldCheck,
    title: "Pharmaceutical Quality & Compliance",
    description: "Comprehensive quality management solutions ensuring your operations meet the highest pharmaceutical standards and regulatory requirements.",
    services: [
      "Quality Management System (QMS) development and implementation",
      "GMP compliance assessment and gap analysis",
      "Quality Risk Management (QRM) implementation",
      "CAPA (Corrective and Preventive Actions) management",
      "Non-conformance and deviation management",
      "Change control and document management systems",
      "Quality metrics and KPI development",
      "Supplier quality management and vendor qualification",
      "Quality culture development and continuous improvement"
    ]
  },
  {
    id: "quality-audits",
    icon: FileCheck,
    title: "Pharmaceutical Quality Audits",
    description: "Independent, thorough audits to assess compliance, identify risks, and provide actionable recommendations for quality improvement.",
    services: [
      "Internal GMP audits across all pharmaceutical operations",
      "External supplier and vendor audits",
      "Pre-approval inspection (PAI) readiness audits",
      "Mock regulatory inspections",
      "Quality system effectiveness audits",
      "Process and procedure compliance audits",
      "Data integrity audits",
      "Audit program development and training",
      "Post-audit CAPA support and follow-up"
    ]
  },
  {
    id: "trainings",
    icon: GraduationCap,
    title: "Pharmaceutical Training & Workshops",
    description: "Expert-led training programs designed to build GMP knowledge, enhance compliance awareness, and develop quality culture within your organization.",
    services: [
      "GMP fundamentals and advanced training",
      "Quality system and documentation training",
      "Regulatory compliance and inspection readiness",
      "CAPA and deviation investigation training",
      "Data integrity and electronic records compliance",
      "Quality risk management (ICH Q9) training",
      "Audit techniques and auditor training",
      "Contamination control and cleanroom practices",
      "Customized role-based training programs",
      "Train-the-trainer programs for sustainable knowledge transfer"
    ]
  },
  {
    id: "csv",
    icon: Server,
    title: "Computer System Validation (CSV)",
    description: "Complete lifecycle validation services for computerized systems in pharmaceutical manufacturing and quality operations.",
    services: [
      "CSV strategy and planning",
      "Risk-based validation approach (GAMP 5)",
      "User Requirements Specification (URS) development",
      "Functional and Design Specifications",
      "Installation Qualification (IQ)",
      "Operational Qualification (OQ)",
      "Performance Qualification (PQ)",
      "Data integrity and 21 CFR Part 11 compliance",
      "System periodic review and revalidation",
      "Cloud system validation",
      "Legacy system validation and remediation"
    ]
  },
  {
    id: "regulatory-filings",
    icon: FileText,
    title: "Regulatory Filings & Product Registration",
    description: "Expert support for regulatory submissions, licensing, and product registration to facilitate market access globally.",
    services: [
      "Manufacturing license application and renewal support",
      "Drug Master File (DMF) preparation and submission",
      "Common Technical Document (CTD) compilation",
      "Product dossier preparation (Module 3 - Quality)",
      "Regulatory gap analysis and remediation",
      "Health authority queries and deficiency responses",
      "Product variation and lifecycle management",
      "Market authorization applications (MAA)",
      "Import/export licensing support",
      "Regulatory intelligence and compliance monitoring"
    ]
  },
  {
    id: "it-services",
    icon: Settings,
    title: "IT Services & IT Asset Management",
    description: "Professional IT infrastructure and asset management services tailored for pharmaceutical and regulated environments.",
    services: [
      "IT asset lifecycle management",
      "Hardware and software inventory management",
      "IT infrastructure setup and optimization",
      "Network security and data protection",
      "Backup and disaster recovery planning",
      "IT service management (ITSM) implementation",
      "Help desk and technical support services",
      "IT compliance and audit support",
      "Cloud migration and management",
      "IT budgeting and cost optimization"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100">
              Comprehensive pharmaceutical quality and compliance solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="scroll-mt-20"
              >
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary-100 rounded-xl">
                        <service.icon className="h-10 w-10 text-primary-700" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-secondary-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-secondary-50 rounded-xl p-8 border-2 border-secondary-200 hover:border-primary-300 transition-colors">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                      What We Offer:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary-700 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg mb-8 text-primary-100">
              We understand that every organization has unique needs. Contact us to discuss how we can tailor our services to meet your specific requirements.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
