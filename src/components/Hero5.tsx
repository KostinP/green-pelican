import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-sky-100 to-green-50 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/pelican-3d.svg"
          alt="Пеликан"
          className="w-full max-w-4xl drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-6xl sm:text-8xl font-light text-[#646363]"
        >
          ЗЕЛЁНЫЙ ПЕЛИКАН 2026
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-6 text-xl text-[#646363]/80 max-w-2xl mx-auto"
        >
          Фестиваль экологии, науки и городской среды в Санкт-Петербурге
        </motion.p>
      </div>
    </section>
  );
}