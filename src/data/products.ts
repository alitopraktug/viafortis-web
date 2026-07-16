import { Product, ProductDetail, ProductColor } from '@/types';

// Helper: Sanitize color name to image path
export function getColorImagePath(colorName: string): string {
  if (!colorName) {
    return '/images/products/z-type-anthracite.png';
  }

  const normalized = colorName.toLowerCase().trim();

  if (
    normalized.includes('anthracite') ||
    normalized.includes('grey') ||
    normalized.includes('gray')
  ) {
    return '/images/products/z-type-anthracite.png';
  }

  if (normalized.includes('black')) {
    return '/images/products/z-type-black.png';
  }

  if (normalized.includes('dark') && normalized.includes('oak')) {
    return '/images/products/z-type-dark-oak.png';
  }

  if (normalized.includes('light') && normalized.includes('oak')) {
    return '/images/products/z-type-light-oak.png';
  }

  const sanitized = normalized
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  return `/images/products/z-type-${sanitized}.png`;
}

// Global colour options
export const colorOptions = [
  { name: 'Anthracite Grey', value: '#2D2926' },
  { name: 'Black', value: '#000000' },
  { name: 'Dark Oak', value: '#43352E' },
  { name: 'Light Oak', value: '#A67B5B' },
];

// Product colour image definitions
export const productColors: Record<string, ProductColor[]> = {
  'louvre-fence-z-type': [
    {
      name: 'Anthracite Grey',
      hex: '#2D2926',
      image: '/images/products/z-type-anthracite.png',
    },
    {
      name: 'Black',
      hex: '#000000',
      image: '/images/products/z-type-black.png',
    },
    {
      name: 'Dark Oak',
      hex: '#43352E',
      image: '/images/products/z-type-dark-oak.png',
    },
    {
      name: 'Light Oak',
      hex: '#A67B5B',
      image: '/images/products/z-type-light-oak.png',
    },
  ],

  // Aluminium Louvre Gate uses the pedestrian-style images.
  'louvre-gate': [
    {
      name: 'Anthracite Grey',
      hex: '#2D2926',
      image: '/images/products/gates/z-pedestrian-anthracite.png',
    },
    {
      name: 'Black',
      hex: '#000000',
      image: '/images/products/gates/z-pedestrian-black.png',
    },
    {
      name: 'Dark Oak',
      hex: '#43352E',
      image: '/images/products/gates/z-pedestrian-dark-oak.png',
    },
    {
      name: 'Light Oak',
      hex: '#A67B5B',
      image: '/images/products/gates/z-pedestrian-light-oak.png',
    },
  ],

  // Horizontal Slat Pedestrian Gate uses the gate-style images.
  'pedestrian-gate': [
    {
      name: 'Anthracite Grey',
      hex: '#2D2926',
      image: '/images/products/gates/z-gate-anthracite.png',
    },
    {
      name: 'Black',
      hex: '#000000',
      image: '/images/products/gates/z-gate-black.png',
    },
    {
      name: 'Dark Oak',
      hex: '#43352E',
      image: '/images/products/gates/z-gate-dark-oak.png',
    },
    {
      name: 'Light Oak',
      hex: '#A67B5B',
      image: '/images/products/gates/z-gate-light-oak.png',
    },
  ],

  'horizontal-slat-fence': [
    {
      name: 'Anthracite Grey',
      hex: '#2D2926',
      image: '/images/products/h-slat-anthracite.png',
    },
    {
      name: 'Black',
      hex: '#000000',
      image: '/images/products/h-slat-black.png',
    },
    {
      name: 'Dark Oak',
      hex: '#43352E',
      image: '/images/products/h-slat-dark-oak.png',
    },
    {
      name: 'Light Oak',
      hex: '#A67B5B',
      image: '/images/products/h-slat-light-oak.png',
    },
  ],

  'aluminium-oval-slat-fence-panel': [
    {
      name: 'Anthracite Grey',
      hex: '#2D2926',
      image: '/images/products/oval-slat-fence-anthracite.png',
    },
    {
      name: 'Black',
      hex: '#000000',
      image: '/images/products/oval-slat-fence-black.png',
    },
    {
      name: 'Dark Oak',
      hex: '#43352E',
      image: '/images/products/oval-slat-fence-dark-oak.png',
    },
    {
      name: 'Light Oak',
      hex: '#A67B5B',
      image: '/images/products/oval-slat-fence-light-oak.png',
    },
  ],

  'oval-slat-pedestrian-gate': [
    {
      name: 'Anthracite Grey',
      hex: '#2D2926',
      image: '/images/products/gates/osp-gate-anthracite.png',
    },
    {
      name: 'Black',
      hex: '#000000',
      image: '/images/products/gates/osp-gate-black.png',
    },
    {
      name: 'Dark Oak',
      hex: '#43352E',
      image: '/images/products/gates/osp-gate-dark-oak.png',
    },
    {
      name: 'Light Oak',
      hex: '#A67B5B',
      image: '/images/products/gates/osp-gate-light-oak.png',
    },
  ],
};

// Central products database
export const products: ProductDetail[] = [
  {
    id: 'louvre-fence-z-type',
    slug: 'louvre-fence-z-type',
    name: 'Aluminium Louvre Fence Panel',
    subHeading:
      'Low-maintenance, powder-coated aluminium panel for privacy and a clean modern look.',
    price: 399.0,
    category: 'fences' as any as 'fence' | 'gate' | undefined,
    priceLabel: 'VAT Included',
    description: '',
    features: [],
    colors: productColors['louvre-fence-z-type'],
    image: '/images/products/z-type-anthracite.png',
    keyDimensions: {
      visibleWidth: '180 cm',
      slatLength: '184 cm (slots 20mm into each post channel)',
      overallHeight: '190 cm',
    },
    whatsIncluded: [
      '2 x aluminium posts (with side channels)',
      '20 x louvre panels (slats)',
      'Fixings / caps',
    ],
  },

  {
    id: 'louvre-gate',
    slug: 'louvre-gate',
    name: 'Aluminium Louvre Gate',
    subHeading:
      'Low-maintenance, powder-coated aluminium gate for privacy and a clean modern look.',
    price: 449.0,
    category: 'gate' as 'fence' | 'gate' | undefined,
    priceLabel: 'VAT Included',
    description: '',
    features: [],
    colors: productColors['louvre-gate'],
    image: '/images/products/gates/z-pedestrian-anthracite.png',
    keyDimensions: {
      visibleWidth: '180 cm',
      slatLength: '184 cm (slots 20mm into each post channel)',
      overallHeight: '190 cm',
    },
    whatsIncluded: [
      '1 x aluminium gate frame',
      '20 x louvre panels (slats)',
      'Fixings / caps',
    ],
  },

  {
    id: 'pedestrian-gate',
    slug: 'pedestrian-gate',
    name: 'Aluminium Horizontal Slat Pedestrian Gate',
    subHeading:
      'Low-maintenance, powder-coated aluminium horizontal slat pedestrian gate for a clean modern look.',
    price: 449.0,
    category: 'gate' as 'fence' | 'gate' | undefined,
    priceLabel: 'VAT Included',
    description: '',
    features: [],
    colors: productColors['pedestrian-gate'],
    image: '/images/products/gates/z-gate-anthracite.png',
    keyDimensions: {
      visibleWidth: '180 cm',
      slatLength: '184 cm (slots 20mm into each post channel)',
      overallHeight: '190 cm',
    },
    whatsIncluded: [
      '1 x aluminium gate frame',
      '20 x horizontal slat panels',
      'Fixings / caps',
    ],
  },

  {
    id: 'horizontal-slat-fence',
    slug: 'horizontal-slat-fence',
    name: 'Aluminium Horizontal Slat Fence',
    subHeading:
      'Low-maintenance, powder-coated aluminium horizontal slat fence for a clean modern look.',
    price: 499.0,
    category: 'fences' as any as 'fence' | 'gate' | undefined,
    priceLabel: 'VAT Included',
    description: '',
    features: [],
    colors: productColors['horizontal-slat-fence'],
    image: '/images/products/h-slat-anthracite.png',
    keyDimensions: {
      visibleWidth: '180 cm',
      slatLength: '184 cm (slots 20mm into each post channel)',
      overallHeight: '190 cm',
    },
    whatsIncluded: [
      '2 x aluminium posts (with side channels)',
      '20 x horizontal slat panels',
      'Fixings / caps',
    ],
  },

  {
    id: 'aluminium-oval-slat-fence-panel',
    slug: 'aluminium-oval-slat-fence-panel',
    name: 'Aluminium Oval Slat Fence Panel',
    subHeading:
      'Low-maintenance, powder-coated aluminium panel for privacy and a clean modern look.',
    price: 449.0,
    category: 'fences' as any as 'fence' | 'gate' | undefined,
    priceLabel: 'VAT Included',
    description: '',
    features: [],
    colors: productColors['aluminium-oval-slat-fence-panel'],
    image: '/images/products/oval-slat-fence-anthracite.png',
    keyDimensions: {
      visibleWidth: '180 cm',
      slatLength: '184 cm (slots 20mm into each post channel)',
      overallHeight: '190 cm',
    },
    whatsIncluded: [
      '2 x aluminium posts (with side channels)',
      '20 x louvre panels (slats)',
      'Fixings / caps',
    ],
  },

  {
    id: 'oval-slat-pedestrian-gate',
    slug: 'oval-slat-pedestrian-gate',
    name: 'Aluminium Oval Slat Pedestrian Gate',
    subHeading:
      'Low-maintenance, powder-coated aluminium oval slat pedestrian gate for privacy and a clean modern look.',
    price: 449.0,
    category: 'gate' as 'fence' | 'gate' | undefined,
    priceLabel: 'VAT Included',
    description: '',
    features: [],
    colors: productColors['oval-slat-pedestrian-gate'],
    image: '/images/products/gates/osp-gate-anthracite.png',
    keyDimensions: {
      visibleWidth: '180 cm',
      slatLength: '184 cm (slots 20mm into each post channel)',
      overallHeight: '190 cm',
    },
    whatsIncluded: [
      '1 x aluminium gate frame',
      '20 x oval slat panels',
      'Fixings / caps',
    ],
  },
];

// Alias for compatibility
export const productsData = products;

// Convert ProductDetail to Product for list display
export function toProductList(product: ProductDetail): Product {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: `£${product.price.toFixed(2)}`,
    priceLabel: product.priceLabel,
    features: product.features,
    image: product.image || product.colors[0]?.image || '',
    warranty: product.warranty,
    category:
      (((product.category as any) === 'fences'
        ? 'fence'
        : product.category) as 'fence' | 'gate') || 'fence',
  };
}

// Get product by slug or id
export function getProductById(
  id: string
): ProductDetail | undefined {
  return products.find(
    (product) => product.id === id || product.slug === id
  );
}

// Get all products
export function getAllProducts(): ProductDetail[] {
  return products;
}

// Get products by category
export function getProductsByCategory(
  category: string
): ProductDetail[] {
  return products.filter((product) => {
    const productCategory = product.category as any;

    return (
      productCategory === category ||
      (category === 'fence' && productCategory === 'fences')
    );
  });
}

// Anthracite Grey and Black are in stock.
// Other colours are made to order.
export function getStockStatus(
  colorName: string
): {
  inStock: boolean;
  message: string;
} {
  const normalizedColor = colorName.toLowerCase().trim();
  const inStockColors = ['anthracite grey', 'black'];
  const isInStock = inStockColors.includes(normalizedColor);

  return {
    inStock: isInStock,
    message: isInStock
      ? 'In Stock - Ready for Dispatch'
      : 'Made to Order - 3-4 Weeks Lead Time',
  };
}