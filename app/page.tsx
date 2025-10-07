"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  GraduationCap,
  Server,
  FileText,
  Settings
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-600 via-accent-700 to-primary-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Partner in Pharmaceutical Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-primary-100">
              Ensuring Quality. Empowering Compliance.
            </p>
            <p className="text-lg mb-8 text-primary-50 max-w-3xl mx-auto">
              Priyarth QCS is committed to advancing quality assurance and regulatory compliance in the pharmaceutical industry.
              We provide comprehensive GMP trainings, internal and external audits, CAPA and non-conformance management,
              and regulatory filing support.
            </p>
            <Link
              href="/services"
              className="inline-block bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 hover:text-primary-700 transition-colors shadow-lg"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive pharmaceutical quality and compliance solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={ShieldCheck}
              title="Pharmaceutical Quality & Compliance"
              description="End-to-end quality management solutions ensuring regulatory compliance and operational excellence."
              href="/services#quality-compliance"
            />
            <ServiceCard
              icon={FileCheck}
              title="Quality Audits"
              description="Comprehensive internal and external audits to identify gaps and improve quality systems."
              href="/services#quality-audits"
            />
            <ServiceCard
              icon={GraduationCap}
              title="Trainings & Workshops"
              description="Expert-led GMP training programs to empower your team with industry best practices."
              href="/services#trainings"
            />
            <ServiceCard
              icon={Server}
              title="Computer System Validation"
              description="Complete CSV lifecycle management ensuring compliance with regulatory requirements."
              href="/services#csv"
            />
            <ServiceCard
              icon={FileText}
              title="Regulatory Filings"
              description="Expert support for licensing, DMF preparation, and product registration globally."
              href="/services#regulatory-filings"
            />
            <ServiceCard
              icon={Settings}
              title="IT Services"
              description="Professional IT asset management and infrastructure support for pharmaceutical operations."
              href="/services#it-services"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Strengthen Your Compliance Systems?
            </h2>
            <p className="text-lg mb-8 text-primary-100">
              Contact us today to discuss how we can support your pharmaceutical quality and compliance needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 hover:text-primary-700 transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
