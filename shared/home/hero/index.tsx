"use client";
import useMediaQuery from "@/hooks/useMediaHook";
import { hideText } from "@/utils/animations";
import { splitText } from "@/utils/helpers";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const textContainer = useRef<HTMLDivElement>(null);
  const timeline = gsap.timeline();

  const isDesktop = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    hideText(
      [textContainer.current?.children],
      isDesktop ? 94 : 85,
      1.5,
      4,
      timeline
    );

    return () => {
      timeline.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div
        ref={textContainer}
        className="md:text-[82px] text-[44px] md:leading-[94px] leading-[70px] font-thin md:my-[0.67em]"
        data-scroll
        data-scroll-speed={0.3}
      >
        {splitText(
          "Versatile Frontend Developer for Cutting-Edge Web and Mobile Applications",
          25
        ).map((line) => (
          <div key={line} className="md:h-[94px] h-[70px] overflow-hidden">
            <h1>{line}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
