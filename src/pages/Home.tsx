import usePageMeta from "../hooks/usePageMeta";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";
import QuoteBlock from "../components/ui/QuoteBlock";
import ContentSection from "../components/ui/ContentSection";
import VisualPanel from "../components/ui/VisualPanel";
import HeroVideo from "../components/ui/HeroVideo";
import CTASection from "../components/ui/CTASection";
import Divider from "../components/ui/Divider";
import Badge from "../components/ui/Badge";
import { Icon } from "../components/icons/DecorativeIcons";
import heroVideo from "../assets/herointro.mp4";
import heroVideoPoster from "../assets/julie.webp";
import {
  businessInfo,
  founderCredentials,
  homeTestimonials,
  services,
  siteMeta,
  valuePillars,
} from "../data/siteContent";
import "./Home.css";

const relatableFeelings = [
  "Stress that doesn't clock out",
  "Burnout hiding behind a to-do list",
  "Motherhood, caregiving, and everyone's needs but yours",
  "Career pressure and the fear of dropping a ball",
  "Identity changes after a big life transition",
  "Brain fog, racing thoughts, and constant responsibility",
];

export default function Home() {
  usePageMeta(
    "Home",
    "LandStrong Coaching & Consulting helps women exit survival mode through nervous-system-informed coaching, group journeys, and workshops."
  );

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero section page-hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Coaching &amp; Consulting for Women</p>
            <h1 className="hero__title">
              You've held it together long enough. <span className="hero__title-accent">Let's build something steadier.</span>
            </h1>
            <p className="hero__subtitle">
              {siteMeta.tagline} LandStrong is coaching and consulting for capable, exhausted women ready to stop
              performing "fine" and start feeling like themselves again.
            </p>
            <div className="hero__actions">
              <Button href={businessInfo.bookingUrl} size="lg">
                Book a Free Consultation
              </Button>
              <Button to="/about" variant="secondary" size="lg">
                Meet Me
              </Button>
            </div>
            <ul className="hero__credentials" aria-label="Founder credentials">
              {founderCredentials.map((credential) => (
                <li key={credential}>
                  <Badge tone="sage">{credential}</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero__media">
            <HeroVideo
              src={heroVideo}
              poster={heroVideoPoster}
              label="Me, unscripted — hit play."
            />
          </div>
        </div>
      </section>

      <Divider color="var(--section-alt)" />

      {/* ---------- Relatable pain points ---------- */}
      <section className="section section--alt relatable">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Sound familiar?"
            title="From the outside, you look completely fine."
            subtitle="On the inside, you're running on fumes — and you're tired of pretending otherwise. You're not broken. You're depleted. There's a difference, and it changes everything about how we work together."
          />
          <ul className="relatable__grid">
            {relatableFeelings.map((feeling) => (
              <li key={feeling} className="relatable__item">
                <span className="relatable__dot" aria-hidden="true" />
                {feeling}
              </li>
            ))}
          </ul>
          <p className="relatable__note text-center max-prose">
            You are capable, intelligent, funny, complicated, resilient, and human. This isn't about fixing you —
            it's about giving the steady, together woman everyone already relies on somewhere to finally exhale.
          </p>
        </div>
      </section>

      {/* ---------- Services overview ---------- */}
      <section className="section services-section">
        <div className="container">
          <SectionHeading
            eyebrow="Ways to work together"
            title="Find the format that fits your life right now"
            subtitle="Whether you want dedicated one-on-one time, a small circle of women doing this alongside you, or a half-day reset for your team — there's a door in."
          />
          <div className="services-section__grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <Divider color="var(--section-contrast)" />

      {/* ---------- Philosophy / value pillars ---------- */}
      <section className="section--ink section pillars-section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="Grounded science. Zero performative wellness."
            subtitle="No incense required. Just steady, evidence-informed support that respects how much you're already carrying."
          />
          <div className="pillars-section__grid">
            {valuePillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-card__icon">
                  <Icon name={pillar.icon} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider color="var(--background)" flip />

      {/* ---------- Founder teaser ---------- */}
      <section className="section">
        <div className="container">
          <ContentSection
            eyebrow="Who's behind LandStrong"
            title="I've lived it — not just studied it."
            media={<VisualPanel icon="leaf" tone="sage" label="Julie Landers, Founder" />}
          >
            <p>
              I spent years across schools, private practice, and the correctional system watching one pattern
              repeat: stress and a dysregulated nervous system quietly running the show, no matter how capable the
              person in the room was.
            </p>
            <p>
              Then it got personal. Supporting both of my parents through cancer while grieving in graduate school
              taught me something my textbooks couldn't: <strong>“The skills I lived and taught did not remove the
              pain. They allowed me to stay present inside it.”</strong>
            </p>
            <div>
              <Button to="/about" variant="secondary">
                Read my full story
              </Button>
            </div>
          </ContentSection>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section section--alt testimonials-section">
        <div className="container">
          <SectionHeading align="center" eyebrow="In their words" title="Steadier, one honest conversation at a time" />
          <div className="testimonials-section__grid">
            {homeTestimonials.map((testimonial) => (
              <QuoteBlock key={testimonial.quote} quote={testimonial.quote} name={testimonial.name} detail={testimonial.detail} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready when you are"
        title="You don't have to earn your way into feeling better."
        subtitle="A free consultation is just a conversation — no pressure, no worksheets, no pretending you're further along than you are."
        primaryAction={{ label: "Book a Free Consultation", href: businessInfo.bookingUrl }}
        secondaryAction={{ label: "Explore Coaching", to: "/coaching" }}
      />
    </>
  );
}
