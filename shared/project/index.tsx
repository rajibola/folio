"use client";

import { getNextProject, getProject } from "@/utils/PROJECTS";
import gsap from "gsap";
import { Hero } from "./hero";
import { Info } from "./info";
import { NextProject } from "./next-project";
import { LargeImage } from "./large-image";
import { Showcase } from "./showcase";

export const Project = ({ slug }: { slug: string }) => {
  const preview = gsap.timeline();
  let project = getProject(slug);
  let nextProject = getNextProject(slug);

  if (!project) return false;

  return (
    <div>
      <Hero title={project?.title} name={project.name} />
      <Info
        timeline={preview}
        image={project.images[2]}
        tools={project.tools}
      />
      <LargeImage
        image={project.images[3] ? project?.images[3] : project.images[1]}
      />
      <Showcase images={project.images} tag={project.tag} />
      {/* <NextProject project={nextProject} /> */}
    </div>
  );
};
