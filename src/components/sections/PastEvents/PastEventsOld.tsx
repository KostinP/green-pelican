import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../ui/button';

interface PastEvent {
  image: string;
  title: string;
  description: string;
  date: string;
  participants?: string;
  topics?: string;
  detailsLink?: string;
}

interface ArrowProps {
  onClick?: () => void;
}

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
      onClick={onClick}
    >
      <ChevronLeft className="w-4 h-4 text-yellow-400" />
    </Button>
  );
};

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
      onClick={onClick}
    >
      <ChevronRight className="w-4 h-4 text-yellow-400" />
    </Button>
  );
};

const PastEvents: React.FC = () => {
  const [events, setEvents] = useState<PastEvent[]>([]);
  const [title, setTitle] = useState('Прошедшие мероприятия');
  const [loading, setLoading] = useState(true);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('/texts/content.json')
      .then(res => res.json())
      .then(data => {
        setTitle(data.pastEvents?.title || 'Прошедшие мероприятия');
        setEvents(data.pastEvents?.events || []);
        setLoading(false);
      })
      .catch(() => {
        // fallback
        setEvents([
          {
            image: '/images/events/school.png',
            title: 'Проектная школа "Среда Обитания"',
            description: 'В рамках проектной школы участники разрабатывали и реализовывали эколого-технические прототипы. Программа включала экскурсию, мастер-классы и работу с научными руководителями.',
            date: '27-31 октября 2025',
            participants: 'школьники Санкт-Петербург',
            detailsLink: 'https://vk.com/@terraherz-proektnaya-shkola-sreda-obitaniya-kak-unye-uchenye-menyaut-e'
          },
          {
            image: '/images/events/lector.png',
            title: 'Цикл лекций "Садово-парковое искусство"',
            description: 'Серия лекций и дискуссий о садово-парковом искусстве, ландшафтном дизайне и создании гармоничной городской среды, проходивших в уникальной атмосфере открытого лектория.',
            date: 'ноябрь 2025',
            topics: 'Садово-парковое искусство, ландшафтный дизайн, городская экология',
            detailsLink: ''
          }
        ]);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    beforeChange: (next: number) => setCurrentSlide(next),
  };

  if (loading || events.length === 0) {
    return <div className="text-center py-20">Загрузка...</div>;
  }

  return (
    <section id="past-events" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        className="text-3xl font-normal text-center text-gray-800 mb-12 relative"
      >
        {title}
        <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
      </motion.h2>

      <div className="relative">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden second-slider-container">
          <Slider ref={setSliderRef} {...settings}>
            {events.map((event, index) => (
              <div key={index} className="!flex flex-col md:!flex-row h-full">
                {/* Левая часть - картинка */}
                <div className="md:w-1/2 h-96 bg-cover bg-center bg-no-repeat flex-shrink-0" 
                  style={{ backgroundImage: `url('${event.image || '/images/placeholder.png'}')` }} 
                />
                
                {/* Правая часть - контент */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col h-96 overflow-y-auto">
                  <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-3 md:mb-4">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                    {event.description}
                  </p>
                  
                  <div className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <p className="text-gray-600">
                      <strong>Дата проведения:</strong> {event.date}
                    </p>
                    
                    {event.participants && (
                      <p className="text-gray-600">
                        <strong>Участники:</strong> {event.participants}
                      </p>
                    )}
                    
                    {event.topics && (
                      <p className="text-gray-600">
                        <strong>Темы:</strong> {event.topics}
                      </p>
                    )}
                  </div>
                  
                  {event.detailsLink && (
                    <div className="mt-4 md:mt-6">
                      <a 
                        href={event.detailsLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                      >
                        <Button size="sm" className="text-sm">Подробнее</Button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Кружочки навигации снаружи слайдера */}
        {events.length > 1 && (
          <div className="flex justify-center mt-6">
            <div className="flex gap-3">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => sliderRef?.slickGoTo(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-yellow-400' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PastEvents;