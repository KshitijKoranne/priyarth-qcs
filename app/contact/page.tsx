"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // User needs to replace this
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New Contact Form Submission - Priyarth QCS",
          from_name: "Priyarth QCS Website",
          to: "info.priyarthqcs@zohomail.in",
          // Auto-reply configuration
          botcheck: false,
          replyto: formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 8000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 8000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100">
              Get in touch with our team to discuss your pharmaceutical quality and compliance needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-lg text-secondary-700 mb-8">
                Whether you need quality audits, GMP training, regulatory support, or custom compliance solutions,
                our team is here to help. Reach out to us and we&apos;ll get back to you promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Mail className="h-6 w-6 text-primary-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">Email</h3>
                    <a
                      href="mailto:info.priyarthqcs@zohomail.in"
                      className="text-primary-700 hover:text-accent-600 transition-colors"
                    >
                      info.priyarthqcs@zohomail.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Phone className="h-6 w-6 text-primary-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">Phone</h3>
                    <a
                      href="tel:+917572868295"
                      className="text-primary-700 hover:text-accent-600 transition-colors"
                    >
                      +91 7572868295
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">Address</h3>
                    <p className="text-secondary-600">
                      [Business Address]<br />
                      [City, State, ZIP]
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary-50 rounded-lg border-2 border-primary-100">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Business Hours</h3>
                <p className="text-secondary-700">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary-50 rounded-xl p-8 border-2 border-secondary-200"
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send us a Message</h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Thank you for reaching out to PriyarthQCS! We have received your inquiry and our team will get back to you shortly.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    There was an error submitting your message. Please try again or email us directly at info.priyarthqcs@zohomail.in
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-all shadow-lg hover:shadow-xl disabled:bg-secondary-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Optional: Google Maps Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-secondary-200 rounded-xl overflow-hidden h-96 flex items-center justify-center border-2 border-secondary-300">
              <p className="text-secondary-500">
                [Google Maps integration can be added here]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
