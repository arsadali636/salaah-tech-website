import { cn } from "@/lib/utils";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SalaahTech",
    url: "https://salaahtech.com",
    logo: "https://salaahtech.com/logo.png",
    description:
      "Enterprise software development company specializing in custom software, AI, CRM, ERP, SaaS, and mobile applications.",
    email: "hello@salaahtech.com",
    telephone: "+918126177819",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Film City, Sector 16A, BGR Tower, 3rd Floor",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61573413990778",
      "https://www.instagram.com/salaahtech",
    ],
  };
}

export function serviceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "SalaahTech",
    },
    url: `https://salaahtech.com/services/${service.slug}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SalaahTech",
    image: "https://salaahtech.com/logo.png",
    telephone: "+918126177819",
    email: "hello@salaahtech.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Film City, Sector 16A, BGR Tower, 3rd Floor",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5682,
      longitude: 77.3107,
    },
    url: "https://salaahtech.com",
    priceRange: "$$",
  };
}
