import { Instagram, MessageCircle } from "lucide-react";
import { ScrollAnimationWrapper } from "../animations/ScrollAnimationWrapper";

export const Footer = () => {
  return (
    <ScrollAnimationWrapper as="footer" duration={1} delay={0.2}>
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12 items-start">
          {/* Logo Client */}
          <div className="flex flex-col items-start gap-4">
            <img
              src="/img/Untitled design (3).png"
              alt="RaabShoes Logo"
              className="h-20 w-auto"
            />
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Jasa cuci sepatu profesional dan terpercaya. Aman untuk semua
              jenis sepatu dengan hasil maksimal.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-bold text-lg mb-2">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/raabshoes_?igsh=cm0wZm4yaml3b2R6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6282146716253?text=Saya%20Mau%20Cuci"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Credit & Contact */}
          <div className="flex flex-col items-end gap-4">
            <p className="text-gray-400 text-sm text-right">
              © 2024 RaabShoes. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-right">
              Website by{" "}
              <span className="text-orange-500 font-semibold">
                Liedle Nursalil
              </span>
            </p>
            <a
              href="https://wa.me/6281241068090?text=Halo%20Liedle,%20saya%20tertarik%20membuat%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-2 text-white rounded-full font-semibold hover:bg-orange-600 shadow-lg transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
};
