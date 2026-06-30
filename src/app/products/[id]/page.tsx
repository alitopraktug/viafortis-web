"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Plus, Minus, Check, ShieldCheck, Sun, Droplets, Leaf, ShoppingCart, X, AlertTriangle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProductById, getStockStatus } from "@/data/products";
import type { ProductDetail } from "@/types";

// Hard-coded image mapping - zero failure guarantee (no dynamic paths)
const PRODUCT_IMAGES: Record<string, string> = {
  "Anthracite Grey": "/images/products/z-type-anthracite.png",
  "Black": "/images/products/z-type-black.png",
  "Dark Oak": "/images/products/z-type-dark-oak.png",
  "Light Oak": "/images/products/z-type-light-oak.png"
};

const GATE_IMAGES: Record<string, string> = {
  "Anthracite Grey": "/images/products/gates/z-gate-anthracite.png",
  "Black": "/images/products/gates/z-gate-black.png",
  "Dark Oak": "/images/products/gates/z-gate-dark-oak.png",
  "Light Oak": "/images/products/gates/z-gate-light-oak.png"
};

const PEDESTRIAN_GATE_IMAGES: Record<string, string> = {
  "Anthracite Grey": "/images/products/gates/z-pedestrian-anthracite.png",
  "Black": "/images/products/gates/z-pedestrian-black.png",
  "Dark Oak": "/images/products/gates/z-pedestrian-dark-oak.png",
  "Light Oak": "/images/products/gates/z-pedestrian-light-oak.png"
};

const HORIZONTAL_SLAT_FENCE_IMAGES: Record<string, string> = {
  "Anthracite Grey": "/images/products/h-slat-anthracite.png",
  "Black": "/images/products/h-slat-black.png",
  "Dark Oak": "/images/products/h-slat-dark-oak.png",
  "Light Oak": "/images/products/h-slat-light-oak.png"
};

const OVAL_SLAT_FENCE_IMAGES: Record<string, string> = {
  "Anthracite Grey": "/images/products/oval-slat-fence-anthracite.png",
  "Black": "/images/products/oval-slat-fence-black.png",
  "Dark Oak": "/images/products/oval-slat-fence-dark-oak.png",
  "Light Oak": "/images/products/oval-slat-fence-light-oak.png"
};

const OVAL_SLAT_PEDESTRIAN_GATE_IMAGES: Record<string, string> = {
  "Anthracite Grey": "/images/products/gates/osp-gate-anthracite.png",
  "Black": "/images/products/gates/osp-gate-black.png",
  "Dark Oak": "/images/products/gates/osp-gate-dark-oak.png",
  "Light Oak": "/images/products/gates/osp-gate-light-oak.png"
};

export default function ProductDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const productId = params?.id as string;
  const colorParamRaw = searchParams.get('color');
  // Decode URL parameter (handles "Dark%20Oak" -> "Dark Oak")
  const colorParam = colorParamRaw ? decodeURIComponent(colorParamRaw) : null;
  
  // Get product from central data source
  const product = getProductById(productId);
  
  // Get the correct image mapping based on product ID
  const getImageMapping = (): Record<string, string> => {
    if (product?.id === 'pedestrian-gate') {
      return PEDESTRIAN_GATE_IMAGES;
    }
    if (product?.id === 'oval-slat-pedestrian-gate') {
      return OVAL_SLAT_PEDESTRIAN_GATE_IMAGES;
    }
    if (product?.id === 'horizontal-slat-fence') {
      return HORIZONTAL_SLAT_FENCE_IMAGES;
    }
    if (product?.id === 'aluminium-oval-slat-fence-panel') {
      return OVAL_SLAT_FENCE_IMAGES;
    }
    if (product?.category === 'gate') {
      return GATE_IMAGES;
    }
    return PRODUCT_IMAGES;
  };
  
  // Initialize selectedColor based on URL parameter or default to first color
  const getInitialColor = () => {
    if (!product?.colors || product.colors.length === 0) {
      return { name: '', hex: '#000000', image: product?.image || '' };
    }
    
    const imageMapping = getImageMapping();
    
    // If color parameter exists, find matching color (case-insensitive)
    if (colorParam) {
      const normalizedParam = colorParam.toLowerCase().trim();
      const colorFromParam = product.colors.find(
        (c) => {
          const normalizedName = c.name.toLowerCase().trim();
          return normalizedName === normalizedParam || 
                 normalizedName.includes(normalizedParam) ||
                 normalizedParam.includes(normalizedName);
        }
      );
      if (colorFromParam) {
        // Ensure image path uses correct mapping (PRODUCT_IMAGES or GATE_IMAGES)
        return {
          ...colorFromParam,
          image: imageMapping[colorFromParam.name] || imageMapping["Anthracite Grey"]
        };
      }
    }
    
    // Default to first color with mapped image
    const firstColor = product.colors[0];
    return {
      ...firstColor,
      image: imageMapping[firstColor.name] || imageMapping["Anthracite Grey"]
    };
  };
  
  const [selectedColor, setSelectedColor] = useState(getInitialColor());
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();

  // Update selected color when product or colorParam changes
  useEffect(() => {
    if (product?.colors && product.colors.length > 0) {
      const imageMapping = getImageMapping();
      
      if (colorParam) {
        const normalizedParam = colorParam.toLowerCase().trim();
        const colorFromParam = product.colors.find(
          (c) => {
            const normalizedName = c.name.toLowerCase().trim();
            return normalizedName === normalizedParam || 
                   normalizedName.includes(normalizedParam) ||
                   normalizedParam.includes(normalizedName);
          }
        );
        if (colorFromParam) {
          // Ensure image path uses correct mapping (PRODUCT_IMAGES or GATE_IMAGES)
          setSelectedColor({
            ...colorFromParam,
            image: imageMapping[colorFromParam.name] || imageMapping["Anthracite Grey"]
          });
          setImageError(false); // Reset image error when color changes
          return;
        }
      }
      // Default to first color with mapped image
      const firstColor = product.colors[0];
      setSelectedColor({
        ...firstColor,
        image: imageMapping[firstColor.name] || imageMapping["Anthracite Grey"]
      });
      setImageError(false); // Reset image error
    }
  }, [product, colorParam]);

  // If product not found, show 404
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#051024] mb-4">Product Not Found</h1>
          <Link href="/products" className="text-[#051024] hover:underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get the correct image mapping based on product category
  const imageMapping = getImageMapping();
  
  // Hard-coded image mapping - force exact filename match (no dynamic paths)
  const currentImage = imageMapping[selectedColor.name] || imageMapping["Anthracite Grey"];

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Add to cart handler
  const handleAddToCart = () => {
    addToCart(
      {
        id: `${product.id}-${selectedColor.name}`,
        name: product.name,
        price: product.price,
        color: selectedColor.name,
        image: imageMapping[selectedColor.name] || imageMapping["Anthracite Grey"],
      },
      quantity
    );
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <Header />
      <div className="pt-24">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 sm:px-6 md:px-4 py-4 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#051024] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#051024] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#051024] font-medium">{product.name}</span>
          </nav>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-4 py-8 md:py-12 max-w-7xl">
          
          {/* Grid Layout: Above the Fold Optimized */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            
            {/* Left Column: Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1"
            >
              {/* Product Image */}
              <div className={`relative w-full aspect-square md:aspect-[4/5] max-h-[600px] md:max-h-[70vh] rounded-lg overflow-hidden ${
                product.category === 'gate' 
                  ? 'bg-transparent border-0 p-2 md:p-4' 
                  : 'bg-gray-100 border border-gray-200'
              }`}>
                {!imageError && imageMapping[selectedColor.name] ? (
                  <Image
                    src={imageMapping[selectedColor.name]}
                    alt={`${product.name} - ${selectedColor.name} - Via Fortis Aluminium Fencing`}
                    fill
                    className={`transition-opacity duration-300 ${
                      product.category === 'gate' 
                        ? 'object-contain scale-[1.4]' 
                        : 'object-contain'
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    onError={(e) => {
                      console.error('Image load error:', imageMapping[selectedColor.name]);
                      setImageError(true);
                    }}
                    priority
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="text-center p-8">
                      <div 
                        className="w-24 h-24 mx-auto mb-4 rounded-lg border-2 border-gray-400"
                        style={{ backgroundColor: selectedColor.hex }}
                      ></div>
                      <p className="text-gray-600 font-light">{selectedColor.name}</p>
                      {imageError && (
                        <p className="text-xs text-red-500 mt-2">Image not found</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Column: Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 sm:space-y-4 md:space-y-5 order-2"
            >
              {/* Product Title - Mobile Typography Refinement */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#051024] tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Product Subheading - Mobile Typography Refinement */}
              {product.subHeading && (
                <p className="text-sm sm:text-base md:text-lg font-light text-gray-700 leading-relaxed">
                  {product.subHeading}
                </p>
              )}

              {/* Color Selection - Mobile Optimized Touch Targets */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Select Color
                </h3>
                <div className="flex gap-3 sm:gap-4">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        // Always use correct mapping (PRODUCT_IMAGES or GATE_IMAGES) for consistency
                        setSelectedColor({
                          ...color,
                          image: imageMapping[color.name] || imageMapping["Anthracite Grey"]
                        });
                        setImageError(false); // Reset error when color changes
                      }}
                      className={`relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 transition-all ${
                        selectedColor.name === color.name
                          ? 'border-[#051024] scale-110 shadow-md'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name} color`}
                    >
                      {selectedColor.name === color.name && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-600 font-light">
                  Selected: <span className="font-medium">{selectedColor.name}</span>
                </p>
              </div>

              {/* Stock Status Indicator - All Products */}
              <div className="pt-2">
                {(() => {
                  const stockStatus = getStockStatus(selectedColor.name);
                  return (
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`w-2 h-2 rounded-full ${stockStatus.inStock ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                      <span className="text-gray-700 font-medium">{stockStatus.message}</span>
                    </div>
                  );
                })()}
              </div>

              {/* Product Description */}
              {product.description && (
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {product.description.charAt(0).toUpperCase() + product.description.slice(1)}
                </p>
              )}

              {/* Technical Details - Expanded for Detail Page */}
              <div className="space-y-3 pt-2 border-t border-gray-200">
                <h3 className="text-sm font-bold text-[#051024] uppercase tracking-wider">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-gray-700">
                  <div>
                    <span className="font-medium">Material Grade:</span> 6063-T6 Aluminium
                  </div>
                  <div>
                    <span className="font-medium">Panel Height:</span> 180cm (Standard)
                  </div>
                  {product.category !== 'gate' && (
                    <>
                      <div>
                        <span className="font-medium">Post Height (Sunk into Ground):</span> 220cm
                      </div>
                      <div>
                        <span className="font-medium">Post Height (Solid Floor / Timber Decking):</span> 190cm
                      </div>
                    </>
                  )}
                  <div>
                    <span className="font-medium">Panel Width:</span> {product.category === 'gate' ? '90cm (Standard)' : '180cm (Standard)'}
                  </div>
                  <div>
                    <span className="font-medium">Finish:</span> UV-resistant premium coating
                  </div>
                </div>
              </div>

              {/* Features - Grid Layout */}
              {product.features.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#051024] uppercase tracking-wider">
                    Features
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-gray-700">
                        <div className="w-1 h-1 rounded-full bg-[#051024] mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs md:text-sm font-light leading-tight">
                          {feature.charAt(0).toUpperCase() + feature.slice(1)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What's Included */}
              {product.whatsIncluded && product.whatsIncluded.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-gray-200">
                  <h3 className="text-sm font-bold text-[#051024] uppercase tracking-wider">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {product.whatsIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#051024] mt-0.5 flex-shrink-0" />
                        <span className="font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity Selection - Mobile Optimized Touch Targets */}
              <div className="space-y-2 sm:space-y-3 pt-2">
                <h3 className="text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Quantity
                </h3>
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="w-11 h-11 sm:w-10 sm:h-10 md:w-9 md:h-9 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-[#051024] transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-gray-700" />
                  </button>
                  <span className="text-xl sm:text-2xl font-bold text-[#051024] min-w-[2.5rem] sm:min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncreaseQuantity}
                    className="w-11 h-11 sm:w-10 sm:h-10 md:w-9 md:h-9 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-[#051024] transition-colors touch-manipulation"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Key Features - Moved from homepage */}
              <div className="pt-4 pb-4 border-t border-gray-200">
                <h3 className="text-sm font-bold text-[#051024] uppercase tracking-wider mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-6 h-6 text-[#051024]" />
                    </div>
                    <h4 className="text-xs font-bold text-[#051024]">10-year warranty</h4>
                    <p className="text-xs text-gray-600 font-light">Guaranteed durability of the finish</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                      <Sun className="w-6 h-6 text-[#051024]" />
                    </div>
                    <h4 className="text-xs font-bold text-[#051024]">UV Resistant</h4>
                    <p className="text-xs text-gray-600 font-light">No fading or discoloration</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                      <Droplets className="w-6 h-6 text-[#051024]" />
                    </div>
                    <h4 className="text-xs font-bold text-[#051024]">Weatherproof</h4>
                    <p className="text-xs text-gray-600 font-light">Rust-free aluminium construction</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                      <Leaf className="w-6 h-6 text-[#051024]" />
                    </div>
                    <h4 className="text-xs font-bold text-[#051024]">Eco-Friendly</h4>
                    <p className="text-xs text-gray-600 font-light">100% recyclable aluminium</p>
                  </div>
                </div>
              </div>

              {/* Price Display */}
              <div className="pt-4 pb-2 border-t border-gray-200 -mx-4 px-4 md:-mx-0 md:px-0">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl md:text-3xl font-bold text-[#051024]">
                    £{product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">(VAT Included)</p>
                </div>
              </div>

              {/* Add to Basket Button - Single Button for All Screen Sizes */}
              <div className="flex md:sticky md:top-24 md:top-28 bg-white pt-4 pb-2 border-t border-gray-200 -mx-4 px-4 md:-mx-0 md:px-0 md:border-t-0 md:pt-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full md:w-auto rounded-full bg-[#051024] text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#051024]/90 transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation min-h-[44px]"
                >
                  <ShoppingCart className="w-5 h-5" />
                  ADD TO BASKET
                </button>
              </div>

              {/* Additional Info */}
              <div className="pt-2 border-t border-gray-200 space-y-1 text-xs text-gray-600">
                <p className="font-light">
                  <span className="font-medium">Warranty:</span> {product.warranty || '10-Year Warranty'}
                </p>
                <p className="font-light">
                  <span className="font-medium">Delivery:</span> 2-4 weeks (UK Mainland)
                </p>
                <p className="font-light">
                  <span className="font-medium">Installation:</span> Not included. Contact us for recommended installers.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Technical Drawings Section */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-[#051024] tracking-tight mb-6">
              Technical Drawings
            </h2>
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 md:p-12">
              <p className="text-gray-600 font-light text-center">
                Technical drawings coming soon...
              </p>
            </div>
          </div>

          {/* Material Intelligence Section */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-gray-200">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#051024] tracking-tight mb-2">
                Material Intelligence
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-light">
                A clear comparison of modern fencing materials.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <div className="inline-block min-w-[600px] border border-gray-200 rounded-lg overflow-hidden">
                {/* Header Row */}
                <div className="grid grid-cols-4 border-b border-gray-200">
                  <div className="p-4 md:p-6 bg-gray-50 border-r border-gray-200 sticky left-0 z-10">
                    <h3 className="text-sm md:text-base font-bold text-[#051024]">Features</h3>
                  </div>
                  <div className="p-4 md:p-6 bg-[#051024] border-r border-gray-200">
                    <h3 className="text-sm md:text-base font-bold text-white text-center">Aluminium<br />(Via Fortis)</h3>
                  </div>
                  <div className="p-4 md:p-6 bg-white border-r border-gray-200">
                    <h3 className="text-sm md:text-base font-bold text-[#051024] text-center">Composite</h3>
                  </div>
                  <div className="p-4 md:p-6 bg-white">
                    <h3 className="text-sm md:text-base font-bold text-[#051024] text-center">Wood</h3>
                  </div>
                </div>

                {/* Data Rows */}
                <div>
                  {/* Maintenance Row */}
                  <div className="grid grid-cols-4 border-b border-gray-200">
                    <div className="p-4 md:p-6 bg-gray-50 border-r border-gray-200 flex items-center sticky left-0 z-10">
                      <span className="text-sm md:text-base font-medium text-[#051024]">Maintenance</span>
                    </div>
                    <div className="p-4 md:p-6 bg-[#051024] border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-white font-medium text-center">None</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">Moderate</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">High</span>
                      </div>
                    </div>
                  </div>

                  {/* Weather Resistance Row */}
                  <div className="grid grid-cols-4 border-b border-gray-200">
                    <div className="p-4 md:p-6 bg-gray-50 border-r border-gray-200 flex items-center sticky left-0 z-10">
                      <span className="text-sm md:text-base font-medium text-[#051024]">Weather Resistance</span>
                    </div>
                    <div className="p-4 md:p-6 bg-[#051024] border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-white font-medium text-center">Excellent</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">Good</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">Poor</span>
                      </div>
                    </div>
                  </div>

                  {/* Colour Stability Row */}
                  <div className="grid grid-cols-4 border-b border-gray-200">
                    <div className="p-4 md:p-6 bg-gray-50 border-r border-gray-200 flex items-center sticky left-0 z-10">
                      <span className="text-sm md:text-base font-medium text-[#051024]">Colour Stability</span>
                    </div>
                    <div className="p-4 md:p-6 bg-[#051024] border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-white font-medium text-center">Stable</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">Fades</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">Fades</span>
                      </div>
                    </div>
                  </div>

                  {/* Warping / Movement Row */}
                  <div className="grid grid-cols-4 border-b border-gray-200">
                    <div className="p-4 md:p-6 bg-gray-50 border-r border-gray-200 flex items-center sticky left-0 z-10">
                      <span className="text-sm md:text-base font-medium text-[#051024]">Warping / Movement</span>
                    </div>
                    <div className="p-4 md:p-6 bg-[#051024] border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-white font-medium text-center">None</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">Some</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">Significant</span>
                      </div>
                    </div>
                  </div>

                  {/* Lifespan Row */}
                  <div className="grid grid-cols-4 border-b border-gray-200">
                    <div className="p-4 md:p-6 bg-gray-50 border-r border-gray-200 flex items-center sticky left-0 z-10">
                      <span className="text-sm md:text-base font-medium text-[#051024]">Lifespan</span>
                    </div>
                    <div className="p-4 md:p-6 bg-[#051024] border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-white font-medium text-center">20 Years</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">7-8 Years</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">5 Years</span>
                      </div>
                    </div>
                  </div>

                  {/* Sustainability Row */}
                  <div className="grid grid-cols-4">
                    <div className="p-4 md:p-6 bg-gray-50 border-r border-gray-200 flex items-center sticky left-0 z-10">
                      <span className="text-sm md:text-base font-medium text-[#051024]">Sustainability</span>
                    </div>
                    <div className="p-4 md:p-6 bg-[#051024] border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-white font-medium text-center">100% Recyclable</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white border-r border-gray-200 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">Limited</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-700 font-medium text-center">Not Recyclable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-base md:text-lg text-gray-600 font-light text-center">
                Designed for long-term performance with minimal intervention.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 bg-[#051024] text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
          >
            <Check className="w-5 h-5 text-green-400" />
            <span className="font-medium">Added to basket</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

