// src/components/sections/ParkForum/ParkForum.tsx
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function ParkForum() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - заголовок и текст */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight">
              Финал фестиваля в рамках всероссийского паркового форума 2026
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Осенью 2026 года эстафета проведения Всероссийского паркового 
              форума переходит из Москвы в Санкт-Петербург
            </motion.p>
          </motion.div>

          {/* Правая часть - изображение */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <img
                src="/images/2026.svg"
                alt="2026 - Всероссийский парковый форум"
                className="w-full h-auto"
                onError={(e) => {
                  console.error('Failed to load 2026.svg');
                  // Можно добавить fallback изображение
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}