"use client";
import { ReactNode, useRef, useState } from "react";

interface TiltedCardProps {
    children: ReactNode;
    className?: string;
    tiltAmount?: number;
}

const TiltedCard = ({ children, className = "", tiltAmount = 10 }: TiltedCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -tiltAmount;
        const rotateY = ((x - centerX) / centerX) * tiltAmount;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        });
    };

    return (
        <div
            ref={ref}
            className={`transition-transform duration-200 ease-out ${className}`}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default TiltedCard;
