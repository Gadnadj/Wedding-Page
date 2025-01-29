'use client';

import { content } from '@/config/content';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { WeddingCouple, WeddingDate, WeddingTimeUnits } from '@/config/types';
import WeddingPicure from '../config/images/wedding.png'
import { useEffect, useState } from 'react';
import { Petals } from './Petals';
import { weddingData } from '@/config/wedding-data';

type Props = {
  lang: 'fr' | 'he';
  couple: WeddingCouple;
  date: WeddingDate;
};

export function Hero({ lang, couple, date }: Props) {
  const t = content[lang].common;
  const [timeLeft, setTimeLeft] = useState<WeddingTimeUnits>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const monthNumber = weddingData.months[date.month as keyof typeof weddingData.months];
      const weddingDate = new Date(`${date.year}-${monthNumber}-${date.day}T16:00:00`);
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [date]);

  const renderCounter = () => {
    if (timeLeft.days <= 0) return null;

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
      <div className="flex flex-col items-center">
        <div className="text-5xl font-light tracking-tight">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs tracking-[0.2em] uppercase mt-2 opacity-70">
          {label}
        </div>
        <div className="h-[2px] w-12 bg-white/20 mt-3" />
      </div>
    );

    const units = weddingData.timeUnits[lang];

    return (
      <div className="flex gap-12">
        <TimeUnit value={timeLeft.days} label={units.days} />
        <TimeUnit value={timeLeft.hours} label={units.hours} />
        <TimeUnit value={timeLeft.minutes} label={units.minutes} />
        <TimeUnit value={timeLeft.seconds} label={units.seconds} />
      </div>
    );
  };

  return (
    <section id="home" className="relative min-h-screen">
      {/* Image de fond avec animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src={WeddingPicure}
          alt="Wedding background"
          fill
          className="object-cover w-full object-[center_20%] opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <Petals />
      </motion.div>
      
      {/* Contenu avec animations */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-light">{t.saveTheDate}</h2>
        </motion.div>

        <motion.h1 
          className="mt-6 font-title text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {couple[lang].partner1} & {couple[lang].partner2}
        </motion.h1>

        <motion.p 
          className="mt-4 font-body text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {date.day} {date.month} {date.year}
        </motion.p>

        <motion.button
          className="mt-8 rounded-full bg-white/20 px-8 py-3 backdrop-blur-sm transition-colors hover:bg-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          {t.joinUs}
        </motion.button>

        <motion.div
          className="mt-8 text-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {renderCounter()}
        </motion.div>
      </div>
    </section>
  );
} 