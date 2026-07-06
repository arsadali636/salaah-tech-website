"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  faqs: { question: string; answer: string }[];
};

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className={cn(
              "rounded-2xl border transition-all duration-300 bg-surface",
              isOpen ? "border-primary/30 shadow-soft" : "border-surface-border"
            )}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="flex w-full items-center justify-between p-5 text-left font-semibold text-foreground select-none"
            >
              <span>{faq.question}</span>
              <span
                className={cn(
                  "ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground transition-transform duration-300",
                  isOpen && "rotate-180 bg-primary/10 text-primary"
                )}
              >
                ▼
              </span>
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[500px]" : "max-h-0"
              )}
            >
              <div className="border-t border-surface-border/50 p-5 text-sm leading-relaxed text-muted-foreground bg-muted/10">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
