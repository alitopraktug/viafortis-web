"use client";

import { Mail, Phone, MapPin, MessageCircle, QrCode, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 md:py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-4 max-w-6xl relative z-10">
        
        <FadeIn duration={0.8} delay={0.1} className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#051024] tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-600 font-light">Start your project with Via Fortis.</p>
        </FadeIn>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          
          {/* Contact Form (Left, 2/3 width) */}
          <FadeIn duration={0.8} delay={0.2} className="md:col-span-8 bg-gray-50 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full bg-white border-b-2 border-gray-300 p-3 focus:outline-none focus:border-[#051024] transition-colors text-gray-900" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone</label>
                  <input type="tel" className="w-full bg-white border-b-2 border-gray-300 p-3 focus:outline-none focus:border-[#051024] transition-colors text-gray-900" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-white border-b-2 border-gray-300 p-3 focus:outline-none focus:border-[#051024] transition-colors text-gray-900" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-white border-b-2 border-gray-300 p-3 focus:outline-none focus:border-[#051024] transition-colors resize-none text-gray-900" />
              </div>

              <button className="w-full py-4 bg-[#051024] text-white rounded-xl font-medium hover:bg-[#051024]/90 transition-all flex items-center justify-center gap-2 group">
                Send Enquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </FadeIn>

          {/* Right Side Cards - Side by Side */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6 md:gap-8">
            
            {/* Card 1: Direct Contact */}
            <FadeIn duration={0.8} delay={0.3} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 flex-1">
              <h3 className="text-xl sm:text-2xl font-light text-[#051024] mb-6">
                Direct Contact
              </h3>
              
              <a href="https://wa.me/447345308796" className="flex items-center gap-3 sm:gap-4 p-4 bg-[#25D366]/10 text-[#25D366] rounded-xl hover:bg-[#25D366]/20 transition-colors cursor-pointer border border-[#25D366]/20 mb-6">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">Chat on WhatsApp</span>
              </a>

              <div className="space-y-4 text-gray-700">
                <a href="mailto:info@viafortis.co.uk" className="flex items-center gap-3 hover:text-[#051024] transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all">info@viafortis.co.uk</span>
                </a>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">+44 7345 308796</span>
                </div>
              </div>
            </FadeIn>

            {/* Card 2: QR Code - Hidden on Mobile, Button on Mobile */}
            <FadeIn duration={0.8} delay={0.4} className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 flex-1 flex flex-col items-center justify-center text-center">
              {/* Desktop: QR Code */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="bg-[#051024] p-3 sm:p-4 rounded-lg mb-4">
                  <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
                <h4 className="font-medium text-[#051024] mb-2 text-sm sm:text-base">Digital Catalogue</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light">Scan to view full catalogue on mobile.</p>
              </div>
              
              {/* Mobile: Button */}
              <div className="md:hidden w-full">
                <a
                  href="/gallery"
                  className="w-full py-3 px-4 bg-[#051024] text-white rounded-xl font-medium hover:bg-[#051024]/90 transition-all flex items-center justify-center gap-2"
                >
                  <QrCode className="w-5 h-5" />
                  View Digital Catalogue
                </a>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
