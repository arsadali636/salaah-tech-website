import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Careers at SalaahTech",
  description:
    "Join SalaahTech — build enterprise software, AI applications, and mobile apps with a world-class engineering team. View open positions and internship opportunities.",
  path: "/careers",
});

const openings = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Noida, India / Remote",
    department: "Engineering",
  },
  {
    title: "Flutter Developer",
    type: "Full-time",
    location: "Noida, India / Remote",
    department: "Mobile",
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    department: "AI",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Noida, India / Remote",
    department: "Design",
  },
  {
    title: "Software Engineering Intern",
    type: "Internship",
    location: "Noida, India",
    department: "Engineering",
  },
];

export default function CareersPage() {
  return (
    <main className="pt-8">
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Careers"
            title="Life at SalaahTech"
            description="Join a team of passionate engineers building software that matters. We offer challenging projects, growth opportunities, and a culture of excellence."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Innovative Projects", desc: "Work on AI, enterprise software, and cutting-edge mobile apps for global clients." },
              { title: "Growth Culture", desc: "Continuous learning, mentorship, and opportunities to lead projects and teams." },
              { title: "Flexible Work", desc: "Remote-friendly with offices in Noida and Dubai. Work-life balance matters." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-surface-border bg-surface p-6 card-hover">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-muted/50">
        <FadeIn>
          <h2 className="text-2xl font-bold">Open Positions</h2>
        </FadeIn>
        <div className="mt-8 space-y-4">
          {openings.map((job) => (
            <FadeIn key={job.title}>
              <div className="flex flex-col justify-between gap-4 rounded-2xl border border-surface-border bg-surface p-6 sm:flex-row sm:items-center card-hover">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.department} · {job.type} · {job.location}
                  </p>
                </div>
                <Button href="/contact" variant="secondary" size="sm">
                  Apply Now
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <h2 className="text-2xl font-bold">Hiring Process</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {[
              { step: "1", title: "Apply", desc: "Submit your resume and portfolio" },
              { step: "2", title: "Screen", desc: "Initial call with our team" },
              { step: "3", title: "Technical", desc: "Skills assessment & interview" },
              { step: "4", title: "Offer", desc: "Join the SalaahTech team" },
            ].map((s) => (
              <div key={s.step} className="text-center rounded-2xl border border-surface-border bg-surface p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {s.step}
                </span>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </main>
  );
}
