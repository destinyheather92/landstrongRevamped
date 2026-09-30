import usePageMeta from "../hooks/usePageMeta";
import SectionHeading from "../components/ui/SectionHeading";
import ContentSection from "../components/ui/ContentSection";
import PhotoPanel from "../components/ui/PhotoPanel";
import QuoteBlock from "../components/ui/QuoteBlock";
import Badge from "../components/ui/Badge";
import CTASection from "../components/ui/CTASection";
import Divider from "../components/ui/Divider";
import { Icon } from "../components/icons/DecorativeIcons";
import julie from "../assets/julie.webp";
import { businessInfo, founderCredentials, founderStory, siteMeta, valuePillars } from "../data/siteContent";
import "./About.css";

export default function About() {
  usePageMeta(
    "About",
    "I'm Julie Landers, founder of LandStrong Coaching & Consulting — this is my story, credentials, and the philosophy behind the work."
  );

  return (
    <>
      <section className="section about-hero">
        <div className="container about-hero__inner">
          <p className="eyebrow">About LandStrong</p>
          <h1>Meet the woman behind the steadiness.</h1>
          <p className="about-hero__lede max-prose">
            LandStrong isn't a wellness brand chasing a trend. It's one woman's hard-won philosophy about what it
            actually takes to stay grounded when life doesn't slow down — built into coaching you can use.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <ContentSection
            eyebrow="Founder & Coach"
            title={founderStory.heading}
            media={
              <PhotoPanel
                src={julie}
                alt={`${siteMeta.founder}, founder of LandStrong Coaching & Consulting`}
                label={siteMeta.founder}
              />
            }
          >
            {founderStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="about-credentials" aria-label="Credentials">
              {founderCredentials.map((credential) => (
                <li key={credential}>
                  <Badge tone="terracotta">{credential}</Badge>
                </li>
              ))}
            </ul>
          </ContentSection>
        </div>
      </section>

      <Divider color="var(--section-alt)" />

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Background"
            title="Years in the room with people under real pressure"
            subtitle="Schools. Private practice. The correctional system. Different rooms, the same pattern: stress and a dysregulated nervous system quietly running the show — no matter how capable the person in front of me was."
          />
          <div className="about-quote">
            <QuoteBlock
              size="lg"
              quote="The skills I lived and taught did not remove the pain. They allowed me to stay present inside it."
              name={siteMeta.founderFirstName}
              detail="Founder, LandStrong Coaching & Consulting"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="What guides the work"
            title="A philosophy, not just a session structure"
          />
          <div className="about-pillars">
            {valuePillars.map((pillar) => (
              <div key={pillar.title} className="about-pillar">
                <div className="about-pillar__icon">
                  <Icon name={pillar.icon} />
                </div>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt mission-section">
        <div className="container mission-section__inner">
          <SectionHeading
            eyebrow="The vision"
            title="Safety across the mind, body, and spirit — then growth."
            subtitle="My vision for LandStrong centers on creating real safety across every dimension of a woman's life: mental, physical, and spiritual. Because lasting change only happens when you feel safe, understood, and accepted first — not managed, fixed, or rushed."
          />
        </div>
      </section>

      <CTASection
        eyebrow="Let's talk"
        title="Curious if this is the right fit?"
        subtitle="A free consultation is a real conversation, not a sales pitch. Bring whatever you've got — even if it's just 'I'm tired and I don't know why.'"
        primaryAction={{ label: "Book a Free Consultation", href: businessInfo.bookingUrl }}
        secondaryAction={{ label: "See Coaching Options", to: "/coaching" }}
      />
    </>
  );
}
