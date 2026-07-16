"use client";

import { QrCode } from "lucide-react";
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
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12 md:gap-8">
          {/* Contact Form */}
          <FadeIn
            duration={0.8}
            delay={0.2}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 md:col-span-8 md:rounded-3xl md:p-10"
          >
            <ContactForm />
          </FadeIn>

          {/* Products Card */}
          <FadeIn
            duration={0.8}
            delay={0.3}
            className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center sm:p-8 md:col-span-4"
          >
            <div className="mb-5 rounded-xl bg-[#051024] p-4">
              <QrCode className="h-12 w-12 text-white sm:h-16 sm:w-16" />
            </div>

            <h3 className="text-xl font-medium text-[#051024] sm:text-2xl">
              View Our Products
            </h3>

            <p className="mt-3 text-sm font-light leading-relaxed text-gray-600">
              Explore our aluminium fencing, gates and bespoke solutions.
            </p>

            <a
              href="/products"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#051024] px-5 py-3 font-medium text-white transition-colors hover:bg-[#051024]/90"
            >
              View Products
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}