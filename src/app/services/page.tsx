import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const serviceGroups = [
  {
    title: "Carpentry",
    description:
      "Clean, accurate interior carpentry work for homes that need a premium finish.",
    items: [
      "Internal Door Installation",
      "Skirting & Architraves",
      "Flooring Installation",
    ],
  },
  {
    title: "Bespoke Furniture & Storage",
    description:
      "Made-to-measure storage and furniture solutions designed around your space.",
    items: [
      "Understairs Storage",
      "Fitted Wardrobes",
      "Alcove Units",
      "Media Walls",
      "Bespoke Furniture",
    ],
  },
  {
    title: "Aluminium Fencing & Gates",
    description:
      "Modern aluminium fencing and gate systems supplied with a complete service.",
    items: ["Site Survey", "Design", "Supply", "Installation"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20 sm:pt-24">
        <section className="bg-[#051024] text-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              <p className="text-sm tracking-[0.2em] uppercase text-white/70">
                VIA FORTIS
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
                Outdoor & Interior Solutions
              </h1>

              <p className="mt-6 text-xl sm:text-2xl font-semibold leading-snug">
                Bespoke Carpentry & Aluminium Fencing & Gates
              </p>

              <p className="mt-6 text-lg sm:text-xl font-medium">
                Design • Supply • Installation
              </p>

              <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-white/90">
                From interior carpentry and bespoke storage to aluminium fencing
                and gates, Via Fortis provides practical, made-to-measure
                solutions for homes and outdoor spaces.
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

        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {serviceGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-sm border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-serif font-bold text-[#051024]">
                    {group.title}
                  </h2>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                    {group.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-700 leading-relaxed"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#051024]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-sm bg-[#051024] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-serif font-bold">
                  Need a tailored quote?
                </h3>
                <p className="mt-2 text-white/75">
                  Tell us what you need and we will get back to you with the
                  right solution.
                </p>
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#051024] rounded-sm font-semibold uppercase tracking-wider hover:bg-slate-100 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}