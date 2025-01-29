'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Petals() {
  const [petals, setPetals] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-3 h-3 bg-white/20 rounded-full blur-[1px]"
          style={{
            left: `${petal.x}%`,
            top: '-20px'
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: [0, Math.sin(petal.id) * 150],
            rotate: [0, 360 * 3]
          }}
          transition={{
            duration: 10,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}