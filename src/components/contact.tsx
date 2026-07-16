"use client";

import {
  Mail,
  MessageCircle,
  Phone,
  QrCode,
} from "lucide-react";

import FadeIn from "./FadeIn";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-32 md:py-40"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-4">
        {/* Heading */}
        <FadeIn
          duration={0.8}
          delay={0.1}
          className="mb-12 space-y-4 text-center sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#051024] sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>

          <p className="font-light text-gray-600">
            Start your project with Via Fortis.
          </p>
        </FadeIn>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-12 md:gap-8">
          {/* Mobile: Direct Contact first
              Desktop: right side */}
          <div className="order-1 flex flex-col gap-5 sm:gap-6 md:order-2 md:col-span-4">
            {/* Direct Contact */}
            <FadeIn
              duration={0.8}
              delay={0.2}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="mb-6 text-xl font-light text-[#051024] sm:text-2xl">
                Direct Contact
              </h3>

              <a
                href="https://wa.me/447345308796?text=Hello%20Via%20Fortis%2C%20I%20would%20like%20a%20free%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 flex items-center gap-3 rounded-xl border border-[#25D366]/20 bg-[#25D366]/10 p-4 text-[#20b858] transition-colors hover:bg-[#25D366]/20 sm:gap-4"
              >
                <MessageCircle className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />

                <span className="text-sm font-medium sm:text-base">
                  Chat on WhatsApp
                </span>
              </a>

              <div className="space-y-4 text-gray-700">
                <a
                  href="mailto:info@viafortis.co.uk"
                  className="flex items-center gap-3 transition-colors hover:text-[#051024]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gray-500 sm:h-5 sm:w-5" />

                  <span className="break-all text-sm sm:text-base">
                    info@viafortis.co.uk
                  </span>
                </a>

                <a
                  href="tel:+447345308796"
                  className="flex items-center gap-3 transition-colors hover:text-[#051024]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gray-500 sm:h-5 sm:w-5" />

                  <span className="text-sm sm:text-base">
                    +44 7345 308796
                  </span>
                </a>
              </div>
            </FadeIn>

            {/* Products Card */}
            <FadeIn
              duration={0.8}
              delay={0.3}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center sm:p-8"
            >
              <div className="mb-4 rounded-xl bg-[#051024] p-4">
                <QrCode className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>

              <h3 className="text-lg font-medium text-[#051024] sm:text-xl">
                Aluminium Systems
              </h3>

              <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">
                Explore our aluminium fencing and pedestrian gate systems.
              </p>

              <a
                href="/products"
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#051024] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#051024]/90"
              >
                View Products
              </a>
            </FadeIn>
          </div>

          {/* Mobile: Form second / at the bottom
              Desktop: left side */}
          <FadeIn
            duration={0.8}
            delay={0.4}
            className="order-2 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 md:order-1 md:col-span-8 md:rounded-3xl md:p-10"
          >
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}