"use client";

export default function Skills() {
  const skills = [
    "Next.js",
    "TypeScript",
    "MERN Stack",
    "PostgreSQL",
    "Tailwind CSS",
    "Shadcn UI",
    "Prisma",
    "Drizzle",
    "Git & GitHub",
  ];

  return (
    <section className="py-16" id="skills">
      <div className="max-w-4xl px-6 mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-bold transition bg-white border rounded-full shadow-sm text-neutral-950 hover:shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
