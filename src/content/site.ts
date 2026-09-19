/**
 * Central editable content for Jamiatus Salihat at Masjid Noor Luton.
 */

export type CourseStatus = "open" | "enquire";

export type Course = {
  id: string;
  title: string;
  audience: string;
  schedule: string;
  description: string;
  body: string[];
  highlights: string[];
  cta: { label: string; href: string };
  status: CourseStatus;
  applyUrl?: string;
  forWhom?: { intro: string; items: string[] };
  outcomes?: string[];
  requirements?: string[];
  admissions?: string[];
  format?: string;
  fees?: {
    summary: string;
    items: { label: string; amount: string }[];
    notes?: string[];
  };
  curriculum?: { year: string; lessons: string[] }[];
};

export const site = {
  name: "Jamiatus Salihat",
  mosqueName: "Masjid Noor",
  tagline: "A traditional Islamic seminary for women",
  description:
    "Jamiatus Salihat is a traditional Islamic seminary for women at Masjid Noor, Luton. Study full-time to become an Alimah so that you can practise and serve the din with excellence.",
  url: "https://masjidnoor.example",
  logo: {
    src: "https://9m0we4kepg.ufs.sh/f/XedH45ZPiuVn1q1glg6G0cOWudmkS18UPb7jsNTYFLA3ol9v",
    alt: "Jāmiatus Sālihāt",
  },

  contact: {
    email: "masjidnooralimiyyah@outlook.com",
    phone: "+447931525799",
    phoneDisplay: "07931 525 799",
    department: "Alimiyyah Girls Department",
    addressLines: [
      "Masjid Noor",
      "20 Cromwell Road",
      "Luton",
      "Bedfordshire",
      "LU3 1DN",
    ],
    mapsUrl:
      "https://maps.google.com/?q=Masjid+Noor+20+Cromwell+Road+Luton+LU3+1DN",
    mapsEmbedQuery: "Masjid Noor, 20 Cromwell Road, Luton LU3 1DN",
    whatsappChannelUrl: "https://whatsapp.com/channel/0029Vb7wXpx17EmrrdOlvO2R",
    whatsappChannelLabel: "Join our WhatsApp channel",
    applyUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfqMT9wJe-BBcen9GMnxvvO2CJh1gpLWuTEEA83ttqv_iw-_w/viewform?usp=dialog",
    applyLabel: "Apply online",
  },

  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  hero: {
    kicker: "Masjid Noor · Luton",
    headline: "Jamiatus Salihat",
    supporting:
      "Study full-time to become an Alimah so that you can practice and serve the din with excellence. Jamiatus Salihat is a traditional Islamic Seminary for women who have finished compulsory education. Jamiatus Salihat was established in 2021 and has since been serving the community by offering a range of educational courses for sisters.",
    primaryCta: { label: "Find Masjid Noor", href: "#location" },
    secondaryCta: { label: "Explore courses", href: "#courses" },
    slides: [
      {
        src: "https://9m0we4kepg.ufs.sh/f/XedH45ZPiuVnn7CP3u4iMNUfCLlbTR3Z5E760VpJsxAFHtD4",
        alt: "Islamic texts arranged on a study bookshelf",
      },
      {
        src: "https://9m0we4kepg.ufs.sh/f/XedH45ZPiuVnsfPtoIa8RmfQpnqraWv041kt3HyU2MPe7SXs",
        alt: "A mushaf of the Qur'an on a wooden stand",
      },
    ],
  },

  about: {
    title: "About us",
    lead: "Nurturing knowledge, character, and a lifelong commitment to serving Islam and the wider community.",
    body: [
      "Recognising the growing need for accessible and authentic Islamic education for women in our community, this programme was established in September 2021. Jam'iatus Sālihāt is an educational institute dedicated to providing full-time 'Ālimah classes for sisters, nurturing knowledge, character, and a lifelong commitment to serving Islam and the wider community.",
      "Women play a fundamental role in the Muslim family, which serves as the cornerstone of a stable society. Throughout history, women have been instrumental in the development, propagation, and preservation of our beautiful faith. As the nurturers of future generations and pillars of the community, Jam'iatus Sālihāt supports women in embracing their roles as students, professionals, parents, and active members of society.",
      "From the loyalty and wisdom of Sayyidah Khadija (RA) to the sacrifices of Sayyidah Sumayya (RA), from the scholarly contributions of Sayyidah ’Aisha (RA) to the modesty and motherhood of Sayyidah Fatima (RA), history is filled with remarkable Mu’minat who have excelled in knowledge and played a vital role in empowering future generations. Jam'iatus Sālihāt recognises the differences that women make to society.",
    ],
    hadiths: [
      {
        attribution: "As the Messenger of Allah ﷺ said:",
        arabic: "النساء شقائق الرجال",
        translation: "Women are the twin halves of Men. (Tirmidhi :113)",
      },
      {
        attribution: "",
        arabic: "الأم مدرسة أذا أعددتها أعددت شعبا طيب الأعراق",
        translation:
          "A mother is like a school, if you prepare her, then you have prepared a whole nation.",
      },
    ],
    highlights: [
      {
        title: "Experienced scholars",
        description:
          "At Masjid Noor / Jam'iatus Sālihāt, we have a dedicated team of experienced Ulamaa and Aalimat who have spent years teaching the sacred Islamic sciences.",
      },
      {
        title: "Open to all sisters",
        description:
          "We welcome women of all ages and backgrounds to engage in our educational activities.",
      },
      {
        title: "Ahl-ul-Sunnah wal-Jama'ah",
        description:
          "Rooted in the Ahl-ul-Sunnah wal-Jama'ah theological tradition, our institute seeks to explore its rich heritage.",
      },
      {
        title: "Faith and development",
        description:
          "We emphasize not only the foundational importance of faith in theological reasoning but also the significance of spiritual and personal development alongside faith.",
      },
    ],
    vision: {
      title: "Vision",
      paragraphs: [
        "Our aim is not simply to produce graduates with academic knowledge, but to nurture women who embody the teachings of Islam in every aspect of their lives. The programme seeks to develop students who possess sincerity (ikhlāṣ), excellent character (akhlāq), humility, wisdom, and a lifelong commitment to learning and serving others.",
        "Students are encouraged to become ambassadors of Islam within their homes and communities—individuals who preserve and convey the teachings of the Qur'an and Sunnah with wisdom, compassion, and integrity.",
      ],
    },
    mission: {
      title: "Our mission",
      paragraphs: [
        "To have high expectations for all within our community to ensure that we demonstrate the very best standards of conduct, moral purpose and integrity. To instil within all the value of Islam and the characteristics of the final prophet Muhammad (peace be upon him).",
        "To deliver a high quality teaching and learning experience for our pupils that promotes high standards and progress for all; To promote a love of education for all learners and to equip them with the tools to take ownership of their own learning. To ensure that our pupils feel safe and secure and enjoy coming to school.",
        "To promote children’s self-esteem, their rights and responsibilities. To create a welcoming atmosphere in school where children, staff, parents and visitors feel valued.",
      ],
    },
    values: [
      {
        title: "Tawhid",
        description:
          "We believe there is none worthy of worship but Allah who is the most merciful and kind.",
      },
      {
        title: "The final messenger",
        description:
          "We believe in Muhammad (peace be upon him) to be the final messenger of Allah almighty who sent him with the truth and made him a mercy for all people.",
      },
      {
        title: "Prophetic character",
        description:
          "We believe the prophet (peace be upon him) to be the ideal role model and aspire to his characteristics such respect, peace, love, tolerance, honesty, integrity, equality, equity, patience, forgiveness, self and social responsibility.",
      },
    ],
  },

  courses: {
    title: "Courses",
    lead: "The ʿĀlimiyyah programme is our primary course. Other classes are available — please contact us for details.",
    items: [
      {
        id: "alimiyyah",
        title: "ʿĀlimiyyah Course",
        audience: "Sisters aged 16+",
        schedule: "Five years · onsite only",
        description:
          "A structured Darse Nizami curriculum covering the core Islamic sciences, from Arabic and theology through to advanced Tafsīr, Hadīth, and Fiqh.",
        body: [
          "The ‘Ālimiyyah Course at Jamiatus Salihat is a version of the traditional Darse Nizami curriculum that has been successfully taught for generations. It remains a highly respected system of learning in Islamic educational institutions worldwide.",
          "Designed to provide a comprehensive and in-depth understanding of Islam, this course systematically covers key Islamic sciences through a structured selection of core sacred texts, classical works, and graded textbooks.",
          "The intensive five-year program includes an in-depth study of various disciplines, such as Islamic Theology, Arabic Rhetoric, Sīrah, and Tazkiyah. In the final years, students engage in advanced studies of core subjects, including Qur’anic Tafsīr, Hadīth, and Fiqh, along with their principles; Uṣūl al-Tafsīr, Uṣūl al-Hadīth, and Uṣūl al-Fiqh.",
          "The pursuit of sacred knowledge is a journey of transformation. At Jam'iatus Sālihāt, we strive to provide an environment that nurtures intellectual excellence, spiritual growth, and personal development, enabling every student to become a source of benefit for herself, her family, and the Ummah.",
        ],
        highlights: [
          "Traditional Darse Nizami pathway over five years",
          "Arabic, Fiqh, ʿAqīdah, Tafsīr, Hadith, and their uṣūl",
          "Taught onsite at Masjid Noor by experienced Ulamaa and Aalimat",
          "Open to sisters from school leavers to mothers and professionals",
        ],
        cta: { label: "Apply online", href: "/#contact" },
        status: "open" as const,
        applyUrl:
          "https://docs.google.com/forms/d/e/1FAIpQLSfqMT9wJe-BBcen9GMnxvvO2CJh1gpLWuTEEA83ttqv_iw-_w/viewform?usp=dialog",
        format: "Onsite only at Masjid Noor, Luton. Five-year weekday programme.",
        forWhom: {
          intro:
            "The Jam'iatus Sālihāt 'Ālimah Programme is designed for sisters who sincerely aspire to deepen their understanding of Islam and develop a strong foundation in the Islamic sciences. Whether your goal is personal development, serving the community, or pursuing further Islamic studies, this course provides a structured pathway to acquiring authentic knowledge.",
          items: [
            "School leavers who wish to dedicate themselves to studying the sacred sciences before pursuing higher education or employment.",
            "University students seeking to strengthen their Islamic knowledge alongside their academic studies.",
            "Professionals who desire a deeper understanding of their faith and wish to apply Islamic principles in their personal and professional lives.",
            "Mothers and homemakers who want to nurture their families upon the teachings of the Qur'an and Sunnah, recognising that the home is the first place of learning for every child.",
            "Reverts to Islam who wish to build a solid and authentic foundation in Islamic beliefs, worship, and practice.",
            "Those aspiring to serve the community as teachers, mentors, speakers, or contributors to Islamic educational initiatives.",
            "Any sister who seeks closeness to Allah ﷻ through the pursuit of beneficial knowledge and the cultivation of righteous character.",
          ],
        },
        outcomes: [
          "Develop a sound understanding of the Qur'an and its sciences.",
          "Study the authentic Sunnah and the methodology of the scholars.",
          "Gain a strong grounding in Fiqh, Aqīdah, Tafsīr, Hadith, Arabic language, and other core Islamic sciences.",
          "Learn how to research, analyse, and understand classical Islamic texts.",
          "Strengthen their worship and relationship with Allah ﷻ.",
          "Refine their manners, etiquette, and Islamic character.",
          "Build confidence in answering everyday Islamic questions with knowledge and wisdom.",
          "Develop the ability to positively influence their families and wider community.",
          "Cultivate a lifelong love for seeking knowledge and acting upon it.",
        ],
        requirements: [
          "Female applicants aged 16 years or above.",
          "A genuine desire to seek sacred knowledge for the sake of Allah ﷻ.",
          "Ability to read the Qur'an with basic fluency. Prior knowledge of Arabic is not required.",
          "A good standard of spoken and written English, as the course is delivered primarily in English.",
          "Completion of secondary education (or an equivalent level of education).",
          "Good Islamic character (Akhlaq), manners, and a willingness to uphold the etiquette of seeking sacred knowledge.",
          "Commitment to attend classes punctually, complete assignments, and participate actively throughout the duration of the programme.",
        ],
        admissions: [
          "Complete an application form.",
          "Attend an interview with a member of the admissions team.",
          "Complete a short assessment, which may include Qur'an recitation and Tajwīd; basic Islamic knowledge (beliefs, purification, prayer, and essential Islamic practices); and English reading and writing, where necessary.",
          "Provide one character reference from an Imam, teacher, or another suitable referee.",
        ],
        fees: {
          summary: "£1,900–£2,100 / year",
          items: [
            { label: "Years 1 & 2", amount: "£1,900 / year" },
            { label: "Years 3, 4 & 5", amount: "£2,100 / year" },
          ],
          notes: [
            "ʿĀlimiyyah annual fees for 1448AH / 2026–2027.",
            "A £50 admin fee is payable on application.",
          ],
        },
        curriculum: [
          {
            year: "Year 1 · Ulaa",
            lessons: [
              "FSTU Arabic",
              "FSTU Arabic",
              "Nahw matn",
              "FSTU Sarf",
              "FSTU Sarf",
              "Quran/Tajwid",
              "ATF / Seerah",
              "Duroos",
            ],
          },
          {
            year: "Year 2 · Thaniyah",
            lessons: [
              "الصغرى في النحو",
              "الصغرى في التصريف",
              "Qasas",
              "Qudoori",
              "Qur'an trans",
              "Qur'an / Tajwid",
              "Zad at Talibin",
              "FSTU Arabic",
            ],
          },
          {
            year: "Year 3 · Thalithah",
            lessons: [
              "An Nahwul Wadih",
              "Mabadiul Usul",
              "Riyadus Salihin",
              "Qudoori",
              "Quran trans",
              "Quran/Tajwid",
              "Qasas 5",
              "Al Qiratur Rashidah",
            ],
          },
          {
            year: "Year 4 · Rabiah",
            lessons: [
              "Mishkat 1",
              "Mishkat 2",
              "Tafsir al Jalalayn",
              "Tafsir al Jalalayn",
              "Hidayah",
              "Usul al Shashi",
              "Aqeedah",
              "Athaar as Sunan",
              "Mustalahul Hadith",
              "Uloomul Quran",
              "Balagah",
            ],
          },
          {
            year: "Year 5 · Dawrah",
            lessons: [
              "Sahih al Bukhari",
              "Sahih al Bukhari",
              "Sahih Muslim",
              "Tirmidhi",
              "Abu Dawud",
              "Ibn Majah/Nasai",
              "Tirmidhi",
              "Sahih al Bukhari",
            ],
          },
        ],
      },
      {
        id: "islamic-essentials-weekdays",
        title: "Islamic Essentials · Weekdays",
        audience: "Sisters",
        schedule: "Weekdays",
        description:
          "Foundational classes in belief, worship, and everyday practice for sisters who want a clear grounding in the essentials of the din.",
        body: [
          "The weekday Islamic Essentials course is designed for sisters who want a structured introduction to the foundations of faith and practice.",
          "Please contact the Alimiyyah Girls Department for current timetables, entry details, and how to enrol. This is not our primary programme — places and term dates are confirmed directly with the office.",
        ],
        highlights: [
          "Weekday timetable",
          "Foundational Islamic knowledge",
          "Annual fee £480 for 2026/2027",
        ],
        cta: { label: "Contact for details", href: "/#contact" },
        status: "enquire" as const,
        fees: {
          summary: "£480 / year",
          items: [{ label: "Annual fee", amount: "£480" }],
          notes: ["Islamic Essentials fee for 2026/2027."],
        },
      },
      {
        id: "islamic-essentials-weekends",
        title: "Islamic Essentials · Weekends",
        audience: "Sisters",
        schedule: "Weekends",
        description:
          "The same essentials pathway on a weekend timetable for sisters balancing study, work, or family.",
        body: [
          "The weekend Islamic Essentials course offers foundational teaching for sisters who cannot attend on weekdays.",
          "Please contact the Alimiyyah Girls Department for current timetables, entry details, and how to enrol.",
        ],
        highlights: [
          "Weekend timetable",
          "Suitable alongside other studies or work",
          "Annual fee £480 for 2026/2027",
        ],
        cta: { label: "Contact for details", href: "/#contact" },
        status: "enquire" as const,
        fees: {
          summary: "£480 / year",
          items: [{ label: "Annual fee", amount: "£480" }],
          notes: ["Islamic Essentials fee for 2026/2027."],
        },
      },
      {
        id: "hifdh",
        title: "Hifdh Course",
        audience: "Sisters",
        schedule: "Please enquire",
        description:
          "A memorisation programme for sisters who wish to preserve the Qur'an with tajwīd and regular revision.",
        body: [
          "The Hifdh course supports sisters in memorising the Qur'an in a structured, supervised setting.",
          "Please contact the Alimiyyah Girls Department for current availability, assessment, and how to apply. This is not our primary programme.",
        ],
        highlights: [
          "Qur'an memorisation with supervision",
          "Tajwīd and revision support",
          "Annual fee £760 for 2026/2027",
        ],
        cta: { label: "Contact for details", href: "/#contact" },
        status: "enquire" as const,
        fees: {
          summary: "£760 / year",
          items: [{ label: "Annual fee", amount: "£760" }],
          notes: ["Hifdh class annual fee for 2026/2027."],
        },
      },
      {
        id: "arabic-language",
        title: "Arabic Language Course",
        audience: "Sisters",
        schedule: "Please enquire",
        description:
          "Arabic language study to support Qur'an, Hadith, and the wider Islamic sciences.",
        body: [
          "The Arabic language course helps sisters build the language skills needed to access the Qur'an and classical texts.",
          "Please contact the Alimiyyah Girls Department for current levels, timetables, and how to enrol. This is not our primary programme.",
        ],
        highlights: [
          "Arabic for sacred study",
          "Suitable as a standalone course",
          "Contact the office for current details",
        ],
        cta: { label: "Contact for details", href: "/#contact" },
        status: "enquire" as const,
      },
    ] satisfies Course[],
  },

  facilities: {
    title: "Learning at Masjid Noor",
    lead: "Jamiatus Salihat is based at Masjid Noor, with a dedicated team serving sisters of all ages and backgrounds.",
    items: [
      {
        title: "Women's seminary",
        description:
          "A dedicated educational institute for sisters who have finished compulsory education, welcoming women of all ages.",
      },
      {
        title: "Onsite teaching",
        description:
          "The ʿĀlimiyyah programme is taught onsite only, in a structured classroom environment at 20 Cromwell Road.",
      },
      {
        title: "Experienced teachers",
        description:
          "Ulamaa and Aalimat who have spent years teaching the sacred sciences, with mentoring described by students as spiritual parenting.",
      },
      {
        title: "Sisterhood",
        description:
          "A place of safety, healing, and nurturing — students speak of teachers and classmates as a lasting source of support.",
      },
    ],
  },

  testimonials: {
    title: "From our students",
    lead: "Voices from graduates and current students of Jamiatus Salihat.",
    items: [
      {
        quote:
          "If I was given the chance to relive this entire blessed experience, I wouldn't hesitate to take it. It has been the most spiritually enlightening journey that I'm eternally grateful to have been able to undertake. Jamiatus Salihat is more than a place of learning. It is a place of safety, healing, training and nurturing the soul with sisters, to help uplift and encourage good and guide through the bad, and spiritual parents who have transformed our lives through their mentoring, by gifting us with irreplaceable memories, stories and words of the greatest wisdom, inspired by our beloved Rasoolullah (saw).",
        name: "Graduate of 2025",
        role: "ʿĀlimiyyah",
      },
      {
        quote:
          "Asalaamu alaykum, if you have the love to seek knowledge then I would say inshallah this place will be your home, you learn something new everyday to pass on to your family and to implement into your life and to strengthen your relationship with Allah SWT. There's a lot of sacrifices in this journey and loads of reward but a blessing that I've received that's stood out the most and has given me so much happiness isn't only my peace or my benefited character but it's also my lovely 7 mothers (teachers) and 43 sisters.",
        name: "2nd year student",
        role: "ʿĀlimiyyah",
      },
      {
        quote:
          "Enrolling in the Alimiyyah weekend course at Masjid Noor alongside my academic studies has been a rewarding experience Alhamdulillah. Balancing both was initially a challenge, but the structured program, supportive teachers, and inspiring environment made it not only manageable but deeply fulfilling. One of the things I’ve enjoyed most is the sense of sisterhood within the class. Learning together, sharing knowledge, and growing in our faith has created bonds that will last a lifetime Inshaa Allah. The depth of Islamic knowledge I’ve gained from Tafsir and Hadith to Fiqh and Arabic has given me a stronger connection to my Iman and a clearer understanding of how to implement it in daily life. This program has not only enhanced my Islamic knowledge but also helped me develop discipline, time management, and a deeper appreciation for seeking knowledge. I highly recommend it to anyone looking to study the Deen while continuing their academic studies.",
        name: "Weekend Alimiyyah student",
        role: "ʿĀlimiyyah",
      },
    ],
  },

  support: {
    title: "Support the institute",
    lead: "Your contributions help keep classes running and the doors open for sisters seeking knowledge.",
    body: "Regular donations and one-off gifts support teaching, materials, and the running of Jamiatus Salihat at Masjid Noor. Please contact the office if you would like to give or need account details.",
    methods: [
      {
        title: "Speak to the office",
        detail:
          "Call the Alimiyyah Girls Department or email us and we will advise on the current ways to give.",
      },
      {
        title: "In person",
        detail:
          "Donation points are available on site at Masjid Noor. Ask a steward if you need a receipt.",
      },
    ],
    cta: { label: "Contact about giving", href: "#contact" },
  },

  contactSection: {
    title: "Contact us",
    lead: "Reach the Alimiyyah Girls Department at Masjid Noor, or apply online for the ʿĀlimiyyah programme.",
  },

  location: {
    title: "Find Masjid Noor",
    lead: "Jamiatus Salihat is based at Masjid Noor on Cromwell Road in Luton. Visitors are welcome — ask a steward on arrival if you need any help finding your way.",
  },
} as const;
