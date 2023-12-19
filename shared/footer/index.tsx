"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "../button";
import { Magnetic } from "../magnetic";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const [showOptions, setShowOptions] = useState(false);
  const inner = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const animation = gsap.fromTo(
      inner.current,
      { yPercent: -150, alpha: 0 },
      {
        scrollTrigger: {
          trigger: wrapper.current,
          scrub: true,
          start: "40% bottom",
          end: "bottom bottom",
        },
        ease: "none",
        yPercent: 0,
        alpha: 1,
      }
    );

    return () => {
      animation.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={wrapper}
      className="w-screen h-screen relative overflow-hidden flex items-center justify-center"
    >
      <div ref={inner} className="md:w-1/2 flex flex-col w-2/3">
        <h1 className="md:text-[7vw] md:leading-none md:mb-4 text-[58px] font-bold leading-none mb-8">
          Let's work together
        </h1>
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
              href="mailto:rajibola1997@gmail.com"
              target="_blank"
            >
              <ButtonComponent
                className="bg-accent-light w-[120px] h-[120px]"
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
              </ButtonComponent>
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};
