import Link from "next/link";
import { services } from "@/data/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const featuredServices = services.slice(0, 9);

export default function ExpertiseSection() {
  return (
    <Section id="expertise">
      <FadeIn>
        <SectionHeader
          eyebrow="Our Expertise"
          title="Software Engineering Services"
          description="From AI-powered applications to enterprise CRM and ERP systems — we deliver end-to-end software engineering for every stage of your product lifecycle."
        />
      </FadeIn>

      <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service) => (
          <StaggerItem key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-surface-border bg-surface p-6 card-hover"
            >
              <span className="mb-3 inline-block w-fit rounded-full bg-primary-muted px-3 py-1 text-xs font-medium text-primary">
                {service.category}
              </span>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.shortDescription}
              </p>
              <span className="mt-4 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more →
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          View all {services.length}+ services →
        </Link>
      </FadeIn>
    </Section>
  );
}
