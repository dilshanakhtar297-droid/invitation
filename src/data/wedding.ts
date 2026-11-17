export interface WeddingEvent {
  id: string;
  name: string;
  subTitle: string;
  date: string;
  dateISO: string;
  islamicDate: string;
  time: string;
  lunchDetail?: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  country: string;
  mapsSearchUrl: string;
  badge: string;
}

export interface FamilySide {
  side: "bride" | "groom";
  title: string;
  candidateName: string;
  qualifications: string;
  relationshipTitle: string;
  fatherInfo: string;
  additionalInfo: string;
  issuedBy?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  tag: string;
}

export interface WeddingData {
  bismillahArabic: string;
  bismillahEnglish: string;
  bride: {
    fullName: string;
    qualifications: string;
    shortName: string;
  };
  groom: {
    fullName: string;
    qualifications: string;
    shortName: string;
  };
  monogram: string;
  dateSummary: string;
  islamicDateSummary: string;
  locationSummary: string;
  targetDateTimeISO: string; // Nikah target in IST: 2026-10-18T12:30:00+05:30
  mainInvitationMessage: {
    heading: string;
    invitationBy: string;
    body: string;
    eventInvite: string;
  };
  events: WeddingEvent[];
  families: {
    bride: FamilySide;
    groom: FamilySide;
  };
  closing: {
    title: string;
    duaArabic: string;
    duaTranslation: string;
    message: string;
    compliments: string;
    sbtFamilyCompliments: string;
  };
  shareDetails: {
    title: string;
    messageText: string;
  };
  qrCode: {
    imageSrc: string;
    title: string;
    caption: string;
  };
}

export const weddingData: WeddingData = {
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEnglish: "In the name of Allah, the Most Beneficent, the Most Merciful",
  bride: {
    fullName: "Iram Babar Ansari",
    qualifications: "",
    shortName: "Iram",
  },
  groom: {
    fullName: "Gufran Shabbir Shaikh",
    qualifications: "",
    shortName: "Gufran",
  },
  monogram: "G & I",
  dateSummary: "24 December 2026",
  islamicDateSummary: "",
  locationSummary: "Pune, Maharashtra",
  targetDateTimeISO: "2026-12-24T19:00:00+05:30",
  mainInvitationMessage: {
    heading: "Reception Ceremony",
    invitationBy: "Gufran & Iram and their families",
    body: "cordially solicit your gracious presence and blessings on the auspicious occasion of the wedding reception of Gufran Shabbir Shaikh and Iram Babar Ansari.",
    eventInvite: "With the blessings of Allah and our families, we warmly invite you to join us for the reception and dinner.",
  },
  events: [
    {
      id: "reception",
      name: "Reception Ceremony",
      subTitle: "An Evening of Love, Blessings & Celebration",
      date: "Thursday, 24 December 2026",
      dateISO: "2026-12-24",
      islamicDate: "",
      time: "7:00 PM",
      lunchDetail: "Dinner: 7:00 PM onwards",
      venue: "Hussain Shah Baba Dargah Hall",
      address: "Behind Madina Masjid, Near Commerzone IT Park, Yerwada, Jail Road, Pune - 411006",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      mapsSearchUrl:
        "https://www.google.com/maps/search/?api=1&query=Hussain+Shah+Baba+Dargah+Hall+Behind+Madina+Masjid+Near+Commerzone+IT+Park+Yerwada+Jail+Road+Pune+411006",
      badge: "Reception",
    },
  ],
  families: {
    bride: {
      side: "bride",
      title: "Bride's Family",
      candidateName: "Iram Babar Ansari",
      qualifications: "",
      relationshipTitle: "Daughter of Muhammad Babar Ansari",
      fatherInfo: "Family of Iram Babar Ansari",
      additionalInfo: "",
    },
    groom: {
      side: "groom",
      title: "Groom's Family",
      candidateName: "Gufran Shabbir Shaikh",
      qualifications: "",
      relationshipTitle: "Groom's Family",
      fatherInfo: "Family of Gufran Shabbir Shaikh",
      additionalInfo: "",
    },
  },
  closing: {
    title: "With Heartfelt Gratitude & Duas",
    duaArabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "“May Allah bless you, shower His blessings upon you, and unite you both in goodness.”",
    message:
      "Thank you for being part of our celebration. Your presence and duas mean so much to our families. May Allah bless this union with love, mercy, peace, and barakah.",
    compliments: "With Love & Best Wishes from Our Dear Nephews\nInaaya, Zikraa, Azlan, Muaz, Maryam, Zayan, Ahil, Ibrahim, Zaynab, Fariha.",
   
  },
  shareDetails: {
    title: "Wedding Invitation — Gufran Shabbir Shaikh & Iram Babar Ansari",
    messageText:
      "Wedding Invitation — Gufran Shabbir Shaikh & Iram Babar Ansari\n\nReception Ceremony: Thursday, 24 December 2026 at 7:00 PM, Hussain Shah Baba Dargah Hall, Behind Madina Masjid, Near Commerzone IT Park, Yerwada, Jail Road, Pune - 411006.\n\nWe warmly invite you to join us and bless the couple.",
  },
  qrCode: {
    imageSrc: "/images/invitation-qr.png",
    title: "Digital Invitation QR Code",
    caption:
      "Supplied wedding invitation QR code. Scan with your camera or QR reader to view.",
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: "wedding-artwork",
    title: "Wedding Floral Artwork",
    caption:
      "Commemorative illustrated wedding artwork of Gufran & Iram with pink floral wreath and royal crest.",
    src: "/images/wedding-artwork.png",
    alt: "Gufran weds Iram illustrated wedding artwork",
    tag: "Artwork",
  },
  {
    id: "printed-invitation",
    title: "Official Printed Invitation",
    caption:
      "The physical wedding invitation card featuring laser-cut Family & Friends filigree cover and royal ivory insert.",
    src: "/images/printed-invitation.jpg",
    alt: "Photograph of physical printed wedding invitation card",
    tag: "Physical Card",
  },
];
