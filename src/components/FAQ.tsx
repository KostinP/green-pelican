import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [title, setTitle] = useState('Часто задаваемые вопросы');
  const [items, setItems] = useState<FAQItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('/texts/content.json')
      .then(res => res.json())
      .then(data => {
        setTitle(data.faq?.title || 'Часто задаваемые вопросы');
        setItems(data.faq?.items || []);
      })
      .catch(() => {
        setItems([
          { question: 'Нужно ли покупать билеты на фестиваль?', answer: 'Вход на фестиваль бесплатный...' },
          // ... остальные вопросы
        ]);
      });
  }, []);

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-normal text-center text-gray-800 mb-12 relative">
        {title}
        <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
      </motion.h2>

      <div className="space-y-4">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <button onClick={() => toggle(i)} className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
              <span className="font-medium text-gray-800 text-lg pr-4">{item.question}</span>
              <motion.div animate={{ rotate: activeIndex === i ? 180 : 0 }}>
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;