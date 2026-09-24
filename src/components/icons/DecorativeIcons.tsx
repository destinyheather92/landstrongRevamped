import type { ReactElement, SVGProps } from "react";

/**
 * A small family of original, hand-drawn-feel line icons used throughout the
 * site for warmth and personality. All are decorative by default
 * (aria-hidden) — components using them for meaning supply their own
 * accessible label on the wrapping element.
 */
export type IconName = "leaf" | "sun" | "heart" | "sparkle" | "wave" | "star";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 34C8 24 12 12 28 8c4 12-1 24-11 27-3 1-4 0-5-1Z"
        stroke="currentColor"
      />
      <path d="M14 32c4-8 9-13 15-17" stroke="currentColor" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="9" stroke="currentColor" />
      <path
        d="M24 4v6M24 38v6M4 24h6M38 24h6M9.5 9.5l4.2 4.2M34.3 34.3l4.2 4.2M9.5 38.5l4.2-4.2M34.3 13.7l4.2-4.2"
        stroke="currentColor"
      />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M24 39C13 31 6 24.5 6 16.8 6 11 10.6 7 16 7c3.4 0 6.4 1.8 8 4.6C25.6 8.8 28.6 7 32 7c5.4 0 10 4 10 9.8 0 7.7-7 14.2-18 22.2Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M20 6c1.2 6.4 3 9.6 9.4 11-6.4 1.4-8.2 4.6-9.4 11-1.2-6.4-3-9.6-9.4-11 6.4-1.4 8.2-4.6 9.4-11Z"
        stroke="currentColor"
      />
      <path
        d="M35 26c.7 3.6 1.7 5.4 5.3 6.2-3.6.8-4.6 2.6-5.3 6.2-.7-3.6-1.7-5.4-5.3-6.2 3.6-.8 4.6-2.6 5.3-6.2Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function WaveIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 20c4-5 8-5 12 0s8 5 12 0 8-5 12 0"
        stroke="currentColor"
      />
      <path
        d="M4 30c4-5 8-5 12 0s8 5 12 0 8-5 12 0"
        stroke="currentColor"
      />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M24 6l4.6 11.4L40 22l-11.4 4.6L24 38l-4.6-11.4L8 22l11.4-4.6Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export const iconMap: Record<IconName, (props: IconProps) => ReactElement> = {
  leaf: LeafIcon,
  sun: SunIcon,
  heart: HeartIcon,
  sparkle: SparkleIcon,
  wave: WaveIcon,
  star: StarIcon,
};

export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Component = iconMap[name];
  return <Component {...props} />;
}
