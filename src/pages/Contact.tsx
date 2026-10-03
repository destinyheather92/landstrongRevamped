import { useState, type ChangeEvent, type FormEvent } from "react";
import usePageMeta from "../hooks/usePageMeta";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Divider from "../components/ui/Divider";
import { Icon } from "../components/icons/DecorativeIcons";
import VisualPanel from "../components/ui/VisualPanel";
import { businessInfo, socialLinks } from "../data/siteContent";
import "./Contact.css";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${businessInfo.address.line1}, ${businessInfo.address.line2}`
)}`;

export default function Contact() {
  usePageMeta(
    "Contact",
    "Reach LandStrong Coaching & Consulting by phone, email, or message — or book a free consultation directly."
  );

  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });

  function handleChange(field: keyof typeof formValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues((values) => ({ ...values, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Website inquiry from ${formValues.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${formValues.message}\n\n— ${formValues.name}\n${formValues.email}`
    );

    window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <>
      <section className="section contact-hero page-hero">
        <div className="container contact-hero__inner">
          <p className="eyebrow">Contact</p>
          <h1>Say hello. We'll take it from there.</h1>
          <p className="contact-hero__lede max-prose">
            Whether you're ready to book or just have a question, reaching out doesn't commit you to anything. It's
            just a conversation.
          </p>
        </div>
      </section>

      <Divider color="var(--section-alt)" />

      <section className="section contact-main">
        <div className="container contact-main__grid">
          <div className="contact-info">
            <h2 className="visually-hidden">Contact information</h2>

            <a className="contact-info__card" href={businessInfo.phoneHref}>
              <span className="contact-info__icon">
                <Icon name="sun" />
              </span>
              <span>
                <span className="contact-info__label">Call or text</span>
                <span className="contact-info__value">{businessInfo.phone}</span>
              </span>
            </a>

            <a className="contact-info__card" href={`mailto:${businessInfo.email}`}>
              <span className="contact-info__icon">
                <Icon name="heart" />
              </span>
              <span>
                <span className="contact-info__label">Email</span>
                <span className="contact-info__value">{businessInfo.email}</span>
              </span>
            </a>

            <div className="contact-info__card contact-info__card--static">
              <span className="contact-info__icon">
                <Icon name="leaf" />
              </span>
              <span>
                <span className="contact-info__label">Visit</span>
                <span className="contact-info__value">
                  {businessInfo.address.line1}
                  <br />
                  {businessInfo.address.line2}
                </span>
              </span>
            </div>

            <div className="contact-info__card contact-info__card--static">
              <span className="contact-info__icon">
                <Icon name="sparkle" />
              </span>
              <span>
                <span className="contact-info__label">Hours</span>
                <span className="contact-info__value">By appointment — sessions available virtually and in-person</span>
              </span>
            </div>

            <Button href={businessInfo.bookingUrl} size="lg" className="contact-info__booking">
              Book a Free Consultation
            </Button>

            <ul className="contact-social" aria-label="Follow LandStrong on social media">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-form-wrap">
            <SectionHeading
              eyebrow="Send a message"
              title="Prefer to write it out?"
              subtitle="This opens a pre-filled email in your own inbox — nothing is sent through this website or stored anywhere."
            />
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formValues.name}
                  onChange={handleChange("name")}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formValues.email}
                  onChange={handleChange("email")}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-message">What's on your mind?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formValues.message}
                  onChange={handleChange("message")}
                />
              </div>
              <Button type="submit">Open Email to Send</Button>
              <p role="status" className="contact-form__status">
                {status === "sent" && "Your email app should be opening now — thank you for reaching out."}
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="section section--alt contact-map-section">
        <div className="container">
          <SectionHeading align="center" eyebrow="Find us" title="Cumming, Georgia" />
          <div className="contact-map">
            <div className="contact-map__media">
              <VisualPanel icon="sun" tone="terracotta" pattern="dots" />
            </div>
            <div className="contact-map__details">
              <p className="contact-map__address">
                {businessInfo.address.line1}
                <br />
                {businessInfo.address.line2}
              </p>
              <Button href={directionsUrl} variant="secondary">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
