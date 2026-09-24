import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import "./ContentSection.css";

interface ContentSectionProps {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  media: ReactNode;
  mediaSide?: "left" | "right";
  id?: string;
}

/**
 * A reusable alternating media + copy layout used across pages (About,
 * Coaching, Workshops). `media` accepts any decorative visual — typically
 * a <VisualPanel> — keeping real photography swappable later without
 * touching layout code.
 */
export default function ContentSection({
  eyebrow,
  title,
  children,
  media,
  mediaSide = "right",
  id,
}: ContentSectionProps) {
  return (
    <div className={`content-section content-section--media-${mediaSide}`}>
      <div className="content-section__media">{media}</div>
      <div className="content-section__body">
        <SectionHeading eyebrow={eyebrow} title={title} id={id} />
        <div className="content-section__copy">{children}</div>
      </div>
    </div>
  );
}
