"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const budgets = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const timelines = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "Flexible",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/send-contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNo: formData.phone,
          message: [
            `Company: ${formData.company}`,
            `Service: ${formData.service}`,
            `Budget: ${formData.budget}`,
            `Timeline: ${formData.timeline}`,
            "",
            formData.message,
          ].join("\n"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <main className="pt-8">
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Contact"
            title="Let's Build Something Great"
            description="Tell us about your project. Our engineering team will respond within 24 hours with next steps."
          />
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold">Quick Contact</h2>
                <div className="mt-4 space-y-3 text-sm">
                  <p>
                    <span className="font-medium">Email: </span>
                    <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                      {company.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Phone: </span>
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                      {company.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">WhatsApp: </span>
                    <a
                      href={`https://wa.me/${company.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              {company.locations.map((loc) => (
                <div key={loc.label}>
                  <h3 className="font-semibold">{loc.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{loc.address}</p>
                </div>
              ))}

              <div className="flex flex-col gap-3">
                <Button
                  href={`https://wa.me/${company.whatsapp}?text=Hi%20SalaahTech,%20I%27d%20like%20to%20discuss%20a%20project`}
                  external
                >
                  WhatsApp Us
                </Button>
                <Button href={`mailto:${company.email}`} variant="secondary" external>
                  Email Us
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-surface-border bg-surface p-6 md:p-8"
            >
              <h2 className="text-xl font-bold">Project Inquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form and we&apos;ll get back to you shortly.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
              </div>

              {status === "success" && (
                <p className="mt-4 rounded-lg bg-success/10 px-4 py-3 text-sm text-success">
                  Message sent successfully! We&apos;ll get back to you within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 rounded-lg bg-error/10 px-4 py-3 text-sm text-error">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </FadeIn>
        </div>

        {/* Map */}
        <FadeIn delay={0.2} className="mt-12">
          <iframe
            title="SalaahTech office location in Noida, India"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.052659533659!2d77.31072887526885!3d28.568181387000568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce446ee08ee73%3A0x64ba85f1f8e0a772!2sNoida%20Film%20City!5e0!3m2!1sen!2sin!4v1737394782702!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="rounded-2xl border border-surface-border"
            loading="lazy"
            allowFullScreen
          />
        </FadeIn>
      </Section>
    </main>
  );
}
