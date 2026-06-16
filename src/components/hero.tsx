"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Subtle Blue Background - Muted Navy/Slate Blue */}
      <div className="absolute inset-0 bg-[#f5f7fa]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/70 via-blue-50/50 to-slate-100/80"></div>
      
      {/* Shadowed Logo Background - Navy Aura with Visible Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-visible">
        <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px] opacity-[0.15]">
          <Image
            src="/images/logo.png"
            alt="Via Fortis Logo"
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(5, 16, 36, 0.8)) !important',
            }}
            priority
          />
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center">
        <FadeIn duration={1} delay={0.2} yOffset={30} className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
          {/* Main Heading - Serif Font - Mobile Optimized */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight tracking-tight text-[#051024] px-2">
            Aluminium Fencing & Gates for UK Homes
          </h1>
          
          {/* Sub-headline - Mobile Optimized */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-sans font-light leading-relaxed px-2">
            Low-maintenance | made-to-measure systems | Built to last
          </p>
          
          {/* CTA Button - Centered - Mobile Optimized */}
          <div className="pt-2 sm:pt-4 md:pt-6 flex justify-center px-2">
            <Link href="/products">
              <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-[#051024] text-white hover:bg-[#051024]/90 transition-all duration-300 text-sm sm:text-base font-medium uppercase tracking-[0.2em] flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl rounded-sm">
                <span>EXPLORE COLLECTION</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
