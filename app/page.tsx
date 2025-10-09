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
  const services = [
    "Quality & Compliance",
    "Pharmaceutical Audits",
    "GMP Training",
    "Computer System Validation",
    "Regulatory Filings",
    "IT Asset Management"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/priyarthqcs.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Your Business through{" "}
              <span className="text-accent-400">Compliance Excellence</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-4 text-primary-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ensuring Quality. Empowering Compliance.
            </motion.p>
            <motion.p
              className="text-lg mb-8 text-primary-50 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Priyarth QCS is committed to advancing quality assurance and regulatory compliance in the pharmaceutical industry.
              We provide comprehensive GMP trainings, internal and external audits, CAPA and non-conformance management,
              and regulatory filing support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/services"
                className="inline-block bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated Services Marquee */}
      <section className="bg-secondary-900 text-white py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...services, ...services].map((service, index) => (
            <span key={index} className="inline-block mx-8 text-xl md:text-2xl font-semibold text-accent-400">
              {service} •
            </span>
          ))}
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
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
              Ready to Strengthen Your Compliance Systems?
            </h2>
            <p className="text-lg mb-8 text-primary-100">
              Contact us today to discuss how we can support your pharmaceutical quality and compliance needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
