"use client";
import FadeContent from "../../animations/FadeContent";
import SectionLabel from "../../section-label";

const Education = () => {
    const educationData = [
        {
            degree: "MCA (Master of Computer Applications)",
            institution: "VIT Vellore",
            year: "Expected 2026",
            isCurrent: true
        },
        {
            degree: "BCA (Bachelor of Computer Applications)",
            institution: "MGM College of IT & Management, Patna",
            year: "2024",
            isCurrent: false
        }
    ];

    return (
        <section className="py-10">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                <FadeContent>
                    <SectionLabel>Education</SectionLabel>
                </FadeContent>

                <div className="space-y-3">
                    {educationData.map((edu, index) => (
                        <FadeContent key={index} delay={index * 100}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3.5 transition-colors hover:border-zinc-700">
                                <div>
                                    <h3 className="text-white text-sm font-medium">{edu.degree}</h3>
                                    <p className="text-zinc-500 text-xs mt-0.5">{edu.institution}</p>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-zinc-500">
                                    {edu.isCurrent && (
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                    )}
                                    <span>{edu.year}</span>
                                </div>
                            </div>
                        </FadeContent>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education