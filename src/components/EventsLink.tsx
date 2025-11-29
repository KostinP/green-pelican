import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const EventsLink: React.FC = () => {
  const [title, setTitle] = useState('Мероприятия открытого кампуса');
  const [buttonText, setButtonText] = useState('Перейти к мероприятиям');
  const [url, setUrl] = useState('https://terraherz-spb.timepad.ru/events/');

  useEffect(() => {
    fetch('/texts/content.json')
      .then(res => res.json())
      .then(data => {
        if (data.eventsLink) {
          setTitle(data.eventsLink.title);
          setButtonText(data.eventsLink.buttonText);
          setUrl(data.eventsLink.url);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-normal text-gray-800 mb-8">
          {title}
        </motion.h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
            {buttonText}
          </Button>
        </a>
      </div>
    </section>
  );
};

export default EventsLink;