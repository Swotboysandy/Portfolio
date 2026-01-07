"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeContent from "../../animations/FadeContent";

const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const experienceData = [
        {
            role: "Frontend Developer",
            company: "DraftssTech Applications Pvt. Ltd.",
            companyUrl: "https://draftss.com",
            location: "India",
            startDate: "Jul 2025",
            endDate: "Present",
            isPresent: true,
            summary: "Leading frontend projects using React, Next.js, Webflow, WordPress, Shopify, and Framer. Collaborating with teams for UI/UX best practices, mentoring developers, and delivering high-performance responsive websites optimized for speed and SEO."
        },
        {
            role: "Full Stack Web Developer",
            company: "Sukan (Netherlands)",
            companyUrl: "https://sukan.eu",
            location: "Remote",
            startDate: "Nov 2023",
            endDate: "Jun 2025",
            isPresent: false,
            summary: "Built responsive WordPress sites with custom themes and ACF. Developed interfaces using HTML5, CSS3, JavaScript, jQuery. Integrated HubSpot, Stripe, PayPal with REST APIs. Optimized performance via caching, lazy loading, SSL, and Core Web Vitals. Managed Git deployments across staging and production."
        },
        {
            role: "Freelance Web Developer",
            company: "Self-employed",
            companyUrl: null,
            location: "Remote",
            startDate: "2021",
            endDate: "2023",
            isPresent: false,
            summary: "Built custom WordPress and WooCommerce sites for e-commerce clients. Customized PHP functions and shortcodes. Integrated Razorpay, Stripe, PayPal gateways. Delivered end-to-end projects including hosting, analytics, and SEO."
        }
    ];

    return (
        <section className="py-8">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                <FadeContent>
                    <h2 className="text-zinc-500 text-xs uppercase tracking-wider mb-4">Experience</h2>
                </FadeContent>

                <div className="space-y-3">
                    {experienceData.map((exp, index) => (
                        <FadeContent key={index} delay={index * 100}>
                            <div className="border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">
                                {/* Header */}
                                <div className="px-4 py-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                        <h3 className="text-white text-sm font-medium">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                                            {exp.isPresent && (
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                            )}
                                            <span>{exp.startDate} – {exp.endDate}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-500 text-xs mt-1">
                                        {exp.companyUrl ? (
                                            <a href={exp.companyUrl} target="_blank" className="hover:text-[#a78bfa] transition-colors">
                                                {exp.company}
                                            </a>
                                        ) : (
                                            <span>{exp.company}</span>
                                        )}
                                        <span className="text-zinc-700">·</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Know More Button */}
                                <button
                                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                    className="w-full px-4 py-1.5 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 transition-all"
                                >
                                    <span>{expandedIndex === index ? 'Less' : 'More'}</span>
                                    <ChevronDown
                                        className={`w-3 h-3 transition-transform duration-200 ${expandedIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Expandable Summary */}
                                <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                                    <p className="px-4 pb-3 pt-2 text-xs text-zinc-400 leading-relaxed">
                                        {exp.summary}
                                    </p>
                                </div>
                            </div>
                        </FadeContent>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience