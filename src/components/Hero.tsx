'use client';

import { content } from '@/config/content';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

type Props = {
  lang: 'fr' | 'he';
  couple: {
    partner1: string;
    partner2: string;
  };
  date: string;
};

export const Hero = ({ lang, couple, date }: Props) => {
  const t = content[lang].common;

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      {/* Image d'arrière-plan */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Contenu */}
      <div className="text-center text-white space-y-8 p-4">
        <FadeIn delay={0.5}>
          <h2 className="text-2xl font-light">{t.saveTheDate}</h2>
        </FadeIn>
        
        <FadeIn delay={0.7}>
          <h1 className="text-5xl md:text-7xl font-title">
            {couple.partner1} & {couple.partner2}
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.9}>
          <p className="text-xl md:text-2xl">{date}</p>
        </FadeIn>
        
        <FadeIn delay={1.1}>
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
            {t.joinUs}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}; 