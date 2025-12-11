// Variants for staggered children animation (used for service cards and testimonials)
export const staggeredContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each child's animation
    },
  },
};

export const staggeredItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
