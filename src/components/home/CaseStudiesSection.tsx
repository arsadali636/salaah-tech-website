import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function CaseStudiesSection() {
  const featured = caseStudies.slice(0, 3);

  return (
    <Section id="case-studies" className="bg-muted/50">
      <FadeIn>
        <SectionHeader
          eyebrow="Case Studies"
          title="Featured Projects"
          description="Real projects, real results — see how we've helped businesses transform with custom software."
        />
      </FadeIn>

      <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
        {featured.map((study) => (
          <StaggerItem key={study.slug}>
            <article className="flex h-full flex-col rounded-2xl border border-surface-border bg-surface overflow-hidden card-hover">
              <div className="bg-gradient-to-br from-primary-muted to-accent p-6">
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-primary">
                  {study.industry}
                </span>
                <h3 className="mt-3 text-xl font-bold text-foreground">{study.title}</h3>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Challenge</p>
                    <p className="mt-1 text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Result</p>
                    <p className="mt-1 text-muted-foreground">{study.result}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{study.teamSize} · {study.duration}</span>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button href="/portfolio" variant="secondary">
          View All Case Studies
        </Button>
        <Button href="/contact">Get Custom Quote</Button>
      </FadeIn>
    </Section>
  );
}
