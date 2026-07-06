import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactCTA() {
  return (
    <Section dark id="contact-cta">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-sm font-bold tracking-tight md:text-display-md">
            Ready to Build Something{" "}
            <span className="gradient-text">Extraordinary?</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Schedule a free discovery call with our engineering team. We&apos;ll
            analyze your requirements and provide a detailed proposal — no
            obligations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Book Free Consultation
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get Custom Quote
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <span>Schedule Discovery Call</span>
            <span>·</span>
            <span>Start Your Project</span>
            <span>·</span>
            <span>Request Demo</span>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export function TrustBar() {
  const logos = [
    "Enterprise Clients",
    "Startups",
    "Healthcare",
    "FinTech",
    "EdTech",
    "E-Commerce",
    "Logistics",
    "AgriTech",
  ];

  return (
    <div className="border-y border-surface-border bg-surface py-6">
      <div className="container-main">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted across industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-medium text-muted-foreground/60"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
