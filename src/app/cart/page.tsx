"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Trash2, ArrowRight, X } from "lucide-react";

// Helper function to get product image with dynamic color matching
import { getColorImagePath } from '@/data/products';

function getProductImage(item: { id: string; color: string; image: string }): string {
  const FALLBACK_IMAGE = '/images/products/z-type-anthracite.png';
  
  // If item already has a valid image, use it (remove any query strings and ensure lowercase)
  if (item.image && item.image.toLowerCase().startsWith('/images/products/z-type-')) {
    return item.image.split('?')[0].toLowerCase();
  }
  
  // Use centralized helper function for color-to-path mapping
  if (item.color) {
    return getColorImagePath(item.color);
  }
  
  // Final fallback
  return FALLBACK_IMAGE;
}

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();


  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-4 py-12 md:py-20 max-w-7xl">
          
          {/* Başlık */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#051024] tracking-tight mb-12">
            Your Basket
          </h1>

          {cartItems.length === 0 ? (
            /* DURUM A: Sepet Boş */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center py-20 md:py-32"
            >
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <ShoppingBag className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
                Your basket is empty
              </h2>
              <p className="text-gray-600 mb-8 text-center max-w-md">
                Start adding products to your basket to see them here.
              </p>
              <Link href="/products">
                <button className="px-8 py-4 bg-[#051024] text-white font-medium uppercase tracking-wider hover:bg-[#051024]/90 transition-all duration-300 flex items-center gap-3 group">
                  Continue Shopping
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          ) : (
            /* DURUM B: Ürün Var */
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
              {/* Sol: Ürün Listesi - Mobilde Üstte */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-1 lg:order-1">
                {/* Clear All Button - Top Right */}
                {cartItems.length > 0 && (
                  <div className="flex justify-end">
                    <button
                      onClick={clearCart}
                      className="text-sm text-red-500 hover:text-red-600 font-light transition-colors flex items-center gap-1.5"
                      aria-label="Clear all items"
                    >
                      <X className="w-4 h-4" />
                      Clear All Items
                    </button>
                  </div>
                )}
                {cartItems.map((item, index) => {
                  const productImage = getProductImage(item);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border border-gray-200 rounded-lg bg-white"
                    >
                      {/* Görsel - Mobilde Üstte */}
                      <div className="relative w-full sm:w-24 h-48 sm:h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-white flex-shrink-0 border border-gray-200">
                        <Image
                          key={`cart-${item.id}`}
                          src={productImage}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 100vw, 128px"
                          unoptimized
                          onError={(e) => {
                            // Prevent infinite loops - set once and stop
                            const target = e.target as HTMLImageElement;
                            const fallback = '/images/products/z-type-anthracite.png';
                            if (!target.src.includes(fallback)) {
                              target.src = fallback;
                              target.onerror = null; // Stop further error handling
                            }
                          }}
                        />
                      </div>

                    {/* Bilgiler - Mobilde Ortada */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#051024] mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                          Color: <span className="font-medium">{item.color}</span>
                        </p>
                        <div className="mt-2">
                          <p className="text-base sm:text-lg font-bold text-[#051024]">
                            £{item.price.toFixed(2)}
                          </p>
                          <p className="text-xs text-gray-500">(VAT Included)</p>
                        </div>
                      </div>
                    </div>

                    {/* Silme Butonu - Mobilde Sağ Üst */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors self-start sm:self-start"
                      aria-label="Remove from cart"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                  );
                })}
              </div>

              {/* Sağ: Order Summary - Mobilde Altta */}
              <div className="lg:col-span-1 order-2 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="sticky top-24 p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <h2 className="text-xl font-bold text-[#051024] mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    {/* Price Display */}
                    {cartItems.length > 0 && (
                      <div className="space-y-2 pb-4 border-b border-gray-200">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              {item.name} {item.quantity > 1 && `× ${item.quantity}`}
                            </span>
                            <span className="text-sm font-medium text-[#051024]">
                              £{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                          <span className="text-base font-bold text-[#051024]">Total</span>
                          <div className="text-right">
                            <span className="text-lg font-bold text-[#051024]">
                              £{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                            </span>
                            <p className="text-xs text-gray-500">(VAT Included)</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Empty Basket Button */}
                    {cartItems.length > 0 && (
                      <button
                        onClick={clearCart}
                        className="w-full mt-4 px-4 py-2 text-sm text-red-500 hover:text-red-700 hover:bg-red-50 transition-all duration-200 flex items-center justify-center gap-2 border border-red-200 rounded-lg font-medium"
                        aria-label="Empty basket"
                      >
                        <X className="w-4 h-4" />
                        Empty Basket
                      </button>
                    )}
                  </div>

                  <Link href="/checkout" className="block">
                    <button className="w-full px-6 py-4 bg-[#051024] text-white font-medium uppercase tracking-wider hover:bg-[#051024]/90 transition-all duration-300 flex items-center justify-center gap-3 group">
                      Proceed to Checkout
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <Link href="/products" className="block mt-4 text-center text-sm text-gray-600 hover:text-[#051024] transition-colors">
                    Continue Shopping
                  </Link>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

