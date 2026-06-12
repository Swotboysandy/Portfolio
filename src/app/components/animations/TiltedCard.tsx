"use client";
import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

interface TiltedCardProps {
    children: ReactNode;
    className?: string;
    tiltAmount?: number;
}

const SPRING = { stiffness: 260, damping: 22, mass: 0.4 };

const TiltedCard = ({ children, className = "", tiltAmount = 10 }: TiltedCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    // Normalized pointer position (-0.5 .. 0.5). Driving motion values instead of
    // React state means tilting never triggers a re-render — the compositor handles it.
    const px = useMotionValue(0);
    const py = useMotionValue(0);

    const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [tiltAmount, -tiltAmount]), SPRING);
    const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-tiltAmount, tiltAmount]), SPRING);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        px.set((e.clientX - rect.left) / rect.width - 0.5);
        py.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const reset = () => {
        px.set(0);
        py.set(0);
    };

    // No tilt for users who prefer reduced motion (and on touch, mousemove never fires).
    if (reduce) return <div className={className}>{children}</div>;

    return (
        <motion.div
            ref={ref}
            className={className}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            whileHover={{ scale: 1.012 }}
            transition={{ scale: { type: "spring", stiffness: 300, damping: 25 } }}
        >
            {children}
        </motion.div>
    );
};

export default TiltedCard;
