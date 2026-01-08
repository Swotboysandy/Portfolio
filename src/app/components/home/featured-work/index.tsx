"use client";
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react";
import FadeContent from "../../animations/FadeContent";
import TiltedCard from "../../animations/TiltedCard";

const FeaturedWork = () => {
    const projects = [
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
        <section className="py-8">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                <FadeContent>
                    <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-4">Projects</h2>
                </FadeContent>

                <div className="space-y-3">
                    {projects.map((project, index) => (
                        <FadeContent key={index} delay={index * 100}>
                            <TiltedCard tiltAmount={5}>
                                <div className="group border border-zinc-800 rounded-lg px-4 py-3 hover:border-zinc-700 transition-all bg-zinc-900/20">
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
                                            <Link
                                                href={project.repoUrl}
                                                target="_blank"
                                                className="flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors"
                                            >
                                                <Github className="w-3 h-3" />
                                                <span>Repo</span>
                                            </Link>
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
                        href="https://github.com/Swotboysandy?tab=repositories"
                        target="_blank"
                        className="block w-full text-center mt-4 py-2 border border-zinc-800 rounded-lg text-xs text-zinc-500 hover:text-white hover:border-zinc-700 transition-all"
                    >
                        More Projects →
                    </Link>
                </FadeContent>
            </div>
        </section>
    )
}

export default FeaturedWork