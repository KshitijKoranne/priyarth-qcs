"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all border border-secondary-200 hover:border-primary-300"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="p-3 bg-primary-100 rounded-lg">
            <Icon className="h-6 w-6 text-primary-700" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">{title}</h3>
          <p className="text-secondary-600 mb-4">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-primary-700 hover:text-accent-600 font-medium inline-flex items-center group transition-colors"
            >
              Learn More
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
