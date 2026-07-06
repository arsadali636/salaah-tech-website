import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.title} Company`,
    description: service.description.slice(0, 160),
    path: `/services/${slug}`,
    keywords: [service.title, service.category, "SalaahTech", "software development"],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", url: "https://salaahtech.com" },
            { name: "Services", url: "https://salaahtech.com/services" },
            { name: service.title, url: `https://salaahtech.com/services/${slug}` },
          ]),
        ]}
      />

      <main className="pt-8">
        {/* Hero */}
        <Section className="!pb-12">
          <FadeIn>
            <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-primary">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{service.title}</span>
            </nav>
            <span className="rounded-full bg-primary-muted px-3 py-1 text-xs font-medium text-primary">
              {service.category}
            </span>
            <h1 className="mt-4 text-display-sm font-bold tracking-tight md:text-display-md">
              {service.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Book Free Consultation</Button>
              <Button href="/contact" variant="secondary">Get Custom Quote</Button>
            </div>
          </FadeIn>
        </Section>

        {/* Features */}
        <Section className="bg-muted/50 !py-12">
          <FadeIn>
            <h2 className="text-2xl font-bold">What We Deliver</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-surface-border bg-surface p-4">
                  <span className="mt-0.5 text-primary">✓</span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Section>

        {/* Technologies */}
        <Section className="!py-12">
          <FadeIn>
            <h2 className="text-2xl font-bold">Technologies We Use</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-surface-border bg-surface px-4 py-2 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </Section>

        {/* FAQ */}
        <Section className="bg-muted/50 !py-12">
          <FadeIn>
            <SectionHeader title="Frequently Asked Questions" align="left" />
            <div className="mt-8 space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-surface-border bg-surface p-5">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>

        {/* Related + CTA */}
        {related.length > 0 && (
          <Section className="!py-12">
            <FadeIn>
              <h2 className="text-2xl font-bold">Related Services</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-xl border border-surface-border bg-surface p-5 card-hover"
                  >
                    <h3 className="font-semibold hover:text-primary">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </Section>
        )}

        <Section dark className="!py-16">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Ready to Start Your {service.title} Project?</h2>
              <p className="mt-4 text-zinc-400">
                Schedule a free discovery call and get a detailed proposal within 48 hours.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button href="/contact" size="lg">Start Your Project</Button>
                <Button href="/portfolio" variant="secondary" size="lg">View Case Studies</Button>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>
    </>
  );
}
