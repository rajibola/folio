// "use client";

import { getNextProject, getProject } from "@/utils/PROJECTS";
import gsap from "gsap";
import { Hero } from "./hero";

export const Project = ({ slug }: { slug: string }) => {
  const preview = gsap.timeline();
  let project = getProject(slug);
  console.log(project);
  let nextProject = getNextProject(slug);

  return (
    <div>
      <Hero title={project?.title} name={project?.name} />
      {/* <Info timeline={preview} image={project?.images[2]} />
      <LargeImage
        image={project?.images[3] ? project?.images[3] : project?.images[1]}
      />
      <Showcase images={project?.images} tag={project?.tag} />
      <NextProject project={nextProject} /> */}
    </div>
  );
};
