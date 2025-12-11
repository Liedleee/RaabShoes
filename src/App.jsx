import { useState, useEffect } from "react";
import { TopBar } from "./components/layout/TopBar";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { PricingSection } from "./components/sections/PricingSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CTASection } from "./components/sections/CTASection";
import { Footer } from "./components/layout/Footer";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar scrollY={scrollY} />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection id="testimoni" />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}