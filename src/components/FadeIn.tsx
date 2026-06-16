"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export default function FadeIn({
  children,
  duration = 0.6,
  delay = 0,
  yOffset = 20,
  className = "",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Apple-like easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

