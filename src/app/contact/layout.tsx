import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact SalaahTech",
  description:
    "Get in touch with SalaahTech for custom software development, AI applications, CRM, ERP, and mobile app projects. Book a free consultation today.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
