"use client";

import { PROJECTS_IMAGES } from "@/utils/PROJECTS";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

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
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRefs.current,
        { scale: 1.6 },
        {
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        }
      );

      gsap.fromTo(
        overlayRefs.current,
        { y: 0 },
        {
          y: "100%",
          duration: 0.4,
          ease: "power2.out",
          delay: 0.2,
          stagger: 0.1,
        }
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div style={oswald.style} className="min-h-screen">
      <div className="w-full min-h-screen px-10 text-cream">
        <div
          ref={containerRef}
          className="grid grid-cols-3 grid-rows-[repeat(5,_95px)] mt-24 gap-x-10"
        >
          {[0, 6, 4].map((index, i) => (
            <div
              key={i}
              className={`bg-white row-span-${i + 3} relative overflow-hidden`}
            >
              <Image
                ref={(el) => (imageRefs.current[i] = el)}
                className="w-full h-full object-cover absolute"
                src={PROJECTS_IMAGES[index].image}
                alt=""
                fill
              />

              <div
                ref={(el) => (overlayRefs.current[i] = el)}
                className="absolute top-0 bg-black w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-[148px] col-span-2 leading-[0.9] tracking-[-0.04em] font-bold">
            <div className="p-0">
              FRONT
              <span style={playfair.style} className="italic font-light ml-4">
                end
              </span>
            </div>
            <h1>DEVELOPER</h1>
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
