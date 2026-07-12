"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Toggles the `.dark` class on <html> and persists the choice. The actual
// theme flip on load happens via an inline script in layout.tsx (before
// paint, no flash) — this component just reflects and controls that state.
//
// The switch itself uses the View Transitions API: a circle expands from the
// click point to reveal the new theme. Browsers without support (Safari,
// Firefox) and reduced-motion users get an instant flip instead.
export function ThemeToggle() {
    const [dark, setDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setDark(document.documentElement.classList.contains("dark"));
    }, []);

    const applyTheme = (next: boolean) => {
        document.documentElement.classList.toggle("dark", next);
        document.documentElement.style.colorScheme = next ? "dark" : "light";
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {}
    };

    const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        const next = !dark;
        // Must stay a method call on `document` (not extracted into a bare
        // reference) — detaching it throws "Illegal invocation" in Chromium.
        const doc = document as Document & {
            startViewTransition?: (cb: () => void) => { ready: Promise<void> };
        };

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (typeof doc.startViewTransition !== "function" || reducedMotion) {
            setDark(next);
            applyTheme(next);
            return;
        }

        const x = e.clientX;
        const y = e.clientY;
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = doc.startViewTransition(() => {
            setDark(next);
            applyTheme(next);
        });

        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${endRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 550,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        }, () => {
            // .ready can reject (e.g. no valid viewport to snapshot in some
            // embedded/headless contexts) — the theme itself is already
            // applied via the callback above, so this is just a silent,
            // graceful skip of the animation.
        });
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
