import { useLayoutEffect, useState } from "react";
import { applyTheme, getInitialTheme, saveTheme, themeOptions, type ThemeId } from "./themes";
import "./ThemeSwitcher.css";

/**
 * Swap palettes in a single frame. Without this, elements that transition
 * their colors (buttons, links, nav) would fade while everything else snaps,
 * which muddies a side-by-side comparison.
 */
function suppressTransitions() {
  const root = document.documentElement;
  root.setAttribute("data-theme-switching", "");
  requestAnimationFrame(() => requestAnimationFrame(() => root.removeAttribute("data-theme-switching")));
}

/**
 * TEMPORARY — a neutral bar pinned above the navbar for flipping the whole
 * site between its current styling and the palette in
 * src/styles/themes.css. Only the
 * data-theme attribute on <html> changes, so nothing reloads or re-renders
 * and the scroll position stays put. Remove <ThemeSwitcher /> from Layout
 * to return to the current styling.
 */
export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>(getInitialTheme);

  // A layout effect puts the theme on <html> before the first paint.
  useLayoutEffect(() => {
    applyTheme(activeTheme);
  }, [activeTheme]);

  function selectTheme(id: ThemeId) {
    if (id === activeTheme) return;
    suppressTransitions();
    setActiveTheme(id);
    saveTheme(id);
  }

  return (
    <div className="theme-switcher">
      <div className="theme-switcher__inner">
        <p className="theme-switcher__label" aria-hidden="true">
          Color theme preview
        </p>
        <div className="theme-switcher__options" role="group" aria-label="Color theme preview">
          {themeOptions.map((option) => {
            const isActive = option.id === activeTheme;
            return (
              <button
                key={option.id}
                type="button"
                className={`theme-switcher__option${isActive ? " theme-switcher__option--active" : ""}`}
                aria-pressed={isActive}
                onClick={() => selectTheme(option.id)}
              >
                <span className="theme-switcher__swatches" aria-hidden="true">
                  {option.swatches.map((color) => (
                    <span key={color} style={{ background: color }} />
                  ))}
                </span>
                <span>{option.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
