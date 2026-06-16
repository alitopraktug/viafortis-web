"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const links = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "/products" },
    { name: "WHY VIA FORTIS", href: "/about" },
    { name: "PROJECTS", href: "/gallery" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <>
      {/* HEADER: Dark Navy, Header and Hero Same Colour */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#051024] shadow-lg">
        <div className="container mx-auto px-3 sm:px-4 h-20 sm:h-24 flex items-center justify-between">
          
          {/* LOGO: Left Side - Icon + Text Side by Side, Silver Grey */}
          <Link href="/" className="z-50 flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image 
                src="/images/logo.png" 
                alt="Via Fortis - Architectural Fencing & Gates Logo" 
                fill 
                className="object-contain brightness-0 invert opacity-60"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl md:text-xl font-bold italic tracking-tight text-[#C0C0C0] leading-none uppercase">
              VIA FORTIS
            </span>
          </Link>

          {/* DESKTOP MENU: Right Side, Uppercase, Small, Wide Letter Spacing, Medium */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xs font-medium text-white hover:text-[#C5A059] transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* BASKET ICON */}
            <Link href="/cart" className="relative p-2 text-white hover:text-[#C5A059] transition-colors">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>

            <Link href="/#contact">
              <button className="hidden lg:block px-4 lg:px-5 py-2 bg-white text-[#051024] text-[10px] lg:text-[11px] font-light rounded-full hover:bg-slate-100 transition-all duration-300 uppercase tracking-[0.2em]">
                GET IN TOUCH
              </button>
            </Link>

            {/* MOBILE ICON */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#051024] flex flex-col justify-start overflow-y-auto px-8 py-20 md:hidden"
          >
            <nav className="flex flex-col gap-6 pb-8">
              {links.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl sm:text-3xl font-medium text-white border-b border-white/10 pb-4 hover:text-[#C5A059] transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Information Section */}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/20">
                <h3 className="text-xs font-bold tracking-widest text-white/70 uppercase pb-2">Information</h3>
                <Link 
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider border-b border-white/10 pb-3"
                >
                  FAQs
                </Link>
                <Link 
                  href="/shipping-delivery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider border-b border-white/10 pb-3"
                >
                  Shipping & Delivery
                </Link>
                <Link 
                  href="/refunds-returns"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider border-b border-white/10 pb-3"
                >
                  Refunds & Returns
                </Link>
                <Link 
                  href="/privacy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider border-b border-white/10 pb-3"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider border-b border-white/10 pb-3"
                >
                  Terms & Conditions
                </Link>
              </div>
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/20">
                <Link 
                  href="/cart"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 text-lg font-medium uppercase tracking-wider"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Basket {cartCount > 0 && `(${cartCount})`}
                </Link>
                <Link 
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center px-6 py-3 bg-white text-[#051024] rounded-full hover:bg-slate-100 transition-all duration-300 text-lg font-medium uppercase tracking-wider"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
