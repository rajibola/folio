"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import { useCallback, useEffect, useRef } from "react";

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
            className="font-medium m-0 mr-[1vw] md:text-[3.5vw] md:leading-tight text-[24px] leading-10"
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
      <div className="w-2/3 flex gap-6">
        <div
          style={oswald.style}
          className="flex flex-wrap text-center justify-center"
        >
          {splitWords(phrase)}
        </div>
        {/* <Magnetic>
          <a
            className="self-start"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ridwan-ajibola-a10616191/"
            target="_blank"
          >
            <ButtonComponent
              className="bg-accent-light"
              style={{
                height: "120px",
                width: "120px",
              }}
            >
              <Magnetic>
                <ArrowUpRightIcon className="z-10" />
              </Magnetic>
            </ButtonComponent>
          </a>
        </Magnetic> */}
      </div>
    </main>
  );
};
