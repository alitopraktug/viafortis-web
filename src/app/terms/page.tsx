"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsPage() {
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
              TERMS & CONDITIONS
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
              By using this website, you agree to the following terms and conditions. If you do not agree, please do not use our website.
            </p>
          </motion.div>

          {/* Maddeler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* About Via Fortis */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                About Via Fortis
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Via Fortis supplies architectural aluminium systems including fencing and gates. We currently supply products only and do not provide installation services.
              </p>
            </section>

            {/* Product information */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Product information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All product descriptions, images, and specifications are provided for general guidance only. Final details, availability, and pricing are confirmed during the quotation process.
              </p>
            </section>

            {/* Quotations */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Quotations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Quotes are provided based on information supplied by the customer. Prices may change if specifications change. Quotes are valid for a limited period, stated at the time of issue.
              </p>
            </section>

            {/* Orders and payment */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Orders and payment
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Orders are confirmed once payment terms are agreed. Payment methods and terms will be outlined in your quotation or invoice.
              </p>
            </section>

            {/* Delivery */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Delivery
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Delivery times are estimates and may vary depending on location and availability. Via Fortis is not responsible for delays caused by third-party couriers or circumstances beyond our control.
              </p>
            </section>

            {/* Installation */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Installation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Via Fortis does not provide installation services. Customers are responsible for arranging installation through their own installer or contractor.
              </p>
            </section>

            {/* Liability */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Via Fortis shall not be liable for indirect or consequential losses. Our liability is limited to the value of the products supplied.
              </p>
            </section>

            {/* Intellectual property */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Intellectual property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, images, and branding, remains the property of Via Fortis unless stated otherwise.
              </p>
            </section>

            {/* Governing law */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Governing law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by the laws of England and Wales.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For any questions regarding these terms, please contact: <a href="mailto:info@viafortis.co.uk" className="text-[#051024] underline hover:no-underline">info@viafortis.co.uk</a>
              </p>
            </section>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

