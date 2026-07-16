"use client";
import { ReactNode } from "react";

interface ShinyTextProps {
    children: ReactNode;
    className?: string;
    color?: 'violet' | 'white';
    speed?: number;
}

const ShinyText = ({
    children,
    className = "",
    color = "violet",
    speed = 3
}: ShinyTextProps) => {
    // The 'violet' variant is theme-aware via the .shiny-violet CSS class
    // (see globals.css) — deep purple on light, soft lavender on dark.
    if (color === 'violet') {
        return (
            <span
                className={`inline shiny-violet ${className}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {children}
            </span>
        );
    }

    return (
        <span
            className={`inline ${className}`}
            style={{
                background: `linear-gradient(120deg, #e2e8f0 40%, #ffffff 50%, #e2e8f0 60%)`,
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                animation: `shiny-text ${speed}s linear infinite`,
            }}
        >
            {children}
        </span>
    );
};

export default ShinyText;
