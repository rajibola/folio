"use client";

import { PROJECTS_IMAGES } from "@/utils/PROJECTS";
import { useGSAP } from "@gsap/react";
import gsap, { Back, Bounce, Power3, Power4 } from "gsap";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import SplitType from "split-type";

const oswald = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
  fallback: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["latin"],
  style: ["italic", "normal"],
});

export const NewHero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitFrontRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      let splitFrontTextInstance: SplitType | null = null;

      if (splitFrontRef.current) {
        splitFrontTextInstance = new SplitType(splitFrontRef.current, {
          types: "chars",
        });
      }
      const tl = gsap.timeline();

      // Group all image animations to happen simultaneously
      tl.fromTo(
        ".image-list",
        { scale: 2 },
        { scale: 1, duration: 1.7, ease: Power3.easeOut, stagger: -0.5 },
        "<" // Start at the same time as the previous animation
      ).fromTo(
        ".image-list",
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.5,
          ease: Power3.easeOut,
          stagger: -0.5,
        },
        "<" // Start at the same time as the previous animations
      );

      // Animate hero title after all images are complete
      tl.fromTo(
        splitFrontTextInstance?.chars as HTMLElement[],
        { y: "100%" },
        {
          y: 0,
          duration: 1,
          ease: Back.easeOut,
          stagger: 0.02,
        },
        "-=1.5"
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div ref={containerRef} style={oswald.style} className="min-h-screen">
      <div className="w-full min-h-screen px-10 text-cream">
        <div className="grid grid-cols-3 grid-rows-[repeat(5,_95px)] mt-24 gap-x-10">
          {[3, 4, 6].map((index, i) => (
            <div
              key={i}
              style={{
                gridRow: `span ${i + 3}`,
              }}
              className={`row-span-3 relative overflow-hidden image-container`}
            >
              <Image
                className="w-full h-full object-cover absolute image-list opacity-90"
                src={PROJECTS_IMAGES[index].image}
                alt=""
                fill
                style={{ clipPath: "inset(0 0 100% 0)" }}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 leading-[0.9] tracking-[-0.04em] font-bold overflow-hidden">
            <div
              ref={splitFrontRef}
              className="text-[148px] leading-[0.9] tracking-[-0.04em] font-bold"
            >
              <h1 className="p-0 overflow-y-hidden">
                FRONT
                <span style={playfair.style} className="italic font-light px-4">
                  end
                </span>
              </h1>
              <h1 className="split">DEVELOPER</h1>
            </div>
          </div>

          <div className="self-end">
            <div style={oswald.style} className="font-light">
              As a frontend developer using modern ideas simplicity design and
              universal visual identification tailored to dedicated and current
              market.
            </div>

            <div className="h-12 px-6 border w-fit flex items-center rounded-full mt-10 tracking-wider">
              Let&apos;s discuss
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
