// src/data/services.js

export const services = [
  // 1. BBQ Dinner by the Sea
  {
    id: 1,
    code: "BBQ",
    title: "BBQ Dinner by the Sea",
    category: "Dining",
    shortDescription: "Premium BBQ dinner near the beach with fresh seafood and sunset atmosphere",
    fullDescription: "Enjoy a luxurious BBQ dinner right on the beach. Fresh seafood, premium meats, vegetarian options, and breathtaking sunset views over Pattaya Bay.",
    price: "from 1,500 THB",
    time: "18:00 - 22:00",
    duration: "2-3 hours",
    location: "Beach area",
    image: "	https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?w=600&h=400&fit=crop",
    icon: ""
  },

  // 2. SPA Relax Package
  {
    id: 2,
    code: "SPA",
    title: "SPA Relax Package",
    category: "Wellness",
    shortDescription: "Traditional Thai massage and aromatherapy for complete relaxation",
    fullDescription: "Rejuvenate with authentic Thai massage, herbal compress, and aromatherapy. 60 or 90 minutes sessions available in our premium spa center.",
    price: "from 1,200 THB",
    time: "10:00 - 20:00",
    duration: "60-90 min",
    location: "SPA Center",
    image: "	https://images.pexels.com/photos/4498605/pexels-photo-4498605.jpeg?w=600&h=400&fit=crop",
    icon: ""
  },

  // 3. Airport Transfer
  {
    id: 3,
    code: "TRANSFER",
    title: "Airport Transfer",
    category: "Transport",
    shortDescription: "Private transfer from/to Utapao or Suvarnabhumi Airport",
    fullDescription: "Comfortable private transfer service from Utapao (UTP) or Suvarnabhumi (BKK) Airport. Includes meet & greet, luggage assistance, and cold towels.",
    price: "from 1,200 THB",
    time: "24/7",
    duration: "1-2 hours",
    location: "Lobby / Airport",
    image: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?w=600&h=400&fit=crop",
    icon: ""
  },

  // 4. Kids Club Activities
  {
    id: 4,
    code: "KIDS",
    title: "Kids Club Activities",
    category: "Family",
    shortDescription: "Fun and educational activities for children aged 4-12",
    fullDescription: "Supervised kids club with daily activities: arts & crafts, treasure hunts, Thai culture lessons, pool games, and movie nights. Safe and fun environment for your children.",
    price: "from 800 THB/day",
    time: "09:00 - 17:00",
    duration: "Full or half day",
    location: "Kids Club",
    image: "	https://images.pexels.com/photos/3662855/pexels-photo-3662855.jpeg?w=600&h=400&fit=crop",
    icon: ""
  },

  // 5. Romantic Dinner
  {
    id: 5,
    code: "ROMANTIC",
    title: "Romantic Dinner",
    category: "Dining",
    shortDescription: "Private candlelight dinner on the beach or balcony",
    fullDescription: "Create unforgettable memories with a private romantic dinner. Includes flowers, candles, and 5-course meal prepared by our executive chef.",
    price: "from 3,500 THB",
    time: "18:00 - 21:00",
    duration: "2-3 hours",
    location: "Beach or Private Balcony",
    image: "https://images.pexels.com/photos/1171796/pexels-photo-1171796.jpeg?w=600&h=400&fit=crop",
    icon: ""
  },

  // 6. Local Tour Experience
  {
    id: 6,
    code: "TOUR",
    title: "Local Tour Experience",
    category: "Activities",
    shortDescription: "Discover Pattaya's hidden gems with local guides",
    fullDescription: "Choose from: Coral Island (Koh Larn), Sanctuary of Truth, Nong Nooch Tropical Garden, or Floating Market. Includes professional guide and hotel transfers.",
    price: "from 1,500 THB",
    time: "08:00 - 16:00",
    duration: "4-8 hours",
    location: "Hotel Lobby",
    image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?w=600&h=400&fit=crop",
    icon: ""
  }
];

// Категории для фильтрации (только нужные)
export const categories = [
  { id: "all", name: "All Services", icon: "" },
  { id: "Dining", name: "Dining", icon: "" },
  { id: "Wellness", name: "Wellness", icon: "" },
  { id: "Transport", name: "Transport", icon: "" },
  { id: "Family", name: "Family", icon: "" },
  { id: "Activities", name: "Activities", icon: "" }
];

// Получить услугу по коду
export const getServiceByCode = (code) => {
  return services.find(service => service.code === code);
};

// Получить услуги по категории
export const getServicesByCategory = (category) => {
  if (category === "all") return services;
  return services.filter(service => service.category === category);
};