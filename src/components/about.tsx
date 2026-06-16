'use client';

import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';
import {useRef} from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  // Parallax effect: image moves slower than content
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  return (
    <section ref={sectionRef} id="about" className="relative py-32 md:py-40 min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{y}}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/herofence2.png"
            alt="Via Fortis Aluminium Fencing - Premium Modern Home at Dusk"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
        {/* Overlay - bg-black/50 */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center min-h-[500px] md:min-h-[600px]">
          {/* Header */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-white mb-8 tracking-tight drop-shadow-lg">
              WHY VIA FORTIS
            </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1}}
            className="max-w-3xl"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-white font-normal">
              Via Fortis means the strong way — a path built on clarity, quality and thoughtful architectural design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
