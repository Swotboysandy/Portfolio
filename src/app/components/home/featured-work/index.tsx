"use client";
import Link from "next/link"
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import FadeContent from "../../animations/FadeContent";
import TiltedCard from "../../animations/TiltedCard";
import SectionLabel from "../../section-label";

const FeaturedWork = () => {
    const projects = [
        {
            title: "OliverFlix",
            description: "Six streaming services and 1,000+ live channels behind one home screen — on-device stream decryption, instant loads, self-updating content.",
            tech: ["Android", "Scraper", "Crypto"],
            caseUrl: "/projects/oliverflix"
        },
        {
            title: "Instalaz",
            description: "A social media scheduler — compose once with AI and auto-publish across Instagram, Facebook, YouTube, Reddit and more from one calendar.",
            tech: ["Next.js", "PostgreSQL", "AI"],
            caseUrl: "/projects/instalaz"
        },
        {
            title: "PracandyFlix",
            description: "Netflix-inspired Android streaming app with dark premium UI, Lottie animations, and local caching.",
            tech: ["Kotlin", "Android", "Lottie"],
            repoUrl: "https://github.com/Swotboysandy/pracandyflix"
        },
        {
            title: "YoYoMusic",
            description: "Real-time music room with live sync, voting system, and collaborative playback using WebSockets.",
            tech: ["Node.js", "WebSockets", "JavaScript"],
            repoUrl: "https://github.com/Swotboysandy/yoyomusic",
            liveUrl: "https://yoyomusic.onrender.com/"
        },
        {
            title: "Cinemates",
            description: "Watch videos together with friends in real-time! Sync YouTube and MP4 files while video chatting.",
            tech: ["React", "WebRTC", "Node.js"],
            repoUrl: "https://github.com/Swotboysandy/cinemates"
        },
        {
            title: "PracandyWalls",
            description: "Wallpaper app with curated collections and smooth animations for Android.",
            tech: ["Kotlin", "Android"],
            repoUrl: "https://github.com/Swotboysandy/pracandywalls",
            liveUrl: "https://pracandywalls.vercel.app/"
        },
        {
            title: "Portfolio",
            description: "Personal portfolio with Next.js, dark theme, and responsive design.",
            tech: ["Next.js", "TypeScript", "Tailwind"],
            repoUrl: "https://github.com/Swotboysandy/Portfolio"
        }
    ];

    return (
        <section className="py-10">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                <FadeContent>
                    <SectionLabel>Selected Work</SectionLabel>
                </FadeContent>

                <div className="space-y-3">
                    {projects.map((project, index) => (
                        <FadeContent key={index} delay={index * 100}>
                            <TiltedCard tiltAmount={5}>
                                <div className="group rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3.5 transition-colors hover:border-zinc-700">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-white text-sm font-medium group-hover:text-[#a78bfa] transition-colors">
                                                    {project.title}
                                                </h3>
                                                <div className="flex gap-1">
                                                    {project.tech.map((t, i) => (
                                                        <span key={i} className="text-[10px] px-1.5 py-0.5 bg-zinc-800/50 text-zinc-500 rounded">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-zinc-500 text-xs leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-3 shrink-0">
                                            {project.caseUrl && (
                                                <Link
                                                    href={project.caseUrl}
                                                    className="flex items-center gap-1 text-xs text-[#a78bfa] hover:underline"
                                                >
                                                    <ArrowRight className="w-3 h-3" />
                                                    <span>Case Study</span>
                                                </Link>
                                            )}
                                            {project.repoUrl && (
                                                <Link
                                                    href={project.repoUrl}
                                                    target="_blank"
                                                    className="flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors"
                                                >
                                                    <Github className="w-3 h-3" />
                                                    <span>Repo</span>
                                                </Link>
                                            )}
                                            {project.liveUrl && (
                                                <Link
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    className="flex items-center gap-1 text-xs text-[#a78bfa] hover:underline"
                                                >
                                                    <ExternalLink className="w-3 h-3" />
                                                    <span>Visit</span>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </TiltedCard>
                        </FadeContent>
                    ))}
                </div>

                {/* More Projects Link */}
                <FadeContent delay={500}>
                    <Link
                        href="/projects"
                        className="mt-5 block w-full rounded-xl border border-zinc-800 py-2.5 text-center text-xs font-medium tracking-wide text-zinc-500 transition-colors hover:border-zinc-700 hover:text-white"
                    >
                        View all projects →
                    </Link>
                </FadeContent>
            </div>
        </section>
    )
}

export default FeaturedWork