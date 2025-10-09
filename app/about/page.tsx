"use client";

import { motion } from "framer-motion";
import { Target, Award, Shield } from "lucide-react";
import type { Metadata } from "next";

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Priyarth QCS</h1>
            <p className="text-xl text-primary-100">
              Your trusted partner in pharmaceutical quality and compliance excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              Priyarth QCS is dedicated to advancing quality assurance and regulatory compliance standards
              in the pharmaceutical industry. We provide comprehensive solutions that ensure our clients meet
              the highest standards of quality, safety, and efficacy in pharmaceutical manufacturing and operations.
            </p>
            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              With deep expertise in Good Manufacturing Practices (GMP), quality systems, and regulatory requirements,
              we empower pharmaceutical companies to build robust compliance frameworks, maintain operational excellence,
              and achieve sustainable growth in an increasingly regulated environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8 text-center">
              Our Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-secondary-700">
              <p className="mb-6 leading-relaxed">
                Priyarth QCS offers end-to-end support across the pharmaceutical product lifecycle,
                from initial development through manufacturing, quality control, and regulatory compliance.
                Our services span:
              </p>
              <ul className="space-y-3 mb-8">
                <li>Comprehensive GMP training and capacity building programs</li>
                <li>Internal and external quality audits with actionable recommendations</li>
                <li>CAPA (Corrective and Preventive Actions) and non-conformance management</li>
                <li>Computer System Validation (CSV) and digital compliance</li>
                <li>Regulatory filing support including licensing and Drug Master Files (DMF)</li>
                <li>Product registration across global markets</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regulatory Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8 text-center">
              Regulatory Standards We Serve
            </h2>
            <p className="text-lg text-secondary-700 mb-8 leading-relaxed text-center">
              We provide expert guidance and support for compliance with major global regulatory authorities:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-100 hover:border-primary-300 transition-colors">
                <h3 className="text-xl font-bold text-primary-800">FDA</h3>
                <p className="text-sm text-secondary-600 mt-2">United States</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-100 hover:border-primary-300 transition-colors">
                <h3 className="text-xl font-bold text-primary-800">MHRA</h3>
                <p className="text-sm text-secondary-600 mt-2">United Kingdom</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-100 hover:border-primary-300 transition-colors">
                <h3 className="text-xl font-bold text-primary-800">ANVISA</h3>
                <p className="text-sm text-secondary-600 mt-2">Brazil</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-100 hover:border-primary-300 transition-colors">
                <h3 className="text-xl font-bold text-primary-800">EDQM</h3>
                <p className="text-sm text-secondary-600 mt-2">Europe</p>
              </div>
            </div>
            <p className="text-lg text-secondary-700 mt-8 leading-relaxed text-center">
              Our team ensures your operations meet the stringent requirements of these authorities,
              facilitating smooth product approvals and market access worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-600 rounded-full mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Quality</h3>
                <p className="text-primary-100">
                  Uncompromising commitment to excellence in every aspect of pharmaceutical quality management
                </p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-600 rounded-full mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Integrity</h3>
                <p className="text-primary-100">
                  Ethical practices, transparency, and honest guidance in all client relationships
                </p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-600 rounded-full mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Compliance</h3>
                <p className="text-primary-100">
                  Deep expertise in global regulatory requirements ensuring full adherence to standards
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
