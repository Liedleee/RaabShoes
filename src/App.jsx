import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { 
  Menu, X, Truck, Sparkles, Phone, Award, Star, CheckCircle, Users, MapPin, Mail, Instagram, Music, MessageCircle, ArrowRight 
} from "lucide-react";

// --- ANIMATION COMPONENTS ---

// 1. Reusable component for animating elements on scroll
const ScrollAnimationWrapper = ({ children, delay = 0, duration = 0.5, variants, ...rest }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }} // once: true means it only animates on first view
    transition={{ duration: duration, delay: delay }}
    variants={variants || {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    {...rest}
  >
    {children}
  </motion.div>
);

// 2. Variants for staggered children animation (used for service cards and testimonials)
const staggeredContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each child's animation
    },
  },
};

const staggeredItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dummy Data
  const services = [
    {
      title: "Deep Clean",
      description: "Pembersihan menyeluruh untuk semua jenis sepatu, termasuk kotoran yang menempel di bagian terdalam dan sol sepatu.",
      icon: Sparkles,
      color: "blue", // warna biru menandakan kebersihan dan kesegaran
      features: ["Membersihkan hingga ke sela-sela sepatu", "Menghilangkan noda membandel", "Aman untuk semua bahan sepatu"],
      price: "20.000"
    },
    {
      title: "Fast Clean",
      description: "Cuci cepat untuk sepatu sehari-hari agar selalu terlihat bersih dan rapi dalam waktu singkat.",
      icon: Truck, // icon delivery/cepat cocok untuk fast service
      color: "orange", // warna oranye memberi kesan cepat dan energik
      features: ["Proses cepat hanya 1-2 jam", "Hasil bersih maksimal", "Cocok untuk sepatu sehari-hari"],
      price: "15.000"
    },
    {
      title: "Woman Shoes",
      description: "Cat ulang sepatu agar terlihat baru.",
      icon: Award,
      color: "amber",
      features: ["Warna cerah", "Tahan lama"],
      price: "15.000"
    },
  ];

  const pricingData = [
    { pairs: "1 Pasang", price: "50.000", savings: null, bestDeal: false },
    { pairs: "3 Pasang", price: "140.000", savings: "10.000", bestDeal: true },
    { pairs: "5 Pasang", price: "220.000", savings: "30.000", bestDeal: false },
  ];

  const testimonials = [
    { name: "drivelikeidoo", initial: "D", location: "Malang", rating: 5, text: "smoga amanah dg sukses trus bos" },
    { name: "siamakamene", initial: "s", location: "Malang", rating: 5, text: "Sepatu saya terlihat seperti baru lagi." },
    { name: "ikalikaluratab", initial: "i", location: "Malang", rating: 5, text: "Sangat puas dengan layanan RaabShoes!" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Top Bar (No scroll animation needed, as it's at the top) */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white text-center py-2 sm:py-3 relative overflow-hidden">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium px-4 sm:px-0">
          <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="truncate">
            Free Pickup & Delivery max 7 km • Promo Spesial Minggu Ini!
          </span>
        </div>
      </div>


      {/* Navbar (Sticky, no scroll animation needed for the component itself, but opacity transition is scroll-based) */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
          <a href="#" className="flex items-center space-x-2 group">
            <img
              src="/img/logo.png"
              alt="RaabShoes Logo"
              className="h-10 md:h-12 w-auto transition-all group-hover:scale-105"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {["Layanan", "Pricelist", "Testimoni", "Kontak"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  if (el) {
                    const offset = 80; // tinggi navbar sticky
                    const top = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
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
            {["Layanan", "Pricelist", "Testimoni", "Kontak"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  if (el) {
                    const offset = 80;
                    const top = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                  setIsMenuOpen(false); // close mobile menu
                }}
                className="text-gray-700 hover:text-orange-500 font-medium text-left"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </header>


      {/* Hero Section */}
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
                Bersih, wangi, seperti baru lagi! Kami menyediakan layanan cuci sepatu dengan teknik khusus dan bahan premium yang aman untuk semua jenis sepatu.
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
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 100 }}
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

      {/* Services Section */}
      <section id="layanan" className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Animation */}
          <ScrollAnimationWrapper className="text-center mb-20" duration={0.6}>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Layanan Premium
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Layanan <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Unggulan</span> Kami
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Berikan perawatan terbaik untuk sepatu kesayangan Anda dengan layanan profesional berkualitas tinggi
            </p>
          </ScrollAnimationWrapper>

          {/* Services Grid Animation */}
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
                amber: 'from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700',
                orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
              };
              
              return (
                <motion.div 
                  key={index} 
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  variants={staggeredItem} // Apply staggered animation to each card
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${colorClasses[service.color]} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricelist" className="px-8 py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Animation */}
          <ScrollAnimationWrapper className="text-center mb-16" duration={0.6}>
            <h2 className="text-4xl font-bold mb-4">Harga <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Terjangkau</span></h2>
            <p className="text-gray-600 text-lg">Pilih layanan terbaik untuk sepatu kesayangan Anda</p>
          </ScrollAnimationWrapper>

          {/* Pricing Grid Animation */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Table 1: Shoes (Deep Clean) */}
            <motion.div 
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6"
              variants={staggeredItem}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Shoes (Deep Clean)</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-orange-500 text-white rounded">
                    <th className="p-3">Jumlah</th>
                    <th className="p-3">Harga</th>
                    <th className="p-3">Diskon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">1 Pasang</td>
                    <td className="p-3">Rp 30.000</td>
                    <td className="p-3 font-bold text-green-600">Rp 20.000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">2 Pasang</td>
                    <td className="p-3">Rp 60.000</td>
                    <td className="p-3 font-bold text-green-600">Rp 35.000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">3 Pasang</td>
                    <td className="p-3">Rp 90.000</td>
                    <td className="p-3 font-bold text-green-600">Rp 50.000</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </motion.div>

            {/* Table 2: Fast Clean */}
            <motion.div 
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6"
              variants={staggeredItem}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Fast Clean</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-orange-500 text-white">
                    <th className="p-3">Jumlah</th>
                    <th className="p-3">Harga</th>
                    <th className="p-3">Diskon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">1 Pasang</td>
                    <td className="p-3">Rp 25.000</td>
                    <td className="p-3 font-bold text-green-600">Rp 15.000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">2 Pasang</td>
                    <td className="p-3">Rp 50.000</td>
                    <td className="p-3 font-bold text-green-600">Rp 25.000</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </motion.div>

            {/* Table 3: Woman Shoes */}
            <motion.div 
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6"
              variants={staggeredItem}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Woman Shoes</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-left">
                <thead>
                  <tr className="bg-orange-500 text-white">
                    <th className="p-3">Jenis</th>
                    <th className="p-3">Harga</th>
                    <th className="p-3">Diskon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">Flat Shoes</td>
                    <td className="p-3">Rp 25.000</td>
                    <td className="p-3 font-bold text-green-600">Rp 15.000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">Wedges</td>
                    <td className="p-3">Rp 25.000</td>
                    <td className="p-3 font-bold text-green-600">Rp 15.000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3">High Heels</td>
                    <td className="p-3">Rp 25.000</td>
                    <td className="p-3 font-bold text-green-600">Rp 15.000</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Animation */}
          <ScrollAnimationWrapper className="text-center mb-16" duration={0.6}>
            <h2 className="text-5xl font-bold mb-6">
              Apa Kata <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Pelanggan</span> Kami
            </h2>
            <p className="text-gray-600 text-xl">Ribuan pelanggan puas dengan layanan kami</p>
          </ScrollAnimationWrapper>
          
          {/* Testimonials Grid Animation */}
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={staggeredItem} // Apply staggered animation to each card
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Animation */}
            <ScrollAnimationWrapper duration={0.8} variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
              <div className="text-white space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    Promo Terbatas
                  </div>
                  
                  <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Waktunya
                    <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                      Sepatu Bersih
                    </span>
                    Seperti Baru!
                  </h2>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Jangan biarkan sepatu favorit Anda kusam dan kotor. Percayakan pada ahlinya untuk hasil yang memuaskan.
                  </p>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300">Pickup Gratis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300">Hasil Terjamin</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300">Bahan Premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300">Proses Cepat</span>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
            
            {/* Right Content - Stats & Offer Animation */}
            <ScrollAnimationWrapper duration={0.8} delay={0.2} variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
              <div className="space-y-8">
                {/* Special Offer Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold">
                      <Star className="w-4 h-4" />
                      PROMO SPESIAL
                    </div>
                    
                    <div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">Diskon 20%</div>
                      <div className="text-gray-600">Untuk pelanggan baru</div>
                    </div>
                    
                    <div className="bg-orange-50 rounded-2xl p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Harga Normal:</span>
                        <span className="text-gray-500 line-through">Rp 25.000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-semibold">Harga Promo:</span>
                        <span className="text-2xl font-bold text-orange-600">Rp 20.000</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      *Berlaku hingga akhir bulan ini
                    </div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-gray-300 text-sm">Sepatu Bersih</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">5.0</div>
                    <div className="text-gray-300 text-sm">Rating</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">24h</div>
                    <div className="text-gray-300 text-sm">Proses</div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Bottom Trust Indicators (Slower fade-in) */}
            <ScrollAnimationWrapper 
              className="md:col-span-2 mt-20 pt-12 border-t border-white/10"
              duration={1}
              delay={0.5}
            >
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span>Berpengalaman</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-400" />
                  <span>50+ Pelanggan Puas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-orange-400" />
                  <span>Layanan Pickup & Delivery</span>
                </div>
              </div>
            </ScrollAnimationWrapper>

          </div>
        </div>
      </section>

      {/* Footer (Slower fade-in) */}
      <ScrollAnimationWrapper as="footer" duration={1} delay={0.2}>
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12 items-start">
            {/* Logo Client */}
            <div className="flex flex-col items-start gap-4">
              <img src="/img/logo.png" alt="RaabShoes Logo" className="h-12 w-auto" />
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Jasa cuci sepatu profesional dan terpercaya. Aman untuk semua jenis sepatu dengan hasil maksimal.
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
                Website by <span className="text-orange-500 font-semibold">Liedle Nursalil</span>
              </p>
              <a
                href="https://wa.me/6281241068090?text=Halo%20Liedle,%20saya%20tertarik%20membuat%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-2text-white rounded-full font-semibold hover:bg-orange-600 shadow-lg transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}