'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getProductsByCategory, toProductList, colorOptions } from '@/data/products';

export default function ProductsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<'fence' | 'gate'>('fence');

  // Get products from central data source
  const productsByCategory = getProductsByCategory(activeCategory);
  // Sort by price in ascending order (cheapest to most expensive)
  const sortedProducts = [...productsByCategory].sort((a, b) => a.price - b.price);
  const filteredProducts = sortedProducts.map(toProductList);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="pt-24">
        <section className="py-20 sm:py-32 md:py-40 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-6">
            {/* Section Header */}
            <motion.div
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-[#051024] mb-4 tracking-tight px-4">
                Our Collection
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-light max-w-2xl mx-auto mb-8 px-4">
                Precision-engineered aluminium systems with premium finishes.
              </p>
              
              {/* Kategori Sekmeleri - Apple Style Segmented Control */}
              <div className="w-full max-w-md mx-auto">
                <div className="inline-flex items-center bg-[#F3F4F6] rounded-full p-1 w-full">
                  <button
                    onClick={() => setActiveCategory('fence')}
                    className={`flex-1 px-4 md:px-8 py-2.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                      activeCategory === 'fence'
                        ? 'bg-white text-[#051024] shadow-sm'
                        : 'bg-transparent text-[#6B7280]'
                    }`}
                  >
                    FENCES
                  </button>
                  <button
                    onClick={() => setActiveCategory('gate')}
                    className={`flex-1 px-4 md:px-8 py-2.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                      activeCategory === 'gate'
                        ? 'bg-white text-[#051024] shadow-sm'
                        : 'bg-transparent text-[#6B7280]'
                    }`}
                  >
                    GATES
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Product Grid - Mobilde Tek Sütun */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="block"
                >
                  <motion.div
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-100px'}}
                    transition={{delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
                    className="cursor-pointer group bg-white rounded-lg border border-gray-100 overflow-hidden transition-all hover:border-gray-200"
                  >
                  {/* Product Image */}
                  <div className="relative w-full h-[450px] mb-6 overflow-hidden flex items-center justify-center bg-transparent">
                    <Image
                      src={product.image?.toLowerCase() || ''}
                      alt={`${product.name} - ${product.description} - Via Fortis Aluminium Fencing`}
                      fill
                      className={`object-contain w-full h-full transition-transform ${
                        product.category === 'gate'
                          ? 'p-2 scale-[1.8]'
                          : 'p-6 scale-[1.5]'
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 h-[220px] flex flex-col">
                    <h3 className="text-2xl font-light text-[#051024] leading-tight line-clamp-2 min-h-[3.5rem]">
                      {product.name}
                    </h3>

                    <div className="mt-3">
                      <p className="text-xl font-semibold text-[#051024]">{product.price}</p>
                      {product.priceLabel && (
                        <p className="text-xs text-gray-500">(VAT Included)</p>
                      )}
                    </div>

                    {/* Color Selection Buttons - Direct Redirect */}
                    <div className="mt-4 flex items-center gap-2 h-10">
                      {colorOptions.map((color) => (
                        <button
                          key={color.value}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const url = `/products/${product.id}?color=${encodeURIComponent(color.name)}`;
                            router.push(url);
                          }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          className="cursor-pointer w-8 h-8 rounded-full transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 hover:scale-110 active:scale-95"
                          style={{ backgroundColor: color.value }}
                          aria-label={color.name}
                          title={`View ${color.name}`}
                        />
                      ))}
                    </div>

                    <div className="mt-auto inline-flex">
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-[#051024] transition-colors">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

