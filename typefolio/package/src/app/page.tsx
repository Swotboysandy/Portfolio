import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"

const page = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <Divider />
      <div className="bg-background-subtle">
        <AboutMe />
      </div>
      <Divider />
      <FeaturedWork />
      <Divider />
      <div className="bg-background-subtle">
        <Experience />
      </div>
      <Divider />
      <Education />
      <Divider />
      <div className="bg-background-subtle">
        <ProjectOverview />
      </div>
      <Divider />
    </main>
  )
}

export default page