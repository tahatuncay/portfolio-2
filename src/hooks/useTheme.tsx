"use client";

import { useEffect, useState, useCallback, createContext, useContext } from "react";

type Theme = "day" | "night";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "day",
  toggleTheme: () => {},
});

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "day";

  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "day" || stored === "night") return stored;

  // Fall back to system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "night";
  }

  return "day";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("day");
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize theme after mount (avoid SSR mismatch)
  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setIsHydrated(true);
  }, []);

  // Apply theme changes to DOM + storage
  useEffect(() => {
    if (!isHydrated) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, isHydrated]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
