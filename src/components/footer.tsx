"use client";

import {
  Facebook,
  Instagram,
  Music2,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-[#051024] pb-8 pt-16 text-white sm:pb-12 sm:pt-24">
      <FadeIn
        duration={0.8}
        delay={0.2}
        yOffset={30}
        className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-4"
      >
        <div className="mb-12 grid grid-cols-1 gap-8 sm:mb-16 sm:gap-12 md:grid-cols-5">
          {/* Logo and Social Media */}
          <div className="col-span-1 space-y-6 md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png"
                  alt="Via Fortis Logo"
                  fill
                  className="object-contain brightness-0 invert opacity-60"
                />
              </div>

              <div className="flex min-w-max flex-col items-start leading-none">
                <span className="whitespace-nowrap text-2xl font-bold italic uppercase tracking-tight text-[#C0C0C0]">
                  VIA FORTIS
                </span>

                <span className="mt-1 whitespace-nowrap font-serif text-[9px] font-medium italic uppercase tracking-[0.16em] text-[#C0C0C0]/70">
                  DESIGN TO IMPRESS.
                </span>
              </div>
            </Link>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/viafortisuk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 cursor-pointer text-white/80 transition-colors hover:text-white" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61585161590314"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 cursor-pointer text-white/80 transition-colors hover:text-white" />
              </a>

              <a
                href="https://www.tiktok.com/@viafortisuk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <Music2 className="h-5 w-5 cursor-pointer text-white/80 transition-colors hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">
              Links
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  Aluminium Systems
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  Carpentry
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">
              Information
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/faq"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping-delivery"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  Shipping &amp; Delivery
                </Link>
              </li>

              <li>
                <Link
                  href="/refunds-returns"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  Refunds &amp; Returns
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="block font-light text-white/80 transition-colors hover:text-white"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="font-light text-white/80">
                Essex
              </li>

              <li>
                <a
                  href="mailto:info@viafortis.co.uk"
                  className="font-light text-white/80 transition-colors hover:text-white"
                >
                  info@viafortis.co.uk
                </a>
              </li>

              <li>
                <a
                  href="tel:+447345308796"
                  className="font-light text-white/80 transition-colors hover:text-white"
                >
                  +44 7345 308796
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-xs md:flex-row">
          <p className="font-light text-white/80">
            © 2026 Via Fortis. All rights reserved.
          </p>

          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="font-light text-white/80 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="font-light text-white/80 transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}