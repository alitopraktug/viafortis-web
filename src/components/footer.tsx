"use client";

import { Facebook, Instagram, Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="bg-[#051024] text-white pt-16 sm:pt-24 pb-8 sm:pb-12 w-full mt-auto border-t border-white/10">
      <FadeIn duration={0.8} delay={0.2} yOffset={30} className="container mx-auto px-4 sm:px-6 md:px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          
          <div className="col-span-1 md:col-span-2 space-y-6">
            {/* LOGO: Same as Header - Icon + Text */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/logo.png" 
                  alt="Via Fortis - Architectural Fencing & Gates Logo" 
                  fill 
                  className="object-contain brightness-0 invert opacity-60"
                />
              </div>
              <span className="text-2xl font-bold italic tracking-tight text-[#C0C0C0] leading-none uppercase">
                VIA FORTIS
              </span>
            </Link>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/viafortisuk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585161590314" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://www.tiktok.com/@viafortisuk" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <Music2 className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-white/70 uppercase">Links</h3>
            <ul className="space-y-4">
              <Link href="/" className="block text-white/80 hover:text-white transition-colors font-light">Home</Link>
              <Link href="/products" className="block text-white/80 hover:text-white transition-colors font-light">Products</Link>
              <Link href="/gallery" className="block text-white/80 hover:text-white transition-colors font-light">Projects</Link>
              <Link href="/about" className="block text-white/80 hover:text-white transition-colors font-light">Why Via Fortis</Link>
              <Link href="#contact" className="block text-white/80 hover:text-white transition-colors font-light">Contact</Link>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-white/70 uppercase">Information</h3>
            <ul className="space-y-4">
              <Link href="/faq" className="block text-white/80 hover:text-white transition-colors font-light">FAQs</Link>
              <Link href="/shipping-delivery" className="block text-white/80 hover:text-white transition-colors font-light">Shipping & Delivery</Link>
              <Link href="/refunds-returns" className="block text-white/80 hover:text-white transition-colors font-light">Refunds & Returns</Link>
              <Link href="/privacy" className="block text-white/80 hover:text-white transition-colors font-light">Privacy Policy</Link>
              <Link href="/terms" className="block text-white/80 hover:text-white transition-colors font-light">Terms & Conditions</Link>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-white/70 uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="text-white/80 font-light">Basildon, Essex, UK</li>
              <li className="text-white/80 font-light">info@viafortis.co.uk</li>
              <li className="text-white/80 font-light">+44 7345 308796</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-white/80 font-light">© 2025 Via Fortis. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-white/80 hover:text-white transition-colors font-light">Privacy Policy</Link>
            <Link href="/terms" className="text-white/80 hover:text-white transition-colors font-light">Terms & Conditions</Link>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
