"use client";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useVelocity,
    useSpring,
    useTransform,
    useMotionValue,
    useAnimationFrame,
} from "motion/react";

// Keep a value inside [min, max) by wrapping — used so the row loops seamlessly.
const wrapValue = (min: number, max: number, v: number) => {
    const range = max - min;
    return min + ((((v - min) % range) + range) % range);
};

// A horizontal marquee that drifts on its own and speeds up / reverses with the
// page's scroll velocity — Motion's classic useVelocity + useAnimationFrame pattern.
// children is rendered twice so translating 0 → -50% loops without a seam.
export function VelocityMarquee({
    children,
    baseVelocity = 1.4,
}: {
    children: React.ReactNode;
    baseVelocity?: number;
}) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });

    const x = useTransform(baseX, (v) => `${wrapValue(-50, 0, v)}%`);
    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) directionFactor.current = -1;
        else if (velocityFactor.get() > 0) directionFactor.current = 1;
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden">
            <motion.div className="flex w-max flex-nowrap" style={{ x }}>
                <div className="flex flex-nowrap gap-1.5 pr-1.5">{children}</div>
                <div className="flex flex-nowrap gap-1.5 pr-1.5">{children}</div>
            </motion.div>
        </div>
    );
}

export default VelocityMarquee;
