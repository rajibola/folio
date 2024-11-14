"use client";

import { ButtonComponent } from "@/shared/button";
import { Magnetic } from "@/shared/magnetic";
import { PROJECTS_IMAGES } from "@/utils/PROJECTS";
import { useGSAP } from "@gsap/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import gsap, { Power3, Quart } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

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
  const splitIntroRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 3 });

      let splitFrontTextInstance: SplitType | null = null;
      let splitIntroTextInstance: SplitType | null = null;

      if (splitIntroRef.current) {
        splitIntroTextInstance = new SplitType(splitIntroRef.current, {
          types: "chars,lines",
        });
      }

      if (splitFrontRef.current) {
        splitFrontTextInstance = new SplitType(splitFrontRef.current, {
          types: "chars",
        });
      }

      tl.set([splitFrontRef?.current, splitIntroRef?.current, ".btn"], {
        opacity: 1,
      })
        .fromTo(
          ".image-list",
          { scale: 2 },
          { scale: 1, duration: 1.7, ease: Power3.easeOut },
          "<"
        )
        .fromTo(
          ".image-list",
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.5,
            ease: Power3.easeOut,
            // stagger: -0.2,
          },
          "<"
        )
        .from(
          splitFrontTextInstance?.chars as HTMLElement[],
          {
            yPercent: 100,
            duration: 1,
            ease: Quart.easeOut,
            stagger: 0.02,
          },
          "-=1.5"
        )
        .from(
          splitIntroTextInstance?.lines as HTMLElement[],
          {
            duration: 0.5,
            opacity: 0,
            yPercent: 100,
            ease: Power3.easeOut,
            stagger: 0.02,
          },
          "<"
        )
        .fromTo(
          ".btn",
          {
            opacity: 0,
            yPercent: 100,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
          },
          "<"
        );
    },
    { scope: containerRef, dependencies: [] }
  );

  const handleMailClick = () => {
    window.open(
      "mailto:rajibola1997@gmail.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      ref={containerRef}
      style={oswald.style}
      className="h-screen text-white w-full min-h-screen px-10 pb-10"
    >
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
              style={{ clipPath: "inset(100% 0 0 0)" }}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 leading-[0.9] tracking-[-0.04em] font-bold overflow-hidden">
          <div
            ref={splitFrontRef}
            className="text-[148px] leading-[0.85] tracking-[-0.04em] opacity-0 text-white/90"
          >
            <div className="flex overflow-y-hidden">
              <h1 className="p-0">FRONT</h1>
              <span style={playfair.style} className="italic font-light px-4">
                end
              </span>
            </div>
            <h1 className="split">DEVELOPER</h1>
          </div>
        </div>

        <div className="self-end mb-4">
          <div
            ref={splitIntroRef}
            style={oswald.style}
            className="font-light text-white leading-7 opacity-0 mb-6"
          >
            As a frontend developer using modern ideas simplicity design and
            universal visual identification tailored to dedicated and current
            market.
          </div>

          <Magnetic>
            <div className="self-start w-fit">
              <ButtonComponent
                // count={4}
                onClick={handleMailClick}
              >
                <Magnetic>
                  <div className="inline-flex items-center gap-2 z-10">
                    <p className="relative font-light">Let&apos;s discuss </p>
                    <GlobeAltIcon className="w-4 h-4 text-white" />
                  </div>
                </Magnetic>
              </ButtonComponent>
            </div>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};
