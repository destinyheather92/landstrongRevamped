import Blob from "./Blob";
import "./HeroVideo.css";

interface HeroVideoProps {
  src: string;
  poster: string;
  /** CSS aspect-ratio value, e.g. "1 / 1" or "16 / 9". Defaults to the source clip's own 1:1 shape. */
  aspectRatio?: string;
  label?: string;
}

/**
 * The real, human centerpiece of the homepage hero: a native <video>
 * (no autoplay — nothing loads until the visitor presses play) framed with
 * the same soft organic blobs used elsewhere in place of stock photography.
 */
export default function HeroVideo({ src, poster, aspectRatio = "1 / 1", label }: HeroVideoProps) {
  return (
    <div className="hero-video-wrap">
      <Blob color="var(--decor-primary)" className="hero-video__blob hero-video__blob--1" />
      <Blob color="var(--decor-secondary)" className="hero-video__blob hero-video__blob--2" />
      <div className="hero-video" style={{ aspectRatio }}>
        <video className="hero-video__el" controls preload="none" poster={poster} playsInline>
          <source src={src} type="video/mp4" />
          Your browser doesn't support embedded video. <a href={src}>Download the video</a> instead.
        </video>
      </div>
      {label && <p className="hero-video__label">{label}</p>}
    </div>
  );
}
