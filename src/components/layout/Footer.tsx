import { Link } from "react-router-dom";
import { businessInfo, navLinks, siteMeta, socialLinks } from "../../data/siteContent";
import BrandLogo from "../ui/BrandLogo";
import "./Footer.css";

function SocialIcon({ icon }: { icon: "instagram" | "linkedin" | "facebook" }) {
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <line x1="7.5" y1="10" x2="7.5" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="7.5" cy="7" r="1.2" fill="currentColor" />
        <path
          d="M11.5 17v-4.2c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6V17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M13.8 8.4h-1.3c-.9 0-1.2.4-1.2 1.2v1.6h2.4l-.3 2.4h-2.1V21h-2.5v-7.4H7.2v-2.4h1.6V9.2c0-2 1.1-3.3 3.3-3.3h1.7v2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" aria-label={`${siteMeta.name} — home`}>
            <BrandLogo label={siteMeta.name} className="footer__logo" />
          </Link>
          <p className="footer__tagline">{siteMeta.tagline}</p>
          <ul className="footer__social" aria-label="Follow LandStrong on social media">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LandStrong on ${social.label} (opens in a new tab)`}
                  className="footer__social-link"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <h2 className="footer__heading">Explore</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h2 className="footer__heading">Get in touch</h2>
          <address>
            <p>
              <a href={businessInfo.phoneHref}>{businessInfo.phone}</a>
            </p>
            <p>
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </p>
            <p>
              {businessInfo.address.line1}
              <br />
              {businessInfo.address.line2}
            </p>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} {siteMeta.name}. All rights reserved.
          </p>
          <p className="footer__signature">Made with steadiness, not stock photos.</p>
        </div>
      </div>
    </footer>
  );
}
