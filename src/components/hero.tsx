"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f5f7fa]" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/70 via-blue-50/50 to-slate-100/80" />

      {/* Background Logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative h-[420px] w-[420px] opacity-[0.13] sm:h-[550px] sm:w-[550px] md:h-[700px] md:w-[700px] lg:h-[900px] lg:w-[900px]">
          <Image
            src="/images/logo.png"
            alt="Via Fortis Logo"
            fill
            priority
            className="object-contain"
            style={{
              filter: "drop-shadow(0 0 25px rgba(5, 16, 36, 0.7))",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <FadeIn
          duration={1}
          delay={0.2}
          yOffset={30}
          className="w-full"
        >
          {/* Main Heading */}
          <h1 className="mx-auto max-w-none font-serif text-3xl font-bold leading-[1.08] tracking-tight text-[#051024] sm:text-4xl md:text-5xl lg:whitespace-nowrap lg:text-5xl xl:text-6xl">
            Premium Carpentry &amp; Aluminium Systems
          </h1>

          {/* Services */}
          <p className="mx-auto mt-7 max-w-6xl text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg">
            Bespoke Carpentry • Internal Doors • Fitted Wardrobes • Bespoke
            Furniture • Aluminium Fencing • Pedestrian Gates
          </p>

        {/* Design / Supply / Installation */}
          <p className="mx-auto mt-5 text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg">
            Design • Supply • Installation
          </p>

          {/* Main Buttons */}
          <div className="mx-auto mt-8 flex max-w-2xl flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="group flex w-full items-center justify-center gap-3 rounded-sm bg-[#051024] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a1b38] hover:shadow-xl sm:w-auto"
            >
              Get a Free Quote

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="group flex w-full items-center justify-center gap-3 rounded-sm bg-[#051024] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a1b38] hover:shadow-xl sm:w-auto"
            >
              View Services

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Design to Impress */}
          <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-5">
            <span className="hidden h-px flex-1 bg-[#051024]/20 sm:block" />

            <p className="font-serif text-2xl font-medium italic text-[#051024] sm:text-3xl">
              Design to Impress.
            </p>

            <span className="hidden h-px flex-1 bg-[#051024]/20 sm:block" />
          </div>

          {/* Direct Contact Bar */}
          <div className="mx-auto mt-8 w-full max-w-5xl overflow-hidden rounded-2xl border border-[#1a2c4d] bg-[#051024] text-left shadow-xl">
            <div className="border-b border-white/10 px-5 py-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
                Direct Contact
              </p>
            </div>

            <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
              {/* WhatsApp */}
              <a
                href="https://wa.me/447345308796?text=Hello%20Via%20Fortis%2C%20I%20would%20like%20a%20free%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-6 transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/65">
                    WhatsApp
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-white">
                    Chat with us
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@viafortis.co.uk"
                className="flex items-center gap-4 px-6 py-6 transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-white/65">
                    Email
                  </span>

                  <span className="mt-1 block truncate text-sm font-semibold text-white">
                    info@viafortis.co.uk
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+447345308796"
                className="flex items-center gap-4 px-6 py-6 transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/65">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-white">
                    +44 7345 308796
                  </span>
                </div>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}