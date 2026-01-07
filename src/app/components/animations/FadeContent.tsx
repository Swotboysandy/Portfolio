"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeContentProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

const FadeContent = ({
    children,
    delay = 0,
    duration = 500,
    className = "",
    direction = "up"
}: FadeContentProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const getTransform = () => {
        switch (direction) {
            case "up": return "translateY(20px)";
            case "down": return "translateY(-20px)";
            case "left": return "translateX(20px)";
            case "right": return "translateX(-20px)";
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translate(0)" : getTransform(),
                transition: `all ${duration}ms ease-out`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default FadeContent;
