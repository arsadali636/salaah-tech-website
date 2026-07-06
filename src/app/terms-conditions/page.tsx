import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "SalaahTech terms and conditions for using our website and software development services.",
  path: "/terms-conditions",
});

export default function TermsPage() {
  return (
    <main className="pt-8">
      <Section>
        <h1 className="text-display-sm font-bold">Terms & Conditions</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Welcome to <strong>SalaahTech</strong>. By accessing and using our services, you agree
          to comply with and be bound by the following terms and conditions.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              By using our website and services, you acknowledge that you have read, understood,
              and agree to these terms and conditions.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">2. Use of Services</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              You agree to use our services only for lawful purposes and in accordance with these terms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">3. Intellectual Property</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              All content, trademarks, logos, and intellectual property displayed on our website
              are the property of SalaahTech or their respective owners.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">4. Limitation of Liability</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              We are not liable for any direct, indirect, incidental, or consequential damages
              arising from your use of our services.
            </p>
          </section>
        </div>
      </Section>
    </main>
  );
}
