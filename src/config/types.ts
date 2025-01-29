export type WeddingCouple = {
  fr: {
    partner1: string;
    partner2: string;
  };
  he: {
    partner1: string;
    partner2: string;
  };
};

export type WeddingDate = {
  day: string;
  month: string;
  year: string;
}; 

export type WeddingTimeUnits = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};