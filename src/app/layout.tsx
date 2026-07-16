import type { Metadata } from 'next';
import Script from 'next/script';
import { Manrope, Playfair_Display, Inter } from 'next/font/google';

import './globals.css';
import { CartProvider } from '@/context/CartContext';

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

const siteTitle =
  'Via Fortis | Carpentry, Aluminium Fencing & Bespoke Joinery';

const siteDescription =
  'Premium Carpentry & Aluminium Solutions across Essex. We specialise in bespoke carpentry, internal doors, fitted wardrobes, aluminium fencing, pedestrian gates and professional installations. Contact Via Fortis today for a free quotation.';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.viafortis.co.uk'
  ),

  title: {
    default: siteTitle,
    template: '%s | Via Fortis',
  },

  description: siteDescription,

  keywords: [
    'carpentry Essex',
    'bespoke carpentry',
    'bespoke joinery Essex',
    'bespoke furniture',
    'fitted wardrobes',
    'internal door installation',
    'understairs storage',
    'skirting and architraves',
    'aluminium fencing Essex',
    'aluminium gates',
    'pedestrian gates',
    'professional installation',
    'Via Fortis',
  ],

  authors: [{ name: 'Via Fortis' }],
  creator: 'Via Fortis',
  publisher: 'Via Fortis',

  alternates: {
    canonical: '/',
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Via Fortis',
    title: siteTitle,
    description: siteDescription,
  },

  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
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
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${playfairDisplay.variable} ${inter.variable}`}
    >
      <body className="antialiased font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1RSGV5FB7G"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-1RSGV5FB7G');
          `}
        </Script>

        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}