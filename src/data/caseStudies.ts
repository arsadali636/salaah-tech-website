export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  teamSize: string;
  duration: string;
  result: string;
  testimonial?: { quote: string; author: string; role: string };
  type: "app" | "web";
  links?: { playStore?: string; appStore?: string; website?: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "upaj-kisan-app",
    title: "UPAJ — Kisan ka Super App",
    industry: "AgriTech",
    challenge:
      "Farmers lacked a unified platform for crop planning, weather insights, and market access — leading to suboptimal yields and income.",
    solution:
      "Built an AI-powered agricultural super app with real-time weather, soil analysis, crop recommendations, and marketplace integration.",
    technologies: ["Flutter", "Python", "FastAPI", "PostgreSQL", "AWS", "OpenAI"],
    teamSize: "8 engineers",
    duration: "6 months",
    result: "500K+ downloads with 4.5★ rating on Play Store. 30% improvement in farmer crop yield reported.",
    testimonial: {
      quote: "SalaahTech transformed our vision into a platform that genuinely impacts farmers' lives.",
      author: "UPAJ Team",
      role: "Product Leadership",
    },
    type: "app",
    links: {
      playStore: "https://play.google.com/store/search?q=upaj&c=apps&hl=en_IN",
      appStore: "https://apps.apple.com/in/app/upaj-kisan-ka-super-app/id6450405730",
    },
  },
  {
    slug: "buyume-ecommerce",
    title: "BuyUMe — Learn & Earn Platform",
    industry: "E-Commerce / EdTech",
    challenge:
      "Needed a dual-purpose platform combining e-commerce with gamified learning and earning mechanics to drive user engagement.",
    solution:
      "Developed a full-stack platform with AI-powered product recommendations, learning modules, and reward-based earning system.",
    technologies: ["React Native", "Node.js", "MongoDB", "Redis", "Stripe"],
    teamSize: "6 engineers",
    duration: "5 months",
    result: "100K+ active users with 40% increase in daily engagement within first quarter post-launch.",
    type: "app",
    links: {
      playStore: "https://play.google.com/store/search?q=Buyume&c=apps&hl=en_IN",
      appStore: "https://apps.apple.com/in/app/buyume/id1574456662",
    },
  },
  {
    slug: "ramaini-register",
    title: "Ramaini Register",
    industry: "Social / Community",
    challenge:
      "Community needed a trusted platform to connect individuals for dowry-free marriages with verification and privacy controls.",
    solution:
      "Built a secure mobile app with profile verification, community moderation, and privacy-first matching algorithms.",
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
    teamSize: "4 engineers",
    duration: "4 months",
    result: "50K+ registered users with strong community engagement and 99.9% uptime.",
    type: "app",
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=org.jagatgururampalji.ramaini&hl=en_IN",
    },
  },
  {
    slug: "toybiz-exhibition",
    title: "Toy Biz Exhibition Platform",
    industry: "Events / B2B",
    challenge:
      "Large-scale exhibition organizers needed a digital platform for stall booking, visitor management, and real-time event analytics.",
    solution:
      "Created a comprehensive exhibition management app with stall mapping, QR check-in, vendor dashboards, and live analytics.",
    technologies: ["Flutter", "NestJS", "PostgreSQL", "Redis", "AWS"],
    teamSize: "5 engineers",
    duration: "5 months",
    result: "Deployed at 10+ stadium-scale events managing 50K+ visitors per event.",
    type: "app",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.toybizexhibition&hl=en_IN",
      appStore: "https://apps.apple.com/in/app/toy-biz/id6502781969",
    },
  },
  {
    slug: "neighbrsnook",
    title: "Neighbrsnook Community Platform",
    industry: "Social Network",
    challenge:
      "Local communities lacked a dedicated platform for neighborhood communication, event organization, and local commerce.",
    solution:
      "Built a community social network with neighborhood groups, event planning, local marketplace, and safety alerts.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    teamSize: "6 engineers",
    duration: "6 months",
    result: "Active communities across multiple cities with 25K+ registered neighbors.",
    type: "web",
    links: { website: "https://neighbrsnook.com/" },
  },
];
