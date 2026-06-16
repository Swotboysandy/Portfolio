import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import GrainOverlay from "./components/animations/GrainOverlay";
import { MotionProvider } from "@/components/providers/motion-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

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
            <body className={`${inter.className} ${instrumentSerif.variable}`}>
                <GrainOverlay opacity={0.03} />
                <div aria-hidden className="bg-canvas" />
                <MotionProvider>
                    <SmoothScroll>
                        <div className="relative z-10">{children}</div>
                    </SmoothScroll>
                </MotionProvider>
            </body>
        </html>
    );
}
