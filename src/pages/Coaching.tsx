import usePageMeta from "../hooks/usePageMeta";
import SectionHeading from "../components/ui/SectionHeading";
import ContentSection from "../components/ui/ContentSection";
import VisualPanel from "../components/ui/VisualPanel";
import QuoteBlock from "../components/ui/QuoteBlock";
import CTASection from "../components/ui/CTASection";
import Divider from "../components/ui/Divider";
import Button from "../components/ui/Button";
import { businessInfo, coachingProcess, homeTestimonials, services } from "../data/siteContent";
import "./Coaching.css";

const individualCoaching = services.find((service) => service.id === "individual-coaching")!;
const groupJourneys = services.find((service) => service.id === "group-journeys")!;

export default function Coaching() {
  usePageMeta(
    "Coaching",
    "Individual coaching and 8-week group journeys for women navigating burnout, stress, and life transitions — nervous-system-informed and always human."
  );

  return (
    <>
      <section className="section coaching-hero">
        <div className="container coaching-hero__inner">
          <p className="eyebrow">Coaching</p>
          <h1>This isn't a productivity hack. It's a way back to yourself.</h1>
          <p className="coaching-hero__lede max-prose">
            Two ways to work with me directly — one-on-one, or alongside a small group of women doing the same
            deep work. Both are grounded in nervous-system science and built around your actual life, not a rigid
            program.
          </p>
          <div className="coaching-hero__actions">
            <Button href={businessInfo.bookingUrl} size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Divider color="var(--color-cream-dark)" />

      <section className="section--alt section">
        <div className="container">
          <ContentSection
            eyebrow={individualCoaching.tagline}
            title={individualCoaching.title}
            media={<VisualPanel icon="leaf" tone="terracotta" label="Weekly · 50-minute sessions" />}
          >
            <p>{individualCoaching.description}</p>
            <ul className="coaching-list">
              {individualCoaching.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div>
              <Button href={businessInfo.bookingUrl} variant="secondary">
                Start with a Consultation
              </Button>
            </div>
          </ContentSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ContentSection
            eyebrow={groupJourneys.tagline}
            title={groupJourneys.title}
            mediaSide="left"
            media={<VisualPanel icon="heart" tone="gold" label="8 weeks · small cohorts of 6–10" />}
          >
            <p>{groupJourneys.description}</p>
            <ul className="coaching-list">
              {groupJourneys.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div>
              <Button href={businessInfo.bookingUrl} variant="secondary">
                Ask About the Next Cohort
              </Button>
            </div>
          </ContentSection>
        </div>
      </section>

      <Divider color="var(--color-ink)" />

      <section className="section section--ink process-section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="What to expect"
            title="Getting started is easier than you think"
          />
          <ol className="process-steps">
            {coachingProcess.map((step) => (
              <li key={step.step} className="process-step">
                <span className="process-step__number">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Divider color="var(--color-cream)" flip />

      <section className="section">
        <div className="container">
          <SectionHeading align="center" eyebrow="Real words" title="What clients say after they start" />
          <div className="coaching-quote">
            <QuoteBlock
              quote={homeTestimonials[0].quote}
              name={homeTestimonials[0].name}
              detail={homeTestimonials[0].detail}
            />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="No pressure, promise"
        title="Not sure which one fits? Let's figure it out together."
        subtitle="A free consultation call is the easiest way to know whether individual coaching or a group journey is the right next step."
        primaryAction={{ label: "Book a Free Consultation", href: businessInfo.bookingUrl }}
        secondaryAction={{ label: "See Workshops Instead", to: "/workshops" }}
      />
    </>
  );
}
