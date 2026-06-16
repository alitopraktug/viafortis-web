'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { projects } from '@/data/projects';
import FadeIn from '@/components/FadeIn';

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="pt-24">
        <section className="py-20 sm:py-32 md:py-40 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-6">
            {/* Section Header */}
            <FadeIn duration={0.8} delay={0.1} className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#051024] mb-4 tracking-tight">
                Project Gallery
              </h2>
              <p className="text-base sm:text-lg text-[#4B5563] font-light max-w-2xl mx-auto leading-relaxed">
                A selection of aluminium fencing and gate designs.
              </p>
            </FadeIn>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <FadeIn key={project.id} duration={0.6} delay={index * 0.1}>
                  <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-100px'}}
                    transition={{delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
                    className="group cursor-pointer overflow-hidden rounded-lg border border-gray-100 hover:border-gray-200 transition-all bg-white shadow-sm hover:shadow-md"
                  >
                    {/* Image Container - Fixed Height */}
                    <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - Via Fortis Aluminium Fencing Installation Project`}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                        unoptimized={true}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    {/* Content - Only Title */}
                    <div className="p-5 md:p-6 bg-white">
                      <h3 className="text-lg md:text-xl font-medium text-[#051024] tracking-tight text-center">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

