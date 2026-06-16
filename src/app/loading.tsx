"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-24 h-24"
      >
        <Image
          src="/images/logo.png"
          alt="Via Fortis Logo - Loading"
          fill
          className="object-contain brightness-0 opacity-60"
          priority
        />
      </motion.div>
    </div>
  );
}

