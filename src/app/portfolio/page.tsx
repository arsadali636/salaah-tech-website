import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/data/caseStudies";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio & Case Studies",
  description:
    "Explore SalaahTech's portfolio of successful software projects — mobile apps, web platforms, AI solutions, and enterprise systems across multiple industries.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <main className="pt-8">
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Portfolio"
            title="Case Studies"
            description="Real projects with measurable business impact — see how we solve complex software challenges for our clients."
          />
        </FadeIn>

        <div className="mt-12 space-y-8">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.slug} delay={i * 0.05}>
              <article className="rounded-2xl border border-surface-border bg-surface overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-primary-muted to-accent p-8 lg:col-span-1">
                    <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-primary">
                      {study.industry}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold">{study.title}</h2>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <p><strong className="text-foreground">Team:</strong> {study.teamSize}</p>
                      <p><strong className="text-foreground">Duration:</strong> {study.duration}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="rounded-md bg-surface/80 px-2 py-1 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 lg:col-span-2">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="font-semibold text-primary">Client Challenge</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">Our Solution</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl bg-muted p-4">
                      <h3 className="font-semibold text-success">Business Result</h3>
                      <p className="mt-1 text-sm">{study.result}</p>
                    </div>

                    {study.testimonial && (
                      <blockquote className="mt-6 border-l-4 border-primary pl-4">
                        <p className="text-sm italic text-muted-foreground">
                          &ldquo;{study.testimonial.quote}&rdquo;
                        </p>
                        <footer className="mt-2 text-sm font-medium">
                          — {study.testimonial.author}, {study.testimonial.role}
                        </footer>
                      </blockquote>
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                      {study.links?.playStore && (
                        <Button href={study.links.playStore} variant="secondary" size="sm" external>
                          Play Store
                        </Button>
                      )}
                      {study.links?.appStore && (
                        <Button href={study.links.appStore} variant="secondary" size="sm" external>
                          App Store
                        </Button>
                      )}
                      {study.links?.website && (
                        <Button href={study.links.website} variant="secondary" size="sm" external>
                          Visit Website
                        </Button>
                      )}
                      <Button href="/contact" size="sm">
                        Get Custom Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button href="/contact" size="lg">Start Your Project</Button>
        </FadeIn>
      </Section>
    </main>
  );
}
