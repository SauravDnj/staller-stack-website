import type { Metadata } from "next";
import {
  Manrope,
  Space_Grotesk,
  JetBrains_Mono,
  Inter,
  Inter_Tight,
} from "next/font/google";
import { ReactLenis } from "lenis/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisScrollSync } from "@/components/LenisScrollSync";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import "./globals.css";

// Nebula theme fonts (site-wide default)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Legacy fonts — kept loaded only so the frozen <header> can keep its
// original typography via the .header-legacy CSS variable scope.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Staller Stack — AI-First IT Solutions | Web, Cloud, AI & Cybersecurity",
  description:
    "Staller Stack delivers cutting-edge IT solutions — web & app development, cloud & DevOps, cybersecurity, and AI/ML — to help businesses scale, secure, and innovate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ss-base text-ss-text">
        <ReactLenis root options={{ duration: 1.1, smoothWheel: true }}>
          <LenisScrollSync />
          <ScrollProgressBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
