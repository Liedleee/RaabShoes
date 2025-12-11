import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (item) => {
    const el = document.getElementById(item.toLowerCase());
    if (el) {
      const offset = 80; // tinggi navbar sticky
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navItems = ["Layanan", "Pricelist", "Testimoni", "Kontak"];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <img
            src="/img/Untitled design (3).png"
            alt="RaabShoes Logo"
            className="h-20 md:h-22 w-auto transition-all group-hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                handleNavigation(item);
                setIsMenuOpen(false);
              }}
              className="nav-link hover:text-orange-500 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex gap-4 items-center">
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md shadow-lg px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                handleNavigation(item);
                setIsMenuOpen(false);
              }}
              className="text-gray-700 hover:text-orange-500 font-medium text-left"
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};
