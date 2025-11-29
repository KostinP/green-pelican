import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface Card {
  title: string;
  description: string;
  icon: 'Calendar' | 'MapPin';
}

interface AboutContent {
  title: string;
  description: string;
  cards: Card[];
}

const About: React.FC = () => {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/texts/content.json')
      .then(res => res.json())
      .then(data => {
        setContent(data.about);
        setLoading(false);
      })
      .catch(() => {
        setContent({
          title: 'О фестивале',
          description: 'Фестиваль «Зеленый пеликан» позволит сформировать особую городскую среду для решения образовательных, экологических и архитектурных задач. Мероприятие приурочено ко Дню города и направлено на развитие экологической культуры, популяризацию естественно-научных знаний и практик, создание площадки для взаимодействия учащихся, студентов и экспертов.',
          cards: [
            { title: 'Даты проведения', description: 'Весна 2026 года. Фестиваль пройдет в рамках празднования Дня города.', icon: 'Calendar' },
            { title: 'Локация', description: 'РГПУ им. А.И. Герцена и Воронихинский сквер. Историческое место в центре города с уникальной атмосферой.', icon: 'MapPin' }
          ]
        });
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Загрузка...</div>;

  const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Calendar,
    MapPin
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-normal text-center text-gray-800 mb-12 relative"
      >
        {content?.title}
        <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-4xl mx-auto mb-16 text-gray-600 leading-relaxed"
      >
        {content?.description}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {content?.cards.map((card, index) => {
          const Icon = icons[card.icon];
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100">
                <Icon className="w-12 h-12 text-gray-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default About;