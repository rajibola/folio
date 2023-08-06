"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef } from "react";
import { SlidingText } from "../hero/SlidingText";
import { Button } from "@/shared/button";
import { Magnetic } from "@/shared/magnetic";

const phrase: string =
  "Hi, I'm Ridwan Ajibola. A frontend developer that focuses on building responsive cross-platform mobile applications and websites that makes user Experience realistic.";

export const Details = () => {
  let refs: React.MutableRefObject<any[]> = useRef([]);
  const container: React.MutableRefObject<null> = useRef(null);

  const createAnimation = useCallback(() => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top center`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [createAnimation]);

  const splitLetters = useCallback((word: string): JSX.Element[] => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-20"
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  }, []);

  const splitWords = useCallback(
    (phrase: string): JSX.Element[] => {
      let body: JSX.Element[] = [];
      phrase.split(" ").forEach((word, i) => {
        const letters = splitLetters(word);
        body.push(
          <p
            className="font-bold m-0 mr-[1vw] text-[3.5vw] leading-tight"
            key={word + "_" + i}
          >
            {letters}
          </p>
        );
      });
      return body;
    },
    [splitLetters]
  );

  return (
    <main
      ref={container}
      className="flex flex-col h-screen items-center justify-center relative"
    >
      <div className="flex flex-wrap w-2/3">{splitWords(phrase)}</div>

      <Magnetic>
        <Button className="mt-3">
          <p>Hello</p>
        </Button>
      </Magnetic>
    </main>
  );
};
