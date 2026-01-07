"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectOverview = () => {
    const projectData = {
        caseStudies: [
            { name: "PracandyFlix", url: "https://github.com/Swotboysandy/pracandyflix" },
            { name: "YoYoMusic", url: "https://github.com/Swotboysandy/yoyomusic" },
        ],
        sideProjects: [
            { name: "PracandyWalls", url: "https://github.com/Swotboysandy/pracandywalls" },
            { name: "Portfolio Website", url: "https://github.com/Swotboysandy/Portfolio" },
        ]
    };
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto gap-8 sm:gap-10 px-4 sm:px-7 py-6 md:py-10 ">
                        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                            <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary/60 uppercase font-medium">SELECTED PROJECTS</p>
                            <div className="flex flex-col gap-2.5">
                                {projectData?.caseStudies?.map((value: any, index: any) => {
                                    return (
                                        <Link key={index} href={value?.url} className="group flex items-center gap-2">
                                            <h4>{value?.name}</h4>
                                            <Image src={"/images/icon/tile-arrow-icon.svg"} alt="tile-icon" width={24} height={24} className="invert group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                            <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary/60 uppercase font-medium">OTHER WORKS</p>
                            <div className="flex flex-col gap-2.5">
                                {projectData?.sideProjects?.map((value: any, index: any) => {
                                    const isComingSoon = value?.comingSoon;

                                    const content = (
                                        <div className="group flex flex-wrap items-center gap-2">
                                            <h4 className={`${isComingSoon ? 'text-muted-foreground' : 'text-primary'}`}>
                                                {value?.name}
                                            </h4>
                                            {!isComingSoon ? (
                                                <Image
                                                    src={"/images/icon/tile-arrow-icon.svg"}
                                                    alt="tile-icon"
                                                    width={24}
                                                    height={24}
                                                    className="invert group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                                                />
                                            ) : (
                                                <div className="py-1.5 px-3 bg-muted rounded-lg">
                                                    <p className="text-xs md:text-base font-normal text-muted-foreground">Coming Soon</p>
                                                </div>
                                            )}
                                        </div>
                                    );

                                    return isComingSoon ? (
                                        <div key={index}>{content}</div>
                                    ) : (
                                        <Link key={index} href={value?.url} className="group">
                                            {content}
                                        </Link>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectOverview