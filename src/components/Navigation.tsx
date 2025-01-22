'use client';

import { useState } from 'react';
import Link from 'next/link';
import { content } from '@/config/content';
import { LanguageSwitcher } from './LanguageSwitcher';

type Props = {
  lang: 'fr' | 'he';
};

export const Navigation = ({ lang }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = content[lang].navigation;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Noms */}
          <div className="font-title text-xl">L & L</div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${lang}`} className="hover:text-primary transition-colors">
              {t.home}
            </Link>
            <Link href={`/${lang}#schedule`} className="hover:text-primary transition-colors">
              {t.schedule}
            </Link>
            <Link href={`/${lang}#location`} className="hover:text-primary transition-colors">
              {t.location}
            </Link>
            <Link href={`/${lang}#rsvp`} className="hover:text-primary transition-colors">
              {t.rsvp}
            </Link>
            <LanguageSwitcher currentLang={lang} />
          </div>

          {/* Menu Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-6">≡</div>
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md">
            <div className="px-4 py-2 space-y-4">
              <Link href={`/${lang}`} className="block hover:text-primary transition-colors">
                {t.home}
              </Link>
              <Link href={`/${lang}#schedule`} className="block hover:text-primary transition-colors">
                {t.schedule}
              </Link>
              <Link href={`/${lang}#location`} className="block hover:text-primary transition-colors">
                {t.location}
              </Link>
              <Link href={`/${lang}#rsvp`} className="block hover:text-primary transition-colors">
                {t.rsvp}
              </Link>
              <div className="pt-2 border-t">
                <LanguageSwitcher currentLang={lang} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 