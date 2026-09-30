import usePageMeta from "../hooks/usePageMeta";
import SectionHeading from "../components/ui/SectionHeading";
import ContentSection from "../components/ui/ContentSection";
import VisualPanel from "../components/ui/VisualPanel";
import QuoteBlock from "../components/ui/QuoteBlock";
import CTASection from "../components/ui/CTASection";
import Divider from "../components/ui/Divider";
import Badge from "../components/ui/Badge";
import { Icon } from "../components/icons/DecorativeIcons";
import { businessInfo, homeTestimonials, workshopAudiences, workshopTopics } from "../data/siteContent";
import "./Workshops.css";

export default function Workshops() {
  usePageMeta(
    "Workshops",
    "Half-day immersive workshops for teams, women's groups, and communities — built on nervous-system science and real conversation, not lectures."
  );

  return (
    <>
      <section className="section workshops-hero">
        <div className="container workshops-hero__inner">
          <p className="eyebrow">Workshops</p>
          <h1>A few hours that reset how your whole group carries stress.</h1>
          <p className="workshops-hero__lede max-prose">
            For teams, communities, and groups of women who are done with wellness trainings that feel like a
            lecture. I bring the science, the honesty, and yes — a little bit of fun.
          </p>
          <div className="workshops-hero__actions">
            <Badge tone="gold">4-hour immersive format</Badge>
            <Badge tone="plum">Custom topics available</Badge>
          </div>
        </div>
      </section>

      <Divider color="var(--section-alt)" />

      <section className="section section--alt">
        <div className="container">
          <ContentSection
            eyebrow="The format"
            title="Half a day. A full reset."
            media={<VisualPanel icon="sun" tone="gold" label="4 hours · in-person, immersive" />}
          >
            <p>
              Every workshop mixes real teaching, guided practice, and honest conversation — never a room full of
              people staring silently at slides. Expect nervous-system science made human, practical tools you'll
              actually use, and space to laugh along the way.
            </p>
            <p>
              Topics are customized to your group. Below are the ones that come up most — but if your team or
              community needs something specific, that conversation starts with a consultation.
            </p>
          </ContentSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Popular topics" title="What we cover (and can customize)" />
          <div className="topics-grid">
            {workshopTopics.map((topic) => (
              <div key={topic.title} className="topic-card">
                <div className="topic-card__icon">
                  <Icon name={topic.icon} />
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider color="var(--section-contrast)" />

      <section className="section section--ink audiences-section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Built for your group"
            title="Who books a LandStrong workshop"
          />
          <ul className="audiences-list">
            {workshopAudiences.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
        </div>
      </section>

      <Divider color="var(--background)" flip />

      <section className="section">
        <div className="container">
          <SectionHeading align="center" eyebrow="From a workshop host" title="What it's actually like in the room" />
          <div className="workshops-quote">
            <QuoteBlock
              quote={homeTestimonials[2].quote}
              name={homeTestimonials[2].name}
              detail={homeTestimonials[2].detail}
            />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Bring this to your group"
        title="Let's build a workshop your team will actually talk about after."
        subtitle="Tell us about your group and what they're carrying — we'll help you shape the right session."
        primaryAction={{ label: "Book a Free Consultation", href: businessInfo.bookingUrl }}
        secondaryAction={{ label: "Contact Us Directly", to: "/contact" }}
      />
    </>
  );
}
