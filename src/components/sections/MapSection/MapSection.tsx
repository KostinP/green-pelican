// src/components/sections/MapSection/MapSection.tsx
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/map.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 -z-10 bg-amber-100" />

      {/* Остальной код без изменений */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full max-w-none bg-[#646363]/85 py-20 md:py-32 px-8 md:px-16"
      >
        <div className="max-w-6xl mx-auto text-white">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-center">
            Фестиваль «Зелёный пеликан» позволит сформировать особую городскую среду для решения образовательных, экологических и архитектурных задач
          </p>
          <br className="hidden sm:block" />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-center">
            Мероприятие приурочено ко Дню города и направлено на развитие
            экологической культуры, популяризацию естественно-научных знаний
            и практик, создание площадки для взаимодействия учащихся,
            студентов и экспертов
          </p>
        </div>
      </motion.div>
    </section>
  );
}