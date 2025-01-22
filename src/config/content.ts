export type WeddingContent = {
  couple: {
    partner1: string;
    partner2: string;
  };
  date: string;
  location: {
    name: string;
    address: string;
    mapLink: string;
  };
  schedule: Array<{
    time: string;
    event: string;
  }>;
  rsvpDeadline: string;
};

export const content = {
  fr: {
    navigation: {
      home: "Accueil",
      schedule: "Programme",
      location: "Lieu",
      rsvp: "RSVP",
    },
    common: {
      saveTheDate: "Save the Date",
      joinUs: "Rejoignez-nous",
      rsvpTitle: "Confirmez votre présence",
      send: "Envoyer",
      name: "Nom",
      email: "Email",
      guests: "Nombre d'invités",
      message: "Message",
    }
  },
  he: {
    navigation: {
      home: "בית",
      schedule: "לוח זמנים",
      location: "מיקום",
      rsvp: "אישור הגעה",
    },
    common: {
      saveTheDate: "שמרו את התאריך",
      joinUs: "הצטרפו אלינו",
      rsvpTitle: "אישור הגעה",
      send: "שלח",
      name: "שם",
      email: "אימייל",
      guests: "מספר אורחים",
      message: "הודעה",
    }
  }
}; 