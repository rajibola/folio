"use client";

import { PROJECTS_IMAGES } from "@/utils/PROJECTS";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export const MaskHero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // First animation: expand `rect1` to cover full screen width
      tl.to("#rect1", {
        attr: { x: "0%", width: "100%" },
        duration: 1,
        ease: "power3.out",
      })
        .to("#rect1", {
          attr: { x: "37%", width: "21%" },
          duration: 1,
          ease: "power3.out",
        })
        .to("rect", {
          attr: { y: "-100%" },
          duration: 2,
          stagger: 0.2,
          ease: "power3.out",
        });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-[#000] overflow-hidden"
    >
      <svg className="absolute top-0 left-0 w-full h-full">
        <defs>
          <mask id="mask1" width="100" height="100">
            <rect
              x="0%" // Initial horizontal position
              y="0%"
              width="100%" // Initial width
              height="100%"
              fill="grey"
              id="rect1"
            />
            <rect
              x="58%"
              y="0%"
              width="21%"
              height="100%"
              fill="grey"
              id="rect2"
            />
            <rect
              x="79%"
              y="0%"
              width="21%"
              height="100%"
              fill="grey"
              id="rect3"
            />
          </mask>
        </defs>
      </svg>

      {/* The Image component is now being masked */}
      <Image
        src={PROJECTS_IMAGES[1].image}
        alt="Example Image"
        layout="responsive"
        width={800}
        height={600}
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ mask: "url(#mask1)", WebkitMask: "url(#mask1)" }}
      />
    </div>
  );
};
