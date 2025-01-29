'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '@/config/content';

type Props = {
  lang: 'fr' | 'he';
};

export function RSVP({ lang }: Props) {
  const t = content[lang].common;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    message: '',
  });
  const [showMoreGuests, setShowMoreGuests] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
  };

  return (
    <section id="rsvp" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-title text-center mb-16">
            {t.rsvpTitle}
          </h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className={`block text-sm font-medium text-neutral-600 mb-2 ${lang === 'he' ? 'text-right' : ''}`}>
                  {t.name}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-neutral-50 border-none focus:ring-2 focus:ring-neutral-300 transition-shadow ${lang === 'he' ? 'text-right' : ''}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium text-neutral-600 mb-2 ${lang === 'he' ? 'text-right' : ''}`}>
                  {t.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-neutral-50 border-none focus:ring-2 focus:ring-neutral-300 transition-shadow ${lang === 'he' ? 'text-right' : ''}`}
                />
              </div>
            </div>

            <div className="mb-8">
              <label className={`block text-sm font-medium text-neutral-600 mb-2 ${lang === 'he' ? 'text-right' : ''}`}>
                {t.guests}
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData({ ...formData, guests: num.toString() })}
                    className={`py-3 rounded-lg transition-all ${
                      formData.guests === num.toString()
                        ? 'bg-neutral-800 text-white'
                        : 'bg-neutral-50 hover:bg-neutral-100'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setShowMoreGuests(!showMoreGuests)}
                  className="py-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-all"
                >
                  {showMoreGuests ? '−' : '+'}
                </button>
              </div>

              {showMoreGuests && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 grid grid-cols-5 gap-2"
                >
                  {[5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, guests: num.toString() });
                      }}
                      className={`py-3 rounded-lg transition-all ${
                        formData.guests === num.toString()
                          ? 'bg-neutral-800 text-white'
                          : 'bg-neutral-50 hover:bg-neutral-100'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="mb-8">
              <label className={`block text-sm font-medium text-neutral-600 mb-2 ${lang === 'he' ? 'text-right' : ''}`}>
                {t.message}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg bg-neutral-50 border-none focus:ring-2 focus:ring-neutral-300 transition-shadow resize-none ${lang === 'he' ? 'text-right' : ''}`}
                rows={4}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-neutral-800 text-white rounded-lg font-medium hover:bg-neutral-700 transition-colors"
            >
              {t.send}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 