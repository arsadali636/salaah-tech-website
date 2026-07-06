import { stats } from "@/data/company";
import { Section } from "@/components/ui/Section";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function StatsSection() {
  return (
    <Section className="!py-12 md:!py-16 border-y border-surface-border bg-surface">
      <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="text-center">
            <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
