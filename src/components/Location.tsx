'use client';

import { motion } from 'framer-motion';
import { content } from '@/config/content';

type LocationData = {
  fr: {
    name: string;
    address: string;
  };
  he: {
    name: string;
    address: string;
  };
  mapLink: string;
};

type Props = {
  lang: 'fr' | 'he';
  location: LocationData;
};

export function Location({ lang, location }: Props) {
  const t = content[lang].navigation;
  const currentLocation = location[lang];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-title text-center mb-16 text-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {lang === 'fr' ? 'Lieu' : 'מיקום'}
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-neutral-50 p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-title mb-4">{currentLocation.name}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {currentLocation.address}
                </p>
                <motion.a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentLocation.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-neutral-800 text-white rounded-full text-sm tracking-wide hover:bg-neutral-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang === 'fr' ? 'Ouvrir dans Google Maps' : 'Google Maps-פתח ב'}
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video relative rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src={location.mapLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 