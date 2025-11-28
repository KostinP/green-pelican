import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center relative mt-20"
      style={{ backgroundImage: "url('/images/pelican.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="outline"
          className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-800 rounded-full px-8 py-2 text-sm"
          onClick={scrollToAbout}
        >
          Узнать больше
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;