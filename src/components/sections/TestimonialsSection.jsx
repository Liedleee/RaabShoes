import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ScrollAnimationWrapper } from "../animations/ScrollAnimationWrapper";
import { staggeredContainer, staggeredItem } from "../animations/animationVariants";
import { testimonials } from "../../data/testimonialsData";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      variants={staggeredItem}
    >
      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        "{testimonial.text}"
      </p>

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
  );
};

export const TestimonialsSection = () => {
  return (
    <section id="testimoni" className="px-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Animation */}
        <ScrollAnimationWrapper className="text-center mb-16" duration={0.6}>
          <h2 className="text-5xl font-bold mb-6">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Pelanggan
            </span>{" "}
            Kami
          </h2>
          <p className="text-gray-600 text-xl">
            Ribuan pelanggan puas dengan layanan kami
          </p>
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
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
