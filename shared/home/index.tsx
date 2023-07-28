import { PageTransition } from "../page-transition";
import { Hero } from "./hero";
import { Projects } from "./projects";

export const HomePage = () => {
  return (
    <div>
      <PageTransition />
      <Hero />
      <Projects />
    </div>
  );
};
