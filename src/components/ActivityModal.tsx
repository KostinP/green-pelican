import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface Activity {
  image: string;
  title: string;
  description: string;
}

interface ActivityModalProps {
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ 
  activity, 
  isOpen, 
  onClose 
}) => {
  if (!isOpen || !activity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden border border-gray-200"
        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике на контент
      >
        {/* Заголовок модального окна */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <h3 className="text-2xl font-semibold text-gray-800">
            {activity.title}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Контент модального окна */}
        <div className="p-8 overflow-y-auto max-h-[calc(95vh-120px)]">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Большое изображение */}
            <div className="lg:w-2/5 flex-shrink-0">
              <div className="w-full h-80 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 p-4">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => (e.currentTarget.src = '/images/placeholder.png')}
                />
              </div>
            </div>
            
            {/* Текст описания */}
            <div className="lg:w-3/5">
              <p className="text-gray-700 leading-relaxed text-lg">
                {activity.description}
              </p>
            </div>
          </div>
        </div>

        {/* Футер модального окна */}
        <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
          <Button 
            onClick={onClose} 
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-2 text-lg rounded-lg transition-colors"
          >
            Закрыть
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ActivityModal;