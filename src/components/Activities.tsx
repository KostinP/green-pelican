import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap, School, Palette, Trees, Scissors, Mountain, Recycle, Sprout, Box, Building, Cpu, Users } from 'lucide-react';
import { Button } from './ui/button';

const Activities: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      { icon: GraduationCap, title: 'Естественно-научная проектная школа', description: 'Интенсив «Life Science School» - проекты участников направлены на решение прикладных экотехнических и архитектурных задач и улучшение качества жизни жителей города.' },
      { icon: School, title: 'Лекторий и экспертный клуб', description: 'Лекции и мастер-классы от ведущих экспертов в области экологии, науки и устойчивого развития.' },
      { icon: Palette, title: 'Интерактивное пространство "Наука и искусство"', description: 'Регулярные экспозиции интерактивных художественных и экологических объектов, и малых архитектурных форм.' },
      { icon: Trees, title: 'Инвентаризация насаждений', description: 'Определение возраста деревьев и оценка состояния зеленых насаждений городской среды.' }
    ],
    [
      { icon: Scissors, title: 'Топиарное искусство', description: 'Создание художественных форм из растений и кустарников - искусство фигурной стрижки деревьев и кустов.' },
      { icon: Mountain, title: 'Ландшафтный дизайн и архитектура', description: 'Практические занятия по созданию гармоничной и экологичной городской среды.' },
      { icon: Recycle, title: 'Компостирование и проект "Отходы в доходы"', description: 'Выращивание микрозелени и пищевых культур на основе переработанных органических отходов.' },
      { icon: Sprout, title: 'Умное земледелие и городское огородничество', description: 'Кулинарные мастер-классы и практики устойчивого земледелия в городских условиях.' }
    ],
    [
      { icon: Box, title: 'Создание объектов из переработанного сырья', description: 'Recycle, Reuse, Reduce - практика создания полезных и красивых объектов из вторичных материалов.' },
      { icon: Building, title: 'Экскурсии по кампусу Герценовского университета', description: 'Знакомство с историей и архитектурой одного из старейших педагогических вузов России.' },
      { icon: Cpu, title: 'Экотехническое проектирование', description: 'Разработка энергоэффективных теплиц, работа с датчиками и микроконтроллерами, использование нейронных сетей для поиска механизма плодородия почвы.' },
      { icon: Users, title: 'Семейный и детский досуг', description: 'Трек «Всем ребятам-эколятам» - специальная программа для детей и семей с интерактивными играми и занятиями.' }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-normal text-center text-gray-800 mb-12 relative"
      >
        Активности фестиваля
        <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
      </motion.h2>

      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg"
          onClick={nextSlide}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {slides[currentSlide].map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="h-32 bg-gray-50 flex items-center justify-center border-b border-gray-100">
                    <activity.icon className="w-8 h-8 text-gray-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">{activity.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;