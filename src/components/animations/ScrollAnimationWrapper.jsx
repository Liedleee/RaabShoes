import { motion } from "framer-motion";

export const ScrollAnimationWrapper = ({
  children,
  delay = 0,
  duration = 0.5,
  variants,
  as: Component = "div",
  ...rest
}) => (
  <motion.div
    as={Component}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: duration, delay: delay }}
    variants={
      variants || {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }
    }
    {...rest}
  >
    {children}
  </motion.div>
);
