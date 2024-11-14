"use client";
import { ButtonComponent } from "@/shared/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal } from "./modal";
import { Project } from "./project";
import { Playfair_Display } from "next/font/google";
import { Magnetic } from "@/shared/magnetic";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import MarqueeImages from "@/shared/marquee";
import { PROJECTS_COUNT } from "@/utils/PROJECTS";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  fallback: ["latin"],
});

interface Project {
  title: string;
  src: string;
  color: string;
  tag: string;
}

const projects: Project[] = [
  {
    title: "Kindred B2B Website",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1690796371/portfolio/screenshot-2023-07-31-at-102726-64c78056b4649_iljqex.webp",
    color: "#b1b1b1",
    tag: "Website",
  },
  {
    title: "Clane Website",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690592/portfolio/1_pt9d3q.webp",
    color: "#8C8C8C",
    tag: "Website",
  },
  {
    title: "ClanePos",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690680/portfolio/1_vld49j.webp",
    color: "#EFE8D3",
    tag: "Mobile",
  },
  {
    title: "ClanePay",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690549/portfolio/1_lhexk2.webp",
    color: "#706D63",
    tag: "Mobile",
  },
];

export const Projects = () => {
  const router = useRouter();
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <div className="md:w-5/6 flex flex-col gap-14 w-full">
          <div className="w-full flex flex-col items-center justify-center">
            {projects.map((project, index) => {
              return (
                <Project
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  tag={project.tag}
                  key={index}
                />
              );
            })}
          </div>
          <Modal modal={modal} projects={projects} />

          <Magnetic>
            <div className="self-center">
              <ButtonComponent
                count={projects.length}
                onClick={() => router.push(`/projects`)}
              >
                <Magnetic>
                  <p className="z-10 relative font-light">
                    More work{" "}
                    <div className="absolute -right-3 -top-1 opacity-50 text-[9.5px]">
                      {PROJECTS_COUNT}
                    </div>
                  </p>
                </Magnetic>
              </ButtonComponent>
            </div>
          </Magnetic>
        </div>
      </main>
    </>
  );
};
