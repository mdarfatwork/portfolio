"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        <p className="text-neutral-400 mt-2">
          A selection of my recent work, combining modern tools with practical
          problem-solving.
        </p>
      </div>

      <div className="space-y-16">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="grid gap-8 md:grid-cols-2 items-center"
          >
            <div className="aspect-video w-full">
              <iframe
                src={project.linkedinPost}
                height="400"
                width="100%"
                allowFullScreen
                title={project.name}
                className="rounded-xl w-full h-full"
                loading="lazy"
              />
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-neutral-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techstack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-neutral-800 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-neutral-700 text-neutral-200 hover:bg-neutral-800 rounded-xl"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 4 && (
        <div className="text-center mt-12">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-xl"
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </Button>
        </div>
      )}
    </section>
  );
}
