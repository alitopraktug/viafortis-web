'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {motion, AnimatePresence} from 'framer-motion';
import {ArrowRight, X} from 'lucide-react';
import {useState, useEffect} from 'react';
import { getAllProducts } from '@/data/products';
import type { ProductDetail, ProductColor } from '@/types';

// Product Card Component - Interactive Color Preview
function ProductCard({ product, onSelect }: { product: ProductDetail; onSelect: () => void }) {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product.colors && product.colors.length > 0 ? product.colors[0] : null
  );
  
  // Use selected color's image or fallback to default - ensure lowercase for Vercel case-sensitivity
  const displayImage = (selectedColor?.image || product.image || '').toLowerCase();

  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-100px'}}
      transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
      className="cursor-pointer group"
      onClick={onSelect}
    >
      {/* Product Image - Dynamic based on selected color */}
      <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
        <Image
          src={displayImage}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Info - Minimal */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">{product.name}</h3>
        
        {/* Color Selection Dots - Interactive Preview */}
        {product.colors && product.colors.length > 0 && (
          <div 
            className="flex items-center gap-2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Update local state to preview color
                  setSelectedColor(color);
                  // Navigate to product detail page with color parameter
                  const url = `/products/${product.slug}?color=${encodeURIComponent(color.name)}`;
                  router.push(url);
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className={`cursor-pointer w-11 h-11 sm:w-8 sm:h-8 rounded-full transition-all duration-300 ${
                  selectedColor?.name === color.name
                    ? 'border border-[#051024] scale-110 shadow-md'
                    : 'border border-gray-300 hover:border-gray-400'
                }`}
                style={{ 
                  backgroundColor: color.hex,
                  ...(selectedColor?.name === color.name && {
                    boxShadow: '0 0 0 2px rgba(5, 16, 36, 0.3), 0 0 0 4px rgba(5, 16, 36, 0.1)'
                  })
                }}
                aria-label={color.name}
                title={`View ${color.name}`}
              />
            ))}
          </div>
        )}
        
        <Link 
          href={`/products/${product.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="inline-block"
        >
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors mt-4"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Catalog() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  
  // Get products from central data source
  const products = getAllProducts();

  return (
    <>
      <section id="catalog" className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-slate-900 mb-3 sm:mb-4 tracking-tight">
              The Collection
            </h2>
            <p className="text-base sm:text-lg text-slate-900 font-normal max-w-2xl mx-auto px-4">
              Precision-engineered aluminium systems with premium finishes.
            </p>
          </motion.div>

          {/* Borderless Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal - Left: Image, Right: Technical Details */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{scale: 0.95, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              exit={{scale: 0.95, opacity: 0}}
              className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Left: Large Product Image */}
              <div className="relative w-full md:w-1/2 h-[50vh] md:h-full bg-gray-50 flex items-center justify-center p-8">
                <Image
                  src={selectedProduct.image || selectedProduct.colors[0]?.image || ''}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain"
                  sizes="50vw"
                />
              </div>

              {/* Right: Technical Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6 overflow-y-auto">
                <div>
                  <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-lg text-slate-900 font-normal leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Color Selection in Modal - Direct Redirect */}
                {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
                      Color
                    </h3>
                    <div 
                      className="flex items-center gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {selectedProduct.colors.map((color) => {
                        // Store slug before closing modal
                        const productSlug = selectedProduct.slug;
                        
                        return (
                          <button
                            key={color.name}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              // Close modal first
                              setSelectedProduct(null);
                              // Force navigation to product detail page with color parameter
                              const url = `/products/${productSlug}?color=${encodeURIComponent(color.name)}`;
                              // Use window.location for guaranteed navigation
                              window.location.href = url;
                            }}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            className="cursor-pointer w-9 h-9 md:w-11 md:h-11 rounded-full transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 hover:scale-110"
                            style={{ backgroundColor: color.hex }}
                            aria-label={`View ${color.name} color`}
                            title={`View ${color.name}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Features */}
                {selectedProduct.features && selectedProduct.features.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                      Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-900">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                          <span className="text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Link 
                    href={`/products/${selectedProduct.slug}`}
                    className="flex-1"
                  >
                    <button
                      type="button"
                      className="w-full rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-all hover:bg-[#333333] hover:scale-[1.02]"
                    >
                      View Product
                    </button>
                  </Link>
                  <Link href="/#contact" className="flex-1">
                    <button
                      type="button"
                      className="w-full rounded-full border border-black/20 px-6 py-4 text-sm font-medium text-slate-900 transition-all hover:border-black hover:bg-black/5"
                    >
                      Get a Quote
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
