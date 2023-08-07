"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useLayoutEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const Info: FC<{
  image: string;
  timeline: gsap.core.Timeline;
  tools: string[];
}> = ({ image, timeline, tools }) => {
  const bgImage = useRef<HTMLImageElement>(null);
  const imageCover = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    timeline
      .to(bgImage.current, {
        duration: 1,

        scrollTrigger: {
          trigger: imageCover.current,
          scrub: true,
          start: "top 80%",
          toggleActions: "play none none reverse",
          id: "info-B",
        },
      })
      .to(bgImage.current, {
        duration: 1,
        marginTop: "10px",

        scrollTrigger: {
          trigger: bgImage.current,
          scrub: 1,
          start: "top 80%",
          toggleActions: "play none none reverse",
          id: "info-A",
        },
      });

    return () => ScrollTrigger.create({}).kill();
  }, [timeline]);

  return (
    <section className="text-white w-screen pt-40">
      <div
        ref={imageCover}
        className="h-[80vh] max-w-[1140px] w-full relative flex items-center overflow-hidden p-0 m-0"
      >
        <div className="w-[120%] md:w-[120%] h-[120%] relative">
          <Image
            ref={bgImage}
            src={image}
            alt={image}
            width={700}
            height={800}
            className="min-w-full min-h-full bg-cover bg-center object-cover -mt-[30%]"
          />
        </div>
      </div>

      <div className="w-full bg-[#4b4b4b] -mt-[50vh] pt-[50vh]">
        <div className="flex-col md:flex-row flex justify-center items-center md:px-[20vw] px-[10%]  max-w-[1280px] mx-auto pt-[160px] pb-[120px]">
          <div className="text-white w-1/3 font-graphik text-[1.25rem] leading-[1.8] self-start mb-6 md:mb-0">
            <h1>Tools</h1>
          </div>
          <div className="text-white md:w-96 w-auto font-graphik md:text-[1.25rem] text-base leading-[1.8] flex flex-wrap gap-3">
            {tools.map((item, i) => (
              <div
                key={i}
                className="px-2 py-[4px] bg-white/20 backdrop-blur-md rounded-lg text-white uppercase text-[10px] font-semibold tracking-wide"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
