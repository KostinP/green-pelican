// Новый файл: src/components/sections/Stages/Stages.tsx
// Вариант 1: Горизонтальный timeline с карточками (вдохновлено red-apple/Timeline.tsx)
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { motion } from "framer-motion";

const stages = [
  { number: "1", title: "Подготовительный этап", description: "Формирование программы, привлечение партнеров и участников, разработка концепции мероприятий." },
  { number: "2", title: "Проектная школа", description: "Проведение интенсивной проектной школы для школьников и студентов с разработкой эко-проектов." },
  { number: "3", title: "Основные мероприятия", description: "Проведение лекций, мастер-классов, экскурсий и интерактивных выставок в течение фестиваля." },
  { number: "4", title: "Заключительный этап", description: "Подведение итогов, награждение победителей, презентация результатов проектов." },
  { number: "5", title: "Экспертная оценка", description: "Оценка проектов участников жюри из ведущих экспертов в области экологии и устойчивого развития." },
  { number: "6", title: "Публикация результатов", description: "Размещение лучших проектов на платформе фестиваля и в специализированных изданиях." },
];

export default function Stages() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle>Этапы фестиваля (Вариант 1)</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stage.number}</div>
              <div className="text-lg font-medium text-gray-800 mb-2">{stage.title}</div>
              <div className="text-sm text-gray-600">{stage.description}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}