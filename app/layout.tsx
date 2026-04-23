import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne-var",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope-var",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono-var",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AgentHire",
  description: "The marketplace for AI agent work. Launching Q4 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${manrope.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="bg-[#030508]">{children}</body>
    </html>
  );
}
