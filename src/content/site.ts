/**
 * Central editable content for Masjid Noor Luton.
 */

export const site = {
  name: "Masjid Noor",
  tagline: "A place of light, learning, and community",
  description:
    "Masjid Noor Luton welcomes everyone seeking prayer, knowledge, and belonging. Join us for daily salah, weekend programmes, and community gatherings at 20 Cromwell Road.",
  url: "https://masjidnoor.example",

  contact: {
    email: "info@masjidnoor.example",
    phone: "+441582414031",
    phoneDisplay: "01582 414031",
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
  },

  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  hero: {
    kicker: "Luton",
    headline: "A house of light for Luton",
    supporting:
      "Daily salah, thoughtful learning, and a warm welcome for every visitor at Masjid Noor.",
    primaryCta: { label: "Find us", href: "#location" },
    secondaryCta: { label: "Explore programmes", href: "#courses" },
    slides: [
      {
        src: "https://9m0we4kepg.ufs.sh/f/XedH45ZPiuVnXAHSwlZPiuVneYANyO7bqtIa9pR4mLQCzjSJ",
        alt: "Exterior of Masjid Noor on Cromwell Road, Luton",
      },
      {
        src: "https://9m0we4kepg.ufs.sh/f/XedH45ZPiuVn4sqCumJzPnXJcQ0rYsbmfp34OAh6vM9l8F7a",
        alt: "Prayer hall inside Masjid Noor",
      },
    ],
  },

  about: {
    title: "Our mission",
    lead: "To nurture faith, knowledge, and neighbourliness under one roof.",
    body: "Masjid Noor exists to make worship accessible, learning practical, and community life welcoming. We serve families, students, and neighbours of every background who seek a peaceful place to pray and grow.",
    values: [
      {
        title: "Worship",
        description:
          "A calm, well-kept space for the five daily prayers and Jumuʿah.",
      },
      {
        title: "Learning",
        description:
          "Structured programmes for children, youth, and adults — from Qur’an to everyday practice.",
      },
      {
        title: "Community",
        description:
          "Gatherings, support, and hospitality that strengthen bonds beyond the prayer hall.",
      },
    ],
  },

  courses: {
    title: "Courses & programmes",
    lead: "Learning for every stage of life — open enrolment where noted.",
    items: [
      {
        id: "quran-children",
        title: "Qur’an for children",
        audience: "Ages 5–12",
        schedule: "Weekends — mornings",
        description:
          "Tajwīd foundations, memorisation support, and age-appropriate manners of recitation in a calm classroom setting.",
        body: [
          "This weekend class helps children build a confident, careful relationship with the Qur’an. Lessons move at a steady pace so each child can strengthen pronunciation, short memorisation, and the manners of recitation.",
          "Parents receive a clear timetable and can speak with teachers about progress. Places are limited so the classroom stays calm and well supervised.",
        ],
        highlights: [
          "Tajwīd foundations and clear recitation",
          "Memorisation support suited to each child’s pace",
          "Adab of the Qur’an in a small weekend class",
        ],
        cta: { label: "Enquire to enrol", href: "/#contact" },
        status: "open" as const,
      },
      {
        id: "adult-fundamentals",
        title: "Adult fundamentals",
        audience: "Adults",
        schedule: "Weekday evenings",
        description:
          "Core beliefs, prayer essentials, and everyday guidance for new Muslims and those returning to study.",
        body: [
          "Adult fundamentals is a practical evening class covering the essentials of faith and worship. It is designed for new Muslims and for adults who want a clear, unhurried space to rebuild their knowledge.",
          "Sessions focus on what you can use immediately: the meaning of the shahadah, how to pray with understanding, and everyday questions that arise at home, work, and in the mosque.",
        ],
        highlights: [
          "Core beliefs explained with clarity",
          "Prayer essentials and common questions",
          "A welcoming class for new and returning students",
        ],
        cta: { label: "Enquire to enrol", href: "/#contact" },
        status: "open" as const,
      },
      {
        id: "youth-circle",
        title: "Youth circle",
        audience: "Ages 13–18",
        schedule: "Fortnightly — evenings",
        description:
          "Discussion, mentorship, and practical faith for teenagers navigating school, identity, and community life.",
        body: [
          "The youth circle gives teenagers a regular place to talk, learn, and be taken seriously. Evenings mix short teaching with open discussion so young people can bring the questions they are already carrying from school and daily life.",
          "Mentors keep the tone respectful and practical. The aim is a confident Muslim identity that sits comfortably with study, friendship, and service in Luton.",
        ],
        highlights: [
          "Fortnightly evenings with discussion and mentorship",
          "Space for questions about faith, school, and identity",
          "A peer group rooted in the mosque community",
        ],
        cta: { label: "Register interest", href: "/#contact" },
        status: "open" as const,
      },
      {
        id: "arabic-intro",
        title: "Arabic for beginners",
        audience: "Adults & older teens",
        schedule: "Termly — evenings",
        description:
          "Alphabet, reading fluency, and vocabulary to support Qur’an study. Term dates announced seasonally.",
        body: [
          "Arabic for beginners starts from the alphabet and builds towards comfortable reading. The class is aimed at adults and older teens who want enough Arabic to support Qur’an study, not a full academic course.",
          "Term dates are announced seasonally. When a term is full, new students are added to the waitlist and contacted for the next available group.",
        ],
        highlights: [
          "Alphabet, vowels, and joining letters",
          "Reading fluency for Qur’an support",
          "Core vocabulary for study and worship",
        ],
        cta: { label: "Join the waitlist", href: "/#contact" },
        status: "waitlist" as const,
      },
    ],
  },

  facilities: {
    title: "Facilities & services",
    lead: "Spaces and support designed for worshippers of all ages.",
    items: [
      {
        title: "Prayer halls",
        description:
          "Dedicated areas for brothers and sisters, maintained for quiet focus throughout the day.",
      },
      {
        title: "Wudu facilities",
        description:
          "Clean ablution areas with step-free access where available. Ask on arrival if you need assistance.",
      },
      {
        title: "Classrooms",
        description:
          "Rooms for children’s Qur’an classes, adult study circles, and weekend programmes.",
      },
      {
        title: "Community space",
        description:
          "A gathering area for light hospitality after events and volunteer coordination.",
      },
    ],
  },

  /**
   * Sample community voices for layout. Replace with permissioned, attributed
   * testimonials from real congregants before publishing.
   */
  testimonials: {
    title: "From our community",
    lead: "Voices from people who pray, learn, and serve here.",
    items: [
      {
        quote:
          "The Friday congregation feels calm and organised. New visitors are greeted properly, which made settling in much easier for our family.",
        name: "A. Rahman",
        role: "Congregant — sample quote",
      },
      {
        quote:
          "Our children look forward to weekend class. Teachers are patient, and the timetable is clear for working parents.",
        name: "S. Khan",
        role: "Parent — sample quote",
      },
      {
        quote:
          "As a new Muslim, the fundamentals course answered questions I was nervous to ask. I finally felt I had a place to learn at my own pace.",
        name: "J. Williams",
        role: "Student — sample quote",
      },
    ],
  },

  support: {
    title: "Support the mosque",
    lead: "Your contributions keep the lights on, classes running, and the doors open.",
    body: "Regular donations and one-off gifts fund utilities, maintenance, teaching materials, and community programmes. Replace bank details below with verified account information before publishing.",
    methods: [
      {
        title: "Bank transfer",
        detail:
          "Account name: [Mosque charity name] · Sort code: [00-00-00] · Account: [00000000]",
      },
      {
        title: "In person",
        detail:
          "Donation points are available on site. Ask a steward if you need a receipt.",
      },
    ],
    cta: { label: "Contact about giving", href: "#contact" },
  },

  contactSection: {
    title: "Contact us",
    lead: "Call, email, or follow the official channel for mosque updates.",
  },
} as const;

export type CourseStatus = (typeof site.courses.items)[number]["status"];
export type Course = (typeof site.courses.items)[number];
