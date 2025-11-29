// src/components/Hero3.tsx
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row">
      {/* Левая жёлтая часть */}
      <div className="w-full md:w-1/2 bg-[#FFE17D] flex items-center justify-center p-12">
        <div className="max-w-lg">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl sm:text-7xl md:text-8xl font-light text-[#646363] leading-none"
          >
            ЗЕЛЁНЫЙ
            <br />
            ПЕЛИКАН
            <br />
            <span className="text-4xl sm:text-5xl font-normal">2026</span>
          </motion.h1>
        </div>
      </div>

      {/* Правая часть с фото */}
      <div
        className="w-full md:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/hero-split.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 p-12 text-white max-w-xl">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl font-light leading-tight"
          >
            Формируем экологическую культуру Петербурга вместе
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <Button className="mt-8 bg-white text-[#646363] hover:bg-gray-100 rounded-full px-10">
              Стать участником
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}