'use client';

import {motion} from 'framer-motion';
import {CheckCircle, Package, MessageSquare, Award, Sparkles} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Thoughtful Design',
    description: 'Clean lines, consistent finishes. Everything feels intentional.'
  },
  {
    icon: Package,
    title: 'Complete Solutions',
    description: 'A gate comes with its system. No surprises, no chasing extra parts.'
  },
  {
    icon: CheckCircle,
    title: 'Reliable Materials',
    description: '6063-T6 Aluminium. Solid, durable, long-lasting.'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'No confusing jargon. Just straightforward information.'
  },
  {
    icon: Award,
    title: 'Accessible Premium',
    description: 'High standards without the luxury attitude.'
  }
];

export default function Features() {
  return (
    <section id="whyUs" className="relative py-32 md:py-40 min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image with CSS Filters for Evening Vibe */}
      <div className="absolute inset-0 brightness-[0.35] contrast-[1.1] saturate-[0.8]" style={{backgroundImage: 'url(/images/products/z-type-anthracite.png)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Title and Description - Centered */}
        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-semibold text-white mb-4 tracking-tight max-w-3xl mx-auto drop-shadow-lg">
            About
          </h2>
          <p className="text-lg text-white font-normal max-w-3xl mx-auto">
            Quality that speaks for itself.
          </p>
        </motion.div>

        {/* Grid Yapısı - 5 Öğe için */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{opacity: 0, y: 24}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className="bg-white rounded-3xl p-8 border border-black/5 hover:border-black/10 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-900">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
