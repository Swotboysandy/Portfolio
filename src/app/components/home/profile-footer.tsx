"use client";
import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

// Location + live IST clock, pinned to the bottom of the profile screen.
export function ProfileFooter() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () =>
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                })
            );
        update();
        const id = setInterval(update, 30000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative z-10 flex shrink-0 items-center justify-center gap-2 pb-6 pt-6 text-xs text-neutral-600 dark:text-[#cbd5e1]">
            <IoLocationSharp className="h-3.5 w-3.5 text-neutral-400 dark:text-zinc-600" />
            <span>India</span>
            {time && (
                <>
                    <span className="text-neutral-300 dark:text-zinc-700">·</span>
                    <span className="tabular-nums">{time} IST</span>
                </>
            )}
        </div>
    );
}

export default ProfileFooter;
