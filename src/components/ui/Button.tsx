import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "./Button.css";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  /** Internal route — renders a React Router <Link>. */
  to?: string;
  /** External URL or mailto/tel — renders an <a>. Ignored if `to` is set. */
  href?: string;
  variant?: Variant;
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

/**
 * Shared call-to-action button. Renders a React Router <Link> for internal
 * routes, a plain <a> for external URLs/mailto/tel, or a native <button>
 * for in-page actions — always with one consistent visual language.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
