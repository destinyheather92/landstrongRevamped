import { Link } from "react-router-dom";
import { Icon } from "../icons/DecorativeIcons";
import type { Service } from "../../data/types";
import "./ServiceCard.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-card__icon" aria-hidden="true">
        <Icon name={service.icon} />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__tagline">{service.tagline}</p>
      <p className="service-card__description">{service.description}</p>
      <ul className="service-card__bullets">
        {service.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="service-card__footer">
        <span className="service-card__format">{service.format}</span>
        <Link to={service.href} className="service-card__link">
          Learn more
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
