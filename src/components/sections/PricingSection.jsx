import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "../animations/ScrollAnimationWrapper";
import {
  staggeredContainer,
  staggeredItem,
} from "../animations/animationVariants";
import { pricingTables } from "../../data/pricingData";

const PricingTable = ({ table }) => {
  const hasDuration = table.rows.some((row) => row.duration);

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6"
      variants={staggeredItem}
    >
      <h3 className="text-2xl font-bold mb-4 text-center">
        {table.title}
      </h3>

      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-3">Layanan</th>
              {hasDuration && <th className="p-3">Estimasi</th>}
              <th className="p-3 text-right">Harga</th>
            </tr>
          </thead>

          <tbody>
            {table.rows.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 last:border-none"
              >
                <td className="p-3 font-medium">
                  {row.service}
                </td>

                {hasDuration && (
                  <td className="p-3 text-gray-600">
                    {row.duration || "-"}
                  </td>
                )}

                <td className="p-3 text-right font-bold text-orange-600">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export const PricingSection = () => {
  return (
    <section
      id="pricelist"
      className="px-8 py-20 bg-gradient-to-br from-gray-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimationWrapper
          className="text-center mb-16"
          duration={0.6}
        >
          <h2 className="text-4xl font-bold mb-4">
            Harga{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Terjangkau
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Pilih layanan terbaik untuk sepatu kesayangan Anda
          </p>
        </ScrollAnimationWrapper>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggeredContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {pricingTables.map((table, index) => (
            <PricingTable key={index} table={table} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
