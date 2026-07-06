import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services, serviceCategories } from "@/data/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Software Development Services",
  description:
    "Explore SalaahTech's full range of software engineering services — custom software, AI, CRM, ERP, SaaS, mobile apps, web development, and cloud solutions.",
  path: "/services",
  keywords: [
    "software development services",
    "custom software development",
    "AI development services",
    "CRM development",
    "ERP development",
    "mobile app development",
  ],
});

export default function ServicesPage() {
  return (
    <main className="pt-8">
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Services"
            title="Software Engineering Services"
            description="End-to-end software development services for enterprises, startups, and growing businesses. Choose a service to learn more."
          />
        </FadeIn>

        {serviceCategories.map((category) => {
          const categoryServices = services.filter((s) => s.category === category);
          if (categoryServices.length === 0) return null;

          return (
            <div key={category} className="mt-16">
              <FadeIn>
                <h2 className="text-2xl font-bold tracking-tight">{category}</h2>
              </FadeIn>
              <StaggerContainer className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <StaggerItem key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-surface-border bg-surface p-6 card-hover"
                    >
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">
                        {service.shortDescription}
                      </p>
                      <span className="mt-4 text-sm font-medium text-primary">
                        Learn more →
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          );
        })}

        <FadeIn className="mt-16 text-center">
          <Button href="/contact" size="lg">
            Book Free Consultation
          </Button>
        </FadeIn>
      </Section>
    </main>
  );
}
