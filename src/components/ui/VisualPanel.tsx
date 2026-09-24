import { Icon, type IconName } from "../icons/DecorativeIcons";
import Blob from "./Blob";
import "./VisualPanel.css";

interface VisualPanelProps {
  icon?: IconName;
  tone?: "terracotta" | "sage" | "gold" | "plum";
  label?: string;
  pattern?: "dots" | "none";
}

/**
 * A decorative stand-in for photography: a warm, organic panel built from
 * layered shapes rather than a stock photo. Purely visual (aria-hidden) —
 * pages that need to convey information use real text alongside it, and
 * this can be swapped 1:1 for a real <img> once brand photography exists.
 */
export default function VisualPanel({ icon = "sun", tone = "terracotta", label, pattern = "dots" }: VisualPanelProps) {
  return (
    <div className={`visual-panel visual-panel--${tone}`} aria-hidden="true">
      <Blob color="var(--panel-blob-1)" className="visual-panel__blob visual-panel__blob--1" />
      <Blob color="var(--panel-blob-2)" className="visual-panel__blob visual-panel__blob--2" />
      {pattern === "dots" && <div className="visual-panel__dots" />}
      <div className="visual-panel__icon">
        <Icon name={icon} />
      </div>
      {label && <span className="visual-panel__label">{label}</span>}
    </div>
  );
}
