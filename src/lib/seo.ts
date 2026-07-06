import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://salaahtech.com";
const SITE_NAME = "SalaahTech";

export function getSiteUrl() {
  return SITE_URL;
}

export function buildMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "" || path === "/" ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export const defaultMetadata = buildMetadata({
  title: "SalaahTech — Enterprise Software Development Company",
  description:
    "SalaahTech builds custom software, AI applications, CRM, ERP, SaaS platforms, and mobile apps for enterprises worldwide. Book a free consultation.",
  path: "/",
  keywords: [
    "software development company",
    "custom software development",
    "AI development",
    "CRM development",
    "ERP development",
    "SaaS development",
    "mobile app development",
    "SalaahTech",
  ],
});
