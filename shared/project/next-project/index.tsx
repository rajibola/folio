"use client";

import PROJECTS from "@/utils/PROJECTS";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { BlobCursor } from "../blob-cursor";
import { usePathname } from "next/navigation";

export const NextProject: FC<{ project: (typeof PROJECTS)[0] }> = ({
  project,
}) => {
  const pathname = usePathname();
  gsap.registerPlugin(ScrollTrigger);
  const [active, setActive] = useState(false);
  const parent = useRef<HTMLDivElement>(null);
  const next = useRef<HTMLDivElement>(null);
  const nextImge = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    const nextCurrent = nextImge.current;
    gsap.from(nextCurrent, {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: next.current,
        scrub: 0.3,
      },
    });

    return () => {
      gsap.killTweensOf(nextCurrent);
    };
  }, [pathname]);

  return (
    <div
      ref={parent}
      className="overflow-hidden cursor-pointer block bg-black"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onClick={() =>
        window.open(
          `/projects/${project.name.split(" ").join("-").toLowerCase()}`,
          "_self"
        )
      }
    >
      <section
        ref={next}
        className="h-[100vh] w-screen overflow-hidden relative"
      >
        <Image
          src={project.images[0]}
          ref={nextImge}
          className="block h-[125%] width-[100%] absolute will-change-transform object-cover opacity-90"
          sizes="(max-width: 768px) 100vw"
          height={1200}
          width={1700}
          alt="next project"
        />
        <BlobCursor ref={parent} />
      </section>
    </div>
  );
};
