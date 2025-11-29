import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  const [title, setTitle] = useState('Партнеры');
  const [mainPartners, setMainPartners] = useState<string[]>([]);
  const [otherPartners, setOtherPartners] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/texts/content.json')
      .then(res => res.json())
      .then(data => {
        setTitle(data.partners?.title || 'Партнеры');
        setMainPartners(data.partners?.mainPartners || []);
        setOtherPartners(data.partners?.otherPartners || []);
        setLoading(false);
      })
      .catch(() => {
        setMainPartners(['/images/spb.png', '/images/rgpu.png', '/images/minpros.png']);
        setOtherPartners(['/images/partner1.png', '/images/partner2.png']);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Загрузка...</div>;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-normal text-center text-gray-800 mb-12 relative">
          {title}
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </motion.h2>

        {/* Главные партнёры */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {mainPartners.map((src, i) => (
            <img key={i} src={src} alt={`Партнёр ${i + 1}`} className="h-28 object-contain" onError={e => (e.currentTarget.src = '/images/placeholder.png')} />
          ))}
        </div>

        <div className="w-full h-0.5 bg-yellow-400 mb-16" />

        {/* Остальные партнёры */}
        <div className="flex flex-wrap justify-center gap-10">
          {otherPartners.map((src, i) => (
            <img key={i} src={src} alt={`Партнёр ${i + 1}`} className="h-20 object-contain" onError={e => (e.currentTarget.src = '/images/placeholder.png')} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;