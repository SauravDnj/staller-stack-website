export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  country: string;
  flag: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Staller Stack transformed our entire digital infrastructure. Their team migrated our legacy systems to the cloud in half the expected timeline, and the performance gains have been remarkable. They truly feel like an extension of our own team.",
    name: "James Whitfield",
    title: "CTO, FinEdge Technologies",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    country: "United States",
    flag: "🇺🇸",
  },
  {
    quote:
      "We approached Staller Stack with a complex AI challenge — building a recommendation engine for 10 million users. They not only delivered a brilliant solution but also set up the MLOps pipeline so our team could iterate independently. Outstanding work.",
    name: "Charlotte Bennett",
    title: "VP of Product, ShopStream",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    country: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    quote:
      "After a security breach at our previous vendor, we needed a partner we could trust. Staller Stack's security team conducted a thorough audit, implemented zero-trust architecture, and now monitors our systems around the clock. We sleep better at night.",
    name: "Liam O'Connor",
    title: "CEO, MediVault Health",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    country: "Australia",
    flag: "🇦🇺",
  },
];
