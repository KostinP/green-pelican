// src/components/Hero.tsx
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Фон: жёлтый + тёмно-серый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE17D] via-[#fffbef] to-white" />
      <div className="absolute inset-0 bg-[#646363]/10" />

      {/* Контент */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#646363] leading-none"
        >
          ЗЕЛЁНЫЙ
          <br />
          <span className="font-normal text-[#646363]">ПЕЛИКАН</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-[#646363]/80 max-w-3xl mx-auto font-light"
        >
          Городской образовательный фестиваль экологии, науки и ландшафтного искусства
          <br />
          <span className="text-[#646363] font-medium">Май — осень 2026 • Санкт-Петербург</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-[#646363] hover:bg-[#646363]/90 text-white px-12 text-lg rounded-full"
            onClick={scrollToContent}
          >
            Узнать больше
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#646363] text-[#646363] hover:bg-[#646363]/5 px-12 text-lg rounded-full"
          >
            Стать участником
          </Button>
        </motion.div>
      </div>

      {/* Стрелка вниз */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-10 h-10 text-[#646363]/60 animate-bounce" />
      </motion.div>
    </section>
  );
}