import "./QuoteBlock.css";

interface QuoteBlockProps {
  quote: string;
  name?: string;
  detail?: string;
  size?: "md" | "lg";
}

export default function QuoteBlock({ quote, name, detail, size = "md" }: QuoteBlockProps) {
  return (
    <figure className={`quote-block quote-block--${size}`}>
      <span className="quote-block__mark" aria-hidden="true">
        “
      </span>
      <blockquote className="quote-block__text">
        <p>{quote}</p>
      </blockquote>
      {(name || detail) && (
        <figcaption className="quote-block__caption">
          {name && <span className="quote-block__name">{name}</span>}
          {detail && <span className="quote-block__detail">{detail}</span>}
        </figcaption>
      )}
    </figure>
  );
}
