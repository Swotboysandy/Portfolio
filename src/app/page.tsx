"use client";
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import { IoHeart } from "react-icons/io5"

const Page = () => {
  return (
    <main className="min-h-screen bg-[#09090b] relative z-10">
      <HeroSection />
      <Experience />
      <FeaturedWork />
      <AboutMe />
      <Education />

      {/* Footer — extra bottom padding so the floating dock never overlaps the text */}
      <footer className="mt-6 border-t border-zinc-800/80 pt-12 pb-36">
        <div className="max-w-2xl mx-auto px-5 sm:px-7">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-zinc-400">
              Let&rsquo;s build something together —{" "}
              <a href="mailto:sunnysinghchauhan760@gmail.com" className="font-medium text-[#a78bfa] hover:underline">
                get in touch
              </a>
            </p>
            <p className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
              © 2025 Sunny Kishor Singh · built with <IoHeart className="h-3.5 w-3.5 text-rose-400/70" /> &amp; Next.js
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Page