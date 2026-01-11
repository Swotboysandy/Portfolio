"use client";
import Link from "next/link";
import BlurText from "../../animations/BlurText";
import FadeContent from "../../animations/FadeContent";
import ShinyText from "../../animations/ShinyText";
import { Tooltip } from "@/components/ui/tooltip-card";
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter, IoMailOutline } from "react-icons/io5";

const HeroSection = () => {
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
            name: "Twitter",
            href: "https://x.com/swotboysandy",
            icon: IoLogoTwitter,
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
        <section className="pt-20 sm:pt-24">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                {/* Name and Title */}
                <div className="mb-6">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
                        <BlurText text="Sunny Kishor Singh" delay={80} />
                    </h1>
                    <FadeContent delay={400}>
                        <p className="text-base"><ShinyText color="white">Full Stack Developer</ShinyText></p>
                    </FadeContent>
                </div>

                {/* Bio Paragraphs */}
                <FadeContent delay={600} className="space-y-4 text-zinc-400 leading-relaxed mb-8">
                    <div>
                        I build full-stack web and mobile applications. Passionate about creating projects that make a real-world impact with clean code and exceptional user experience.
                    </div>
                    <div>
                        Currently leading frontend projects at <Link href="https://draftss.com" target="_blank" className="hover:underline"><ShinyText color="white" className="font-semibold">DraftssTech</ShinyText></Link>, building high-performance, visually stunning websites using <Highlight>React</Highlight>, <Highlight>Next.js</Highlight>, and <Highlight>WordPress</Highlight>.
                    </div>
                    <div>
                        I work with <Highlight>React Native</Highlight>, <Highlight>Node.js</Highlight>, and <Highlight>Python</Highlight> most days, using <Highlight>TypeScript</Highlight> for type safety. I enjoy building things that look good, perform well, and help solve real problems.
                    </div>
                    <div>
                        Open to collaborations and opportunities. Feel free to reach out!
                    </div>
                </FadeContent>

                {/* Social Links */}
                <FadeContent delay={800}>
                    <div className="flex flex-wrap gap-2">
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded text-zinc-400 hover:border-zinc-700 hover:text-white transition-all duration-200"
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </FadeContent>
            </div>
        </section>
    )
}

export default HeroSection
