"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Toggles the `.dark` class on <html> and persists the choice. The actual
// theme flip on load happens via an inline script in layout.tsx (before
// paint, no flash) — this component just reflects and controls that state.
export function ThemeToggle() {
    const [dark, setDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggle = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        document.documentElement.style.colorScheme = next ? "dark" : "light";
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {}
    };

    if (!mounted) return null;

    return (
        <button
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="fixed top-4 right-4 sm:top-5 sm:right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 text-neutral-700 dark:text-zinc-300 shadow-sm backdrop-blur-md transition-colors hover:text-neutral-900 dark:hover:text-white"
        >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    );
}

export default ThemeToggle;
