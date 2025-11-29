// src/components/Hero3.tsx
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/pelican-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-gray/70 via-gray/20 to-transparent" />

      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl sm:text-8xl md:text-9xl font-light leading-none"
        >
          ЗЕЛЁНЫЙ ПЕЛИКАН
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-xl sm:text-2xl font-light"
        >
          Экология • Наука • Городская среда
          <br />
          Май — осень 2026 • Санкт-Петербург
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-12 rounded-full">
            Присоединиться к фестивалю
          </Button>
        </motion.div>
      </div>
    </section>
  );
}