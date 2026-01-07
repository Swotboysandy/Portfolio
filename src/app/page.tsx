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

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto px-5 sm:px-7 text-center">
          <p className="text-zinc-500 text-sm inline-flex items-center gap-1.5">
            © 2025 Sunny Kishor Singh. Crafted with <IoHeart className="w-4 h-4 text-zinc-400" />
          </p>
        </div>
      </footer>
    </main>
  )
}

export default Page