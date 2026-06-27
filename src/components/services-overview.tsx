import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  return (
    <section className="bg-[#051024] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm sm:text-base tracking-[0.18em] uppercase text-white/80">
            VIA FORTIS
          </p>

          <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Outdoor & Interior Solutions
          </h2>

          <p className="mt-6 text-xl sm:text-2xl font-semibold leading-snug">
            Bespoke Carpentry & Aluminium Fencing & Gates
          </p>

          <p className="mt-6 text-lg sm:text-xl font-medium">
            Design • Supply • Installation
          </p>

          <p className="mt-6 max-w-4xl text-base sm:text-lg leading-relaxed text-white/90">
            Internal Doors • Skirting & Architraves • Understairs Storage •
            Fitted Wardrobes • Bespoke Furniture • Aluminium Fencing •
            Pedestrian Gates
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#051024] rounded-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white rounded-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}