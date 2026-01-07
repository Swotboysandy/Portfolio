"use client";
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ChromeGrid = () => {
    const [mounted, setMounted] = useState(false);
    const spotlightRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleMove = (e: MouseEvent) => {
            gsap.to(pos.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: 'power2.out',
                onUpdate: () => {
                    if (spotlightRef.current) {
                        spotlightRef.current.style.setProperty('--x', `${pos.current.x}px`);
                        spotlightRef.current.style.setProperty('--y', `${pos.current.y}px`);
                    }
                }
            });
        };

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div
            ref={spotlightRef}
            className="fixed inset-0 pointer-events-none z-50"
            style={{
                background: `radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(167, 139, 250, 0.12), transparent 40%)`,
            }}
        />
    );
};

export default ChromeGrid;
