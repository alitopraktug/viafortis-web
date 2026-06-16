'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Titanium Anthracite',
    src: '/images/darkfence1.png'
  },
  {
    id: 2,
    title: 'Nordic Wood Series',
    src: '/images/fencewood1.png'
  },
  {
    id: 3,
    title: 'Privacy Shield Tech',
    src: '/images/darkfence2.png'
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Başlık */}
        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-semibold text-slate-900 mb-4 tracking-tight">
            Signature Series
          </h2>
        </motion.div>

        {/* Borderless Grid - Sadece Resim ve İsim */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1, duration: 0.6}}
              className="group cursor-pointer"
            >
              {/* Resim - Borderless */}
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Sadece İsim */}
              <h3 className="text-xl font-semibold text-slate-900 text-center">{product.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
