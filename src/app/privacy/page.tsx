"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-20 md:py-32 max-w-4xl">
          
          {/* Başlık */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#051024] tracking-tight mb-4">
              PRIVACY POLICY
            </h1>
            <p className="text-gray-600 font-light">Last updated: 01/01/2026</p>
          </motion.div>

          {/* Giriş */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Via Fortis ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or contact us.
            </p>
          </motion.div>

          {/* Maddeler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Information we collect */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Information we collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may collect name, email, phone number, and info from forms. We also collect limited technical data (IP, browser).
              </p>
            </section>

            {/* How we use your information */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                How we use your information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To respond to enquiries, communicate about products, improve our website, and comply with legal obligations. We do not sell data.
              </p>
            </section>

            {/* Legal basis for processing */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Legal basis for processing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your consent, legitimate business interest, and legal requirements.
              </p>
            </section>

            {/* Data storage and security */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Data storage and security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your data is stored securely. We take reasonable measures to protect it.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may use cookies for functionality and analytics. You can manage them in browser settings.
              </p>
            </section>

            {/* Your rights */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Your rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Access data, request correction/deletion, withdraw consent. Contact: <a href="mailto:info@viafortis.co.uk" className="text-[#051024] underline hover:no-underline">info@viafortis.co.uk</a>
              </p>
            </section>

            {/* Data retention */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Data retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We keep data only as long as necessary.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Email: <a href="mailto:info@viafortis.co.uk" className="text-[#051024] underline hover:no-underline">info@viafortis.co.uk</a>, Location: United Kingdom.
              </p>
            </section>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

