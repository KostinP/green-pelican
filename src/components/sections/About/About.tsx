import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { InfoCard } from "@/components/common/InfoCard";
import { Calendar, MapPin, type LucideIcon } from "lucide-react";
import { ContentFetcher } from "@/components/common/ContentFetcher";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  MapPin,
};

export default function About() {
  return (
    <Section id="about">
      <Container>
        <ContentFetcher<{
          about: {
            title: string;
            description: string;
            cards: Array<{
              icon: "Calendar" | "MapPin";
              title: string;
              description: string;
            }>;
          };
        }>
          fallback={
            <>
              <SectionTitle>О фестивале</SectionTitle>
              <p className="text-center max-w-4xl mx-auto mb-16 text-gray-600 leading-relaxed">
                Фестиваль «Зеленый пеликан» позволит сформировать особую городскую среду...
              </p>
            </>
          }
        >
          {({ about }) => {
            const { title, description, cards } = about;
            return (
              <>
                <SectionTitle>{title}</SectionTitle>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center max-w-4xl mx-auto mb-16 text-gray-600 leading-relaxed"
                >
                  {description}
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {cards.map((card, i) => {
                    const Icon = iconMap[card.icon] ?? MapPin; // fallback на MapPin
                    return (
                      <InfoCard
                        key={i}
                        icon={Icon}
                        title={card.title}
                        description={card.description}
                        index={i}
                      />
                    );
                  })}
                </div>
              </>
            );
          }}
        </ContentFetcher>
      </Container>
    </Section>
  );
}