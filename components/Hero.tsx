"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        I&apos;m{" "}
        <TypeAnimation
          sequence={[
            "Mohammed Arfat",
            2000,
            "Next.js Developer",
            2000,
            "MERN Full Stack Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-blue-500"
        />
      </h1>

      <p className="max-w-2xl mb-8 text-lg sm:text-xl text-neutral-400">
        Passionate about building modern, scalable web applications with
        Next.js, TypeScript, and MERN stack. Currently seeking remote
        opportunities.
      </p>

      <div className="flex gap-4">
        <Button
          asChild
          size="lg"
          className="text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
        >
          <a
            href="https://drive.google.com/file/d/14FFO1zHPWYQQiZov6k0aA_JtP2XmRHnW/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowDownToLine className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-neutral-700 text-neutral-200 hover:bg-neutral-800 rounded-xl"
        >
          <a href="mailto:arfat19118@gmail.com">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </a>
        </Button>
      </div>
    </section>
  );
}
