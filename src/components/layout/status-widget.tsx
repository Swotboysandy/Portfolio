"use client";
import React, { useEffect, useState } from "react";
import { IconClock, IconEye } from "@tabler/icons-react";

export function StatusWidget() {
    const [time, setTime] = useState<string>("");
    const [viewers, setViewers] = useState<number>(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Simulate a total view count that "persists" slightly
        // Start with a base of ~8000 and add a random amount
        const baseCount = 8420;
        const randomSeed = Math.floor(Math.random() * 50);
        const storedViews = typeof window !== 'undefined' ? localStorage.getItem('site_views') : null;

        let currentViews = storedViews ? parseInt(storedViews) : baseCount + randomSeed;

        // Increment view count for this "session"
        if (!storedViews) {
            currentViews += 1;
            if (typeof window !== 'undefined') {
                localStorage.setItem('site_views', currentViews.toString());
            }
        }

        setViewers(currentViews);

        // Update time for India (IST)
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                })
            );
        };

        updateTime();
        const clockInterval = setInterval(updateTime, 1000);

        return () => {
            clearInterval(clockInterval);
        };
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed top-3 right-3 sm:top-5 sm:right-6 z-40 flex items-center font-mono text-[10px] sm:text-xs text-zinc-400 select-none mix-blend-difference pointer-events-none">
            <div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">

                {/* View Count */}
                <div className="flex items-center gap-1.5">
                    <IconEye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-500" stroke={2} />
                    <span className="font-medium text-zinc-300">{viewers.toLocaleString()}</span>
                </div>

                {/* Separator */}
                <div className="h-3 w-[1px] bg-zinc-700" />

                {/* IST Clock */}
                <div className="flex items-center gap-1.5 min-w-[65px] sm:min-w-[75px]">
                    <span className="text-zinc-500">IND</span>
                    <span className="text-zinc-300 tabular-nums">{time}</span>
                </div>

            </div>
        </div>
    );
}
