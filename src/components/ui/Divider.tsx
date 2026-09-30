import "./Divider.css";

interface DividerProps {
  /** Fill color for the shape — pass a CSS color value. */
  color?: string;
  flip?: boolean;
  variant?: "wave" | "curve";
}

/**
 * A soft, organic section divider (in place of a hard straight edge) to keep
 * the page feeling hand-made rather than boxed into rigid rectangles.
 */
export default function Divider({ color = "var(--background)", flip = false, variant = "wave" }: DividerProps) {
  const path =
    variant === "wave"
      ? "M0 40 C 180 100, 360 0, 540 45 C 720 90, 900 10, 1080 50 C 1260 85, 1350 40, 1440 55 L1440 120 L0 120 Z"
      : "M0 80 C 360 0, 1080 0, 1440 80 L1440 120 L0 120 Z";

  return (
    <div
      aria-hidden="true"
      className="divider"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" width="100%" height="100%">
        <path d={path} fill={color} />
      </svg>
    </div>
  );
}
