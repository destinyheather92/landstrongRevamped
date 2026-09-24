import type { ElementType, ReactNode } from "react";
import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: ElementType;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Heading = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className="section-heading__title" id={id}>
        {title}
      </Heading>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
