import Hero from "@/components/home/Hero";
import { TrustBar } from "@/components/home/ContactCTA";
import StatsSection from "@/components/home/StatsSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import AISection, { MobileSection } from "@/components/home/AISection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TechStackSection from "@/components/home/TechStackSection";
import ProcessSection, { WhyChooseSection, SecuritySection } from "@/components/home/ProcessSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";
import { JsonLd, organizationSchema, faqSchema, localBusinessSchema } from "@/components/seo/JsonLd";
import { homeFaqs } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      <JsonLd
        data={[organizationSchema(), localBusinessSchema(), faqSchema(homeFaqs)]}
      />
      <main>
        <Hero />
        <TrustBar />
        <StatsSection />
        <ExpertiseSection />
        <AISection />
        <MobileSection />
        <IndustriesSection />
        <TechStackSection />
        <ProcessSection />
        <WhyChooseSection />
        <SecuritySection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactCTA />
      </main>
    </>
  );
}
