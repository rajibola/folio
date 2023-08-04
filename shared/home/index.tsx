import { PageTransition } from "../page-transition";
import { Details } from "./details";
import { Hero } from "./hero";
import { Projects } from "./projects";

export const HomePage = () => {
  return (
    <div>
      <PageTransition />
      <Hero />
      <Details />
      <Projects />
    </div>
  );
};
