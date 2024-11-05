import { PageTransition } from "../page-transition";
import { Details } from "./details";
import { Hero } from "./hero";
import { NewProjects } from "./new-projects";
import { NewHero } from "./new-hero";
import { Projects } from "./projects";
import { NewDetails } from "./new-details";

export const HomePage = () => {
  return (
    <div>
      {/* <PageTransition /> */}
      <NewHero />
      <Details />
      <NewProjects />
      {/* <Projects /> */}
    </div>
  );
};
