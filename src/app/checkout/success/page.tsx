"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useCart } from "@/context/CartContext";
import { CheckCircle, ArrowRight, Home } from "lucide-react";
import Image from "next/image";

// Helper function to get product image
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
  
  return FALLBACK_IMAGE;
}

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const { cartItems, clearCart } = useCart();
  const [orderItems, setOrderItems] = useState(cartItems);

  // Clear cart on mount
  useEffect(() => {
    // Store cart items before clearing (for display)
    setOrderItems([...cartItems]);
    // Clear the cart
    clearCart();
  }, []); // Run once on mount

  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
          
          {/* Success Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Checkmark Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
              className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-8 rounded-full bg-green-50 flex items-center justify-center border-2 border-green-200"
            >
              <CheckCircle className="w-14 h-14 md:w-16 md:h-16 text-green-600" />
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#051024] tracking-tight mb-6">
              Thank you for choosing Via Fortis excellence.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Your order has been received and is being prepared with precision.
            </p>
          </motion.div>

          {/* Order Summary */}
          {orderItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-50 rounded-xl border border-gray-200 p-6 md:p-8 mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#051024] tracking-tight mb-6 text-center">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {orderItems.map((item) => {
                  const productImage = getProductImage(item);
                  return (
                    <div key={item.id} className="flex gap-4 items-center bg-white rounded-lg p-4 border border-gray-200">
                      {/* Product Image */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-white flex-shrink-0 border border-gray-300">
                        <Image
                          src={productImage}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="80px"
                          unoptimized
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const fallback = '/images/products/z-type-anthracite.png';
                            if (!target.src.includes(fallback)) {
                              target.src = fallback;
                              target.onerror = null;
                            }
                          }}
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-semibold text-[#051024] mb-1">
                          {item.name}
                        </h3>
                        {item.color && (
                          <p className="text-sm text-gray-500 mb-2">
                            Color: {item.color}
                          </p>
                        )}
                        <div className="flex items-baseline justify-between">
                          <p className="text-sm text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                          <p className="text-base md:text-lg font-bold text-[#051024]">
                            £{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total */}
              <div className="pt-4 border-t border-gray-300">
                <div className="flex justify-between items-center text-xl md:text-2xl font-bold text-[#051024]">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 font-light text-right mt-1">
                  (VAT Included)
                </p>
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-[#051024] text-white font-medium uppercase tracking-wider hover:bg-[#051024]/90 transition-all duration-300 flex items-center justify-center gap-2 rounded-lg shadow-lg">
                <Home className="w-5 h-5" />
                Back to Home
              </button>
            </Link>
            
            <Link href="/products" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 border-2 border-[#051024] text-[#051024] font-medium uppercase tracking-wider hover:bg-[#051024] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 rounded-lg">
                Continue Exploring
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

