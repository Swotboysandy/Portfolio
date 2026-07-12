"use client";
import Link from "next/link";
import {
    ArrowLeft,
    Clock,
    Coffee,
    PenLine,
    CalendarCheck,
    Bot,
    Workflow,
    Sparkles,
} from "lucide-react";
import FadeContent from "../../components/animations/FadeContent";

const ACCENT = "#60a5fa";

/* ── brand mark (matches the app's favicon) ──────────────────────────── */

const InstalazMark = ({ size = 64 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="8" width="84" height="84" rx="18" fill="#0B0B0E" />
        <rect x="28" y="28" width="44" height="44" rx="6" fill="#D8FF3D" transform="rotate(-8 50 50)" />
        <circle cx="72" cy="72" r="4" fill="#0B0B0E" />
    </svg>
);

/* ── content ─────────────────────────────────────────────────────────── */

const stats = [
    { value: "Every platform", label: "Instagram, Facebook, YouTube, Reddit & more" },
    { value: "AI per platform", label: "Drafts tuned to each network's format" },
    { value: "Resilient AI", label: "Multi-model fallback — generation never hard-fails" },
    { value: "Scheduled queue", label: "Posts publish on time, even while you're offline" },
];

const stack = [
    "Next.js (App Router)",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Redis Queue",
    "NextAuth",
    "Multi-model AI",
];

/* ── building blocks ─────────────────────────────────────────────────── */

const SectionLabel = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
    <div className="flex items-center gap-2 mb-3">
        <span
            className="flex items-center justify-center w-7 h-7 rounded-md"
            style={{ backgroundColor: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)" }}
        >
            <Icon className="w-3.5 h-3.5" style={{ color: ACCENT }} />
        </span>
        <span className="text-zinc-500 text-xs uppercase tracking-wider">{children}</span>
    </div>
);

const Story = ({
    icon,
    label,
    title,
    children,
}: {
    icon: React.ElementType;
    label: string;
    title: string;
    children: React.ReactNode;
}) => (
    <FadeContent>
        <section className="border-t border-zinc-800 pt-8">
            <SectionLabel icon={icon}>{label}</SectionLabel>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3 tracking-tight">{title}</h2>
            <div className="space-y-3 text-zinc-400 text-sm sm:text-[15px] leading-relaxed">{children}</div>
        </section>
    </FadeContent>
);

/* ── page ────────────────────────────────────────────────────────────── */

const InstalazPage = () => {
    return (
        <main className="min-h-screen pt-24 pb-32">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                {/* Back */}
                <FadeContent>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </FadeContent>

                {/* Hero */}
                <FadeContent delay={60}>
                    <div
                        className="relative overflow-hidden rounded-2xl border px-7 py-10 sm:px-9 sm:py-12"
                        style={{ backgroundColor: "#0B0B0E", borderColor: "rgba(96,165,250,0.2)" }}
                    >
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{ background: "radial-gradient(120% 120% at 50% 0%, rgba(96,165,250,0.14), transparent 60%)" }}
                        />
                        <div className="relative flex items-center gap-4">
                            <InstalazMark size={60} />
                            <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Instalaz</span>
                        </div>
                    </div>
                </FadeContent>

                {/* Title block */}
                <FadeContent delay={120}>
                    <div className="mt-7">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span
                                className="text-[11px] px-2.5 py-1 rounded-full"
                                style={{ backgroundColor: "rgba(96,165,250,0.1)", color: "#bfdbfe", border: "1px solid rgba(96,165,250,0.2)" }}
                            >
                                Full-Stack
                            </span>
                            <span className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-800">
                                Solo build
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                            Post everywhere — without living in your feeds.
                        </h1>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4">
                            A social scheduling tool that drafts your posts with AI, fills one calendar, and publishes
                            across Instagram, Facebook, YouTube, Reddit and more — built so staying consistent everywhere
                            runs on autopilot instead of willpower.
                        </p>
                    </div>
                </FadeContent>

                {/* Stats */}
                <FadeContent delay={180}>
                    <div className="grid grid-cols-2 gap-3 mt-8">
                        {stats.map((s, i) => (
                            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3.5">
                                <div className="text-lg sm:text-xl font-semibold tracking-tight" style={{ color: ACCENT }}>
                                    {s.value}
                                </div>
                                <div className="text-zinc-500 text-xs leading-snug mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeContent>

                {/* Story sections */}
                <div className="mt-12 space-y-10">
                    <Story icon={Clock} label="The idea" title="Consistency is a part-time job">
                        <p>
                            Every platform rewards the same thing —{" "}
                            <span className="text-zinc-200">showing up consistently</span> — and quietly punishes you
                            for going dark. But keeping Instagram, Facebook, YouTube and Reddit all fed means writing in
                            different voices, at the right hours, across a pile of open tabs.
                        </p>
                        <p>
                            I wanted to collapse all of that into one place: do the creative part in a single sitting,
                            and let the showing-up part take care of itself — everywhere at once.
                        </p>
                    </Story>

                    <Story icon={Coffee} label="Why I built it" title="It started as a tool for one very busy person — me">
                        <p>
                            The honest origin story: I was buried. Between a full-time job, studying on the side, and the
                            usual pile of everyday life, my own accounts went quiet for weeks at a time. I didn&rsquo;t need a
                            growth-hacking dashboard — I just needed something that would keep me showing up while I was
                            heads-down on everything else.
                        </p>
                        <p>
                            So I built Instalaz for an audience of one. Then it turned out everyone around me had the exact
                            same problem — <span className="text-zinc-200">too much to do, too little time to post</span> —
                            so I polished it up and opened it for everyone.
                        </p>
                    </Story>

                    <Story icon={PenLine} label="Compose" title="An AI co-writer in the composer">
                        <p>
                            The composer is where a post comes together: drop in one idea, and AI drafts captions, titles
                            and hashtags tuned per platform — a tight caption for Instagram, a title for YouTube, a
                            different tone for Reddit. Don&rsquo;t like it? Regenerate. Walk away mid-draft and it&rsquo;s saved
                            locally, exactly where you left it.
                        </p>
                        <p>
                            The goal was simple — <span className="text-zinc-200">you should never stare at an empty box</span>.
                            There&rsquo;s always a strong first draft to react to.
                        </p>
                    </Story>

                    <Story icon={CalendarCheck} label="Schedule" title="Set your slots once, publish on time">
                        <p>
                            Instead of posting in the moment, you fill one calendar for everything. Pick your slots, drag
                            drafts onto the days you want, and Instalaz publishes to each connected account — Instagram,
                            Facebook, YouTube, Reddit — at the scheduled minute.
                        </p>
                        <p>
                            Plan a whole week across every platform in one sitting, then close the app and let it run.
                        </p>
                    </Story>

                    <Story icon={Bot} label="The AI brain" title="Generation that never goes blank">
                        <p>
                            Free AI APIs are generous until they aren&rsquo;t — rate limits, outages, the occasional bad day.
                            So the AI layer isn&rsquo;t one provider, it&rsquo;s a <span className="text-zinc-200">chain</span>: if the
                            first model is busy or down, the request quietly falls through to the next, and the next.
                        </p>
                        <p>
                            At the very end sits a hand-written template fallback — so even on the worst possible day, the
                            composer hands you something usable instead of an error. The user never sees the plumbing;
                            they just see a caption.
                        </p>
                    </Story>

                    <Story icon={Workflow} label="Reliability" title="Posts that fire while you sleep">
                        <p>
                            A scheduler is only as trustworthy as its worst night. Publishing runs through a background
                            job queue rather than the request that created it — so a post going out at 7&nbsp;AM doesn&rsquo;t
                            depend on anyone having a tab open.
                        </p>
                        <p>
                            Jobs retry on failure, report back, and surface in a notifications feed so you always know
                            what went out and what needs a look.
                        </p>
                    </Story>
                </div>

                {/* Where it is now */}
                <FadeContent>
                    <section
                        className="mt-12 rounded-2xl border px-6 py-7"
                        style={{
                            borderColor: "rgba(96,165,250,0.2)",
                            background: "linear-gradient(to bottom, rgba(96,165,250,0.06), transparent)",
                        }}
                    >
                        <SectionLabel icon={Sparkles}>Where it is now</SectionLabel>
                        <p className="text-zinc-300 text-sm sm:text-[15px] leading-relaxed">
                            Connect your accounts across Instagram, Facebook, YouTube, Reddit and more, draft with AI,
                            fill one calendar, and a background queue publishes everywhere on time — retrying on failure,
                            reporting back, and reshaping each post to fit the platform it&rsquo;s headed to. It started as
                            &ldquo;staying consistent shouldn&rsquo;t take this much willpower,&rdquo; and became the most ambitious
                            thing I&rsquo;ve engineered end-to-end.
                        </p>
                    </section>
                </FadeContent>

                {/* Tech stack */}
                <FadeContent>
                    <section className="mt-10">
                        <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-4">Under the hood</h2>
                        <div className="flex flex-wrap gap-2">
                            {stack.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-3 py-1.5 rounded-full bg-zinc-900/40 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 transition-colors"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </section>
                </FadeContent>

                {/* Back footer */}
                <FadeContent>
                    <div className="mt-12 border-t border-zinc-800 pt-8">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to all projects
                        </Link>
                    </div>
                </FadeContent>
            </div>
        </main>
    );
};

export default InstalazPage;
