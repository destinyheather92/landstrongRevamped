import usePageMeta from "../hooks/usePageMeta";
import Button from "../components/ui/Button";
import { Icon } from "../components/icons/DecorativeIcons";
import "./NotFound.css";

export default function NotFound() {
  usePageMeta("Page Not Found", "This page doesn't exist — let's get you back on steady ground.");

  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <div className="not-found__icon">
          <Icon name="sparkle" />
        </div>
        <p className="eyebrow">404</p>
        <h1>Even steady ground has a few missing pages.</h1>
        <p className="not-found__lede max-prose">
          This page wandered off somewhere. Let's get you back to something useful.
        </p>
        <div className="not-found__actions">
          <Button to="/" size="lg">
            Back to Home
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
