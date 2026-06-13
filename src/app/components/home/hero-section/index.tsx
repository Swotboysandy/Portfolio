"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ShinyText from "../../animations/ShinyText";
import { Magnetic } from "@/components/ui/magnetic";
import { Tooltip } from "@/components/ui/tooltip-card";
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from "react-icons/io5";
import { IconBrandX } from "@tabler/icons-react";

const HeroSection = () => {
    const heroRef = useRef<HTMLElement>(null);
    // Scroll-linked parallax: the hero drifts up and fades as it leaves the viewport.
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
    const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/s7-chauhan/",
            icon: IoLogoLinkedin,
        },
        {
            name: "GitHub",
            href: "https://github.com/Swotboysandy",
            icon: IoLogoGithub,
        },
        {
            name: "X",
            href: "https://x.com/swotboysandy",
            icon: IconBrandX,
        },
        {
            name: "Email",
            href: "mailto:sunnysinghchauhan760@gmail.com",
            icon: IoMailOutline,
        },
    ];

    const techDescriptions: Record<string, string> = {
        "React": "A JavaScript library for building user interfaces, developed by Facebook.",
        "Next.js": "The React Framework for the Web.",
        "WordPress": "A popular content management system (CMS).",
        "React Native": "A framework for building native apps using React.",
        "Node.js": "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        "Python": "A versatile programming language known for its readability.",
        "TypeScript": "A superset of JavaScript that adds static types.",
    };

    const Highlight = ({ children }: { children: React.ReactNode }) => {
        const text = typeof children === 'string' ? children : String(children);
        const description = techDescriptions[text] || "A professional technology I use.";

        return (
            <Tooltip content={description} containerClassName="inline-flex">
                <span className="text-[#a78bfa] font-medium cursor-help border-b border-[#a78bfa]/20 hover:border-[#a78bfa] transition-colors">{children}</span>
            </Tooltip>
        );
    };

    return (
        <section ref={heroRef} className="pt-24 sm:pt-28">
            <motion.div style={{ y, opacity }} className="max-w-2xl mx-auto px-5 sm:px-7">
                {/* Availability */}
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-1 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-xs font-medium text-emerald-300/90">Available for work</span>
                </div>

                {/* Name */}
                <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-3">
                    Sunny Kishor Singh
                </h1>

                {/* Role + location */}
                <p className="text-base text-zinc-400 mb-7">
                    <ShinyText color="white" className="font-medium">Full Stack Developer</ShinyText>
                    <span className="mx-1.5 text-zinc-600">·</span>
                    Based in India
                </p>

                {/* Tagline */}
                <p className="text-xl sm:text-2xl font-light leading-snug text-zinc-200 text-balance mb-7">
                    I build full-stack web &amp; mobile apps that{" "}
                    <span className="font-normal text-white">look good</span>,{" "}
                    <span className="font-normal text-white">perform well</span>, and{" "}
                    <span className="font-normal text-white">solve real problems</span>.
                </p>

                {/* Bio */}
                <div className="space-y-4 text-[15px] text-zinc-400 leading-relaxed mb-8">
                    <div>
                        Currently leading frontend at{" "}
                        <Link href="https://draftss.com" target="_blank" className="hover:underline">
                            <ShinyText color="white" className="font-semibold">DraftssTech</ShinyText>
                        </Link>
                        , shipping high-performance, visually polished sites with <Highlight>React</Highlight>,{" "}
                        <Highlight>Next.js</Highlight>, and <Highlight>WordPress</Highlight>.
                    </div>
                    <div>
                        Most days I&rsquo;m deep in <Highlight>React Native</Highlight>, <Highlight>Node.js</Highlight>, and{" "}
                        <Highlight>Python</Highlight>, with <Highlight>TypeScript</Highlight> keeping me honest. Open to
                        collaborations and new opportunities — feel free to reach out.
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-2">
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Magnetic key={index} strength={0.4}>
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    className="group inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/40 px-3.5 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
                                >
                                    <Icon className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-[#a78bfa]" />
                                    {link.name}
                                </Link>
                            </Magnetic>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection
