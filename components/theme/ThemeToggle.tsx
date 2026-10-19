
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({
  className = "",
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Change color theme"
        disabled
        className={`inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground ${className}`}
      >
        <Sun className="size-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`inline-flex size-10 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors hover:bg-accent ${className}`}
    >
      {isDark ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  );
}

