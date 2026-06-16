"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-24 pb-12">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative w-20 h-20">
                <Image
                  src="/images/logo.png"
                  alt="Via Fortis Logo - Page Not Found"
                  fill
                  className="object-contain brightness-0 opacity-60"
                  priority
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#051024] tracking-tight">
              Lost in the garden?
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-md mx-auto">
              The page you're looking for seems to have wandered off. Let's get you back on the right path.
            </p>

            {/* Button */}
            <div className="pt-6">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#051024] text-white rounded-full font-medium hover:bg-[#051024]/90 transition-all duration-300 uppercase tracking-[0.2em] text-sm"
                >
                  Return Home
                </motion.button>
              </Link>
            </div>

            {/* Error Code */}
            <p className="text-sm text-gray-400 font-light mt-8">
              404
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

