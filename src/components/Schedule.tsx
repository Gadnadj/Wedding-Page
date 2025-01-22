import { content } from '@/config/content';

type Event = {
  time: string;
  event: string;
};

type Props = {
  lang: 'fr' | 'he';
  events: {
    fr: Event[];
    he: Event[];
  };
};

export const Schedule = ({ lang, events }: Props) => {
  const t = content[lang].navigation;
  const currentEvents = events[lang];

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-4xl font-title text-center mb-12">{t.schedule}</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {currentEvents.map((event, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-sm"
            >
              <span className="font-title text-xl text-primary">{event.time}</span>
              <span className="text-lg">{event.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 