import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'Нужно ли покупать билеты на фестиваль?',
      answer: 'Вход на фестиваль бесплатный для всех посетителей. Однако для участия в некоторых мастер-классах и воркшопах может потребоваться предварительная регистрация из-за ограниченного количества мест.'
    },
    {
      question: 'Можно ли прийти с детьми?',
      answer: 'Да, фестиваль является семейным мероприятием. Для детей организована специальная программа "Всем ребятам-эколятам" с играми, творческими занятиями и образовательными программами, адаптированными для разных возрастных групп.'
    },
    {
      question: 'Как принять участие в проектной школе?',
      answer: 'Для участия в естественно-научной проектной школе "Life Science School" необходимо заполнить заявку на сайте технопарка РГПУ. Заявки принимаются до 1 марта 2026 года.'
    },
    {
      question: 'Как добраться до места проведения?',
      answer: 'До РГПУ им. А.И. Герцена и Воронихинского сквера можно добраться на общественном транспорте: станция метро "Невский проспект", "Адмиралтейская" далее 10 минут пешком.'
    }
  ];

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-normal text-center text-gray-800 mb-12 relative"
      >
        Часто задаваемые вопросы
        <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
      </motion.h2>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-800 text-lg">{item.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
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