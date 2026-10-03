import usePageMeta from "../hooks/usePageMeta";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";
import Accordion from "../components/ui/Accordion";
import CTASection from "../components/ui/CTASection";
import Divider from "../components/ui/Divider";
import { Icon } from "../components/icons/DecorativeIcons";
import { businessInfo, faqItems, resourceArticles } from "../data/siteContent";
import "./Resources.css";

const tagToneMap: Record<string, "terracotta" | "sage" | "gold" | "plum"> = {
  "Nervous System": "sage",
  Burnout: "terracotta",
  Mindfulness: "gold",
  Boundaries: "plum",
  "Getting Started": "sage",
  Reflection: "terracotta",
};

export default function Resources() {
  usePageMeta(
    "Resources",
    "Grounding exercises, honest reflections, and practical nervous-system tools from LandStrong Coaching & Consulting."
  );

  return (
    <>
      <section className="section resources-hero page-hero">
        <div className="container resources-hero__inner">
          <p className="eyebrow">Resources</p>
          <h1>Small tools for hard days.</h1>
          <p className="resources-hero__lede max-prose">
            No thirty-step morning routines here. Just honest, practical writing on stress, burnout, and getting
            back to yourself — the kind of thing you can actually read on a lunch break.
          </p>
        </div>
      </section>

      <Divider color="var(--section-alt)" />

      <section className="section resources-grid-section">
        <div className="container">
          <SectionHeading eyebrow="From the journal" title="Grounded reading, no jargon required" />
          <div className="resources-grid">
            {resourceArticles.map((article) => (
              <article key={article.title} className="resource-card">
                <div className="resource-card__meta">
                  <Badge tone={tagToneMap[article.tag] ?? "terracotta"}>{article.tag}</Badge>
                  <span className="resource-card__read-time">{article.readTime}</span>
                </div>
                <h3 className="resource-card__title">{article.title}</h3>
                <p className="resource-card__excerpt">{article.excerpt}</p>
              </article>
            ))}
          </div>
          <p className="resources-grid__note text-center">
            New reflections are added regularly — follow along on{" "}
            <a href="https://www.instagram.com/landstrongcc/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{" "}
            or ask about the full library at your next consultation.
          </p>
        </div>
      </section>

      <Divider color="var(--section-contrast)" />

      <section className="section section--ink grounding-section">
        <div className="container grounding-section__inner">
          <div className="grounding-card">
            <div className="grounding-card__icon">
              <Icon name="wave" />
            </div>
            <h2>A 90-second reset for the middle of a hard day</h2>
            <ol className="grounding-steps">
              <li>Feel your feet. Both of them. Notice the floor holding you up.</li>
              <li>Exhale twice as long as you inhale — four counts in, eight counts out.</li>
              <li>Name three things you can see, without judging any of them.</li>
              <li>Ask: "What do I need in the next five minutes?" Then do that one thing.</li>
            </ol>
            <p className="grounding-card__footnote">
              No candles, no thirty minutes to spare — just a parking lot, a bathroom stall, or the kitchen sink.
            </p>
          </div>
        </div>
      </section>

      <Divider color="var(--background)" flip />

      <section className="section section--alt">
        <div className="container">
          <SectionHeading align="center" eyebrow="Questions" title="Frequently asked questions" />
          <div className="faq-wrap">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Still have questions?"
        title="Reach out — you'll hear back from a person, not a bot."
        subtitle="If you can't find what you're looking for here, send a note directly."
        primaryAction={{ label: "Contact LandStrong", to: "/contact" }}
        secondaryAction={{ label: "Book a Free Consultation", href: businessInfo.bookingUrl }}
      />
    </>
  );
}
