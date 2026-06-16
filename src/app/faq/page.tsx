"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you offer installation?",
    answer: "Yes, we offer both supply and installation services within the Essex area. For customers outside Essex, we currently provide supply-only services. Please contact us with your location and project details for a quotation."
  },
  {
    question: "What is the delivery time?",
    answer: "Usually 5-10 working days for UK Mainland. Delivery times may vary depending on location and product availability. Exact delivery dates will be confirmed during the quotation process."
  },
  {
    question: "Do the products come with a warranty?",
    answer: "Yes, minimum 5 years on powder coating. All Via Fortis products come with comprehensive warranty coverage. Specific warranty terms vary by product and will be detailed in your purchase documentation."
  },
  {
    question: "Can I return my order?",
    answer: "Please check our Returns Policy. We recommend reviewing our Terms & Conditions for detailed information about returns, exchanges, and refunds. For specific questions, please contact us at info@viafortis.co.uk."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-20 md:py-32 max-w-4xl">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#051024] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Find answers to common questions about our products and services.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#051024] pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 p-8 bg-gray-50 rounded-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#051024] mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-700 mb-4">
              If you can't find the answer you're looking for, please get in touch with us.
            </p>
            <a
              href="mailto:info@viafortis.co.uk"
              className="text-[#051024] font-medium hover:underline"
            >
              info@viafortis.co.uk
            </a>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

