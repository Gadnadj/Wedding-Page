'use client';

import { motion } from 'framer-motion';
import { content } from '@/config/content';

type Event = {
  time: string;
  event: string;
};

type Props = {
  lang: 'fr' | 'he';
  events: {
    fr: Event[];
    he: Event[];
  };
};

export function Schedule({ lang, events }: Props) {
  const t = content[lang].navigation;
  const currentEvents = events[lang];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="schedule" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-title text-center mb-16 text-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {lang === 'fr' ? 'Programme' : 'לוח זמנים'}
        </motion.h2>

        <motion.div 
          className="max-w-2xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {currentEvents.map((event, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="flex items-center gap-8 mb-12 last:mb-0"
            >
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <span className="text-xl font-light">{event.time}</span>
                </div>
                {index !== currentEvents.length - 1 && (
                  <div className="absolute top-24 left-1/2 w-[1px] h-12 bg-neutral-200" />
                )}
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 flex-grow transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-light text-neutral-800">
                  {event.event}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 