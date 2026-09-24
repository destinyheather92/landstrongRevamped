import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks, businessInfo, siteMeta } from "../../data/siteContent";
import Button from "../ui/Button";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="navbar">
        <div className="container navbar__inner">
          <NavLink to="/" className="navbar__brand" aria-label={`${siteMeta.name} — home`}>
            <svg viewBox="0 0 48 48" className="navbar__mark" aria-hidden="true">
              <path
                d="M24 6c9 8 13 16 13 23a13 13 0 1 1-26 0c0-7 4-15 13-23Z"
                fill="var(--color-terracotta)"
              />
              <path
                d="M24 18c5 5 7 9.5 7 13.2A7 7 0 1 1 17 31.2c0-3.7 2-8.2 7-13.2Z"
                fill="var(--color-cream)"
              />
            </svg>
            <span className="navbar__wordmark">
              Land<span className="navbar__wordmark-accent">Strong</span>
            </span>
          </NavLink>

          <nav className="navbar__nav navbar__nav--desktop" aria-label="Primary">
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) => `navbar__link${isActive ? " navbar__link--active" : ""}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__cta navbar__cta--desktop">
            <Button href={businessInfo.bookingUrl} size="md">
              Book a Consultation
            </Button>
          </div>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="visually-hidden">{isOpen ? "Close menu" : "Open menu"}</span>
            <span className={`navbar__burger${isOpen ? " navbar__burger--open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/*
        Rendered as a sibling of <header>, not inside it: the header's
        backdrop-filter (for the frosted sticky bar) would otherwise create a
        new containing block for this fixed-position panel, sizing it against
        the header's own height instead of the viewport.
      */}
      <div id="mobile-menu" className={`navbar__mobile${isOpen ? " navbar__mobile--open" : ""}`}>
        <nav aria-label="Mobile primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) => `navbar__mobile-link${isActive ? " navbar__link--active" : ""}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button href={businessInfo.bookingUrl} size="lg" className="navbar__mobile-cta">
          Book a Consultation
        </Button>
      </div>
    </>
  );
}
