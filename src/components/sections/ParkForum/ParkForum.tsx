// src/components/sections/ParkForum/ParkForumAlt.tsx
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function ParkForumAlt() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Заголовок */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-8 leading-tight"
          >
            Финал фестиваля в рамках всероссийского паркового форума 2026
          </motion.h2>

          {/* Изображение */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/images/2026.svg"
              alt="2026 - Всероссийский парковый форум"
              className="mx-auto w-480 h-auto"
              onError={(e) => {
                console.error('Failed to load 2026.svg');
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

          {/* Текст */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Осенью 2026 года эстафета проведения Всероссийского паркового 
            форума переходит из Москвы в Санкт-Петербург
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}