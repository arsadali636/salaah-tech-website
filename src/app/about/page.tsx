import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  coreValues,
  mission,
  vision,
  developmentPhilosophy,
  engineeringStandards,
  stats,
} from "@/data/company";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "About SalaahTech — Our Mission, Vision & Values",
  description:
    "Learn about SalaahTech — an enterprise software engineering company with 8+ years of experience building custom software, AI applications, and mobile apps for global clients.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <main className="pt-8">
        <Section>
          <FadeIn>
            <SectionHeader
              eyebrow="About Us"
              title="Engineering the Future of Software"
              description="SalaahTech is an enterprise software engineering company dedicated to building intelligent, scalable, and secure digital products that drive business growth."
            />
          </FadeIn>

          <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {stats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="text-center rounded-2xl border border-surface-border bg-surface p-4">
                <p className="text-2xl font-bold">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-muted/50">
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{mission}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{vision}</p>
            </FadeIn>
          </div>
        </Section>

        <Section>
          <FadeIn>
            <SectionHeader title="Core Values" description="The principles that guide every line of code we write." />
          </FadeIn>
          <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2">
            {coreValues.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-surface-border bg-surface p-6 card-hover h-full">
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        <Section className="bg-muted/50">
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn>
              <h2 className="text-2xl font-bold">Development Philosophy</h2>
              <ul className="mt-4 space-y-3">
                {developmentPhilosophy.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-bold">Engineering Standards</h2>
              <ul className="mt-4 space-y-3">
                {engineeringStandards.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Section>

        <Section>
          <FadeIn>
            <div className="rounded-2xl border border-surface-border bg-surface p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold">Who We Are</h2>
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                Founded in Noida, India, with a presence in Dubai, UAE, SalaahTech is a team of
                passionate engineers, designers, and architects who believe great software changes
                businesses. We&apos;ve delivered 150+ projects across healthcare, fintech, edtech,
                ecommerce, logistics, and more — always with a focus on quality, security, and
                measurable outcomes.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">Work With Us</Button>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>
    </>
  );
}
