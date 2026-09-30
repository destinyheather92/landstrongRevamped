import "./Blob.css";

interface BlobProps {
  color?: string;
  className?: string;
}

/**
 * A soft, hand-drawn-feeling organic shape used as decorative background
 * texture. Purely visual — always aria-hidden.
 */
export default function Blob({ color = "var(--decor-primary)", className = "" }: BlobProps) {
  return (
    <svg
      className={`blob ${className}`}
      aria-hidden="true"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M45.8,-58.6C58.4,-49.7,66.5,-33.8,69.9,-17.3C73.3,-0.8,72,16.3,64.2,29.9C56.5,43.6,42.2,53.8,26.7,60.8C11.2,67.8,-5.6,71.5,-21.2,67.7C-36.8,63.9,-51.2,52.6,-60.1,38.1C-69,23.6,-72.4,5.9,-69.1,-10.4C-65.8,-26.7,-55.8,-41.6,-42.5,-50.6C-29.2,-59.6,-14.6,-62.7,1.7,-65C18,-67.3,36,-67.5,45.8,-58.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
