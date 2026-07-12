import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Experience from "../components/home/experience";
import Education from "../components/home/education";

const ExperiencePage = () => {
  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="max-w-2xl mx-auto px-5 sm:px-7">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-500 dark:text-zinc-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-2">Experience &amp; Education</h1>
        <p className="text-neutral-600 dark:text-zinc-400 text-sm">
          My roles, freelance work, and studies over the years.
        </p>
      </div>

      <Experience />
      <Education />
    </main>
  );
};

export default ExperiencePage;
