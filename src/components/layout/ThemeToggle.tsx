"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-brand-navy transition hover:bg-brand-sky dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      onClick={toggleTheme}
      type="button"
    >
      {dark ? <Sun aria-hidden="true" size={20} /> : <Moon aria-hidden="true" size={20} />}
    </button>
  );
}
