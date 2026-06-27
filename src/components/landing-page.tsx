'use client';

import ServicesOverview from './services-overview';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Hero from './hero';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Header />
      <Hero />
      <ServicesOverview />
      <Contact />
      <Footer />
    </div>
  );
}
