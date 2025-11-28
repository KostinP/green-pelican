import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

const Contacts: React.FC = () => {
  const contactCards = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'РГПУ им. А.И. Герцена и Воронихинский сквер'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'terraherz-spb@yandex.ru'
    }
  ];

  return (
    <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-normal text-center text-gray-800 mb-12 relative"
      >
        Контакты
        <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {contactCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
          >
            <card.icon className="w-8 h-8 text-gray-800 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-3">{card.title}</h3>
            <p className="text-gray-600">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;