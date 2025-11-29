import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import ActivityModal from './ActivityModal';

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

interface Activity {
  image: string;
  title: string;
  description: string;
}

interface ActivitiesContent {
  title: string;
  slides: Activity[][];
}

const Activities: React.FC = () => {
  const [content, setContent] = useState<ActivitiesContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/texts/content.json')
      .then(res => res.json())
      .then(data => {
        setContent(data.activities);
        setLoading(false);
      })
      .catch(() => {
        // Fallback hardcoded content
        setContent({
          title: 'Активности фестиваля',
          slides: [
            [
              {
                image: '/images/activities/activity1.png',
                title: 'Естественно-научная проектная школа',
                description: 'Интенсив «Life Science School» - проекты участников направлены на решение прикладных экотехнических и архитектурных задач и улучшение качества жизни жителей города.'
              },
              // ... остальные активности
            ]
          ]
        });
        setLoading(false);
      });
  }, []);

  const handleCardClick = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: false,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    beforeChange: (next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) {
    return <div className="text-center py-20">Загрузка...</div>;
  }

  const allActivities = content?.slides.flat() || [];
  const totalSlides = content?.slides.length || 0;

  return (
    <>
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-normal text-center text-gray-800 mb-12 relative"
        >
          {content?.title}
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </motion.h2>

        <div className="relative pb-16 first-slider-container">
          <Slider 
            ref={setSliderRef} 
            {...settings}
          >
            {allActivities.map((activity, index) => (
              <div key={activity.title} className="px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all h-[350px] flex flex-col cursor-pointer"
                  onClick={() => handleCardClick(activity)}
                >
                  <div className="h-32 flex-shrink-0 bg-gray-50 flex items-center justify-center border-b border-gray-100">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => (e.currentTarget.src = '/images/placeholder.png')}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col overflow-hidden">
                    <h3 className="text-lg font-medium text-gray-800 mb-3 line-clamp-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow overflow-hidden line-clamp-5">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Кружочки навигации снаружи слайдера */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex gap-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => sliderRef?.slickGoTo(index * 4)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      Math.floor(currentSlide / 4) === index 
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

      {/* Модальное окно */}
      <ActivityModal 
        activity={selectedActivity}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Activities;