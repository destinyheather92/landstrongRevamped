import Blob from "./Blob";
import "./PhotoPanel.css";

interface PhotoPanelProps {
  src: string;
  alt: string;
  label?: string;
  /** CSS aspect-ratio value, e.g. "4 / 5" for a portrait crop. */
  aspectRatio?: string;
}

/**
 * A real photograph framed with the same soft organic blobs used behind
 * <HeroVideo> and the illustrated <VisualPanel>s — so a real photo slots
 * into the same warm, layered visual language instead of looking bolted on.
 */
export default function PhotoPanel({ src, alt, label, aspectRatio = "4 / 5" }: PhotoPanelProps) {
  return (
    <div className="photo-panel-wrap">
      <Blob color="var(--color-terracotta-light)" className="photo-panel__blob photo-panel__blob--1" />
      <Blob color="var(--color-gold)" className="photo-panel__blob photo-panel__blob--2" />
      <div className="photo-panel" style={{ aspectRatio }}>
        <img src={src} alt={alt} className="photo-panel__img" />
      </div>
      {label && <p className="photo-panel__label">{label}</p>}
    </div>
  );
}
