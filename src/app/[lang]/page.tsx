import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Schedule } from '@/components/Schedule';
import { Location } from '@/components/Location';
import { RSVP } from '@/components/RSVP';
import { weddingData } from '@/config/wedding-data';

type Props = {
  params: {
    lang: 'fr' | 'he';
  };
};

export function generateStaticParams() {
  return [
    { lang: 'fr' },
    { lang: 'he' },
  ];
}

export default function Home({ params: { lang } }: Props) {
  return (
    <main className="relative">
      <Navigation lang={lang} />
      <Hero 
        lang={lang}
        couple={weddingData.couple}
        date={weddingData.date}
      />
      <Schedule lang={lang} events={weddingData.schedule} />
      <Location lang={lang} location={weddingData.location} />
      <RSVP lang={lang} />
    </main>
  );
} 