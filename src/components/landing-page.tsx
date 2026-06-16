'use client';

import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Hero from './hero';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}
