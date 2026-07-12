import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import GrainOverlay from "./components/animations/GrainOverlay";
import { MotionProvider } from "@/components/providers/motion-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
    weight: "400",
    style: "italic",
    subsets: ["latin"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "Sunny Singh | Full Stack Developer",
    description: "Portfolio of Sunny Kishor Singh, a Full Stack Developer specializing in React, Next.js, and React Native",
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="dark" style={{ colorScheme: 'dark' }}>
            <head>
                {/* Apply a saved light-theme preference before first paint — avoids a flash of the wrong theme. Default (no saved preference) stays dark, matching the server-rendered class above. */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
                    }}
                />
            </head>
            <body className={`${inter.className} ${instrumentSerif.variable}`}>
                <GrainOverlay opacity={0.03} />
                <div aria-hidden className="bg-canvas" />
                <ThemeToggle />
                <MotionProvider>
                    <SmoothScroll>
                        <div className="relative z-10">{children}</div>
                    </SmoothScroll>
                </MotionProvider>
            </body>
        </html>
    );
}
