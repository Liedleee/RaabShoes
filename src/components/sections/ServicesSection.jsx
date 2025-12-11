import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ScrollAnimationWrapper } from "../animations/ScrollAnimationWrapper";
import { staggeredContainer, staggeredItem } from "../animations/animationVariants";
import { services } from "../../data/servicesData";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    amber: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
    orange:
      "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
  };

  return (
    <motion.div
      className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
      variants={staggeredItem}
    >
      <div
        className={`w-20 h-20 bg-gradient-to-br ${colorClasses[service.color]} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
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
};

export const ServicesSection = () => {
  return (
    <section id="layanan" className="px-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Animation */}
        <ScrollAnimationWrapper className="text-center mb-20" duration={0.6}>
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <motion.div>Layanan Premium</motion.div>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Layanan{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Unggulan
            </span>{" "}
            Kami
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Berikan perawatan terbaik untuk sepatu kesayangan Anda dengan
            layanan profesional berkualitas tinggi
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
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
