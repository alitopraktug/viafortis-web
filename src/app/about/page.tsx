"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 max-w-4xl">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#051024] tracking-tight text-center">
              WHY VIA FORTIS
            </h1>
          </motion.div>

          {/* About Via Fortis Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              About Via Fortis
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-center">
              <p className="text-base md:text-lg font-sans">
                Via Fortis is a UK-based brand creating architectural systems for modern living. We focus on products where clean design, durable materials, and practical engineering come together — across both interior and exterior spaces.
              </p>
              <p className="text-base md:text-lg font-sans">
                Our approach is rooted in modular thinking: systems that are designed to integrate naturally into real homes and age well over time. From aluminium fencing and gates to future interior and exterior solutions, every Via Fortis product follows the same core principles: clarity in design, consistency in quality, and long-term performance.
              </p>
              <p className="text-base md:text-lg font-sans font-medium text-[#051024]">
                Via Fortis stands for strength with intention — designed with purpose, built to last.
              </p>
            </div>
          </motion.section>

          {/* What sets Via Fortis apart Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-8 md:mb-12">
              What sets Via Fortis apart
            </h2>
            
            <div className="space-y-10 md:space-y-12">
              {/* Designed with intention */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#051024] tracking-tight mb-3 md:mb-4">
                  Designed with intention
                </h3>
                <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Every Via Fortis product is developed with a clear purpose. We don't design for trends — we design for balance between form, function, and longevity.
                </p>
              </div>

              {/* Built to last */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#051024] tracking-tight mb-3 md:mb-4">
                  Built to last
                </h3>
                <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Materials and finishes are selected for durability and consistency, ensuring long-term performance with minimal intervention.
                </p>
              </div>

              {/* Modular thinking */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#051024] tracking-tight mb-3 md:mb-4">
                  Modular thinking
                </h3>
                <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Our systems are developed with modular logic, allowing structured, scalable solutions across different spaces and applications.
                </p>
              </div>

              {/* Made to fit modern living */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#051024] tracking-tight mb-3 md:mb-4">
                  Made to fit modern living
                </h3>
                <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Via Fortis products are designed to work across a variety of environments — indoors and out — without forcing rigid formats.
                </p>
              </div>

              {/* Consistency you can rely on */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#051024] tracking-tight mb-3 md:mb-4">
                  Consistency you can rely on
                </h3>
                <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  From design language to finish, consistency is built into every Via Fortis system, so what you see is what you get.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Our approach Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Our approach
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              We believe good systems should feel considered, not complicated. Design should serve a purpose, materials should perform over time, and products should integrate naturally into the spaces they occupy. That is the approach behind every Via Fortis system.
            </p>
          </motion.section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
