"use client";
import { Button } from "@/shared/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal } from "./modal";
import { Project } from "./project";

// export const Projects = () => {
//   return (
//     <div className="w-screen h-screen flex">
//       <h1>Projects</h1>
//     </div>
//   );
// };

interface Project {
  title: string;
  src: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Kindred B2B Website",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1690796371/portfolio/screenshot-2023-07-31-at-102726-64c78056b4649_iljqex.webp",
    color: "#b1b1b1",
  },
  {
    title: "Clane Website",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690592/portfolio/1_pt9d3q.webp",
    color: "#8C8C8C",
  },
  {
    title: "ClanePos",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690680/portfolio/1_vld49j.webp",
    color: "#EFE8D3",
  },
  {
    title: "ClanePay",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690549/portfolio/1_lhexk2.webp",
    color: "#706D63",
  },
];

export const Projects = () => {
  const router = useRouter();
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex h-screen items-center justify-center flex-col ">
      <div className="w-[1000px] flex flex-col items-center justify-center">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
      <Button className="mt-10" onClick={() => router.push(`/projects`)}>
        <p>See more</p>
      </Button>
    </main>
  );
};
