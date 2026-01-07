"use client";
import { useEffect, useState } from "react";

interface BlurTextProps {
    text: string;
    delay?: number;
    className?: string;
}

const BlurText = ({ text, delay = 100, className = "" }: BlurTextProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const words = text.split(" ");

    return (
        <span className={className} style={{ display: 'inline' }}>
            {words.map((word, index) => (
                <span
                    key={index}
                    style={{
                        display: 'inline-block',
                        opacity: isVisible ? 1 : 0,
                        filter: isVisible ? "blur(0px)" : "blur(8px)",
                        transform: isVisible ? "translateY(0)" : "translateY(8px)",
                        transition: 'all 0.5s ease-out',
                        transitionDelay: `${index * delay}ms`,
                    }}
                >
                    {word}{index < words.length - 1 ? '\u00A0' : ''}
                </span>
            ))}
        </span>
    );
};

export default BlurText;
