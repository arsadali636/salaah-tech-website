import { industries, softwareCategories } from "@/data/industries";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function IndustriesSection() {
  return (
    <>
      <Section id="industries" className="bg-muted/50">
        <FadeIn>
          <SectionHeader
            eyebrow="Industries"
            title="Industries We Serve"
            description="Deep domain expertise across 15+ verticals — we understand your industry's unique challenges and compliance requirements."
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <div className="rounded-2xl border border-surface-border bg-surface p-5 card-hover">
                <span className="text-2xl">{industry.icon}</span>
                <h3 className="mt-3 font-semibold text-foreground">{industry.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{industry.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section id="software-categories">
        <FadeIn>
          <SectionHeader
            eyebrow="Software Categories"
            title="Enterprise Software We Build"
            description="Specialized platforms tailored to your industry's operational needs."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {softwareCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                {cat}
              </span>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
