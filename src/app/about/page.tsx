import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle } from "lucide-react";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

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
          <div className="container mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                ABOUT VIA FORTIS
              </p>

              <h1
                className={`${allura.className} mt-3 text-[32px] leading-none text-[#051024] sm:text-[36px] md:text-[40px]`}
              >
                Design to Impress.
              </h1>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="font-serif text-2xl font-bold text-[#051024] sm:text-3xl">
                  Who We Are
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Via Fortis delivers premium outdoor and interior solutions for
                  residential and commercial properties. We specialise in
                  bespoke carpentry, kitchen fitting, fitted furniture, internal
                  door installation, skirting &amp; architraves, and aluminium
                  fencing &amp; gate systems.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-[#051024] sm:text-3xl">
                  What We Do
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  From bespoke kitchens and media walls to fitted wardrobes,
                  understairs storage, custom furniture and aluminium gate
                  installations, every project is tailored to our clients’ needs
                  with precision, quality and attention to detail.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-[#051024] sm:text-3xl">
                  Our Process
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Every project begins with a consultation and site survey,
                  followed by expert design, material selection, supply and
                  professional installation. We manage every stage from start to
                  finish, ensuring a seamless experience and exceptional
                  results.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-bold text-[#051024] sm:text-3xl">
                  Why Choose Via Fortis
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {reasons.map((reason) => (
                    <div
                      key={reason}
                      className="flex items-start gap-3 rounded-sm border border-slate-200 bg-slate-50 p-4"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#051024]" />

                      <span className="font-medium text-slate-700">
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-sm bg-[#051024] p-6 text-white sm:p-8">
                <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                  Our Promise
                </h2>

                <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                  We believe every project should combine functionality, quality
                  and timeless design. Our mission is to create spaces that not
                  only meet expectations but leave a lasting impression through
                  exceptional craftsmanship and attention to detail.
                </p>

                <p className="mt-6 font-serif text-xl font-bold sm:text-2xl">
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