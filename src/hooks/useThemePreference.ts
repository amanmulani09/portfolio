import { useEffect, useState } from "react";
import type { ThemeMode } from "../types/theme";

const STORAGE_KEY = "aman-ai-portfolio-theme";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";

  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === "dark" || storedTheme === "light") return storedTheme;

    return "light";
  } catch {
    return "light";
  }
}

export function useThemePreference() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.getElementById("theme-color-meta")?.setAttribute("content", theme === "light" ? "#f7f8fa" : "#11151d");

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Theme still applies for the current session.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
