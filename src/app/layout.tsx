import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GrainOverlay from "./components/animations/GrainOverlay";

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sunny Singh | Full Stack Developer",
    description: "Portfolio of Sunny Kishor Singh, a Full Stack Developer specializing in React, Next.js, and React Native",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="dark" style={{ colorScheme: 'dark' }}>
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body className={inter.className}>
                <GrainOverlay opacity={0.03} />
                {children}
            </body>
        </html>
    );
}
