import { testimonials } from "@/data/testimonials";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <FadeIn>
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the businesses we've helped transform."
        />
      </FadeIn>

      <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <StaggerItem key={t.author}>
            <blockquote className="rounded-2xl border border-surface-border bg-surface p-6 card-hover h-full">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 border-t border-surface-border pt-4">
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </footer>
            </blockquote>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
