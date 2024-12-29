"use client";

import { ButtonComponent } from "@/shared/button";
import { Magnetic } from "@/shared/magnetic";
import { useGSAP } from "@gsap/react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap, { Quart } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display } from "next/font/google";
import { useRef, useState } from "react";
import SplitType from "split-type";
import { Modal } from "./modal";
import { Project } from "./project";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["latin"],
  style: ["italic", "normal"],
});

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  src: string;
  color: string;
  tag: string;
}

const projects: Project[] = [
  // {
  //   title: "Sabi",
  //   src: "https://res.cloudinary.com/dwn5whgwh/image/upload/v1684690549/portfolio/1_lhexk2.webp",
  //   color: "#706D63",
  //   tag: "Mobile",
  // },
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

export const NewProjects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitFrontRef = useRef<HTMLDivElement | null>(null);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const router = useRouter();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: true,
          // pin: true,
        },
      });

      let splitFrontTextInstance = null;

      if (splitFrontRef.current) {
        splitFrontTextInstance = new SplitType(splitFrontRef.current, {
          types: "chars,lines",
        });
      }

      tl.from(splitFrontTextInstance?.chars as HTMLElement[], {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: Quart.easeOut,
        stagger: 0.05,
      })
        .to(splitFrontTextInstance?.lines as HTMLElement[], {
          zoom: 0.5,
          opacity: 1,
          duration: 1,
          ease: Quart.easeOut,
          stagger: 0.08,
        })
        .fromTo(
          ".project",
          {
            opacity: 0,
            yPercent: 50,
            x: 20,
          },
          {
            opacity: 1,
            yPercent: 0,
            x: 0,
            duration: 0.7,
            ease: Quart.easeOut,
            stagger: 0.2,
          },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <>
      <section
        ref={containerRef}
        className="h-screen text-white w-full p-10 grid grid-cols-3 gap-10 relative"
      >
        <div>
          <div className="sticky top-0 py-12">
            <div
              ref={splitFrontRef}
              className="text-[80px] leading-[1] tracking-[-0.04em] font-bold overflow-hidden mb-10"
            >
              <h1>Featured</h1>
              <h1 style={playfair.style} className="italic">
                Works
              </h1>
            </div>
            <Magnetic>
              <ButtonComponent
                className="bg-accent-light w-[120px] h-[120px]"
                style={{
                  height: "120px",
                  width: "120px",
                }}
                onClick={() => router.push(`/projects`)}
              >
                <Magnetic>
                  <ArrowUpRightIcon className="z-10" />
                </Magnetic>
              </ButtonComponent>
            </Magnetic>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex flex-col gap-14 w-full">
            <div className="w-full flex flex-col items-center justify-center">
              {projects.map((project, index) => (
                <Project
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  tag={project.tag}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Modal modal={modal} projects={projects} />
    </>
  );
};
