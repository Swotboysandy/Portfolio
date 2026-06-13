"use client";
import { ReactLenis } from "lenis/react";

// Momentum smooth-scrolling for the whole page. lerp controls how much the
// viewport "catches up" to the target each frame — lower = smoother/floatier.
export function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;
