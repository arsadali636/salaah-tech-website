"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Discovery & Strategy",
      tagline: "Phase 1: Defining Scope",
      description:
        "We begin with detailed product scoping. Our software engineers and business analysts map user journeys, technical architectures, and third-party dependencies, creating a transparent blueprint before code is written.",
      deliverables: ["Product specification sheet", "Architecture blueprint", "Cost & timeline milestones"],
    },
    {
      title: "UI/UX Prototyping",
      tagline: "Phase 2: Visualizing Design",
      description:
        "Our designers create modern, pixel-perfect layouts and interactive Figma prototypes. We test layouts for responsiveness, aesthetic excellence, and intuitive navigation loops to confirm the exact look and feel.",
      deliverables: ["Interactive Figma prototype", "Tailored UI design system", "Responsiveness wireframes"],
    },
    {
      title: "Agile Sprints & Stepping",
      tagline: "Phase 3: Clean Engineering",
      description:
        "Our engineering team starts building the codebase in modular sprints. We host live weekly staging previews so you can track product progress in real-time, enforcing clean code, testing, and continuous feedback loops.",
      deliverables: ["Modular code repository access", "Staging environment previews", "Weekly sprint reports"],
    },
    {
      title: "QA & Performance Auditing",
      tagline: "Phase 4: Guaranteeing Quality",
      description:
        "We run extensive manual and automated testing cycles. We test user authentication safety, API speeds, mobile device compatibility, and optimize for Core Web Vitals (LCP, INP, CLS) to ensure blazing fast loads.",
      deliverables: ["Comprehensive QA bug reports", "Core Web Vital speed audits", "Security vulnerability checks"],
    },
    {
      title: "Deploy & Maintenance SLA",
      tagline: "Phase 5: Smooth Production Launch",
      description:
        "We manage production setup, CDN routing, and launch. Post-launch, we monitor logs, execute server security updates, and iterate features based on SLA-backed monitoring agreements to keep your software healthy.",
      deliverables: ["Production environment launch", "Domain, CDN & SEO setup", "SLA monitoring logs access"],
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Left Stepper Buttons */}
      <div className="lg:col-span-5 space-y-3">
        {steps.map((step, index) => {
          const isActive = activeStep === index;

          return (
            <button
              key={step.title}
              onClick={() => setActiveStep(index)}
              className={cn(
                "w-full flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 select-none",
                isActive
                  ? "border-primary bg-primary-muted text-primary shadow-soft"
                  : "border-surface-border bg-surface hover:bg-muted/30 text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all",
                  isActive ? "bg-primary text-primary-foreground scale-110" : "bg-muted text-muted-foreground"
                )}
              >
                0{index + 1}
              </span>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/75">
                  {step.tagline.split(":")[0]}
                </span>
                <span className="block text-sm font-bold text-foreground mt-0.5">{step.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Details Card */}
      <div className="lg:col-span-7 rounded-2xl border border-surface-border bg-surface p-6 shadow-card flex flex-col justify-between">
        <div className="space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary">
            {steps[activeStep].tagline}
          </span>
          <h3 className="text-xl font-bold text-foreground">{steps[activeStep].title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{steps[activeStep].description}</p>
        </div>

        <div className="mt-6 border-t border-surface-border/50 pt-6">
          <span className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
            Key Deliverables
          </span>
          <ul className="grid gap-2 sm:grid-cols-2">
            {steps[activeStep].deliverables.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <span className="text-primary font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
