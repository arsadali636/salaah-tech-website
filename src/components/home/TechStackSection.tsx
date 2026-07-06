"use client";

import { useState } from "react";
import { techStack, techCategories } from "@/data/technologies";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export default function TechStackSection() {
  const [active, setActive] = useState("ai");

  const getItems = (): string[] => {
    switch (active) {
      case "ai":
        return techStack.ai.items;
      case "frameworks":
        return techStack.frameworks.items;
      case "frontend":
        return techStack.frontend.items;
      case "backend":
        return techStack.backend.items;
      case "mobile":
        return [
          ...techStack.mobile.android.map((t) => `Android: ${t}`),
          ...techStack.mobile.ios.map((t) => `iOS: ${t}`),
          ...techStack.mobile.crossPlatform.map((t) => `Cross: ${t}`),
          ...techStack.mobile.architecture,
        ];
      case "database":
        return techStack.database.items;
      case "devops":
        return techStack.devops.items;
      default:
        return [];
    }
  };

  return (
    <Section id="technology" className="bg-muted/50">
      <FadeIn>
        <SectionHeader
          eyebrow="Technology Stack"
          title="Built with Modern Technologies"
          description="We master 50+ technologies across AI, frontend, backend, mobile, database, and cloud — choosing the right stack for every project."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === cat.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "border border-surface-border bg-surface text-muted-foreground hover:border-primary/30"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {getItems().map((item) => (
            <span
              key={item}
              className="rounded-xl border border-surface-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground card-hover"
            >
              {item}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
