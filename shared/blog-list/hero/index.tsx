"use client";

import useMediaQuery from "@/hooks/useMediaHook";
import { useEffect, useRef } from "react";
import { hideText } from "@/utils/animations";
import gsap from "gsap";
import { splitText } from "@/utils/helpers";

export const Hero = () => {
  const textContainer = useRef<HTMLDivElement>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const timeline = gsap.timeline();

  const isDesktop = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    hideText(
      [textContainer.current?.children],
      isDesktop ? 94 : 85,
      1.5,
      -1.5,
      timeline
    );
    hideText(scroll.current, 11, 1, 0, timeline);

    return () => {
      timeline.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="text-white w-screen pb-[120px] pt-40 md:px-0 px-[10%]">
      <div className="max-w-[850px] w-full mx-auto font-graphik">
        <div
          ref={textContainer}
          className="md:text-[82px] text-[44px] md:leading-[94px] leading-[70px] font-thin md:my-[0.67em]"
        >
          {splitText("My Journey to Making Amazing Things Happen", 15).map(
            (line) => (
              <div key={line} className="md:h-[94px] h-[70px] overflow-hidden">
                <h1>{line}</h1>
              </div>
            )
          )}
        </div>
        <div ref={scroll} className="my-[2.3em] overflow-hidden h-[12px]">
          <h1 className="text-[11px] tracking-[2px] uppercase font-normal">
            SCROLL DOWN
          </h1>
        </div>
        {/* <div className="h-8 w-5 border rounded-full">
          <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1" />
        </div> */}
      </div>
    </section>
  );
};
