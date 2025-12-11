import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle,
  Award,
  Users,
  Truck,
  Star,
} from "lucide-react";
import { ScrollAnimationWrapper } from "../animations/ScrollAnimationWrapper";

export const CTASection = () => {
  return (
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
          <ScrollAnimationWrapper
            duration={0.8}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
                  Jangan biarkan sepatu favorit Anda kusam dan kotor. Percayakan
                  pada ahlinya untuk hasil yang memuaskan.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Pickup Gratis",
                  "Hasil Terjamin",
                  "Bahan Premium",
                  "Proses Cepat",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Right Content - Stats & Offer Animation */}
          <ScrollAnimationWrapper
            duration={0.8}
            delay={0.2}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="space-y-8">
              {/* Special Offer Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4" />
                    PROMO SPESIAL
                  </div>

                  <div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      Diskon 20%
                    </div>
                    <div className="text-gray-600">Untuk pelanggan baru</div>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Harga Normal:</span>
                      <span className="text-gray-500 line-through">
                        Rp 25.000
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">
                        Harga Promo:
                      </span>
                      <span className="text-2xl font-bold text-orange-600">
                        Rp 20.000
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    *Berlaku hingga akhir bulan ini
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "50+", label: "Sepatu Bersih" },
                  { value: "5.0", label: "Rating" },
                  { value: "24h", label: "Proses" },
                ].map((stat) => (
                  <div
                    key={stat.value}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                  >
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
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
  );
};
