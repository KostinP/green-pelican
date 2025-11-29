import { motion } from 'framer-motion';
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContentFetcher } from "@/components/common/ContentFetcher";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Section id="faq" className="bg-white">
      <Container className="max-w-4xl">
        <ContentFetcher<{ faq: { title: string; items: { question: string; answer: string }[] } }>
          fallback={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <SectionTitle>Часто задаваемые вопросы</SectionTitle>
            </motion.div>
          }
        >
          {({ faq }) => (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <SectionTitle>{faq.title}</SectionTitle>
              </motion.div>
              
              <Accordion type="single" collapsible className="w-full">
                {faq.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <AccordionItem value={`item-${i}`} className="mb-4">
                      <AccordionTrigger className="text-lg font-medium text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}