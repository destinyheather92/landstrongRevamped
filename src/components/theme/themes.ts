/**
 * TEMPORARY — the palettes offered by <ThemeSwitcher />. Each id matches a
 * :root[data-theme="…"] block in src/styles/themes.css.
 */
export type ThemeId = "dreamy" | "earthy";

export interface ThemeOption {
  id: ThemeId;
  number: number;
  name: string;
  /** Palette chips shown on the switcher button. */
  swatches: string[];
  /** Browser UI color (<meta name="theme-color">) while this theme is active. */
  browserColor: string;
}

export const themeOptions: ThemeOption[] = [
  {
    id: "dreamy",
    number: 1,
    name: "Dreamy Princess",
    swatches: ["#8e9aaf", "#cbc0d3", "#efd3d7", "#ebcee5", "#000000"],
    browserColor: "#fdfafc",
  },
  {
    id: "earthy",
    number: 2,
    name: "Earthy Feminine",
    swatches: ["#6e2f3a", "#d9a3a8", "#f2d9d7", "#9daa91", "#f7f1ea", "#3d342f"],
    browserColor: "#f7f1ea",
  },
];

const STORAGE_KEY = "landstrong:theme-preview";

/**
 * `?theme=earthy` (or `?theme=2`) in the URL wins — handy for sending
 * someone straight to one palette — then the last choice made on this
 * device, then Theme 1.
 */
export function getInitialTheme(): ThemeId {
  const param = new URLSearchParams(window.location.search).get("theme");
  const fromUrl = themeOptions.find((option) => option.id === param || String(option.number) === param);
  if (fromUrl) return fromUrl.id;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const fromStorage = themeOptions.find((option) => option.id === stored);
    if (fromStorage) return fromStorage.id;
  } catch {
    // Storage can be blocked (private windows, strict settings) — use the default.
  }
  return themeOptions[0].id;
}

export function saveTheme(id: ThemeId) {
  try {
    window.localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Not remembered across reloads, but switching still works.
  }
}

export function applyTheme(id: ThemeId) {
  document.documentElement.dataset.theme = id;
  const option = themeOptions.find((candidate) => candidate.id === id);
  if (option) {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", option.browserColor);
  }
}
