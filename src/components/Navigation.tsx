'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { content } from '@/config/content';
import { LanguageSwitcher } from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  lang: 'fr' | 'he';
};

export const Navigation = ({ lang }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = content[lang].navigation;
  const isRTL = lang === 'he';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            {/* Left side */}
            <div className="flex-1">
              {!isRTL && (
                <Link 
                  href={`/${lang}`}
                  className="font-title text-2xl hover:opacity-80 transition-opacity"
                >
                  L & L
                </Link>
              )}
            </div>

            {/* Center */}
            <div className={`flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {(isRTL ? Object.entries(t).reverse() : Object.entries(t)).map(([key, value]) => (
                <Link
                  key={key}
                  href={`#${key}`}
                  onClick={(e) => handleScroll(e, key)}
                  className="relative group"
                >
                  <span className="text-sm tracking-wide hover:text-primary transition-colors">
                    {value}
                  </span>
                  <span className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} w-0 h-[2px] bg-primary transition-all group-hover:w-full ${isRTL ? 'origin-right' : 'origin-left'}`} />
                </Link>
              ))}
              <LanguageSwitcher currentLang={lang} />
            </div>

            {/* Right side */}
            <div className="flex-1 flex justify-end">
              {isRTL && (
                <Link 
                  href={`/${lang}`}
                  className="font-title text-2xl hover:opacity-80 transition-opacity"
                >
                  L & L
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
              <Link 
                href={`/${lang}`}
                className="font-title text-2xl hover:opacity-80 transition-opacity"
              >
                L & L
              </Link>

              <button 
                className="p-2 hover:bg-black/5 rounded-lg transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transform transition-all ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`} />
                  <span className={`w-full h-0.5 bg-current transition-opacity ${
                    isOpen ? 'opacity-0' : ''
                  }`} />
                  <span className={`w-full h-0.5 bg-current transform transition-all ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`} />
                </div>
              </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-md mt-4 rounded-2xl ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <div className="p-4 space-y-4">
                {(isRTL ? Object.entries(t).reverse() : Object.entries(t)).map(([key, value]) => (
                  <Link
                    key={key}
                    href={`#${key}`}
                    onClick={(e) => handleScroll(e, key)}
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    {value}
                  </Link>
                ))}
                <div className={`pt-4 border-t flex ${
                  isRTL ? 'justify-end' : 'justify-start'
                }`}>
                  <LanguageSwitcher currentLang={lang} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
