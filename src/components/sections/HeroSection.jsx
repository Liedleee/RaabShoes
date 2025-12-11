import { motion } from "framer-motion";
import { Sparkles, Phone, Award } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-white"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content (Animated on initial load) */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" />
              Trusted by 50+ Customers
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Jasa Cuci Sepatu
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Profesional
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Bersih, wangi, seperti baru lagi! Kami menyediakan layanan cuci
              sepatu dengan teknik khusus dan bahan premium yang aman untuk
              semua jenis sepatu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/raabshoes_?igsh=cm0wZm4yaml3b2R6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 inline-flex"
              >
                <Sparkles className="w-5 h-5" />
                Instagram Kami
              </a>

              <a
                href="https://wa.me/6282146716253?text=Saya%20Mau%20Cuci"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-500 transition-all flex items-center gap-2 inline-flex"
              >
                <Phone className="w-5 h-5" />
                Pesan Sekarang
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image (Animated on initial load) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 p-12 rounded-3xl shadow-2xl">
              <div className="w-full h-80 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src="/img/pngegg.png"
                  alt="Sepatu"
                  className="w-64 h-auto object-contain animate-float"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
