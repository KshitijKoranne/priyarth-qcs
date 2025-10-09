import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white rounded-lg p-2 inline-block mb-4">
              <Image
                src="/logo-text.jpeg"
                alt="Priyarth QCS Logo"
                width={180}
                height={54}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-secondary-300 text-sm">
              Your Partner in Pharmaceutical Excellence — Ensuring Quality. Empowering Compliance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-secondary-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="text-secondary-300 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="/services" className="text-secondary-300 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="text-secondary-300 text-sm space-y-2">
              <p>
                Email:{" "}
                <a href="mailto:info.priyarthqcs@zohomail.in" className="hover:text-white transition-colors">
                  info.priyarthqcs@zohomail.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+917572868295" className="hover:text-white transition-colors">
                  +91 7572868295
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400 text-sm">
          <p>&copy; {currentYear} Made by KJR Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
