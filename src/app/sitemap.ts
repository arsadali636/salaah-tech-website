import { MetadataRoute } from "next";
import { services } from "@/data/services";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://salaahtech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/careers",
    "/privacy-policy",
    "/terms-conditions",
  ];

  const servicePages = services.map((s) => `/services/${s.slug}`);

  return [...staticPages, ...servicePages].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
