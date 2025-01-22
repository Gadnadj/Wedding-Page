'use client';

import { useState } from 'react';
import { content } from '@/config/content';

type Props = {
  lang: 'fr' | 'he';
};

export const RSVP = ({ lang }: Props) => {
  const t = content[lang].common;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
  };

  return (
    <section id="rsvp" className="py-20">
      <div className="container max-w-xl">
        <h2 className="text-4xl font-title text-center mb-12">{t.rsvpTitle}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">{t.name}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2">{t.email}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2">{t.guests}</label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full p-2 border rounded"
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2">{t.message}</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-2 border rounded"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            {t.send}
          </button>
        </form>
      </div>
    </section>
  );
}; 