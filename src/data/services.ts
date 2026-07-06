export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  features: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
};

export const serviceCategories = [
  "Custom Software",
  "Enterprise Solutions",
  "AI & Machine Learning",
  "Mobile Development",
  "Web Development",
  "Cloud & DevOps",
  "Design & Support",
];

const baseFaqs = (service: string) => [
  {
    question: `How long does ${service} take?`,
    answer: `Timeline depends on scope and complexity. A typical ${service.toLowerCase()} project ranges from 8–16 weeks for MVPs and 4–12 months for enterprise-grade solutions. We provide a detailed timeline after discovery.`,
  },
  {
    question: `What is the cost of ${service}?`,
    answer: `Pricing varies based on features, integrations, and team size. We offer fixed-price and dedicated team models. Book a free consultation for a custom quote tailored to your requirements.`,
  },
  {
    question: `Do you provide post-launch support?`,
    answer: `Yes. We offer maintenance, monitoring, feature enhancements, and SLA-backed support packages to keep your software running optimally after launch.`,
  },
];

function createService(
  slug: string,
  title: string,
  shortDescription: string,
  description: string,
  category: string,
  features: string[],
  technologies: string[]
): Service {
  return {
    slug,
    title,
    shortDescription,
    description,
    category,
    features,
    technologies,
    faqs: baseFaqs(title),
  };
}

export const services: Service[] = [
  createService(
    "custom-software-development",
    "Custom Software Development",
    "Tailored software built around your unique business workflows and goals.",
    "SalaahTech delivers bespoke software solutions engineered for your exact business requirements. From internal tools to customer-facing platforms, we architect scalable systems using modern tech stacks, clean code practices, and agile delivery.",
    "Custom Software",
    [
      "Requirements discovery & business analysis",
      "Custom architecture design",
      "Full-stack development",
      "Third-party integrations",
      "QA, deployment & handover",
    ],
    ["Next.js", "Node.js", "Python", "PostgreSQL", "AWS"]
  ),
  createService(
    "enterprise-software",
    "Enterprise Software",
    "Robust, scalable enterprise applications for large organizations.",
    "We build enterprise-grade software that handles complex workflows, high traffic, and strict compliance requirements. Our solutions integrate seamlessly with existing systems while providing the flexibility to evolve.",
    "Enterprise Solutions",
    [
      "Legacy system modernization",
      "Multi-tenant architecture",
      "Role-based access control",
      "Audit trails & compliance",
      "High-availability deployment",
    ],
    ["Java Spring Boot", "NestJS", "PostgreSQL", "Kubernetes", "Azure"]
  ),
  createService(
    "crm-development",
    "CRM Development",
    "Custom CRM platforms that streamline sales, support, and customer relationships.",
    "Build a CRM tailored to your sales pipeline, not the other way around. SalaahTech develops custom CRM solutions with lead management, automation, analytics dashboards, and deep integrations with your existing tools.",
    "Enterprise Solutions",
    [
      "Lead & pipeline management",
      "Contact & account management",
      "Sales automation & workflows",
      "Reporting & analytics dashboards",
      "Email, calendar & API integrations",
    ],
    ["React", "Node.js", "PostgreSQL", "Redis", "REST API"]
  ),
  createService(
    "erp-development",
    "ERP Development",
    "Integrated ERP systems for finance, inventory, HR, and operations.",
    "Our ERP development services unify your business processes into a single intelligent platform. From inventory and procurement to finance and HR modules, we build ERPs that eliminate silos and drive operational efficiency.",
    "Enterprise Solutions",
    [
      "Finance & accounting modules",
      "Inventory & warehouse management",
      "HR & payroll integration",
      "Procurement & vendor management",
      "Real-time reporting & BI",
    ],
    ["Django", "FastAPI", "PostgreSQL", "React", "Docker"]
  ),
  createService(
    "saas-development",
    "SaaS Development",
    "Multi-tenant SaaS platforms built for scale, security, and recurring revenue.",
    "Launch your SaaS product with confidence. We engineer multi-tenant architectures with subscription billing, user management, analytics, and the scalability to grow from MVP to millions of users.",
    "Enterprise Solutions",
    [
      "Multi-tenant architecture",
      "Subscription & billing integration",
      "User onboarding & auth",
      "Admin dashboards & analytics",
      "API-first design",
    ],
    ["Next.js", "Stripe", "PostgreSQL", "Redis", "AWS"]
  ),
  createService(
    "ai-application-development",
    "AI Application Development",
    "Intelligent applications powered by machine learning and generative AI.",
    "Transform your business with AI-native applications. We build intelligent systems using LLMs, computer vision, NLP, and predictive analytics — integrated seamlessly into your products and workflows.",
    "AI & Machine Learning",
    [
      "LLM-powered applications",
      "Predictive analytics engines",
      "Computer vision solutions",
      "Natural language processing",
      "AI agent orchestration",
    ],
    ["OpenAI", "Claude", "LangChain", "Python", "Vector DB"]
  ),
  createService(
    "ai-automation",
    "AI Automation",
    "Automate repetitive workflows with intelligent AI agents and pipelines.",
    "Reduce manual work and operational costs with AI-powered automation. We design agentic workflows, document processing pipelines, and intelligent decision systems that run 24/7.",
    "AI & Machine Learning",
    [
      "Workflow automation",
      "Document AI & OCR",
      "AI agent development",
      "Process mining & optimization",
      "Integration with existing tools",
    ],
    ["LangGraph", "CrewAI", "Python", "FastAPI", "Redis Queue"]
  ),
  createService(
    "machine-learning-solutions",
    "Machine Learning Solutions",
    "Custom ML models for prediction, classification, and recommendation.",
    "Deploy production-grade machine learning models trained on your data. From recommendation engines to fraud detection, we handle the full ML lifecycle — data prep, training, deployment, and monitoring.",
    "AI & Machine Learning",
    [
      "Model training & fine-tuning",
      "Recommendation systems",
      "Anomaly & fraud detection",
      "MLOps & model monitoring",
      "Feature engineering pipelines",
    ],
    ["Python", "TensorFlow", "scikit-learn", "MLflow", "AWS SageMaker"]
  ),
  createService(
    "llm-integration",
    "LLM Integration",
    "Integrate GPT, Claude, Gemini, and open-source LLMs into your products.",
    "Add conversational AI, content generation, and intelligent search to your applications. We integrate leading LLM providers with robust prompt engineering, RAG pipelines, and cost optimization.",
    "AI & Machine Learning",
    [
      "OpenAI & Claude SDK integration",
      "RAG pipeline development",
      "Prompt engineering & optimization",
      "Token cost management",
      "Fallback & reliability patterns",
    ],
    ["OpenAI SDK", "Anthropic Claude", "LangChain", "Pinecone", "FastAPI"]
  ),
  createService(
    "generative-ai",
    "Generative AI",
    "Content, image, and code generation powered by state-of-the-art AI models.",
    "Harness generative AI for content creation, image synthesis, code generation, and more. We build safe, controlled generative systems with guardrails, moderation, and enterprise compliance.",
    "AI & Machine Learning",
    [
      "Text & content generation",
      "Image generation pipelines",
      "Code generation assistants",
      "Content moderation & safety",
      "Custom fine-tuned models",
    ],
    ["OpenAI", "Gemini", "Stable Diffusion", "Python", "FastAPI"]
  ),
  createService(
    "chatbot-development",
    "Chatbot Development",
    "Intelligent chatbots for customer support, sales, and internal operations.",
    "Deploy AI chatbots that understand context, resolve queries, and escalate intelligently. We build conversational interfaces for web, mobile, WhatsApp, and voice channels.",
    "AI & Machine Learning",
    [
      "Conversational AI design",
      "Multi-channel deployment",
      "Knowledge base integration",
      "Human handoff workflows",
      "Analytics & conversation insights",
    ],
    ["LangChain", "OpenAI", "WhatsApp API", "React", "Node.js"]
  ),
  createService(
    "mobile-app-development",
    "Mobile App Development",
    "Native and cross-platform mobile apps for iOS and Android.",
    "Build mobile experiences that users love. From consumer apps to enterprise mobility solutions, we deliver performant, secure, and beautifully designed mobile applications.",
    "Mobile Development",
    [
      "iOS & Android native apps",
      "Cross-platform development",
      "Offline-first architecture",
      "Push notifications & analytics",
      "App Store deployment",
    ],
    ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"]
  ),
  createService(
    "android-development",
    "Android Development",
    "High-performance Android apps with Kotlin, Jetpack, and modern architecture.",
    "Our Android team builds apps using Kotlin, Jetpack Compose, MVVM, and Clean Architecture. From Play Store launches to enterprise MDM deployments, we cover the full Android lifecycle.",
    "Mobile Development",
    [
      "Kotlin & Jetpack Compose",
      "MVVM & Clean Architecture",
      "Room database & offline sync",
      "Google Maps & Play Billing",
      "Firebase & push notifications",
    ],
    ["Kotlin", "Jetpack", "Room", "Firebase", "Google Maps"]
  ),
  createService(
    "ios-development",
    "iOS Development",
    "Premium iOS applications built with Swift and SwiftUI.",
    "Craft exceptional iOS experiences with SwiftUI, Combine, and Apple's latest frameworks. We build apps that meet App Store guidelines and delight users on iPhone and iPad.",
    "Mobile Development",
    [
      "Swift & SwiftUI development",
      "Core Data & CloudKit",
      "Apple Pay & in-app purchases",
      "Widget & Watch extensions",
      "TestFlight & App Store submission",
    ],
    ["Swift", "SwiftUI", "Core Data", "Xcode", "Firebase"]
  ),
  createService(
    "flutter-development",
    "Flutter Development",
    "Beautiful cross-platform apps with a single Flutter codebase.",
    "Ship faster with Flutter. We build pixel-perfect, high-performance apps for iOS, Android, web, and desktop from one codebase — reducing time-to-market by up to 40%.",
    "Mobile Development",
    [
      "Cross-platform UI development",
      "Custom animations & widgets",
      "State management (Bloc/Riverpod)",
      "Platform channel integrations",
      "Performance optimization",
    ],
    ["Flutter", "Dart", "Firebase", "REST API", "GraphQL"]
  ),
  createService(
    "react-native-development",
    "React Native Development",
    "JavaScript-powered mobile apps with native performance.",
    "Leverage your web team's React skills for mobile. We build React Native apps with native modules, optimized bundles, and over-the-air updates.",
    "Mobile Development",
    [
      "React Native & Expo",
      "Native module integration",
      "Redux & React Query state",
      "CodePush OTA updates",
      "Performance profiling",
    ],
    ["React Native", "TypeScript", "Expo", "Redux", "Firebase"]
  ),
  createService(
    "website-development",
    "Website Development",
    "Fast, SEO-optimized websites that convert visitors into customers.",
    "We build marketing websites and landing pages with blazing performance, perfect SEO, and conversion-focused design. Built on Next.js for speed and scalability.",
    "Web Development",
    [
      "Responsive design",
      "SEO optimization",
      "CMS integration",
      "Performance optimization",
      "Analytics & conversion tracking",
    ],
    ["Next.js", "TailwindCSS", "TypeScript", "Vercel", "Sanity CMS"]
  ),
  createService(
    "web-application-development",
    "Web Application Development",
    "Complex web applications with rich interactivity and real-time features.",
    "From dashboards to SaaS platforms, we build sophisticated web applications with real-time updates, complex state management, and enterprise-grade security.",
    "Web Development",
    [
      "SPA & SSR architectures",
      "Real-time WebSocket features",
      "Complex dashboard UIs",
      "Role-based permissions",
      "API integration layers",
    ],
    ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"]
  ),
  createService(
    "django-development",
    "Django Development",
    "Scalable Python web applications with Django and Django REST Framework.",
    "Our Python team builds robust backends with Django — perfect for data-heavy applications, admin panels, APIs, and content management systems.",
    "Web Development",
    [
      "Django REST Framework APIs",
      "Admin panel customization",
      "Celery async task processing",
      "PostgreSQL optimization",
      "Authentication & permissions",
    ],
    ["Django", "DRF", "Celery", "PostgreSQL", "Redis"]
  ),
  createService(
    "fastapi-development",
    "FastAPI Development",
    "High-performance async Python APIs with FastAPI.",
    "Build lightning-fast APIs with FastAPI's async architecture. Ideal for AI services, microservices, and high-throughput backend systems.",
    "Web Development",
    [
      "Async REST & WebSocket APIs",
      "OpenAPI documentation",
      "Pydantic validation",
      "Microservice architecture",
      "Docker containerization",
    ],
    ["FastAPI", "Python", "PostgreSQL", "Redis", "Docker"]
  ),
  createService(
    "admin-panel-development",
    "Admin Panel Development",
    "Powerful admin dashboards for managing your platform and data.",
    "Control your platform with intuitive admin panels featuring data tables, analytics, user management, and workflow automation — built for operators, not developers.",
    "Web Development",
    [
      "Data management interfaces",
      "Analytics & reporting dashboards",
      "User & role management",
      "Bulk operations & exports",
      "Audit logs & activity tracking",
    ],
    ["React", "Next.js", "TanStack Table", "Chart.js", "PostgreSQL"]
  ),
  createService(
    "hospital-management-software",
    "Hospital Management Software",
    "Complete HMS for patient care, billing, and hospital operations.",
    "Digitize hospital workflows with our HMS — patient registration, appointments, EMR, billing, pharmacy, lab integration, and compliance reporting in one platform.",
    "Enterprise Solutions",
    [
      "Patient registration & EMR",
      "Appointment scheduling",
      "Billing & insurance claims",
      "Pharmacy & lab integration",
      "HIPAA-compliant security",
    ],
    ["Django", "React", "PostgreSQL", "HL7 FHIR", "AWS"]
  ),
  createService(
    "education-erp",
    "Education ERP",
    "School and university management systems for modern education.",
    "Manage admissions, attendance, grades, fees, and communication with a unified Education ERP. Built for schools, colleges, and training institutes.",
    "Enterprise Solutions",
    [
      "Student information system",
      "Attendance & grade management",
      "Fee collection & accounting",
      "Parent-teacher communication",
      "Online learning integration",
    ],
    ["Laravel", "React", "MySQL", "Firebase", "AWS"]
  ),
  createService(
    "ecommerce-platform",
    "Ecommerce Platform",
    "Custom ecommerce platforms with payments, inventory, and analytics.",
    "Launch your online store with a custom ecommerce platform — product catalogs, cart, checkout, payment gateways, order management, and marketing tools.",
    "Web Development",
    [
      "Product catalog management",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Order & inventory management",
      "Marketing & discount engine",
    ],
    ["Next.js", "Stripe", "PostgreSQL", "Redis", "AWS"]
  ),
  createService(
    "marketplace-development",
    "Marketplace Development",
    "Multi-vendor marketplace platforms connecting buyers and sellers.",
    "Build the next big marketplace. We develop multi-vendor platforms with vendor onboarding, commission management, reviews, search, and escrow payments.",
    "Web Development",
    [
      "Multi-vendor architecture",
      "Vendor dashboard & onboarding",
      "Commission & payout system",
      "Search & recommendation engine",
      "Review & rating system",
    ],
    ["Next.js", "Node.js", "PostgreSQL", "Elasticsearch", "Stripe Connect"]
  ),
  createService(
    "api-development",
    "API Development",
    "RESTful, GraphQL, and gRPC APIs built for performance and reliability.",
    "Design and build APIs that power your ecosystem. We create well-documented, versioned, and secure APIs with rate limiting, authentication, and comprehensive testing.",
    "Cloud & DevOps",
    [
      "REST & GraphQL API design",
      "gRPC microservice APIs",
      "API documentation (OpenAPI)",
      "Rate limiting & versioning",
      "OAuth & JWT authentication",
    ],
    ["Node.js", "FastAPI", "GraphQL", "PostgreSQL", "Redis"]
  ),
  createService(
    "microservices",
    "Microservices",
    "Cloud-native microservice architectures for scalable systems.",
    "Break monoliths into scalable microservices. We design service boundaries, implement inter-service communication, and deploy with container orchestration.",
    "Cloud & DevOps",
    [
      "Service decomposition strategy",
      "Event-driven architecture",
      "Service mesh & discovery",
      "Distributed tracing",
      "Kubernetes deployment",
    ],
    ["Docker", "Kubernetes", "NestJS", "Kafka", "gRPC"]
  ),
  createService(
    "cloud-solutions",
    "Cloud Solutions",
    "AWS, Azure, and GCP cloud architecture and migration services.",
    "Move to the cloud with confidence. We design cloud-native architectures, migrate legacy systems, and optimize costs across AWS, Azure, and Google Cloud.",
    "Cloud & DevOps",
    [
      "Cloud architecture design",
      "Legacy migration",
      "Serverless & container deployment",
      "Cost optimization",
      "Disaster recovery planning",
    ],
    ["AWS", "Azure", "Google Cloud", "Terraform", "Docker"]
  ),
  createService(
    "devops",
    "DevOps",
    "CI/CD pipelines, infrastructure as code, and deployment automation.",
    "Accelerate delivery with automated pipelines. We set up GitHub Actions, GitLab CI, Jenkins, and infrastructure-as-code for reliable, repeatable deployments.",
    "Cloud & DevOps",
    [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring & alerting",
      "Security scanning automation",
    ],
    ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "Datadog"]
  ),
  createService(
    "backend-development",
    "Backend Development",
    "Scalable server-side systems with Node.js, Python, Java, and Go.",
    "Engineer robust backends that handle millions of requests. We build APIs, background workers, databases, and caching layers optimized for your scale.",
    "Web Development",
    [
      "API development",
      "Database design & optimization",
      "Background job processing",
      "Caching & performance tuning",
      "Authentication & authorization",
    ],
    ["Node.js", "Python", "PostgreSQL", "Redis", "Docker"]
  ),
  createService(
    "frontend-development",
    "Frontend Development",
    "Pixel-perfect, accessible UIs with React, Next.js, Vue, and Angular.",
    "Create interfaces users love. Our frontend team delivers responsive, accessible, and performant UIs with modern frameworks and component libraries.",
    "Web Development",
    [
      "Component library development",
      "Responsive & accessible UI",
      "State management",
      "Performance optimization",
      "Design system implementation",
    ],
    ["React", "Next.js", "TypeScript", "TailwindCSS", "Shadcn UI"]
  ),
  createService(
    "ui-ux-design",
    "UI/UX Design",
    "User-centered design that drives engagement and conversion.",
    "Great software starts with great design. We create wireframes, prototypes, and polished UI designs backed by user research and usability testing.",
    "Design & Support",
    [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design & design systems",
      "Usability testing",
      "Design-to-development handoff",
    ],
    ["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Testing"]
  ),
  createService(
    "maintenance-support",
    "Maintenance & Support",
    "Ongoing support, monitoring, and feature enhancements for your software.",
    "Keep your software healthy post-launch. We provide bug fixes, security patches, performance monitoring, and iterative feature development on SLA terms.",
    "Design & Support",
    [
      "Bug fixes & hot patches",
      "Security updates",
      "Performance monitoring",
      "Feature enhancements",
      "SLA-backed support tiers",
    ],
    ["Monitoring", "CI/CD", "Docker", "AWS", "PostgreSQL"]
  ),
  createService(
    "smart-home-app",
    "Smart Home App Development",
    "Bespoke IoT applications to control and automate smart home devices.",
    "We build smart home mobile and tablet apps that connect, manage, and automate IoT devices, lighting, locks, and appliances with clean, highly responsive user interfaces.",
    "Custom Software",
    [
      "IoT device integration & setup",
      "Real-time state synchronization",
      "Custom scheduling & automation routines",
      "Voice assistant integrations (Alexa/Google)",
      "End-to-end device connection encryption",
    ],
    ["React Native", "Flutter", "Node.js", "WebSockets", "AWS IoT"]
  ),
  createService(
    "nfc-payment-solutions",
    "NFC Payment Solutions",
    "Secure, contactless payment systems for retail, transit, and mobile apps.",
    "We develop secure contactless payment systems leveraging Near Field Communication (NFC), host card emulation (HCE), tokenization, and strict payment compliance standards.",
    "Enterprise Solutions",
    [
      "NFC reader & card simulation",
      "Contactless payment processing",
      "PCI-DSS compliant data encryption",
      "Host Card Emulation (HCE)",
      "Digital wallet integrations",
    ],
    ["Java / Kotlin", "Swift", "CoreNFC", "Stripe API", "Tokenization Engines"]
  ),
  createService(
    "education-app-development",
    "Education App Development",
    "Interactive, scalable e-learning platforms and educational mobile apps.",
    "Transform education with custom LMS platforms, virtual classrooms, interactive student portals, and mobile learning apps featuring progress tracking, quizzes, and rich media content.",
    "Design & Support",
    [
      "Custom Learning Management System (LMS)",
      "Virtual classrooms & video integration",
      "Student dashboards & progress analytics",
      "Interactive assessments & gamification",
      "Offline learning mode support",
    ],
    ["Next.js", "React Native", "GraphQL", "AWS Chime", "PostgreSQL"]
  ),
  createService(
    "real-estate-software",
    "Real Estate Software",
    "Property management systems, real estate CRMs, and listing portals.",
    "Empower real estate agencies and property managers with custom platforms for property listings, tenant portals, lead tracking, automated billing, and virtual viewings.",
    "Enterprise Solutions",
    [
      "Interactive property map listings",
      "Tenant & landlord portals",
      "Lease management & digital signatures",
      "Automated rent invoicing & payment collection",
      "Lead generation & agent CRM systems",
    ],
    ["React", "Django", "PostgreSQL", "Google Maps API", "Stripe"]
  ),
  createService(
    "food-delivery-app",
    "Food Delivery App Development",
    "On-demand food delivery solutions with real-time tracking and menus.",
    "We build on-demand food delivery systems featuring user ordering apps, restaurant management dashboards, rider dispatch portals, and live GPS delivery tracking.",
    "Mobile Development",
    [
      "Interactive menus & easy ordering",
      "Real-time GPS delivery tracking",
      "Rider dispatcher & driver apps",
      "Restaurant partner dashboards",
      "Secure checkout & multi-payment support",
    ],
    ["Flutter", "React Native", "Google Maps SDK", "Node.js", "Socket.io"]
  ),
  createService(
    "taxi-booking-app",
    "Taxi Booking App Development",
    "On-demand ride-sharing and taxi booking platforms with auto-dispatch.",
    "Get custom ride-hailing software with customer booking apps, driver navigation, real-time routing, fare estimation, and automatic dispatch algorithms.",
    "Mobile Development",
    [
      "Passenger booking & ride options",
      "Driver app with turn-by-turn navigation",
      "Live fare estimation & dynamic pricing",
      "Automated matching & dispatch algorithm",
      "In-app wallet & split-fare payments",
    ],
    ["Kotlin", "Swift", "Mapbox SDK", "Firebase Realtime DB", "Node.js"]
  ),
  createService(
    "iot-solutions",
    "Internet of Things (IoT)",
    "Connected software that collects, analyzes, and automates device operations.",
    "Bridge the physical and digital worlds with custom IoT backends, sensor integration, dashboard analytics, and device management systems built for high-throughput data.",
    "Enterprise Solutions",
    [
      "High-throughput MQTT broker setup",
      "Telemetry data ingestion & analytics",
      "Over-the-air (OTA) update managers",
      "Custom device state dashboard interfaces",
      "Automated alerts & trigger workflows",
    ],
    ["Go", "Node.js", "InfluxDB", "AWS IoT Core", "RabbitMQ"]
  ),
  createService(
    "healthcare-software",
    "Healthcare Software",
    "HIPAA-compliant telemedicine platforms, patient portals, and EHR systems.",
    "We design and build secure, compliant healthcare software, patient portals, remote health monitoring systems, and booking applications for modern clinics.",
    "Enterprise Solutions",
    [
      "HIPAA-compliant video consultations",
      "Electronic Health Record (EHR) integration",
      "Secure patient intake & portal records",
      "Online appointment scheduling & reminders",
      "E-prescriptions & medical billing",
    ],
    ["Next.js", "NestJS", "PostgreSQL", "AWS Mediasoup", "HL7/FHIR Protocols"]
  ),
  createService(
    "fintech-app",
    "Fintech & Neo-Banking App",
    "Secure, scalable mobile banking and financial technology solutions.",
    "We engineer high-performance fintech platforms and mobile apps featuring multi-currency wallets, payment gateways, biometric security, neo-banking ledgers, and standard regulatory compliance.",
    "Enterprise Solutions",
    [
      "Multi-currency digital wallets",
      "Biometric & 2FA security integrations",
      "Real-time transaction ledgers",
      "P2P money transfers & payments",
      "Investment & savings modules",
    ],
    ["React Native", "NestJS", "PostgreSQL", "Stripe API", "AWS API Gateway"]
  ),
  createService(
    "fitness-app",
    "Fitness & Wellness App",
    "Custom fitness tracking, workout planning, and health coaching apps.",
    "Build interactive health platforms with custom workout plans, step tracking, wearable integrations (Apple Health / Google Fit), caloric intake monitoring, and video coaching features.",
    "Design & Support",
    [
      "Wearable sensor & tracker integrations",
      "Custom workout & plan builders",
      "Caloric intake & macro calculator",
      "Live & on-demand video session players",
      "Community challenges & achievements",
    ],
    ["Flutter", "Node.js", "Firebase", "WebRTC", "Google Fit API"]
  ),
  createService(
    "logistics-software",
    "Logistics & Fleet Management",
    "Smart dispatching, route optimization, and fleet tracking systems.",
    "Optimize supply chains and delivery fleets with real-time GPS tracking, automated dispatching algorithms, route optimization engines, driver manifest tools, and client status updates.",
    "Enterprise Solutions",
    [
      "Route optimization & dispatch planning",
      "Real-time fleet & asset GPS tracking",
      "Automated matching & driver manifests",
      "Proof of delivery & billing automation",
      "Live tracking share pages for customers",
    ],
    ["React", "Go", "PostgreSQL", "Mapbox SDK", "Redis"]
  ),
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category);
}
