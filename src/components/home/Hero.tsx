"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 bg-mesh-gradient opacity-60" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent blur-3xl" />

      <div className="container-main relative">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/80 px-4 py-1.5 text-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Trusted by 80+ companies across 12 countries
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-display-md lg:text-display-lg">
              We Build{" "}
              <span className="gradient-text">Enterprise Software</span>
              <br />
              That Scales
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              SalaahTech engineers custom software, AI applications, CRM, ERP, SaaS
              platforms, and mobile apps — delivering world-class digital products
              for ambitious businesses.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Book Free Consultation
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                View Case Studies
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["Custom Software", "AI & LLM", "CRM & ERP", "Mobile Apps", "SaaS", "Cloud"].map(
                (tag) => (
                  <span key={tag} className="flex items-center gap-1.5">
                    <span className="text-primary">✓</span> {tag}
                  </span>
                )
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
