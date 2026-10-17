export interface CoursePackage {
  id: string;
  title: string;
  category: "car" | "bike" | "refresher" | "license";
  badge?: string;
  popular?: boolean;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  sessions: string;
  vehicle: string;
  timing: string;
  inclusions: string[];
  /** Set to true when owner provides confirmed exact rupee price */
  priceConfirmed: boolean;
  price?: number;
  priceDisplay?: string;
}

export interface AdditionalService {
  id: string;
  title: string;
  shortDescription: string;
  details: string[];
  ctaLabel: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  imageUrl: string;
  aspect: "landscape" | "portrait" | "square";
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const SITE_CONFIG = {
  name: "Sridhar Driving School",
  legalName: "Sridhar Driving School",
  shortName: "SDS",
  tagline: "Learn to Drive. Build Confidence for Every Journey.",
  description:
    "Professional driving lessons, two-wheeler training, and RTO licence assistance in Austin Town, Bengaluru. Patient 1-on-1 instruction focused on defensive driving and real-world urban navigation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sridhardrivingschool.in",
  location: {
    streetAddress: "Austin Town, Neelasandra Main Road",
    neighborhood: "Austin Town",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560047",
    country: "India",
    fullAddress: "Austin Town, Neelasandra, Bengaluru, Karnataka 560047, India",
    landmark: "Near Austin Town Ground / Neelasandra Post",
    geo: {
      latitude: 12.9615,
      longitude: 77.6163,
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Austin+Town+Bengaluru+Karnataka+560047",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=Austin%20Town%20Bengaluru%20Karnataka%20560047&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98450 12345",
    phoneClean: "919845012345",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919845012345",
    email: process.env.OWNER_EMAIL || "info@sridhardrivingschool.in",
    workingHours: {
      weekdays: "6:00 AM – 7:30 PM",
      saturdays: "6:00 AM – 7:30 PM",
      sundays: "7:00 AM – 1:00 PM",
      summary: "Monday – Saturday: 6:00 AM – 7:30 PM | Sunday: 7:00 AM – 1:00 PM",
    },
  },
  whatsappPrefill: {
    general:
      "Hello Sridhar Driving School, I would like to enquire about driving training and courses at your Austin Town branch.",
    course: (courseName: string) =>
      `Hello Sridhar Driving School, I am interested in enquiring about the "${courseName}" at your Austin Town branch. Please share the batch timings and details.`,
    enquirySummary: (name: string, course: string, phone: string) =>
      `Hello Sridhar Driving School, my name is ${name} (Phone: ${phone}). I submitted an enquiry for "${course}" through your website and would like to confirm batch availability.`,
  },
  announcement: {
    enabled: false,
    message: "New batches starting this week in Austin Town, Bengaluru. Morning & evening slots available.",
    ctaText: "Enquire Now",
    ctaLink: "#enquiry",
  },
  trustPillars: [
    {
      title: "1-on-1 Dedicated Guidance",
      description:
        "Every session is strictly one student per instructor. You receive focused, patient corrections without sharing behind-the-wheel time.",
      icon: "UserCheck",
    },
    {
      title: "Dual-Control Safety Fleet",
      description:
        "Training cars equipped with government-standard instructor dual brake and clutch controls for complete peace of mind while learning.",
      icon: "ShieldCheck",
    },
    {
      title: "Bengaluru Road Mastery",
      description:
        "Practical training covering bumper-to-bumper traffic, flyover inclines, reverse parking, signal discipline, and tight alley navigation.",
      icon: "Compass",
    },
    {
      title: "RTO Licence Assistance",
      description:
        "Step-by-step guidance for learner licence (LLR) and permanent driving licence (DL) application, documentation, and RTO test-track drill.",
      icon: "FileCheck2",
    },
  ],
  courses: [
    {
      id: "four-wheeler-comprehensive",
      title: "Complete Car Driving Course (4-Wheeler)",
      category: "car",
      badge: "Most Popular",
      popular: true,
      shortDescription:
        "Designed for complete beginners. Master clutch-brake control, steering balance, gear shifts, parking techniques, and Bengaluru city traffic.",
      fullDescription:
        "Our flagship training program takes you from zero driving knowledge to a safe, independent motorist. Learn vehicle mechanics, dashboard warning lights, clutch balancing without engine stall, reverse parking, incline starts, and defensive driving.",
      duration: "15 to 20 Days",
      sessions: "Daily 1-Hour Practical Sessions",
      vehicle: "Dual-Control Hatchback / Sedan",
      timing: "Flexible slots (6:00 AM – 7:30 PM)",
      inclusions: [
        "1-on-1 instructor guidance in dual-control vehicle",
        "Clutch control, biting-point mastery & gear changes",
        "Reverse, parallel, and angle parking training",
        "Flyover slope stop-and-go practice",
        "Highway & peak-hour traffic navigation",
        "RTO driving test route orientation",
      ],
      priceConfirmed: false,
      priceDisplay: "Enquire for Fee Details",
    },
    {
      id: "refresher-confidence-course",
      title: "Confidence & Refresher Driving Course",
      category: "refresher",
      badge: "For Licence Holders",
      popular: false,
      shortDescription:
        "Have a driving licence but feel hesitant in Bangalore traffic? Rebuild your road confidence, master tight lane clearance, and conquer flyovers.",
      fullDescription:
        "A focused refresher tailored for individuals who already hold a driving licence but haven't driven regularly. We customise each session around your specific pain points—night driving, peak-hour bottlenecks, hill starts, or parallel parking in tight spaces.",
      duration: "7 to 10 Days",
      sessions: "Customised 1-Hour Practical Sessions",
      vehicle: "School Car or Own Vehicle Training Option",
      timing: "Morning or Evening Peak Slots",
      inclusions: [
        "Personalised assessment of current driving comfort",
        "Intensive peak-hour traffic practice (MG Road / Indiranagar / Koramangala roads)",
        "Overcoming hesitation and fear of stalling",
        "Tight U-turns, lane discipline, and mirror calibration",
        "Night driving practice session",
        "Optional transition to your personal car with instructor guidance",
      ],
      priceConfirmed: false,
      priceDisplay: "Enquire for Fee Details",
    },
    {
      id: "two-wheeler-training",
      title: "Two-Wheeler Training (Scooter & Motorcycle)",
      category: "bike",
      badge: "Beginner Friendly",
      popular: false,
      shortDescription:
        "Learn motorcycle or gearless scooter driving with dedicated balance drills, brake moderation, slow-speed maneuvering, and road etiquette.",
      fullDescription:
        "Step-by-step two-wheeler instruction focusing on safe balance, clutch-throttle coordination on geared motorcycles, and confident handling of automatic gearless scooters in urban traffic.",
      duration: "10 to 12 Days",
      sessions: "45-Minute Daily Dedicated Drills",
      vehicle: "Geared Motorcycle or Gearless Scooter",
      timing: "Early Morning & Afternoon Slots",
      inclusions: [
        "Low-speed balance and figure-8 maneuver mastery",
        "Progressive brake modulation (front & rear balance)",
        "Road safety signals, defensive posture, and blind spots",
        "Starting on inclines without rolling back",
        "Pillion rider balance and emergency stops",
      ],
      priceConfirmed: false,
      priceDisplay: "Enquire for Fee Details",
    },
    {
      id: "license-consultation-assistance",
      title: "RTO Licence Assistance & Test Preparation",
      category: "license",
      badge: "Advisory & Guidance",
      popular: false,
      shortDescription:
        "Complete RTO guidance for Learner Licence (LLR) and Permanent Driving Licence (DL) test-track preparation and official procedural consultation.",
      fullDescription:
        "We guide candidates through official Karnataka Transport Department procedures. Includes document checklist assistance, Sarathi portal slot booking support, and thorough mock test runs replicating official RTO track layouts ('H' track and '8' track).",
      duration: "Consultation + Mock Test",
      sessions: "Full RTO Track Simulation Session",
      vehicle: "RTO-Compliant Training Vehicle",
      timing: "Synchronised with RTO slot booking",
      inclusions: [
        "LLR application guidance & required documentation review",
        "Road signs and mandatory traffic rules briefing",
        "Sarathi Parivahan portal appointment scheduling support",
        "Pre-test vehicle check and trial runs on 'H' and '8' track simulations",
        "RTO inspector evaluation criteria explanation",
        "Note: Final driving licences are granted solely by Karnataka RTO",
      ],
      priceConfirmed: false,
      priceDisplay: "Enquire for Fee Details",
    },
  ] as CoursePackage[],
  additionalServices: [
    {
      id: "personal-car-familiarisation",
      title: "Own-Car Familiarisation & Handover Practice",
      shortDescription:
        "Transition smoothly from our training car to your personal vehicle. Our instructor accompanies you to calibrate clutch feel, car dimensions, and home parking entry.",
      details: [
        "Vehicle dimension awareness (bonnet and boot perception)",
        "Home gate and apartment basement ramp parking drills",
        "Clutch bite and accelerator feel adjustments for your specific model",
      ],
      ctaLabel: "Enquire About Own-Car Practice",
    },
    {
      id: "highway-flyover-drill",
      title: "Highway & Elevated Corridor Driving Drills",
      shortDescription:
        "Specialised training for high-speed cruising, lane switching etiquette, overtaking safety, and toll gate entry on Bengaluru expressways and bypass roads.",
      details: [
        "Maintaining safe following distance at 60–80 km/h",
        "Correct use of indicators, blind spot head checks, and mirror adjustments",
        "Flyover slope management and emergency lane safety",
      ],
      ctaLabel: "Enquire About Highway Drills",
    },
    {
      id: "night-rain-driving",
      title: "Night-Time & Wet-Weather Driving Drills",
      shortDescription:
        "Techniques for handling glare from oncoming high beams, wet asphalt braking distances, defogging windshields, and navigating dimly lit roads.",
      details: [
        "Headlight beam switching (low vs high beam etiquette)",
        "Windshield defogger and wiper speed management",
        "Hazard identification in low visibility",
      ],
      ctaLabel: "Enquire About Night Sessions",
    },
    {
      id: "rto-endorsement-consultation",
      title: "Licence Renewal & Endorsement Consultation",
      shortDescription:
        "Guidance for address change, commercial badge endorsement, expired licence renewal, or international driving permit (IDP) process support.",
      details: [
        "Clarification on applicable Karnataka RTO rules and paperwork",
        "Medical certificate Form 1-A guidance for senior motorists",
        "Procedural assistance for name/address updates on Parivahan",
      ],
      ctaLabel: "Enquire About Licence Services",
    },
  ] as AdditionalService[],
  gallery: [
    {
      id: "g1",
      title: "Modern Training Car Fleet",
      category: "Fleet & Safety",
      caption: "Dual-control training cars maintained to strict safety standards for city learning.",
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
    },
    {
      id: "g2",
      title: "Steering & Dashboard Mastery",
      category: "Instruction",
      caption: "Step-by-step orientation of automotive controls, mirror calibration, and pedal sensitivity.",
      imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
    },
    {
      id: "g3",
      title: "City Traffic Navigation Practice",
      category: "Real Driving",
      caption: "Real-world experience navigating urban intersections, roundabouts, and busy streets.",
      imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
    },
    {
      id: "g4",
      title: "1-on-1 Patient Coaching",
      category: "Guidance",
      caption: "Dedicated, supportive instructor guidance to help students build natural road confidence.",
      imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
    },
    {
      id: "g5",
      title: "Reverse & Parallel Parking Drills",
      category: "Skills",
      caption: "Clear marker techniques to master parking in tight residential and commercial slots.",
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
    },
    {
      id: "g6",
      title: "Two-Wheeler Balance & Road Craft",
      category: "Two-Wheeler",
      caption: "Progressive balance training and throttle moderation for safe city riding.",
      imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
    },
  ] as GalleryItem[],
  faqs: [
    {
      question: "What driving courses do you offer at Sridhar Driving School?",
      answer:
        "We offer comprehensive 4-wheeler (car) training for complete beginners, refresher and confidence-building courses for existing licence holders, two-wheeler training (geared motorcycles and gearless scooters), and RTO driving test preparation and guidance.",
      category: "Courses",
    },
    {
      question: "How do I enquire about course fees and batch timings?",
      answer:
        "You can send an enquiry using our website form below, call us directly at our Austin Town contact number, or click the 'Enquire on WhatsApp' button. We will promptly share the current batch openings, slot timings, and detailed fee structure based on your specific vehicle and training requirements.",
      category: "Fees & Enrolment",
    },
    {
      question: "How long does the complete car driving course take?",
      answer:
        "Our standard beginner 4-wheeler course typically spans 15 to 20 days with daily 1-hour practical behind-the-wheel sessions. Weekend-only batches and customised refresher schedules are also available upon request.",
      category: "Schedule",
    },
    {
      question: "What are your training hours during the week?",
      answer:
        "We operate flexible batches to accommodate college students, working professionals, and homemakers. Our morning slots run from 6:00 AM to 10:00 AM, and afternoon/evening slots run from 3:30 PM to 7:30 PM, Monday through Saturday. Sunday morning sessions are available from 7:00 AM to 1:00 PM.",
      category: "Schedule",
    },
    {
      question: "Do you provide assistance with the RTO Driving Licence process?",
      answer:
        "Yes. We guide you through the Karnataka Transport Department (Sarathi Parivahan) portal requirements, document verification for Learner Licence (LLR) and Permanent Driving Licence (DL), and conduct thorough mock drills for the official RTO track driving test. Please note that the final grant of any licence is decided solely by the Motor Vehicle Inspectors at the competent Regional Transport Office.",
      category: "Licence & RTO",
    },
    {
      question: "Will I learn in a dual-control safety vehicle?",
      answer:
        "Yes. All our training cars are fitted with RTO-approved dual-control safety pedal systems (instructor brake and clutch), ensuring complete protection and safety during your learning phase on public roads.",
      category: "Safety",
    },
    {
      question: "Where are you located in Austin Town, Bengaluru?",
      answer:
        "We are located in Austin Town, Neelasandra, Bengaluru (Karnataka 560047), easily accessible from Victoria Layout, Richmond Town, Shanthi Nagar, Ulsoor, and surrounding central Bengaluru neighbourhoods. Please refer to the location section on this page for directions and map navigation.",
      category: "Location",
    },
    {
      question: "Can I practice in my own car after completing basic training?",
      answer:
        "Yes. We offer an 'Own-Car Familiarisation' module where an experienced instructor accompanies you in your personal car to help you get used to its dimensions, clutch sensitivity, and parking in your building basement or street.",
      category: "Courses",
    },
  ] as FaqItem[],
};
