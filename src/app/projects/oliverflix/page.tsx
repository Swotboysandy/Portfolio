"use client";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Layers,
    Cookie,
    ImageIcon,
    Lock,
    Tv,
    Zap,
    RefreshCw,
    Wallet,
    Sparkles,
} from "lucide-react";
import FadeContent from "../../components/animations/FadeContent";
import ShinyText from "../../components/animations/ShinyText";

/* ── content ─────────────────────────────────────────────────────────── */

const stats = [
    { value: "6", label: "Streaming services, one home screen" },
    { value: "1,000+", label: "Live TV channels, filtered to the good stuff" },
    { value: "4-step", label: "On-device chase to reach a locked stream" },
    { value: "~30s → ~1s", label: "Tile load time after the rebuild" },
];

const stack = [
    "Android",
    "Serverless scraper",
    "Cookie pool",
    "On-device crypto",
    "AES-256",
    "HLS / Live TV",
    "Stale-while-revalidate",
    "Self-update",
];

const streamSteps = [
    { n: "01", title: "Open the episode", body: "Start at the episode page — the front door, nothing secret yet." },
    { n: "02", title: "Follow the first trapdoor", body: "It points at a player frame, which points somewhere else again." },
    { n: "03", title: "Follow the second", body: "Through the next hop to the real host that actually holds the file." },
    { n: "04", title: "Reach the vault", body: "A final endpoint hands over the stream AES-256 encrypted — decrypted on the phone, in pure JS." },
];

/* ── small building blocks ───────────────────────────────────────────── */

const SectionLabel = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
    <div className="flex items-center gap-2 mb-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#a78bfa]/10 border border-[#a78bfa]/20">
            <Icon className="w-3.5 h-3.5 text-[#a78bfa]" />
        </span>
        <span className="text-zinc-500 text-xs uppercase tracking-wider">{children}</span>
    </div>
);

const Story = ({
    icon,
    label,
    title,
    children,
    delay = 0,
}: {
    icon: React.ElementType;
    label: string;
    title: string;
    children: React.ReactNode;
    delay?: number;
}) => (
    <FadeContent delay={delay}>
        <section className="border-t border-zinc-800 pt-8">
            <SectionLabel icon={icon}>{label}</SectionLabel>
            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3 tracking-tight">{title}</h2>
            <div className="space-y-3 text-zinc-400 text-sm sm:text-[15px] leading-relaxed">{children}</div>
        </section>
    </FadeContent>
);

/* ── page ────────────────────────────────────────────────────────────── */

const OliverFlixPage = () => {
    return (
        <main className="min-h-screen pt-20 pb-16">
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

                {/* Hero logo */}
                <FadeContent delay={60}>
                    <div className="relative overflow-hidden rounded-2xl border border-[#a78bfa]/20">
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(120% 120% at 50% 0%, rgba(167,139,250,0.18), transparent 60%)",
                            }}
                        />
                        <Image
                            src="/projects/oliverflix/wordmark.png"
                            alt="OliverFlix wordmark"
                            width={1560}
                            height={720}
                            priority
                            className="relative w-full h-auto"
                        />
                    </div>
                </FadeContent>

                {/* Title block */}
                <FadeContent delay={120}>
                    <div className="mt-7">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#a78bfa]/10 text-[#c4b5fd] border border-[#a78bfa]/20">
                                Personal Build
                            </span>
                            <span className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-800">
                                Android · Solo
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                            Turning six streaming apps into{" "}
                            <ShinyText>one beautiful home screen</ShinyText>
                        </h1>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4">
                            A months-long staring contest with cookies, CDNs, and very encrypted video — that
                            started as &ldquo;I&rsquo;m tired of juggling apps, and tired of the bill,&rdquo; and
                            became the most stubborn, satisfying thing I&rsquo;ve ever built.
                        </p>
                    </div>
                </FadeContent>

                {/* Stats */}
                <FadeContent delay={180}>
                    <div className="grid grid-cols-2 gap-3 mt-8">
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-zinc-800 bg-zinc-900/20 px-4 py-3.5"
                            >
                                <div className="text-[#c4b5fd] text-lg sm:text-xl font-semibold tracking-tight">
                                    {s.value}
                                </div>
                                <div className="text-zinc-500 text-xs leading-snug mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeContent>

                {/* Story sections */}
                <div className="mt-12 space-y-10">
                    <Story icon={Wallet} label="The idea" title="It started with two kinds of tired">
                        <p>
                            The first was juggling apps — one for movies, one for cricket, one for the kids, and a
                            constant itch for the old cartoons I grew up on. Six apps, six logos, six places to
                            forget my password.
                        </p>
                        <p>
                            The second was the bill. Stacking five or six subscriptions adds up to a genuinely silly
                            number every month — to watch the exact same stuff that&rsquo;s already floating around
                            the internet anyway. It felt like renting the same movie six times from six different
                            landlords. So I asked a slightly unhinged question:{" "}
                            <span className="text-zinc-200">
                                what if all of it lived behind one home screen — and stopped quietly draining my
                                wallet?
                            </span>
                        </p>
                    </Story>

                    <Story icon={Layers} label="The scraper" title={"Teaching my app to “see”"}>
                        <p>
                            The first wall: nobody hands you a clean API. So I built a scraper pipeline backed by a
                            little serverless brain in the cloud. For each service I&rsquo;d basically ask,{" "}
                            <span className="text-zinc-200">&ldquo;what&rsquo;s on the home page right now?&rdquo;</span>{" "}
                            and turn the messy answer into clean rows my app could render — Trending, Action, Top 10,
                            the works.
                        </p>
                        <div className="flex gap-3 rounded-xl border border-zinc-800 bg-zinc-900/20 p-4">
                            <Cookie className="w-5 h-5 text-[#a78bfa] shrink-0 mt-0.5" />
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                The catch: these places don&rsquo;t just let you walk in — every knock needs valid
                                session cookies. So I built a tiny <span className="text-zinc-200">cookie butler</span>
                                : a bot whose whole job is keeping a fresh batch warm, ready to hand one over the
                                second the app needs to peek inside. No butler, no party.
                            </p>
                        </div>
                    </Story>

                    <Story icon={ImageIcon} label="The artwork war" title="Making it look expensive">
                        <p>
                            Getting the content was half the fight. The art I was handed ranged from &ldquo;sad and
                            blurry&rdquo; to — I swear this happened — a 1.9&nbsp;MB, 4K portrait crammed into a
                            thumbnail the size of a postage stamp, which made the whole grid move like it was wading
                            through wet cement.
                        </p>
                        <p>
                            So I went art-hunting. I matched every title against a proper movie-poster database,
                            pulled the crisp high-res versions, and for the hero banner I{" "}
                            <span className="text-zinc-200">baked the best ones right into the app</span> so it&rsquo;s
                            razor-sharp the instant you open it. Postage-stamp problem: solved.
                        </p>
                    </Story>

                    {/* Hardest problem + stream chase diagram */}
                    <FadeContent>
                        <section className="border-t border-zinc-800 pt-8">
                            <SectionLabel icon={Lock}>The hardest problem</SectionLabel>
                            <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3 tracking-tight">
                                Streams that refuse to play anywhere but here
                            </h2>
                            <div className="space-y-3 text-zinc-400 text-sm sm:text-[15px] leading-relaxed">
                                <p>
                                    The cartoons nearly broke me. Their streams sit behind a CDN with serious trust
                                    issues — a bouncer who checks not just your face but your home address. The video
                                    link comes signed with your phone&rsquo;s exact network fingerprint. Grab it from a
                                    server, another network, anywhere else — and it slams the door with a{" "}
                                    <span className="text-rose-300/90 font-mono text-[13px]">403</span>. My clever plan
                                    to do it on the backend? Dead on arrival.
                                </p>
                                <p>
                                    So I rebuilt the whole thing to run on the phone itself, as a four-step chase:
                                </p>
                            </div>

                            {/* Steps */}
                            <div className="mt-5 space-y-2.5">
                                {streamSteps.map((step, i) => (
                                    <div
                                        key={i}
                                        className="relative flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/20 px-4 py-3.5 hover:border-[#a78bfa]/30 transition-colors"
                                    >
                                        <span className="font-mono text-[#a78bfa]/80 text-sm font-semibold pt-0.5 w-7 shrink-0">
                                            {step.n}
                                        </span>
                                        <div>
                                            <h3 className="text-white text-sm font-medium">{step.title}</h3>
                                            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mt-1">
                                                {step.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed mt-5">
                                When that first cartoon finally played —{" "}
                                <span className="text-zinc-200">IP-locked link and all</span> — it felt like picking a
                                lock I&rsquo;d personally installed.
                            </p>
                        </section>
                    </FadeContent>

                    <Story icon={Tv} label="Live TV" title={"The “easy” win"}>
                        <p>
                            I scooped up a thousand-plus channels from the open IPTV lists that drift around the
                            internet like messages in bottles, filtered them down to actual entertainment (no
                            doomscrolling-the-news channels), and added a little{" "}
                            <span className="inline-flex items-center gap-1.5">
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                                green
                            </span>{" "}
                            /{" "}
                            <span className="inline-flex items-center gap-1.5">
                                <span className="inline-block w-2 h-2 rounded-full bg-rose-400" />
                                red
                            </span>{" "}
                            dot so you can tell at a glance which channels are alive — tap it to re-check. Unlike
                            everything else, these just work, which was suspicious enough that I checked twice.
                        </p>
                    </Story>

                    <Story icon={Zap} label="Performance" title="Making it feel instant">
                        <p>
                            Working wasn&rsquo;t enough — it was slow. Switch to a provider and you&rsquo;d stare at
                            grey boxes long enough to question your life choices. The fix was a mindset change:{" "}
                            <span className="text-zinc-200">
                                show whatever&rsquo;s cached instantly, then quietly refresh in the background.
                            </span>
                        </p>
                        <p>
                            I stopped the cache from deleting its own homework, trimmed the timeouts, loaded images
                            straight from the phone, and pre-warmed the other tabs while you weren&rsquo;t looking.
                            Half-a-minute waits turned into about a second.
                        </p>
                    </Story>

                    <Story icon={RefreshCw} label="Self-update" title="The trick I’m quietly smug about">
                        <p>
                            I never want to ship an update just to change what&rsquo;s featured. So the Top 10 rows
                            read a single file I host — I edit it, every phone updates, no app store involved. And on
                            launch the app checks for a newer build and offers it up with a friendly popup.{" "}
                            <span className="text-zinc-200">
                                It basically patches itself, like a Tamagotchi that fixes its own bugs.
                            </span>
                        </p>
                    </Story>
                </div>

                {/* Where it is now */}
                <FadeContent>
                    <section className="mt-12 rounded-2xl border border-[#a78bfa]/20 bg-gradient-to-b from-[#a78bfa]/[0.07] to-transparent px-6 py-7">
                        <SectionLabel icon={Sparkles}>Where it is now</SectionLabel>
                        <p className="text-zinc-300 text-sm sm:text-[15px] leading-relaxed">
                            Six services, a cartoon vault, a thousand live channels — one app, one home screen, sharp
                            art, instant loads, and a little on-device lock-picking doing the impossible quietly in the
                            background. It started as &ldquo;I&rsquo;m tired of juggling apps, and tired of the
                            bill,&rdquo; and somewhere along the way became the most stubborn, satisfying thing
                            I&rsquo;ve ever built.
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

export default OliverFlixPage;
