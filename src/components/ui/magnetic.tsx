"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Wraps a child so it gently "pulls" toward the cursor on hover and springs
// back on leave. Hover-only (mousemove never fires on touch), so it degrades
// cleanly on mobile. Adds a subtle press-down on tap.
export function Magnetic({
    children,
    strength = 0.35,
    className = "",
}: {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const spring = { stiffness: 220, damping: 16, mass: 0.3 };
    const sx = useSpring(x, spring);
    const sy = useSpring(y, spring);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            whileTap={{ scale: 0.94 }}
            style={{ x: sx, y: sy }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default Magnetic;
