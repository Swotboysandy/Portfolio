"use client";
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
                <SectionLabel>Education</SectionLabel>

                <div className="space-y-3">
                    {educationData.map((edu, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-4 transition-colors hover:border-zinc-700">
                            <div>
                                <h3 className="text-white text-[15px] font-medium">{edu.degree}</h3>
                                <p className="text-zinc-400 text-[13px] mt-0.5">{edu.institution}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-zinc-400">
                                {edu.isCurrent && (
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                )}
                                <span>{edu.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
