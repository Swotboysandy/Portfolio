"use client";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturedWork = () => {
    const featureWork = [
        {
            title: "PracandyFlix – Netflix-inspired Android streaming app",
            description: "Built with Kotlin. Features dark premium UI, Lottie animations, fullscreen video support, and local caching.",
            roles: ["Android Developer", "Kotlin", "UI/UX"],
            image: "/images/feature-work/pracandyflix_simple.png",
            url: "https://github.com/Swotboysandy/pracandyflix"
        },
        {
            title: "YoYoMusic – Real-time, community-powered music room",
            description: "Built with HTML, CSS, JavaScript, Node.js. Features real-time sync, voting system, and live playback.",
            roles: ["Full Stack Developer", "Node.js", "WebSockets"],
            image: "/images/feature-work/yoyomusic_simple.png",
            url: "https://github.com/Swotboysandy/yoyomusic"
        }
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
                            <Button asChild variant={"outline"} className="h-auto">
                                <a href={"/Resume_Sunny_Kishor_Singh.pdf"} download className="py-3 px-5">
                                    Download Resume
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {featureWork?.map((value: any, index: number) => {
                            const isRightCol = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                >
                                    <Link href={value?.url} target="_blank" className="overflow-hidden">
                                        <Image
                                            src={value?.image}
                                            alt="Image"
                                            width={490}
                                            height={300}
                                            className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <Link href={value?.url} target="_blank"><h4>{value?.title}</h4></Link>
                                        <div className="flex">
                                            <p className="text-primary/70">{value?.roles?.join(', ')}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork