import React from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-normal text-center text-gray-800 mb-12 relative"
        >
          Партнеры
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-4" />
        </motion.h2>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div 
              className="h-96 w-full bg-gray-50 flex items-center justify-center rounded-2xl"
              style={{ 
                backgroundImage: "url('/images/snimok')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Fallback text if image doesn't load */}
              <span className="sr-only">Партнеры фестиваля</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;