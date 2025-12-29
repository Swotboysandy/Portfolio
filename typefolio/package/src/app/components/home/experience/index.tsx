"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

const Experience = () => {
    const experienceData = [
        {
            icon: "/images/icon/exp-frontend.svg",
            role: "Frontend Developer | DraftssTech Applications Pvt. Ltd.",
            location: "India",
            startYear: "Jul 2025",
            endYear: "Present",
            bulletPoints: [
                "Lead and execute frontend projects using React, Next.js, Webflow, WordPress, Shopify, and Framer.",
                "Collaborate with cross-functional teams to ensure UI/UX best practices and design consistency.",
                "Manage and mentor developers when needed, ensuring code quality and timely delivery.",
                "Deliver high-performance, responsive websites optimized for speed and SEO."
            ]
        },
        {
            icon: "/images/icon/exp-fullstack.svg",
            role: "Full Stack Web Developer | Sukan (Netherlands)",
            location: "Remote",
            startYear: "Nov 2023",
            endYear: "Jun 2025",
            bulletPoints: [
                "Developed and maintained responsive WordPress websites from scratch using custom themes, ACF, and plugin development.",
                "Built user-friendly front-end interfaces using HTML5, CSS3, JavaScript, and jQuery aligned to designer wireframes.",
                "Integrated third-party tools (HubSpot, Stripe, PayPal) and custom APIs for marketing automation and reporting.",
                "Optimized site speed and security via caching, lazy loading, SSL setup, and Core Web Vitals best practices.",
                "Managed Git-based version control, deployments, and troubleshooting across staging and production servers.",
                "Worked cross-functionally with designers, marketers, and PMs in a remote agile environment."
            ]
        },
        {
            icon: "/images/icon/exp-freelance.svg",
            role: "Freelance Web Developer",
            location: "Remote",
            startYear: "2021",
            endYear: "2023",
            bulletPoints: [
                "Built custom WordPress and WooCommerce websites for clients in e-commerce, personal brands, and services industries.",
                "Customized PHP functions, hooks, and shortcodes for dynamic functionality and admin flexibility.",
                "Automated product flows and integrated Razorpay, Stripe, and PayPal payment gateways.",
                "Created responsive landing pages and blogs, improving conversion rates and engagement.",
                "Provided end-to-end project delivery including hosting setup, analytics, SEO, and client handoff."
            ]
        }
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Experience</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
                            {experienceData?.map((value: any, index: any) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                                        <Image src={value?.icon} alt="icon" width={32} height={19} className="invert" />
                                        <div className="flex flex-wrap gap-5 items-center justify-between">
                                            <h5>{value?.role}</h5>
                                            <div className="flex flex-wrap items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                                                <div className={`w-4 h-2 rounded-sm ${value?.endYear == "Present" ? 'bg-primary' : 'bg-primary/20'} `} />
                                                <div className="flex items-center gap-1.5">
                                                    <p className="text-sm xs:text-base text-primary/70">{value?.startYear} – {value?.endYear}</p>
                                                    <span className="text-primary/20">·</span>
                                                    <div className="flex items-center gap-1">
                                                        <Image src="/images/icon/map-icon.svg" alt="location" width={14} height={14} className="invert opacity-70" />
                                                        <p className="text-sm xs:text-base text-primary/70">{value?.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            {value?.bulletPoints?.map((point: any, index: any) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-base font-normal text-primary/70"
                                                    >
                                                        <span className="w-2.5 h-2.5 text-primary/30">•</span>
                                                        {point}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience