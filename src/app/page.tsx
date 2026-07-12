import Link from "next/link";
import Image from "next/image";
import { ProfileFooter } from "./components/home/profile-footer";

const links = [
  { label: "projects", href: "/projects", external: false },
  { label: "experience", href: "/experience", external: false },
  { label: "github", href: "https://github.com/Swotboysandy", external: true },
  { label: "twitter", href: "https://x.com/swotboysandy", external: true },
  { label: "linkedin", href: "https://www.linkedin.com/in/s7-chauhan/", external: true },
  { label: "resume", href: "/Resume_Sunny_Kishor_Singh.pdf", external: true },
];

// Bold, shimmering inline highlight (warm ink on light, white on dark) — works
// for internal and external links.
const Highlight = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const cls = "font-bold underline-offset-4 hover:underline";
  const inner = <span className="home-shimmer">{children}</span>;
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={href} target="_blank" className={cls}>
      {inner}
    </a>
  );
};

const Page = () => {
  return (
    <main className="relative flex min-h-dvh flex-col">
      {/* Centered content fills the screen above the footer */}
      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-6 py-8">
        {/* Avatar */}
        <div className="relative mb-6">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-full opacity-70 blur-lg"
            style={{ background: "radial-gradient(circle, rgba(96,165,250,0.45), transparent 70%)" }}
          />
          <div
            className="relative isolate h-[88px] w-[88px] overflow-hidden rounded-full border border-white/10 shadow-2xl"
            style={{ background: "radial-gradient(circle at 50% 32%, #243456, #0b1222)" }}
          >
            <Image
              src="/images/dolphin.jpg"
              alt="Sunny Kishor Singh"
              fill
              sizes="88px"
              priority
              className="object-cover mix-blend-screen"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-center text-[2.75rem] italic leading-none tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Sunny Kishor Singh
        </h1>

        {/* Subtitle */}
        <p className="mt-2.5 text-sm tracking-wide text-neutral-600 dark:text-[#cbd5e1]">software engineer &amp; creative technologist</p>

        {/* Bio */}
        <div className="mt-7 w-full space-y-4 text-left text-[15.5px] leading-[1.7] text-neutral-700 dark:text-[#cbd5e1] [&_p]:text-neutral-700 dark:[&_p]:text-[#cbd5e1]">
          <p>
            I&rsquo;m Sunny, a software engineer who likes turning rough ideas into things people can actually
            use. Most of what I make lives on the web or on a phone, and I care about how it feels just as much as
            whether it works.
          </p>
          <p>
            By day I lead the frontend at{" "}
            <Highlight href="https://draftss.com">DraftssTech</Highlight>, building fast, sharp sites for clients.
            By night I chase my own ideas:{" "}
            <Highlight href="/projects/oliverflix">OliverFlix</Highlight>, one home screen for six streaming
            services, and <Highlight href="/projects/instalaz">Instalaz</Highlight>, an AI tool that runs social
            posting end to end. The rest of my experiments live on{" "}
            <Highlight href="https://github.com/Swotboysandy">GitHub</Highlight>.
          </p>
          <p>
            I&rsquo;m happiest buried in a problem that&rsquo;s supposedly impossible, like decrypting video on the
            device itself or making a sluggish app feel instant. If it&rsquo;s stubborn, I probably want a crack at it.
          </p>
          <p>
            Right now I&rsquo;m after my next role or collaboration. If any of this sounds like your kind of thing,
            write to me at{" "}
            <Highlight href="mailto:sunnysinghchauhan760@gmail.com">sunnysinghchauhan760@gmail.com</Highlight>. I
            read every message.
          </p>
        </div>

        {/* Link row (replaces the floating dock) */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm text-neutral-600 dark:text-[#cbd5e1]">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              className="transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Location + live clock pinned at the bottom */}
      <ProfileFooter />
    </main>
  );
};

export default Page;
