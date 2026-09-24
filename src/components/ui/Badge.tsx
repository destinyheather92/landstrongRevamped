import type { ReactNode } from "react";
import "./Badge.css";

interface BadgeProps {
  children: ReactNode;
  tone?: "terracotta" | "sage" | "gold" | "plum";
}

export default function Badge({ children, tone = "terracotta" }: BadgeProps) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
