"use client";
import {
    IoLogoReact,
    IoLogoJavascript,
    IoLogoNodejs,
    IoLogoWordpress,
    IoLogoDocker,
    IoLogoFigma,
} from "react-icons/io5";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPhp,
    SiLaravel,
    SiMongodb,
    SiPostgresql,
    SiGit,
    SiWebflow,
    SiVercel,
    SiRender
} from "react-icons/si";
import SectionLabel from "../../section-label";
import { VelocityMarquee } from "@/components/ui/velocity-marquee";

const AboutMe = () => {
    const skills = [
        { name: "React", icon: IoLogoReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "Node.js", icon: IoLogoNodejs },
        { name: "React Native", icon: IoLogoReact },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "WordPress", icon: IoLogoWordpress },
        { name: "PHP", icon: SiPhp },
        { name: "Laravel", icon: SiLaravel },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Git", icon: SiGit },
        { name: "Docker", icon: IoLogoDocker },
        { name: "Figma", icon: IoLogoFigma },
        { name: "Webflow", icon: SiWebflow },
        { name: "Vercel", icon: SiVercel },
        { name: "Render", icon: SiRender },
    ];

    return (
        <section className="py-10">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                <SectionLabel>Skills &amp; Tools</SectionLabel>

                <VelocityMarquee baseVelocity={1.4}>
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <span
                                key={index}
                                className="flex shrink-0 items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/40 px-2.5 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white cursor-default"
                            >
                                <Icon className="w-3 h-3" />
                                {skill.name}
                            </span>
                        );
                    })}
                </VelocityMarquee>
            </div>
        </section>
    )
}

export default AboutMe
