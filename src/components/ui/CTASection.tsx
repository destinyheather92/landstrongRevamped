import type { ReactNode } from "react";
import Button from "./Button";
import "./CTASection.css";

interface CTAAction {
  label: string;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

interface CTASectionProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
}

export default function CTASection({ eyebrow, title, subtitle, primaryAction, secondaryAction }: CTASectionProps) {
  return (
    <section className="cta-banner">
      <div className="cta-banner__decor" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path
            d="M24 8c1.4 6 6 8.6 14 9.6-8 1-12.6 3.6-14 9.6-1.4-6-6-8.6-14-9.6 8-1 12.6-3.6 14-9.6Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="container cta-banner__inner">
        {eyebrow && <p className="eyebrow cta-banner__eyebrow">{eyebrow}</p>}
        <h2 className="cta-banner__title">{title}</h2>
        {subtitle && <p className="cta-banner__subtitle">{subtitle}</p>}
        <div className="cta-banner__actions">
          <Button to={primaryAction.to} href={primaryAction.href} variant={primaryAction.variant ?? "primary"} size="lg">
            {primaryAction.label}
          </Button>
          {secondaryAction && (
            <Button
              to={secondaryAction.to}
              href={secondaryAction.href}
              variant={secondaryAction.variant ?? "ghost"}
              size="lg"
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
