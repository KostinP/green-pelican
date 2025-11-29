import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const [faqData, setFaqData] = useState<{ title: string; items: { question: string; answer: string }[] }>({
    title: "Часто задаваемые вопросы",
    items: []
  });

  useEffect(() => {
    fetch('/texts/content.json')
      .then(res => res.json())
      .then(data => {
        if (data.faq) {
          setFaqData(data.faq);
        }
      })
      .catch(() => {
        // Используем fallback данные
        setFaqData({
          title: "Часто задаваемые вопросы",
          items: [
            { question: "Вопрос 1?", answer: "Ответ на вопрос 1" },
            { question: "Вопрос 2?", answer: "Ответ на вопрос 2" }
          ]
        });
      });
  }, []);

  return (
    <Section id="faq" className="bg-white">
      <Container className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionTitle>{faqData.title}</SectionTitle>
        </motion.div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqData.items.map((item, i) => (
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
      </Container>
    </Section>
  );
}