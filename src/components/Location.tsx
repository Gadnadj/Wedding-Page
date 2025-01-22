import { content } from '@/config/content';
import { FadeIn } from './animations/FadeIn';

type Props = {
  lang: 'fr' | 'he';
  location: {
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
};

export const Location = ({ lang, location }: Props) => {
  const t = content[lang].navigation;
  const currentLocation = location[lang];

  return (
    <section id="location" className="py-20 bg-secondary/10">
      <div className="container">
        <FadeIn>
          <h2 className="text-4xl font-title text-center mb-12">{t.location}</h2>
        </FadeIn>
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-title mb-2">{currentLocation.name}</h3>
              <p className="text-lg mb-4">{currentLocation.address}</p>
              <a 
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                Google Maps
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src={location.mapLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}; 