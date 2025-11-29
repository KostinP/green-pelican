// src/components/sections/Stats/Stats.tsx
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const stats = [
  { value: "40+", label: "стран" },
  { value: "90+", label: "членов жюри" },
  { value: "1100+", label: "работ" },
  { value: "375+", label: "Каннских львов у жюри" },
];

export default function Stats() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-yellow-400">{s.value}</div>
              <div className="text-gray-600 mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}