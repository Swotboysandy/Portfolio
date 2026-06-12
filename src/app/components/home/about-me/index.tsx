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
import { motion } from "motion/react";
import FadeContent from "../../animations/FadeContent";

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
        <section className="py-8">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                <FadeContent>
                    <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-3">Skills & Tools</h2>
                </FadeContent>

                <motion.div
                    className="flex flex-wrap gap-1.5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    variants={{ visible: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } } }}
                >
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.span
                                key={index}
                                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -2 }}
                                className="flex items-center gap-1.5 text-xs px-2 py-1 bg-zinc-900/50 border border-zinc-800 rounded text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors cursor-default"
                            >
                                <Icon className="w-3 h-3" />
                                {skill.name}
                            </motion.span>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMe