// Product Types
export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface ProductFeature {
  name: string;
  description?: string;
}

// Key Dimensions for Product Details
export interface ProductKeyDimensions {
  visibleWidth?: string;
  slatLength?: string;
  overallHeight?: string;
}

// Product Detail Page Type (price as number)
export interface ProductDetail {
  id: string;
  slug: string; // URL-friendly identifier
  name: string;
  subHeading?: string; // Optional subheading
  price: number; // Number for calculations
  priceLabel?: string; // Optional label like "Launch Price"
  description: string;
  colors: ProductColor[];
  features: string[];
  image?: string; // Optional main image
  category?: 'fence' | 'gate';
  warranty?: string;
  keyDimensions?: ProductKeyDimensions; // Optional key dimensions
  whatsIncluded?: string[]; // Optional list of included items
}

// Product List Page Type (price as string for display)
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string; // String format: '£229'
  priceLabel?: string;
  features: string[];
  image: string;
  warranty?: string;
  category: 'fence' | 'gate';
}

// Cart Types (already defined in CartContext, but exported here for consistency)
export interface CartItem {
  id: string;
  name: string;
  price: number; // Always number in cart for calculations
  quantity: number;
  color: string;
  image: string;
}

// Color Option Type
export interface ColorOption {
  name: string;
  value: string; // Hex color code
}

// Helper function to convert price string to number
export function parsePrice(priceString: string): number {
  return parseFloat(priceString.replace('£', '').replace(',', '').trim());
}

// Helper function to format number to price string
export function formatPrice(price: number): string {
  return `£${price.toFixed(2)}`;
}

