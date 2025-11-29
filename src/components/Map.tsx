import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Map: React.FC = () => {
  const [title, setTitle] = useState('Место проведения');

  useEffect(() => {
    fetch('/texts/content.json')
      .then(res => res.json())
      .then(data => setTitle(data.map?.title || 'Место проведения'))
      .catch(() => {});
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-normal text-center text-gray-800 mb-12 relative">
          {title}
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </motion.h2>
        <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-lg border border-gray-100">
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CLWpvPYh"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Карта фестиваля Зеленый пеликан"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;