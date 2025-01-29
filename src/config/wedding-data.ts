export const weddingData = {
  couple: {
    fr: {
    partner1: "Aviram",
    partner2: "Liel"
    },
    he: {
      partner1: "אבירם",
      partner2: "ליאל"
    }
  },
  date: {
    day: "10",
    month: "October",
    year: "2025"
  },
  timeUnits: {
    fr: {
      days: "jours",
      hours: "heures",
      minutes: "minutes",
      seconds: "secondes"
    },
    he: {
      days: "ימים",
      hours: "שעות",
      minutes: "דקות",
      seconds: "שניות"
    }
  },
  location: {
    fr: {
      name: "Destino",
      address: "Destino, Ha-Pisga St, Shoresh, Israel",
    },
    he: {
      name: "דסטינו",
      address: "דסטינו, שושן ברכה, ישראל",
    },
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.244390195324!2d35.066619787814616!3d31.795080287802865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d06ef3bd8581%3A0xdd0a666f25ed0666!2sDestino!5e0!3m2!1sfr!2sil!4v1737563033970!5m2!1sfr!2sil",
  },
  schedule: {
    fr: [
      { time: "16:00", event: "Cérémonie" },
      { time: "17:30", event: "Cocktail" },
      { time: "19:00", event: "Dîner" },
      { time: "21:00", event: "Soirée dansante" }
    ],
    he: [
      { time: "16:00", event: "טקס" },
      { time: "17:30", event: "קוקטייל" },
      { time: "19:00", event: "ארוחת ערב" },
      { time: "21:00", event: "ריקודים" }
    ]
  },
  months: {
    'Janvier': '01',
    'January': '01',
    'ינואר': '01',
    
    'Février': '02',
    'February': '02',
    'פברואר': '02',
    
    'Mars': '03',
    'March': '03',
    'מרץ': '03',
    
    'Avril': '04',
    'April': '04',
    'אפריל': '04',
    
    'Mai': '05',
    'May': '05',
    'מאי': '05',
    
    'Juin': '06',
    'June': '06',
    'יוני': '06',
    
    'Juillet': '07',
    'July': '07',
    'יולי': '07',
    
    'Août': '08',
    'August': '08',
    'אוגוסט': '08',
    
    'Septembre': '09',
    'September': '09',
    'ספטמבר': '09',
    
    'Octobre': '10',
    'October': '10',
    'אוקטובר': '10',
    
    'Novembre': '11',
    'November': '11',
    'נובמבר': '11',
    
    'Décembre': '12',
    'December': '12',
    'דצמבר': '12'
  } as const,
}; 