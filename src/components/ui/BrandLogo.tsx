import logo from "../../assets/logo.png";
import "./BrandLogo.css";

interface BrandLogoProps {
  label: string;
  className?: string;
}

/**
 * The LandStrong wordmark. The logo artwork is used as an alpha mask rather
 * than shown directly, so its two ink colors come from theme tokens
 * (--logo-primary for "LAND", --logo-accent for "STRONG" and the rules)
 * instead of being baked into the PNG.
 */
export default function BrandLogo({ label, className = "" }: BrandLogoProps) {
  const mask = `url(${logo})`;
  return (
    <span
      role="img"
      aria-label={label}
      className={`brand-logo ${className}`.trim()}
      style={{ WebkitMaskImage: mask, maskImage: mask }}
    />
  );
}
