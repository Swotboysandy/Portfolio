"use client";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import FadeContent from "../components/animations/FadeContent";
import TiltedCard from "../components/animations/TiltedCard";
import SectionLabel from "../components/section-label";
import InfiniteMenu from "@/components/ui/infinite-menu";

const ProjectsPage = () => {
    const projects = [
        {
            title: "OliverFlix",
            description: "Six streaming services, 1,000+ live channels, and a nostalgia vault behind one home screen — with on-device stream decryption and self-updating content.",
            tech: ["Android", "Scraper", "On-device crypto"],
            caseUrl: "/projects/oliverflix"
        },
        {
            title: "Instalaz",
            description: "A social media scheduling & automation tool — an AI composer drafts posts per platform, one calendar fills your slots, and a background queue auto-publishes across Instagram, Facebook, YouTube, Reddit and more.",
            tech: ["Next.js", "PostgreSQL", "Redis Queue", "AI"],
            caseUrl: "/projects/instalaz"
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
        },
        // Adding more placeholders if needed, but for now matching the featured ones is a good start + maybe a link to github for "even more".
    ];

    return (
        <main className="min-h-screen pt-24 pb-32">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                {/* Header */}
                <FadeContent>
                    <div className="mb-10">
                        <Link
                            href="/"
                            className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to home
                        </Link>
                        <SectionLabel>Projects</SectionLabel>
                        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Things I&rsquo;ve built
                        </h1>
                        <p className="text-balance text-[15px] leading-relaxed text-zinc-400">
                            A mix of shipped products, late-night experiments, and open-source side quests — from
                            streaming apps to real-time collaboration tools.
                        </p>
                    </div>
                </FadeContent>

                {/* Projects List */}
                <div className="space-y-3">
                    {projects.map((project, index) => (
                        <FadeContent key={index} delay={index * 100}>
                            <TiltedCard tiltAmount={3}>
                                <div className="group rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4 transition-colors hover:border-zinc-700">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-white text-base font-medium group-hover:text-[#a78bfa] transition-colors">
                                                    {project.title}
                                                </h3>
                                                <div className="flex gap-1.5">
                                                    {project.tech.map((t, i) => (
                                                        <span key={i} className="text-[10px] px-2 py-0.5 bg-zinc-800/50 text-zinc-500 rounded-full border border-zinc-800/50">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-4 shrink-0 mt-1 sm:mt-0">
                                            {project.caseUrl && (
                                                <Link
                                                    href={project.caseUrl}
                                                    className="flex items-center gap-1.5 text-xs text-[#a78bfa] hover:brightness-125 transition-all p-1"
                                                >
                                                    <ArrowRight className="w-4 h-4" />
                                                    <span>Case Study</span>
                                                </Link>
                                            )}
                                            {project.repoUrl && (
                                                <Link
                                                    href={project.repoUrl}
                                                    target="_blank"
                                                    className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors p-1"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    <span>Source</span>
                                                </Link>
                                            )}
                                            {project.liveUrl && (
                                                <Link
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    className="flex items-center gap-1.5 text-xs text-[#a78bfa] hover:brightness-125 transition-all p-1"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span>Live Demo</span>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </TiltedCard>
                        </FadeContent>
                    ))}
                </div>

                {/* 3D & Creative Works */}
                <FadeContent delay={500}>
                    <div className="mt-14">
                        <SectionLabel>3D &amp; Creative</SectionLabel>
                        <div className="relative h-[600px] w-full overflow-hidden rounded-xl border border-zinc-800">
                            <InfiniteMenu
                                items={[
                                    { image: '/3d-projects/House Ad.png', link: '#', title: 'Modern Villa', description: 'Real estate visualization' },
                                    { image: '/3d-projects/Mars.jpg', link: '#', title: 'The Red Planet', description: 'Mars terrain study' },
                                    { image: '/3d-projects/MountainForest.png', link: '#', title: 'Alpine Wilderness', description: 'Environmental design' },
                                    { image: '/3d-projects/New project.jpg', link: '#', title: 'Architectural Concept', description: 'Lighting & composition' },
                                    { image: '/3d-projects/Project mclaren.jpg', link: '#', title: 'McLaren 720S', description: 'Automotive rendering' },
                                    { image: '/3d-projects/SAndymclarenn.png', link: '#', title: 'Neon Racer', description: 'Custom vehicle shader' },
                                    { image: '/3d-projects/SandyMClaren.png', link: '#', title: 'Automotive Studio', description: 'Studio lighting setup' },
                                    { image: '/3d-projects/Untitled.jpg', link: '#', title: 'Grassland Cabin', description: 'Nature scene composition' },
                                    { image: '/3d-projects/moonnight.png', link: '#', title: 'Moonlight Vista', description: 'Atmospheric night scene' },
                                    { image: '/3d-projects/moonnight2.png', link: '#', title: 'Nightscape', description: 'Nocturnal lighting study' },
                                    { image: '/3d-projects/room project.png', link: '#', title: 'Isometric Bedroom', description: 'Stylized interior design' },
                                    { image: '/3d-projects/shinchansany.png', link: '#', title: 'Shinchan Reimagined', description: '3D Character modeling' },
                                    { image: '/3d-projects/untitled.png', link: '#', title: 'Geometric Study', description: 'Abstract form exploration' },
                                ]}
                            />
                        </div>
                    </div>
                </FadeContent>

                {/* GitHub CTA */}
                <FadeContent delay={600}>
                    <div className="mt-14 border-t border-zinc-800/80 pt-8 text-center">
                        <p className="mb-4 text-sm text-zinc-500">
                            More experiments and code snippets live on my GitHub.
                        </p>
                        <Link
                            href="https://github.com/Swotboysandy?tab=repositories"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
                        >
                            <Github className="h-4 w-4" />
                            View GitHub profile
                        </Link>
                    </div>
                </FadeContent>
            </div>
        </main>
    );
};

export default ProjectsPage;
