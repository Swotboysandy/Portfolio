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
    const baseColor = color === 'white' ? '#a1a1aa' : '#a78bfa';
    const shineColor = color === 'white' ? '#ffffff' : '#e9d5ff';

    return (
        <span
            className={`inline ${className}`}
            style={{
                background: `linear-gradient(120deg, ${baseColor} 40%, ${shineColor} 50%, ${baseColor} 60%)`,
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                animation: `shiny-text ${speed}s linear infinite`,
            }}
        >
            {children}
            <style jsx global>{`
                @keyframes shiny-text {
                    0% {
                        background-position: 100% center;
                    }
                    100% {
                        background-position: -100% center;
                    }
                }
            `}</style>
        </span>
    );
};

export default ShinyText;
