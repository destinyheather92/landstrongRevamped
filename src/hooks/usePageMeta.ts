import { useEffect } from "react";

/**
 * Sets the document title and meta description for the current page.
 * A tiny, dependency-free stand-in for a full head-management library —
 * enough for a static, client-rendered marketing site.
 */
export default function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | LandStrong Coaching & Consulting`;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, [title, description]);
}
