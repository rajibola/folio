import { PageTransition } from "../page-transition";
import { Details } from "./details";
import { Hero } from "./hero";
import { NewHero } from "./new-hero";
import { Projects } from "./projects";

export const HomePage = () => {
  return (
    <div>
      {/* <PageTransition /> */}
      <NewHero />
      <Details />
      <Projects />
    </div>
  );
};
