"use client";
import { motion } from "motion/react";

interface BlurTextProps {
    text: string;
    delay?: number;
    className?: string;
}

const BlurText = ({ text, delay = 100, className = "" }: BlurTextProps) => {
    const words = text.split(" ");

    return (
        <motion.span
            className={className}
            style={{ display: "inline" }}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { delayChildren: 0.1, staggerChildren: delay / 1000 } },
            }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    style={{ display: "inline-block", willChange: "transform, filter, opacity" }}
                    variants={{
                        hidden: { opacity: 0, y: 8, filter: "blur(8px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {word}
                    {index < words.length - 1 ? " " : ""}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default BlurText;
