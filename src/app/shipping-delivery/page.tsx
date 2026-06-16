"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ShippingDeliveryPage() {
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
              SHIPPING & DELIVERY
            </h1>
          </motion.div>

          {/* Processing Time Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Processing Time
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              If the item is in stock, orders are processed and dispatched within 1–3 business days (excluding weekends and public holidays). If an item is not in stock, processing times may take longer and will depend on restock availability.
            </p>
          </motion.section>

          {/* Delivery Times Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Delivery Times
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              Delivery times vary by location and the shipping option selected at checkout. Estimated delivery times are shown at checkout.
            </p>
          </motion.section>

          {/* Shipping Costs Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Shipping Costs
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              Shipping costs are calculated at checkout based on your delivery address and the selected shipping method.
            </p>
          </motion.section>

          {/* Order Tracking Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Order Tracking
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              Once your order has been dispatched, you will receive a dispatch confirmation email with tracking details (if available).
            </p>
          </motion.section>

          {/* Delays Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Delays
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              Delivery estimates may be affected by peak periods, weather conditions, carrier delays, or customs processing (for international orders).
            </p>
          </motion.section>

          {/* Incorrect Address / Missed Delivery Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Incorrect Address / Missed Delivery
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              Please ensure your delivery details are correct. If an order is returned due to an incorrect address or missed delivery, additional shipping fees may apply to resend the parcel.
            </p>
          </motion.section>

        </div>
      </div>
      <Footer />
    </div>
  );
}

