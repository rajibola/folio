"use client";

import PROJECTS from "@/utils/PROJECTS";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ProjectCard } from "../project-card";

export const Gallery = () => {
  const button = useRef<HTMLDivElement>(null);
  const buttonText = useRef<HTMLDivElement>(null);
  const items = useRef<HTMLDivElement[]>([]);
  const page = useRef<HTMLDivElement>(null);

  const addToRef = (el: HTMLDivElement) =>
    el && !items.current.includes(el) && items.current.push(el);

  useLayoutEffect(() => {
    var moveCircle = (e: any) => {
      return gsap.to(button.current, {
        duration: 0.25,
        css: {
          left: e.clientX,
          top: e.clientY,
          display: "flex",
        },
      });
    };

    const pageCurrent = page.current;
    const buttonCurrent = button.current;
    const buttonTextCurrent = buttonText.current;
    const itemsCurrent = items.current;
    page.current?.addEventListener("mousemove", moveCircle);
    items.current?.forEach(function (el: any) {
      el.addEventListener("mouseover", () => {
        gsap.to(button.current, {
          duration: 0.25,
          scale: 1,
          autoAlpha: 1,
        });
      });

      el.addEventListener("mouseout", () => {
        gsap.to(button.current, {
          duration: 0.25,
          scale: 0.5,
          autoAlpha: 0,
        });
      });

      el.addEventListener("mousedown", () => {
        gsap.to(button.current, {
          duration: 0.5,
          css: { transform: `translate(-50%, -50%) scale(0.75)` },
        });

        gsap.to(buttonText.current, {
          duration: 0.25,
          css: { opacity: 1 },
        });
      });

      el.addEventListener("mouseup", () => {
        gsap.to(button.current, {
          duration: 1,
          css: { background: `transparent` },
        });

        gsap.to(button.current, {
          duration: 0.5,
          css: { transform: `translate(-50%, -50%) scale(1)` },
        });

        gsap.to(buttonText.current, {
          duration: 0.25,
          css: {
            opacity: 1,
          },
        });
      });
    });

    return () => {
      buttonCurrent?.removeEventListener("mousemove", moveCircle);
      pageCurrent?.removeEventListener("mousemove", moveCircle);
      itemsCurrent?.forEach((el: any) => {
        el.removeEventListener("mouseover", moveCircle);
        moveCircle(el).kill();
      });
      gsap.killTweensOf(buttonCurrent);
      gsap.killTweensOf(buttonTextCurrent);
      gsap.killTweensOf(pageCurrent);
      gsap.killTweensOf(itemsCurrent);
    };
  }, []);

  return (
    <div
      ref={page}
      className="px-[10vw] w-full max-w-[1280px] mx-auto font-graphik -mb-10 h-fit"
    >
      <div className="flex flex-wrap">
        {PROJECTS.map(({ title, name, tools, images }, i) => {
          const hasMargin = (i + 1) % 2 === 0;
          return (
            <ProjectCard
              data={{ title, name, tools, images, margin: hasMargin }}
              key={i}
              ref={addToRef}
            />
          );
        })}
      </div>

      <div
        ref={button}
        className="@apply pointer-events-none fixed -translate-x-2/4 -translate-y-2/4 justify-center items-center w-[120px] h-[120px] hidden rounded-[50%] border-[1.5px] border-solid border-[white] left-2/4 top-2/4 font-graphik focus:outline-0"
      >
        <div ref={buttonText}>More</div>
      </div>
    </div>
  );
};
