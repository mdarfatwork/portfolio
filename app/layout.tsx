import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Arfat | Full Stack Developer (MERN & Next.js)",
  description:
    "Portfolio of Mohammed Arfat, a passionate Full Stack Developer skilled in Next.js, TypeScript, MERN Stack, PostgreSQL, Tailwind CSS, and modern web technologies. Explore my projects, skills, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-200 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
