import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: 'Зеленый пеликан',
      content: 'Формируем особую городскую среду для решения образовательных, экологических и архитектурных задач'
    },
    {
      title: 'Навигация',
      links: [
        { id: 'about', label: 'О фестивале' },
        { id: 'activities', label: 'Активности' },
        { id: 'past-events', label: 'Прошедшие мероприятия' },
        { id: 'contacts', label: 'Контакты' },
        { id: 'faq', label: 'FAQ' }
      ]
    }
  ];

  const socialLinks = [
    { 
      href: 'https://vk.com/terraherz', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2M18.15 16.27H16.69C16.14 16.27 15.97 15.82 15 14.83C14.12 14 13.74 13.88 13.53 13.88C13.24 13.88 13.15 13.96 13.15 14.38V15.69C13.15 16.04 13.04 16.26 12.11 16.26C10.57 16.26 8.86 15.32 7.66 13.59C5.85 11.05 5.36 9.13 5.36 8.75C5.36 8.54 5.43 8.34 5.85 8.34H7.32C7.69 8.34 7.83 8.5 7.97 8.9C8.69 10.96 9.89 12.76 10.38 12.76C10.57 12.76 10.65 12.66 10.65 12.25V10.1C10.6 9.12 10.07 9.03 10.07 8.68C10.07 8.5 10.21 8.34 10.44 8.34H12.73C13.04 8.34 13.15 8.5 13.15 8.88V11.77C13.15 12.08 13.28 12.19 13.38 12.19C13.56 12.19 13.72 12.08 14.05 11.72C15.1 10.33 16 8.47 16 8.47C16.1 8.27 16.25 8.17 16.53 8.17H17.94C18.37 8.17 18.47 8.43 18.37 8.74C18.19 9.31 16.41 11.47 16.41 11.47C16.27 11.66 16.21 11.8 16.41 12.08C16.61 12.36 17.74 13.6 18.29 14.24C18.8 14.84 19.3 15.61 18.45 16.27H18.15Z"/>
        </svg>
      )
    },
    { 
      href: 'https://t.me/TERRAHERZspb', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.89.56-2.45-1.83-3.57-2.98-5.79-4.78-.54-.45-.92-.68-.88-1.07.05-.39.54-.56 1.07-.41.18.05 3.07 1.97 5.21 3.39.23.16.41.24.47.38.09.21.02.33-.17.52-.48.48-1.4 1.04-1.9 1.33-.34.19-.73.3-.48.58.29.33 1.21 1.19 1.89 1.9.58.61 1.04.56 1.73.33.82-.27 3.96-1.69 4.5-3.24.54-1.56.54-2.9.45-3.24-.1-.34-.38-.54-.88-.42-.25.06-4.24 2.68-4.38 2.77-.08.05-.16.03-.23-.02-.24-.17-.92-1.14-1.6-2.23-.44-.7-.89-.6-.89-.6l-2.48.78c-.53.2-.75-.24-.75-.24-.08-.19.02-.36.18-.5.36-.35 2.12-2.06 2.7-2.52.66-.53 1.12-.39 1.37-.36.3.04.97.12 1.41.86.38.63 1.35 2.59 1.46 2.78.11.19.22.27.41.27.14 0 .28-.07.38-.14.01 0 2.09-1.35 2.3-1.79.21-.44.21-.8.15-.9-.06-.09-.22-.14-.43-.16z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-left"
            >
              <h3 className="text-yellow-400 font-medium text-lg mb-4">{section.title}</h3>
              {section.content && <p className="text-gray-300">{section.content}</p>}
              {section.links && (
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="block text-gray-300 hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-left"
          >
            <h3 className="text-yellow-400 font-medium text-lg mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center pt-8 border-t border-gray-500"
        >
          <p className="text-gray-300">
            &copy; 2026 Фестиваль "Зеленый пеликан". Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;