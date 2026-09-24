import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on every route change, respecting reduced motion. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [pathname]);

  return null;
}
