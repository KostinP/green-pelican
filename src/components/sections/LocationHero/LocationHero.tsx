// src/components/sections/LocationHero/LocationHero.tsx

import { MapPin, Camera } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationHero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* 1. Жёлтый прямоугольник (фон) */}
      <div className="absolute z-10 top-0 left-0 w-full h-[300px] md:h-[400px] bg-[#FFE17D]" />

      {/* 2. Серая трапеция с точным наклоном как на макете */}
      <div
        className="absolute z-10 top-0 left-0 w-full h-[400px] md:h-[540px] bg-[#646363]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)",
          // ↑ точный угол как на скриншоте
        }}
      />

      {/* Главный заголовок — белый, поверх серой трапеции */}
      <div className="absolute top-20 md:top-32 left-0 right-0 z-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight max-w-7xl mx-auto"
        >
          Расположение Воронихинского сквера
          <br />
          и кампуса Герценовского университета
          <br />
          формирует пространство в «сердце» Петербурга
        </motion.h2>
      </div>

      {/* Силуэт здания — строго под нижней панелью */}
      <div className="absolute bottom-100 md:bottom-40 left-0 right-0 flex justify-center pointer-events-none">
        <img
          src="/images/main-building.svg"
          alt="Главное здание РГПУ им. Герцена"
          className="w-full max-w-7xl h-auto"
        />
      </div>

      {/* Нижняя тёмная панель */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#646363] py-12 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto text-white">
            {/* Место */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-6"
            >
              <div className="flex flex-col items-center">
                <MapPin className="w-9 h-9 mb-3" strokeWidth={2} />
                <div className="w-px h-12 bg-white" />
              </div>
              <div className="pt-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  место проведения
                </p>
                <p className="text-2xl md:text-3xl font-light">
                  РГПУ им. А. И. Герцена
                </p>
              </div>
            </motion.div>

            {/* Время */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-start gap-6"
            >
              <div className="flex flex-col items-center">
                <Camera className="w-9 h-9 mb-3" strokeWidth={2} />
                <div className="w-px h-12 bg-white" />
              </div>
              <div className="pt-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  время проведения
                </p>
                <p className="text-2xl md:text-3xl font-light">текст весна 2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}