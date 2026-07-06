import { developmentProcess, whyChooseUs, securityFeatures } from "@/data/process";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function ProcessSection() {
  return (
    <Section id="process">
      <FadeIn>
        <SectionHeader
          eyebrow="How We Work"
          title="Our Development Process"
          description="A proven 12-step methodology that delivers quality software on time and within budget."
        />
      </FadeIn>

      <div className="mt-12 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-surface-border -translate-x-1/2" />
        <div className="space-y-4">
          {developmentProcess.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.05}>
              <div className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`inline-block rounded-2xl border border-surface-border bg-surface p-5 card-hover max-w-sm ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <span className="text-xs font-bold text-primary">Step {step.step}</span>
                    <h3 className="mt-1 font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground z-10">
                  {step.step}
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function WhyChooseSection() {
  return (
    <Section id="why-us" className="bg-muted/50">
      <FadeIn>
        <SectionHeader
          eyebrow="Why SalaahTech"
          title="Why Choose SalaahTech"
          description="We're not just developers — we're your long-term engineering partner committed to your success."
        />
      </FadeIn>

      <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item) => (
          <StaggerItem key={item.title}>
            <div className="rounded-2xl border border-surface-border bg-surface p-6 card-hover h-full">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

export function SecuritySection() {
  return (
    <Section id="security">
      <FadeIn>
        <SectionHeader
          eyebrow="Enterprise Security"
          title="Security Built Into Every Layer"
          description="We follow industry-leading security practices to protect your data, users, and business."
        />
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {securityFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-surface-border bg-surface px-4 py-3"
            >
              <span className="text-primary">🛡️</span>
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
