"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionLabel from "../../section-label";

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
        <section className="py-10">
            <div className="max-w-2xl mx-auto px-5 sm:px-7">
                <SectionLabel>Experience</SectionLabel>

                <div className="space-y-3">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-zinc-700">
                            {/* Header */}
                            <div className="px-4 py-3.5">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                    <h3 className="text-white text-[15px] font-medium">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                                        {exp.isPresent && (
                                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                        )}
                                        <span>{exp.startDate} – {exp.endDate}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-400 text-[13px] mt-1">
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
                                className="w-full px-4 py-2 border-t border-zinc-800 flex items-center justify-between text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-all"
                            >
                                <span>{expandedIndex === index ? 'Show less' : 'Read more'}</span>
                                <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {/* Expandable Summary */}
                            <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-60' : 'max-h-0'}`}>
                                <p className="px-4 pb-4 pt-2 text-sm text-zinc-400 leading-relaxed">
                                    {exp.summary}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
