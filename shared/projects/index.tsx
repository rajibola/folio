"use client";

import gsap from "gsap";
import { Gallery } from "./gallery";
import { Hero } from "./hero";

export const Projects = () => {
  const timeline = gsap.timeline();
  return (
    <div className="w-screen bg-black overflow-hidden">
      <Hero timeline={timeline} />
      <Gallery />
    </div>
  );
};
