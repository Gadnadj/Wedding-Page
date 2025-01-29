'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {
  currentLang: 'fr' | 'he';
};

export const LanguageSwitcher = ({ currentLang }: Props) => {
  return (
    <div className="flex items-center gap-2 rtl:flex-row-reverse">
      <Link
        href="/fr"
        className={`px-2 py-1 rounded ${
          currentLang === 'fr'
            ? 'bg-primary text-white'
            : 'hover:bg-primary/10'
        }`}
      >
        FR
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href="/he"
        className={`px-2 py-1 rounded ${
          currentLang === 'he'
            ? 'bg-primary text-white'
            : 'hover:bg-primary/10'
        }`}
      >
        עב
      </Link>
    </div>
  );
}; 