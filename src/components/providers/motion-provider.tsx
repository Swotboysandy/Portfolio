"use client";
import { MotionConfig } from "motion/react";

// Honors the OS "reduce motion" setting for every motion component, and keeps a
// single consistent easing default across the site.
export function MotionProvider({ children }: { children: React.ReactNode }) {
    return (
        <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
            {children}
        </MotionConfig>
    );
}
