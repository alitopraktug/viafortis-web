"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAllProducts } from "@/data/products";

export default function ProductSimulator() {
  const router = useRouter();
  
  // Get product colors for simulator
  const products = getAllProducts();
  const zTypeProduct = products.find(p => p.id === 'louvre-fence-z-type');
  const finishes = zTypeProduct?.colors || [];
  const defaultColor = finishes[0] || null;

  return (
    <section id="simulator" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Customise Your Finish
          </h2>
          <p className="text-slate-900 mt-2 font-normal">
            Select a material to see the transformation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* SOL: ÜRÜN GÖRSELİ (Static default) */}
            {defaultColor && (
              <div className="relative aspect-square md:aspect-[4/3] w-full flex items-center justify-center bg-white rounded-2xl shadow-inner p-6">
                <Image
                  src={defaultColor.image}
                  alt={defaultColor.name}
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            )}

            {/* SAĞ: KONTROL PANELİ */}
            {defaultColor && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{defaultColor.name}</h3>
                  <div className="h-1 w-12 bg-blue-600 mt-4 rounded-full" />
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Select Material
                  </span>
                  <div className="flex gap-4">
                    {finishes.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // Force navigation to product detail page with color parameter
                          const url = `/products/louvre-fence-z-type?color=${encodeURIComponent(color.name)}`;
                          router.push(url);
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="cursor-pointer w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border-2 border-gray-300 hover:border-gray-400 hover:scale-105 hover:shadow-md"
                        style={{ backgroundColor: color.hex }}
                        aria-label={color.name}
                        title={`View ${color.name}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-900 mb-4 font-normal">
                    Ready to order this finish?
                  </p>
                  <Link href="/#contact">
                    <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-black transition-colors">
                      Get a Quote
                    </button>
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
