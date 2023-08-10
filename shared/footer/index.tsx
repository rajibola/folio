"use client";
import gsap from "gsap";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "../magnetic";
import { Button } from "../button";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  const [showOptions, setShowOptions] = useState(false);
  const inner = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(inner.current, {
      scrollTrigger: {
        trigger: wrapper.current,
        scrub: true,
        start: `40% bottom`,
        end: `bottom bottom`,
      },
      ease: "none",
      yPercent: -150,
      alpha: 0,
    });
  }, []);
  return (
    <div
      ref={wrapper}
      className="w-screen h-screen relative overflow-hidden flex items-center justify-center"
    >
      <div ref={inner} className="w-1/2 flex flex-col">
        <h1 className="text-[7vw] leading-none mb-4">Let's work together</h1>
        <div className="relative w-min">
          {showOptions ? (
            <div
              //   onMouseEnter={() => setShowOptions(true)}
              //   onMouseLeave={() => setShowOptions(false)}
              className="w-[150%] h-[150%] bg-white absolute right-0 rounded-full -top-[2%] -left-[2%]"
            />
          ) : (
            false
          )}
          <Magnetic>
            <a
              className="self-start"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ridwan-ajibola-a10616191/"
              target="_blank"
            >
              <Button
                className="bg-accent-light"
                style={{
                  height: "120px",
                  width: "120px",
                }}
                // onMouseEnter={() => setShowOptions(true)}
                // onMouseLeave={() => setShowOptions(false)}
              >
                <Magnetic>
                  <ArrowUpRightIcon className="z-10" />
                </Magnetic>
              </Button>
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};
