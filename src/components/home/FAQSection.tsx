"use client";

import { useState } from "react";
import { homeFaqs } from "@/data/testimonials";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-muted/50">
      <FadeIn>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with SalaahTech."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-surface-border rounded-2xl border border-surface-border bg-surface">
          {homeFaqs.map((faq, i) => (
            <div key={i}>
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="pr-4 font-semibold text-foreground">{faq.question}</span>
                <span
                  className={cn(
                    "shrink-0 text-xl text-primary transition-transform duration-300",
                    open === i && "rotate-45"
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  open === i ? "max-h-96 pb-5" : "max-h-0"
                )}
              >
                <p className="px-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
