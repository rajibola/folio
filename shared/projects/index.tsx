"use client";

import { Header } from "../header";
import gsap from "gsap";
import { Hero } from "./hero";
import { Gallery } from "./gallery";

export const Projects = () => {
  const timeline = gsap.timeline();
  return (
    <div className="w-screen bg-black overflow-hidden">
      {/* <Header /> */}
      <Hero timeline={timeline} />
      <Gallery />
    </div>
  );
};
