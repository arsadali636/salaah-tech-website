"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

type ProjectCalculatorProps = {
  serviceTitle: string;
};

export default function ProjectCalculator({ serviceTitle }: ProjectCalculatorProps) {
  const router = useRouter();

  // Inputs
  const [platform, setPlatform] = useState<"web" | "mobile" | "both">("web");
  const [scope, setScope] = useState<"mvp" | "mid" | "enterprise">("mvp");
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<"rush" | "standard" | "flexible">("standard");

  // Outputs
  const [costRange, setCostRange] = useState({ min: 0, max: 0 });
  const [durationRange, setDurationRange] = useState({ min: 0, max: 0 });

  const featureOptions = [
    { id: "auth", label: "User Auth & Profiles", cost: 1200, time: 1 },
    { id: "payments", label: "Payment Gateway & Billing", cost: 1500, time: 1.5 },
    { id: "notifications", label: "Push Notifications", cost: 800, time: 0.5 },
    { id: "admin", label: "Admin & Analytics Dashboard", cost: 2000, time: 2 },
    { id: "ai", label: "AI & LLM Integration", cost: 3500, time: 3 },
    { id: "multilingual", label: "Multi-language Support", cost: 1000, time: 1 },
  ];

  const toggleFeature = (id: string) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    // 1. Calculate Base Cost and Duration
    let baseMinCost = 0;
    let baseMaxCost = 0;
    let baseMinTime = 0;
    let baseMaxTime = 0;

    // Platform multiplier base
    if (platform === "web") {
      baseMinCost = 2000;
      baseMaxCost = 4000;
      baseMinTime = 1.5;
      baseMaxTime = 2.5;
    } else if (platform === "mobile") {
      baseMinCost = 3000;
      baseMaxCost = 6000;
      baseMinTime = 2;
      baseMaxTime = 3;
    } else {
      baseMinCost = 6000;
      baseMaxCost = 10000;
      baseMinTime = 2.5;
      baseMaxTime = 4;
    }


    // Scope multiplier
    if (scope === "mid") {
      baseMinCost *= 1.8;
      baseMaxCost *= 1.8;
      baseMinTime *= 1.5;
      baseMaxTime *= 1.5;
    } else if (scope === "enterprise") {
      baseMinCost *= 3.5;
      baseMaxCost *= 3.5;
      baseMinTime *= 2.5;
      baseMaxTime *= 2.5;
    }

    // 2. Add features
    let featureCost = 0;
    let featureTime = 0;
    features.forEach((fId) => {
      const option = featureOptions.find((opt) => opt.id === fId);
      if (option) {
        featureCost += option.cost;
        featureTime += option.time;
      }
    });

    let totalMinCost = baseMinCost + featureCost;
    let totalMaxCost = baseMaxCost + featureCost * 1.25;
    let totalMinTime = baseMinTime + featureTime;
    let totalMaxTime = baseMaxTime + featureTime * 1.2;

    // 3. Timeline adjustment
    if (timeline === "rush") {
      // Rush adds 25% premium cost but reduces timeline by 30%
      totalMinCost *= 1.25;
      totalMaxCost *= 1.25;
      totalMinTime *= 0.7;
      totalMaxTime *= 0.75;
    } else if (timeline === "flexible") {
      // Flexible reduces cost by 10% but increases timeline by 20%
      totalMinCost *= 0.9;
      totalMaxCost *= 0.9;
      totalMinTime *= 1.2;
      totalMaxTime *= 1.25;
    }

    // Ensure logic constraints
    if (totalMinTime < 1) totalMinTime = 1;
    if (totalMaxTime < 1.5) totalMaxTime = 1.5;

    setCostRange({
      min: Math.round(totalMinCost / 500) * 500,
      max: Math.round(totalMaxCost / 500) * 500,
    });
    setDurationRange({
      min: Math.round(totalMinTime * 2) / 2,
      max: Math.round(totalMaxTime * 2) / 2,
    });
  }, [platform, scope, features, timeline]);

  const handleSubmit = () => {
    const featureLabels = features
      .map((fId) => featureOptions.find((opt) => opt.id === fId)?.label)
      .filter(Boolean)
      .join(", ");

    const queryParams = new URLSearchParams({
      service: serviceTitle,
      platform,
      scope,
      features: featureLabels,
      timeline,
      estimate: `$${costRange.min.toLocaleString()} - $${costRange.max.toLocaleString()}`,
      duration: `${durationRange.min}-${durationRange.max} Months`,
    });

    router.push(`/contact?${queryParams.toString()}`);
  };

  return (
    <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-card lg:p-8">
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground">Estimate Your Project Cost</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Select your specifications below to receive an instant timeline & budget projection.
            </p>
          </div>

          {/* Platform selection */}
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide text-foreground">1. Target Platform</span>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "web", label: "Web App" },
                { id: "mobile", label: "Mobile App" },
                { id: "both", label: "Hybrid / Both" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPlatform(item.id as any)}
                  className={`rounded-xl border px-3 py-3 text-xs font-semibold transition-all ${
                    platform === item.id
                      ? "border-primary bg-primary-muted text-primary shadow-soft"
                      : "border-surface-border hover:bg-muted/50 text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scope selection */}
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide text-foreground">2. Project Complexity & Scale</span>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "mvp", label: "MVP / Startup" },
                { id: "mid", label: "Mid-Sized / Growth" },
                { id: "enterprise", label: "Enterprise Scale" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setScope(item.id as any)}
                  className={`rounded-xl border px-3 py-3 text-xs font-semibold transition-all ${
                    scope === item.id
                      ? "border-primary bg-primary-muted text-primary shadow-soft"
                      : "border-surface-border hover:bg-muted/50 text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feature options checkboxes */}
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide text-foreground">3. Core Features Required</span>
            <div className="grid gap-3 sm:grid-cols-2">
              {featureOptions.map((opt) => (
                <label
                  key={opt.id}
                  onClick={() => toggleFeature(opt.id)}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-xs font-medium transition-all select-none ${
                    features.includes(opt.id)
                      ? "border-primary/50 bg-primary-muted/40 text-foreground"
                      : "border-surface-border hover:bg-muted/40 text-muted-foreground"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={features.includes(opt.id)}
                    onChange={() => {}}
                    className="accent-primary h-4 w-4 rounded border-gray-300"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Timeline slider */}
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide text-foreground">4. Preferred Timeline</span>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "flexible", label: "Flexible (6+ mo)" },
                { id: "standard", label: "Standard (3-5 mo)" },
                { id: "rush", label: "Rush Delivery" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTimeline(item.id as any)}
                  className={`rounded-xl border px-3 py-3 text-xs font-semibold transition-all ${
                    timeline === item.id
                      ? "border-primary bg-primary-muted text-primary shadow-soft"
                      : "border-surface-border hover:bg-muted/50 text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-muted/40 p-6 border border-surface-border/50">
          <div className="space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Estimated Summary</span>

            <div className="space-y-2">
              <span className="block text-xs font-medium text-muted-foreground">Estimated Budget</span>
              <div className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
                ${costRange.min.toLocaleString()}{" "}
                <span className="text-lg font-normal text-muted-foreground">to</span>{" "}
                ${costRange.max.toLocaleString()}
              </div>
              <span className="block text-[11px] text-muted-foreground">
                *Pricing estimate in USD, based on development and infrastructure complexity.
              </span>
            </div>

            <div className="border-t border-surface-border/60 my-4" />

            <div className="space-y-1">
              <span className="block text-xs font-medium text-muted-foreground">Estimated Timeline</span>
              <div className="text-xl font-bold text-foreground">
                {durationRange.min} - {durationRange.max} Months
              </div>
              <span className="block text-[11px] text-muted-foreground">
                Includes planning, design sprints, staging review, and QA.
              </span>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={handleSubmit}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-glow active:scale-[0.98]"
            >
              Get Detailed Proposal
            </button>
            <span className="block text-center text-[10px] text-muted-foreground">
              Submit these specs to our engineering team for a firm SLA proposal.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
