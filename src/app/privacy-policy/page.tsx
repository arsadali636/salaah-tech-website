import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "SalaahTech privacy policy — how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-8">
      <Section>
        <h1 className="text-display-sm font-bold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          At <strong>SalaahTech</strong>, we are committed to protecting your privacy. This Privacy
          Policy outlines how we collect, use, and safeguard your information when you interact
          with our website and services.
        </p>

        <div className="mt-10 space-y-8 prose-sm max-w-none">
          <section>
            <h2 className="text-xl font-bold">1. Information We Collect</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              We may collect personal information such as your name, email address, phone number,
              and any other information you provide voluntarily through our contact forms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
            <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Ensure website security and functionality</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold">3. Contact</h2>
            <p className="mt-2 text-muted-foreground">
              For privacy-related inquiries, contact us at{" "}
              <Link href="/contact" className="text-primary hover:underline">our contact page</Link>.
            </p>
          </section>
        </div>
      </Section>
    </main>
  );
}
