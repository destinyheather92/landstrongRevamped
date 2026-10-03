/**
 * TEMPORARY — the options offered by <ThemeSwitcher />. "current" is the
 * site's own styling (tokens.css, no data-theme); every other id matches a
 * :root[data-theme="…"] block in src/styles/themes.css.
 */
export type ThemeId = "current" | "lavender-dusk";

export interface ThemeOption {
  id: ThemeId;
  name: string;
  /** Palette chips shown on the switcher button. */
  swatches: string[];
  /** Browser UI color (<meta name="theme-color">) while this option is active. */
  browserColor: string;
}

export const themeOptions: ThemeOption[] = [
  {
    id: "current",
    name: "Current design",
    swatches: ["#fbf3ea", "#c1603c", "#6b3f5e", "#d9a441", "#7c8b6f", "#3a2b39"],
    browserColor: "#fbf3ea",
  },
  {
    id: "lavender-dusk",
    name: "Lavender Dusk",
    swatches: ["#f7f0fa", "#e8dcf4", "#c9b4e6", "#987abf", "#6b5a8c", "#f1b6d7", "#e39bc2"],
    browserColor: "#2d2440",
  },
];

const DEFAULT_THEME: ThemeId = "lavender-dusk";
const STORAGE_KEY = "landstrong:theme-preview";

/**
 * `?theme=lavender-dusk` or `?theme=current` in the URL wins — handy for
 * sending someone straight to one look — then the last choice made on this
 * device, then Lavender Dusk.
 */
export function getInitialTheme(): ThemeId {
  const param = new URLSearchParams(window.location.search).get("theme");
  const fromUrl = themeOptions.find((option) => option.id === param);
  if (fromUrl) return fromUrl.id;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const fromStorage = themeOptions.find((option) => option.id === stored);
    if (fromStorage) return fromStorage.id;
  } catch {
    // Storage can be blocked (private windows, strict settings) — use the default.
  }
  return DEFAULT_THEME;
}

export function saveTheme(id: ThemeId) {
  try {
    window.localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Not remembered across reloads, but switching still works.
  }
}

export function applyTheme(id: ThemeId) {
  const root = document.documentElement;
  if (id === "current") {
    root.removeAttribute("data-theme");
  } else {
    root.dataset.theme = id;
  }
  const option = themeOptions.find((candidate) => candidate.id === id);
  if (option) {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", option.browserColor);
  }
}
