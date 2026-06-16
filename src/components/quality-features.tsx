"use client";

import { ShieldCheck, Sun, Droplets, Leaf, Wrench, Cog, Lock, Truck } from "lucide-react";
import FadeIn from "./FadeIn";

const features = [
  {
    icon: ShieldCheck,
    title: "10-year warranty",
    description: "Guaranteed durability of the finish"
  },
  {
    icon: Sun,
    title: "UV Resistant",
    description: "No fading or discoloration"
  },
  {
    icon: Droplets,
    title: "Weatherproof",
    description: "Rust-free aluminium construction"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "100% recyclable aluminium"
  },
  {
    icon: Wrench,
    title: "No painting",
    description: "Long-lasting powder-coated finish."
  },
  {
    icon: Cog,
    title: "Precision Engineered",
    description: "For a perfect, seamless fit"
  },
  {
    icon: Lock,
    title: "High Privacy & Security",
    description: "Delivery available across the UK"
  },
  {
    icon: Truck,
    title: "UK Wide Delivery",
    description: "Fast shipping to your door"
  }
];

export default function QualityFeatures() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn
                key={index}
                duration={0.6}
                delay={index * 0.08}
                yOffset={30}
                className="text-center space-y-4"
              >
                {/* İkon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#051024]" />
                  </div>
                </div>

                {/* Başlık */}
                <h3 className="text-lg md:text-xl font-bold text-[#051024] tracking-tight">
                  {feature.title}
                </h3>

                {/* Açıklama */}
                {feature.description && (
                  <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

