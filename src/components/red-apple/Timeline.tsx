// src/components/sections/Timeline/Timeline.tsx
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const stages = [
  { num: "1", from: "12 мая", to: "30 мая", label: "Attention" },
  { num: "2", from: "31 мая", to: "27 июня", label: "Interest" },
  // …
];

export default function Timeline() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <h2 className="text-center text-4xl mb-12">Этапы фестиваля</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stages.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-6xl font-bold text-yellow-400 mb-2">{s.num}</div>
              <div className="text-sm">{s.from}<br/>— {s.to}</div>
              <div className="mt-4 text-lg font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}