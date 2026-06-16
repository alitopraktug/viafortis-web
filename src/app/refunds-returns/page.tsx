"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RefundsReturnsPage() {
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
              REFUNDS & RETURNS
            </h1>
          </motion.div>

          {/* Returns Period Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Returns Period
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              You may request a return within 14 days of receiving your order.
            </p>
          </motion.section>

          {/* Return Eligibility Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Return Eligibility
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              Items must be unused, unworn, undamaged, and returned with all original tags/packaging (where applicable).
            </p>
          </motion.section>

          {/* How to Start a Return Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              How to Start a Return
            </h2>
            <div className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto space-y-4">
              <p>
                To request a return, please email us at{" "}
                <a 
                  href="mailto:info@viafortis.co.uk" 
                  className="text-[#051024] font-medium hover:underline"
                >
                  info@viafortis.co.uk
                </a>{" "}
                with:
              </p>
              <ul className="text-left space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Your order number</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The item(s) you want to return</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The reason for the return</span>
                </li>
              </ul>
              <p className="mt-4">
                We will provide return instructions and the return address.
              </p>
            </div>
          </motion.section>

          {/* Refunds Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Refunds
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              Once your return is received and inspected, refunds will be processed to the original payment method within 5–10 business days.
            </p>
          </motion.section>

          {/* Return Shipping Costs Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Return Shipping Costs
            </h2>
            <div className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto space-y-3">
              <p>
                Return shipping costs are the customer's responsibility unless the item is faulty or incorrect.
              </p>
              <p>
                If your item is faulty or incorrect, we will cover the return shipping costs.
              </p>
            </div>
          </motion.section>

          {/* Non-Returnable Items Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Non-Returnable Items
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              Certain items may not be eligible for return, including personalised/custom-made products and items that cannot be returned for hygiene reasons.
            </p>
          </motion.section>

          {/* Damaged or Faulty Items Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#051024] tracking-tight text-center mb-6 md:mb-8">
              Damaged or Faulty Items
            </h2>
            <p className="text-base md:text-lg font-sans text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              If your item arrives damaged or faulty, please contact us within 48 hours of delivery and include photos so we can resolve the issue quickly.
            </p>
          </motion.section>

        </div>
      </div>
      <Footer />
    </div>
  );
}

