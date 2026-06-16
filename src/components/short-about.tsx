'use client';

import {motion} from 'framer-motion';

export default function ShortAbout() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#051024]">
            The Strong Way
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#4B5563] font-light max-w-3xl mx-auto">
            Via Fortis means the strong way — a path built on clarity, quality and thoughtful architectural design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

