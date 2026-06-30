import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Bespoke Craftsmanship",
  "Premium Quality Materials",
  "Attention to Detail",
  "Reliable Communication",
  "Residential & Commercial Projects",
  "Design • Supply • Installation",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 sm:pt-32">
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-slate-500">
                ABOUT VIA FORTIS
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#051024] leading-tight">
                Design to Impress.
              </h1>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#051024]">
                  Who We Are
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
                  Via Fortis delivers premium outdoor and interior solutions for
                  residential and commercial properties. We specialise in
                  bespoke carpentry, kitchen fitting, fitted furniture, internal
                  door installation, skirting & architraves, and aluminium
                  fencing & gate systems.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#051024]">
                  What We Do
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
                  From bespoke kitchens and media walls to fitted wardrobes,
                  understairs storage, custom furniture and aluminium gate
                  installations, every project is tailored to our clients’ needs
                  with precision, quality and attention to detail.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#051024]">
                  Our Process
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
                  Every project begins with a consultation and site survey,
                  followed by expert design, material selection, supply and
                  professional installation. We manage every stage from start to
                  finish, ensuring a seamless experience and exceptional results.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#051024]">
                  Why Choose Via Fortis
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {reasons.map((reason) => (
                    <div
                      key={reason}
                      className="flex items-start gap-3 rounded-sm border border-slate-200 bg-slate-50 p-4"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#051024]" />
                      <span className="text-slate-700 font-medium">
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-sm bg-[#051024] text-white p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold">
                  Our Promise
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/85">
                  We believe every project should combine functionality, quality
                  and timeless design. Our mission is to create spaces that not
                  only meet expectations but leave a lasting impression through
                  exceptional craftsmanship and attention to detail.
                </p>

                <p className="mt-6 text-xl sm:text-2xl font-serif font-bold">
                  Design to Impress.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}