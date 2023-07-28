"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Project } from "./project";
import { Modal } from "./modal";

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
    title: "C2 Montreal",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690592/portfolio/1_pt9d3q.webp",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690680/portfolio/1_vld49j.webp",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690549/portfolio/1_lhexk2.webp",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684691043/portfolio/1_ugjdc6.webp",
    color: "#706D63",
  },
];

export const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex h-screen items-center justify-center">
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
    </main>
  );
};
