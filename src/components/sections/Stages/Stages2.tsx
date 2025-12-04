// Новый файл: src/components/sections/Stages/Stages2.tsx
// Вариант 2: Вертикальный список с номерами и описаниями (простой и линейный)
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

export default function Stages2() {
  return (
    <Section className="bg-gray-50">
      <Container className="max-w-4xl">
        <SectionTitle>Этапы фестиваля (Вариант 2)</SectionTitle>
        <div className="space-y-8">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm border"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400 text-white font-bold text-2xl flex items-center justify-center">
                {stage.number}
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">{stage.title}</h3>
                <p className="text-gray-600">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}