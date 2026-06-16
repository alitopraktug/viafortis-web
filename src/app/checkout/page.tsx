'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useCart } from '@/context/CartContext';
import { Loader2, CheckCircle, Shield, Lock, X, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postcode: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
        },
        redirect: 'if_required',
      });

      if (error) {
        console.error('Payment error:', error);
        alert(error.message);
        setIsLoading(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        setIsLoading(false);
        // Redirect to success page
        router.push('/checkout/success');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setIsLoading(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-[#051024] mb-4">
          Order Confirmed!
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Thank you for your purchase. Your order has been successfully processed.
        </p>
        <button
          onClick={() => router.push('/products')}
          className="px-8 py-3 bg-[#051024] text-white font-medium uppercase tracking-wider hover:bg-[#051024]/90 transition-all"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-24 lg:pb-0">
      {/* Shipping Information */}
      <div className="space-y-6 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-[#051024] mb-4 font-serif">
          Shipping Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-4">
          <div>
            <label className="block text-xs font-light text-gray-500 mb-2 sm:mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={shippingInfo.name}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, name: e.target.value })
              }
              className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#051024] text-base"
            />
          </div>
          <div>
            <label className="block text-xs font-light text-gray-500 mb-2 sm:mb-1.5">
              Postcode
            </label>
            <input
              type="text"
              required
              value={shippingInfo.postcode}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, postcode: e.target.value })
              }
              className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#051024] text-base"
            />
          </div>
          <div>
            <label className="block text-xs font-light text-gray-500 mb-2 sm:mb-1.5">
              Address
            </label>
            <input
              type="text"
              required
              value={shippingInfo.address}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, address: e.target.value })
              }
              className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#051024] text-base"
            />
          </div>
          <div>
            <label className="block text-xs font-light text-gray-500 mb-2 sm:mb-1.5">
              City
            </label>
            <input
              type="text"
              required
              value={shippingInfo.city}
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, city: e.target.value })
              }
              className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#051024] text-base"
            />
          </div>
        </div>
      </div>

      {/* Payment Element */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-[#051024] mb-4">
          Payment Details
        </h3>
        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <PaymentElement />
        </div>
      </div>

      {/* Submit Button - Sticky on Mobile */}
      <div className="lg:static fixed bottom-0 left-0 right-0 lg:bg-transparent bg-white/95 backdrop-blur-md border-t-2 border-amber-300/40 shadow-2xl lg:border-t-0 lg:shadow-none p-4 lg:p-0 z-50">
        <button
          type="submit"
          disabled={!stripe || isLoading}
          className="w-full px-6 py-4 bg-[#051024] text-white font-medium uppercase tracking-wider hover:bg-[#051024]/90 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed rounded-full lg:rounded-lg shadow-lg lg:shadow-none"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Pay Now'
          )}
        </button>
      </div>

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-6 pt-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4" />
          <span>Secure SSL Encryption</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4" />
          <span>Verified by Stripe</span>
        </div>
      </div>
    </form>
  );
}

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

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

  useEffect(() => {
    // Create PaymentIntent on mount
    fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  const options = clientSecret
    ? {
        clientSecret,
        appearance: {
          theme: 'stripe' as const,
        },
      }
    : undefined;

  // Get first cart item for display (or use default)
  const firstItem = cartItems[0] || {
    name: 'Aluminium Louvre Fence Panel',
    image: '/images/products/z-type-anthracite.png',
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-4 py-12 md:py-20 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#051024] tracking-tight mb-8 md:mb-12 font-serif">
            Checkout
          </h1>

          {/* Step Indicator */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 md:gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#051024] text-white flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <span className="text-sm font-light text-gray-700 hidden sm:inline">Shipping</span>
              </div>
              <div className="h-px bg-gray-300 flex-1 max-w-16"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#051024] text-white flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <span className="text-sm font-light text-gray-700 hidden sm:inline">Payment</span>
              </div>
              <div className="h-px bg-gray-300 flex-1 max-w-16"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <span className="text-sm font-light text-gray-500 hidden sm:inline">Confirm</span>
              </div>
            </div>
          </div>

          {/* Mobile: Order Summary at Top (Collapsible) */}
          <div className="lg:hidden mb-6">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              {/* Collapsible Header */}
              <button
                type="button"
                onClick={() => setIsOrderSummaryOpen(!isOrderSummaryOpen)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-[#051024] font-serif">
                    Order Summary
                  </h2>
                </div>
                {isOrderSummaryOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {/* Collapsible Content */}
              <AnimatePresence>
                {isOrderSummaryOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 space-y-3 border-t border-gray-200">
                      {cartItems.length > 0 ? (
                        <>
                          {cartItems.map((item) => {
                            const productImage = getProductImage(item);
                            return (
                              <div key={item.id} className="flex gap-3 items-center">
                                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white flex-shrink-0 border border-gray-300">
                                  <Image
                                    key={`checkout-mobile-${item.id}`}
                                    src={productImage}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                    sizes="48px"
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
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-700 truncate">
                                    {item.name}
                                  </p>
                                  {item.color && (
                                    <p className="text-xs text-gray-500">
                                      {item.color}
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                          <div className="pt-3 border-t border-gray-200 space-y-2">
                            {cartItems.map((item) => (
                              <div key={`price-${item.id}`} className="flex justify-between items-center">
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
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-4">
                          <ShoppingBag className="w-10 h-10 text-gray-400 mb-2" />
                          <p className="text-gray-600 text-sm">Your basket is empty.</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Two Column Layout: Form Left, Order Summary Right (Sticky) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Checkout Form */}
            <div className="lg:col-span-2">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-[#051024]" />
                </div>
              ) : clientSecret ? (
                <Elements stripe={stripePromise} options={options}>
                  <CheckoutForm />
                </Elements>
              ) : (
                <div className="text-center py-20 text-red-600">
                  Failed to initialize payment. Please try again.
                </div>
              )}
            </div>

            {/* Right: Order Summary - Sticky (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-[#051024] font-serif">
                    Order Summary
                  </h2>
                </div>
                <div className="space-y-4">
                  {cartItems.length > 0 ? (
                    <>
                      {cartItems.map((item) => {
                        const productImage = getProductImage(item);
                        return (
                          <div key={item.id} className="flex gap-3 items-center">
                            {/* Product Image - 64x64px with border */}
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0 border border-gray-300">
                              <Image
                                key={`checkout-${item.id}`}
                                src={productImage}
                                alt={item.name}
                                fill
                                className="object-contain"
                                sizes="64px"
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
                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-700 truncate">
                                {item.name}
                              </p>
                              {item.color && (
                                <p className="text-xs text-gray-500">
                                  {item.color}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                      <div className="pt-4 border-t border-gray-200 space-y-2">
                        {cartItems.map((item) => (
                          <div key={`price-${item.id}`} className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              {item.name} {item.quantity > 1 && `× ${item.quantity}`}
                            </span>
                            <span className="text-sm font-medium text-[#051024]">
                              £{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                          <span className="text-base font-bold text-[#051024]">Total</span>
                          <div className="text-right">
                            <span className="text-lg font-bold text-[#051024]">
                              £{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                            </span>
                            <p className="text-xs text-gray-500">(VAT Included)</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8">
                      <ShoppingBag className="w-12 h-12 text-gray-400 mb-4" />
                      <p className="text-gray-600 text-sm">Your basket is empty.</p>
                      <Link href="/products" className="mt-4 text-sm text-[#051024] hover:underline">
                        Continue Shopping
                      </Link>
                    </div>
                  )}
                </div>
                
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

