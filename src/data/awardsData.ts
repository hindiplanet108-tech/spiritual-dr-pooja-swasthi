export interface AwardItem {
  id: string;
  filename: string;
  imageUrl?: string;
  category: 'felicitation' | 'conclave' | 'memento' | 'press';
  eventGroup: 'iimt_meerut' | 'lucknow' | 'ujjain_indore' | 'uttarakhand_governor' | 'bhu_varanasi' | 'portraits';
  eventGroup_hi: string;
  caption: string;
  caption_en?: string;
  event: string;
  event_hi: string;
  dignitaries?: string;
  venue?: string;
  alt: string;
}

export const AWARDS_DATA: AwardItem[] = [
  // ==========================================
  // GROUP 1: आईआईएमटी विश्वविद्यालय, मेरठ (IIMT University Meerut)
  // ==========================================
  {
    id: "iimt-3",
    filename: "IMMT.jpeg",
    imageUrl: "/assets/awards/IMMT.jpeg",
    category: "felicitation",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "आईआईएमटी विश्वविद्यालय के ज्योतिष महासमागम में पारंपरिक गुलाबी साफा (पगड़ी) बांधकर डॉ. पूजा अवस्थी का खास सम्मान किया गया।",
    caption_en: "Traditional Ceremonial Turban (Safa) felicitation of Dr. Pooja Awasthi at IIMT Jyotish Mahasamagam.",
    event: "Ceremonial Turban (Safa) Felicitation at IIMT Meerut",
    event_hi: "आईआईएमटी मेरठ - पारंपरिक साफा (पगड़ी) सम्मान",
    dignitaries: "विश्वविद्यालय मंच एवं वरिष्ठ ज्योतिषाचार्य",
    venue: "आईआईएमटी विश्वविद्यालय परिसर, मेरठ",
    alt: "Traditional pink turban being tied on Dr. Pooja Awasthi as ceremonial honour"
  },
  {
    id: "iimt-4",
    filename: "IMMT-2.jpeg",
    imageUrl: "/assets/awards/IMMT-2.jpeg",
    category: "memento",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "ज्योतिष महासमागम के मंच पर सुनहरी ट्रॉफी और प्रमाणपत्र के साथ डॉ. पूजा अवस्थी।",
    caption_en: "Dr. Pooja Awasthi with the commemorative gold memento and certificate on dais.",
    event: "Commemorative Memento Presentation - IIMT Jyotish Mahasamagam",
    event_hi: "आईआईएमटी महासमागम - स्मृति चिन्ह सम्मान",
    dignitaries: "विद्वत परिषद एवं विश्वविद्यालय प्रबंधन",
    venue: "आईआईएमटी विश्वविद्यालय, मेरठ",
    alt: "Dr. Pooja Awasthi holding the IIMT Lifetime Achievement trophy"
  },
  {
    id: "iimt-5",
    filename: "IMMT-3.jpeg",
    imageUrl: "/assets/awards/IMMT-5.jpeg",
    category: "conclave",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "देश-विदेश के 90+ प्रसिद्ध ज्योतिष विशेषज्ञों के मंच पर खास अतिथियों के साथ डॉ. पूजा अवस्थी।",
    caption_en: "With distinguished dignitaries and scholars on stage at the National Jyotish Summit, IIMT University.",
    event: "National Astrologers Conclave - 90+ Renowned Experts Gathering",
    event_hi: "राष्ट्रीय ज्योतिष महासमागम - 90+ विद्वानों की उपस्थिति",
    dignitaries: "देश के प्रमुख ज्योतिषाचार्य एवं शोधकर्ता",
    venue: "आईआईएमटी विश्वविद्यालय, मेरठ",
    alt: "Dr. Pooja Awasthi standing with eminent scholars on stage at IIMT"
  },
  {
    id: "iimt-6",
    filename: "IMMT-4.jpeg",
    imageUrl: "/assets/awards/IMMT-6.jpeg",
    category: "conclave",
    eventGroup: "iimt_meerut",
    eventGroup_hi: "आईआईएमटी विश्वविद्यालय मेरठ",
    caption: "पूज्य जैनाचार्य 108 सौरभ सागर जी महाराज के मंच पर उपस्थित डॉ. पूजा अवस्थी।",
    caption_en: "Seated on the sacred dais under the grace of Param Pujya Jainacharya 108 Saurabh Sagar Ji Maharaj.",
    event: "Dais of Honour - IIMT University Meerut",
    event_hi: "मुख्य मंच - आईआईएमटी मेरठ",
    dignitaries: "परम पूज्य जैनाचार्य 108 श्री सौरभ सागर जी महाराज",
    venue: "आईआईएमटी विश्वविद्यालय मुख्य सभागार, मेरठ",
    alt: "Dr. Pooja Awasthi seated on dais at IIMT Meerut ceremony"
  },

  // ==========================================
  // GROUP 2: राष्ट्रीय धर्म ज्योतिष सम्मेलन 2026, लखनऊ
  // ==========================================
  {
    id: "lucknow-1",
    filename: "Lucknow mahopadhyay award-7.jpeg",
    imageUrl: "/assets/awards/Lucknow_mahopadhyay_award_7.jpeg",
    category: "memento",
    eventGroup: "lucknow",
    eventGroup_hi: "राष्ट्रीय सम्मेलन लखनऊ",
    caption: "राष्ट्रीय धर्म ज्योतिष सम्मेलन 2026 में डॉ. पूजा अवस्थी को मिला 'ज्योतिष महोपाध्याय सम्मान' सुनहरी ट्रॉफी।",
    caption_en: "Prestigious 'Jyotish Mahopadhyaya Award' Sun-shaped Golden Trophy conferred upon Dr. Pooja Awasthi at Lucknow Conclave.",
    event: "Jyotish Mahopadhyaya Award 2026 - Sun-Shaped Golden Shield",
    event_hi: "ज्योतिष महोपाध्याय सम्मान 2026 - स्वर्ण शील्ड",
    dignitaries: "माँ अष्टभुज राष्ट्रीय धर्म ज्योतिष केंद्र, डॉ. रजनी अवस्थी (मुख्य संयोजक)",
    venue: "राय उमानाथ बली प्रेक्षागृह, भातखंडे संस्कृति विश्वविद्यालय परिसर, कैसरबाग, लखनऊ",
    alt: "Sun-shaped Golden Trophy: Jyotish Mahopadhyaya Award to Dr. Pooja Awasthi"
  },

  // ==========================================
  // GROUP 3: माँ शारदा ज्योतिष महासम्मेलन एवं महाकाल उज्जैन
  // ==========================================
  {
    id: "ujjain-2",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 1.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "ज्योतिष, वास्तु और आयुर्वेद सम्मेलन के मुख्य मंच पर 'इंडिया टॉप टेन अवार्ड 2026' ट्रॉफी और सम्मान पत्र लेते हुए।",
    caption_en: "Dr. Pooja Awasthi receiving India Top Ten Award 2026 certificate and memento on stage.",
    event: "India Top Ten Award 2026 Conferment on Dais",
    event_hi: "इंडिया टॉप टेन अवार्ड 2026 - मंच सम्मान",
    dignitaries: "प. दिनेश गुरूजी एवं वरिष्ठ विद्वत परिषद",
    venue: "होटल पार्क पैलेस, इन्दौर-उज्जैन",
    alt: "Dr. Pooja Awasthi receiving India Top Ten Award on stage"
  },
  {
    id: "ujjain-3",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 2.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "40वें महासम्मेलन में संतों और खास अतिथियों द्वारा ट्रॉफी व सम्मान पत्र भेंट किया गया।",
    caption_en: "Grand stage conferment of India Top Ten Award with distinguished priests and patrons.",
    event: "Grand Dais Felicitation - Jyotish Vastu Ayurveda Mahasammelan",
    event_hi: "मंच सम्मान - ज्योतिष वास्तु आयुर्वेद महासम्मेलन",
    dignitaries: "माँ शारदा ज्योतिषधाम के प्रमुख संत व अतिथि",
    venue: "होटल पार्क पैलेस, उज्जैन (म.प्र.)",
    alt: "Group presentation of India Top 10 Award to Dr. Pooja Awasthi"
  },
  {
    id: "ujjain-4",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 3.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "उज्जैन-इन्दौर राष्ट्रीय सम्मेलन में सम्मान पत्र और विशेष सम्मान।",
    caption_en: "Reading of citation and felicitation ceremony at the Indore-Ujjain national convention.",
    event: "India Top 10 Award Presentation Ceremony",
    event_hi: "इंडिया टॉप 10 अवार्ड सम्मान समारोह",
    dignitaries: "सम्मेलन संचालन समिति",
    venue: "उज्जैन (म.प्र.)",
    alt: "India Top 10 award citation reading and presentation"
  },
  {
    id: "ujjain-5",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 4.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "conclave",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "होटल पार्क पैलेस, उज्जैन के मुख्य मंच पर देश के नामी ज्योतिष आचार्यों के साथ डॉ. पूजा अवस्थी।",
    caption_en: "Seated on the main dais alongside esteemed astrological scholars and luminaries.",
    event: "Scholars Conclave on Dais - Hotel Park Palace, Ujjain",
    event_hi: "मुख्य मंच - होटल पार्क पैलेस, उज्जैन",
    dignitaries: "देश के प्रसिद्ध वैदिक ज्योतिषाचार्य",
    venue: "होटल पार्क पैलेस, इन्दौर रोड, उज्जैन",
    alt: "Dr. Pooja Awasthi seated with eminent scholars on dais in Ujjain"
  },
  {
    id: "ujjain-6",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 5.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "40वें महासम्मेलन में बड़ी गेंदा फूलों की माला पहनाकर डॉ. पूजा अवस्थी का भव्य स्वागत व सम्मान।",
    caption_en: "Grand traditional marigold garland felicitation honoring Dr. Pooja Awasthi.",
    event: "Grand Floral Garland Felicitation by Scholars",
    event_hi: "पुष्पमाला स्वागत व सम्मान",
    dignitaries: "सम्मेलन के मुख्य संरक्षक एवं अतिथि",
    venue: "होटल पार्क पैलेस, उज्जैन",
    alt: "Grand garland felicitation ceremony of Dr. Pooja Awasthi"
  },
  {
    id: "ujjain-7",
    filename: "ज्योतिष वास्तु एवं आयुर्वेद सम्मेलन इंदौर 2026 - 6.jpeg",
    imageUrl: "/assets/awards/ujjain_top_10_trophy.jpeg",
    category: "conclave",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "माँ शारदा ज्योतिषधाम के मंच से ज्योतिष और जीवन मार्गदर्शन पर डॉ. पूजा अवस्थी का मुख्य भाषण।",
    caption_en: "Keynote lecture by Dr. Pooja Awasthi from the Maa Sharda Jyotishdham podium.",
    event: "Keynote Address at 40th International Jyotish Mahasammelan",
    event_hi: "40वें महासम्मेलन में मुख्य वक्ता संबोधन",
    dignitaries: "विद्वत परिषद एवं उपस्थित साधक",
    venue: "होटल पार्क पैलेस, उज्जैन (म.प्र.)",
    alt: "Dr. Pooja Awasthi speaking at Maa Sharda Jyotishdham podium in Ujjain"
  },
  {
    id: "ujjain-8",
    filename: "माननीय दिनेश ji महाकाल उज्जैन के प्रधान पुरोहित का आशीर्वाद प्राप्त हुआ. जय महाकाल-3.jpeg",
    imageUrl: "/assets/awards/mahakal_ujjain_dinesh_ji_indore.jpeg",
    category: "felicitation",
    eventGroup: "ujjain_indore",
    eventGroup_hi: "महाकाल उज्जैन व इन्दौर",
    caption: "माननीय दिनेश जी (महाकाल उज्जैन के मुख्य पुजारी) का पावन आशीर्वाद मिला। जय महाकाल 🙏",
    caption_en: "Blessed by Hon. Pt. Dinesh Ji, Head Priest of Mahakal Temple Ujjain at 40th Jyotish Sammelan.",
    event: "Divine Blessings from Pt. Dinesh Ji, Head Priest of Mahakal Ujjain",
    event_hi: "महाकाल उज्जैन के मुख्य पुजारी माननीय दिनेश जी का आशीर्वाद",
    dignitaries: "माननीय दिनेश जी (प्रधान पुरोहित, महाकाल मंदिर उज्जैन)",
    venue: "होटल पार्क पैलेस, इन्दौर",
    alt: "Dr. Pooja Awasthi with Pt. Dinesh Ji, Head Priest of Mahakal Ujjain"
  },

  // ==========================================
  // GROUP 4: अमर उजाला ज्योतिष महाकुंभ - माननीय राज्यपाल ले. ज. गुरमीत सिंह
  // ==========================================
  {
    id: "gov-1",
    filename: "अमर उजाला ज्योतिष महाकुम्भ मै उत्तराखंड के माननीय राजयपाल ले ज गुरुमीत सिंह द्वारा सम्मानित-5.jpeg",
    imageUrl: "/assets/awards/uttarakhand_governor_gurmeet_singh_award.jpeg",
    category: "felicitation",
    eventGroup: "uttarakhand_governor",
    eventGroup_hi: "उत्तराखंड राजभवन व अमर उजाला",
    caption: "अमर उजाला ज्योतिष महाकुम्भ 2026 में उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा मंच पर डॉ. पूजा अवस्थी को विशेष सम्मान व शील्ड अर्पण।",
    caption_en: "Felicitation of Dr. Pooja Awasthi on stage by Hon. Governor of Uttarakhand, Lt. Gen. Gurmeet Singh at Jyotish Mahakumbh 2026.",
    event: "Honoured by Lt. Gen. Gurmeet Singh, Hon. Governor of Uttarakhand",
    event_hi: "उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा मंच सम्मान",
    dignitaries: "ले. ज. गुरमीत सिंह (पीवीएसएम, यूवाईएसएम, एवीएसएम, वीएसएम - माननीय राज्यपाल उत्तराखंड)",
    venue: "ग्राफिक एरा विश्वविद्यालय प्रेक्षागृह, देहरादून",
    alt: "Hon. Governor of Uttarakhand Lt. Gen. Gurmeet Singh honoring Dr. Pooja Awasthi"
  },
  {
    id: "gov-4",
    filename: "अमर उजाला ज्योतिष महाकुम्भ मै उत्तराखंड के माननीय राजयपाल ले ज गुरुमीत सिंह द्वारा सम्मानित-1.jpeg",
    imageUrl: "/assets/awards/uttarakhand_governor_gurmeet_singh_award.jpeg",
    category: "felicitation",
    eventGroup: "uttarakhand_governor",
    eventGroup_hi: "उत्तराखंड राजभवन व अमर उजाला",
    caption: "माननीय राज्यपाल ले. ज. गुरमीत सिंह द्वारा डॉ. पूजा अवस्थी को शॉल एवं सम्मान पत्र भेंट।",
    caption_en: "Presentation of ceremonial shawl and award plaque by Hon. Governor.",
    event: "Governor's Award Plaque & Ceremonial Shawl Presentation",
    event_hi: "राज्यपाल महोदय द्वारा शॉल व सम्मान पत्र अर्पण",
    dignitaries: "ले. ज. गुरमीत सिंह (राज्यपाल उत्तराखंड)",
    venue: "ग्राफिक एरा विश्वविद्यालय, देहरादून",
    alt: "Governor Gurmeet Singh handing award plaque to Dr. Pooja Awasthi"
  }
];
