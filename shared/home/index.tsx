import { PageTransition } from "../page-transition";
import { Details } from "./details";
import { Hero } from "./hero";
import { NewProjects } from "./new-projects";
import { NewHero } from "./new-hero";
import { Projects } from "./projects";
import { NewDetails } from "./new-details";
import Image from "next/image";
import { PROJECTS_IMAGES } from "@/utils/PROJECTS";
import { MaskHero } from "./mask-hero";

export const HomePage = () => {
  return (
    <div>
      <PageTransition />
      {/* <MaskHero /> */}
      <NewHero />
      <Details />
      <NewProjects />
      {/* <Projects /> */}
    </div>
  );
};
