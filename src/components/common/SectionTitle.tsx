import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-normal text-center text-gray-800 mb-12 relative"
    >
      {children}
      <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
    </motion.h2>
  );
}