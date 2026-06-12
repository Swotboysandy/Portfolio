"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";

interface FadeContentProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

const OFFSET = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
} as const;

const FadeContent = ({
    children,
    delay = 0,
    duration = 500,
    className = "",
    direction = "up",
}: FadeContentProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...OFFSET[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            // Only opacity + transform animate — both run on the GPU compositor.
            transition={{ duration: duration / 1000, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default FadeContent;
