import type {Metadata} from 'next';
import {Manrope, Playfair_Display, Inter} from 'next/font/google';

import './globals.css';
import {CartProvider} from '@/context/CartContext';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Via Fortis | Architectural Fencing & Gates',
    template: '%s | Via Fortis'
  },
  description: 'Premium aluminium fencing systems designed for modern living spaces. Timeless elegance, forged in steel. UK-based supplier of architectural fencing and gates.',
  keywords: ['aluminium fencing', 'architectural gates', 'privacy fencing', 'UK fencing', 'modern fencing', 'aluminium gates'],
  authors: [{ name: 'Via Fortis' }],
  creator: 'Via Fortis',
  publisher: 'Via Fortis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://viafortis.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Via Fortis',
    title: 'Via Fortis | Architectural Fencing & Gates',
    description: 'Premium aluminium fencing systems designed for modern living spaces. Timeless elegance, forged in steel.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Via Fortis | Architectural Fencing & Gates',
    description: 'Premium aluminium fencing systems designed for modern living spaces.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${playfairDisplay.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
