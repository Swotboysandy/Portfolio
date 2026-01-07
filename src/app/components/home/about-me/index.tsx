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

                <FadeContent delay={200}>
                    <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <span
                                    key={index}
                                    className="flex items-center gap-1.5 text-xs px-2 py-1 bg-zinc-900/50 border border-zinc-800 rounded text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors"
                                >
                                    <Icon className="w-3 h-3" />
                                    {skill.name}
                                </span>
                            );
                        })}
                    </div>
                </FadeContent>
            </div>
        </section>
    )
}

export default AboutMe