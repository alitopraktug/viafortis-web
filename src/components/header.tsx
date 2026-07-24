"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";

const aluminiumItems = [
  "Aluminium Fencing",
  "Pedestrian Gates",
];

const carpentryItems = [
  "Internal Doors",
  "Kitchen Fitting",
  "Skirting & Architraves",
  "Bespoke Furniture",
  "Fitted Wardrobes",
  "Media Walls",
  "Understairs Storage",
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aluminiumOpen, setAluminiumOpen] = useState(false);
  const [carpentryOpen, setCarpentryOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setAluminiumOpen(false);
    setCarpentryOpen(false);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-[#051024] shadow-lg">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:h-24 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="z-50 flex items-center gap-3"
          >
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Via Fortis Logo"
                fill
                priority
                className="object-contain brightness-0 invert opacity-70"
              />
            </div>

            <div className="flex min-w-max flex-col items-start leading-none">
              <span className="whitespace-nowrap text-lg font-bold italic uppercase tracking-tight text-[#C0C0C0] sm:text-xl">
                VIA FORTIS
              </span>

              <span className="mt-1 whitespace-nowrap font-serif text-[8px] font-medium italic uppercase tracking-[0.16em] text-[#C0C0C0]/70 sm:text-[9px]">
                DESIGN TO IMPRESS.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            <Link
              href="/"
              className="text-xs font-medium uppercase tracking-widest text-white transition-colors hover:text-white/70"
            >
              Home
            </Link>

            {/* Aluminium Systems Dropdown */}
            <div className="group relative">
              <Link
                href="/products"
                className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:text-white/70"
              >
                Aluminium Systems

                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#051024] p-2 shadow-2xl">
                  {aluminiumItems.map((item) => (
                    <Link
                      key={item}
                      href="/products"
                      className="block rounded-lg px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Carpentry Dropdown */}
            <div className="group relative">
              <Link
                href="/services"
                className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:text-white/70"
              >
                Carpentry

                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#051024] p-2 shadow-2xl">
                  {carpentryItems.map((item) => (
                    <Link
                      key={item}
                      href="/services"
                      className="block rounded-lg px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/gallery"
              className="text-xs font-medium uppercase tracking-widest text-white transition-colors hover:text-white/70"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="text-xs font-medium uppercase tracking-widest text-white transition-colors hover:text-white/70"
            >
              About
            </Link>

            <Link
              href="/#contact"
              className="text-xs font-medium uppercase tracking-widest text-white transition-colors hover:text-white/70"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="z-50 flex items-center gap-3 sm:gap-4">
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="p-2 text-white transition-colors hover:text-white/70"
            >
              <ShoppingBag className="h-6 w-6" />
            </Link>

            <Link
              href="/#contact"
              className="hidden rounded-full bg-white px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#051024] transition-colors hover:bg-slate-100 xl:block"
            >
              Get in Touch
            </Link>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="p-2 text-white lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-[#051024] px-7 pb-10 sm:top-24 lg:hidden">
          <nav className="mx-auto max-w-xl">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block border-b border-white/10 py-5 text-xl font-medium uppercase tracking-[0.12em] text-white"
            >
              Home
            </Link>

            {/* Mobile Aluminium Systems */}
            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setAluminiumOpen((current) => !current)}
                className="flex w-full items-center justify-between py-5 text-left text-xl font-medium uppercase tracking-[0.12em] text-white"
              >
                Aluminium Systems

                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    aluminiumOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aluminiumOpen && (
                <div className="pb-4 pl-4">
                  {aluminiumItems.map((item) => (
                    <Link
                      key={item}
                      href="/products"
                      onClick={closeMobileMenu}
                      className="block border-l border-white/20 px-4 py-3 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Carpentry */}
            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setCarpentryOpen((current) => !current)}
                className="flex w-full items-center justify-between py-5 text-left text-xl font-medium uppercase tracking-[0.12em] text-white"
              >
                Carpentry

                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    carpentryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {carpentryOpen && (
                <div className="pb-4 pl-4">
                  {carpentryItems.map((item) => (
                    <Link
                      key={item}
                      href="/services"
                      onClick={closeMobileMenu}
                      className="block border-l border-white/20 px-4 py-3 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              onClick={closeMobileMenu}
              className="block border-b border-white/10 py-5 text-xl font-medium uppercase tracking-[0.12em] text-white"
            >
              Projects
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block border-b border-white/10 py-5 text-xl font-medium uppercase tracking-[0.12em] text-white"
            >
              About
            </Link>

            <Link
              href="/#contact"
              onClick={closeMobileMenu}
              className="block border-b border-white/10 py-5 text-xl font-medium uppercase tracking-[0.12em] text-white"
            >
              Contact
            </Link>

            {/* Information */}
            <div className="mt-5 border-t border-white/15 pt-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Information
              </p>

              <Link
                href="/faq"
                onClick={closeMobileMenu}
                className="block border-b border-white/10 py-4 text-base uppercase tracking-wider text-white/80"
              >
                FAQs
              </Link>

              <Link
                href="/shipping-delivery"
                onClick={closeMobileMenu}
                className="block border-b border-white/10 py-4 text-base uppercase tracking-wider text-white/80"
              >
                Shipping &amp; Delivery
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}