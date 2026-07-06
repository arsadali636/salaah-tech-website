import { techStack } from "@/data/technologies";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export default function AISection() {
  return (
    <Section id="ai">
      <FadeIn>
        <SectionHeader
          eyebrow="AI & Intelligent Systems"
          title="AI-First Engineering"
          description="We build intelligent systems using the latest AI frameworks, LLMs, and vector databases — from chatbots to multi-agent workflows."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-10 rounded-2xl border border-surface-border bg-gradient-to-br from-primary-muted via-surface to-accent p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "AI Agents & Multi-Agent Systems", desc: "Autonomous agents that plan, execute, and collaborate using MCP, CrewAI, and LangGraph." },
              { title: "RAG & Vector Search", desc: "Retrieval-augmented generation with Pinecone, Weaviate, ChromaDB, and custom embeddings." },
              { title: "LLM Integration", desc: "OpenAI, Claude, Gemini, Llama, and Mistral — integrated with guardrails and cost optimization." },
              { title: "Document AI & OCR", desc: "Intelligent document processing, extraction, and classification pipelines." },
              { title: "Voice AI & Chatbots", desc: "Conversational interfaces for web, mobile, WhatsApp, and voice channels." },
              { title: "AI Workflow Automation", desc: "End-to-end automation of business processes with intelligent decision-making." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-surface/80 p-5 backdrop-blur-sm">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {techStack.ai.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export function MobileSection() {
  return (
    <Section id="mobile" className="bg-muted/50">
      <FadeIn>
        <SectionHeader
          eyebrow="Mobile Development"
          title="Premium Mobile Applications"
          description="Native and cross-platform mobile apps engineered for performance, security, and exceptional user experience."
        />
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Android",
            icon: "🤖",
            tech: techStack.mobile.android,
          },
          {
            title: "iOS",
            icon: "🍎",
            tech: techStack.mobile.ios,
          },
          {
            title: "Cross-Platform",
            icon: "📱",
            tech: [...techStack.mobile.crossPlatform, ...techStack.mobile.architecture],
          },
        ].map((platform) => (
          <FadeIn key={platform.title}>
            <div className="rounded-2xl border border-surface-border bg-surface p-6 card-hover h-full">
              <span className="text-3xl">{platform.icon}</span>
              <h3 className="mt-3 text-xl font-bold">{platform.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {platform.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
