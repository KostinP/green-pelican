import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const PastEvents: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      image: '/images/school.png',
      title: 'Проектная школа "Среда Обитания"',
      description: 'В рамках проектной школы участники разрабатывали и реализовывали эколого-технические прототипы. Программа включала экскурсию, мастер-классы и работу с научными руководителями.',
      date: '27-31 октября 2025',
      participants: 'школьники Санкт-Петербург'
    },
    {
      image: '/images/lector.png',
      title: 'Цикл лекций "Садово-парковое искусство"',
      description: 'Серия лекций и дискуссий о садово-парковом искусстве, ландшафтном дизайне и создании гармоничной городской среды, проходивших в уникальной атмосфере открытого лектория.',
      date: 'ноябрь 2025',
      topics: 'Садово-парковое искусство, ландшафтный дизайн, городская экология'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="past-events" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-normal text-center text-gray-800 mb-12 relative"
      >
        Прошедшие мероприятия
        <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
      </motion.h2>

      <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
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
              className="flex flex-col md:flex-row"
            >
              <div 
                className="md:w-1/2 h-80 md:h-96 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${events[currentSlide].image}')` }}
              />
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{events[currentSlide].title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{events[currentSlide].description}</p>
                <p className="text-gray-600 mb-2"><strong>Дата проведения:</strong> {events[currentSlide].date}</p>
                {events[currentSlide].participants && (
                  <p className="text-gray-600"><strong>Участники:</strong> {events[currentSlide].participants}</p>
                )}
                {events[currentSlide].topics && (
                  <p className="text-gray-600"><strong>Темы:</strong> {events[currentSlide].topics}</p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 pb-6">
          {events.map((_, index) => (
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

export default PastEvents;