import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContentFetcher } from "@/components/common/ContentFetcher";
import { motion } from "framer-motion";

export default function VotingTimeline() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <ContentFetcher<{ voting: { title: string; periods: { number: string; date1: string; date2: string; label: string }[] } }>
          fallback={<SectionTitle>Периоды голосования</SectionTitle>}
        >
          {({ voting }) => (
            <>
              <SectionTitle>{voting.title}</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {voting.periods.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg border"
                  >
                    <div className="text-4xl font-bold text-yellow-400 mb-2">{p.number}</div>
                    <div className="text-sm text-gray-600">{p.date1}<br/>{p.date2}</div>
                    <div className="mt-4 text-lg font-medium text-gray-800">{p.label}</div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}