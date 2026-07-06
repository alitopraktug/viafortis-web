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

export const metadata: Metadata = {
  title: {
    default: 'Via Fortis | Carpentry, Aluminium Fencing & Bespoke Joinery',
    template: '%s | Via Fortis',
  },
  description:
    'Professional carpentry, bespoke furniture, fitted wardrobes, understairs storage, skirting & architraves, internal door installation, aluminium fencing and aluminium pedestrian gates. Supply & installation services for residential and commercial projects across the UK.',
  keywords: [
    'carpentry UK',
    'bespoke joinery',
    'bespoke furniture',
    'fitted wardrobes',
    'understairs storage',
    'internal door installation',
    'skirting and architraves',
    'aluminium fencing',
    'aluminium gates',
    'pedestrian gates',
    'Via Fortis',
  ],
  authors: [{ name: 'Via Fortis' }],
  creator: 'Via Fortis',
  publisher: 'Via Fortis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.viafortis.co.uk'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Via Fortis',
    title: 'Via Fortis | Carpentry, Aluminium Fencing & Bespoke Joinery',
    description:
      'Professional carpentry, bespoke furniture, fitted wardrobes, understairs storage, skirting & architraves, internal door installation, aluminium fencing and aluminium pedestrian gates. Supply & installation services for residential and commercial projects across the UK.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Via Fortis | Carpentry, Aluminium Fencing & Bespoke Joinery',
    description:
      'Professional carpentry, bespoke furniture, fitted wardrobes, understairs storage, skirting & architraves, internal door installation, aluminium fencing and aluminium pedestrian gates.',
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
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1RSGV5FB7G');
          `}
        </Script>

        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}